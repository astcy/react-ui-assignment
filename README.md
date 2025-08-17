# React UI Assignment – InputField & DataTable

This project implements two reusable UI components with Storybook docs, built using **React + TypeScript + TailwindCSS + Storybook**.

## 🧩 Problem Statement (as provided)

- **Focus Area:** UI Components  
- **Tech Stack:** React · TypeScript · TailwindCSS · Storybook

### Task
Build two React components in 2 days using React, TypeScript and modern patterns. You'll
document them using Storybook and structure the project with scalability in mind.

### Component 1: InputField
Create a flexible input component with validation states.
- Text input with label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Optional: Support for light & dark theme

**Props:**
```ts
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
```

### Component 2: DataTable
Create a data table with basic functionality.
- Display tabular data
- Column sorting
- Row selection (single/multiple)
- Loading state
- Empty state

**Props:**
```ts
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}
```

### Storybook Documentation Checklist
For each component:
- Component name & description
- Props & API definitions (with TypeScript types)
- Use cases & real-world examples
- Anatomy/structure breakdown
- States & variants
- Interaction behavior
- Accessibility notes (ARIA roles, keyboard nav, focus)
- Theming and responsiveness handling
- Best practices, do’s & don’ts

## 📦 Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Run the Vite dev server
npm run dev
# then open the shown URL (usually http://localhost:5173)

# 3) Run Storybook
npm run storybook
# then open http://localhost:6006
```

## 🧰 Scripts
- `npm run dev` – Vite dev server
- `npm run build` – Build production assets
- `npm run preview` – Preview the production build
- `npm run storybook` – Start Storybook
- `npm run build-storybook` – Build static Storybook

## 🗂 Folder Structure
```
react-ui-assignment/
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
├── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.stories.tsx
│   │   ├── DataTable/
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.stories.tsx
│   ├── types/
│   │   ├── table.ts
│   ├── utils/
│   │   ├── cn.ts
│   ├── main.tsx
│   ├── index.css
│   ├── App.tsx
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
├── postcss.config.js
├── index.html
├── README.md
```

## 🔍 Notes
- **Tailwind** dark mode is enabled via `class` – wrap your app in `<html class="dark">` or toggle class on root for dark theme.
- Components include basic **ARIA** and keyboard support.
- Stories showcase states/variants; extend with your own use cases as needed.

## 🚀 Deployment
- **Vercel** for the app build (`npm run build`).
- **Chromatic** for Storybook previews: `npx chromatic --project-token=YOUR_TOKEN`.
