# Khusdeep's Bookstore

Khusdeep's Bookstore is a full-stack react web application that allows users to view a collection of books, add new books, and update or delete existing ones. The front-end is built with React, and the back-end is powered by an Express server with a MySQL database.

## Features

- Browse books in the bookstore
- View detailed descriptions and prices of books
- Add new books to the collection with image URLs
- Update details of existing books
- Delete books from the collection


Demo:
<img width="1680" alt="Screenshot 2024-02-01 at 9 12 16 PM" src="https://github.com/Khushdeep899/SimpleBookstore/assets/34795705/08f40cb6-1a9e-4d37-86a0-f65472e45d1e">

<img width="1680" alt="Screenshot 2024-02-01 at 9 12 32 PM" src="https://github.com/Khushdeep899/SimpleBookstore/assets/34795705/8ce2917d-def1-4c4a-a677-38297cfce25a">
<img width="1680" alt="Screenshot 2024-02-01 at 9 12 39 PM" src="https://github.com/Khushdeep899/SimpleBookstore/assets/34795705/f1329346-426a-46f1-8571-2dd2c96f633d">


## Installation

To get this project running on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm (usually comes with Node.js)
- MySQL

### Clone the repository

git clone https://github.com/khushdeep899/SimpleBookstore.git
cd SimpleBookstore


Install dependencies:

# Install back-end dependencies
cd backend
npm install

# Install front-end dependencies
cd client
npm install


Configure the database
Create a MySQL database and run the SQL scripts provided in the database.sql file to create the necessary tables and populate them with some initial data.


Run the application

# Start the back-end server
cd backend
npm start

# In another terminal, start the React front-end
cd client
npm start

now the app should now be running on http://localhost:3000.











