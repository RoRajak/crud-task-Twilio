import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const freshSalesApi = axios.create({
  baseURL: `https://${process.env.FRESHSALES_DOMAIN}.myfreshworks.com/crm/sales/api/`,
  headers: {
    'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const createContactInCRM = async (contactData) => {
  
  try {
    const response = await freshSalesApi.post('contacts', { contact: contactData });
    return response.data;
  } catch (error) {
    console.log('Full error response:', error.response);
    
    throw new Error('Failed to create contact in CRM');
  }
};

const getContactFromCRM = async (contact_id) => {
  try {
    const response = await freshSalesApi.get(`contacts/${contact_id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get contact from CRM');
  }
};

const updateContactInCRM = async (contact_id, updatedData) => {
  try {
    const response = await freshSalesApi.put(`contacts/${contact_id}`, { contact: updatedData });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update contact in CRM');
  }
};

const deleteContactFromCRM = async (contact_id) => {
  try {
    await freshSalesApi.delete(`contacts/${contact_id}`);
    return { message: 'Contact deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete contact from CRM');
  }
};

export  {
  createContactInCRM,
  getContactFromCRM,
  updateContactInCRM,
  deleteContactFromCRM,
} 
