import Link from "next/link";

const Logo = () => {
  return (
    <div
      className="relative top-0 left-0 right-0 bottom-0 pt-1 lg:ml-2.5 flex shrink-0 float-none h-full w-auto"
      id="nav-logo"
    >
      <Link
        href="/"
        className="static m-[1px] pt-[1px] hover:pt-0 pr-2 hover:pr-[7px] pl-1.5 hover:pl-[5px] flex shrink-0 float-none h-c-50 w-full clear-both hover:border hover:border-solid border-white outline-0"
        aria-label="Amazon"
      >
        <span className="mt-3 bg-amazon-img bg-repeat-x bg-pos-1 float-left -indent-[500px] h-c-30 w-[97px] pointer-events-none"></span>
        <span className="mt-4 block bg-pos-2 float-left h-3.5 w-auto text-sm text-white leading-[14px] pointer-events-none">
          .in
        </span>
      </Link>
    </div>
  );
};

export default Logo;
