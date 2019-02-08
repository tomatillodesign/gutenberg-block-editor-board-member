!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),a=n(3),l=(n.n(a),n(4)),m=(n.n(l),wp.element.Fragment,wp.blocks.registerBlockType),o=wp.editor,c=(o.InspectorControls,o.RichText),s=wp.components,i=(s.Toolbar,s.Button,s.Tooltip,s.PanelBody,s.PanelRow,s.FormToggle,s.TextControl);s.IconButton,s.RangeControl,m("clb-custom-blocks/board-member",{title:"Board Member",description:"Add a new board member to the page.",category:"common",icon:{foreground:"#fff",background:"#489163",src:r.a},keywords:["board","member","directors"],attributes:{name:{type:"string",source:"text",selector:".board-member-name"},title:{type:"string",source:"text",selector:".board-member-title"},website:{type:"string",source:"text",selector:".board-member-website"},bio:{type:"array",source:"children",selector:".board-member-bio-body"}},edit:function(e){var t=e.attributes,n=t.name,r=t.title,a=t.website,l=t.bio,m=e.className,o=e.isSelected,s=e.setAttributes,b=function(e){s({name:e})},p=function(e){s({title:e})},u=function(e){s({website:e})},d=function(e){s({bio:e})};return wp.element.createElement("div",{className:m},o?wp.element.createElement("div",{className:m+"-selected"},wp.element.createElement(i,{className:"board-member-name-input",label:"Name",value:n,placeholder:"Jane Doe",onChange:b}),wp.element.createElement(i,{className:"board-member-title-input",label:"Title",value:r,placeholder:"Optional",onChange:p}),wp.element.createElement(i,{className:"board-member-website-input",label:"Website",value:a,placeholder:"Optional",onChange:u}),wp.element.createElement("h4",null,"Bio"),wp.element.createElement(c,{tagName:"div",multiline:"p",placeholder:"Add your custom bio",onChange:d,value:l})):wp.element.createElement("div",{class:"static-board-member"},wp.element.createElement("p",null,"Board Member: ",n)))},save:function(e){var t=e.attributes,n=t.name,r=t.title,a=t.website,l=t.bio;a?wp.element.createElement("h4",null,wp.element.createElement("a",{href:a,target:"_blank",class:"board-member-website"},wp.element.createElement("span",{class:"board-member-name"},n)),r&&wp.element.createElement("span",null,", "),wp.element.createElement("span",{class:"board-member-title"},r)):wp.element.createElement("h4",null,wp.element.createElement("span",{class:"board-member-name"},n),r&&wp.element.createElement("span",null,", "),wp.element.createElement("span",{class:"board-member-title"},r));var m=void 0;return m=a?wp.element.createElement("a",{href:a,target:"_blank"},wp.element.createElement("span",{class:"board-member-website"},a)):wp.element.createElement("span",{class:"board-member-website"},a),wp.element.createElement("div",{class:"board-member-area"},wp.element.createElement("div",{class:"board-member-name-area"},wp.element.createElement("h4",null,wp.element.createElement("span",{class:"board-member-name"},n),r&&wp.element.createElement("span",null,", "),wp.element.createElement("span",{class:"board-member-title"},r))),wp.element.createElement("div",{class:"board-member-website-area"},m),wp.element.createElement("div",{class:"board-member-bio-body"},l))}})},function(e,t,n){"use strict";var r=wp.element.createElement("svg",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({width:"20px",height:"20px",viewBox:"0 0 100 100","data-prefix":"fas","data-icon":"users",className:"svg-inline--fa fa-users fa-w-20",xmlns:"http://www.w3.org/2000/svg"},"viewBox","0 0 640 512"),wp.element.createElement("path",{fill:"currentColor",d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}));t.a=r},function(e,t){},function(e,t){}]);