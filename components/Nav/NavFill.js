import { useState } from "react";

const NavFill = () => {
  const [category, setCategory] = useState("All");

  const categoryList = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "Music",
    "Musical Instruments",
    "Office Products",
    "Pet Supplies",
    "Prime Video",
    "Same-Day Delivery",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Subscribe & Save",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches",
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="static flex flex-auto float-none h-c-60 w-auto overflow-visible">
      <dir
        className="static mx-2.5 my-0 py-2.5 pr-1 pl-[3px] flex flex-auto float-none whitespace-nowrap h-c-60 w-auto rounded overflow-hidden"
        id="nav-search"
      >
        <form
          className="static flex flex-1 float-none h-c-40"
          method="GET"
          role="search"
          name="site-search"
          onSubmit={handleOnSubmit}
        >
          <div className="static -top-[5px] flex float-none h-auto w-auto focus-within:shadow-c-1 rounded rounded-tr-none rounded-br-none focus-within:z-10 overflow-hidden">
            <div>
              <div className="relative top-0 right-0 bottom-0 left-0 pl-[5px] flex float-none text-[#555] hover:text-black group-focus-within:text-black h-c-40 bg-c-light-gray hover:bg-c-dim-gray focus:bg-c-dim-gray border-r border-c-dark-gray border-t border-light-gray border-solid rounded-tl rounded-bl overflow-hidden">
                <div className="relative top-[3px] float-right text-sm overflow-hidden cursor-pointer">
                  <span className="mr-5 ml-1 block min-w-[19px] text-xs text-current leading-8 whitespace-nowrap overflow-hidden">
                    {category}
                  </span>
                  <span className="absolute top-3.5 right-2 bg-amazon-img bg-pos-4 bg-repeat-x leading-[0] text-[0px] h-0 w-0 border-4 border-t-4 border-b-0 border-solid border-transparent border-t-current"></span>
                </div>
                <select
                  className="absolute -top-[1px] left-0 block h-9 w-auto leading-9 opacity-0 outline-0 cursor-pointer visible border-0"
                  title="Seach in"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categoryList.map((category, index) => (
                    <option
                      key={`category-${index}-${category}`}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="static -top-[5px] flex flex-1 float-none h-auto focus-within:shadow-c-1 focus-within:z-10 overflow-hidden">
            <div className="static top-[5px] flex flex-1 float-none h-c-40 bg-white border-t border-solid border-transparent">
              <input
                type="text"
                className="static top-0 left-0 pt-[7px] px-2.5 pb-2.5 h-[38px] w-full leading-4 text-base text-[#111] outline-0"
                id="twotabsearchtextbox"
                name="field keywords"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="static -top-[5px] flex float-none h-auto w-auto min-w-0 focus-within:shadow-c-1 rounded rounded-tl-none rounded-bl-none focus-within:z-10 overflow-hidden">
            <div className="static top-[5px] right-0 flex float-none bg-c-light-orange hover:bg-c-dark-orange h-10 w-11 border-none overflow-hidden cursor-pointer rounded-tr rounded-br">
              <span className="static top-2.5 left-3 flex flex-1 float-none h-auto w-auto text-[#111] bg-pos-6 bg-amazon-img bg-repeat-x">
                <input
                  type="submit"
                  className="static flex float-none h-full w-full text-sm text-white cursor-pointer outline-0 border-none -indent-[1000px]"
                  value="Go"
                />
              </span>
            </div>
          </div>
        </form>
      </dir>
    </div>
  );
};

export default NavFill;
