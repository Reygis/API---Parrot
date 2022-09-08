import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const checkRole = (roles:string) =>{
    return async (req: Request, res: Response, next:NextFunction) => {
        const iduser = res.locals.jwtPayload.userId

        const userRepository = AppDataSource.getRepository(User)
        let user:User = await userRepository.findOneByOrFail({iduser})
        if (user.role !== roles){
            return res.status(401).send("Only a ADMIN is autorized to do this request")
        }

        if(roles.indexOf(user.role) > -1) {
            next()
        } else {
            res.status(401).send()
        }
    }
}