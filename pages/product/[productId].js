import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import BuyBox from "../../components/Layout/BuyBox";
import Price from "../../components/Price/Price";
import Rating from "../../components/Rating/Rating";
import { getProductFromId } from "../../store/slices/userSlice";

const ProductId = () => {
  const router = useRouter();
  const { productId, title } = router.query;
  const product = useSelector(getProductFromId(Number(productId)));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Prod-amazon: The goal of this project is to make a clone of the world's largest e-commerce website i.e. Amazon.in by using next-js."
        />
        <meta
          name="keywords"
          content="Prod-amazon, amazon, amazon-clone, next-js"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/icons/amazon-icon.webp" />
      </Head>
      <Header />
      <main className="my-0 mx-auto min-w-[1000px] max-w-[1480px] w-full min-h-[100vh] bg-white">
        <div className="w-full p-2">
          <button className="flex items-center" onClick={() => router.back()}>
            {/* <GrPrevious className="w-2 h-2" /> */}
            <span className="text-sm text-[#565959] font-medium ml-1 hover:underline">
              Back to results
            </span>
          </button>
        </div>
        {product && (
          <div className="mx-auto my-0 px-4 flex items-start w-full">
            <div className="sticky top-0 left-0 h-full w-4/12">
              <div className="relative max-h-[390px] min-h-[350px] w-full">
                <Image
                  src={product.image}
                  height={350}
                  width={290}
                  objectFit="contain"
                  alt={`${product.title} image`}
                />
              </div>
            </div>
            <div className="w-5/12 flex flex-col items-start gap-2 px-4">
              <h2 className="text-2xl text-black font-semibold tracking-wider">
                {product.title}
              </h2>
              <Rating rating={product.rating} />
              <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
              <Price price={product.price} />
              <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
              <div className="flex items-center">
                <span className="w-40 text-sm text-[#0F1111] font-semibold tracking-wider">
                  Category
                </span>
                <span className="text-sm text-[#5e5f5f] font-normal tracking-wider">
                  {product.category
                    .toLowerCase()
                    .replace(/./, (x) => x.toUpperCase())
                    .replace(/[^']\b\w/g, (y) => y.toUpperCase())}
                </span>
              </div>
              <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
              <h4 className="font-semibold text-base text-black tracking-wide">
                About this item
              </h4>
              <ul className="flex flex-col items-start list-disc ml-5">
                <li className="text-sm text-black font-normal tracking-wider">
                  {product.description}
                </li>
              </ul>
            </div>
            <BuyBox productId={productId} />
          </div>
        )}
      </main>
    </>
  );
};

export default ProductId;
