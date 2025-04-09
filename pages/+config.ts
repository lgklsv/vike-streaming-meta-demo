import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";
import vikeReactQuery from "vike-react-query/config";
import vikeServer from "vike-server/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",
  stream: "web",

  server: "server/index.js",
  extends: [vikeServer, vikeReact, vikeReactQuery],
} satisfies Config;
