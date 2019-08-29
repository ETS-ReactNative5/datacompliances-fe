import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from 'semantic-ui-react'

import step1 from '../../assets/step/step1.svg';
import step2 from '../../assets/step/step2.svg';
import step3 from '../../assets/step/step3.svg';
import step4 from '../../assets/step/step4.svg';

const token = localStorage.getItem('token');


const StepFlow = () => {
    return(
        <div className="step">
        <div className="container">
          <div className="text-center">
            <h4 className="title__heading d-inline">Step Flow</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              illum vel? Eligendi.
            </p>
          </div>
          <div className="row step__container">
            <div className="col-md-3">
              <div className="step__holder">
                <img className="img-fluid" src={step1} alt="step1" />
              </div>
              <h5 className="text-center step__heading">Product</h5>
            </div>
            <div className="col-md-3">
              <div className="step__holder">
                <img className="img-fluid" src={step2} alt="step1" />
              </div>
              <h5 className="text-center step__heading">Questionaire</h5>
            </div>
            <div className="col-md-3">
              <div className="step__holder">
                <img className="img-fluid" src={step3} alt="step1" />
              </div>
              <h5 className="text-center step__heading">Report</h5>
            </div>
            <div className="col-md-3">
              <div className="step__holder">
                <img className="img-fluid" src={step4} alt="step1" />
              </div>
              <h5 className="text-center step__heading">Consultant</h5>
            </div>
            <div className="col-md-12  text-center">
              <div className="step__button">
                {token != null ?
                   (
                    <Link to={`/user/dashboard/`}>
                        <Button color="blue" type="button">
                          Go to Dashboard
                        </Button>
                    </Link>
                     )  : (
                            <Link to={`/login`}>
                                <Button color="blue" type="button">
                                    Go to Dashboard
                                </Button>
                            </Link>
                     )
                     }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default StepFlow