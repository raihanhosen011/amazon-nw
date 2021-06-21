import clases from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

export default function Header() {
  const router = useRouter()
  const state = useSelector(stat => stat.basket.items)

  return (
    <>
      <header className="header">
        <div className={`header-top justify-content-between ${clases.header} p-2 d-flex flex-{grow|shrink}-0 align-items-center`}>
    
          <div onClick={() => router.push('/')} className={`${clases.header_logo} d-flex flex-{grow|shrink}-0 align-items-center flex-{grow|shrink}-1`}>
            <img
              src="https://pngimage.net/wp-content/uploads/2019/05/png-logo-amazon-1.png"
              width={84}
              height={32}
              objectFit='contain'
              className="img-fluid"
            />
          </div>

           <div className={`header-search-inner mx-2 color-bg ${clases.search} search d-flex align-items-center rounded flex-nowrap`} >
             <input className="h-100 border-0 ps-2" type='text form-control' />
             <SearchIcon />
           </div>

            <div className={`${clases.header_top_right} d-flex align-items-center text-white`} >
              <div className="header-right-signin " >
                <p>Hello, raihan</p>
                <p className='fw-bold' >Account & list</p>
              </div>
              <div className="header-right-return" >
                <p>returns</p>
                <p className='fw-bold' >& order</p>
              </div>
              <div onClick={() => router.push('/chackout')} className="header-right-basket position-relative d-flex align-items-end" >
                <span className='position-absolute d-flex align-items-center justify-content-center color-bg top-0' >{state.length}</span>
                <ShoppingCartIcon/>
                <p className='fw-bold d-none d-md-inline' >Cart</p>
              </div>
            </div>

        </div>
        {/* Bottom navigation */}
        <div className={`${clases.header_bottom} d-flex p-2 align-items-center text-white fs-12 menu-bg`}>
          <p className='d-flex align-items-center' ><MenuIcon className='w-18 me-1' /> All</p>
          <p>Best Sellers</p>
          <p>Customer Survice</p>
          <p>Prime</p>
          <p className='d-none d-sm-block' >New Releases</p>
          <p className='d-none d-sm-block' >Today's Deal</p>
          <p className='d-none d-sm-block' >Book</p>
          <p className='d-none d-md-block' >Farmechy</p>
          <p className='d-none d-md-block' >Fashion</p>
          <p className='d-none d-md-block' >Kindle Book</p>
          <p className='d-none d-lg-block' >Toy's & Game</p>
          <p className='d-none d-lg-block text-end f-auto' >Prime Day in May 15 & 18</p>
        </div>
      </header>
    </>
  );
}
