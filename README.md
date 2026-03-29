# 📘 Next.js Blog App

## 📌 Project Overview

This project is a **Full Blog Application** built using **Next.js App Router**.
It demonstrates modern web development concepts including **SSR, API Routes, Dynamic Routing, and CRUD operations**.

The application allows users to:

* View all blog posts
* View a single post (dynamic page)
* Create new posts
* Edit posts
* Delete posts

---

## 🚀 Technologies Used

* Next.js (App Router)
* React
* JavaScript (ES6+)
* Bootstrap (for styling)
* Next.js API Routes (Route Handlers)

---

## 🧠 Concepts Implemented

* ✅ Server-Side Rendering (SSR)
* ✅ Dynamic Routing (`/details/[id]`)
* ✅ API Routes inside Next.js
* ✅ CRUD Operations (Create, Read, Update, Delete)
* ✅ Data Fetching with `fetch`
* ✅ Client vs Server Components
* ✅ Environment Structure (App Router)

---

## 📂 Project Structure

```
app/
│
├── api/
│   └── posts/
│       ├── route.js        # GET, POST, DELETE, PUT
├── details/
│   └── [id]/
│       ├── page.js         # Dynamic post page (SSR)
│       ├── loading.js      # Loading UI
│
├── create/
│   └── page.js             # Create post (Client Component)
│
├── edit/
│   └── [id]/
│       └── page.js         # Edit post
│
├── page.js                 # Home page (SSR)
├── layout.js
└── components/
    └── Navbar.js
```

---

## 🏠 Pages Description

### 1. Home Page `/`

* Displays all posts
* Uses **SSR (Server-Side Rendering)**
* Fetches data from external
 API:
```
https://jsonplaceholder.typicode.com/posts
```

---

### 2. Post Details Page `/posts/[id]`

* Dynamic route
* Fetches single post using ID
* Uses SSR
* Includes dynamic metadata (SEO)

---

### 3. Create Page `/create`

* Client Component (`"use client"`)
* Form to create a new post
* Sends POST request to API
* Redirects to home after submission

---

### 4. Edit Page `/edit/[id]`

* Allows updating post title and content
* Uses PUT request

---


---



---

## 🌍 Deployment

The project is deployed on **Vercel**.

🔗 Live Demo:
👉 (Add your deployed link here)

---

