# Node.js CRUD Application with Aiven MySQL Integration

This project is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and Express.js. The application connects to an Aiven-hosted MySQL database and manages contacts in a `contacts` table.

## Features
- **Create Contact**: Add a new contact to the MySQL database.
- **Read Contact**: Retrieve a contact from the database using the contact ID.
- **Update Contact**: Update the email and mobile number of a contact.
- **Delete Contact**: Remove a contact from the database.
- **Database Initialization**: Automatically creates the `contacts` table if it does not exist.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14+)
- MySQL database credentials from your Aiven account

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
Install the necessary Node.js dependencies using npm:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following environment variables based on your Aiven MySQL credentials:

```bash
PORT=<your-port>
DB_HOST=<your-mysql-host>
DB_PORT=<your-mysql-port>
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>
DB_NAME=<your-mysql-database-name>
FRESHSALES_DOMAIN=<your-freshalsedomain>
FRESHSALES_API_KEY=<your-api-key>
```

### 4. Database Initialization
The database initialization script will check if the `contacts` table exists in your Aiven MySQL database. If the table does not exist, it will create it automatically.

The table schema is as follows:
- `id`: INT (Auto Increment, Primary Key)
- `first_name`: VARCHAR(50)
- `last_name`: VARCHAR(50)
- `email`: VARCHAR(100)
- `mobile_number`: VARCHAR(15)

The initialization script is included in the `initializeDatabase()` function in `index.js`.

To run the database initialization, simply start the server:

```bash
npm run dev
```

### 5. Run the Application
To start the Node.js application in development mode, use:

```bash
npm run dev
```

This will start the server on port 3000 by default.

### 6. API Endpoints

The application exposes the following RESTful API endpoints:

1. **Create Contact**
   - **Endpoint**: `POST /createContact`
   - **Parameters**:
     - `first_name` (string): First name of the contact
     - `last_name` (string): Last name of the contact
     - `email` (string): Email address of the contact
     - `mobile_number` (string): Mobile number of the contact
     - `data_store` (string): Either 'CRM' or 'DATABASE' (for this app, use 'DATABASE')
   
2. **Get Contact**
   - **Endpoint**: `POST /getContact`
   - **Parameters**:
     - `contact_id` (number): The ID of the contact
     - `data_store` (string): Either 'CRM' or 'DATABASE' (for this app, use 'DATABASE')
   
3. **Update Contact**
   - **Endpoint**: `POST /updateContact`
   - **Parameters**:
     - `contact_id` (number): The ID of the contact
     - `email` (string): The new email address of the contact
     - `mobile_number` (string): The new mobile number of the contact
     - `data_store` (string): Either 'CRM' or 'DATABASE' (for this app, use 'DATABASE')
   
4. **Delete Contact**
   - **Endpoint**: `POST /deleteContact`
   - **Parameters**:
     - `contact_id` (number): The ID of the contact
     - `data_store` (string): Either 'CRM' or 'DATABASE' (for this app, use 'DATABASE')



### 7. Additional Notes

- **Error Handling**: Basic error handling is implemented for MySQL connection issues and CRUD operations.
- **SSL Configurations**: Adjust the `ssl` option in the MySQL configuration if your Aiven instance requires specific SSL settings. You can download from aiven and store into project folder



## Acknowledgments
- [Aiven for MySQL](https://aiven.io/mysql) for providing the managed MySQL service.
