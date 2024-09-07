import {
  createContactInCRM,
  getContactFromCRM,
  updateContactInCRM,
  deleteContactFromCRM,
} from "../services/freshsalesServices.js";
import {
  createContactInDatabase,
  getContactFromDatabase,
  updateContactInDatabase,
  deleteContactFromDatabase,
} from "../services/databaseServices.js";

const createContact = async (req, res) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;

  try {
    let contact;
    if (data_store === "CRM") {
      contact = await createContactInCRM({
        first_name,
        last_name,
        email,
        mobile_number,
      });
    } else {
      contact = await createContactInDatabase({
        first_name,
        last_name,
        email,
        mobile_number,
      });
    }
    res
      .status(201)
      .json({ message: "Contact created successfully", data_store, contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getContact = async (req, res) => {
  console.log(req.body);

  const { contact_id, data_store } = req.body;

  try {
    let contact;
    if (data_store === "CRM") {
      contact = await getContactFromCRM(contact_id);
    } else {
      contact = await getContactFromDatabase(contact_id);
    }
    res
      .status(200)
      .json({ message: "Contact retrived successfully", data_store, contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateContact = async (req, res) => {
  const { contact_id, email, mobile_number, data_store } = req.body;
  console.log(contact_id, email, mobile_number, data_store);

  try {
    let updatedContact;
    if (data_store === "CRM") {
      updatedContact = await updateContactInCRM(contact_id, {
        email: email,
        mobile_number: mobile_number,
      });
    } else {
      updatedContact = await updateContactInDatabase(contact_id, {
        email: email,
        mobile_number: mobile_number,
      });
    }
    res
      .status(200)
      .json({
        message: "Contact updated successfully",
        data_store,
        contact: updatedContact,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  const { contact_id, data_store } = req.body;

  try {
    if (data_store === "CRM") {
      await deleteContactFromCRM(contact_id);
    } else {
      await deleteContactFromDatabase(contact_id);
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createContact, getContact, updateContact, deleteContact };
