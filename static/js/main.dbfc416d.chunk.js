(this["webpackJsonphackertimes-react"]=this["webpackJsonphackertimes-react"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/comment-24px.6843fce1.svg"},25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),l=(a(30),a(8)),i=a.n(l),o=a(10),m=a(9),u=a(11),d=a(12),p=a(15),v=a(14),f=(a(32),a(33),a(13));var h=function(e){return r.a.createElement("div",{className:"days-menu"},e.strings.map((function(e,t){return r.a.createElement(f.b,{to:{pathname:"/".concat(t+1),state:{dayNumber:t+1}},style:{textDecoration:"none"},className:"day-name"},e.toUpperCase())})))};a(39);var E=function(e){return r.a.createElement("h2",{className:e.isPopular?"news-header-popular":"news-header"},e.title)},w=(a(40),a(41),a(42),a(24)),g=a.n(w);function N(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"author"},r.a.createElement("div",null,void 0===(t=e.props.url)?"":(t=(t=t.replace("https://","").replace("http://","")).split("/"))[0]),r.a.createElement("div",{className:"time-published"},function(e){var t=new Date(1e3*e),a=(new Date).getDate()-t.getDate(),n=(new Date).getHours()-t.getHours(),r=(new Date).getMinutes()-t.getMinutes();return a>0?a+" days":n>0?n+" hours":r+" minutes"}(e.props.time)," ago")),r.a.createElement(b,{comments:e.props.descendants,score:e.props.score}));var t}function b(e){return r.a.createElement("div",{className:"comments-points"},r.a.createElement("div",{className:"comments"},r.a.createElement("img",{src:g.a,alt:"",className:"icons"}),e.comments," Comments"),r.a.createElement("div",{className:"points"},r.a.createElement("div",{className:"point-count"},e.score," points")))}function y(e){var t=new Date(1e3*e.htBatchTime),a=(new Date).getHours()-t.getHours(),n=e.score;return a<12&&a>0&&n>=10*a||a>=12&&n>=120}function x(e){return void 0!==e&&1===e.split(" ").length?(console.log("Found single long word of ",e,e.substring(0,10)),"".concat(e.substring(0,10),"...")):void 0===e||e.length<=50?e:e.substring(0,e.substring(0,100).lastIndexOf(" "))+"..."}var C=function(e){return e.isPopular?r.a.createElement("div",{className:"popular-newscard"},void 0!==e.news.htCurrentImage?r.a.createElement("div",{className:"popular-image-div"},r.a.createElement("img",{src:e.news.htCurrentImage,alt:"",className:"big-image"})):null,r.a.createElement("div",{className:"news-popular"},r.a.createElement(E,{title:e.news.title,isPopular:!1}),r.a.createElement(I,{data:e.news.htCurrentSubtitle})),r.a.createElement(N,{props:e.news})):r.a.createElement("div",{className:"news-card-1"},r.a.createElement(E,{title:e.news.title,isPopular:!1}),r.a.createElement("div",{className:"news-1"},r.a.createElement(I,{data:x(e.news.htCurrentSubtitle),imageUrl:e.news.htCurrentImage})),r.a.createElement(N,{props:e.news}))};var I=function(e){return r.a.createElement("div",{className:void 0===e.data?"":"news-subtitle"},void 0===e.imageUrl?null:r.a.createElement("img",{src:e.imageUrl,alt:"",className:"news-image-1"}),void 0===e.data?null:x(e.data))};a(43);var k=function(e){return r.a.createElement("div",{className:"section-1"},r.a.createElement("div",{className:"popular-column"},r.a.createElement("div",{className:"big-image-div"},void 0===e.popularNews.htCurrentImage?null:r.a.createElement("img",{src:e.popularNews.htCurrentImage,alt:"",className:"popular-image"})),r.a.createElement("div",{className:"news-popular"},r.a.createElement(E,{title:e.popularNews.title,isPopular:!0}),r.a.createElement(I,{data:x(e.popularNews.htCurrentSubtitle)})),r.a.createElement(N,{props:e.popularNews})),r.a.createElement("div",{className:"unpopular-column story-block"},e.column1.map((function(e){return r.a.createElement(C,{news:e,isPopular:y(e)})}))),r.a.createElement("div",{className:"unpopular-column story-block"},e.column2.map((function(e){return r.a.createElement(C,{isPopular:y(e),news:e})}))))};a(44),a(45);var S=function(e){return r.a.createElement("div",{className:"news-subtitle"},void 0===e.imageUrl?null:r.a.createElement("img",{src:e.imageUrl,alt:"",className:"news-image-2"}),x(e.data))};a(46);var j=function(e,t){return t?r.a.createElement("div",{className:"popular-newscard"},r.a.createElement("div",{className:"popular-image-div"},r.a.createElement("img",{src:e.htCurrentImage,alt:"",className:"big-image"})),r.a.createElement("div",{className:"news-popular"},r.a.createElement(E,{title:e.title,isPopular:!1}),r.a.createElement(I,{data:e.htCurrentSubtitle})),r.a.createElement(N,{props:e})):r.a.createElement("div",{className:"news-card-2"},r.a.createElement(E,{title:e.title,isPopular:!1}),r.a.createElement("div",{className:"news-2"},r.a.createElement(S,{data:e.htCurrentSubtitle,imageUrl:e.htImage})),r.a.createElement(N,{props:e}))};a(47);var O=function(e){return r.a.createElement("div",{className:"section-2"},e.storyBlocks.map((function(e){return r.a.createElement("div",{className:"story-block"},e.map((function(e){return j(e,y(e))})))})))};a(48);var D=function(e){return r.a.createElement("div",{className:"section-3-news"},x(e.data))};a(49);var P=function(e){return r.a.createElement("div",{className:"news-card-3"},void 0===e.htCurrentImage?null:r.a.createElement("img",{src:e.htCurrentImage,alt:"",className:"news-image-3"}),r.a.createElement("div",{className:"sec-3-news"},r.a.createElement(E,{title:e.title,isPopular:!1}),r.a.createElement("div",{className:"news-3"},r.a.createElement(D,{data:e.htCurrentSubtitle})),r.a.createElement(N,{props:e})))};a(50);function U(e){return r.a.createElement("div",{className:"section-3"},e.newsItemList.map((function(e){return P(e)})))}var L=a(6),M=function(e){return y(e)&&e.htCurrentImage},T=function(e){return void 0!==e.htCurrentSubtitle},B=function(e){return!y(e)&&void 0===e.htCurrentImage&&void 0===e.htCurrentSubtitle};function H(e){for(var t=[];e.length>20;){if(e.find(M)){var a=e.splice(e.findIndex(M),1)[0],n=z(e),s=Object(m.a)(n,1)[0],c=z(e),l=Object(m.a)(c,2),i=l[0],o=l[1],u=r.a.createElement("div",null,r.a.createElement(k,{popularNews:a,column1:s,column2:i}));e=o,t.push(u)}for(var d=[],p=0;p<4;p++){var v=z(e),f=Object(m.a)(v,2),h=f[0],E=f[1];d.push(h),e=E}var w=r.a.createElement("div",null,r.a.createElement(O,{storyBlocks:d}));console.log("News Left is:",e.length,t.length);var g=[e.splice(e.findIndex(T),1)[0],e.splice(e.findIndex(T),1)[0]],N=r.a.createElement("div",null,r.a.createElement(U,{newsItemList:g}));t.push(w),t.push(N)}return t}function z(e){return e.find(T)?[[e.splice(e.findIndex(T),1)[0],e.splice(e.findIndex(T),1)[0]],e]:e.find(M)?[[e.splice(e.findIndex(M),1)[0],e.splice(e.findIndex(T),1)[0]],e]:e.find(B)?[[e.splice(e.findIndex(B),1)[0],e.splice(e.findIndex(B),1)[0],e.splice(e.findIndex(B),1)[0]],e]:(console.log("Entered the last else"),[e.splice(0,3),e])}var A=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={newsCards:void 0},e}return Object(d.a)(a,[{key:"getNews",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-times.s3-us-west-1.amazonaws.com/1dayStories",e.next=3,fetch("https://hacker-times.s3-us-west-1.amazonaws.com/1dayStories");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a.top,e.next=10,H(n);case 10:r=e.sent,this.setState({newsCards:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){return void 0!==this.state.newsCards?r.a.createElement("div",{className:"samples-list"},this.state.newsCards.map((function(e){return e}))):null}}]),a}(r.a.Component),F=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",component:W,exact:!0}),r.a.createElement(L.a,{path:"/samples",component:A,exact:!0}),r.a.createElement(L.a,{path:"/:dayNumber",component:W,exact:!0})))}}]),a}(r.a.Component);function W(e){var t=function(){for(var e=[],t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=2;a<7;a++){var n=new Date;e.push("".concat(t[new Date(n.setDate(n.getDate()-a)).getDay()]))}return e}();t.unshift("Latest","Yesterday");var a=Object(n.useState)(void 0),s=Object(m.a)(a,2),c=s[0],l=s[1];function u(){return(u=Object(o.a)(i.a.mark((function t(){var a,n,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(void 0),a="https://hacker-times.s3-us-west-1.amazonaws.com/".concat(void 0===e.location.state?1:e.location.state.dayNumber,"dayStories"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:return r=t.sent,s=r.top,t.next=11,H(s);case 11:c=t.sent,l(c);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[e.location.state]),r.a.createElement("div",{className:"App"},r.a.createElement("head",{className:"App-header"},r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("title",null,"McLaren Times"),r.a.createElement("link",{rel:"stylesheet",href:"style.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap",rel:"stylesheet"})),r.a.createElement("div",{className:"main-body"},r.a.createElement("h1",{className:"main-title"},"McLaren Times"),r.a.createElement(h,{strings:t}),void 0!==c?r.a.createElement("div",{className:"samples-list"},c.map((function(e){return e}))):r.a.createElement("div",{className:"loading-batch"},"Loading")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.dbfc416d.chunk.js.map