import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import copy from "vite-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // copy({
    //   targets: [
    //     { src: "public/_redirects", dest: "." }, // Copy _redirects to the root of build output
    //   ],
    // }),
  ],
});
