import {Router, Request, Response} from "express"

import auth from "./auth"
import user from "./user"
import post from "./post"
import admin from "./admin"
import register from "./register"

const routes = Router()

routes.use("/login", auth)
routes.use("/user", user)
routes.use("/post", post)
routes.use("/admin", admin)
routes.use("/register", register)

export default routes