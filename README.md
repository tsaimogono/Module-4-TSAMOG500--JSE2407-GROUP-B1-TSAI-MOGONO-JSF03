# SwiftCart Store

 Swift cart is a modern, responsive e-commerce application built with Svelte and styled using style CSS. This project demonstrates how to create a dynamic product catalog with features such as product listing, filtering, sorting, and detailed product views.This project uses Vue.js for the frontend, Vite for the build tool, and Axios for HTTP requests.


## Features
- Product List: View and filter products by category.
- Product Details: View detailed information about a specific product.
- Shopping Cart: Add products to a cart.
- Wishlist: Add products to a wishlist.
User Authentication: Basic login functionality.

## Technologies
- Vue.js: Framework for building user interfaces.
- Vite: Build tool that aims to provide a faster and leaner development experience.
- Axios: HTTP client for making requests to the backend API.
- Tailwind CSS: Utility-first CSS framework for styling.

## Installation
To get started with this project, follow these steps:

Clone the Repository

bash
Copy code
git clone https://github.com/tsaimogono/Module-4-TSAMOG500--JSE2407-GROUP-B1-TSAI-MOGONO-JSF03.git
cd your-project-name

## Install Dependencies

Copy code
npm install

## Start the development server:
npm run dev

Open your browser and navigate to http://localhost:3000 (or the port specified in your terminal)


## Usage
Project Structure
src/components/: Contains Vue components such as Navbar.vue, ProductList.vue, and ProductDetail.vue.
src/views/: Contains view components used for routing.
src/router/index.js: Configures the Vue Router for handling different routes.
src/stores/: Contains reactive state management using Vue’s ref.
src/App.vue: The root component of the application.
src/main.js: Entry point for the Vue application.
API Endpoints
Products: https://fakestoreapi.com/products
Categories: https://fakestoreapi.com/products/categories
Product Detail: https://fakestoreapi.com/products/{id}

## Contribution
Contributions are welcome! Please follow these guidelines for contributing:

Fork the Repository
Create a New Branch: git checkout -b feature/your-feature
Make Your Changes