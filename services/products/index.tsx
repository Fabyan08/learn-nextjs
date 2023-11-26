// CATAT
// async function getData() {
//   // const res = await fetch("https://fakestoreapi.com/products", {
//   //   cache: "no-store",
//   //   next: {
//   //     tags: ["products"],
//   //   },
//   // }); //Ambil Data Dari FakeStoreAPI.com

//   // Ambil API LOKAL
//   const res = await fetch("http://localhost:3000/api/product", {
//     // cache: "force-cache", //Force-cache agar data lebih cepat dan memaksa Untuk Data Berubah Tiap Ada Perubahan
//     cache: "no-store", //Digunakan tidak cache (website lebih lemot)
//     next: {
//       tags: ["products"], //Tags - Data Apa?
//       // revalidate: 30 //Membuat data Revalidate atau berubah tiap 30 detik, untuk kejar performance
//     },
//   });
//   // END API LOKAL
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }


export const getData = async (url: string) => {
  // PANGGIL API
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["products"],
    },
  });
  // END API LOKAL
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
