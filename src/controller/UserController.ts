import { Request, Response } from 'express'
import { validate } from "class-validator";
import { userRepository } from "../repositories/userRepository";

import { User } from "../entity/User";

export class UserController {    
    async listAll(req: Request, res: Response) {      
        const users = await userRepository.find({
            select: ["iduser", "name", "email", "apartment", "userphoto"]
        })

        return res.send(users)
    }

    async getOneById(req: Request, res: Response) {
        const iduser: number = parseInt(req.params.iduser, 10)

        let user: User

        try {
            user = await userRepository.findOneByOrFail({iduser})
        } catch (error) {
            return res.status(404).send("User not found")            
        }
       
        return res.send(user)
    }

    async create(req:Request, res: Response) {
        const {name, email, apartment, password, userphoto} = req.body
        const userExists = await userRepository.findOneBy({ email })

		if (userExists) {
			return res.status(400).send('E-mail já existe')
		}

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

    async editUser(req:Request, res:Response) {      
        
        const iduser: number = parseInt(req.params.iduser, 10)
       
        const {name, email, apartment, userphoto} = req.body   
        

        let user: User
        try {
            user = await userRepository.findOneByOrFail({iduser})
        } catch (error) {
            return res.status(404).send("User not found")
        }

        if(name) {
            user.name = name
        }

        if(email) {
            user.email = email
        }

        if(apartment) {
            user.apartment = apartment
        }

        if(userphoto) {
            user.userphoto = userphoto
        }

        const errors = await validate(user)
        if (errors.length > 0) {
            return res.status(400).send(errors)
        }

        try {
            await userRepository.save(user)    
        } catch (error) {
            return res.status(409).send("Usuario edited")
        }

        return res.status(201).send("edited user")
    }
}