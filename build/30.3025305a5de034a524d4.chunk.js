(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"26e42a4fa5b9eb573704":function(e,t,r){"use strict";r.r(t);var o=r("8af190b70a6bc55c6f1b"),n=r.n(o),a=(r("8a2d1b95e05b6a321e74"),r("a28fc3c963a1d4d1a2e5")),c=r("da310028ba2a28510514"),s=r("f474c75d9da68c034eae"),u=r("6b20a4038fb2adfb033d"),i=r("d7dd51e1bf6bfc2c9c3d"),l=r("d559af73313ecb218818"),p=r.n(l);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(){var e=window.localStorage.getItem("token");if(e)try{var t=p()(e);if("object"===f(t)&&t.hasOwnProperty("user")&&t.hasOwnProperty("exp")&&t.exp>Date.now()/1e3)return Object.assign({},{success:!0,token:e,userInfo:t.user}).userInfo}catch(e){return{}}return{}},b=r("5ab8365ac36c5dd588cb"),m=r("d782b72bc5b680c7122c"),h=r("3ad3c1378076e862aab0"),g="XcelTrip/Profile/MultiFactorAuth/VERIFY_MULTI_FACTOR_AUTH_REQUEST",_="XcelTrip/Profile/MultiFactorAuth/VERIFY_MULTI_FACTOR_AUTH_SUCCESS",O="XcelTrip/Profile/MultiFactorAuth/VERIFY_MULTI_FACTOR_AUTH_FAILURE",v="XcelTrip/Profile/MultiFactorAuth/GET_MULTI_FACTOR_AUTH_REQUEST",y="XcelTrip/Profile/MultiFactorAuth/GET_MULTI_FACTOR_AUTH_SUCCESS",j="XcelTrip/Profile/MultiFactorAuth/GET_MULTI_FACTOR_AUTH_FAILURE",R="XcelTrip/Profile/MultiFactorAuth/DISABLE_MULTI_FACTOR_AUTH_REQUEST",A="XcelTrip/Profile/MultiFactorAuth/DISABLE_MULTI_FACTOR_AUTH_SUCCESS",E="XcelTrip/Profile/MultiFactorAuth/DISABLE_MULTI_FACTOR_AUTH_FAILURE",w="XcelTrip/Profile/MultiFactorAuth/GET_RECOVERY_CODES_REQUEST",S="XcelTrip/Profile/MultiFactorAuth/GET_RECOVERY_CODES_SUCCESS",C="XcelTrip/Profile/MultiFactorAuth/GET_RECOVERY_CODES_FAILURE",F="XcelTrip/Profile/MultiFactorAuth/SEND_EMAIL_WITH_MFA_RECOVERY_REQUEST",T="XcelTrip/Profile/MultiFactorAuth/SEND_EMAIL_WITH_MFA_RECOVERY_SUCCESS",k="XcelTrip/Profile/MultiFactorAuth/SEND_EMAIL_WITH_MFA_RECOVERY_FAILURE",M="XcelTrip/Profile/MultiFactorAuth/GENERATE_RECOVERY_CODE_REQUEST",P="XcelTrip/Profile/MultiFactorAuth/GENERATE_RECOVERY_CODE_SUCCESS",I="XcelTrip/Profile/MultiFactorAuth/GENERATE_RECOVERY_CODE_FAILURE",x="XcelTrip/Profile/BasicInfo/LOAD_BASIC_INFO_REQUEST",L="XcelTrip/Profile/BasicInfo/LOAD_BASIC_INFO_SUCCESS",U=r("371a6f90cf4b090759be"),N=Object(U.a)(x,"userId"),D=Object(U.a)(L,"response"),q=Object(U.a)("XcelTrip/Profile/BasicInfo/LOAD_BASIC_INFO_FAILURE","error");var X=Object(U.a)(_,"response"),H=Object(U.a)(O,"error"),B=Object(U.a)(w),G=Object(U.a)(S,"response"),V=Object(U.a)(C,"error"),Y=Object(U.a)(M,"userId"),J=Object(U.a)(P,"response"),Q=Object(U.a)(I,"error"),W=Object(U.a)(F,"userId"),$=Object(U.a)(T,"response"),z=Object(U.a)(k,"error"),K=Object(U.a)(v),Z=Object(U.a)(y,"response"),ee=Object(U.a)(j,"error"),te=Object(U.a)(R,"payload"),re=Object(U.a)(A,"response"),oe=Object(U.a)(E,"error"),ne=r("384d9479bdc5794993e1"),ae=r("8636a5b0e6ac43ae8b4d"),ce=r("6542cd13fd5dd1bcffd4"),se=r("278a8afb137fef007e00"),ue=regeneratorRuntime.mark(je),ie=regeneratorRuntime.mark(Re),le=regeneratorRuntime.mark(Ae),pe=regeneratorRuntime.mark(Ee),fe=regeneratorRuntime.mark(we),de=regeneratorRuntime.mark(Se),be=regeneratorRuntime.mark(Ce),me=regeneratorRuntime.mark(Fe),he=regeneratorRuntime.mark(Te),ge=regeneratorRuntime.mark(ke),_e=regeneratorRuntime.mark(Me);function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(r,!0).forEach(function(t){ye(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function je(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.take)(_);case 2:return r.next=4,Object(m.select)(Object(ce.e)());case 4:return e=r.sent,t=ve({},t=e.toJS(),{multi_factor_auth_enable:!0}),r.next=9,Object(m.put)(Object(ne.u)(t));case 9:case"end":return r.stop()}},ue)}function Re(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},ie)}function Ae(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.take)(A);case 2:return r.next=4,Object(m.select)(Object(ce.e)());case 4:return e=r.sent,t=ve({},t=e.toJS(),{multi_factor_auth_enable:!1}),r.next=9,Object(m.put)(Object(ne.u)(t));case 9:case"end":return r.stop()}},le)}function Ee(e){var t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=Object(se.a)(),o.next=3,Object(m.fork)(je);case 3:return r=o.sent,o.next=6,Object(m.fork)(ae.a.post("multi-factor-auth/totp-verify?secret=".concat(e.secret),X,H,e.payload,t));case 6:return o.next=8,Object(m.take)([h.LOCATION_CHANGE,O]);case 8:return o.next=10,Object(m.cancel)(r);case 10:case"end":return o.stop()}},pe)}function we(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=Object(se.a)(),r.next=3,Object(m.fork)(Re);case 3:return t=r.sent,r.next=6,Object(m.fork)(ae.a.get("multi-factor-auth/totp-setup",Z,ee,e));case 6:return r.next=8,Object(m.take)([h.LOCATION_CHANGE,j]);case 8:return r.next=10,Object(m.cancel)(t);case 10:case"end":return r.stop()}},fe)}function Se(e){var t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=Object(se.a)(),o.next=3,Object(m.fork)(Ae);case 3:return r=o.sent,o.next=6,Object(m.fork)(ae.a.put("multi-factor-auth/totp-disable/".concat(e.payload),re,oe,{_id:e.payload},t));case 6:return o.next=8,Object(m.take)([h.LOCATION_CHANGE,E]);case 8:return o.next=10,Object(m.cancel)(r);case 10:case"end":return o.stop()}},de)}function Ce(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(se.a)(),t.next=3,Object(m.fork)(ae.a.get("multi-factor-auth/recovery-code/get",G,V,e));case 3:case"end":return t.stop()}},be)}function Fe(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(se.a)(),r.next=3,Object(m.call)(ae.a.get("multi-factor-auth/recovery-code/send/".concat(e.userId),$,z,t));case 3:case"end":return r.stop()}},me)}function Te(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(se.a)(),r.next=3,Object(m.call)(ae.a.put("multi-factor-auth/generate/recovery-code/".concat(e.userId),J,Q,{_id:e.userId},t));case 3:case"end":return r.stop()}},he)}function ke(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(se.a)(),r.next=3,Object(m.call)(ae.a.get("user/data/".concat(e.userId),D,q,t));case 3:case"end":return r.stop()}},ge)}function Me(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.takeLatest)(v,we);case 2:return e.next=4,Object(m.takeLatest)(g,Ee);case 4:return e.next=6,Object(m.takeLatest)(R,Se);case 6:return e.next=8,Object(m.takeLatest)(w,Ce);case 8:return e.next=10,Object(m.takeLatest)(F,Fe);case 10:return e.next=12,Object(m.takeLatest)(M,Te);case 12:return e.next=14,Object(m.takeLatest)(x,ke);case 14:case"end":return e.stop()}},_e)}var Pe=r("54f683fcda7806277002"),Ie=r("62cade0222f879de1092");function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(r,!0).forEach(function(t){Ue(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ne=Object(Pe.fromJS)({requesting:!1,isLoading:!1,response:null,error:null,qrPath:"",recoveryCodes:[],recovery_code_generated_on:"",message:"",secret:"",user:{}});var De,qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case v:case R:case g:case w:case F:case M:return e.merge({requesting:!0,response:null,error:null,message:"",isLoading:!0});case L:return e.merge({requesting:!1,error:null,response:null,success:!0,user:Object(Pe.fromJS)(t.response.data)});case j:case E:case O:case C:case k:case I:return e.merge({response:null,error:t.error.message,isLoading:!1});case y:return e.merge({isLoading:!1,error:null,response:null,qrPath:t.response.data.qrcode.path,secret:t.response.data.secret});case S:return e.merge({isLoading:!1,recoveryCodes:t.response.data.recovery_codes,recovery_code_generated_on:t.response.data.generated_on});case P:return e.merge({isLoading:!1,recoveryCodes:t.response.data.backup_recovery_codes,response:t.response.message,recovery_code_generated_on:t.response.data.generated_on});case T:return e.merge({isLoading:!1,response:t.response.message});case A:return e.merge({isLoading:!1,error:null,response:t.response.message}).updateIn(["user"],function(e){var t=e.toJS();return Object(Pe.fromJS)(Le({},t,{multi_factor_auth_enable:!1}))});case _:return e.merge({isLoading:!1,error:null,response:t.response.message,recoveryCodes:t.response.data.backup_recovery_codes,recovery_code_generated_on:t.response.data.generated_on}).updateIn(["user"],function(e){var t=e.toJS();return Object(Pe.fromJS)(Le({},t,{multi_factor_auth_enable:!0}))});case Ie.t:return Ne;default:return e}},Xe=r("adc20f99e57c573c589c"),He=r("d95b0cf107403b178365"),Be=r("ab4cb61bcb2dc161defb"),Ge=function(e){return e.addMultiFactorAuth},Ve=r("df4d709115ae1aca60ef");function Ye(e){return(Ye="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(o=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Qe(e,t,r,o){De||(De="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&n)for(var c in n)void 0===t[c]&&(t[c]=n[c]);else t||(t=n||{});if(1===a)t.children=o;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:De,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function We(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?We(r,!0).forEach(function(t){tt(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):We(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ze(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ke(e){return(Ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var rt=Object(a.b)({user:Object(a.a)(Ge,function(e){return e.get("user")}),confirmUpdateMultiFactorAuth:Object(a.a)(Ge,function(e){return e}),successResponse:Object(a.a)(Ge,function(e){return e.get("response")}),errorResponse:Object(a.a)(Ge,function(e){return e.get("error")}),isRequesting:Object(a.a)(Ge,function(e){return e.get("isLoading")}),recoveryCodes:Object(a.a)(Ge,function(e){return e.get("recoveryCodes")}),message:Object(a.a)(Ge,function(e){return e.get("message")}),recovery_code_generated_on:Object(a.a)(Ge,function(e){return e.get("recovery_code_generated_on")})}),ot=Qe("span",{className:"custom-control-indicator"}),nt=Qe("span",{className:"custom-control-description"},void 0,"Two Factor Auth Enabled"),at=Qe("p",{},void 0,"Do you want to disable two factor auth?"),ct=Qe("div",{className:"message info"},void 0,"Scan the following QR code with any authenticator App.",Qe("br",{}),Qe("br",{}),Qe("a",{className:"mg-right-sm",target:"_blank",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"},void 0,Qe("img",{src:""})),Qe("a",{target:"_blank",href:"https://itunes.apple.com/us/app/google-authenticator/id388497605"},void 0,Qe("img",{src:""}))),st=Qe("h2",{},void 0,"Manage Codes"),ut=Qe("div",{className:"message info"},void 0,"These codes can be used to sign into your account if you have problems in receiving the code during sign-in. Each code can be used only once."),it=Qe("br",{}),lt=Qe("p",{},void 0,"Backup verification codes"),pt=function(e){function t(){var e,r,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return o=this,n=(e=Ke(t)).call.apply(e,[this].concat(c)),r=!n||"object"!==Ye(n)&&"function"!==typeof n?Ze(o):n,tt(Ze(r),"state",{data:{totp_token:""},multiFactorAuth:r.props.user.get("multi_factor_auth_enable"),showMultiFactorAuthDisable:!1,errors:{},recoveryCodes:[],message:{},user:{}}),tt(Ze(r),"handleCheckBox",function(){r.setState({multiFactorAuth:!r.state.multiFactorAuth},function(){this.state.multiFactorAuth&&this.props.getMultiFactorAuthRequest()})}),tt(Ze(r),"handleSubmit",function(e){e.preventDefault();var t=r.state.data,o=r.props.confirmUpdateMultiFactorAuth.get("secret"),n=r.validate();r.setState({errors:n}),0===Object.keys(n).length&&(r.props.verifyMultiFactorAuthRequest(Object.assign({},{data:t,secret:o})),r.setState({isLoading:!0,data:{totp_token:""},errors:{}}))}),tt(Ze(r),"validate",function(){var e={};return r.state.data.totp_token||(e.totp_token="Can't be blank"),e}),tt(Ze(r),"handleChange",function(e){var t=r.state.errors;t[e.target.name]&&e.target.value&&delete t[e.target.name],r.setState({data:$e({},r.state.data,tt({},e.target.name,e.target.value)),errors:t})}),tt(Ze(r),"changeMultiFactorAuthStatus",function(){r.setState({showMultiFactorAuthDisable:!r.state.showMultiFactorAuthDisable})}),tt(Ze(r),"disableMultiFactorAuthRequest",function(){r.props.disableMultiFactorAuthRequest(r.props.user.get("_id"))}),tt(Ze(r),"generateRecoveryCodeRequest",function(){r.props.generateRecoveryCodeRequest(r.props.user.get("_id"))}),tt(Ze(r),"sendMultiFactorRecoveryCodesEmailRequest",function(){r.props.sendMultiFactorRecoveryCodesEmailRequest(r.props.user.get("_id"))}),r}var r,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(t,n.a.Component),r=t,(o=[{key:"componentDidMount",value:function(){var e=d();e._id&&(this.props.loadBasicInfoRequest(e._id),this.props.getRecoveryCodesRequest())}},{key:"componentWillReceiveProps",value:function(e){if(this.props.user.get("multi_factor_auth_enable")!==e.user.get("multi_factor_auth_enable")&&this.setState({multiFactorAuth:e.user.get("multi_factor_auth_enable"),showMultiFactorAuthDisable:!1}),e.user!==this.props.user){var t=e.user.toJS();this.setState({user:t,multiFactorAuth:e.user.get("multi_factor_auth_enable")})}}},{key:"render",value:function(){var e,t=this.state,r=t.multiFactorAuth,o=t.showMultiFactorAuthDisable,n=t.data,a=t.errors,i=this.props,l=i.successResponse,p=i.errorResponse,f=i.isRequesting,d=i.recoveryCodes,m=i.user;return l&&"string"===typeof l&&(e=Qe(Ve.a,{message:l,timeout:1e3,success:!0})),p&&"string"===typeof p&&(e=Qe(Ve.a,{message:p,timeout:1e3,error:!0})),Qe("div",{className:"profile_section"},void 0,Qe("div",{className:"section"},void 0,e&&e,Qe("div",{className:"segment"},void 0,this.props.user.get("multi_factor_auth_enable")&&Qe("div",{},void 0,!o&&Qe("div",{},void 0,Qe("div",{className:"field mg-btm-sm"},void 0,Qe("label",{className:"custom-control custom-checkbox"},void 0,Qe("input",{name:"multiFactorAuth",className:"custom-control-input",type:"checkbox",checked:this.props.user.get("multi_factor_auth_enable")||!1,disabled:!0}),ot," ",nt," ")),Qe(c.a,{negative:!0,onClick:this.changeMultiFactorAuthStatus},void 0,"Disable Two Factor Auth")),o&&Qe("div",{},void 0,at,Qe(c.a,{className:"button positive",onClick:this.disableMultiFactorAuthRequest,loading:f,disabled:f},void 0,"Yes, Disable"),Qe(c.a,{className:"button basic",onClick:this.changeMultiFactorAuthStatus},void 0,"Cancel"))),!this.props.user.get("multi_factor_auth_enable")&&Qe("div",{className:"field"},void 0,Qe(s.a,{label:"Enable Two Factor Auth",name:"multiFactorAuth",onClick:this.handleCheckBox,checked:r,toggle:!0}),r&&Qe("div",{className:"mg-top-sm"},void 0,ct,Qe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"255",height:"255"},void 0,Qe("path",{transform:"scale(5)",d:this.props.confirmUpdateMultiFactorAuth.get("qrPath"),className:"qr-code"})),Qe("div",{},void 0,Qe(u.a,{onSubmit:this.handleSubmit},void 0,Qe(b.a,{type:"text",name:"totp_token",value:n.totp_token,onChange:this.handleChange,placeholder:"Enter the token from authenticator app",error:a.totp_token&&a.totp_token}),Qe(c.a,{primary:!0,type:"submit",loading:f,disabled:f},void 0,"Verify"))))))),this.props.user.get("multi_factor_auth_enable")&&Qe("div",{className:"segment"},void 0,st,ut,it,lt,Qe("ul",{className:"ui tag labels"},void 0,d.entrySeq().map(function(e){var t=Je(e,2),r=t[0],o=t[1];return Qe("li",{className:"label"},"".concat(r,"_").concat(o),o)}).toArray()),Qe("p",{className:"muted mg-btm-md"},void 0,"Generated Time : ",this.props.recovery_code_generated_on),Qe("div",{className:"print_save mg-top-sm inline-block"},void 0,Qe(c.a,{secondary:!0,"data-tooltip":m.get("email"),className:"button",onClick:this.sendMultiFactorRecoveryCodesEmailRequest,disabled:f},void 0,"Send codes to email")),Qe("div",{className:"button_wrapper inline-block"},void 0,Qe(c.a,{className:"button primary",onClick:this.generateRecoveryCodeRequest,disabled:f},void 0,"Generate new Codes"))))}}])&&ze(r.prototype,o),a&&ze(r,a),t}(),ft=Object(He.a)({key:"addMultiFactorAuth",reducer:qe}),dt=Object(Xe.a)({key:"addMultiFactorAuth",saga:Me}),bt=Object(i.connect)(rt,function(e){return{getMultiFactorAuthRequest:function(){return e(K())},getRecoveryCodesRequest:function(){return e(B())},generateRecoveryCodeRequest:function(t){return e(Y(t))},sendMultiFactorRecoveryCodesEmailRequest:function(t){return e(W(t))},verifyMultiFactorAuthRequest:function(t){return e({type:g,payload:(r=t).data,secret:r.secret});var r},disableMultiFactorAuthRequest:function(t){return e(te(t))},loadBasicInfoRequest:function(t){return e(N(t))}}});t.default=Object(Be.compose)(ft,dt,bt)(pt)}}]);