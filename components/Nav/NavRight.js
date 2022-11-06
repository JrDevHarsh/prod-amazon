import Cart from "../Tab/Cart";
import Language from "../Tab/Language";
import Order from "../Tab/Order";

const NavRight = () => {
  return (
    <div className="static flex float-none h-c-60 w-auto min-w-min">
      <div className="static mt-0.5 pt-[3px] flex float-none" id="nav-tools">
        <Language />
        <Order />
        <Cart />
      </div>
    </div>
  );
};

export default NavRight;
