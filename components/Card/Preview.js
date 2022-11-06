import Image from "next/legacy/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getProductFromId } from "../../store/slices/userSlice";
import Rating from "../Rating/Rating";

const Preview = ({ productId }) => {
  const product = useSelector(getProductFromId(productId));
  const TITLE_LENGTH = 33;

  return (
    <Link href={`/product/${productId}?title=${product.title}`}>
      <div className="block w-80 min-h-[320px] h-full text-dark-black overflow-hidden">
        <div className="relative h-full flex flex-col items-start py-5 bg-white">
          <div className="relative w-full min-h-[210px] text-center px-5">
            <Image
              src={product.image}
              height={180}
              width={250}
              objectFit="contain"
              alt="image"
            />
          </div>
          <div className="mt-2 px-5 w-full">
            <div className="relative w-full overflow-hidden">
              <span
                className={`${
                  product.title.length > TITLE_LENGTH ? "block" : "hidden"
                } absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-[#ffffff66] to-white`}
              ></span>
              <p className="w-full text-base text-current hover:text-c-orange hover:underline font-semibold whitespace-nowrap">
                {product.title}
              </p>
            </div>
            <Rating rating={product.rating} />
            <p className="flex items-start text-lg text-c-red font-semibold">
              <span className="mt-1 text-xs">&#36;</span>
              <span>
                {product.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Preview;
