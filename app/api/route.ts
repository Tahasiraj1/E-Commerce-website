import { client } from "@/sanity/lib/client";

export const fetchProducts = async () => {
  const query = `*[_type == "scents"]{
        id,
        name,
        quantity,
        price,
        image,
        ratings,
        tags,
        description,
      }`;

  const products = await client.fetch(query);
  return products;
};
