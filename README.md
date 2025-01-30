# Bagify 👜

**Bagify** is an e-commerce platform for buying and selling bags and purses. It is built using `Node.js`, `Express.js`, `MongoDB`, `bcrypt`, and `JWT` for authentication.

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens), bcrypt for password hashing
- **Middleware:** Express.js, CORS, dotenv

---

## 📌 Features
- User authentication (Register/Login with hashed passwords)
- JWT-based authentication for secure API access
- CRUD operations for bag listings
- MongoDB for data storage
- Secure password handling with bcrypt

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/bagify.git
cd bagify
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bagify
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```sh
npm start
```

---

## 📜 License
MIT License

---

## ✨ Contribute
Feel free to fork, contribute, and create PRs!

```sh
git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch
```

---
