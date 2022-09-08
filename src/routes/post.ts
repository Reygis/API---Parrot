import { Router } from 'express'
import { PostController } from '../controller/PostController'
import { checkJwt } from '../middleware/checkJwt'

const router = Router()

router.post("/",  new PostController().create)
router.get("/",  new PostController().listAll)
router.get("/:iduser",  new PostController().listAllByUserId)
// router.post("/", checkJwt, new PostController().create)
// router.get("/", checkJwt, new PostController().listAll)
// router.get("/:iduser", checkJwt, new PostController().listAllByUserId)
// removido autenticação para testes do front

export default router