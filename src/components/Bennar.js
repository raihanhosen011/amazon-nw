import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import clases from "../styles/Benner.module.css";

export default function Bennar() {
  return (
    <>
      <div className="bennnar position-relative h-100">
        <div className={`${clases.layer} w-100 position-absolute`} />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img loading="lazy" src='https://links.papareact.com/6ff' alt='...' />
          </div>
          <div>
            <img loading="lazy" src='https://links.papareact.com/gi1' alt='...' />
          </div>
          <div>
            <img loading="lazy" src='https://links.papareact.com/7ma' alt='...' />
          </div>
        </Carousel>
      </div>
    </>
  );
}
