<script setup lang="ts">
import { ref, computed } from 'vue';

const limit = ref<number>(100);
const activeDivisors = ref<number[]>([]);
const selectedNumber = ref<number | null>(null);
let hideTimeout: ReturnType<typeof setTimeout> | null = null;

// Generate shuffled numbers
const shuffledNumbers = computed(() => {
  const numbers = Array.from({ length: limit.value }, (_, i) => i + 1);

  // Fisher-Yates shuffle
  const shuffled = [...numbers];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
});

// Handle hover
function handleHover(number: number) {
  if (hideTimeout) {
    clearTimeout(hideTimeout); // Cancel the hide timer
    hideTimeout = null;
  }
  activeDivisors.value = shuffledNumbers.value.filter(n => number % n === 0);
  selectedNumber.value = number;
}

// Handle mouse out with delay
function resetActive() {
  hideTimeout = setTimeout(() => {
    selectedNumber.value = null;
    activeDivisors.value = [];
  }, 300); // 300ms delay
}
</script>

<template>
  <div class="numbers-container">
    <input 
      v-model.number="limit" 
      type="number" 
      min="1" 
      max="100"
      class="limit-input"
    >
    <br><br>

    <div class="number-grid">
      <div
        v-for="number in shuffledNumbers"
        :key="number"
        class="number"
        :class="{ active: activeDivisors.includes(number) }"
        @mouseover="handleHover(number)"
        @mouseout="resetActive"
      >
        {{ number }}
      </div>
    </div>

    <!-- Explanation Card -->
    <transition name="fade">
      <v-card 
        v-if="selectedNumber !== null" 
        class="explanation-card mt-4 pa-4"
        elevation="3"
        color="blue-lighten-5"
      >
        <v-card-title class="text-h6 font-weight-bold">
          Understanding Number {{ selectedNumber }}
        </v-card-title>
        <v-card-text>
          <p>
            The number <strong>{{ selectedNumber }}</strong> has the following divisors:
          </p>
          <p class="font-weight-bold">
            {{ activeDivisors.join(", ") || "None" }}
          </p>
          <p>
            A divisor of a number is any number that divides it evenly with no remainder. 
            For example, 10 is divisible by 1, 2, 5, and 10.
          </p>
        </v-card-text>
      </v-card>
    </transition>
  </div>
</template>

<style>
/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.numbers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
}

.number {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 6px;
  border-radius: 6px;
  background-color: #f0f0f0;
  font-size: 18px;
  font-weight: bold;
  color: black;
  transition: background-color 0.2s ease;
}

.active {
  background-color: #ff6b6b;
  color: rgb(38, 36, 36);
}

.explanation-card {
  max-width: 500px;
  text-align: center;
  
}

.limit-input {
  margin-top: 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 65px;
}
</style>
