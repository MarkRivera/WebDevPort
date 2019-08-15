(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],Array(20).concat([function(e,a,t){e.exports=t.p+"static/media/Ravenous.4d9eda9f.png"},function(e,a,t){e.exports=t.p+"static/media/MessageMe.72b7f82d.png"},function(e,a,t){e.exports=t.p+"static/media/Netbuilders.697224d1.png"},function(e,a,t){e.exports=t.p+"static/media/Watchthis.baf87661.png"},function(e,a,t){e.exports=t.p+"static/media/MR.6588dcce.png"},,function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/code.8c181c2b.jpg"},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t(17),s=t.n(l),o=(t(31),t(6)),i=(t(32),t(33),function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(c.b,{to:"/",className:"nav-link"},"Home"),r.a.createElement(c.b,{to:"/resume",className:"nav-link"},"Resume"),r.a.createElement(c.b,{to:"/contact",className:"nav-link"},"Contact")))}),m=(t(39),t(9)),u=(t(40),t(41),t(20)),f=t.n(u),p=t(21),d=t.n(p),h=t(22),b=t.n(h),g=t(23),E=t.n(g),v=function(e){var a=Object(n.useState)([{title:"Watch This",image:E.a,desc:"An app that decides which movie you should watch when you can't decide.",liveLink:"https://peaceful-scrubland-82341.herokuapp.com/",gitLink:"https://github.com/MarkRivera/WatchThis",icons:["fab fa-html5 fa-2x html","fab fa-css3-alt fa-2x css","fab fa-js fa-2x js","fab fa-react fa-2x react","fab fa-node fa-2x node"]},{title:"NetBuilders",image:b.a,desc:"A social media like web app that allows you to sign up and share amongst other developers",liveLink:"https://safe-brushlands-22158.herokuapp.com/",gitLink:"https://github.com/MarkRivera/NetBuilders",icons:["fab fa-html5 fa-2x html","fab fa-css3-alt fa-2x css","fab fa-js fa-2x js","fab fa-react fa-2x react","fab fa-node fa-2x node"]},{title:"Ravenous",image:f.a,desc:"When you're hungry, this app makes it easy to find the food you really want to eat.",liveLink:"https://peaceful-journey-11506.herokuapp.com/",gitLink:"https://github.com/MarkRivera/ravenous",icons:["fab fa-html5 fa-2x html","fab fa-css3-alt fa-2x css","fab fa-js fa-2x js","fab fa-react fa-2x react"]},{title:"Message-Me",image:d.a,desc:"A message app I developed to show the power and efficiency of React and Redux.",liveLink:"https://enigmatic-plains-76907.herokuapp.com/",gitLink:"https://github.com/MarkRivera/msg2",icons:["fab fa-html5 fa-2x html","fab fa-css3-alt fa-2x css","fab fa-js fa-2x js","fab fa-react fa-2x react","fab fa-node fa-2x node"]}]),t=Object(m.a)(a,2),c=t[0];t[1];return r.a.createElement("section",{className:"portfolio",id:"portfolio-start"},r.a.createElement("header",{className:"intro"},r.a.createElement("h2",{className:"port-title"},"Introduction"),r.a.createElement("p",{className:"port-desc"}," ","Passionate technologist and a web developer. I love connecting people together and I\u2019m always seeking opportunities to be creative implementing the latest technologies."," ")),r.a.createElement("section",{className:"projects"},c.map(function(e,a){return r.a.createElement("article",{className:"card portfolio-card",key:a},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("img",{src:e.image,alt:"for ".concat(e.title," project"),className:"site-image"}),r.a.createElement("p",{className:"card-desc"},e.desc),r.a.createElement("div",{className:"tech-icons"},e.icons.map(function(e,a){return r.a.createElement("i",{className:e,key:a})})),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{className:"link",href:e.liveLink,target:"_blank",rel:"noopener noreferrer"},"Live"),r.a.createElement("a",{href:e.gitLink,className:"link",target:"_blank",rel:"noopener noreferrer"},"Code")))})))},N=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"banner"},r.a.createElement("section",{className:"header-card"},r.a.createElement("h2",{className:"header-title"},"Mark Rivera"),r.a.createElement("h4",{className:"header-position"},"Web Developer"),r.a.createElement("button",{className:"btn header-btn",onClick:function(e){window.scrollTo({top:document.querySelector(".portfolio").getBoundingClientRect().top,behavior:"smooth"})}},"Portfolio"))),r.a.createElement(v,null))},k=(t(42),function(e){var a=e.page,t=e.propClass;return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"hero-heading"},r.a.createElement("div",{className:"image-wrapper ".concat(t)}),r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h1",null,a))))}),w=(t(43),function(){var e=function(e,a){fetch("/api/resume/download?type=".concat(a)).then(function(e){return e.blob()}).then(function(e){var t=document.createElement("a");document.body.appendChild(t),t.style="display: none";var n=URL.createObjectURL(e);t.href=n,t.download="MR.".concat(a.toLowerCase()),t.click(),window.URL.revokeObjectURL(n),document.body.removeChild(t)})};return r.a.createElement("section",{className:"downloads"},r.a.createElement("h3",{className:"download-title"},"Downloads"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn resume-btn",onClick:function(a){return e(0,"docx")}},r.a.createElement("i",{className:"fas fa-download"})," Word"),r.a.createElement("button",{className:"btn resume-btn",onClick:function(a){return e(0,"pdf")}},r.a.createElement("i",{className:"fas fa-download"})," PDF")),r.a.createElement("hr",null))}),y=t(24),x=t.n(y),j=(t(44),function(){return r.a.createElement("section",{className:"resume-container"},r.a.createElement("h3",{className:"resume-title"},"Resume"),r.a.createElement("img",{src:x.a,alt:"of MarkRivera's Resume",className:"resume"}))}),O=(t(45),function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(k,{page:"Resume",propClass:"resume-image-wrapper"}),r.a.createElement(w,null),r.a.createElement(j,null))}),R=t(14),L=t.n(R),C=t(25),S=t(10);t(47);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(t,!0).forEach(function(a){Object(S.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var D=function(e){return r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},F=function(e){var a=Object(n.useState)({email:"",message:""}),t=Object(m.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],u=(o[1],c.email),f=c.message,p=function(e){l(P({},c,Object(S.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(C.a)(L.a.mark(function e(a){var t;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=c,fetch("/api/contact/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){if(e.errors){var a=e.errors[0].msg,t=e.errors[0].param;h(a,t)}else l(P({},c,{email:"",message:""}))});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),h=function(e,a){l(P({},c,Object(S.a)({},a,e)));var t=document.querySelector("#".concat(a));t.classList.add("danger"),t.nextSibling.classList.add("danger-label"),setTimeout(function(){t.classList.remove("danger"),t.nextSibling.classList.remove("danger-label")},2e3)};return r.a.createElement(n.Fragment,null,r.a.createElement(k,{page:"Contact",propClass:"contact-image-wrapper"}),r.a.createElement("section",{className:"contact-form"},r.a.createElement("h3",{className:"form-title"},"Contact Me"),r.a.createElement("form",{className:"auth-form",onSubmit:function(e){return d(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"email",name:"email",value:u,onChange:function(e){return p(e)},onFocus:function(e){return function(e){var a=e.nativeEvent.target.nextSibling.style;a.top="40%",a.transform="translateY(-100%)",a.fontSize="11px"}(e)},onBlur:function(e){return function(e){var a=e.nativeEvent.target.nextSibling.style;c[e.target.name].length<=0&&(a.top="50%",a.transform="translateY(-50%)",a.fontSize="14px")}(e)}}),r.a.createElement("label",{for:"email",className:"input-label"},"Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"text-area",id:"message","aria-describedby":"message",name:"message",value:f,onChange:function(e){return p(e)},rows:"8",placeholder:"Message here..."})),r.a.createElement("button",{type:"submit",className:"btn form-btn"},i?r.a.createElement(D,null):"Submit"))))},T=(t(48),function(e){return r.a.createElement("section",{className:"footer"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/Mrivera1991/",className:"social"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("a",{href:"https://github.com/MarkRivera",className:"social"},r.a.createElement("i",{className:"fab fa-github fa-2x"})),r.a.createElement(c.b,{to:"/contact",className:"social"},r.a.createElement("i",{className:"fas fa-envelope fa-2x"}))))});var W=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i,null),r.a.createElement("section",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:N}),r.a.createElement(o.a,{path:"/resume",component:O}),r.a.createElement(o.a,{path:"/contact",component:F}))),r.a.createElement(T,null))};s.a.render(r.a.createElement(c.a,null,r.a.createElement(W,null)),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.54ceccd2.chunk.js.map