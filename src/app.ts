import express from 'express'
import('../src/todo/todoController')


const app = express()

app.use(express.json())


export default app