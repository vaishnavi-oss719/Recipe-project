🍽️ Mini Food World – Recipe App

A modern and responsive Recipe Application built using React JS and Tailwind CSS, powered by TheMealDB public API.
Users can explore different kinds of food recipes, view detailed instructions, watch cooking videos, and manage wishlists with a clean black-theme UI.


🛠️ Tech Stack

React JS – Frontend library

React Router DOM – Routing & navigation

Tailwind CSS – Styling & responsive design

Fetch API – API requests

React Icons – Icons

TheMealDB API – Recipe data source

API Link:
👉 https://www.themealdb.com/api.php

✨ Features
🔐 Authentication UI

Login page for existing users

Signup page for new users

Animated food background

Black theme UI

Redirect to login after signup

⚠️ UI-only authentication (no backend)

🏠 Home / Recipe Listing Page

Displays recipes in 3 rows × 4 columns

Clean recipe cards with image & name

Responsive grid layout

Each card is clickable

🔍 Search & Filter

Search recipes by name

Filter recipes by:

Categories

Meal types

Ingredients (API based)

Search & filter work together

📖 Recipe Details Page

Large recipe image (left side)

Full recipe instructions

Category & meal info

Watch YouTube video button

Wishlist button

Back button for easy navigation

Responsive layout

❤️ Wishlist

Add/remove recipes from wishlist

Heart icon toggle animation

Wishlist state managed globally

Visual feedback when recipe is wishlisted

🧭 Navbar

Sticky navbar (visible on all pages)

Food logo on the left

Icons:

Home

Wishlist

Profile (Login/Logout)

Responsive & clean layout

📱 Responsive Design

Fully responsive for:

Mobile

Tablet

Desktop

Tailwind utility classes used throughout

📂 Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── RecipeCard.jsx
│
│── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Home.jsx
│   ├── RecipeDetails.jsx
│
│── App.jsx
│── main.jsx
│── index.css

🧪 How to Run Locally

1️⃣ Clone the repository

git clone https://[github.com//recipe-app.git](https://github.com/vaishnavi-oss719/Recipe-project)


2️⃣ Go to project folder

cd recipe-app


3️⃣ Install dependencies

npm install


4️⃣ Start development server

npm run dev

🌐 Deployment

Deployed using Vercel

Continuous deployment via GitHub
