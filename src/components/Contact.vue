<script setup lang="ts">
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import axios from 'axios';

// Form validation schema
const contactSchema = toTypedSchema(
  z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email format'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })
);

// Use VeeValidate form
const { handleSubmit, errors } = useForm({
  validationSchema: contactSchema,
});

// Create form fields
const name = useField('name');
const email = useField('email');
const message = useField('message');
const isSending = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Form submission handler
const onSubmit = handleSubmit(async (values) => {
  isSending.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await axios.post('https://code-assessment-three.vercel.app/api/send-email', values);
    if (response.data.success) {
      successMessage.value = 'Your message has been sent!';
    } else {
      errorMessage.value = 'Failed to send message. Please try again.';
    }
  } catch (error) {
    console.error('Error sending email:', error);
    errorMessage.value = 'An error occurred. Please try again later.';
  } finally {
    isSending.value = false;
  }
});
</script>

<template>
  <v-container>
    <v-card class="pa-5" max-width="500" elevation="3">
      <v-card-title class="text-h5">I am an email away, Mr Operations Manager</v-card-title>

      <v-form @submit.prevent="onSubmit">
        <v-text-field
          v-model="name.value.value"
          type="text"
          label="Your Name"
          :error-messages="errors.name"
        />

        <v-text-field
          v-model="email.value.value"
          label="Your Email"      
          type="email"
          :error-messages="errors.email"
        />

        <v-textarea
          v-model="message.value.value"
          label="Your Message"
          rows="4"
          :error-messages="errors.message"
        />

        <v-alert v-if="successMessage" type="success" class="mt-3">
          {{ successMessage }}
        </v-alert>

        <v-alert v-if="errorMessage" type="error" class="mt-3">
          {{ errorMessage }}
        </v-alert>

        <v-btn type="submit" color="primary" block class="mt-3" :loading="isSending">
          Send Message
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.v-card {
  width: 100%;
}
</style>