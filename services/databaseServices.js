import db from "../config/dbConfig.js";

const createContactInDatabase = async (contactData) => {
  const { first_name, last_name, email, mobile_number } = contactData;
  const [result] = await db.query(
    "INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)",
    [first_name, last_name, email, mobile_number]
  );
  return { id: result.insertId, ...contactData };
};

const getContactFromDatabase = async (contact_id) => {
  const [rows] = await db.query("SELECT * FROM contacts WHERE id = ?", [
    contact_id,
  ]);
  return rows;
};

const updateContactInDatabase = async (contact_id, updatedData) => {
  const { email, mobile_number } = updatedData;
  await db.query(
    "UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?",
    [email, mobile_number, contact_id]
  );
  const [rows] = await db.query("SELECT * FROM contacts WHERE id = ?", [
    contact_id,
  ]);
  return rows;
};

const deleteContactFromDatabase = async (contact_id) => {
  await db.query("DELETE FROM contacts WHERE id = ?", [contact_id]);
  return { message: "Contact deleted successfully" };
};

export {
  createContactInDatabase,
  getContactFromDatabase,
  updateContactInDatabase,
  deleteContactFromDatabase,
};
