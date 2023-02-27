# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```bash
# pnpm
pnpm install
pnpm run dev
npm run preview
pnpm run generate
```

## Common problems

Po instalaci tailwindcss a registrování jako modulu psalo "No utility classes were detected in your source files". Ve výchozí configuraci se nevyhledává v .tsx formátu komponent!

## Inspiration

Main idea came from my dear friend's online contact card http://sodae.cz/

Design is party inspired by https://spotlight.tailwindui.com/

### How to import components into .tsx format components
The default VSC import method using ~~/.nuxt/components results in an error. Solution is to address with #components which is defined in tsconfig.json.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
