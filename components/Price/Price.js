import { useEffect, useRef, useState } from "react";

const MAX_VALUE = 25;
const MIN_VALUE = 5;

const Price = ({ price }) => {
  const [discount, setDiscount] = useState(0);
  const priceRef = useRef(false);

  useEffect(() => {
    if (priceRef.current) {
      let value = Math.floor(
        Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE
      );
      setTimeout(() => setDiscount((prev) => prev + value), 1000);
    }
    return () => (priceRef.current = true);
  }, []);

  return discount === 0 ? (
    <div className="relative animate-pulse">
      <span className="block mt-1 w-48 bg-c-gray py-2"></span>
      <span className="block mt-1 w-48 bg-c-gray py-3"></span>
      <span className="block mt-1 w-48 bg-c-gray py-2"></span>
    </div>
  ) : (
    <div className="flex flex-col items-start">
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          M.R.P:
        </span>
        <span className="ml-1 text-sm text-[#565959] font-normal tracking-wider line-through">
          &#36;
          {(price + price * (discount / 100))
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          Deal Price:
        </span>
        <span className="ml-1 text-lg text-[#B12704] font-semibold tracking-wider">
          &#36;
          {price
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          You Save:
        </span>
        <span className="ml-1 text-sm text-[#B12704] font-semibold tracking-wider">
          &#36;{`${(price * (discount / 100)).toFixed(2)} (${discount}%)`}
        </span>
      </div>
    </div>
  );
};

export default Price;
