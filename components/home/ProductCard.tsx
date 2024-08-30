"use client";
import { Product } from "@/types/home";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  return (
    <div>
      <Card
        sx={{ height: "100%" }}
        className="relative group flex flex-col justify-between rounded-xl border"
      >
        <div className="hidden h-full w-full group-hover:flex animate-slide-in-down items-center justify-center absolute top-0 bg-DarkBlue bg-opacity-70 ">
          <button
            onClick={() => {
              router.push("/eventDetails");
            }}
            className="btn"
          >
            Show Details
          </button>
        </div>

        <CardMedia
          className="w-full h-auto aspect-[1/1] object-top"
          component="img"
          alt="green iguana"
          height="100%"
          image={product.image}
          loading="lazy"
        />
        <CardContent>
          <div className="w-full mt-5">
            <div className="flex justify-between gap-x-1 w-full mb-2">
              <p className="font-bold truncate">{product.title}</p>
              <div className="text-pink bg-pink bg-opacity-25 px-2 whitespace-nowrap h-fit">
                <p className="">{product.price}</p>
              </div>
            </div>
            <p className="text-xs truncate">{product.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
