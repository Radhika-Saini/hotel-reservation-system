# 🏨 Hotel Room Reservation System

A full-stack application to visualize and book hotel rooms optimally based on proximity and travel time. Built using **React** for the frontend and **Node.js + Express** for the backend.

## 🚀 Live Demo

- 🔗 Frontend (React): ([https://your-netlify-url.netlify.app](https://hotel-reservartion-system.netlify.app/))
- 🔗 Backend (Render): ([https://your-backend-subdomain.onrender.com](https://hotel-backend-lhgv.onrender.com))

---

## 📌 Features

- ✅ Book up to 5 rooms in one request
- ✅ Optimized room assignment based on floor and travel time
- ✅ Randomly occupy rooms for testing
- ✅ Reset hotel to fully unoccupied
- ✅ Visual display of rooms per floor (occupied vs available)

---

## 🧠 Booking Logic

- Floors 1–9: 10 rooms each (e.g., 101–110, 201–210...)
- Floor 10: 7 rooms only (1001–1007)
- Travel Time Calculation:
  - Horizontal (same floor): 1 min per adjacent room
  - Vertical (between floors): 2 mins per floor
- Priority:
  1. Book on the same floor if possible
  2. Else, minimize total travel time

---

## 🏗️ Tech Stack

| Frontend          | Backend           |
|-------------------|-------------------|
| React             | Node.js           |
| CSS               | Express.js        |
| Fetch API         | REST API          |
| Netlify (deploy)  | Render (deploy)   |

---

## 🛠️ Project Structure

hotel-reservation-system/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── app.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── index.js
│ └── public/
├── README.md



---

## 🧪 How to Use Locally

### Prerequisites

- Node.js installed
- Git installed

### 🔧 Backend Setup

```bash
cd backend
npm install
node server.js
# Server will run on http://localhost:5000

```
### 🔧 Frontend Setup

```bash
cd frontend
npm install
npm start
# App will run on http://localhost:3000

Make sure in frontend/src/services/api.js the URL is set to:
const BASE_URL = 'http://localhost:5000/api/book';
