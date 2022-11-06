import { useSelector } from "react-redux";
import BuyBox from "../Card/BuyBox";
import ProductCart from "../Card/ProductCart";

const CartLayout = () => {
  const products = useSelector((state) => state.app.cart);

  return (
    <div className="mx-auto p-2 flex flex-row items-start justify-center gap-4 max-w-[1480px]">
      <div className="bg-white p-4 w-9/12">
        <div className="flex items-end justify-between">
          <h1 className="text-black text-3xl font-normal tracking-wider">
            Shopping Cart
          </h1>
          <span className="text-[#565959] text-sm font-normal tracking-wide">
            Price
          </span>
        </div>
        {/* Horizontal line */}
        <div className="w-full border-t my-4 border-solid border-t-[#e7e7e7]" />
        {products.length === 0
          ? "Add To Cart"
          : products.map((product) => (
              <ProductCart
                key={`cart-product-${product.id}`}
                product={product}
              />
            ))}
      </div>
      <BuyBox />
    </div>
  );
};

export default CartLayout;
