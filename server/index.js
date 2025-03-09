import { serve } from "@hono/node-server";
import { Hono } from "hono";
import vike from "vike-node/hono";

startServer();

function startServer() {
  const app = new Hono();
  app.use(vike());
  const port = 3000;
  serve(
    {
      fetch: app.fetch,
      port,
    },
    () => console.log(`Server running at http://localhost:${port}`),
  );
}
