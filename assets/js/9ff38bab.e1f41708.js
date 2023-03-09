"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[2160],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3548:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),o=["components"],l={sidebar_position:5,id:"constructor_diary",title:"Diary constructor",slug:"/guide/history/constructor_diary"},s=void 0,c={unversionedId:"guide/history/constructor_diary",id:"guide/history/constructor_diary",title:"Diary constructor",description:"General",source:"@site/docs/guide/history/constructor_diary.md",sourceDirName:"guide/history",slug:"/guide/history/constructor_diary",permalink:"/WM_doc/docs/guide/history/constructor_diary",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/guide/history/constructor_diary.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"constructor_diary",title:"Diary constructor",slug:"/guide/history/constructor_diary"},sidebar:"guide",previous:{title:"Diary settings",permalink:"/WM_doc/docs/guide/history/edit_diary"},next:{title:"Planning",permalink:"/WM_doc/docs/guide/schedule"}},u={},d=[{value:"General",id:"diary_costructor_general",level:2},{value:"Charts",id:"diary_costructor_charts",level:2},{value:"Data sets",id:"diary_costructor_datasets",level:2},{value:"Variables",id:"diary_costructor_variables",level:2},{value:"Aggregation",id:"diary_costructor_aggregation",level:2}],p={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"diary_costructor_general"},"General"),(0,n.kt)("p",null,"When creating a diary, you can set the following options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Name of the diary"),(0,n.kt)("li",{parentName:"ol"},"Graph type"),(0,n.kt)("li",{parentName:"ol"},"Icon color"),(0,n.kt)("li",{parentName:"ol"},"Datasets"),(0,n.kt)("li",{parentName:"ol"},"Unit of measurement"),(0,n.kt)("li",{parentName:"ol"},"Data display time interval"),(0,n.kt)("li",{parentName:"ol"},"Data aggregation rule")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/diary/constructor/view.png"})),(0,n.kt)("h2",{id:"diary_costructor_charts"},"Charts"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Diaries")," are configurations that collect a set of variables in one place and style them for a convenient presentation. Implemented ",(0,n.kt)("inlineCode",{parentName:"p"},"diary types"),":"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Line graphs"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Progress circle"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Progress bar"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Prime number")),(0,n.kt)("h2",{id:"diary_costructor_datasets"},"Data sets"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data set")," represents a list of expressions, each of which reflects the relationship of a set of ",(0,n.kt)("a",{parentName:"p",href:"/docs/guide/history/constructor_diary"},"variables"),".."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For example: liquid balance = difference between filled and poured liquid.\nThese options can be displayed as:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"two lines (two expressions with one variable each)"),(0,n.kt)("li",{parentName:"ul"},"one line reflecting their difference (one expression of type A - B)."))),(0,n.kt)("p",null,"Expressions are ",(0,n.kt)("strong",{parentName:"p"},"assembled")," from blocks of the form ",(0,n.kt)("inlineCode",{parentName:"p"},"[var][?]"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clicking on the ",(0,n.kt)("inlineCode",{parentName:"li"},"[var]")," block opens a dialog with a list of variables."),(0,n.kt)("li",{parentName:"ul"},"Clicking on the ",(0,n.kt)("inlineCode",{parentName:"li"},"[?]")," block opens a dialog with a list of available operations.")),(0,n.kt)("p",null,"To the right of the expression is the ",(0,n.kt)("strong",{parentName:"p"},"expression settings")," button, where you can set such parameters as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The color of the element on the chart"),(0,n.kt)("li",{parentName:"ul"},"Inclusion of expression in widget statistics (total value in the widget panel)"),(0,n.kt)("li",{parentName:"ul"},"Prefix and suffix when calculating the total value in the diary widget panel")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prefix and suffix")," do not affect diary log values. They only change the visual shell of the value, for easier reading."),(0,n.kt)("p",null,"Form for creating a diary"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/diary/constructor/datasets.png"})),(0,n.kt)("p",null,"Diary view window"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/diary/diaryFullView.png"})),(0,n.kt)("p",null,"Diary widget with prefixes and suffixes"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/diary/diaryWidget.png"})),(0,n.kt)("h2",{id:"diary_costructor_variables"},"Variables"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Variables")," are used to identify history objects. A variable contains a name and limits. Variables are created via the ",(0,n.kt)("inlineCode",{parentName:"p"},"variable constructor"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{type:"imgscreen",src:"/WM_doc/img/guide/diary/variableConstructor.png"})),(0,n.kt)("h2",{id:"diary_costructor_aggregation"},"Aggregation"),(0,n.kt)("p",null,"All collected data in the diaries is aggregated at specified intervals depending on the period of the diary:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Period 1 day: aggregation interval - 3 hours"),(0,n.kt)("li",{parentName:"ul"},"Period 1 week: aggregation interval - 1 day"),(0,n.kt)("li",{parentName:"ul"},"Period 1 month: aggregation interval - 3 days")),(0,n.kt)("p",null,"The final value defines the aggregation rule:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"last value"),(0,n.kt)("li",{parentName:"ul"},"mean"),(0,n.kt)("li",{parentName:"ul"},"total value")),(0,n.kt)("p",null,"Aggregation is used for the readability of graphs with a large amount of data.\nYou can change the diary period, interval and aggregation rule in the diary settings when editing it"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"At the same time, absolutely all measurements are displayed in the diary log without aggregation")))}g.isMDXComponent=!0}}]);