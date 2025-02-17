<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"

      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            variant="outlined"
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
interface TimelineItem {
  text: string;
  color: string;
 
  // Add other properties as needed
}

const items: TimelineItem[] = [
  {
    text: "Item 1",
    color: "blue",
   
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  {
    text: "Item 2",
    color: "green",
    // Add other properties
  },
  // Add more items as needed
];
</script>

<style>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 68vh;
}

.text-amber {
    color: #FFD740
  }

.text-black {
   color: #000000
}  
</style>