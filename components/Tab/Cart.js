import Link from "next/link";
import { useSelector } from "react-redux";
import { getCartQty } from "../../store/slices/userSlice";

const Cart = () => {
  const cart = useSelector(getCartQty);

  return (
    <Link
      href="/cart"
      className="group static ml-0 lg:ml-0.5 mr-[3px] lg:mr-[11px] top-[1px] px-[9px] hover:px-2 pb-[11px] hover:pb-2.5 flex justify-center shrink-0 float-none h-c-50 leading-c-44 overflow-hidden hover:border hover:border-white border-solid rounded"
      id="nav-cart"
    >
      <div className="relative pb-[1px] flex flex-col flex-nowrap justify-end items-start float-none">
        <span className="absolute top-2 group-hover:top-[7px] right-auto left-[13px] flex items-center justify-center float-none w-[19px] text-c-orange text-center text-base leading-4 font-bold">
          {cart}
        </span>
        <span className="static left-2.5 top-[11px] flex items-center h-[26px] w-[38px] bg-amazon-img bg-pos-12 bg-repeat-x float-none overflow-hidden"></span>
      </div>
      <div className="static flex flex-col items-start justify-end flex-nowrap float-none">
        <span className="h-3.5"></span>
        <span className="static flex flex-col items-start flex-nowrap float-none text-white text-sm leading-c-15 font-bold">
          Cart
        </span>
      </div>
    </Link>
  );
};

export default Cart;
