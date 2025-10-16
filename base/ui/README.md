# UI Layer

This layer contains reusable UI components and extends the base layer to inherit fonts and icons.

## Architecture

```
ui/
├── components/        # Reusable UI components
│   └── BaseButton.vue # Button component with variants, sizes, and states
├── nuxt.config.ts     # UI layer configuration
└── README.md          # This file
```

## Inheritance Chain

- **UI Layer** extends **Base Layer**
  - Inherits: `@nuxt/fonts`, `@nuxt/icon`, ESLint, test utils
  - Provides: Reusable UI components

## Components

### BaseButton

A flexible button component with the following features:
- **Variants**: primary, secondary, outline, ghost
- **Sizes**: sm, md, lg
- **States**: normal, disabled, loading
- **Icons**: Support for left and right icons
- **Slots**: Custom content support

#### Usage

```vue
<template>
  <BaseButton 
    variant="primary" 
    size="md" 
    icon-left="mdi:account"
    @click="handleClick"
  >
    User Profile
  </BaseButton>
</template>
```