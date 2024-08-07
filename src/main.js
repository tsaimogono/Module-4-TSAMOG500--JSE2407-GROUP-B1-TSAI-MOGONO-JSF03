/**
 * Entry point for the Vue application.
 * 
 * This script sets up the Vue application by creating an instance of the app,
 * applying global configurations such as routing, and mounting the app to the DOM.
 * 
 * @module main
 */

// Import the `createApp` function from Vue to create a Vue application instance
import { createApp } from 'vue';

// Import the root App component which is the main component of the application
import App from './App.vue';

// Import the router configuration for managing application routes
import router from './router.js';

// Import global styles
import './style.css';

/**
 * Create and configure the Vue application instance.
 * 
 * - Sets up routing using the router configuration.
 * - Mounts the application to the HTML element with id 'app'.
 */
createApp(App)
  /**
   * Use the router configuration with the application instance.
   * This allows the application to handle routing and navigation.
   * 
   * @function
   * @param {Object} router - The router instance for managing routes.
   */
  .use(router)
  
  /**
   * Mount the Vue application to the DOM.
   * 
   * This attaches the application to the HTML element with the id 'app',
   * making the Vue app visible in the browser.
   * 
   * @function
   * @param {string} '#app' - The id of the HTML element to mount the Vue app to.
   */
  .mount('#app');
