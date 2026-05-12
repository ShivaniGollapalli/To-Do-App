# 📝 Task Manager — To-Do App

A simple full-stack To-Do application with full CRUD operations and a mobile-responsive UI.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Tailwind CSS, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

- ✅ Create, Read, Update, Delete tasks
- 📱 Fully mobile responsive UI
- ⚡ Fast and lightweight
- 🌐 REST API backend
- 🗄️ Persistent data with MongoDB

---

## 📁 Project Structure

```
root/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   ├── .env
│   └── vite.config.js
│
└── server/               # Express backend
    ├── config/
    │   └── mongo.js
    ├── controllers/
    │   └── taskController.js
    ├── models/
    │   └── taskModel.js
    ├── routes/
    │   └── taskRouter.js
    └── server.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Start the backend:

```bash
# Development (nodemon — auto restart on file changes)
npm run serve

# Production
npm start
```

Server runs on `http://localhost:9000`

---

### 3. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_API_URL=http://localhost:9000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 📡 API Endpoints

### Task Routes — `/task`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/task/getAllTasks` | Get all tasks |
| GET | `/task/getAllTasks/:id` | Get single task |
| POST | `/task/createTask` | Create a task |
| PATCH | `/task/updateTask/:id` | Update a task |
| DELETE | `/task/deleteTask/:id` | Delete a task |

### Request Body — Create / Update

```json
{
  "title": "Buy groceries",
  "desc": "Milk, eggs, bread",
  "status": "pending"
}
```

---

## 🌍 Deployment

### Backend — Render

1. Push code to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=production
   ```

### Frontend — Vercel

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
4. Deploy

---

## 🛠️ Scripts

### Backend
```bash
npm start        # Start with node
npm run serve    # Start with nodemon (auto-restart on file changes)
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📄 License

MIT — free to use and modify.
