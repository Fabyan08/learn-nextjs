// import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function ProductDetailPage(props: any) {
  const { params } = props;

  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  console.log(product);

  return (
    <div className="container mx-auto my-18">
      <div className="w-1/2 mx-auto border-4 border-gray-400 rounded-lg">
        <img
          src={product.data.image}
          className="w-full object-cover aspect-square col-span-2"
          alt=""
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data.title}</h3>
          <p>{product.data.price}</p>
        </div>
      </div>
    </div>
  );
}
