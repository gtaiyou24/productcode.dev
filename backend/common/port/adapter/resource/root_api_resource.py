import abc

from fastapi import APIRouter


class RootAPIResource(abc.ABC):
    router: APIRouter
