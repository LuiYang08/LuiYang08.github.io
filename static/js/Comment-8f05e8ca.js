import{d as f,B as C,$ as s,C as v,i as _,K as k,b,_ as y,e as w,o as S,c as x,f as $,g as r}from"./index_prod-41362c69.js";const F=f({name:"ObComment",props:{title:{type:String,default:""},body:{type:String,default:""},uid:{type:String,default:""}},components:{SubTitle:C},setup(o){const g=s(o).title,c=s(o).body,p=s(o).uid,e=v(),l=_(),a=(t,n,i)=>{const d=!t||t===""?"":t,m=!n||n===""?window.location.href:`${window.location.href} 
 ${n}`,u=e.themeConfig.plugins.gitalk.id==="pathname"?window.location.pathname:i;if(l.setCache({title:t,body:n,uid:i}),!!e.configReady)if(e.themeConfig.plugins.gitalk.enable){const h=e.themeConfig.plugins.gitalk.proxy===""?"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token":e.themeConfig.plugins.gitalk.proxy;new Gitalk({clientID:e.themeConfig.plugins.gitalk.clientID,clientSecret:e.themeConfig.plugins.gitalk.clientSecret,repo:e.themeConfig.plugins.gitalk.repo,owner:e.themeConfig.plugins.gitalk.owner,admin:e.themeConfig.plugins.gitalk.admin,id:u,language:e.themeConfig.plugins.gitalk.language,distractionFreeMode:!0,title:d,body:m,proxy:h}).render("gitalk-container")}else e.themeConfig.plugins.valine.enable&&new Valine({el:"#vcomments",appId:e.themeConfig.plugins.valine.app_id,appKey:e.themeConfig.plugins.valine.app_key,avatar:e.themeConfig.plugins.valine.avatar,placeholder:e.themeConfig.plugins.valine.placeholder,visitor:e.themeConfig.plugins.valine.visitor,lang:e.themeConfig.plugins.valine.lang,meta:e.themeConfig.plugins.valine.meta??[],requiredFields:e.themeConfig.plugins.valine.requiredFields??[],avatarForce:e.themeConfig.plugins.valine.avatarForce,path:window.location.pathname})};k(()=>e.configReady,(t,n)=>{if(!n&&t){const i=l.cachePost;a(i.title,i.body,i.uid)}}),b(()=>{a(g.value,c.value,p.value)})}});const I={class:"bg-ob-deep-800 p-4 mt-8 lg:px-14 lg:py-10 rounded-2xl shadow-xl mb-8 lg:mb-0"},P=r("div",{id:"gitalk-container"},null,-1),R=r("div",{id:"vcomments"},null,-1);function V(o,g,c,p,e,l){const a=w("SubTitle");return S(),x("div",I,[$(a,{title:"titles.comment"},null,8,["title"]),P,R])}const D=y(F,[["render",V]]);export{D as C};