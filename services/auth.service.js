import { sendtheTokenMail } from "../controllers/mailController.js";
import Business from "../models/Business.js";
import Client from "../models/Client.js";
import Token from "../models/Token.js";
import { frontendUrl } from "../utils/others.js";
import bcrypt from 'bcryptjs'


export const requestPasswordReset = async (email, type) => {

    let businessUser;
    let clientUser;
    
    // we should do findone by email instead 

    if(type === 'business') businessUser = await Business.findOne({email});
    else if (type === 'client') clientUser = await Client.findOne({email});
    else return res.staus(404).json({
        status: false,
        message: "Client or Password Mail not found!"
    })

    // const businessUser = await Business.findOne({email});

    if(!businessUser || !clientUser) return res.status(404).json({
        status: false,
        message: 'user not found'
    })

    let token = await Token.findOne({ businessUser: businessUser._id}) || await Token.findOne({ clientUser: clientUser._id});

    if(token) await token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex")

    const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

    if(businessUser) {
        await new Token({
            businessId: businessUser._id,
            token: hash,
            createdAt: Date.now(),
        }).save();
    }

    if(clientUser) {
        await new Token({
            clientId: clientUser._id,
            token: hash,
            createdAt: Date.now(),
        }).save();
    }

    const link = `${frontendUrl}/passwordReset?token=${resetToken}&id=${businessUser._id}${clientUser._id}`;

    sendtheTokenMail({userName: businessUser.name || clientUser.name, userEmail: businessUser.email || clientUser.email, passwordResetLink: link })
    .catch(err =>   
        res.status(400).json({
            status: false,
            message: "unable to password reset mail"
        })
    )

    return res.status(200).json({
        status: true,
        message: 'password reset mail sent to client'
    })

}


export const resetPassword = async (Id, token, password, type) => {

    let passwordResetToken; 

    if(type === 'business') passwordResetToken = await Token.findOne({businessId: Id});
    else if (type === 'client') passwordResetToken = await Token.findOne({clientId: Id});
    else return res.staus(404).json({
        status: false,
        message: "Client or Password token not found!"
    })

    if(!passwordResetToken) return res.status(404).json({
        status: false,
        message: "Token not found"
    })

    console.log(passwordResetToken.token, token);

    const isValid = await bcrypt.compare(token, passwordResetToken.token)

    if(!passwordResetToken) return res.status(400).json({
        status: false,
        message: "Expired password reset token"
    })

    const hash = await bcrypt.hash(password, Number(bcryptSalt))

    const resetSuccess = await Business.updateOne(
        {_id: Id},
        {$set: {password: hash}},
        {new: true}
    )
    
    if(!resetSuccess) return res.status(400).json({
        status: false,
        message: "Expired password reset token"
    })


    // const business = await Business.findById({_id: Id})

    // sendPasswordResetTokenMail(business)

    await passwordResetToken.deleteOne();

    return res.status(200).json({
        status: true, 
        message: 'password reset successful'
    })

}