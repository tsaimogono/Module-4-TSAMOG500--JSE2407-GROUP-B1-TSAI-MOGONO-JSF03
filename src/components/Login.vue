<template>
    <div>
      <div v-if="loading" class="text-center text-lg font-bold">Loading...</div>
      <div v-else>
        <div class="mb-4">
          <label for="category" class="mr-2">Filter by Category:</label>
          <select v-model="selectedCategory" @change="filterProducts" class="p-2 border border-gray-300 rounded">
            <option value="">All</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
    
          <label for="sorting" class="ml-4 mr-2">Sort by Price:</label>
          <select v-model="sorting" @change="handleSort" class="p-2 border border-gray-300 rounded">
            <option value="default">Default</option>
            <option value="low">Lowest to Highest</option>
            <option value="high">Highest to Lowest</option>
          </select>
    
          <button @click="resetFilters" class="ml-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Reset Filters</button>
        </div>
    
  <div class="bg-gray-100 p-6">
    <div class="container mx-auto">
      <div class="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card border border-gray-200 p-4 text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
        >
          <img
          img :src="product.image" alt="Product Image" class="w-full h-[15rem] object-contain mb-4" 
          />
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-gray-800 mb-2 font-bold">${{ product.price.toFixed(2) }}</p>
          <p class="text-gray-500 mb-4 text-sm">{{ product.category }}</p>
          <p class="mb-4">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
            <button class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              View Details
            </button>
          </router-link>
          <button
            @click="addToCart(product)"
            class="mt-2 mr-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-3 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
 </template>
   <script>
   import axios from 'axios';
   
   /**
    * Vue component for managing and displaying products.
    */
   export default {
     data() {
       return {
         /**
          * Array to store all fetched products.
          * @type {Array}
          */
         products: [],
   
         /**
          * Array to store the original list of products for resetting filters.
          * @type {Array}
          */
         originalProducts: [],
   
         /**
          * Array to store products that match the current filters and sorting.
          * @type {Array}
          */
         filteredProducts: [],
   
         /**
          * Array to store product categories fetched from the API.
          * @type {Array}
          */
         categories: [],
   
         /**
          * Currently selected product category for filtering.
          * @type {string}
          */
         selectedCategory: '',
   
         /**
          * Current sorting option.
          * @type {string}
          */
         sorting: 'default',
   
         /**
          * Boolean indicating if data is still being loaded.
          * @type {boolean}
          */
         loading: true,
   
         /**
          * Array to store products added to the cart.
          * @type {Array}
          */
         cart: [],
       };
     },
     computed: {
       /**
        * Computed property to get the number of items in the cart.
        * @returns {number} Number of items in the cart.
        */
       cartCount() {
         return this.cart.length;
       },
     },
     methods: {
       /**
        * Initializes component data by fetching products and categories.
        * @returns {Promise<void>}
        */
       async init() {
         this.loading = true;
         try {
           const [productsResponse, categoriesResponse] = await Promise.all([
             axios.get('https://fakestoreapi.com/products'),
             axios.get('https://fakestoreapi.com/products/categories'),
           ]);
           this.products = productsResponse.data;
           this.originalProducts = [...this.products];
           this.filteredProducts = [...this.products];
           this.categories = categoriesResponse.data;
         } catch (error) {
           console.error('Error fetching products or categories:', error);
         } finally {
           this.loading = false;
         }
       },
   
       /**
        * Filters products based on the selected category and then sorts them.
        */
       filterProducts() {
         if (this.selectedCategory) {
           this.filteredProducts = this.products.filter(
             product => product.category === this.selectedCategory
           );
         } else {
           this.filteredProducts = [...this.products];
         }
         this.sortProducts();
       },
   
       /**
        * Calls the method to sort products based on the current sorting option.
        */
       handleSort() {
         this.sortProducts();
       },
   
       /**
        * Sorts `filteredProducts` based on the current sorting option.
        */
       sortProducts() {
         if (this.sorting === 'low') {
           this.filteredProducts.sort((a, b) => a.price - b.price);
         } else if (this.sorting === 'high') {
           this.filteredProducts.sort((a, b) => b.price - a.price);
         } else {
           this.filteredProducts = [...this.originalProducts];
           if (this.selectedCategory) {
             this.filteredProducts = this.filteredProducts.filter(
               product => product.category === this.selectedCategory
             );
           }
         }
       },
   
       /**
        * Resets all filters and sorting to their default states.
        */
       resetFilters() {
         this.selectedCategory = '';
         this.sorting = 'default';
         this.filteredProducts = [...this.originalProducts];
       },
   
       /**
        * Adds a product to the cart.
        * @param {Object} product - The product to add to the cart.
        */
       addToCart(product) {
         this.cart.push(product);
       },
     },
     mounted() {
       this.init();
     },
   };
   </script>
   