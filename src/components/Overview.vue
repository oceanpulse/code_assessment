<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      fill-dot
    >
      <v-card class="card">
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>{{ item.description }}</p>
         
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string;
  description: string;
 
  color: string;
}

const items: TimelineItem[] = [
  {
    title: "Code Assessment Changes Made",
    description: "Added ref and computed properties to the code to make it more reactive and efficient. Made limit a ref with type number. Created shuffledNumbers as a computed property using Array.from and Fisher-Yates shuffle. Tracked numbers with active divisors. Replaced the hov and reset with handleHover and resetActive that update active Divisors. In the template, used shuffledNumbers for the loop and reactive class binding. Added .number modifier to v-model for limit to ensure it's treated as a number and min='1' to prevent invalid values. Removed DOM manipulation for reactive state. This approach keeps vue3 best practice by using reactive state and computed properties and class bindings. Makes the code cleaner and maintainable.",
    color: "amber",
  },
  {
    title: "Styling Enhancements",
    description: "Added CSS transitions and better visuals. Imporoved accessibility with better color contrast. Added proper spacing and border radius.",
    color: "amber",
  },
  {
    title: "Email Form Enhancements",
    description: "The Contact.vue component in Vue.js, built with Vuetify and VeeValidate using Zod, provides a responsive contact form with real-time validation, error handling, and success messages. It sends form data via an API to send-email.js, a Node.js Express backend route that uses Nodemailer with Gmail SMTP for secure email delivery. The API validates requests, handles CORS, and returns success or error responses. The system ensures smooth user interaction, data integrity, and secure email processing using environment variables for authentication.",
    color: "amber",
  },
  {
    title: "Deployed to Vercel",
    description: "Deployed the application to Vercel, using Vercel CLI for seamless deployment. Configured environment variables for secure API keys and sensitive data. Optimized build settings for faster load times and better performance.",
    color: "amber",
  },
  
];
</script>

<style>
  .card {
    margin: 15px;
  }
</style>
