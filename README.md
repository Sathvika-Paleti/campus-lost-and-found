# 🎒 Campus Lost & Found System

A full-stack web application that helps students report, search, and manage lost & found items on campus.

## 🚀 Features

- 👤 User Registration
- 🔐 User Login (JWT Authentication)
- 🏠 Home Dashboard
- ➕ Add Lost & Found Items
- 🔍 Search Items
- ✏️ Edit Items
- 🗑️ Delete Items
- 🖼️ Image Upload
- 🚪 Logout
- 💾 MySQL Database Integration
- 🌐 REST API using FastAPI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Bootstrap
- Axios

### Backend
- FastAPI
- SQLAlchemy
- JWT Authentication
- Uvicorn

### Database
- MySQL

---

## 📂 Project Structure

```
campus-lost-and-found/
│
├── backend/
│   ├── routers/
│   ├── uploads/
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   ├── main.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│
├── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Sathvika-Paleti/campus-lost-and-found.git
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Features

- Register a new account
- Login securely using JWT
- Add lost or found items
- Upload item images
- Search items
- Edit item details
- Delete items
- Logout

---

## 🎯 Future Improvements

- Claim Request System
- Admin Dashboard
- Email Notifications
- User Profiles
- Dark Mode
- Deployment on Render/Vercel

---

## 👩‍💻 Author

**Sathvika Paleti**

GitHub: https://github.com/Sathvika-Paleti

---

⭐ If you found this project useful, consider giving it a star!
