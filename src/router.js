import { createRouter, createWebHistory } from 'vue-router'; // Importing functions to create a router and use HTML5 history mode
import Products from './components/ProductList.vue'; // Import the Products component (list of products)
import ProductDetail from './components/ProductDetail.vue'; // Import the ProductDetail component (individual product details)

/**
 * Routes configuration for the Vue application.
 * @constant
 * @type {Array<Object>}
 * @description An array of route objects defining the available routes in the application.
 */
const routes = [
  {
    path: '/', // Route path for the home page
    name: 'Products', // Name of the route
    component: Products, // Component to render for this route
  },
  {
    path: '/product/:id', // Route path for product detail pages, with a dynamic parameter for the product ID
    name: 'ProductDetail', // Name of the route
    component: ProductDetail, // Component to render for this route
  },
];

/**
 * Creates and configures the Vue Router instance.
 * @function
 * @returns {Router} The configured Vue Router instance
 * @description Sets up the Vue Router with HTML5 history mode and the defined routes.
 */
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for clean URLs
  routes, // Set the routes configuration
});

export default router; // Export the configured router instance for use in the application
