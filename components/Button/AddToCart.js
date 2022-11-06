import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductFromId } from "../../store/slices/userSlice";

const AddToCart = ({ productId }) => {
  const product = useSelector(getProductFromId(productId));
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    let updatedProduct = { ...product };
    updatedProduct.quantity = 1;
    updatedProduct.isSelected = true;
    dispatch(addToCart(updatedProduct));
  };

  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="my-2 mx-auto block min-w-[180px] h-[30px] text-center text-sm text-black bg-[#ffd814] hover:bg-[#f7ca00] border border-solid border-[#fcd200] cursor-pointer shadow-c-4 rounded-2xl"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
