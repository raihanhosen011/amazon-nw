import clases from "../styles/ProductFeed.module.css";
import Product from "../components/Product.js";
import ExtraOne from '../components/ExtraOne' ;
import { extra1 } from '../../DUMMY_PRODUCT'

export default function ProductFeed({ products }) {
  return (
    <>
      <div className="px-4 flow mb-5 row minus">

        {extra1.slice(0,4).map(({title,img,link,id}) => <>
           <ExtraOne
             title={title}
             img={img}
             link={link}
             id={id}
             key={id}
           />
        </>)}

        {products.slice(0,4).map(({ id, title, price, description, category, image }) => (
          <div className='product px-2 gy-3 col-xm-12 col-md-6 col-lg-3 '><Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
         </div>
        ))}          

        <img className='col-12 mt-3 img-fluid' src='https://links.papareact.com/dyz' alt='' />
        
        {extra1.slice(4,8).map(({title,img,link,id}) => <>
           <ExtraOne
             title={title}
             img={img}
             link={link}
             id={id}
             key={id}
           />
        </>)}

         {products.slice(4,5).map(({ id, title, price, description, category, image }) => (
          <div className="product px-2 gy-3 col-md-8 col-xl-6 col-xm-12" >
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </div>
         ))}

        {products.slice(5,15).map(({ id, title, price, description, category, image }) => (
          <div className="product px-2 gy-3 col-xm-12 col-md-6 col-lg-4 col-xl-3" >
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </div>
         ))}

        <img className='col-12 mt-3 img-fluid' src='https://www.dillards.com/images/espots/052816_65off_sale_banner_mobile.jpg' alt='' />

        {products.slice(16,products.lenght).map(({ id, title, price, description, category, image }) => (
          <div className="product px-2 gy-3 col-xm-12 col-md-6 col-lg-3" >
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </div>
         ))}

      </div>
    </>
  )
}