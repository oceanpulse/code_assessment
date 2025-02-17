<!-- eslint-disable vue/html-indent -->
<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :active="i === 0"
          :to="item.to" 
          link
          :title="item.text"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          @click="drawer = !drawer"
        />
      </template>

      <v-img
        class="me-sm-8"
        max-width="40"
        src="@/assets/logo.png"
      />

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to" 
          class="me-2 text-none"
          slim
        >
  {{ item.text }}
</v-btn>
      </template>

      <v-spacer />

      <template #append>
        <v-btn
          class="ms-1"
          color="medium-emphasis"
          icon="mdi-bell-outline"
        />

        <v-btn class="ms-1" icon>
          <v-avatar image="@/assets/clint.png" />

          <v-menu activator="parent" origin="top">
            <!-- <v-list>
              <v-list-item link title="Update profile" />

              <v-list-item link title="Sign out" />
            </v-list> -->
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-toolbar color="surface" elevation="1" height="100">
        <template #title>
          <h2 class="text-h4 font-weight-bold align-center">
            Discover Number Divisors Instantly
          </h2>
        </template>
      </v-toolbar>

      <div class="pa-4">
        <v-sheet border="dashed md" color="surface-light" height="50%" rounded="lg" width="100%">
          <Numbers />
        </v-sheet>
      </div>
    </v-main>
  </v-layout>

  <v-footer class="d-flex flex-column pt-10">
    <div class="bg-red d-flex w-100 align-center px-4">
      <strong>I am ready to be onboarded!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      />
    </div>

    <div class="px-4 py-2  text-center w-100" color="surface">
      {{ new Date().getFullYear() }} — <strong>Clint Edward</strong>
    </div>
  </v-footer>

</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import Numbers from './Numbers.vue'; 

const drawer = shallowRef(false);

const items = [
  { text: 'Code Assessment', to: '/' },
  { text: 'Why me', to: '/whyme' },
  { text: 'Code explanation', to: '/code-explanation' },
  { text: 'Technical Doc', to: '/technical-doc' },
  { text: 'Contact', to: '/contact' }, // Add the correct route here
];

const icons = [
    'mdi-web',
    'mdi-github'
  ];
</script>
