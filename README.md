# 🎬 AuthVideo

A **Node.js + Express** backend API for  authentication — featuring JWT-based auth, email verification via Nodemailer, and MongoDB integration with Mongoose.

---

## 🚀 Features

- 🔐 JWT Authentication (Access & Refresh Tokens via cookies)
- 📧 Email verification using Nodemailer
- 🗄️ MongoDB database with Mongoose ODM
- 🍪 Cookie-based token management with `cookie-parser`
- 📋 HTTP request logging with Morgan
- 🔄 Auto-restart in development using Nodemon
- 🌿 Environment variable support via dotenv
- ES Module (`import`/`export`) syntax

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Runtime     | Node.js                 |
| Framework   | Express v5              |
| Database    | MongoDB + Mongoose v9   |
| Auth        | JSON Web Token (JWT)    |
| Email       | Nodemailer              |
| Dev Tool    | Nodemon                 |
| Logging     | Morgan                  |

---

## 📁 Project Structure

```
authvideo/
├── src/
│   ├── config/         # DB connection, environment config
│   ├── controllers/    # Route handler logic
│   ├── middleware/     # Auth middleware, error handlers
│   ├── models/         # Mongoose schemas (User, etc.)
│   └── routes/         # Express route definitions
├── server.js           # App entry point
├── package.json
├── .gitignore
└── .env                # Environment variables (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation

```bash
# Clone the repository
git clone https://github.com/arunz6/authvideo.git
cd authvideo

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authvideo

JWT_ACCESS_SECRET=your_access_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key

JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Run the Server

```bash
# Development (with auto-restart)
npm run dev

# Production
node server.js
```

Server runs at: `http://localhost:5000`

---

## 📡 API Endpoints

| Method | Endpoint                  | Description              | Auth Required |
|--------|---------------------------|--------------------------|---------------|
| POST   | `/api/auth/register`      | Register new user        | ❌            |
| POST   | `/api/auth/login`         | Login & get tokens       | ❌            |
| POST   | `/api/auth/logout`        | Logout & clear cookies   | ✅            |
| GET    | `/api/auth/verify-email`  | Verify email via token   | ❌            |
| POST   | `/api/auth/refresh-token` | Refresh access token     | ✅ (cookie)   |
| GET    | `/api/auth/me`            | Get logged-in user info  | ✅            |

---

## 🔒 Authentication Flow

```
1. User registers  →  Verification email sent via Nodemailer
2. User verifies email  →  Account activated
3. User logs in  →  Access token + Refresh token set as HttpOnly cookies
4. Access token expires  →  Client calls /refresh-token to get a new one
5. User logs out  →  Cookies cleared from server
```

---

## 🧪 Testing the API

You can test the API using [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

Example — Register a user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Arun", "email": "arun@example.com", "password": "secret123"}'
```

---

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.6.2",
  "jsonwebtoken": "^9.0.3",
  "nodemailer": "^8.0.7",
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.4.2",
  "morgan": "^1.10.1",
  "nodemon": "^3.1.14"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Arun** — [@arunz6](https://github.com/arunz6)
