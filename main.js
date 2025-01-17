import express from 'express'
import dotenv from 'dotenv'
import { WebhookController } from './src/controllers/webhookController.js'

dotenv.config()

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(WebhookController)

app.listen(process.env.SERVER_PORT, () => console.log(`server running at port: ${process.env.SERVER_PORT}`))
