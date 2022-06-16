"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[1930],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,id:"scheduler",title:"Planning",slug:"/presentation/schedule"},d=void 0,c={unversionedId:"presentation/schedule/scheduler",id:"presentation/schedule/scheduler",title:"Planning",description:"An important element of the system is task scheduling. In this case, the tasks are divided into",source:"@site/docs/presentation/schedule/schedule.md",sourceDirName:"presentation/schedule",slug:"/presentation/schedule",permalink:"/WM_doc/docs/presentation/schedule",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/presentation/schedule/schedule.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"scheduler",title:"Planning",slug:"/presentation/schedule"},sidebar:"presentation",previous:{title:"Diary constructor",permalink:"/WM_doc/docs/presentation/history/constructor_diary"},next:{title:"Chat",permalink:"/WM_doc/docs/presentation/chat"}},s={},p=[{value:"Scheduler Interface",id:"schedule_interface",level:2},{value:"Creating events",id:"schedule_event_add",level:2},{value:"Event Timings",id:"event-timings",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An important element of the system is task scheduling. In this case, the tasks are divided into"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reminders"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"taking medications"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"an appointment with a doctor")," and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keeping diaries"))),(0,a.kt)("h2",{id:"schedule_interface"},"Scheduler Interface"),(0,a.kt)("p",null,"The scheduler is divided into"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title")," and"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"body")," whose layout changes from vertical to horizontal depending on the screen's width.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," contains a hidden ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar")," block (date picker) and a ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule block for the day"),". To open the ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar")," block, you need to click on the name of the month in the ",(0,a.kt)("inlineCode",{parentName:"p"},"header"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Schedule for the day")," is a list, where each of the lines is responsible for the ",(0,a.kt)("inlineCode",{parentName:"p"},"hour"),"."),(0,a.kt)("p",null,"If a task is scheduled for the current day, it will be displayed next to the hour in which it is scheduled. If several tasks overlap the execution window, tasks are added to the right of the existing ones."),(0,a.kt)("p",null,"The calendar ",(0,a.kt)("inlineCode",{parentName:"p"},"pins")," the days on which at least one task is scheduled"),(0,a.kt)("div",{align:"center",display:"flex"},(0,a.kt)("div",null,(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/schedulerView.png"})),(0,a.kt)("div",null,(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/schedulerCalendar.png"}))),(0,a.kt)("h2",{id:"schedule_event_add"},"Creating events"),(0,a.kt)("p",null,"To add an ",(0,a.kt)("inlineCode",{parentName:"p"},"Event"),", click on the corresponding button at the bottom of the window."),(0,a.kt)("p",null,"After clicking, you get to the window for selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"type of event"),". Currently, only two types are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Reminder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Taking medication"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/schedulerEventTypes.png"})),(0,a.kt)("p",null,"Depending on the selected event type, the event designer window that is opened next will contain a slightly different set of components, but in most cases, these sets overlap."),(0,a.kt)("div",{align:"center",display:"flex"},(0,a.kt)("div",null,(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/addEvent1.png"})),(0,a.kt)("div",null,(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/addEvent2.png"}))),(0,a.kt)("h3",{id:"event-timings"},"Event Timings"),(0,a.kt)("p",null,"To select the time of the event, you can use two methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"date selection"),(0,a.kt)("li",{parentName:"ul"},"choice of days of the week")),(0,a.kt)("p",null,"In the first case, you need to select a specific date. Then the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," will appear in the ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar")," only once."),(0,a.kt)("p",null,"If you decide to select the days of the week, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"calendar")," will appear constantly according to the selected days of the week. If at least one day of the week is selected, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"date picker")," widget will be disabled."),(0,a.kt)("p",null,"After selecting the days, you can set the time for the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," to appear in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule for the day"),". To do this, you can click on the already added time to delete it on the panel with the clock or on the + button to add a new time."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{type:"imgscreen",src:"/WM_doc/img/presentation/calendar/schedulerTimeSelector.png"})))}h.isMDXComponent=!0}}]);