(this["webpackJsonpreact-final"]=this["webpackJsonpreact-final"]||[]).push([[0],{47:function(e,c,t){},48:function(e,c,t){},52:function(e,c,t){},73:function(e,c,t){},89:function(e,c,t){},92:function(e,c,t){},93:function(e,c,t){},94:function(e,c,t){},95:function(e,c,t){},96:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(21),r=t.n(a),n=(t(47),t(48),t(13)),i=t(9),j=(t(52),t(0)),d=Object(n.b)((function(e){return{cart:e.cart}}),null)((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"logo-title",children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{children:"SHOP"}),"LANE"]})})}),Object(j.jsxs)("div",{className:"menus",children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"#clothing-section",children:"Clothing"}),Object(j.jsx)(i.b,{to:"#accessories-section",children:"Accessories"})]}),Object(j.jsxs)("div",{className:"user-cart",children:[Object(j.jsx)("div",{className:"search-icon",children:Object(j.jsx)("i",{class:"fas fa-search"})}),Object(j.jsx)(i.b,{to:"/cart",children:Object(j.jsx)("div",{className:"cart-icon",children:Object(j.jsx)("i",{class:"fas fa-cart-plus",children:Object(j.jsx)("span",{children:e.cart.length})})})}),Object(j.jsx)("div",{className:"user-icon",children:Object(j.jsx)("i",{class:"fas fa-user"})})]})]})})})),l=t(8),o=t(15),h=t(24),b=t.n(h),O=(t(73),function(e){var c=e.brand,t=e.name,s=e.preview,a=e.price,r=e.id;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.b,{to:"/product/".concat(r),children:Object(j.jsxs)("div",{className:"product-card",children:[Object(j.jsx)("div",{className:"product-preview",children:Object(j.jsx)("img",{src:s,alt:"product"})}),Object(j.jsxs)("div",{className:"product-data",children:[Object(j.jsx)("h3",{className:"product-name",children:t}),Object(j.jsx)("h4",{className:"product-brand",children:c}),Object(j.jsxs)("h4",{className:"product-price",children:["Rs. ",a]})]})]})})})}),u="ADD_PRODUCT",m="GET_PRODUCTS",x="CLEAR_CART",f=t(38),p=t.n(f);t(89),t(90),t(91);function N(){return Object(j.jsxs)(p.a,Object(l.a)(Object(l.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{className:"carousel",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"slider-img",src:"https://imgur.com/96OnkX7.png",alt:"slider-img"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"slider-img",src:"https://imgur.com/KtGxwnN.png",alt:"slider-img"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"slider-img",src:"https://imgur.com/sfjg9R8.png",alt:"slider-img"})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"slider-img",src:"https://imgur.com/p0wdadG.png",alt:"slider-img"})})]}))}t(92);var v=t(107),g=Object(n.b)((function(e){return{products:e.products}}),(function(e){return{sendProducts:function(c){return e(function(e){return{type:m,payload:e}}(c))}}}))((function(e){var c=Object(s.useState)(!0),t=Object(o.a)(c,2),a=t[0],r=t[1];Object(s.useEffect)((function(){b()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(c){e.sendProducts(c.data),r(!1)}))}),[]);var n=e.products.filter((function(e){return!1===e.isAccessory})),i=e.products.filter((function(e){return!0===e.isAccessory}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{}),Object(j.jsxs)("div",{className:"clothing-section",children:[Object(j.jsx)("h2",{children:"Clothing for Men and Women"}),a?Object(j.jsxs)("div",{className:"wait-loader",children:[Object(j.jsx)(v.a,{}),Object(j.jsx)(v.a,{color:"secondary"})]}):Object(j.jsx)("div",{className:"card-wrapper",children:n&&(null===n||void 0===n?void 0:n.map((function(e){return Object(j.jsx)(O,Object(l.a)({},e))})))})]}),Object(j.jsxs)("div",{className:"accessories-section",children:[Object(j.jsx)("h2",{children:"Accessories for Men and Women"}),a?Object(j.jsxs)("div",{className:"wait-loader",children:[Object(j.jsx)(v.a,{}),Object(j.jsx)(v.a,{color:"secondary"})]}):Object(j.jsx)("div",{className:"card-wrapper",children:i&&(null===i||void 0===i?void 0:i.map((function(e){return Object(j.jsx)(O,Object(l.a)({},e))})))})]})]})})),A=(t(93),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"the-footer",children:[Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("h3",{className:"footer-heading",children:"ONLINE STORE"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"MEN CLOTHING"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"WOMEN CLOTHING"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"MEN ACCESSORIES"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"WOMEN ACCESSORIES"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("h3",{className:"footer-heading",children:"HELPFUL LINKS"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"HOME"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"ABOUT"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"CONTACT"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("h3",{className:"footer-heading",children:"PARTNERS"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"ZARA"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"PANTALOONS"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"LEVIS"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"UCB"}),Object(j.jsx)("a",{className:"footer-data",href:"#",children:"+ MANY MORE"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("h3",{className:"footer-heading",children:"ADDRESS"}),Object(j.jsx)("p",{className:"address-data",href:"#",children:"BUILDING 101"}),Object(j.jsx)("p",{className:"address-data",href:"#",children:"CENTRAL AVENUE"}),Object(j.jsx)("p",{className:"address-data",href:"#",children:"LA - 902722"}),Object(j.jsx)("p",{className:"address-data",href:"#",children:"UNITED STATES"})]})]})})}),C=t(3),E=(t(94),Object(n.b)(null,(function(e){return{addToCart:function(c){return e(function(e){return{type:u,payload:e}}(c))}}}))((function(e){var c=Object(C.g)().id,t=Object(s.useState)([]),a=Object(o.a)(t,2),r=a[0],n=a[1],i=Object(s.useState)(!0),d=Object(o.a)(i,2),l=d[0],h=d[1],O=r.name,u=r.price,m=(r.preview,r.brand),x=r.description,f=Object(s.useState)(""),p=Object(o.a)(f,2),N=p[0],g=p[1],A=Object(s.useState)(!1),E=Object(o.a)(A,2),S=(E[0],E[1]);return Object(s.useEffect)((function(){b()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product","/").concat(c)).then((function(e){n(e.data),h(!1),g(e.data.preview)}))}),[]),Object(j.jsx)(j.Fragment,{children:l?Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)(v.a,{}),Object(j.jsx)(v.a,{color:"secondary"})]}):Object(j.jsxs)("div",{className:"product-page",children:[Object(j.jsx)("div",{className:"product-photo",children:Object(j.jsx)("img",{src:N,alt:O})}),Object(j.jsxs)("div",{className:"product-details",children:[Object(j.jsx)("h1",{className:"the-name",children:O}),Object(j.jsx)("h2",{className:"the-brand",children:m}),Object(j.jsxs)("h3",{className:"the-price",children:["Price: Rs. ",Object(j.jsx)("span",{children:u})]}),Object(j.jsx)("h3",{className:"description-title",children:"Description"}),Object(j.jsx)("p",{className:"the-desc",children:x}),Object(j.jsx)("h3",{className:"preview-title",children:"Product Preview"}),Object(j.jsx)("div",{className:"the-photos",children:r.photos&&r.photos.map((function(e){return Object(j.jsx)("div",{className:"small-photo",children:Object(j.jsx)("img",{src:e,alt:"",onClick:function(){g(e),S(!0)}})})}))}),Object(j.jsx)("button",{className:"add-to-cart-btn",onClick:function(){return e.addToCart(r)},children:"Add To Cart"})]})]})})}))),S=(t(95),Object(n.b)((function(e){return{cart:e.cart}}),(function(e){return{clearAll:function(){return e({type:x})}}}))((function(e){var c=Object(s.useState)(!1),t=Object(o.a)(c,2),a=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)(C.a,{to:"/"}),e.cart.length<=0?Object(j.jsx)("div",{className:"empty-cart",children:Object(j.jsx)("h1",{children:"Your cart is empty. Kindly add products to proceed."})}):Object(j.jsxs)("div",{className:"cart-page",children:[Object(j.jsx)("h1",{className:"checkout-title",children:"Checkout"}),Object(j.jsxs)("h3",{children:[" Total Items: ",e.cart.length]}),Object(j.jsxs)("div",{className:"cart-details",children:[Object(j.jsx)("div",{className:"cart-products",children:e.cart.map((function(e){return Object(j.jsxs)("div",{className:"the-product",children:[Object(j.jsx)("img",{src:e.preview,alt:""}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("h3",{children:["Amount: ",e.price]})]})]})}))}),Object(j.jsxs)("div",{className:"cart-amount",children:[Object(j.jsx)("h2",{children:"Total Amount"}),Object(j.jsxs)("h3",{children:["Amount: Rs. ",e.cart.length&&e.cart.reduce((function(e,c){return e+c.price}),0)]}),Object(j.jsx)("button",{onClick:function(){e.clearAll(),alert("Order placed successfully"),r(!0)},children:"Place Order"})]})]})]})]})}))),T=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{width:"100vw",height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)("h1",{style:{fontSize:"4em"},children:"404 Page Not Found"})})})};var y=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"empty-div"}),Object(j.jsxs)(C.d,{children:[Object(j.jsx)(C.b,{path:"/",exact:!0,component:g}),Object(j.jsx)(C.b,{path:"/react-final",component:g}),Object(j.jsx)(C.b,{path:"/product/:id",component:E}),Object(j.jsx)(C.b,{path:"/cart",component:S}),Object(j.jsx)(C.b,{component:T})]}),Object(j.jsx)(A,{})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,108)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,r=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),r(e),n(e)}))},R=t(40),L=t(39),P={products:[],cart:[]},I=Object(R.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,c=arguments.length>1?arguments[1]:void 0,t=c.type,s=c.payload;switch(t){case m:return Object(l.a)(Object(l.a)({},e),{},{products:s});case u:return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(L.a)(e.cart),[s])});case x:return Object(l.a)(Object(l.a)({},e),{},{cart:[]});default:return e}}));r.a.render(Object(j.jsx)(n.a,{store:I,children:Object(j.jsx)(y,{})}),document.getElementById("root")),w()}},[[96,1,2]]]);
//# sourceMappingURL=main.5aed3f74.chunk.js.map