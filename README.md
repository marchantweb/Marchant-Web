# Marchant Web '23

This repo runs the latest version of [MarchantWeb.com](https://marchantweb.com), that went live in early 2023. It's a Nuxt 3 project that centers around a WebGL visualization that ebs and flows into each page. Notion is used as a CMS for the portfolio, and Heroku and CloudFlare are used for deployment and DNS, respectively.

![Homepage Screenshot](public/documentation/home.jpg)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Runs a development server with HMR (Hot Module Replacement) on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

### Thanks for checking out this repo!
