

import Business from "../models/Business.js";
import Client from "../models/Client.js";
import Invoice from "../models/Invoice.js";
import catchAsync from "../utils/catchAsync.js";
import generatePass from "../utils/others.js";
import { sendtheMail } from "./mailController.js";

// export const UpdateTodo = catchAsync(async (req, res, next) => {

//     const {id: paramsId} = req.params

//     const data = req.body;
    
//     const updateTodo = await Todo.findByIdAndUpdate(paramsId, data, {new: true});

//     if(!updateTodo) return res.status(400).json({status: false, message: "cannot update todo"})
  
//     res.status(200).json({
//             status: true,
//             data: {
//                     updateTodo,
//             },
//     });
// });

export const AllBusinessProfileInfo = async (req, res, next) => {

        const allInvoices = Invoice.find({})

        const OverdueInvoices = allInvoices.filter(e => e.status === 'overdue')
        
        // if(!OverdueInvoices) return res.status(400).json({status: false, message: "cannot update todo"})

        res.status(200).json({
            status: true,
            message: 'overdue invoices fetched',
            data: {
                OverdueInvoices
            }
        })
}

export const UpdateBusinessProfileInfo = async (req, res, next) => {
        const {_id, name, email, contact_number, gender } = req.body;

        // let data = {_id, name, email, contact_number, gender }

        const updatedBusinessProfile = await Business.findByIdAndUpdate(_id, {_id, name, email, contact_number, gender }, {new: true})

        if(!updatedBusinessProfile) return res.status(400).json({status: false, message: "cannot update todo"})

        res.status(200).json({
            status: true,
            message: 'updated business profile',
            data: {
                updatedBusinessProfile
            }
        })
}


export const UpdateBusinessBankInfo = async (req, res, next) => {

        const { _id, bank_name, account_name, account_number } = req.body;

        const updatedBusinessBankInfo = await Business.findByIdAndUpdate(_id, {_id, bank_name, account_name, account_number }, {new: true})

        if(!updatedBusinessBankInfo) return res.status(400).json({status: false, message: "cannot update todo"})

        res.status(200).json({
            status: true,
            message: 'updated bank details',
            data: {
                updatedBusinessBankInfo
            }
        })
}

// export const AllPageInfo = async (req)

// fetching client ids with business id and client id that is passed


// route to add an array of client to business model

export const AddNewClientToBusiness = async (req, res, next) => {
    const {name, email, businessId, phoneNo } = req.body;

    ////////////////////////////////////////////////////////////////
    // get list of subject business clients with the inputted business name and return res code 400 if a client with the inputted name exists
    const existingclient = await Client.find({businessId, name}) 

    if (existingclient.length > 0) {
        return res.status(400).json({
            status: "failed",
            message: "you already have a client with the provided name. kindly cross-check and retry",
        })
    }
    ////////////////////////////////////////////////////////////////

    let newPassword = generatePass()

    const newUser = await Client.create({
        name,
        email,
        password: newPassword,
        phoneNo,
        businessId
    })

    if(!newUser) {
        return res.status(401).json({
            status: false,
            message: 'Unable to create user, please try again!'
        })
    }

    const business = await Business.findById(businessId)
    business.clientIds.push(business._id)
    await business.save() // calling the save method on the business that was just updated with the client ID to persist data

    sendtheMail({businessName: business.name, clientEmail: email, password: newPassword })
    .catch(err =>   
        res.status(400).json({
          status: false,
          message: "unable to send mail to client"
        })
    )

    // return console.log('successful')
    let message = 'User created successfully and mail send to client';

    res.status(201).json({
        status: true,
        message
    })

}


// fetching all clients

export const FetchAllClients = async (req, res, next) => {
    
    const AllClient = await Client.find()
    const FilteredClient = AllClient.filter(x => x.businessId == req.params.Id)

    res.status(200).json({
        status: true,
        message: 'Client fetched successfully',
        data: FilteredClient
    })
}


// export const AllBusinessProfileInfo = async (req, res, next) => {

//     const allInvoices = Invoice.find({})

//     const OverdueInvoices = allInvoices.filter(e => e.status === 'overdue')
    
//     // if(!OverdueInvoices) return res.status(400).json({status: false, message: "cannot update todo"})

//     res.status(200).json({
//         status: true,
//         message: 'overdue invoices fetched',
//         data: {
//             OverdueInvoices
//         }
//     })
// }