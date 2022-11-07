import Image from "next/legacy/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/userSlice";
import ProductQuantity from "../Button/ProductQuantity";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-4 flex items-start gap-x-4 w-full">
      <div className="w-1/6">
        <Link href={`/product/${product.id - 1}`}>
          <Image src={product.image} width={160} height={180} alt="1 image" />
        </Link>
      </div>
      <div className="w-4/6 flex flex-col items-start gap-1">
        <Link href={`/product/${product.id - 1}`}>
          <h2 className="text-black text-xl font-semibold tracking-wider">
            {product.title}
          </h2>
        </Link>
        <p className="text-sm font-medium tracking-wider text-[#007600]">
          In Stock
        </p>
        <div className="flex items-center gap-4">
          <ProductQuantity productId={Number(product.id) - 1} />
          <div className="w-0.5 h-5 border-r border-solid border-r-[#ddd]" />
          <p
            onClick={() => dispatch(removeFromCart(product.id))}
            className="text-sm text-[#007185] cursor-pointer hover:underline font-normal tracking-wider"
          >
            Delete
          </p>
        </div>
      </div>
      <div className="w-1/6">
        <p className="text-black text-lg text-right font-semibold tracking-wider">
          &#36;
          {product.price
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
