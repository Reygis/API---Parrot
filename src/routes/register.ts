import {Router, Request, Response} from "express"

const router = Router()

router.post("/", (req: Request, res: Response, next: Function): void => {
    if(!req.body.firstname){
        res.status(400).json('You need to pass first name')
    }
    res.status(201).json({message: "User is Created"})
})

export default router