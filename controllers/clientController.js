import Business from "../models/Business.js";


export const clientConnectBusiness = async (req, res, next) => {

        const {bill_to, issue_date, due_date, invoice_number, purchase_order, item_number, quantity, rate,
        discount, amount, currency, status, address, business_owner_id, client_transact_id } = req.body;
    
        const newInvoice = await Invoice.create({
            bill_to, issue_date, due_date, invoice_number, purchase_order, item_number, quantity, rate,
        discount, amount, currency, status, address, business_owner_id, client_transact_id, business_new: true
        })

        if(!newInvoice) return res.status(400).json({status: false, message: "Invoice failed, please try again"})
    
        return res.status(201).json({
            status: true,
            message: 'Invoice sent successfully',
            data: {
                newInvoice
            }
        })
    
}

export const clientToGetBusinessDetails = async (req, res) => {

    const {businessId} = req.body;

    const businessDetails = await Business.findById(businessId)

    console.log(businessDetails)

    return res.status(200).json({
        status: true,
        message: "business details fetched successfully",
        data: businessDetails
    })

}