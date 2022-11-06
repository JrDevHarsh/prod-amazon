import Link from "next/link";
import ProductQuantity from "../Button/ProductQuantity";

const BuyBox = ({ productId }) => {
  const newDate = getUpcomingTime();
  const date_raw = newDate.toLocaleDateString("en-us", { day: "numeric" });
  const month_raw = newDate.toLocaleDateString("en-us", { month: "long" });
  const day_raw = newDate.toLocaleDateString("en-us", { weekday: "long" });

  function getUpcomingTime() {
    let today_date = new Date();
    let set_date = 5;
    today_date.setDate(today_date.getDate() + set_date);
    return today_date;
  }

  return (
    <div className="w-3/12 p-2 sticky h-full top-0">
      <div className="my-4 px-2 py-3 flex flex-col items-center border border-solid border-[#D5D9D9] rounded">
        {/* Delivery date */}
        <div className="py-1 px-2 text-sm w-full">
          <span className="text-[#007185] hover:text-[#C7511F] cursor-pointer hover:underline font-normal tracking-wider">
            FREE delivery
          </span>
          <span className="ml-1 text-black font-semibold">
            {`${day_raw}, ${date_raw} ${month_raw}.`}
          </span>
        </div>
        {/* Address details */}
        <div className="my-1 px-2 flex items-center justify-start w-full">
          {/* <HiOutlineLocationMarker /> */}
          <span className="ml-1 text-[#007185] hover:text-[#C7511F] text-xs font-normal cursor-pointer tracking-wider">
            Select delivery location
          </span>
        </div>
        {/* In stock */}
        <div className="my-1 px-2 w-full">
          <p className="text-lg font-semibold tracking-wider text-[#007600]">
            In Stock.
          </p>
        </div>
        {/* Quantity details */}
        <ProductQuantity productId={productId} />
        {/* Add to cart button */}
        <div className="w-full my-2 flex items-center justify-center">
          <Link
            href="/cart"
            className="w-full py-2 px-4 text-center text-sm text-black font-medium bg-[#FFD814] hover:bg-[#F7CA00] border border-solid border-[#FCD200] hover:border-[#F2C200] hover:shadow-[0_2px_5px_0_#d5d9d980] cursor-pointer rounded-3xl"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
