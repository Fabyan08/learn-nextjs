"use client";
import { getData } from "@/services/products";
import Link from "next/link";

// Buat Props detail product, tangkap params di mana di dalamnya ada slug tipe data string
type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage(props: ProductPageProps) {
  // Tangkap Hasil Params dari DetailProduct
  const { params } = props;

  const products = await getData("http://localhost:3000/api/product"); //TANGKAP URL DARI SERVICES
  console.log(products);

  console.log(params);
  return (
    <div className="text-center">
      {params.slug ? "Detail Product Page" : "Product Page"}
      <div className="grid grid-cols-4">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              className="text-white m-2 border-2 bg-gray-700 border-gray-800 p-4 w-fit  h-fit  rounded-xl"
              key={product.id}
            >
              <img
                src={product.image}
                className="w-96 h-96 rounded-lg object-cover"
                alt="Image"
              />
              <h1 className="text-xl font-semibold mt-4">
                {product.title.length > 25
                  ? product.title.substring(0, 25) + "..."
                  : product.title}
              </h1>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg">{product.price}</p>
                </div>
                <div>
                  <button className="text-white bg-blue-500 p-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        {params.slug && (
          <>
            <h2>gender: {params.slug[0]}</h2>
            <h2>category: {params.slug[1]}</h2>
            <h2>brand: {params.slug[2]}</h2>
          </>
        )}
      </div>
    </div>
  );
}
