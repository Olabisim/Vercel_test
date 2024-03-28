import { Schema, model } from 'mongoose'

const invoiceSchema = new Schema({
    issue_date: {type: String},
    due_date: {type: String},
    invoice_number: {type: String},
    purchase_order: {type: String},
    item_number: {type: Number},
    quantity: {type: Number},
    rate: {type: Number},
    discount: {type: String},
    amount: {type: Number},
    currency: {type: String},
    status: {type: String},
    address: {type: String},
    business_new: {type: Boolean, default: false},
    business_owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'Business'
    },
    client_id: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    client_owner_name: {
        type: String,
    }

})

export default model('Invoice', invoiceSchema)
