import clases from '../../src/styles/Detels.module.css' ;
import Color from '../../src/components/Color'
import { StarIcon } from "@heroicons/react/solid";
import Head from 'next/head'
import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../../slices/BasketSlice'
import {GlassMagnifier} from "react-image-magnifiers";

export default function detels({products}) {
  
  const company = ['Liddy','Natasha','Durjo','Beyaring','Nafisa Ltd','Easy','Sahjan']
  const chose = ['red','blue','green','yellow','balck','gray','white']
  const [rating] = useState(
    Math.floor(Math.random() * (5 - 1 + 1)) + 1
  )
  const [choseColor] = useState(
    Math.floor(Math.random() * (4 - 1 + 1)) + 1
  )
  const dispatch = useDispatch()

  return (
        <>
          <Head>
            <title>{products.title}</title>
          </Head>

          <div className='view-wrapper p-md-5' >
            <div className={`${clases.product} row py-5 p-3`} >
              
              <div className={`product_img col-lg-4 `} >
                <GlassMagnifier
                  className='per-img d-flex align-items-center'
                  imageSrc={products.image}
                  imageAlt="Glass Megnifyrs"
                  largeImageSrc={products.image} // Optional
                />
              </div>

              <div className={`product_info my-3 px-4 col-lg-6`} >
                <p>{products.category}</p>
                <h5 className='h3 color-ama' >{products.title}</h5>
                <p>{products.description}</p>

                <div className='more d-flex mb-3 justify-content-between' >
                  <div className='more-info p' >
                    <p><span className="fw-bold" >Rating</span> : {Array(rating).fill().map(() => (<StarIcon className="w-16 color-ama" />))} (26)</p>
                    <p><span className="fw-bold" >Company</span> : {company[Math.floor(Math.random() * company.length - 1)]}</p>
                    <p className='d-flex align-items-center' >
                      <span className="fw-bold me-2" >Color </span> :
                      {Array(choseColor).fill().map(() => (<Color color={`${chose[Math.floor(Math.random() * chose.length - 1)]}`} />))}
                    </p>                    
                  </div>
                  <div className='select-size' >
                    <select>
                      <option>Large</option>
                      <option>x-small</option>
                      <option>x-large</option>
                      <option>xx-large</option>
                      <option>medium</option>
                    </select>
                  </div>
                </div>

                <div className="quanity-count mt-3" >
                  <button className='me-2' >+</button>
                  <span>0</span>
                  <button className='ms-2' >-</button>
                </div>

              </div>

              <div className='col-lg-2' >
                <div className="add-cart w-100 border p-2 text-center my-2 d-flex flex-column" >
                  <p className='mb-0' >To Buy</p>
                  <hr className='my-1 mb-2' />
                  <button onClick={() => dispatch(addProducts(products))} className="button mb-2 mt-auto py-1">Add To Cart</button>
                  <button className="button mt-auto py-1">Buy Now</button>
                  <p className='fs-12 mt-2 mb-0 d-flex' >
                    <LockClosedIcon className='w-16' />
                    Secure Transection
                  </p>
                  <div className='d-flex my-2' ><input className='me-2 mt-2' type='checkbox' /><p className='m-0' >Add a gift receipt</p></div>
                  <hr className='my-1 mb-2' />
                  <button className='border' >Add to list</button>
                </div>                
              </div>

            </div>
          </div>
        </>
    )
}

export const getStaticSidePaths = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()

  const paths = products.map(product => {
    return {
      params : {id : product.id}
    }
  })

  return {
    paths ,
    fallback:false,
  }

}

export const getServerSideProps = async (context) => {
 const id = context.params.id
 const response = await fetch(`https://fakestoreapi.com/products/${id}`)
 const products = await response.json()

 return {
   props : {
     products,
   }
 }

}
