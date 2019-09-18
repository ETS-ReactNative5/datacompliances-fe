import React, { Component } from 'react'
import { DOCUMENT_URL_UPDATE, API_BASE  } from '../../../App/constants';
import './style.scss';
import { Modal, Header, Button } from 'semantic-ui-react'

var paymentForm

export class PayWithCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false,
        }
        // this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
      var temp = this
          // const price = this.props.totalPrice
              paymentForm = new SqPaymentForm({
                //TODO: Replace with your sandbox application ID
                applicationId: "sandbox-sq0idb-uMCOPGva0o2SCGWsuBcdkA",
                inputClass: 'sq-input',
                autoBuild: false,
                // Customize the CSS for SqPaymentForm iframe elements
                inputStyles: [{
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '16px',
                    placeholderColor: '#a0a0a0',
                    backgroundColor: 'transparent',
                }],
                // Initialize the credit card placeholders
                cardNumber: {
                    elementId: 'sq-card-number',
                    placeholder: 'Card Number'
                },
                cvv: {
                    elementId: 'sq-cvv',
                    placeholder: 'CVV'
                },
                expirationDate: {
                    elementId: 'sq-expiration-date',
                    placeholder: 'MM/YY'
                },
                postalCode: {
                    elementId: 'sq-postal-code',
                    placeholder: 'Postal'
                },
                // SqPaymentForm callback functions
                callbacks: {
                    /*
                    * callback function: cardNonceResponseReceived
                    * Triggered when: SqPaymentForm completes a card nonce request
                    */
                    cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        // Log errors from nonce generation to the browser developer console.
                        // console.error('Encountered errors:');
                        var errmsg = ''
                        errors.forEach(function (error) {
                            // console.error('  ' + error.message);
                            errmsg = errmsg + error.message + '<br>'
                        });
                        var element = document.getElementById("payment-errors").innerHTML = errmsg;
                        if(element.classList != undefined && element.classList.contains("hide")) {
                        element.classList.remove("hide");
                        }
                        // document.getElementById('payment-errors').innerHTML = errmsg
                        // $('#payment-errors').removeClass('hide')
                        // alert('Encountered errors, check browser developer console for more details');
                        return;
                    }
                             //  alert(`The generated nonce is:\n${nonce}`);
                             //TODO: Replace alert with code in step 2.1
                             // alert(`The generated nonce is:\n${nonce}`);
                             temp.props.payFromCardRequest(nonce)

                            // const token = localStorage.getItem('token'); 
                            // fetch(`${API_BASE}payment`, {
                            //   method: 'POST',
                            //   headers: {
                            //     'Accept': 'application/json',
                            //     'Content-Type': 'application/json'
                            //   },
                            //   body: JSON.stringify({
                            //     nonce: nonce,
                            //     token: token,
                            //   })
                            // })
                            // .then(response => {
                            //   if (!response.ok) {
                            //     return response.text().then(errorInfo => Promise.reject(errorInfo));
                            //   }
                            //   return response;
      
                            // })
                            // .catch(err => {
                            //   // console.error(err);
                            //   alert('Payment failed to complete!\nCheck browser developer consolf form more details');
                            // });
                    }
                }
              });
              paymentForm.build();
      }

      componentWillReceiveProps(nextProps) {
        const temp = this
          if(nextProps.showModal == true) {
            // const price = nextProps.totalPrice
              paymentForm = new SqPaymentForm({
                //TODO: Replace with your sandbox application ID
                applicationId: "sandbox-sq0idb-uMCOPGva0o2SCGWsuBcdkA",
                inputClass: 'sq-input',
                autoBuild: false,
                // Customize the CSS for SqPaymentForm iframe elements
                inputStyles: [{
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '16px',
                    placeholderColor: '#a0a0a0',
                    backgroundColor: 'transparent',
                }],
                // Initialize the credit card placeholders
                cardNumber: {
                    elementId: 'sq-card-number',
                    placeholder: 'Card Number'
                },
                cvv: {
                    elementId: 'sq-cvv',
                    placeholder: 'CVV'
                },
                expirationDate: {
                    elementId: 'sq-expiration-date',
                    placeholder: 'MM/YY'
                },
                postalCode: {
                    elementId: 'sq-postal-code',
                    placeholder: 'Postal'
                },
                // SqPaymentForm callback functions
                callbacks: {
                    /*
                    * callback function: cardNonceResponseReceived
                    * Triggered when: SqPaymentForm completes a card nonce request
                    */
                    cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        // Log errors from nonce generation to the browser developer console.
                        // console.error('Encountered errors:');
                        var errmsg = ''
                        errors.forEach(function (error) {
                            // console.error('  ' + error.message);
                            errmsg = errmsg + error.message + '<br>'
                        });
                        var element = document.getElementById("payment-errors").innerHTML = errmsg;
                        if(element.classList != undefined && element.classList.contains("hide")) {
                        element.classList.remove("hide");
                        }
                        // document.getElementById('payment-errors').innerHTML = errmsg
                        // $('#payment-errors').removeClass('hide')
                        // alert('Encountered errors, check browser developer console for more details');
                        return;
                    }
                              //alert(`The generated nonce is:\n${nonce}`);
                             //TODO: Replace alert with code in step 2.1
                             // alert(`The generated nonce is:\n${nonce}`);
                             temp.props.payFromCardRequest(nonce)
                            // const token = localStorage.getItem('token'); 
                            // fetch(`${API_BASE}payment`, {
                            //   method: 'POST',
                            //   headers: {
                            //     'Accept': 'application/json',
                            //     'Content-Type': 'application/json'
                            //   },
                            //   body: JSON.stringify({
                            //     nonce: nonce,
                            //     token: token,
                            //   })
                            // })
                            // .then(response => {
                            //   if (!response.ok) {
                            //     return response.text().then(errorInfo => Promise.reject(errorInfo));
                            //   }
                            //   return response;
      
                            // })
                            // .catch(err => {
                            //   // console.error(err);
                            //   alert('Payment failed to complete!\nCheck browser developer consolf form more details');
                            // });
                    }
                }
              });
              paymentForm.build();
            }
      }
    // saveOrderSuccessRequest = () => {
    //     console.log('gggg')
    // }  
    
    onGetCardNonce = (event) => {
        event.preventDefault();
        // Request a nonce from the SqPaymentForm object
        paymentForm.requestCardNonce()
      }

     

    render() {
        const { totalPrice, cartSection, showModal, closeModal } = this.props;
        const { success } = this.state;
        return (
          <Modal size='fullscreen' className="multi-fac-modal" open={showModal} size="mini" style={{leftMargin :  "20%"}} 
          onClose={closeModal}
          closeOnDimmerClick={false} 
          closeIcon={{ style: { top: '0.0535rem', right: '.05rem' }, color: 'red', name: 'close' }}
              >
          <Header icon='question circle' content='Enter your card Details' />
          <Modal.Content style={{minHeight :  "80px"}}>
          <div id="payment-errors" class="hide"></div>
          <div id="sq-card-number"></div>
          <div className="third" id="sq-expiration-date"></div>
          <div className="third" id="sq-cvv"></div>
          <div className="third" id="sq-postal-code"></div>
          </Modal.Content>
          <Modal.Actions>
          <button id="sq-creditcard" className="button-credit-card" onClick={() => this.onGetCardNonce(event)}>Pay With Card</button>
          </Modal.Actions>
          </Modal>
                
        )
    }
}

export default PayWithCard






