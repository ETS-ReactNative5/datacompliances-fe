import React from 'react';
import Link from 'react-router-dom'
import { DOCUMENT_URL_UPDATE } from '../../../../App/constants';
import {
    Button
  } from 'semantic-ui-react';


const CreateProductView = (props) => {
    const {viewdata, buyProduct, attemptQuestions}  = props ;
    return(
        <div className="two-col-grid mb-5"> 
             <div className="left">
                {viewdata.image_name &&
                  <div className="product-image">
                  <img src={`${DOCUMENT_URL_UPDATE}${viewdata.image_name.document_name}`} alt="product image here"
                   />
                </div>}
              </div>
          <div className="right product-detail">
              <p className="product-name"><span>Title :</span> {viewdata.title}</p>
              
              <p className="product-industry"><span>Industry :</span> {viewdata.industry}</p>
              <p className="product-price"><span>Price : </span>{viewdata.price}</p>
              <p className="product-country"><span>Country :</span> {viewdata.country}</p>
              <p className="product-desc"> <span>Description :</span>{viewdata.description}</p>
              {viewdata.purchased != true ?
              <Button className="button buy-btn" onClick={buyProduct}>Buy this Product</Button>
               :
              <div>
                <Button onClick={() => attemptQuestions(viewdata._id)} color="blue">Start your assessment</Button>
               {/* <Link
                // to={`/user/dashboard/product-display/questions/${viewdata._id}`}
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
