import { Router } from "express"

let controller = Router()


controller.post('/webhook', (req, res) => {

    console.log(req.body)
    
    res.sendStatus(200)
})


export {controller as WebhookController }