// Buat Props detail product, tangkap params di mana di dalamnya ada slug tipe data string
type ProductPageProps = {
  params: {
    slug: string[];
  };
};

// Set Data FakeStoreAPI.com
async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  //   next: {
  //     tags: ["products"],
  //   },
  // }); //Ambil Data Dari FakeStoreAPI.com

  // Ambil API LOKAL
  const res = await fetch("http://localhost:3000/api/product", {
    // cache: "force-cache", //Force-cache agar data lebih cepat dan memaksa Untuk Data Berubah Tiap Ada Perubahan
    cache: "no-store", //Digunakan tidak cache (website lebih lemot)
    next: {
      tags: ["products"], //Tags - Data Apa?
      // revalidate: 30 //Membuat data Revalidate atau berubah tiap 30 detik, untuk kejar performance
    },
  });
  // END API LOKAL
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  // Tangkap Hasil Params dari DetailProduct
  const { params } = props;

  const products = await getData();
  console.log(products);

  console.log(params);
  return (
    <div className="text-center">
      {params.slug ? "Detail Product Page" : "Product Page"}
      <div className="grid grid-cols-4">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <div
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
            </div>
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
