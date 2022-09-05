import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import config from "../config/config";


export class AuthController {
     async login(req: Request, res: Response) {
        let {email, password} = req.body

        if(!(email && password)) {
            return res.status(404).send()
        }

        const userRepository = AppDataSource.getRepository(User)
        let user: User

        try {
            user = await userRepository.findOneOrFail({where: {email}})
        } catch (error) {
            return res.status(401).send("User not found!")
        }

        if(!user.checkIfUnencryptedPasswordIsValid(password)) {
            return res.status(401).send("Password or user not found")
        }

        const token = jwt.sign(
            {userId: user.iduser, email: user.email},
            config.jwtSecret,
            {expiresIn: "1h"}
        )

        return res.send(token)
    }
}

