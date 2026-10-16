import { accessSync, constants, copyFileSync, mkdirSync } from 'node:fs';

const source = new URL('../.external/bee-and-flower/bee-and-flower/', import.meta.url);
const destination = new URL('../dist/apps/baby-programming/bee-and-flower/', import.meta.url);
const files = ['index.html', 'favicon.ico', 'image.png'];

// Require the complete app before adding it to the generated site.
for (const file of files) accessSync(new URL(file, source), constants.R_OK);
mkdirSync(destination, { recursive: true });
for (const file of files) copyFileSync(new URL(file, source), new URL(file, destination));
