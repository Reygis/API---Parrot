import {Router} from "express"
import { AuthController } from "../controller/AuthController"
import {checkJwt} from "../middleware/checkJwt"

const router = Router()

router.post("/", new AuthController().login )

export default router