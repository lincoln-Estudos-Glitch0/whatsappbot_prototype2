import { Router } from "express"

let controller = Router()


controller.post('/webhook', (req, res) => {

    console.log(req.body)
    
    res.sendStatus(200)
})

controller.get('/webhook', (req, res) => {

    console.log(req.body)
})

export {controller as WebhookController }