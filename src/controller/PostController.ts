import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config'
import { userRepository } from './../repositories/userRepository';
import { postRepository } from './../repositories/postRepository';

export class PostController {
    async create (req: Request, res: Response) {
        const { authorization} = req.headers;
        if (!authorization){return}
        const token = authorization.split(" ")[1];
        // const token = <string>req.headers["bearer"]
        let iduser

        try {
            const jwtPayload = <any>jwt.verify(token, config.jwtSecret)
            iduser = jwtPayload.userId
        } catch (error) {
            return res.status(401).send
        }

        const user = await userRepository.findOneBy({iduser})
        const { content } = req.body

        if (!user) return res.status(404).json({message: 'User not found'})

        const newPost = postRepository.create({
            content,
            user
        })

        await postRepository.save(newPost)

        return res.status(201).json({message: 'Post created successfully'})
    }

    async listAll (req: Request, res: Response) {
        const posts = await postRepository.find({
            relations: {
                user: true
            },
            select: {
                user: {
                    iduser: true,
                    name: true,
                    apartment: true,
                    userphoto: true
                }
            }
        })
        return res.send(posts)
    }

    async listAllByUserId (req: Request, res: Response) {
        const iduser: number = parseInt(req.params.iduser, 10)
        const user = userRepository.findOneBy({iduser})

        if (!user) return res.status(404).json({message: 'User not found'})

        const posts = await postRepository.find({
            where: {
                user: {
                    iduser: iduser
                }
            }
        })
        return res.send(posts)
    }
}
