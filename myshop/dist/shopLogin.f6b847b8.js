var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequirede3a;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequirede3a=r),r.register("5q2VS",(function(e,o){var t,n,i,a;t=e.exports,n="getProducts",i=()=>l,Object.defineProperty(t,n,{get:i,set:a,enumerable:!0,configurable:!0});var d=r("etBjH");async function l(e){const o=d.collection(e,"products");try{const{docs:e}=await d.getDocs(o);return e.map((e=>({...e.data(),id:e.id})))}catch(e){console.log(e)}}}));
//# sourceMappingURL=shopLogin.f6b847b8.js.map
