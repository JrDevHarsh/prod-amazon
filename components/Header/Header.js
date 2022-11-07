import NavFill from "../Nav/NavFill";
import NavLeft from "../Nav/NavLeft";
import NavRight from "../Nav/NavRight";

const Header = () => {
  return (
    <header className="relative flex float-none h-c-60" id="header">
      <div
        className="fixed top-0 left-0 flex flex-col flex-nowrap flex-flex-auto float-none min-w-[1000px] w-full z-[198]"
        id="navbar"
        role="navigation"
      >
        <div
          className="static flex flex-row flex-nowrap float-none h-c-60 w-full z-[5] bg-[#131921]"
          id="nav-belt"
        >
          <NavLeft />
          <NavFill />
          <NavRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
