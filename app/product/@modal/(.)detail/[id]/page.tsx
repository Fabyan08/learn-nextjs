// "use client";
import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  console.log(product);

  return (
    <>
      <Modal>
        <img
          src={product.data.image}
          className="w-full object-cover aspect-square col-span-2"
          alt=""
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data.title}</h3>
          <p>{product.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
