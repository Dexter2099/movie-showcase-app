# 🎬 Movie Showcase App

A fullstack movie search app built with **React** (Vite) + **Node.js/Express** + **OMDb API**. Users can search and browse action movies with posters, titles, and release years.

## 🔧 Features
- Search for action movies using OMDb API
- Responsive grid of movie covers
- Displays title, year, and poster
- Backend proxy server to hide API key

## 🧱 Stack
- **Frontend:** React, TailwindCSS, Axios, Vite
- **Backend:** Node.js, Express.js
- **API:** [OMDb API](https://www.omdbapi.com/)

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone 
cd movie-showcase

# 2. Install backend
cd backend
npm install

# 3. Create .env in /backend
# Add your OMDb key like this:
OMDB_API_KEY=your_api_key_here

# 4. Start backend
node server.js

# 5. Install frontend
cd ../frontend
npm install

# 6. Start frontend
npm run dev
