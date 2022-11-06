const Location = () => {
  return (
    <div
      className="static lg:ml-0.5 p-0 flex float-none h-c-60 w-auto"
      id="nav-global-location-slot"
    >
      <span className="static flex float-none w-fit">
        <div className="static my-[5px] mr-0.5 hover:mx-0.5 px-[9px] hover:pr-2 hover:pl-1.5 flex flex-row flex-nowrap items-center float-none h-auto w-fit text-c-white hover:border hover:border-solid border-white outline-0 rounded-sm cursor-pointer">
          <div className="static top-2 left-0.5 mt-2 flex float-none bg-amazon-img bg-repeat-x bg-pos-3 h-[18px] w-[15px]"></div>
          <div className="static ml-[3px] flex flex-col flex-nowrap float-none">
            <div className="inline-block whitespace-nowrap float-none clear-both text-xs leading-c-14 text-c-gray font-normal">
              Hello
            </div>
            <div className="pb-[1px] inline-block whitespace-nowrap float-none clear-both text-sm leading-c-15 text-white font-bold">
              Select your address
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Location;
