<template>
  <div class="container mx-auto space-y-8">
    <NuxtRouteAnnouncer />
    <header>
      <h1 class="text-3xl font-bold">App 2</h1>
    </header>

    <p>This app picks up tailwind css and PrimeVue from the UI layer.</p>

    <article class="bg-gray-50 p-4 rounded-md space-y-4">
      <h2 class="text-lg font-semibold">
        Testing BaseButton Component from UI Layer:
      </h2>
      <div class="space-x-4">
        <BaseButton label="Primary" />
        <BaseButton label="Secondary" severity="secondary" />
        <BaseButton label="Success" severity="success" />
        <BaseButton label="Info" severity="info" />
        <BaseButton label="Warn" severity="warn" />
        <BaseButton label="Help" severity="help" />
        <BaseButton label="Danger" severity="danger" />
        <BaseButton label="Contrast" severity="contrast" />
      </div>
    </article>

    <article class="bg-gray-50 p-4 rounded-md space-y-4">
      <h2 class="text-lg font-semibold">
        Testing PrimeVue Components (Aura + ctrl-hub override theme):
      </h2>

      <PrimeIftaLabel>
        <PrimeInputText
          id="text"
          v-model="basicInput"
          placeholder="Enter text here" />
        <label for="text">Over Label</label>
      </PrimeIftaLabel>
      <PrimeButton label="Click me" variant="primary" />
      <p class="text-sm text-gray-600 mt-1">Value: {{ basicInput }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
// PrimeVue input reactive data
const basicInput = ref('');
</script>
