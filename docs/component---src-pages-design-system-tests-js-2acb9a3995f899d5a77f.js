"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[458],{3132:function(e,t,a){var n,r=a(8752),i=(n=r)&&n.__esModule?n:{default:n};var s={tags:function(e){var t=e.id,a=e.events,n=e.dataLayer,r=e.dataLayerName,s=e.preview,d="&gtm_auth="+e.auth,c="&gtm_preview="+s;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+d+c+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(a).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+d+c+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+r+"','"+t+"');",dataLayerVar:this.dataLayer(n,r)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=s},6858:function(e,t,a){var n,r=a(3132),i=(n=r)&&n.__esModule?n:{default:n};var s={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,a=e.events,n=void 0===a?{}:a,r=e.dataLayer,i=e.dataLayerName,s=void 0===i?"dataLayer":i,d=e.auth,c=void 0===d?"":d,l=e.preview,o=void 0===l?"":l,u=this.gtm({id:t,events:n,dataLayer:r||void 0,dataLayerName:s,auth:c,preview:o});r&&document.head.appendChild(u.dataScript),document.head.insertBefore(u.script(),document.head.childNodes[0]),document.body.insertBefore(u.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,a=e.dataLayerName,n=void 0===a?"dataLayer":a;if(window[n])return window[n].push(t);var r=i.default.dataLayer(t,n),s=this.dataScript(r);document.head.insertBefore(s,document.head.childNodes[0])}};e.exports=s},1616:function(e,t,a){var n,r=a(6858),i=(n=r)&&n.__esModule?n:{default:n};e.exports=i.default},8752:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},467:function(e,t,a){a.r(t);var n=a(7294),r=a(1616),i=a.n(r),s=a(5592),d=a(262);i().initialize({gtmId:"GTM-TMXGP9X"});t.default=function(){return n.createElement(s.Z,null,n.createElement(d.Z,{title:"404: Not found"}),n.createElement("nav",{class:"stacked-nav","data-component":"stacked-nav"},n.createElement("ul",{class:"stacked-nav__list"},n.createElement("li",{class:"stacked-nav__list-item"},n.createElement("a",{"aria-current":"false","data-level":1,"data-text":"top level",href:"#"},n.createElement("span",{class:"stacked-nav__content-wrapper"},"Top level")),n.createElement("ul",{class:"stacked-nav__nested"},n.createElement("li",{class:"stacked-nav__list-item"},n.createElement("a",{"aria-current":"false","data-level":2,"data-text":"nested link one",href:"#"},n.createElement("span",{class:"stacked-nav__content-wrapper"},"Nested link one",n.createElement("span",{class:"stacked-nav__hint"},"hint text")))),n.createElement("li",{class:"stacked-nav__list-item"},n.createElement("a",{"aria-current":"false","data-level":2,"data-text":"nested link two",href:"#"},n.createElement("span",{class:"stacked-nav__content-wrapper"},"Nested link two")),n.createElement("ul",{class:"stacked-nav__nested"},n.createElement("li",{class:"stacked-nav__list-item"},n.createElement("a",{"aria-current":"false","data-level":3,"data-text":"deep nested link",href:"#"},n.createElement("span",{class:"stacked-nav__content-wrapper"},"Deep nested link",n.createElement("span",{class:"stacked-nav__hint"},"hint text")))))))))))}}}]);
//# sourceMappingURL=component---src-pages-design-system-tests-js-2acb9a3995f899d5a77f.js.map