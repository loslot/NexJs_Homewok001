import { notFound } from "next/navigation";

export default async function DetailProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );

  if (!response.ok) {
    notFound();
  }

  const product = await response.json();

  return (
   <>
   <div
      className="m-5 cursor-pointer rounded-lg bg-amber-100 p-5 transition hover:scale-[1.02]
      hover:bg-amber-200 w-100 container mx-auto"
    >
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <div className="grid grid-cols-3 gap-5">
        {product.images?.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index}`}
            width={500}
          />
        ))}
      </div>

    </div>
    <button className=" cursor-pointer hover:bg-red-500 bg-blue-500 mb-10 w-20 container mx-auto rounded-xl">Buy now</button>
   </>
  );
}