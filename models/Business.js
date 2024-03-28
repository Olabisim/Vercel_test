import mongoose, { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'


const businessSchema = new Schema({
        name: {type: String},
        email: {
            type: String, 
            unique: true,
            lowercase: true
        },
        description: {
            type: String
        },
        password: {
            type: String,
            select: false,
            minlength: 8,
        },
        contact_number: {
            type: Number
        },
        gender: {
            type: String,
        },
        bank_name: {
            type: String,
        },
        account_name: {
            type: String,
        },
        account_number: {
            type: String,
        },
        clientIds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Client'
            }
        ]
})

// mongoose middlewares

businessSchema.pre('save', async function (next ){

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)

    next();

})


businessSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};


export default model('Business', businessSchema)