// books.ts
import { getAllProducts, getProductById } from "@/queries/products";
import { Hono } from "hono";
//enter product bulks

// get products

//get products/:id

const app = new Hono();

app.get("/", async (c) => {
  const products = await getAllProducts();
  return c.json(products);
});

app.get("/:id", async (c) => {
  const userId = c.req.param("id");
  const product = await getProductById(userId);

  return c.json(product);
});
export default app;
