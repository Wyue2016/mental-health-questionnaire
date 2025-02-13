# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Project Structure

The project structure is organized as follows:

mental-health-questionnaire
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.scss
│   ├── components
│   │   ├── Question.vue
│   │   └── ProgressBar.vue
│   ├── locales
│   │   ├── en.json
│   │   └── es.json
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

### Public Directory

The `public` directory contains the `index.html` file, which is the entry point for the application.

### Source Directory

The `src` directory contains the source code for the application.

#### Assets Directory

The `assets` directory contains static assets such as stylesheets, images, and fonts.

#### Components Directory

The `components` directory contains Vue components used in the application.

- `Question.vue`: A component that renders a single question.
- `ProgressBar.vue`: A component that displays the progress of the questionnaire.

#### Locales Directory

The `locales` directory contains language files for internationalization.

- `en.json`: English language file.
- `es.json`: Spanish language file.

#### App.vue

The `App.vue` file is the root component of the application. It contains the main layout and logic for the questionnaire.

#### main.js

The `main.js` file is the entry point for the Vue application. It initializes the Vue instance and mounts it to the `index.html` file.

### Configuration Files

- `.gitignore`: Specifies files and directories that should be ignored by Git.
- `package.json`: Contains metadata about the project and lists its dependencies.
- `README.md`: This file, which provides an overview of the project.
- `vite.config.js`: Configuration file for Vite, the build tool used in this project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd mental-health-questionnaire`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

The application will be available at `http://localhost:3000`.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build