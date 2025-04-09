import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";
import vikeReactQuery from "vike-react-query/config";
import vikeServer from "vike-server/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const isProduction = process.env.NODE_ENV === "production";

const baseAssets = isProduction ? "https://cdn.example.org/my-website-assets/" : undefined;

console.log("BASE_ASSETS", baseAssets);

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",
  stream: "web",
  baseAssets,

  server: "server/index.js",
  extends: [vikeServer, vikeReact, vikeReactQuery],
} satisfies Config;
