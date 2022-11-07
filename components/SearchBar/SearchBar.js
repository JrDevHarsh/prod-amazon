import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const itemList = useSelector((state) => state.app.products);
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const onSearchValueChange = (value) => {
    value = value.toLowerCase().replace(/\s+/g, " ").trim();
    if (value === "") {
      return setSearchList([]);
    }
    let found = 0;
    let arr = [];
    for (let i = 0; i < itemList.length; i++) {
      if (found === 5) break;
      if (itemList[i].title.toLowerCase().startsWith(value)) {
        ++found;
        let it = itemList[i].title.slice(
          itemList[i].title.toLowerCase().indexOf(value) + value.length
        );
        arr.push(it);
      }
    }
    setSearchList(arr);
  };

  useEffect(() => {
    onSearchValueChange(searchValue);
  }, [searchValue]);

  return (
    <div className="relative top-0 flex flex-1 float-none h-auto focus-within:shadow-c-1 focus-within:z-10 overflow-visible">
      <div className="static top-[5px] flex flex-1 float-none h-c-40 bg-white border-t border-solid border-transparent">
        <input
          type="text"
          className="peer/input static top-0 left-0 pt-[7px] px-2.5 pb-2.5 h-[38px] w-full leading-4 text-base text-[#111] outline-0"
          id="twotabsearchtextbox"
          name="item"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          aria-label="Search"
          placeholder="Search for item..."
        />
        {searchList.length !== 0 && (
          <ul className="absolute top-full left-0 right-0 peer-valid/input:block w-full bg-white border border-solid border-[#bbb] shadow-c-2">
            {searchList.map((listItem) => (
              <Link href={`/search?item=${listItem}`} key={`item-${listItem}`}>
                <li className="px-4 py-2 min-h-[36px] w-full hover:bg-[#eee] text-base cursor-pointer whitespace-normal">
                  <span>{searchValue}</span>
                  <span className="font-bold">{listItem}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
