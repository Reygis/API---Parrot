import {Router} from "express"
import { AuthController } from "../controller/AuthController"
import { UserController } from "../controller/UserController"
import {checkJwt} from "../middleware/checkJwt"
import { checkRole } from "../middleware/checkRole"

const router = Router()

router.post("/login", new AuthController().login)
router.get("/users", [checkJwt, checkRole("ADMIN")], new UserController().listAll)
router.get("/:iduser", [checkJwt, checkRole("ADMIN")], new UserController().getOneById)

export default router