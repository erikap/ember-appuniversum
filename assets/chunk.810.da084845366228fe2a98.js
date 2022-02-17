/*! For license information please see chunk.810.da084845366228fe2a98.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[810],{810:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>v})
const r="-shadowcsshost",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),n=new RegExp("(-shadowcsscontext"+o,"gim"),l=new RegExp("(-shadowcssslotted"+o,"gim"),i="-shadowcsshost-no-combinator",a=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,u=/:host/gim,g=/::slotted/gim,d=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,x=/([{}])/g,w="%BLOCK%",$=(e,t)=>{const s=b(e)
let r=0
return s.escapedString.replace(_,(function(){const e=arguments.length<=2?void 0:arguments[2]
let o="",c=arguments.length<=4?void 0:arguments[4],n=""
c&&c.startsWith("{%BLOCK%")&&(o=s.blocks[r++],c=c.substring(w.length+1),n="{")
const l={selector:e,content:o},i=t(l)
return`${arguments.length<=1?void 0:arguments[1]}${i.selector}${arguments.length<=3?void 0:arguments[3]}${n}${i.content}${c}`}))},b=e=>{const t=e.split(x),s=[],r=[]
let o=0,c=[]
for(let n=0;n<t.length;n++){const e=t[n]
"}"===e&&o--,o>0?c.push(e):(c.length>0&&(r.push(c.join("")),s.push(w),c=[]),s.push(e)),"{"===e&&o++}return c.length>0&&(r.push(c.join("")),s.push(w)),{escapedString:s.join(""),blocks:r}},S=(e,t,s)=>e.replace(t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
if(t[2]){const e=t[2].split(","),r=[]
for(let o=0;o<e.length;o++){const c=e[o].trim()
if(!c)break
r.push(s(i,c,t[3]))}return r.join(",")}return i+t[3]})),O=(e,t,s)=>e+t.replace(r,"")+s,W=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,k=(e,t,s,r,o)=>$(e,(e=>{let o=e.selector,c=e.content
return"@"!==e.selector[0]?o=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t)
return!s.test(e)})(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(function(e){return arguments.length<=1?void 0:arguments[1]}))),o=e=>{let o=e.trim()
if(!o)return""
if(e.indexOf(i)>-1)o=((e,t,s)=>{if(p.lastIndex=0,p.test(e)){const t=`.${s}`
return e.replace(a,((e,s)=>s.replace(/([^:]*)(:*)(.*)/,((e,s,r,o)=>s+t+r+o)))).replace(p,t+" ")}return t+" "+e})(e,t,s)
else{const t=e.replace(p,"")
if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/)
e&&(o=e[1]+r+e[2]+e[3])}}return o},c=(e=>{const t=[]
let s,r=0
return s=(e=e.replace(/(\[[^\]]*\])/g,((e,s)=>{const o=`__ph-${r}__`
return t.push(s),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,s,o)=>{const c=`__ph-${r}__`
return t.push(o),r++,s+c})),{content:s,placeholders:t}})(e)
let n,l="",h=0
const u=/( |>|\+|~(?!=))\s*/g
let g=!((e=c.content).indexOf(i)>-1)
for(;null!==(n=u.exec(e));){const t=n[1],s=e.slice(h,n.index).trim()
g=g||s.indexOf(i)>-1,l+=`${g?o(s):s} ${t} `,h=u.lastIndex}const d=e.substring(h)
return g=g||d.indexOf(i)>-1,l+=g?o(d):d,m=c.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]))
var m})(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=k(e.content,t,s,r)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}})),v=(e,t,s)=>{const o=t+"-h",a=t+"-s",p=e.match(f)||[]
e=e.replace(m,"")
const _=[]
if(s){const t=e=>{const t=`/*!@___${_.length}___*/`,s=`/*!@${e.selector}*/`
return _.push({placeholder:t,comment:s}),e.selector=t+e.selector,e}
e=$(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=$(e.content,t),e):e))}const x=((e,t,s,o,a)=>{const p=((e,t)=>{const s="."+t+" > ",r=[]
return e=e.replace(l,(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o]
if(t[2]){const e=t[2].trim(),o=t[3],c=s+e+o
let n=""
for(let s=t[4]-1;s>=0;s--){const e=t[5][s]
if("}"===e||","===e)break
n=e+n}const l=n+c,i=`${n.trimRight()}${c.trim()}`
if(l.trim()!==i.trim()){const e=`${i}, ${l}`
r.push({orgSelector:l,updatedSelector:e})}return c}return i+t[3]})),{selectors:r,cssText:e}})(e=(e=>S(e,n,W))(e=(e=>S(e,c,O))(e=e.replace(d,"-shadowcsscontext").replace(u,r).replace(g,"-shadowcssslotted"))),o)
return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=p.cssText),t&&(e=k(e,t,s,o)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}})(e,t,o,a)
return e=[x.cssText,...p].join("\n"),s&&_.forEach((t=>{let{placeholder:s,comment:r}=t
e=e.replace(s,r)})),x.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}])
