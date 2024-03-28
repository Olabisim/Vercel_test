import Invoice from "../models/Invoice.js";


export const createNewInvoice = async (req, res, next) => {
        const {issue_date, due_date, invoice_number, purchase_order, item_number, quantity, rate,
        discount, amount, currency, status, address, business_owner_id, client_id, client_owner_name} = req.body;

        const newInvoice = await Invoice.create({
            issue_date, due_date, invoice_number, purchase_order, item_number, quantity, rate,
        discount, amount, currency, status, address, business_owner_id, client_id, client_owner_name
        })

        
        if(!newInvoice) return res.status(400).json({status: false, message: "Invoice failed, please try again"})

        return res.status(201).json({
            status: true,
            message: 'Invoice created successfully',
            data: {
                newInvoice
            }
        })

}

export const updateInvoice = async (req, res) => {
    const { id } = req.params;

    const data = req.body;

    const updateInvoice = await Invoice.findByIdAndUpdate(id, data, {new: true})

    if(!updateInvoice) return res.status(400).json({status: false, message: "cannot update Invoice, Please try again!"})

    res.status(200).json({
        status: true,
        message: "invoice updated successfully",
        data: {
            updateInvoice
        }
    })

}

export const deleteInvoice = async (req, res) => {
    
    const {id} = req.params;

    const allInvoice = await Invoice.findByIdAndDelete(id)

    if(!allInvoice) return res.status(400).json({
        status: false,
        message: "cannot delete invoice, please try again"
    })

    return res.status(200).json({
        status: true,
        message: 'invoice deleted',
        data: {
            allInvoice
        }
    })
}


export const getAllInvoices = async (req, res, next) => {

        const allInvoices = await Invoice.find({})

        if(!allInvoices) return res.status(404).json({status: false, message: "Cannot find Invoices, please try again"})

        return res.status(200).json({
            status: true,
            message: 'Invoice fetched successfully',
            data: {
                allInvoices
            }
        })

}
