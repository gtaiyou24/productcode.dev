from fastapi import APIRouter

from common.port.adapter.resource import RootAPIResource


class HealthResource(RootAPIResource):
    def __init__(self):
        self.router = APIRouter(prefix="/health", tags=["Common"])
        self.router.add_api_route("/check", self.check, methods=["GET"])

    def check(self) -> dict:
        return {"health": True}
