import {Schema, model} from 'mongoose'


const tokenSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Client"
    },
    businessId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Business"
    },
    token: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        required: true, 
        default: Date.now,
        expires: 900
    }
})


export default model('Token', tokenSchema)
