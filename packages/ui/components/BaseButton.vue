<template>
  <!-- https://primevue.org/button/ -->
  <PrimeButton v-bind="$attrs" />
</template>

<script setup lang="ts">
// Component name for auto-registration
defineOptions({
  name: 'BaseButton',
  inheritAttrs: false,
});
</script>
