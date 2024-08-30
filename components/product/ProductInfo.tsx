import { Product } from "@/types/home";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";
import CustomButton from "../form/CustomButton";
import ProductQuantity from "./ProductQuantity";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div className="rounded-lg p-6 bg-white  sticky top-5 white-container min-h-64 h-full flex flex-col justify-between">
      <div>
        {/* name , share , fav */}
        <div className="flex justify-between gap-x-5 w-full mb-5">
          <p className=" text-xl font-semibold">{product?.title} </p>
          <div className="flex gap-x-3">
            <FavoriteBorderOutlined />
            <ShareOutlined />
          </div>
        </div>

        <div className="mb-5">
          <p className="">{product.description}</p>
        </div>

        {/* prive and rating */}
        <div className="py-3 space-y-3 border-b">
          {/* price */}
          <p className="font-semibold">
            price: <span>{product.price}$</span>
          </p>

          {/* rating */}
          <div className="flex gap-x-1">
            <p className="font-semibold">rating: </p>
            <Rating value={product.rating.rate} readOnly={true} max={5} />
            <p>({product.rating.count})</p>
          </div>
        </div>
      </div>

      <div>
        {/*  quantity*/}
        <div className="pt-2 pb-4 flex gap-x-2">
          <p className=" text-lg mb-2 font-semibold">quantity :</p>
          {/* meter */}
          <ProductQuantity />
        </div>

        <CustomButton className="primary_btn mb-5">add to cart</CustomButton>
        <CustomButton className="secondary_btn">buy now</CustomButton>
      </div>
    </div>
  );
}
