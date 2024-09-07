import express  from 'express';
import { createContact, getContact, updateContact, deleteContact} from '../controllers/contactCrontoller.js';

const router = express.Router();

router.post('/createContact', createContact);
router.get('/getContact', getContact);
router.put('/updateContact', updateContact);
router.delete('/deleteContact', deleteContact);

export default router

