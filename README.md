# DIME COSMETICS

I used REACT to create this project.

I learned Hydrogen which is a React framework and SDK that you can use to 
build fast and dynamic Shopify custom storefronts and Tailwind CSS which 
works by scanning all of your HTML files, JavaScript components, and any 
other templates for class names, generating the corresponding styles and 
then writing them to a static CSS file.

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn

To create a new Hydrogen app, run:

```bash
npm init @shopify/hydrogen
```

## Running the dev server

Then `cd` into the new directory and run:

```bash
npm install
npm run dev
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `npm run preview`:

```bash
npm run build
npm run preview
```
