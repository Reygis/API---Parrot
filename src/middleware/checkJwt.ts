import {Request, Response, NextFunction} from "express"
import * as jwt from "jsonwebtoken"
import config from "../config/config"
export const checkJwt = (req:Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    
    if (!authorization){
        return res.status(403).json({message: "User not logged in"});
    }

    const token = authorization.split(" ")[1];

    let jwtPayload
    
    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret)
        res.locals.jwtPayload = jwtPayload
    } catch (error) {
        res.status(401).send
    }

    const {iduser, email} = jwtPayload
    const newToken = jwt.sign({iduser, email}, config.jwtSecret,{
        expiresIn: "1h"
    })

    res.setHeader("token", newToken)

    next()
}