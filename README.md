# 📚 MERN Stack Online BookStore Application

A full-stack Online BookStore application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application provides a secure and user-friendly platform where users can browse and purchase books, sellers can manage their book inventory, and administrators can monitor and manage the entire system.

---

## 🚀 Features

### 👤 User Module
- User Registration and Login
- Browse Available Books
- Search Books by Title, Author, or Category
- Add Books to Cart
- Place Orders
- View Order History

### 🛍️ Seller Module
- Seller Registration and Login
- Add New Books
- Update Book Details
- Delete Books
- View and Manage Uploaded Books
- Track Customer Orders

### 🛠️ Admin Module
- Admin Login
- Manage Users
- Manage Sellers
- Monitor Books
- View and Manage Orders
- Dashboard for System Management

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap / CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

---

## 📂 Project Structure

```
BookStore/
│
├── client/              # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/              # Node.js Backend
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Middleware/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/MERN-stack-online-bookstore-application.git
```

### Navigate to the Project

```bash
cd MERN-stack-online-bookstore-application
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📸 Application Modules

- Admin Dashboard
- Seller Dashboard
- User Dashboard
- Book Management
- Shopping Cart
- Order Management
- Authentication System

---

## 🎯 Future Enhancements

- Online Payment Integration
- Wishlist Feature
- Book Reviews and Ratings
- Email Notifications
- Order Tracking
- Responsive UI Improvements

---

## 👩‍💻 Author

**Neelima Pillapalem**

---

## 📄 License

This project is developed for educational and learning purposes.
