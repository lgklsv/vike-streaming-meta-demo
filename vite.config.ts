import vercel from "vite-plugin-vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vikeNode from "vike-node/plugin";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike(), vikeNode("server/index.js"), react({}), tailwindcss(), vercel()],
  build: {
    target: "es2022",
  },

  vercel: {
    additionalEndpoints: [
      {
        // entry file to the server. Default export must be a node server or a function
        source: "./server/index.js",
        // replaces default Vike target
        destination: "ssr_",
        // already added by default Vike route
        route: false,
      },
    ],
  },
});
