import "../styles/ChackItem.module.css";
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remProducts } from '../../slices/BasketSlice'

export default function ChackItem({id,title,price,description,category,image}) {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)  
  const dispatch = useDispatch()

  const Removed = () => {
    dispatch(remProducts(id))
  }

  return (
    <>
      <div className="col-12 d-grid align-items-center position-relative single-pro" >

        <div className="img-wrapper" >
          <p className='fs-12 position-absolute category' >{category}</p>   
          <img className='per-img' src={image} />
        </div>

        <div className="info ms-3" >
          <h5 className="text-clamp h6 color-ama" >{title}</h5>
          <div className="product-rating color-ama d-flex f">
            {Array(rating)
              .fill()
              .map(() => (
                <StarIcon className="w-16" />
              ))}
          </div>
          <p className="text-clamp-3 fs-12" >{description}</p>
          <div className='d-flex justify-content-between' >
            <h6 className='fw-bold text-secondary' ><Currency quantity={price}  currency="USD" /></h6>
            
            <button onClick={Removed} className="button mt-auto fs-14">Remove Product</button>
          
          </div>
        </div>

      </div>
    </>
  );
}
