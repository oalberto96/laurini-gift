(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/kitty.27f4881f.gif"},function(e,t,n){e.exports={background:"style_background__2Cpnh"}},function(e,t,n){e.exports=n.p+"static/media/keanu.d6011372.gif"},,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),i=(n(21),n(6)),u=n(7),l=n(13),s=n(8),f=n(14),m=(n(22),n(2)),d=n(9),b=n(3),h=n(10),p=n.n(h),y=function(e,t){switch(t){case 0:return Object(b.a)({},e,{y:e.y-=1});case 2:return Object(b.a)({},e,{y:e.y+=1});case 3:return Object(b.a)({},e,{x:e.x-=1});case 1:return Object(b.a)({},e,{x:e.x+=1})}},w=function(e){var t=e.x,n=e.y,c=e.newDirection,o=e.detectCollision,i=Object(a.useState)({x:t,y:n}),u=Object(m.a)(i,2),l=u[0],s=u[1];o(l);var f=null;f?(clearTimeout(f),f=setTimeout(function(){var e=y(l,c);s(e)},5)):f=setTimeout(function(){var e=y(l,c);s(e)},5);var d={position:"absolute",top:l.y,left:l.x};return r.a.createElement("img",{width:"50",src:p.a,style:d,alt:"kitty"})},v=function(e){var t=e.x,n=e.y,a=e.letter,c={position:"absolute",top:n,left:t};return r.a.createElement("div",{style:c},a)},j=n(11),x=n.n(j),O=n(12),g=n.n(O),E=function(){return r.a.createElement("div",{className:x.a.background},r.a.createElement("h1",null,"Feliz Cumplea\xf1os Laurini!!!!"),r.a.createElement("img",{width:"300",src:g.a,alt:"Keanu bebe"}),r.a.createElement("h3",null,"Ya estas viejita, como keanu ","\u2728","<3"))},k=function(){return Math.floor(Math.random()*Math.floor(300))},C=function(){var e=["F","e","l","i","z","C","u","m","p","l","e","a","\xf1","o","s"];return e.slice().map(function(t){return{x:k(),y:k(),letter:e.shift()}})}(),S=C.shift(),B=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(m.a)(o,2),u=i[0],l=i[1],s=Object(d.a)({onSwiped:function(e){c(function(e){switch(e){case"Right":return 1;case"Left":return 3;case"Down":return 2;case"Up":return 0;default:return}}(e.dir))}});return r.a.createElement("div",Object.assign({style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#ffbccf",color:"white"},className:"Board"},s),u&&r.a.createElement(E,null),!u&&r.a.createElement("div",null,r.a.createElement(v,S),r.a.createElement(w,{x:50,y:500,newDirection:n,detectCollision:function(e){e.x>=S.x-50&&e.x<=S.x+10&&e.y>=S.y-50&&e.y<=S.y+10&&(C.length>0?S=C.shift():l(!0))}})))},D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.5af9fe74.chunk.js.map