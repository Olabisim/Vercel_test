import express from 'express'
import { createNewInvoice, deleteInvoice, getAllInvoices, updateInvoice } from '../controllers/invoiceController.js';
import { AddNewClientToBusiness, FetchAllClients, UpdateBusinessBankInfo, UpdateBusinessProfileInfo } from '../controllers/businessController.js';
import { clientToGetBusinessDetails } from '../controllers/clientController.js';

const router = express.Router()

router.post('/invoice/new', createNewInvoice)
router.get('/invoice/all', getAllInvoices)
router.post('/invoice/update/:id', updateInvoice)
router.post('/invoice/delete/:id', deleteInvoice)
router.post('/business/updateProfile', UpdateBusinessProfileInfo)
router.post('/business/updateBankInfo', UpdateBusinessBankInfo)
router.post('/business/overdue', UpdateBusinessBankInfo)
router.post('/business/client/add', AddNewClientToBusiness)
router.get('/business/client/:Id', FetchAllClients)

// clients 

router.post('/client/getBusinessDetails', clientToGetBusinessDetails)


export default router;
