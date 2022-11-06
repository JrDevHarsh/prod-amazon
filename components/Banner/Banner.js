import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="my-0 mx-auto max-w-[1500px] w-full" id="desktop-banner">
      <div className="relative max-h-[230px] h-[300px] z-0">
        <div className="relative overflow-visible">
          <div className="max-h-[230px] w-full">
            <div className="relative h-full">
              {/* Left button */}
              <div className="absolute top-0 left-0 pl-[3px] h-full min-h-[230px] w-20 max-h-[250px] visible z-10">
                <a
                  className="absolute top-0 right-0 bottom-0 left-0 rounded outline-0 focus:shadow-c-3"
                  href="#"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-arrow-img bg-pos-0 bg-size-1 h-[52px] w-[34px]"></span>
                </a>
              </div>
              {/* carousel */}
              <div className="relative m-0 min-h-[1px] overflow-hidden">
                <div className="h-[600px] w-full overflow-hidden">
                  <ol className="h-full w-full text-c-black overflow-visible">
                    <li className="inline-block w-full min-h-full visible">
                      <div className="h-[600px] w-full">
                        <Link href="/" className="relative block h-full w-full">
                          <div className="relative h-full w-full overflow-hidden">
                            <Image
                              src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg"
                              fill
                              priority
                              className="h-full max-h-full"
                              alt="img"
                            />
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              {/* Right button */}
              <div className="absolute top-0 right-0 pl-[3px] h-full min-h-[230px] w-20 max-h-[250px] visible z-10">
                <a
                  className="absolute top-0 right-0 bottom-0 left-0 rounded outline-0 focus:shadow-c-3"
                  href="#"
                >
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-arrow-img bg-pos-13 bg-size-1 h-[52px] w-[34px]"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
