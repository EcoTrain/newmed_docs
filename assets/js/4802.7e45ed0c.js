/*! For license information please see 4802.7e45ed0c.js.LICENSE.txt */
(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[4802],{5518:function(e,r,t){"use strict";var n,i=t(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n,a=t(3451),u=new a,s=u.getBrowser(),l=u.getCPU(),c=u.getDevice(),f=u.getEngine(),b=u.getOS(),p=u.getUA(),d=function(e){return u.setUA(e)},w=function(e){if(e){var r=new a(e);return{UA:r,browser:r.getBrowser(),cpu:r.getCPU(),device:r.getDevice(),engine:r.getEngine(),os:r.getOS(),ua:r.getUA(),setUserAgent:function(e){return r.setUA(e)}}}console.error("No userAgent string was provided")},m=Object.freeze({ClientUAInstance:u,browser:s,cpu:l,device:c,engine:f,os:b,ua:p,setUa:d,parseUserAgent:w});function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(){return O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function k(e,r){return k=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},k(e,r)}function S(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(s){u=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return P(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var E="mobile",C="tablet",A="smarttv",I="console",M="wearable",T="embedded",U=void 0,R={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},q={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},N={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},$=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||r},z=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},B=function(e){var r=z();return r&&r.platform&&(-1!==r.platform.indexOf(e)||"MacIntel"===r.platform&&r.maxTouchPoints>1&&!window.MSStream)},D=function(e,r,t,n){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,{vendor:$(r.vendor),model:$(r.model),os:$(t.name),osVersion:$(t.version),ua:$(n)})};var V=function(e){return e.type===E},F=function(e){return e.type===C},W=function(e){var r=e.type;return r===E||r===C},L=function(e){return e.type===A},H=function(e){return e.type===U},Y=function(e){return e.type===M},G=function(e){return e.type===I},Z=function(e){return e.type===T},X=function(e){var r=e.vendor;return $(r)},K=function(e){var r=e.model;return $(r)},Q=function(e){var r=e.type;return $(r,"browser")},J=function(e){return e.name===q.Android},ee=function(e){return e.name===q.Windows},re=function(e){return e.name===q.MAC_OS},te=function(e){return e.name===q.WindowsPhone},ne=function(e){return e.name===q.IOS},ie=function(e){var r=e.version;return $(r)},oe=function(e){var r=e.name;return $(r)},ae=function(e){return e.name===R.Chrome},ue=function(e){return e.name===R.Firefox},se=function(e){return e.name===R.Chromium},le=function(e){return e.name===R.Edge},ce=function(e){return e.name===R.Yandex},fe=function(e){var r=e.name;return r===R.Safari||r===R.MobileSafari},be=function(e){return e.name===R.MobileSafari},pe=function(e){return e.name===R.Opera},de=function(e){var r=e.name;return r===R.InternetExplorer||r===R.Ie},we=function(e){return e.name===R.MIUI},me=function(e){return e.name===R.SamsungBrowser},ye=function(e){var r=e.version;return $(r)},he=function(e){var r=e.major;return $(r)},ve=function(e){var r=e.name;return $(r)},ge=function(e){var r=e.name;return $(r)},Oe=function(e){var r=e.version;return $(r)},xe=function(){var e=z(),r=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof r&&/electron/.test(r)},ke=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=z();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},_e=function(){return B("iPad")},je=function(){return B("iPhone")},Pe=function(){return B("iPod")},Ee=function(e){return $(e)};function Ce(e){var r=e||m,t=r.device,n=r.browser,i=r.os,o=r.engine,a=r.ua;return{isSmartTV:L(t),isConsole:G(t),isWearable:Y(t),isEmbedded:Z(t),isMobileSafari:be(n)||_e(),isChromium:se(n),isMobile:W(t)||_e(),isMobileOnly:V(t),isTablet:F(t)||_e(),isBrowser:H(t),isDesktop:H(t),isAndroid:J(i),isWinPhone:te(i),isIOS:ne(i)||_e(),isChrome:ae(n),isFirefox:ue(n),isSafari:fe(n),isOpera:pe(n),isIE:de(n),osVersion:ie(i),osName:oe(i),fullBrowserVersion:ye(n),browserVersion:he(n),browserName:ve(n),mobileVendor:X(t),mobileModel:K(t),engineName:ge(o),engineVersion:Oe(o),getUA:Ee(a),isEdge:le(n)||ke(a),isYandex:ce(n),deviceType:Q(t),isIOS13:Se(),isIPad13:_e(),isIPhone13:je(),isIPod13:Pe(),isElectron:xe(),isEdgeChromium:ke(a),isLegacyEdge:le(n)&&!ke(a),isWindows:ee(i),isMacOs:re(i),isMIUI:we(n),isSamsungBrowser:me(n)}}var Ae=L(c),Ie=G(c),Me=Y(c),Te=Z(c),Ue=be(s)||_e(),Re=se(s),qe=W(c)||_e(),Ne=V(c),$e=F(c)||_e(),ze=H(c),Be=H(c),De=J(b),Ve=te(b),Fe=ne(b)||_e(),We=ae(s),Le=ue(s),He=fe(s),Ye=pe(s),Ge=de(s),Ze=ie(b),Xe=oe(b),Ke=ye(s),Qe=he(s),Je=ve(s),er=X(c),rr=K(c),tr=ge(f),nr=Oe(f),ir=Ee(p),or=le(s)||ke(p),ar=ce(s),ur=Q(c),sr=Se(),lr=_e(),cr=je(),fr=Pe(),br=xe(),pr=ke(p),dr=le(s)&&!ke(p),wr=ee(b),mr=re(b),yr=we(s),hr=me(s);function vr(e){var r=e||window.navigator.userAgent;return w(r)}r.Dt=De,r.gn=Fe},9330:function(e,r,t){e.exports=t(834),r.default=t(834)},834:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(7384)),i=o(t(5697));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function c(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function f(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,r){return!r||"object"!==a(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,r){return d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},d(e,r)}function w(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var m={ios:"https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg",android:"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"},y=function(e){function r(){return c(this,r),b(this,p(r).apply(this,arguments))}var t,i,o;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(r,e),t=r,i=[{key:"render",value:function(){var e=this.props,r=e.store,t=e.url,i=e.height,o=e.width,a=e.linkStyles,c=e.linkProps,f=l(e,["store","url","height","width","linkStyles","linkProps"]),b=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(t,!0).forEach((function(r){w(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({background:"url(".concat(m[r],") no-repeat"),backgroundSize:"contain",display:"inline-block",overflow:"hidden",textDecoration:"none",height:"100%",width:"100%",padding:"5px"},a);return n.default.createElement("div",u({style:{height:i,width:o,display:"inline-block"}},f),n.default.createElement("a",u({style:b,href:t,target:"_blank",rel:"noopener noreferrer"},c),"\xa0"))}}],i&&f(t.prototype,i),o&&f(t,o),r}(n.default.Component);w(y,"propTypes",{store:i.default.oneOf(["ios","android"]).isRequired,url:i.default.string.isRequired,height:i.default.number,width:i.default.number,linkStyles:i.default.object,linkProps:i.default.object}),w(y,"defaultProps",{height:75,width:255});var h=y;r.default=h},4970:function(e,r,t){"use strict";var n=t(7418),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,b=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,d=i?Symbol.for("react.memo"):60115,w=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||h}function O(){}function x(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=g.prototype;var k=x.prototype=new O;k.constructor=x,n(k,g.prototype),k.isPureReactComponent=!0;var S={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,i={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(i[n]=r[n]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g,A=[];function I(e,r,t,n){if(A.length){var i=A.pop();return i.result=e,i.keyPrefix=r,i.func=t,i.context=n,i.count=0,i}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function T(e,r,t,n){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return t(n,e,""===r?"."+R(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+R(i=e[s],s);u+=T(i,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)u+=T(i=i.value,l=r+R(i,s++),t,n);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function U(e,r,t){return null==e?0:T(e,"",r,t)}function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function N(e,r,t){var n=e.result,i=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?$(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function $(e,r,t,n,i){var o="";null!=t&&(o=(""+t).replace(C,"$&/")+"/"),U(e,N,r=I(r,o,n,i)),M(r)}var z={current:null};function B(){var e=z.current;if(null===e)throw Error(y(321));return e}var D={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return $(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,q,r=I(null,null,r,t)),M(r)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var r=[];return $(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(y(143));return e}},r.Component=g,r.Fragment=u,r.Profiler=l,r.PureComponent=x,r.StrictMode=s,r.Suspense=p,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,t){if(null==e)throw Error(y(267,e));var i=n({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=S.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in r)_.call(r,c)&&!j.hasOwnProperty(c)&&(i[c]=void 0===r[c]&&void 0!==l?l[c]:r[c])}var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:b,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:w,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return B().useCallback(e,r)},r.useContext=function(e,r){return B().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return B().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return B().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return B().useLayoutEffect(e,r)},r.useMemo=function(e,r){return B().useMemo(e,r)},r.useReducer=function(e,r,t){return B().useReducer(e,r,t)},r.useRef=function(e){return B().useRef(e)},r.useState=function(e){return B().useState(e)},r.version="16.14.0"},7384:function(e,r,t){"use strict";e.exports=t(4970)},3451:function(e,r,t){var n;!function(i,o){"use strict";var a="function",u="undefined",s="object",l="string",c="model",f="name",b="type",p="vendor",d="version",w="architecture",m="console",y="mobile",h="tablet",v="smarttv",g="wearable",O="embedded",x="Amazon",k="Apple",S="ASUS",_="BlackBerry",j="Firefox",P="Google",E="Huawei",C="LG",A="Microsoft",I="Motorola",M="Opera",T="Samsung",U="Sony",R="Xiaomi",q="Zebra",N="Facebook",$=function(e){for(var r={},t=0;t<e.length;t++)r[e[t].toUpperCase()]=e[t];return r},z=function(e,r){return typeof e===l&&-1!==B(r).indexOf(B(e))},B=function(e){return e.toLowerCase()},D=function(e,r){if(typeof e===l)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof r===u?e:e.substring(0,255)},V=function(e,r){for(var t,n,i,u,l,c,f=0;f<r.length&&!l;){var b=r[f],p=r[f+1];for(t=n=0;t<b.length&&!l;)if(l=b[t++].exec(e))for(i=0;i<p.length;i++)c=l[++n],typeof(u=p[i])===s&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,c):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=c?c.replace(u[1],u[2]):o:this[u[0]]=c?u[1].call(this,c,u[2]):o:4===u.length&&(this[u[0]]=c?u[3].call(this,c.replace(u[1],u[2])):o):this[u]=c||o;f+=2}},F=function(e,r){for(var t in r)if(typeof r[t]===s&&r[t].length>0){for(var n=0;n<r[t].length;n++)if(z(r[t][n],e))return"?"===t?o:t}else if(z(r[t],e))return"?"===t?o:t;return e},W={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},L={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[d,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[d,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,d],[/opios[\/ ]+([\w\.]+)/i],[d,[f,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[d,[f,M]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[f,d],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[d,[f,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[d,[f,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[d,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[d,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[d,[f,"IE"]],[/yabrowser\/([\w\.]+)/i],[d,[f,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure Browser"],d],[/\bfocus\/([\w\.]+)/i],[d,[f,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[d,[f,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[d,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[d,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[d,[f,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[d,[f,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[d,[f,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 Browser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],d],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[f,d],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,N],d],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[f,d],[/\bgsa\/([\w\.]+) .*safari\//i],[d,[f,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[d,[f,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,"Chrome WebView"],d],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[d,[f,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,d],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[d,[f,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[d,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[d,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,d],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],d],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[d,[f,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[f,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,B]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",B]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,B]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[p,T],[b,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[p,T],[b,y]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[p,k],[b,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[p,k],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[p,E],[b,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[p,E],[b,y]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[p,R],[b,y]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[p,R],[b,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[p,"OPPO"],[b,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[p,"Vivo"],[b,y]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[p,"Realme"],[b,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[p,I],[b,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[p,I],[b,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[p,C],[b,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[p,C],[b,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[p,"Lenovo"],[b,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[p,"Nokia"],[b,y]],[/(pixel c)\b/i],[c,[p,P],[b,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[p,P],[b,y]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[p,U],[b,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[p,U],[b,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[p,"OnePlus"],[b,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[p,x],[b,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[p,x],[b,y]],[/(playbook);[-\w\),; ]+(rim)/i],[c,p,[b,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[p,_],[b,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[p,S],[b,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[p,S],[b,y]],[/(nexus 9)/i],[c,[p,"HTC"],[b,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[p,[c,/_/g," "],[b,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[p,"Acer"],[b,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[p,"Meizu"],[b,y]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[p,"Sharp"],[b,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,c,[b,y]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,c,[b,h]],[/(surface duo)/i],[c,[p,A],[b,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[p,"Fairphone"],[b,y]],[/(u304aa)/i],[c,[p,"AT&T"],[b,y]],[/\bsie-(\w*)/i],[c,[p,"Siemens"],[b,y]],[/\b(rct\w+) b/i],[c,[p,"RCA"],[b,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[p,"Dell"],[b,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[p,"Verizon"],[b,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[p,"Barnes & Noble"],[b,h]],[/\b(tm\d{3}\w+) b/i],[c,[p,"NuVision"],[b,h]],[/\b(k88) b/i],[c,[p,"ZTE"],[b,h]],[/\b(nx\d{3}j) b/i],[c,[p,"ZTE"],[b,y]],[/\b(gen\d{3}) b.+49h/i],[c,[p,"Swiss"],[b,y]],[/\b(zur\d{3}) b/i],[c,[p,"Swiss"],[b,h]],[/\b((zeki)?tb.*\b) b/i],[c,[p,"Zeki"],[b,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],c,[b,h]],[/\b(ns-?\w{0,9}) b/i],[c,[p,"Insignia"],[b,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[p,"NextBook"],[b,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],c,[b,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],c,[b,y]],[/\b(ph-1) /i],[c,[p,"Essential"],[b,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[p,"Envizen"],[b,h]],[/\b(trio[-\w\. ]+) b/i],[c,[p,"MachSpeed"],[b,h]],[/\btu_(1491) b/i],[c,[p,"Rotor"],[b,h]],[/(shield[\w ]+) b/i],[c,[p,"Nvidia"],[b,h]],[/(sprint) (\w+)/i],[p,c,[b,y]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[p,A],[b,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[p,q],[b,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[p,q],[b,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,c,[b,m]],[/droid.+; (shield) bui/i],[c,[p,"Nvidia"],[b,m]],[/(playstation [345portablevi]+)/i],[c,[p,U],[b,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[p,A],[b,m]],[/smart-tv.+(samsung)/i],[p,[b,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[p,T],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,C],[b,v]],[/(apple) ?tv/i],[p,[c,"Apple TV"],[b,v]],[/crkey/i],[[c,"Chromecast"],[p,P],[b,v]],[/droid.+aft(\w)( bui|\))/i],[c,[p,x],[b,v]],[/\(dtv[\);].+(aquos)/i],[c,[p,"Sharp"],[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[p,D],[c,D],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/((pebble))app/i],[p,c,[b,g]],[/droid.+; (glass) \d/i],[c,[p,P],[b,g]],[/droid.+; (wt63?0{2,3})\)/i],[c,[p,q],[b,g]],[/(quest( 2)?)/i],[c,[p,N],[b,g]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[b,O]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[b,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,y]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[d,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[f,d],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[d,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,d],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[f,[d,F,W]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,"Windows"],[d,F,W]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[d,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,"Mac OS"],[d,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[d,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,d],[/\(bb(10);/i],[d,[f,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[d,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[d,[f,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[d,[f,"webOS"]],[/crkey\/([\d\.]+)/i],[d,[f,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[f,"Chromium OS"],d],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,d],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],d],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[f,d]]},H=function(e,r){if(typeof e===s&&(r=e,e=o),!(this instanceof H))return new H(e,r).getResult();var t=e||(typeof i!==u&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),n=r?function(e,r){var t={};for(var n in e)r[n]&&r[n].length%2==0?t[n]=r[n].concat(e[n]):t[n]=e[n];return t}(L,r):L;return this.getBrowser=function(){var e,r={};return r.name=o,r.version=o,V.call(r,t,n.browser),r.major=typeof(e=r.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,r},this.getCPU=function(){var e={};return e.architecture=o,V.call(e,t,n.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,V.call(e,t,n.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,V.call(e,t,n.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,V.call(e,t,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=typeof e===l&&e.length>255?D(e,255):e,this},this.setUA(t),this};H.VERSION="1.0.2",H.BROWSER=$([f,d,"major"]),H.CPU=$([w]),H.DEVICE=$([c,p,b,m,y,v,h,g,O]),H.ENGINE=H.OS=$([f,d]),typeof r!==u?(e.exports&&(r=e.exports=H),r.UAParser=H):t.amdO?(n=function(){return H}.call(r,t,r,e))===o||(e.exports=n):typeof i!==u&&(i.UAParser=H);var Y=typeof i!==u&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var G=new H;Y.ua=G.getResult(),Y.ua.get=function(){return G.getUA()},Y.ua.set=function(e){G.setUA(e);var r=G.getResult();for(var t in r)Y.ua[t]=r[t]}}}("object"==typeof window?window:this)}}]);