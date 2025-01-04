import { client } from "@/sanity/lib/client";

const fetchProducts = async () => {
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

export async function GET() {
  try {
    const products = await fetchProducts();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
