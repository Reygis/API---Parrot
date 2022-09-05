import {Router, Request, Response} from "express"
import { UserController } from "../controller/UserController"
// import auth from "./auth"
// import post from "./post"

const routes = Router()

routes.post("/user", new UserController().create )



export default routes