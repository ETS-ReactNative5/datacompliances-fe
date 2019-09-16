import React from 'react';
import { Link } from 'react-router-dom'
import { DOCUMENT_URL_UPDATE } from '../../../../App/constants';
import {
    Button
  } from 'semantic-ui-react';


const CreateProductView = (props) => {
    const {viewdata, buyProduct, attemptQuestions}  = props ;
    return(
        <div className="two-col-grid mb-5"> 
             <div className="left">
                {viewdata && viewdata && viewdata.image_name &&
                  <div className="product-image">
                  <img src={`${DOCUMENT_URL_UPDATE}${viewdata && viewdata && viewdata.image_name.document_name}`} alt="product image here"
                   />
                </div>}
              </div>
          <div className="right product-detail">
              <p className="product-name"><span>Profile :</span> {viewdata && viewdata.profile_name}</p>
              <p className="product-industry"><span>Industry :</span> {viewdata && viewdata.industry}</p>
              <p className="product-price"><span>Price : </span><small>$</small>{viewdata && viewdata.price}</p>
              <p className="product-country"><span>Country :</span> {viewdata && viewdata.country}</p>
              <p className="product-desc"> <span>Description :</span>{viewdata && viewdata.description}</p> 
              {/* {console.log(viewdata && viewdata.Cart && viewdata.Cart[0],'lllkkk', viewdata && viewdata.OrderInfo )} */}
              {!(viewdata && viewdata.Cart && viewdata.Cart[0] && viewdata.Cart[0].cart_added)  ?
              <Button className="button buy-btn" onClick={buyProduct}>Add to Cart</Button>
               :
              <div>
                <Button onClick={() => attemptQuestions(viewdata._id)} color="blue">Go to Cart</Button>
               {/* <Link
                to={`/user/dashboard/product-display/questions/${viewdata._id}`}
                role="button"
               >
               Start your assessment
             </Link> */}
             </div>
              }
          </div>
          </div>
    )
}

export default CreateProductView;
