import ProductInfo from "@/components/product/ProductInfo";
import { Product } from "@/types/home";
import Image from "next/image";

type Props = {
  params: { id: string };
};
export default async function ProductDetails({ params: { id } }: Props) {
  const product: Product = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
  )
    .then((res) => res.json())
    .catch();

  console.log({ product });

  return (
    <div className="section_padding">
      {/* details */}
      <div className="grid  md:grid-cols-2 gap-10 relative">
        <div className="max-w-xl lg:max-w-3xl w-full mx-auto">
          <Image
            src={product.image}
            alt="peoduct img"
            width={1000}
            height={1000}
            className="w-full aspect-square "
          />
        </div>
        <div className="max-w-3xl w-full mx-auto">
          <ProductInfo product={product} />
        </div>
        {/* <div className="col-span-5 lg:col-span-3">
          <AboutProduct product={ProductDetails.data} />
        </div> */}
      </div>

      {/* similar products */}
      {/* <div className="mt-5">
        <ShowMore title="similar_products" />
        <div className="flex gap-x-7 overflow-auto scrollbar-hide py-5">
          {(similarProducts?.data?.data as product[]).map((itm, idx) => (
            <ProductCard
              key={idx}
              product={itm}
              containerClass={`${productCardClass}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
