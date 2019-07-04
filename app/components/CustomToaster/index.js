import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// class CustomToaster extends Component {
//   static propTypes = {
//     message: PropTypes.string.isRequired,
//   };

//   state = { visible: true };
//   componentDidMount() {
//     toast.info(this.props.message);
//   }

//   render() {
//     const { visible } = this.state;
//     const { message } = this.props;
//     if (visible) {
//       return (
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnVisibilityChange
//           draggable
//           pauseOnHover
//         />
//       );
//     }
//     return null;
//   }
// }

// export default CustomToaster;

export default function CustomToaster(props) {
  const [visible, setVisibility] = useState(true);
  useEffect(() => {
    if (props.type === 'error') {
      toast.error(props.message);
    } else {
      toast.success(props.message);
    }
  }, []);
  if (visible) {
    return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    );
  }
}
