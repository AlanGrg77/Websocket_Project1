import express from 'express'
import { Request, Response } from 'express'
import path from 'path'
import('../src/todo/todoController')


const app = express()

app.use(express.json())

app.set('views', path.join(__dirname,'views'))

app.set('view engine','ejs')

app.get('/',(req:Request,res:Response)=>{
    res.render('home.ejs')
})

export default app