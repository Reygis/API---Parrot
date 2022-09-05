import { validate } from "class-validator";
import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";


export class UserController {

    async newUser(req: Request, res: Response) {
		const { name,email,apartment, password,userphoto } = req.body
        const role:string = "USER"
		try {
			const newUser = userRepository.create({ name,email,apartment, password,userphoto,role})
			await userRepository.save(newUser)

			return res.status(201).json(newUser)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}


    // async old(req:Request, res: Response) {
    //     const {} = req.body

    //     let user: User = new User()
    //     user.name = name
    //     user.email= email
    //     user.password = password
    //     user.apartment = apartment
    //     user.userphoto = userphoto
    //     user.role = 

    //     const errors = await validate(user)
    //     if(errors.length > 0) {
    //         return res.status(400).send(errors)
    //     }
        
    //     user.hashPassword()

    //     const userRepository = AppDataSource.getRepository(User)
    //     try {
    //         await userRepository.save(user)            
    //     } catch (error) {
    //         return res.status(400).send(error)
    //     }

    //     return res.status(201).send("User created")
    // }
}