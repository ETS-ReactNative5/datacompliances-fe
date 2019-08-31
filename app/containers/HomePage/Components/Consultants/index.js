import React from 'react'
import { DOCUMENT_URL_UPDATE } from '../../../App/constants';
import noimage from '../../assets/no-image.png';
import { Button } from 'semantic-ui-react'

const Consultants = (props) => {
   const { consultants, consultantClick, consultantId, textTruncate, consultantContentExpand } = props;
    return (
        <div className="consultant">
          <div className="container">
            <h4 className="mb-5 title__heading">Our Consultants</h4>
            <div className="row align-items-center">
              {consultants && consultants.length>0 &&
                 consultants.map((value, index) => {
                   if(value._id === consultantId) {
                           return(
                            <div key={index} className="col-lg-4">
                            <h5 className="blue">{value.full_name}</h5>
                            <p className="dark__grey">{value.designation}</p>
                            <span>{textTruncate(value.summary_information)}</span>
                            <div>
                            <br />
                            {value.summary_information.length >250 &&
                            <Button color="blue" onClick={() => consultantContentExpand(value.summary_information)}>Read More</Button>
                            }
                            </div>
                          </div>
                           )
                   } 
                 })
              }
              <div className="col-lg-8">
              <div className="row ">
            {consultants && consultants.length>0 &&
              consultants.map((value, index) => {
                  return(
                        <div key={index} className="col-md-6 mb-4">
                          <div className="media align-items-center">
                              {value && value.image &&
                                <img 
                                   onClick={() => consultantClick(value._id)} 
                                   className="mb-2 img-fluid team__img active"  
                                   src={`${DOCUMENT_URL_UPDATE}${value && value.image.document_name}`} 
                                   alt="product image here"
                                   onError={(e)=>{e.target.onerror = null; e.target.src=noimage}}
                                />
                              }
                            <div className="media-body pl-3">
                              <h5>{value.full_name}</h5>
                              <p>{value.designation}</p>
                            </div>
                          </div>
                        </div>
                  )
              })
            }
              </div>
             </div>
            </div>
            {/* <div className="row align-items-center">
              <div className="col-lg-4">
                <h5 className="blue">Ravi Dhungel</h5>
                <p className="dark__grey">Principal Cyber Security Engineer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique mollitia culpa quas quidem ab ex praesentium dicta
                  ipsam asperiores. Vero vitae adipisci tempora saepe earum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ducimus reiciendis repudiandae.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row ">
                  <div className="col-md-6 mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img active"
                        src={team1}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>Ravi Dhungel </h5>
                        <p>Principal Cyber Security Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team2}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team5}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team6}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    )
}

export default Consultants