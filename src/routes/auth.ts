import {Router} from "express"
import { AuthController } from "../controller/AuthController"

const router = Router()

router.post("/", new AuthController().login )

export default router