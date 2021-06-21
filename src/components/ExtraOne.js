import clases from '../styles/ExtraOne.module.css'
import Link from 'next/link'

export default function ExtraOne({title,img,link,id}) {
  return (
    <>
      <div className='extraone col-xm-12 text-xm-center text-lg-start p-2 gy-3 col-md-6 col-lg-3' >
        <div className="bg-white p-3" >
          <h5 className="text-clamp h6 fw-bold m-0 mb-1" >{title}</h5>
          <div className={`${clases.img_wrapper} `} >
            <img className="per-img img-fluid" src={img} />
          </div>
          <Link href='/' ><p className='text-clamp fs-12 pointer m-0 mt-1'>{link}</p></Link>
        </div>
      </div>
    </>
  );
}
