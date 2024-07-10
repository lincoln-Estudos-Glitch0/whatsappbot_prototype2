import dotenv from 'dotenv'

dotenv.config()
class WebhookVerification {

    #mode

    constructor (request){

        this.data = request.query
        this.#mode = 'subscribe'
    }

    async verify(){
        
        let tmp = this.data

        if(tmp['hub.mode'] == this.#mode){


            if(tmp['hub.verify_token'] == process.env.WEBHOOK_VERIFY_TOKEN){

                return true
            }
        }

        return false
    }
}

export { WebhookVerification }