import clases from "../src/styles/Chackout.module.css";
import { useSelector } from 'react-redux'
import ChackItem from "../src/components/ChackItem";
import Currency from 'react-currency-formatter';
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { subTotal } from '../slices/BasketSlice'
import Link from 'next/link'

export default function Chackout() {
  const state = useSelector(stat => stat.basket.items)
  const total = useSelector(subTotal)

  return (
    <>
      <div className="chackout grey">
        <main className="d-flex row xl-2 mx-auto">
          <div className="chackout-left col-md-9">
            <img className='col-lg-10 my-2 img-fluid' src='https://links.papareact.com/ikj' alt='' />
            
            <div className="p-2 bg-white mb-3 border arial" >
              <h5>Chackout Product</h5>
              <hr className='my-1' />
              <div className='chackout-items' >
                {
                  state.length === 0 ? (

                    <>
                      <div className='py-2 text-center' >
                         <h5 className='text-secondary'>No Items Here</h5>
                         <Link href='/' ><button className='button fs-14' >Home</button></Link>
                      </div>
                    </>

                  ) : (

                    state?.map(item => <>
                      <div className='itemwrapper' >
                        <ChackItem 
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          description={item.description}
                          category={item.category}
                          image={item.image}
                        />
                      </div>
                    </>)
                  )
                }
              </div>
            </div>

          </div>
          <div className="col-md-3 mt-2" >
            {
              state.length !== 0 && (
                <div className='chackout-proceced d-flex flex-column p-2 bg-white border' >
                  <div className='d-flex align-items-start' >
                    <BadgeCheckIcon className='w-36' />
                    <p className="fs-12 mb-2" >Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                  </div>
                  <h6>Subtotal ({state.length} items): <Currency quantity={total}  currency="USD" /></h6>
                  <div className='d-flex' >
                    <input className='mt-1 me-2' type='checkbox' />
                    <p className='fs-12' >This order contains a gift</p>
                  </div>
                  <button className='fs-12 button text-white py-1' >proceced to chackout</button>
                </div>
              )
            }
          </div>
        </main>
      </div>
    </>
  );
}
