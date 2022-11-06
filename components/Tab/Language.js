const Language = () => {
  return (
    <div
      className="group/tab relative mr-0 mx-[1px] px-[9px] hover:px-2 pb-2.5 flex shrink-0 flex-col flex-nowrap justify-center float-none h-c-50 text-c-white leading-c-44 cursor-pointer hover:border hover:border-white border-solid rounded-sm"
      aria-label="Choose a language for shopping."
    >
      {/* selected language */}
      <div className="static flex flex-col flex-nowrap justify-center items-center float-none">
        <span className="h-3.5"></span>
        <span className="static ml-[1px] p-0 flex items-center float-none text-white text-sm font-bold leading-c-14">
          <span className="static mr-0.5 mb-[1px] flex items-center float-none h-[18px] w-6 bg-country-img bg-pos-7 scale-90"></span>
          <span className="static flex items-center float-none text-sm text-white leading-c-14 font-bold">
            EN
          </span>
          <span className="static left-9 mt-1.5 ml-0.5 flex items-center float-none h-0 w-0 border-4 border-solid border-transparent border-t-[#a7acb2] visible"></span>
        </span>
      </div>
      {/* dropdown box */}
      <div className="absolute top-full left-0 -mt-[3px] -ml-0.5 p-3.5 pb-[7px] w-60 hidden group-hover/tab:block bg-white border border-solid border-[#bbb] rounded shadow-c-2">
        {/* arrow icon */}
        <div className="absolute -top-[9px] left-[53.375px] -ml-[1px] h-0 w-0 border-[9px] border-t-0 border-transparent border-solid border-b-white"></div>
        {/* dropdown content */}
        <div className="text-xs text-c-black">
          <span className="relative pb-[7px] block clear-both leading-[16px] cursor-default">
            {/* default selected langauge */}
            <span className="block text-[13px] text-[#444] font-normal">
              <span className="relative top-[3px] mr-[0.5em] w-[18px] inline-block h-[18px] bg-country-img bg-pos-8"></span>
              <span>English</span>
              {" - "}
              <span>EN</span>
            </span>
          </span>
          {/* divider */}
          <div className="relative mt-1.5 ml-6 mb-[9px] block h-[1px] bg-[#eee] overflow-hidden"></div>
          {/* other languages */}
          <span className="group/list relative pb-[7px] block cursor-pointer clear-both">
            <span className="block text-[13px] text-[#444] group-hover/list:text-c-orange group-hover/list:underline font-normal">
              <span className="relative top-[3px] mr-[0.5em] w-[18px] h-[18px] inline-block bg-country-img bg-pos-9 group-hover/list:bg-pos-10"></span>
              <span>हिन्दी</span>
              {" - "}
              <span>HI</span>
            </span>
          </span>
          {/* divider */}
          <div className="relative mt-1.5 ml-6 mb-[9px] block h-[1px] bg-[#eee] overflow-hidden"></div>
          <span className="relative pb-[7px] block cursor-pointer clear-both">
            <span className="block text-[13px] text-[#444] font-normal">
              <span className="relative top-1 mr-[0.5em] w-[17px] h-[13px] inline-block bg-country-img bg-pos-11"></span>
              <span>You are on Prod-amazon</span>
            </span>
          </span>
          {/* change country/region */}
          <span className="group/item relative pb-[7px] block cursor-pointer clear-both text-[#007185]">
            <span className="block text-[13px] text-[#444] group-hover/item:text-c-orange group-hover/item:underline font-normal">
              <span className="ml-6 mt-2.5 text-[#007185]">
                Change country/region.
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Language;
