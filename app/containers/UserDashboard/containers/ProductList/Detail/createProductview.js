import React from 'react';
import { DOCUMENT_URL_UPDATE } from '../../../../../../../prj_pcsc/client_app/app/containers/App/constants';


const CreateProductView = (props) => {
    const {viewdata}  = props ;
    return(
        <div> 
            <h3>Title : {viewdata.title}</h3>
            <h3>Description : {viewdata.description}</h3>
            <h3>Industry : {viewdata.industry}</h3>
            <h3>Price : {viewdata.price}</h3>
            <h3>Country : {viewdata.country}</h3>
            <label>Image:</label><br />
              {viewdata.image_name && <div className="card card-md">
                <img src={`${DOCUMENT_URL_UPDATE}${viewdata.image_name.document_name}`} alt=""
                style= {{border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                width: "400px"}} height="400" width="400"/>
              </div>}<br />
            </div>
    )
}

export default CreateProductView;
