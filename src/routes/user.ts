import {Router} from "express"
import { UserController } from "../controller/UserController"
import {checkJwt} from "../middleware/checkJwt"

const router = Router()

router.post("/", new UserController().create )
router.put("/:iduser", checkJwt, new UserController().editUser)

export default router