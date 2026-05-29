import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      federation({
        name: "mainApp",

        remotes: {
          childApp1: "http://localhost:5001/assets/remoteEntry.js",

          childApp2: "http://localhost:5002/assets/remoteEntry.js",
        },

        shared: {
          react: {},
          "react-dom": {},
        },
      }),
    ],

    server: {
      port: 5000,
    },

    preview: {
      port: 5000,
      strictPort: true,
    },
  };
});
