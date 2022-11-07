import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CartLayout from "../components/Layout/CartLayout";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Prod-Amazon Cart</title>
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
      <main className="my-0 mx-auto max-w-none min-w-[1000px] bg-c-light-white overflow-hidden min-h-[100vh]">
        <CartLayout />
      </main>
      <Footer />
    </>
  );
}
