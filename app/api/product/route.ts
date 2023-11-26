import { NextRequest, NextResponse } from "next/server";

// Siapkan Data
const data = [
  {
    id: 1,
    title: "Sepatu Nevada",
    price: 200000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 2,
    title: "Sepatu Neon",
    price: 300000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdfc7c74-b911-4661-b1e5-a5f7d7a48b81/air-max-excee-shoe-lPbXqt.png",
  },
  {
    id: 3,
    title: "Sepatu Keren",
    price: 40000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8535fa44-afb6-4a64-aac4-3a9b769af79e/air-max-pulse-shoes-zD62r3.png",
  },
 
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); // Ambil Search Paramnya dari console log
  const id = searchParams.get("id"); //jadinya ngambil id nya contoh -> (?id=1)
  // console.log(id); //Tampilkan data

  // Menampilkan data sesuai yang dicari aja
  if (id) {
    const detailProduct = data.find((product) => product.id === Number(id)); //Temukan Detail Product dengan mengconvert id ke number
    // Jika ada detail product (?id=...)
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    // Jika tidak ada detail product
    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
