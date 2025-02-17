<script setup lang="ts">
// import { useRouter } from 'vue-router'

// const router = useRouter()

// Optional: Type-safe navigation handler
// const navigateToNumbers = () => {
//   router.push({ name: 'NumbersApp' })
// }
</script>

<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mt-10 px-4"
    elevation="4"
    height="250"
    max-width="800"
    width="100%"
    rounded
  >
    <div>
      <h2 class="text-h4 font-weight-black text-primary">
        Number Highlighter
      </h2>

      <div class="text-h5 font-weight-medium mb-2">
        Discover Number Divisors Instantly
      </div>

      <p class="text-body-1 mb-4">
        This interactive application generates a grid of randomized numbers.<br>
        Hover over any number to highlight all its divisors in real-time.<br>
        Adjust the range using the input field to explore different number sets.
      </p>

      <v-btn 
        color="primary" 
        variant="flat"
        :to="{ name: 'NumbersApp' }"
      >
        Start Exploring Numbers
      </v-btn>
    </div>
  </v-sheet>
</template>