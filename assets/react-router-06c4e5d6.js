import{A as J,i as f,p as R,s as j,j as N,g as B,r as L}from"./@remix-run-edbfe580.js";import{a as m,r}from"./react-ba0062d6.js";/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const V=typeof Object.is=="function"?Object.is:w,{useState:D,useEffect:I,useLayoutEffect:T,useDebugValue:$}=m;function k(e,t,o){const n=t(),[{inst:a},s]=D({inst:{value:n,getSnapshot:t}});return T(()=>{a.value=n,a.getSnapshot=t,v(a)&&s({inst:a})},[e,n,t]),I(()=>(v(a)&&s({inst:a}),e(()=>{v(a)&&s({inst:a})})),[e]),$(n),n}function v(e){const t=e.getSnapshot,o=e.value;try{const n=t();return!V(o,n)}catch{return!0}}function G(e,t,o){return t()}const q=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=!q,A=z?G:k;"useSyncExternalStore"in m&&(e=>e.useSyncExternalStore)(m);const p=r.createContext(null),d=r.createContext(null),M=r.createContext({outlet:null,matches:[]});function W(e,t){let{relative:o}=t===void 0?{}:t;h()||f(!1);let{basename:n,navigator:a}=r.useContext(p),{hash:s,pathname:l,search:i}=F(e,{relative:o}),u=l;return n!=="/"&&(u=l==="/"?n:N([n,l])),a.createHref({pathname:u,search:i,hash:s})}function h(){return r.useContext(d)!=null}function O(){return h()||f(!1),r.useContext(d).location}function X(){h()||f(!1);let{basename:e,navigator:t}=r.useContext(p),{matches:o}=r.useContext(M),{pathname:n}=O(),a=JSON.stringify(B(o).map(i=>i.pathnameBase)),s=r.useRef(!1);return r.useEffect(()=>{s.current=!0}),r.useCallback(function(i,u){if(u===void 0&&(u={}),!s.current)return;if(typeof i=="number"){t.go(i);return}let c=L(i,JSON.parse(a),n,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:N([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,a,n])}function F(e,t){let{relative:o}=t===void 0?{}:t,{matches:n}=r.useContext(M),{pathname:a}=O(),s=JSON.stringify(B(n).map(l=>l.pathnameBase));return r.useMemo(()=>L(e,JSON.parse(s),a,o==="path"),[e,s,a,o])}var U;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(U||(U={}));var S;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(S||(S={}));function Y(e){let{basename:t="/",children:o=null,location:n,navigationType:a=J.Pop,navigator:s,static:l=!1}=e;h()&&f(!1);let i=t.replace(/^\/*/,"/"),u=r.useMemo(()=>({basename:i,navigator:s,static:l}),[i,s,l]);typeof n=="string"&&(n=R(n));let{pathname:c="/",search:g="",hash:C="",state:x=null,key:P="default"}=n,y=r.useMemo(()=>{let E=j(c,i);return E==null?null:{location:{pathname:E,search:g,hash:C,state:x,key:P},navigationType:a}},[i,c,g,C,x,P,a]);return y==null?null:r.createElement(p.Provider,{value:u},r.createElement(d.Provider,{children:o,value:y}))}var b;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(b||(b={}));new Promise(()=>{});export{p as N,Y as R,X as a,O as b,F as c,W as u};
