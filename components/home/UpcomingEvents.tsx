import { Product } from "@/types/home";
import EventCard from "./EventCard";

type Props = {};

export default async function UpcomingEvents({}: Props) {
  const products: Product[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
  )
    .then((res) => res.json())
    .catch();

  console.log({ products });

  return (
    <div className="px-5 md:px-16 py-8">
      {/* title and view all */}
      <div className="flex justify-between gap-x-3 whitespace-nowrap">
        <p className="font-bold text-lg md:text-3xl text-DarkBlue">
          UPCOMING EVENTS
        </p>
        {/* <div className="flex items-center gap-x-1">
          <CustomButton className="btn">
            View ALL
          </CustomButton>
          <KeyboardArrowRightOutlined sx={{ color: "#563E91", fontSize: 20 }} />
        </div> */}
      </div>

      {/* scrollable tabs */}
      {/* <div className="pt-5 mt-3">
       <CategoriesTabs />
      </div> */}

      {/* upcoming events */}

      <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((i) => {
          return <EventCard product={i} />;
        })}
      </div>
    </div>
  );
}
