# Neel Dalsania | Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. It includes dark/light themes, animated sections, and a Web3Forms contact form.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

For the contact form, create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

Get an access key from [Web3Forms](https://web3forms.com/). The `.env` file is ignored by Git.

## Deploy

Import the repository into [Vercel](https://vercel.com/), then add `VITE_WEB3FORMS_ACCESS_KEY` under **Project Settings → Environment Variables** and deploy. Restrict the key to your site domain in Web3Forms.

## Useful commands

```bash
npm run build    # Type-check and create the production build
npm run lint     # Check code style
npm run preview  # Preview the production build locally
```

Update portfolio content in `src/data/portfolio.ts`. To add a resume, place `resume.pdf` in `public/`.
