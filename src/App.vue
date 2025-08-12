<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>
