"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[4800],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9652:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2,sidebar_label:"Architecture",title:"Architecture",id:"architecture",slug:"/presentation/architecture"},s=void 0,c={unversionedId:"presentation/intro/architecture",id:"presentation/intro/architecture",title:"Architecture",description:"Technology stack",source:"@site/docs/presentation/intro/architecture.md",sourceDirName:"presentation/intro",slug:"/presentation/architecture",permalink:"/wellness_doc/docs/presentation/architecture",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/presentation/intro/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Architecture",title:"Architecture",id:"architecture",slug:"/presentation/architecture"},sidebar:"presentation",previous:{title:"General description",permalink:"/wellness_doc/docs/presentation"},next:{title:"Authentication",permalink:"/wellness_doc/docs/presentation/security"}},u={},p=[{value:"Technology stack",id:"tech_stack",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Local storage",id:"local_storage",level:2},{value:"Data relevance",id:"data_relevance",level:3},{value:"Offline",id:"offline",level:3},{value:"Synchronization mechanism",id:"synchronization_mechanism",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tech_stack"},"Technology stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database: MongoDB"),(0,i.kt)("li",{parentName:"ul"},"Server: NodeJS"),(0,i.kt)("li",{parentName:"ul"},"Client: ReactNative")),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The application is cross-platform and available on platforms: Web, iOS, Android\nThe application has two layout modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"phone"),(0,i.kt)("li",{parentName:"ul"},"Wide (web, tablet)")),(0,i.kt)("p",null,"Both markups can also be applied across all devices.\nThe application is based on a single code for all platforms with rare exceptions when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The library is not adapted to all platforms (several are used)"),(0,i.kt)("li",{parentName:"ul"},"Features of the perception of the interface require the implementation of different functionality / look for different platforms")),(0,i.kt)("h2",{id:"local_storage"},"Local storage"),(0,i.kt)("p",null,"The server uses a shared MongoDB database, but mobile devices use an ",(0,i.kt)("strong",{parentName:"p"},"additional local")," MongoDB."),(0,i.kt)("p",null,"This allows the user to perform the following tasks:"),(0,i.kt)("h3",{id:"data_relevance"},"Data relevance"),(0,i.kt)("p",null,"Thanks to synchronization, only relevant information is exchanged."),(0,i.kt)("p",null,"When communicating with the server, the application sends the following data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reading",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"url (path to the required data area in the database)"),(0,i.kt)("li",{parentName:"ul"},"devicetime (device time at the time the request was sent to the server)"))),(0,i.kt)("li",{parentName:"ul"},"Recording",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"url (path to the required data area in the database)"),(0,i.kt)("li",{parentName:"ul"},"data (data to write)"),(0,i.kt)("li",{parentName:"ul"},"time (time to read data on the device)"),(0,i.kt)("li",{parentName:"ul"},"devicetime (device time at the time the request was sent to the server)")))),(0,i.kt)("p",null,"How the server understands that the information is up-to-date is described in the ",(0,i.kt)("strong",{parentName:"p"},"synchronization mechanism")," section of this chapter."),(0,i.kt)("h3",{id:"offline"},"Offline"),(0,i.kt)("p",null,"Local database on devices allows continuous filling of logs even without network access thanks to ",(0,i.kt)("strong",{parentName:"p"},"synchronization mechanism")),(0,i.kt)("h3",{id:"synchronization_mechanism"},"Synchronization mechanism"),(0,i.kt)("p",null,"When acting with the database, the data is sent to the server (if there is a network). Otherwise, the transaction is added to the synchronization queue. When a request is received, the server compares the last data modification time in the database and the time specified in the request data."),(0,i.kt)("p",null,"Data is considered relevant if:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Read"),": if the time per request is less than the last time the data was changed in the database.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Write"),": if the time at the time of writing the data is less than the last time the data was changed in the database. This means that newer data has already been recorded. If the data is up to date, the server overwrites it in the database and returns the current time when writing to the database. (Actual time = req.devicetime - servertime + req.time)"),(0,i.kt)("p",null,"After unloading all the data from the queue, the actual data from the server database is requested to the server."))}h.isMDXComponent=!0}}]);