(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{bf7ebc0e873a6bb8ea02:function(e,r,t){"use strict";t.r(r);var n=t("8af190b70a6bc55c6f1b"),o=t.n(n),a=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),s=t("a28fc3c963a1d4d1a2e5"),c=t("6b20a4038fb2adfb033d"),i=t("da310028ba2a28510514"),u=t("06e9cdca070dbbe3ec34"),d=t("21cd6da5d0fb0461eee5"),l="XcelTrip/Profile/Password/UPDATE_PASSWORD_REQUEST",p="XcelTrip/Profile/Password/UPDATE_PASSWORD_SUCCESS",f="XcelTrip/Profile/Password/UPDATE_PASSWORD_FAILURE",b="XcelTrip/Profile/Password/CLEAR_STATE",w=t("371a6f90cf4b090759be"),y=Object(w.a)(l,"password"),m=Object(w.a)(p,"response"),g=Object(w.a)(f,"error"),O=Object(w.a)(b),h=function(e){return e.profilePassword},v=t("df4d709115ae1aca60ef"),j=t("d782b72bc5b680c7122c"),P=t("3ad3c1378076e862aab0"),_=(t("384d9479bdc5794993e1"),t("8636a5b0e6ac43ae8b4d")),S=t("6542cd13fd5dd1bcffd4"),k=t("278a8afb137fef007e00");function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(t,!0).forEach(function(r){E(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var N=regeneratorRuntime.mark(x),D=regeneratorRuntime.mark(T),A=regeneratorRuntime.mark(q);function x(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.take)(p);case 2:case"end":return e.stop()}},N)}function T(e){var r,t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(j.select)(Object(S.e)());case 2:return r=o.sent,t=Object(k.a)(),o.next=6,Object(j.fork)(x);case 6:return n=o.sent,o.next=9,Object(j.fork)(_.a.put("user/security-settings/change-password/".concat(r.get("_id")),m,g,C({},e.password,{_id:r.get("_id")}),t));case 9:return o.next=11,Object(j.take)([P.LOCATION_CHANGE,f]);case 11:return o.next=13,Object(j.cancel)(n);case 13:case"end":return o.stop()}},D)}function q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.takeLatest)(l,T);case 2:case"end":return e.stop()}},A)}var U=t("54f683fcda7806277002"),L=t("62cade0222f879de1092"),W=Object(U.fromJS)({requesting:!1,success:!1,response:null,error:null});var X,J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case l:return e.merge({requesting:!0,error:null,response:null,success:!1});case p:return e.merge({requesting:!1,response:r.response.message,error:null,success:!0});case f:return e.merge({requesting:!1,response:null,error:r.error.message,success:!1});case b:case L.t:return W;default:return e}},F=t("adc20f99e57c573c589c"),I=t("d95b0cf107403b178365"),$=t("ab4cb61bcb2dc161defb");function G(e){return(G="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,r,t,n){X||(X="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&o)for(var s in o)void 0===r[s]&&(r[s]=o[s]);else r||(r=o||{});if(1===a)r.children=n;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];r.children=c}return{$$typeof:X,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(t,!0).forEach(function(r){Y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function B(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,r){return(V=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function Y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Z=Object(s.b)({errorResponse:Object(s.a)(h,function(e){return e.get("error")}),requesting:Object(s.a)(h,function(e){return e.get("requesting")}),success:Object(s.a)(h,function(e){return e.get("success")}),successResponse:Object(s.a)(h,function(e){return e.get("response")})}),ee=H("h2",{className:"main_title"},void 0,"Change Password"),re=H("span",{className:"custom-control-indicator"}),te=H("span",{className:"custom-control-description"},void 0,"Also Logout from other devices"),ne=function(e){function r(){var e,t,n,o;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=this,o=(e=K(r)).call.apply(e,[this].concat(s)),t=!o||"object"!==G(o)&&"function"!==typeof o?M(n):o,Y(M(t),"state",{data:{log_out_all_devices:!1},errors:{}}),Y(M(t),"handleChange",function(e){e.persist();var r=t.state.errors;r[e.target.name]&&e.target.value&&delete r[e.target.name],t.setState(function(t){return{data:z({},t.data,Y({},e.target.name,e.target.value)),errors:r}})}),Y(M(t),"handleChecked",function(e){e.persist(),t.setState(function(r){return{data:z({},r.data,Y({},e.target.name,!r.data[e.target.name]))}})}),Y(M(t),"validate",function(){var e=t.state.data,r={};return e.password||(r.password="Please enter a password"),e.old_password||(r.old_password="Enter old password"),e.retyped_password||(r.retyped_password="Retype new password"),e.password!==e.retyped_password&&(r.retyped_password="New password and retyped password must be same."),r}),Y(M(t),"handleSubmit",function(e){e.preventDefault();var r=t.validate();t.setState({errors:r}),0===Object.keys(r).length&&t.props.updatePasswordRequest(t.state.data)}),t}var t,n,a;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&V(e,r)}(r,o.a.Component),t=r,(n=[{key:"componentWillUnmount",value:function(){this.props.clearState()}},{key:"render",value:function(){var e,r=this.state,t=r.data,n=r.errors,a=this.props,s=a.successResponse,l=a.errorResponse,p=a.requesting;a.success;return s&&"string"===typeof s&&(e=H(v.a,{message:s,timeout:3e3,success:!0})),l&&"string"===typeof l&&(e=H(v.a,{message:l,timeout:3e3,error:!0})),H("div",{className:"profile_section"},void 0,H(o.a.Fragment,{},void 0,e&&e,H(c.a,{className:"form",onSubmit:this.handleSubmit},void 0,ee,H("div",{className:"pos-rel field"},void 0,H(u.a,{password:t.old_password||"",placeholder:"Old Password",onChange:this.handleChange,error:n.old_password,name:"old_password"})),H("div",{className:"pos-rel field"},void 0,H(u.a,{password:t.password||"",placeholder:"New Password",onChange:this.handleChange,error:n.password,name:"password"})),H(d.a,{password:t.password||""}),H("div",{className:"pos-rel field"},void 0,H(u.a,{password:t.retyped_password||"",label:"Retype Password",placeholder:"Retype Password",onChange:this.handleChange,error:n.retyped_password,name:"retyped_password"})),H("div",{className:"field"},void 0,H("label",{className:"custom-control custom-checkbox"},void 0,H("input",{className:"custom-control-input",type:"checkbox",name:"log_out_all_devices",onChange:this.handleChecked,checked:t.log_out_all_devices}),re," ",te," ")),H(i.a,{type:"submit",className:"primary button",loading:p,disabled:p},void 0,"Save"))))}}])&&B(t.prototype,n),a&&B(t,a),r}(),oe=Object(I.a)({key:"profilePassword",reducer:J}),ae=Object(F.a)({key:"profilePassword",saga:q}),se=Object(a.connect)(Z,function(e){return{updatePasswordRequest:function(r){return e(y(r))},clearState:function(){return e(O())}}});r.default=Object($.compose)(oe,ae,se)(ne)}}]);