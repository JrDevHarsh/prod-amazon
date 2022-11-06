import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../store/slices/userSlice";
import Preview from "../Card/Preview";
import Skeleton from "../Card/Skeleton";

const ProductContainer = () => {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();
  const mount = useRef(true);

  useEffect(() => {
    if (products.length === 0 && mount.current) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => dispatch(updateProducts(data)))
        .catch((err) => console.log(err));
    }
    return () => {
      mount.current = false;
    };
  }, []);

  return (
    <div className="relative px-2">
      <div className="mx-auto py-5 px-0 flex justify-center flex-row flex-wrap gap-4 max-w-[1480px] w-full">
        {products.length === 0
          ? [...Array(8)].map((_, index) => (
              <Skeleton key={`skeleton-${index}`} />
            ))
          : products.map((product, index) => (
              <Preview key={`product-${product.id}`} productId={index} />
            ))}
      </div>
    </div>
  );
};

export default ProductContainer;
