"use client";
import { useState } from "react";
export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=FabyanCode25",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.Revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <>
      <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
        <h1>{status}</h1>
        <button
          className="text-white bg-gray-800 p-2 rounded-lg"
          onClick={() => revalidate()}
        >
          Revalidate
        </button>
      </div>
    </>
  );
}
