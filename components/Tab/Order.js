import Link from "next/link";

const Order = () => {
  return (
    <Link
      href="/orders"
      className="static tp-[1px] ml-0.5 px-[9px] hover:px-2 pb-2.5 flex flex-col flex-nowrap justify-center shrink-0 float-none h-c-50 overflow-hidden hover:border hover:border-white border-solid rounded-sm"
    >
      <span className="static mt-[9px] flex items-center float-none h-3.5 text-white text-xs leading-c-14 font-normal">
        Returns
      </span>
      <span className="static flex items-center float-none text-white text-sm leading-c-15 font-bold">
        &#38; Orders
      </span>
    </Link>
  );
};

export default Order;
