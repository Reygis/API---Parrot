import "reflect-metadata"
import {AppDataSource} from "./data-source"
import app from "./app"

AppDataSource.initialize().then(()=>{
        app.listen(3030, ()=>{
            console.log("Server started on port 3030")
            console.log("Aperte CTRL+C 2 vezes para parar o servidor")
        })
        
    }).catch((error)=> console.log(error))