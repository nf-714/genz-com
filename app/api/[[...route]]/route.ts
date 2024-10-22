import { Hono } from "hono";
import { handle } from "hono/vercel";

import products from "./product.ts";

const app = new Hono().basePath("/api");

const routes = app.route("/products", products);

export const GET = handle(app);

export type AppType = typeof routes;
