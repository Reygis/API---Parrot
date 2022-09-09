import { Router } from 'express'
import { PostController } from '../controller/PostController'
import { checkJwt } from '../middleware/checkJwt'

const router = Router()

router.post("/", checkJwt, new PostController().create)
router.get("/", checkJwt, new PostController().listAll)
router.get("/myposts", checkJwt, new PostController().listAllByUserId)

export default router