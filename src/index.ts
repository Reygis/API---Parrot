import "reflect-metadata"
import express from "express"
import routes from "./routes"
import {AppDataSource} from "./data-source"

AppDataSource.initialize().then(()=>{
        const app = express()
        app.use(express.json())

        app.use(routes)

        app.listen(3030, ()=>{
            console.log("Server started on port 3030")
        })
    }).catch((error)=> console.log(error))