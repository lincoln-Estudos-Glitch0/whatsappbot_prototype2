import { Router } from "express"
import { WebhookVerification } from "../components/classes/webhookVerificationClass.js"

let controller = Router()


controller.post('/webhook', (req, res) => {

    console.log(req.body)
    
    res.sendStatus(200)
})

controller.get('/webhook', async (req, res) => {

    if (await new WebhookVerification(req).verify()){
        res.sendStatus(200).send(req.query['hub.challenge'])
    }
    else {
        res.sendStatus(403)
    }
})

export {controller as WebhookController }