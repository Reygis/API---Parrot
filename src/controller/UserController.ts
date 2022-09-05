import { Request, Response } from 'express'
import { validate } from "class-validator";
import { userRepository } from "../repositories/userRepository";

import { User } from "../entity/User";

export class UserController {

    async create(req:Request, res: Response) {
        const {name,email,apartment,password,userphoto} = req.body

        let user: User = new User()
        user.name = name
        user.email= email
        user.password = password
        user.apartment = apartment
        user.userphoto = userphoto
        user.role = "USER"

        const errors = await validate(user)
        if(errors.length > 0) {
            return res.status(400).send(errors)
        }
        
        user.hashPassword()

        try {
            await userRepository.save(user)            
        } catch (error) {
            return res.status(400).send(error)
        }

        return res.status(201).send("User created")
    }
}