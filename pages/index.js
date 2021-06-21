import Head from "next/head";
import Bennar from "../src/components/Bennar";
import ProductFeed from "../src/components/ProductFeed";
import clases from "../src/styles/Home.module.css";

export default function index({products}) {
  return (
    <>
      <Head>
        <title>Amazon clone by Raihan</title>
      </Head>

      <div className="home main-bg ">

        <main className={`${clases.main} overflow-hidden mx-auto`}>
          <Bennar />
          <ProductFeed products={products} />
        </main>

      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()

  return {
    props : {
      products,
    } 
  }
}