import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";
import clases from "../styles/Product.module.css";
import Currency from 'react-currency-formatter';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../slices/BasketSlice'

const MAX_RATING = 5;
const MIN_RATINF = 1;

export default function Product({id,title,price,description,category,image,}){
  const router = useRouter()
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATINF + 1)) + MIN_RATINF)
  const [prime] = useState(Math.random() < 0.5)
  const dispatch = useDispatch()

  const AddNow = () => {
    const products = {id,title,price,description,category,image} 
    dispatch(addProducts(products))
  }

  return (
    <>
        <div className='bg-white position-relative d-flex flex-column p-3' >

          {prime && <img className={clases.prime} src='https://links.papareact.com/fdw' alt='...' width={40} />}
          
          <p className={`${clases.category} position-absolute fs-12 text-secondary`}>
            {category}
          </p>

          <div className={`${clases.img_wrapper} mt-4`}>
            <img className="img-fluid per-img" src={image} />
          </div>

          <p className={`${clases.title} fw-bold my-2`}>{title}</p>

          <div className="product-rating color-ama d-flex f">
            {Array(rating)
              .fill()
              .map(() => (
                <StarIcon className="w-16" />
              ))}
          </div>

          <p className={`${clases.desc} fs-14 my-2`}>{description}</p>
          
          <div className="mb-4 mt-2 d-flex align-items-center justify-content-between">
            <Currency quantity={price}  currency="USD" />
            <EyeIcon onClick={() => router.push(`/${id}`)} className="w-20 hover" />
          </div>

          <button onClick={AddNow} className="button mt-auto py-1">Add To Cart</button>
      </div>
    </>
  );
}
