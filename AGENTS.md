# AGENTS.md

This file provides context and guidelines for AI agents (and human developers) working on the **Obsidian Portfolio** repository.

## 1. Project Overview

- **Name:** `obsidian-portfolio`
- **Type:** Personal Portfolio Website
- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion (implied by animations)
- **AI Integration:** Google Gemini (via `@google/genai`)

## 2. Environment & Commands

### Package Management
- Use **npm** for dependency management.
- Lockfile: `package-lock.json`.

### Available Scripts
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server (Vite). |
| `npm run build` | Builds the project for production. |
| `npm run preview` | Previews the production build locally. |

*> **Note:** No explicit `test` or `lint` scripts are currently configured in `package.json`. If you need to verify code quality, check `tsconfig.json` or suggest adding standard linting tools.*

### Environment Variables
- **API Keys:** The project currently references `process.env.API_KEY` in `services/geminiService.ts`.
  - *Agent Note:* In Vite, standard practice is `import.meta.env.VITE_...`. Verify if `process.env` is polyfilled or if this requires refactoring to `import.meta.env`.

## 3. Project Structure

```text
/home/ka1ser/portfolio
├── components/         # UI Components (PascalCase)
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ...
├── hooks/              # Custom React Hooks (camelCase)
│   └── useIntersectionObserver.ts
├── services/           # External services/API logic
│   └── geminiService.ts
├── images/             # Static assets (referenced via /images/...)
├── App.tsx             # Main Application Component
├── index.tsx           # Entry Point
├── package.json        # Dependencies & Scripts
├── tsconfig.json       # TypeScript Configuration
└── vite.config.ts      # Vite Configuration
```

## 4. Code Style Guidelines

### General
- **Indentation:** 2 spaces.
- **Semicolons:** Required at the end of statements.
- **Quotes:**
  - Single quotes (`'`) for imports and string literals in TS/JS files.
  - Double quotes (`"`) for JSX attributes (e.g., `className="..."`).

### Naming Conventions
- **Components:** PascalCase (e.g., `GithubHeatmap.tsx`).
- **Files:**
  - Components: PascalCase (`BlurText.tsx`).
  - Hooks/Services/Utils: camelCase (`geminiService.ts`).
- **Variables/Functions:** camelCase.
- **Constants:** UPPER_SNAKE_CASE (e.g., `SYSTEM_INSTRUCTION`).
- **Interfaces/Types:** PascalCase.

### TypeScript Usage
- **Strictness:** `tsconfig.json` targets `ES2022`.
- **Explicit Types:** Use explicit types for component props and complex function returns.
  - Example: `const App: React.FC = () => { ... }`
  - Example: `export const getChatSession = (): Chat => { ... }`
- **Interfaces vs Types:** Prefer `interface` for object definitions where extensible, `type` for unions/primitives.

### Component Structure
- **Functional Components:** Use `React.FC` or typed props pattern.
- **Hooks:** Extract complex logic into custom hooks in the `hooks/` directory.
- **Styling:**
  - Use **Tailwind CSS** utility classes via the `className` prop.
  - Avoid inline `style={{ ... }}` objects unless dealing with dynamic coordinate-based values.
  - Use template literals for conditional classes:
    ```tsx
    className={`base-class ${condition ? 'active-class' : 'inactive-class'}`}
    ```

### Imports
- **React:** `import React from 'react';` (Keep for consistency, even if not strictly required in v19).
- **Internal:** Use relative paths (e.g., `./components/Hero`).
- **Order:**
  1. External libraries (React, motion, etc.)
  2. Internal Components
  3. Hooks/Services
  4. Styles/Assets

## 5. Error Handling & Best Practices

- **Async Operations:** Use `try/catch` blocks for API calls (see `geminiService.ts`).
- **Fallbacks:** Provide UI fallbacks or meaningful console errors.
  - *Example:* "I'm currently in demo mode without an API key."
- **Null Safety:** Handle potential null references for refs or optional props.
- **Accessibility:** Ensure images have `alt` text.

## 6. Testing Strategy

- **Current State:** No testing framework (Jest/Vitest) is currently set up.
- **Agent Action:** If asked to test, first verify if a test runner has been installed. If not, suggest installing **Vitest** (compatible with Vite) before writing tests.
- **Manual Verification:** Since automated tests are missing, verify UI changes by ensuring the build passes:
  `npm run build`

## 7. Cursor/Copilot Rules

*(No specific .cursorrules or copilot-instructions.md found in the repository. Adhere to the general guidelines above.)*

