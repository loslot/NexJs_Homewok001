"use client";
import { useEffect, useState } from "react";
import ProductCardComponent from "@/components/products/product-card";
import ProductCard from "@/components/products/product-card";
import { ProductType } from "@/lib/products";

// base url
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProductPage() {
  const [products, setProduct] = useState<ProductType[]>([]);
  // useEffect
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      const data = await response.json();
      setProduct(data);
    }
    getData();
  }, []);
  console.log("data : ", products);

  return (
    <ProductCard products={products}/>
  );
}
