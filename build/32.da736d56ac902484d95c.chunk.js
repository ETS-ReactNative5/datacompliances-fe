(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4154326b1c18fecb09e6":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("0d7f0986bcd2f33d8a2a"),f=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),l=n("adc20f99e57c573c589c"),s=n("d95b0cf107403b178365"),p=n("c1ed1f051a76da0034da"),d=n("b8cd4cc9ac88302e1b35"),b=n("7f1906faba5af1f0ffd2"),y=n("b92d44e8bfa704002803");n("3e29d4751ada83561562");function v(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===c)t.children=r;else if(c>1){for(var f=new Array(c),u=0;u<c;u++)f[u]=arguments[u+3];t.children=f}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var h,m=function(e){var t=e.viewdata;return v("div",{},void 0,v("h3",{},void 0,"Title : ",t.title),v("h3",{},void 0,"Description : ",t.description),v("h3",{},void 0,"Price : ",t.price),v("h3",{},void 0,"Country : ",t.country))};function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,o){h||(h="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];t.children=i}return{$$typeof:h,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"PackageList",function(){return L});var S=Object(f.b)({isSuccess:Object(d.g)(),errorResponse:Object(d.c)(),successResponse:Object(d.e)(),isRequesting:Object(d.f)(),singlePackage:Object(d.d)()}),_=w(i.Helmet,{},void 0,w("title",{},void 0,"PackageList"),w("meta",{name:"description",content:"Description of PackageList"})),L=function(e){function t(){var e,n,o,r,a,c,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,u=new Array(f),l=0;l<f;l++)u[l]=arguments[l];return o=this,n=!(r=(e=k(t)).call.apply(e,[this].concat(u)))||"object"!==g(r)&&"function"!==typeof r?P(o):r,a=P(n),i={data:{},page:1,perPage:10,query:{}},(c="state")in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,a.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props.match.params.id?this.props.match.params.id:null;e&&this.props.fetchPackage(e)}},{key:"componentWillReceiveProps",value:function(e){this.props.singlePackage!=e.singlePackage&&this.setState({data:e.singlePackage.toJS()})}},{key:"render",value:function(){var e=this.state.data;return w("div",{},void 0,_,w("h1",{},void 0,e.title),w(m,{viewdata:this.state.data}))}}])&&O(n.prototype,o),r&&O(n,r),t}(),R=Object(c.connect)(S,function(e){return{fetchPackage:function(t){return e(Object(p.h)(t))}}}),$=Object(s.a)({key:"packageList",reducer:b.a}),A=Object(l.a)({key:"packageList",saga:y.a});t.default=Object(u.compose)($,A,R)(L)}}]);