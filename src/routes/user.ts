import {Router} from "express"
import { UserController } from "../controller/UserController"


const router = Router()

router.post("/create", new UserController().newUser)

export default router