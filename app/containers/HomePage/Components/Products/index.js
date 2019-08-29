import React from 'react'
import { DOCUMENT_URL_UPDATE } from '../../../App/constants';
import Slider from 'react-slick/lib';
import cross from '../../assets/cross.svg';
import check from '../../assets/check.svg';
import secure from '../../assets/secure.svg';
import design from '../../assets/design.svg';


const Products = (props) => {
  const { productList, productDetailsClick } = props;
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: productList.length > 2 ? 3 : productList.length,
    slidesToScroll: 1,
    autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "ease-in",
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  };
   return(
     <div className="product-slider-wrap">
    <div className="container">
       <h4 className="mb-5 title__heading">Our Products</h4>
    <Slider className={productList.length == 2 ? 'products-slider length_two' :
                             productList.length == 1 ? 'products-slider length_one' : 
                                                            'products-slider'} {...settings}>
      {productList && productList.length>0 &&
         productList.map((item, index) => {
           return(
                  <div key={index} className="product-wrap">
                  <div className="product__card card ">
                    {/* <img className="product__image" src={secure} alt="" /> */}
                    <img 
                        className="mb-2 img-fluid team__img active"  
                        src={`${DOCUMENT_URL_UPDATE}${item.image_name  && item.image_name.document_name}`} 
                        alt="product image here"
                    />
                    <div className="top__block">
                      <h5>{item.title}</h5>
                      <p>
                        <small>$</small>{item.price}
                      </p>
                    </div>
                    <ul>
                      <li>
                        <img className="pr-1" src={check} alt="check" />Profile Name: {item.profile_name}
                      </li>
                      <li>
                        <img className="pr-1" src={check} alt="check" />Country: {item.country}
                      </li>
                      <li>
                        <img className="pr-1" src={check} alt="check" />Industry: {item.industry}
                      </li>
                      <li>
                        <img className="pr-1" src={check} alt="check" />Questions: {item.questions.length}
                      </li>
                    </ul>
                    {/* <button onClick={() => productDetailsClick(item._id)} className="primary__button">View Detail</button> */}
                  </div>
                </div>
           )
         })
      }
     {/* <div className="product-wrap">
       <div className="product__card card ">
         <img className="product__image" src={secure} alt="" />
         <div className="top__block">
           <h5>Cyber Security on Demand</h5>
           <p>
             <small>$</small>500
           </p>
         </div>
         <ul>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Privacy
           </li>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Compliance
           </li>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Assessment
           </li>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber TM
           </li>
         </ul>
         <button className="primary__button">View Detail</button>
       </div>
     </div>
     <div className="product-wrap">
       <div className="product__card card ">
         <img className="product__image" src={design} alt="" />
         <div className="top__block">
           <h5>Adhoc Consulting and design enhancements</h5>
           <p>
             <small>$</small>1500
           </p>
         </div>
         <ul>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Privacy
           </li>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Compliance
           </li>
           <li>
             <img className="pr-1" src={cross} alt="check" /> Cyber
             Assessment
           </li>
           <li>
             <img className="pr-1" src={cross} alt="check" /> Cyber TM
           </li>
         </ul>
         <button className="primary__button">View Detail</button>
       </div>
     </div>
     <div className="product-wrap">
       <div className="product__card card ">
         <img className="product__image" src={design} alt="" />
         <div className="top__block">
           <h5>Adhoc Consulting and design enhancements</h5>
           <p>
             <small>$</small>1500
           </p>
         </div>
         <ul>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Privacy
           </li>
           <li>
             <img className="pr-1" src={check} alt="check" /> Cyber
             Compliance
           </li>
           <li>
             <img className="pr-1" src={cross} alt="check" /> Cyber
             Assessment
           </li>
           <li>
             <img className="pr-1" src={cross} alt="check" /> Cyber TM
           </li>
         </ul>
         <button className="primary__button">View Detail</button>
       </div>
     </div> */}
</Slider>
</div>
</div>
   )
}

export default Products
