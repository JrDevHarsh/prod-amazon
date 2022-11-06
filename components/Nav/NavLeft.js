import Location from "../Tab/Location";
import Logo from "../Tab/Logo";

const NavLeft = () => {
  return (
    <div className="static flex float-none h-c-60 w-auto">
      <Logo />
      <Location />
    </div>
  );
};

export default NavLeft;
