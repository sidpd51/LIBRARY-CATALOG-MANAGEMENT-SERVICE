import {PORT} from './config/serverConfig.js'
import express from 'express'


const setupAndStartServer = ()=>{
    const app = express()

    app.listen(PORT, ()=>{
        console.log(`server is listening on port no: ${PORT}`)
    })
}

setupAndStartServer()