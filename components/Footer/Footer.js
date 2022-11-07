import Link from "next/link";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="relative w-full bg-[#232f3e]">
      <a
        href="#header"
        className="reltive block py-4 w-full text-center text-sm font-medium text-white tracking-wider bg-[#37475A] hover:bg-[#485769]"
      >
        Back to top
      </a>
      <FooterMenu />
      <div className="w-full mt-4 border-[1px] border-solid border-[#3a4553]"></div>
      <div className="py-4 w-full flex items-center justify-center">
        <Link
          href="/"
          className="static flex justify-center shrink-0 float-none h-c-50 w-full clear-both outline-0"
          aria-label="Amazon logo"
        >
          <span className="mt-3 bg-amazon-img bg-repeat-x bg-pos-1 float-left -indent-[500px] h-c-30 w-[97px] pointer-events-none"></span>
          <span className="mt-4 block bg-pos-2 float-left h-3.5 w-auto text-sm text-white leading-[14px] pointer-events-none">
            .in
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
