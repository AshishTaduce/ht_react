(this["webpackJsonphackertimes-react"]=this["webpackJsonphackertimes-react"]||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a.p+"static/media/comment-24px.6843fce1.svg"},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),l=(a(30),a(8)),i=a.n(l),o=a(10),u=a(9),m=a(11),d=a(12),p=a(15),f=a(14),v=(a(32),a(33),a(13));var h=function(e){return r.a.createElement("div",{className:"days-menu",key:0},e.strings.map((function(e,t){return r.a.createElement(v.b,{to:{pathname:"/".concat(t+1),state:{dayNumber:t+1}},style:{textDecoration:"none"},className:"day-name ".concat(0===t?"active-tab":"")},e.toUpperCase())})))},w=a(6);a(39);var E=function(e){return r.a.createElement("h2",{className:e.isPopular?"news-header-popular":"news-header"},r.a.createElement("div",{onClick:function(){window.open(e.url)},className:"heading link"},e.title))};a(40);var g=function(e){return r.a.createElement("div",{className:void 0===e.data?"":"news-subtitle link"},void 0===e.imageUrl?null:r.a.createElement("img",{src:e.imageUrl,alt:"",onClick:function(){return window.open(e.url)},className:"news-image-1 link"}),void 0===e.data?null:r.a.createElement("div",{className:"link",onClick:function(){return window.open(e.url)}},I(e.data)))},N=(a(41),a(42),a(24)),b=a.n(N);function y(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"author"},r.a.createElement("div",null,void 0===(t=e.props.url)?"":(t=(t=t.replace("https://","").replace("http://","")).split("/"))[0]),r.a.createElement("div",{className:"time-published"},function(e){var t=new Date(1e3*e),a=(new Date).getDate()-t.getDate(),n=(new Date).getHours()-t.getHours(),r=(new Date).getMinutes()-t.getMinutes();return a>0?a+" days":n>0?n+" hours":r+" minutes"}(e.props.time)," ago")),r.a.createElement(k,{comments:e.props.descendants,score:e.props.score,url:e.url}));var t}function k(e){return r.a.createElement("div",{className:"comments-points"},r.a.createElement("div",{className:"comments"},r.a.createElement("img",{src:b.a,alt:"",className:"icons"}),r.a.createElement("div",{className:"link",onClick:function(){return window.open(e.url)}},e.comments," Comments")),r.a.createElement("div",{className:"points"},r.a.createElement("div",{className:"point-count"},e.score," points")))}function C(e){var t=new Date(1e3*e.htBatchTime),a=(new Date).getHours()-t.getHours(),n=e.score;return a<12&&a>0&&n>=10*a||a>=12&&n>=120}function I(e){return void 0!==e&&1===e.split(" ").length?(console.log("Found single long word of ",e,e.substring(0,10)),"".concat(e.substring(0,10),"...")):void 0===e||e.length<=50?e:e.substring(0,e.substring(0,100).lastIndexOf(" "))+"..."}var x=function(e){var t=e.news.url;return e.isPopular?r.a.createElement("div",{className:"popular-newscard"},void 0!==e.news.htCurrentImage?r.a.createElement("div",{className:"popular-image-div"},r.a.createElement("img",{onClick:function(){return window.open(t)},src:e.news.htCurrentImage,alt:"",className:"big-image link"})):null,r.a.createElement("div",{className:"news-popular"},r.a.createElement(E,{url:t,title:e.news.title,isPopular:!1}),r.a.createElement(g,{url:t,data:e.news.htCurrentSubtitle})),r.a.createElement(y,{url:"https://news.ycombinator.com/item?id=".concat(e.news.id),props:e.news})):r.a.createElement("div",{className:"news-card-1"},r.a.createElement(E,{url:t,title:e.news.title,isPopular:!1}),r.a.createElement("div",{className:"news-1"},r.a.createElement(g,{url:t,data:I(e.news.htCurrentSubtitle),imageUrl:e.news.htCurrentImage})),r.a.createElement(y,{url:"https://news.ycombinator.com/item?id=".concat(e.news.id),props:e.news}))};a(43);var S=function(e){return r.a.createElement("div",{className:"section-1"},r.a.createElement("div",{className:"popular-column"},r.a.createElement("div",{className:"big-image-div",onClick:function(){return window.open(e.popularNews.url)}},void 0===e.popularNews.htCurrentImage?null:r.a.createElement("img",{src:e.popularNews.htCurrentImage,alt:"",className:"popular-image link"})),r.a.createElement("div",{className:"news-popular link"},r.a.createElement(E,{url:e.popularNews.url,title:e.popularNews.title,isPopular:!0}),r.a.createElement(g,{url:e.popularNews.url,data:I(e.popularNews.htCurrentSubtitle)})),r.a.createElement(y,{url:"https://news.ycombinator.com/item?id=".concat(e.popularNews.id),props:e.popularNews})),r.a.createElement("div",{className:"unpopular-column story-block"},e.column1.map((function(e){return r.a.createElement(x,{news:e,isPopular:C(e)})}))),r.a.createElement("div",{className:"unpopular-column story-block"},e.column2.map((function(e){return r.a.createElement(x,{isPopular:C(e),news:e})}))))};a(44),a(45);var j=function(e){return r.a.createElement("div",{className:"news-subtitle link",onClick:function(){return window.open(e.url)}},void 0===e.imageUrl?null:r.a.createElement("img",{src:e.imageUrl,alt:"",className:"news-image-2"}),I(e.data))};a(46);var O=function(e,t){return t?r.a.createElement("div",{className:"popular-newscard"},r.a.createElement("div",{className:"popular-image-div"},r.a.createElement("img",{onClick:function(){return window.open(e.url)},src:e.htCurrentImage,alt:"",className:"big-image link"})),r.a.createElement("div",{className:"news-popular"},r.a.createElement(E,{url:e.url,title:e.title,isPopular:!1}),r.a.createElement(g,{url:e.url,data:e.htCurrentSubtitle})),r.a.createElement(y,{url:"https://news.ycombinator.com/item?id=".concat(e.id),props:e})):r.a.createElement("div",{className:"news-card-2"},r.a.createElement(E,{url:e.url,title:e.title,isPopular:!1}),r.a.createElement("div",{className:"news-2"},r.a.createElement(j,{url:e.url,data:e.htCurrentSubtitle,imageUrl:e.htImage})),r.a.createElement(y,{url:"https://news.ycombinator.com/item?id=".concat(e.id),props:e}))};a(47);var D=function(e){return r.a.createElement("div",{className:"section-2"},e.storyBlocks.map((function(e){return r.a.createElement("div",{className:"story-block"},e.map((function(e){return O(e,C(e))})))})))};a(48);var P=function(e){return r.a.createElement("div",{className:"section-3-news"},I(e.data))};a(49);var L=function(e){return r.a.createElement("div",{className:"news-card-3"},void 0===e.htCurrentImage?null:r.a.createElement("img",{src:e.htCurrentImage,alt:"",className:"news-image-3 link",onClick:function(){return window.open(e.url)}}),r.a.createElement("div",{className:"sec-3-news"},r.a.createElement(E,{title:e.title,isPopular:!1}),r.a.createElement("div",{className:"news-3"},r.a.createElement(P,{data:e.htCurrentSubtitle})),r.a.createElement(y,{props:e})))};a(50);function U(e){return r.a.createElement("div",{className:"section-3"},e.newsItemList.map((function(e){return L(e)})))}a(51);function M(e){return r.a.createElement("div",{className:"section-4"},e.newsItemList.map((function(e){return L(e)})))}var T=function(e){return e.htCurrentImage&&e.htCurrentSubtitle||e.htCurrentImage},B=function(e){return C(e)&&e.htCurrentImage},A=function(e){return void 0!==e.htCurrentSubtitle&&!C(e)},H=function(e){return!C(e)&&void 0===e.htCurrentImage&&void 0===e.htCurrentSubtitle};function z(e){var t=[];function a(){if(e.find(B)){var a=e.splice(e.findIndex(B),1)[0],n=F(e),c=Object(u.a)(n,1)[0],s=F(e),l=Object(u.a)(s,2),i=l[0],o=l[1],m=r.a.createElement("div",null,r.a.createElement(S,{popularNews:a,column1:c,column2:i}));e=o,t.push(m)}}function n(){if(e.length>1&&e.find(T)){var a=[e.splice(e.findIndex(T),1)[0],e.splice(e.findIndex(T),1)[0]],n=r.a.createElement("div",null,r.a.createElement(U,{newsItemList:a}));t.push(n)}}function c(){if(e.length>11){for(var a=[],n=0;n<4;n++){var c=F(e),s=Object(u.a)(c,2),l=s[0],i=s[1];a.push(l),e=i}var o=r.a.createElement("div",null,r.a.createElement(D,{storyBlocks:a}));t.push(o)}}for(;e.length>11&&(a(),c(),n(),n(),c(),console.log("News Left is:",e.length,t.length),void 0!==e.find(T)););return function(){for(;e.length>1;){var a=e.splice(0,6),n=r.a.createElement("div",null,r.a.createElement(M,{newsItemList:a}));t.push(n)}}(),t}function F(e){if(e.find(A)){var t=e.splice(e.findIndex(A),1)[0],a=e.splice(e.findIndex(A),1)[0];return t.htCurrentImage&&a.htCurrentImage?[[t,a],e]:[[t,a,e.splice(e.findIndex(A),1)[0]],e]}return e.find(B)?[[e.splice(e.findIndex(B),1)[0],e.splice(e.findIndex(A),1)[0]],e]:e.find(H)?[[e.splice(e.findIndex(H),1)[0],e.splice(e.findIndex(H),1)[0],e.splice(e.findIndex(H),1)[0]],e]:(console.log("Entered the last else"),[e.splice(0,3),e])}var W=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={newsCards:void 0},e}return Object(d.a)(a,[{key:"getNews",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-times.s3-us-west-1.amazonaws.com/1dayStories",e.next=3,fetch("https://hacker-times.s3-us-west-1.amazonaws.com/1dayStories");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a.top,e.next=10,z(n);case 10:r=e.sent,this.setState({newsCards:r});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){return void 0!==this.state.newsCards?r.a.createElement("div",{className:"samples-list"},this.state.newsCards.map((function(e){return e}))):null}}]),a}(r.a.Component),J=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",component:R,exact:!0}),r.a.createElement(w.a,{path:"/samples",component:W,exact:!0}),r.a.createElement(w.a,{path:"/:dayNumber",component:R,exact:!0})))}}]),a}(r.a.Component);function R(e){var t=function(){for(var e=[],t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=2;a<7;a++){var n=new Date;e.push("".concat(t[new Date(n.setDate(n.getDate()-a)).getDay()]))}return e}();t.unshift("Latest","Yesterday");var a=Object(n.useState)(void 0),c=Object(u.a)(a,2),s=c[0],l=c[1];function m(){return(m=Object(o.a)(i.a.mark((function t(){var a,n,r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(void 0),a="https://hacker-times.s3-us-west-1.amazonaws.com/".concat(void 0===e.location.state?1:e.location.state.dayNumber,"dayStories"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:return r=t.sent,c=r.top,t.next=11,z(c);case 11:s=t.sent,l(s);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[e.location.state]),r.a.createElement("div",{className:"App"},r.a.createElement("head",{className:"App-header"},r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("title",null,"McLaren Times"),r.a.createElement("link",{rel:"stylesheet",href:"style.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap",rel:"stylesheet"})),r.a.createElement("div",{className:"main-body"},r.a.createElement("h1",{className:"main-title"},"McLaren Times"),r.a.createElement(h,{strings:t}),void 0!==s?r.a.createElement("div",{className:"samples-list"},s.map((function(e){return e}))):r.a.createElement("div",{className:"loading-batch"},"Loading")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[25,1,2]]]);
//# sourceMappingURL=main.e8199dec.chunk.js.map