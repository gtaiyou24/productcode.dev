import os
from contextlib import asynccontextmanager

from di import DIContainer, DI
from dotenv import load_dotenv
from fastapi.exceptions import RequestValidationError
from slf4py import create_logger
from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from sqlalchemy import create_engine, Engine
from starlette import status
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from common.application import UnitOfWork
from common.exception import SystemException
from common.port.adapter.persistence.repository.rdb import RDBUnitOfWork, DataBase
from common.port.adapter.resource.health import HealthResource


@asynccontextmanager
async def lifespan(app: FastAPI):
    """API 起動前と終了後に実行する処理を記載する"""
    load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

    DIContainer.instance().register(
        DI.of(UnitOfWork, {"RDB": RDBUnitOfWork}, RDBUnitOfWork)
    )

    if "RDB" in os.getenv("DI_PROFILE_ACTIVES", []):
        engine = create_engine(os.getenv("DATABASE_URL"), echo=os.getenv("SLF4PY_LOG_LEVEL", "DEBUG") == "DEBUG")
        DIContainer.instance().register(DI.of(Engine, {}, engine))
        DataBase.metadata.create_all(bind=engine)

    yield
    # 終了後


app = FastAPI(title="Product Code Backend", root_path=os.getenv("OPENAPI_PREFIX"), lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(HealthResource().router)


@app.exception_handler(SystemException)
async def system_exception_handler(request: Request, exception: SystemException):
    exception.logging()
    return JSONResponse(
        status_code=exception.error_code.http_status,
        content=jsonable_encoder(
            {
                "type": exception.error_code.name,
                "title": exception.error_code.message,
                "status": exception.error_code.http_status,
                "instance": str(request.url),
            }
        ),
    )


@app.exception_handler(ValueError)
async def value_error_handler(request: Request, error: ValueError):
    logger = create_logger()
    logger.error(error)
    return JSONResponse(
        status_code=400,
        content=jsonable_encoder(
            {"type": "CLIENT_2001", "title": "不正なリクエストです", "status": 400, "instance": str(request.url)}
        )
    )


@app.exception_handler(AssertionError)
async def assertion_error_handler(request: Request, error: AssertionError):
    logger = create_logger()
    logger.error(error)
    return JSONResponse(
        status_code=400,
        content=jsonable_encoder(
            {"type": "CLIENT_2002", "title": "不正なリクエストです", "status": 400, "instance": str(request.url)}
        ),
    )


@app.exception_handler(RequestValidationError)
async def request_validation_error_handler(request: Request, error: RequestValidationError):
    logger = create_logger()
    logger.error(error)
    return JSONResponse(content={}, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)


@app.exception_handler(Exception)
async def exception_handler(request: Request, error: Exception):
    logger = create_logger()
    logger.error(error)
    return JSONResponse(
        status_code=500,
        content=jsonable_encoder(
            {"type": "CLIENT_1000", "title": "エラーが発生しました", "status": 500, "instance": str(request.url)}
        ),
    )
