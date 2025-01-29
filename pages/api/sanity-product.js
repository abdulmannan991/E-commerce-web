import { sanityClient } from "../../sanity";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  const query = `*[_type == "product" && _id == $id][0]`;
  const params = { id };
  const product = await sanityClient.fetch(query, params);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
}
