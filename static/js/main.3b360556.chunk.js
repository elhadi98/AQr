(window.webpackJsonpaqr=window.webpackJsonpaqr||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(11),n(12),n(1)),u=n.n(o),s=n(3),l=n(2);var v=function(e){e.children;var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(null),v=Object(l.a)(o,2),d=v[0],f=v[1],m=Object(a.useState)(null),p=Object(l.a)(m,2),b=p[0],g=p[1],w=Object(a.useState)(null),h=Object(l.a)(w,2),E=h[0],k=h[1],j=Object(a.useRef)(null),O=function(){k(null),b&&(b.getTracks().forEach((function(e){return e.stop()})),g(null))};return Object(a.useEffect)((function(){alert("getCamera effect"),O(),function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("mediaDevices"in navigator&&"enumerateDevices"in navigator.mediaDevices)){e.next=14;break}return e.prev=1,e.next=4,navigator.mediaDevices.enumerateDevices();case 4:t=e.sent,n=[{deviceId:void 0}],t.forEach((function(e){"videoinput"===e.kind&&n.push(e)})),i(n),f(n[0].deviceId),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),k(new Error("Camera Error!"));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.useEffect)((function(){O();var e=c.length?d:void 0;e&&function(){var t=Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)||!e){t.next=14;break}return t.prev=1,t.next=4,navigator.mediaDevices.getUserMedia({video:!0,deviceId:e?{exact:e}:void 0});case 4:n=t.sent,g(n),j.current.srcObject=n,t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",k(new Error("Please allow us to use the camera.")));case 12:t.next=15;break;case 14:return t.abrupt("return",k(new Error("No camera device was found!")));case 15:case 16:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}()()}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:function(e){f(e.target.value),console.log(b)}},c.map((function(e){return r.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)}))),r.a.createElement("video",{ref:j,autoPlay:!0}),E&&r.a.createElement("span",null,E.message))};var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,(function(e){return r.a.createElement(r.a.Fragment,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.3b360556.chunk.js.map