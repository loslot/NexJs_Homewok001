import { ProductType } from "@/lib/products";
import Link from "next/link";


export default function ProductCard({products} : {products : ProductType[]}){
  return (
    <div className="p-6 grid grid-cols-5 gap-25 container mx-auto">
      {products?.map((p) => (
        <Link href={`/products/${p.id}`} key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.name}</p>
          <p>{p.price}</p>
          <img src={p.images} alt={p.name} />
        </Link>
      ))}
    </div>
  )
}