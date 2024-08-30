import ProductCard from "@/components/home/ProductCard";
import { Product } from "@/types/home";

type Props = {};

export default async function UpcomingEvents({}: Props) {
  const products: Product[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
  )
    .then((res) => res.json())
    .catch();

  return (
    <div className="section_padding">
      {/* title and view all */}
      <div className="flex justify-between gap-x-3 whitespace-nowrap">
        <p className="font-bold text-lg md:text-3xl text-DarkBlue capitalize">
          all products
        </p>
      </div>

      {/* upcoming events */}

      <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((i) => {
          return <ProductCard product={i} key={i.id} />;
        })}
      </div>
    </div>
  );
}
