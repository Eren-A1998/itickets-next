import React from 'react'

type Props = {}

export default function ProductInfo({}: Props) {
  return (
    <div className="rounded-lg p-6 bg-white  sticky top-5 white-container h-full flex flex-col justify-between">
      <div>
        {/* name , share , fav */}
        {/* <div className="flex items-center justify-between gap-x-5 w-full">
          <p className="font-Almarai_Bold text-xl truncate">{product?.name} </p>
          <div className="flex gap-x-3">
            <Favourite isFavourite={product?.is_favorite} id={product?.id} />
            <Share
              title={product?.name || ""}
              url={pathName}
              text={product?.desc || ""}
            />
          </div>
        </div> */}

        <div className="py-3 space-y-3 border-b border-salla-grey6">
          {/* price */}
          {/* <PriceOnSale
            price={product?.price?.toString() || ""}
            old_price={product?.old_price?.toString() || ""}
          /> */}

          {/* rating */}
          {/* {product?.total_rate_avg && product.total_rate_count ? (
            <RatingWidget
              count={product?.total_rate_count.toString()}
              avg={product?.total_rate_avg.toString()}
            />
          ) : null} */}
          {/* <div className="flex gap-x-2">
          <div className="flex gap-x-1 items-center">
            <Star className="w-3 h-3" />
            <p className="text-salla-grey2">4.8</p>
          </div>
          <p className="text-salla-grey2 underline underline-offset-2">
            (314 تقييمات)
          </p>
        </div> */}
        </div>

        {/* sizes */}
        {product?.attributes ? (
          product.attributes.map((p, idx) =>
            isEmpty(p.options) ? (
              <></>
            ) : (
              <div key={p.id} className="pt-2 pb-4 border-b border-salla-grey6">
                <p className="font-Almarai_Bold text-lg mb-2">{p.name}</p>
                <div className="flex items-center flex-wrap gap-x-2 gap-y-3 max-h-20 overflow-x-auto scrollbar-hide">
                  {p.options.map((option) => (
                    <div
                      onClick={() => setProduct_option_id(option.id)}
                      key={option.id}
                      className={`border px-5 py-1 cursor-pointer ${
                        option.active
                          ? product_option_id === option.id
                            ? "bg-salla-primary-text text-[#fff]"
                            : "hover:bg-salla-grey2 hover:bg-opacity-10 border-salla-grey4 text-salla-grey2"
                          : "border-salla-grey4 text-salla-grey2 relative before:absolute before:left-0 before:top-[45%] before:right-0 before:border-t before:skew-y-[-30deg] opacity-35 bg-white"
                      }`}
                    >
                      {option.name}
                    </div>
                    // <>
                    //   <div className="hover:bg-salla-grey2 hover:bg-opacity-10 border border-salla-grey4 text-salla-grey2 px-5 py-1 cursor-pointer">
                    //     38
                    //   </div>
                    //   <div className=" border   px-5 py-1 cursor-pointer bg-salla-primary-text text-[#fff]">
                    //     39
                    //   </div>
                    //   <div className=" border border-salla-grey4 text-salla-grey2 px-5 py-1 cursor-pointer relative before:absolute before:left-0 before:top-[45%] before:right-0 before:border-t before:skew-y-[-30deg] opacity-35 bg-white">
                    //     40
                    //   </div>
                    // </>
                  ))}
                </div>
              </div>
            )
          )
        ) : (
          <p>{product?.desc}</p>
        )}
      </div>

      <div>
        {/*  quantity*/}

        {/* {toNumber(product?.quantity) ? ( */}
        <div className="pt-2 pb-4">
          <p className="font-Almarai_Bold text-lg mb-2">{t("quantity")}</p>
          {/* meter */}
          {/* <QuantityMeter
            value={value}
            onchange={(v) => {
              setValue(v);
            }}
          /> */}
          <QuantitySelector
            value={value}
            onchange={(v) => {
              setValue(v);
            }}
            stock={product?.quantity}
            showApply={false}
          />

          {!!!toNumber(product?.quantity) ? (
            <p className="text-salla-red text-xs pt-2">{t("out_of_stock")}</p>
          ) : null}
        </div>

        <CustomButton
          disabled={
            loadingBtn === "add_to_cart" || !!!toNumber(product?.quantity)
          }
          isLoading={loadingBtn === "add_to_cart"}
          value="add_to_cart"
          className="!bg-salla-primary-text text-white w-full mt-3 dark-btn"
          onClick={() => handleAddToCart({ buy_now: false })}
        />
        <CustomButton
          disabled={loadingBtn === "buy_now" || !!!toNumber(product?.quantity)}
          isLoading={loadingBtn === "buy_now"}
          primary={false}
          value="buy_now"
          className=" w-full mt-3"
          onClick={() => handleAddToCart({ buy_now: true })}
        />
      </div>
    </div>
  );
}