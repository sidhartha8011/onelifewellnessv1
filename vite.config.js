import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "dist", // Change the output folder from 'dist' to 'build'
  },
  plugins: [tailwindcss()],
});
