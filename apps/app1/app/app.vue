<template>
  <div class="container mx-auto space-y-8">
    <NuxtRouteAnnouncer />
    <h1 class="text-2xl font-bold">App 1</h1>
    <p>This app picks up tailwind css and PrimeVue from the UI layer.</p>

    <!-- Test BaseButton component from UI layer -->
    <div class="space-y-4">
      <p>Testing BaseButton Component from UI Layer:</p>

      <div class="flex gap-2">
        <BaseButton label="Primary" severity="primary" />
        <BaseButton label="Secondary" severity="secondary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* TODO replace with tailwind */
.font-inter {
  font-family: 'Inter', system-ui, sans-serif;
}

.font-roboto {
  font-family: 'Roboto', system-ui, sans-serif;
}

.font-system {
  font-family: system-ui, sans-serif;
}
</style>
