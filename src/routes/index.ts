import {Router, Request, Response} from "express"
import { UserController } from "../controller/UserController"
import { AuthController } from "../controller/AuthController"
import { checkJwt } from "../middleware/checkJwt"

// import auth from "./auth"
// import post from "./post"

const routes = Router()

routes.get("/user", new UserController().listAll )
routes.get("/user/:iduser", new UserController().getOneById)
routes.post("/user", new UserController().create )
routes.put("/user/:iduser", new UserController().editUser)


routes.post("/login", new AuthController().login )


export default routes