(window["webpackJsonpwhatsapp-helper-app"]=window["webpackJsonpwhatsapp-helper-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(9),a(10),a(1));a(11);a(12);var s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{className:"navbar-brand",href:"https://whatsapp.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://www-cdn.whatsapp.net/img/v4/whatsapp-logo.svg",width:"100%",height:"35",className:"d-inline-block align-top",alt:"Whatsapp"}))))};var m=function(e){var t=e.phone,a=e.text,n=e.host;return 11===t.length?r.a.createElement("iframe",{title:"whatsapp",id:"luncher",width:"0",height:"0",style:{border:"none"},src:"".concat(n).concat(function(e,t){return"/send?".concat(e?"phone=55".concat(e):"").concat(t?"&text=".concat(t):"")}(t,a))}):r.a.createElement(r.a.Fragment,null)};var i=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),o=Object(l.a)(c,2),i=o[0],u=o[1],h=r.a.useState(!1),p=Object(l.a)(h,2),g=p[0],d=p[1],v=r.a.useState(!1),E=Object(l.a)(v,2),b=E[0],f=E[1],w=r.a.useState(!0),N=Object(l.a)(w,2),x=N[0],A=N[1],S=r.a.useState(r.a.createElement(r.a.Fragment,null)),k=Object(l.a)(S,2),y=k[0],O=k[1],j=r.a.useState("#"),F=Object(l.a)(j,2),W=F[0],B=F[1];return r.a.useEffect(function(){var e=document.querySelector("#luncher");B(e?e.src:"#")},[y]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("main",{className:"container"},r.a.createElement("article",{className:"article"},r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=a.replace(/[^0-9]/g,"");navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?O(r.a.createElement(m,{phone:t,text:i,host:"whatsapp:/"})):O(r.a.createElement(m,{phone:t,text:i,host:"https://web.whatsapp.com"})),d(!0)}},r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"phone"},"N\xfamero do WhatsApp"),r.a.createElement("input",{className:"form-control form-control-lg",type:"tel",id:"phone",value:a,onChange:function(e){var t=e.target.value;n(t),/(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b/g.test(t)?A(!1):A(!0)},placeholder:"Ex.: 11912345678"})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{id:"text",type:"checkbox",className:"custom-control-input",onChange:function(e){var t=e.target.checked;f(t),t||u("")}}),r.a.createElement("label",{htmlFor:"text",className:"custom-control-label"},"Mensagem?")),b&&r.a.createElement("textarea",{className:"form-control form-control-lg",id:"text",value:i,onChange:function(e){var t=e.target.value;u(t)},placeholder:"Ex.: Ol\xe1! Tudo bem?",minLength:"2",maxLength:"50"})),r.a.createElement("div",{className:"form-group text-center"},g?r.a.createElement("a",{href:W,className:"btn btn-primary btn-lg"},"ENVIAR MENSAGEM"):r.a.createElement("input",{className:"btn btn-primary btn-lg",type:"submit",value:"GERAR LINK",disabled:x})))))),y))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.f25c3d11.chunk.js.map