# Nuxt Layers Architecture

A multi-layer Nuxt application demonstrating layer inheritance and component sharing.

## Layer Structure

```
nuxt-layers/
├── base/                    # Base layers
│   └── ui/                 # UI layer (shared components, styling, configuration)
│       ├── components/
│       │   └── BaseButton.vue # Reusable button component
│       ├── assets/css/
│       │   └── main.css    # Tailwind CSS directives
│       ├── nuxt.config.ts  # UI layer with Tailwind + PrimeVue
│       ├── tailwind.config.js # Tailwind configuration
│       └── package.json    # UI dependencies
├── apps/                    # Applications
│   ├── app1/               # Client application
│   │   ├── app/
│   │   │   └── app.vue     # App1 using UI layer
│   │   └── nuxt.config.ts  # Extends ui layer
│   └── app2/               # Dashboard application
│       ├── app/
│       │   └── app.vue     # App2 using UI layer
│       └── nuxt.config.ts  # Extends ui layer
├── package.json            # Root workspace configuration
├── pnpm-workspace.yaml     # Workspace configuration
└── README.md               # This file
```

## Layer Architecture

### UI Layer (`/base/ui`)
The foundational layer providing shared styling and components:
- **Tailwind CSS 3** - Utility-first CSS framework with custom brand colors
- **PrimeVue** - Component library with Aura theme
- **Fonts** - Inter and Roboto from Google Fonts via `@nuxt/fonts`
- **Icons** - Multiple collections (heroicons, lucide, mdi, tabler) via `@nuxt/icon`
- **Components** - Reusable UI components (BaseButton, etc.)
- **Configuration** - Base Nuxt config that other apps extend

### Applications
Both applications extend the UI layer and inherit all its features:

1. **App1** (`/apps/app1`) - Client application
   - Extends UI layer configuration
   - Demonstrates component usage with custom styling
   - Runs on default port (3000)

2. **App2** (`/apps/app2`) - Dashboard application
   - Extends UI layer configuration
   - Uses Tailwind classes and PrimeVue components
   - Runs on default port (3000)

## Features Demonstrated

- ✅ **Nuxt Layer inheritance** (ui → app1/app2)
- ✅ **Tailwind CSS 3** with custom brand colors and utilities
- ✅ **PrimeVue integration** with Aura theme
- ✅ **Font sharing** across layers (Inter, Roboto from Google Fonts)
- ✅ **Icon sharing** across layers (mdi, heroicons, tabler, lucide)
- ✅ **Component sharing** (BaseButton and other UI components)
- ✅ **Configuration inheritance** and layer-specific overrides
- ✅ **Workspace setup** with pnpm for efficient dependency management

## Setup

Install dependencies for all packages:

```bash
pnpm install
```

## Running Applications

### App1 (Client Application)
```bash
# Navigate to app1 directory
cd apps/app1

# Run development server
pnpm run dev  # http://localhost:3001
```

### App2 (Dashboard Application)
```bash
# Navigate to app2 directory
cd apps/app2

# Run development server
pnpm run dev  # http://localhost:3002
```

> **Note**: The UI layer (`/base/ui`) doesn't need to be run independently as it's a shared layer that both applications extend. It provides Tailwind CSS configuration, PrimeVue setup, fonts, icons, and reusable components that are automatically available in both apps.

## What Each App Demonstrates

### App1 Features
- Custom component styling with scoped CSS
- Font inheritance from UI layer (Inter, Roboto)
- Icon usage with multiple collections
- BaseButton component with various states and variants
- Layer inheritance without Tailwind utility classes

### App2 Features
- Tailwind CSS utility classes from UI layer
- Custom brand color usage (`text-brand-blue-600`)
- PrimeVue components (InputText, Button, IftaLabel)
- Responsive design with Tailwind utilities
- Complete UI layer feature integration

## UI Layer Components

### BaseButton
A flexible button component with multiple variants, sizes, icon support, and loading states. Automatically available in both applications through layer inheritance.
