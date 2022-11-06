import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getProductFromId,
  removeFromCart,
} from "../../store/slices/userSlice";

const Quantity = ({ productId }) => {
  const product = useSelector(getProductFromId(productId));
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

  const handleDelete = () => {
    const { id } = product;
    dispatch(removeFromCart(id));
  };

  return (
    <div className="mt-1 w-full">
      <div className="relative flex items-center justify-center w-full">
        <div className="inline-block min-w-[1px] text-center text-black rounded-lg">
          <button className="group relative block h-7 shadow-c-5 focus-within:shadow-c-6 bg-[#f0f2f2] hover:bg-[#E3E6E6] overflow-hidden cursor-pointer border border-solid border-[#d5d9d9] focus:border-c-blue rounded-lg z-10">
            <span className="relative px-2.5 block h-full leading-7 text-current text-left text-sm bg-transparent overflow-hidden">
              <span className="mr-2">Qty:</span>
              <span className="text-black">{product.quantity}</span>
              <span className="ml-0.5 inline-block w-4 h-2.5 bg-amazon-img bg-no-repeat bg-pos-14 group-focus:bg-pos-15"></span>
            </span>
            <select
              name="quantity"
              className="absolute top-0 left-0 h-full max-w-full opacity-0 cursor-pointer z-[5]"
              defaultValue={product.quantity}
              onChange={(e) => handleChangeQuantity(e.target.value)}
            >
              {[...Array(11)].map((_, index) => (
                <option
                  key={`quantity-${index}`}
                  // selected={quantity}
                  value={index}
                >
                  {index === 0 ? "0: Delete" : index}
                </option>
              ))}
            </select>
          </button>
        </div>
        <span
          onClick={handleDelete}
          className="ml-4 text-sm text-c-blue hover:underline font-nomal cursor-pointer"
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default Quantity;
