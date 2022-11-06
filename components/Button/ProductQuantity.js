import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  findItemInCart,
  getProductFromId,
  removeFromCart,
} from "../../store/slices/userSlice";

const ProductQuantity = ({ productId }) => {
  const product = useSelector(getProductFromId(productId));
  const prod = useSelector(findItemInCart(Number(productId) + 1));
  const dispatch = useDispatch();

  const handleChangeQuantity = (value) => {
    value = parseInt(value);
    let tempProduct = { ...product };
    if (value === 0) {
      return dispatch(removeFromCart(tempProduct.id));
    }
    tempProduct.quantity = value;
    dispatch(addToCart(tempProduct));
  };

  return (
    <div className="my-1 px-2 w-full flex items-center">
      <label htmlFor="quantity" className="text-base text-black font-medium">
        Quantity:
      </label>
      <div className="relative w-auto">
        <select
          className="ml-1 p-1 pr-0 border border-solid border-[#ddd] rounded outline-none cursor-pointer"
          id="quantity"
          defaultValue={prod?.quantity ? prod.quantity : 0}
          onChange={(e) => handleChangeQuantity(e.target.value)}
        >
          {[...Array(15)].map((_, qtyIdx) => (
            <option key={qtyIdx} value={qtyIdx}>
              {qtyIdx === 0 ? "0: Delete" : qtyIdx}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductQuantity;
