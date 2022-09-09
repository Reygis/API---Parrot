import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { userRepository } from './../repositories/userRepository';
import { postRepository } from './../repositories/postRepository';

export class PostController {
    async create (req: Request, res: Response) {
        const {authorization} = req.headers;
        if (!authorization){return}
        const token = authorization.split(" ")[1];
        
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

        try {
            const newPost = postRepository.create({content,user})
            await postRepository.save(newPost)
        } catch (error) {
            return res.status(400).send('not suported content')            
        }

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
        const {authorization} = req.headers;
        if (!authorization){return}
        const token = authorization.split(" ")[1];
        
        let iduser

        try {
            const jwtPayload = <any>jwt.verify(token, config.jwtSecret)
            iduser = jwtPayload.userId
        } catch (error) {
            return res.status(401).send
        }
        
        let user

        try {
            user = await userRepository.findOneByOrFail({iduser})
        } catch (error) {
            return res.status(404).send("User not found")            
        }

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
