<template>
    <div class="flex flex-col items-center p-5">
      <div v-if="loading" class="text-center text-lg font-bold">Loading...</div>
      <div v-else-if="error" class="text-center text-red-600">Error: {{ error }}</div>
      <div v-else-if="product" class="text-center border border-gray-300 p-4 m-4 rounded-lg max-w-lg w-full">
        <img :src="product.image" :alt="product.title" class="w-full h-auto rounded-lg mb-4" />
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="mb-2">{{ product.description }}</p>
        <p class="mb-2">Category: {{ product.category }}</p>
        <p class="mb-2">Price: ${{ product.price.toFixed(2) }}</p>
        <p class="mb-4">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
        <router-link to="/">
          <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Back to Products</button>
        </router-link>
      </div>
      <div v-else class="text-center">Product not found.</div>
    </div>
  </template>
  <script>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  /**
   * ProductDetail component to fetch and display details of a single product.
   */
  export default {
    setup() {
      // Use the route to get the product ID from the URL parameters
      const route = useRoute();
      const id = route.params.id;
  
      // Reactive references for product data, loading state, and error handling
      const product = ref(null);  // Holds the product data
      const loading = ref(true);  // Indicates if the data is still being fetched
      const error = ref(null);    // Holds any error messages
  
      /**
       * Fetch product details from the API when the component is mounted.
       * Handles loading and error states.
       */
      onMounted(async () => {
        try {
          // Fetch product data from the API
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          product.value = response.data;  // Store the fetched product data
        } catch (err) {
          // Handle any errors that occur during the fetch
          error.value = `Failed to fetch product with ID ${id}: ${err.message}`;
        } finally {
          // Set loading to false once the fetch operation is complete
          loading.value = false;
        }
      });
  
      // Return the reactive references to be used in the template
      return { product, loading, error };
    },
  };
  </script>
  
  <style scoped>
  /* No additional CSS needed, using Tailwind CSS */
  </style>
  