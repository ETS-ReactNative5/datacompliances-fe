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
                {viewdata && viewdata[0] && viewdata[0].image_name &&
                  <div className="product-image">
                  <img src={`${DOCUMENT_URL_UPDATE}${viewdata && viewdata[0] && viewdata[0].image_name.document_name}`} alt="product image here"
                   />
                </div>}
              </div>
          <div className="right product-detail">
              <p className="product-name"><span>Profile :</span> {viewdata && viewdata[0] && viewdata[0].profile_name}</p>
              <p className="product-industry"><span>Industry :</span> {viewdata && viewdata[0] && viewdata[0].industry}</p>
              <p className="product-price"><span>Price : </span>{viewdata && viewdata[0] && viewdata[0].price}</p>
              <p className="product-country"><span>Country :</span> {viewdata && viewdata[0] && viewdata[0].country}</p>
              <p className="product-desc"> <span>Description :</span>{viewdata && viewdata[0] && viewdata[0].description}</p> 
              {viewdata && viewdata[0] && viewdata[0].OrderInfo.length > 0 && viewdata[0].OrderInfo[0].purchased != true ?
              <Button className="button buy-btn" onClick={buyProduct}>Buy this Product</Button>
               :
              <div>
                <Button onClick={() => attemptQuestions(viewdata._id)} color="blue">Start your assessment</Button>
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
