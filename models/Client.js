import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'


// const clientLinkedBusiness = new Schema({
//     type: Schema.Types.ObjectId,
//     ref: 'Business'
// })

const clientSchema = new Schema({
        name: {type: String},
        email: {type: String},
        phoneNo: {type: String},
        password: {
            type: String,
            select: false,
            minlength: 8,
        },
        businessId: {
          ref: 'Business',
          type: Schema.Types.ObjectId
        }
})


// mongoose middlewares

clientSchema.pre('save', async function (next ){

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)

    next();

})


clientSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };


export default model('Client', clientSchema)