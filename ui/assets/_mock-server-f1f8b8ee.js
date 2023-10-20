import{r as T}from"./vue-db0e7353.js";import{m as f}from"./mockjs-890b569b.js";import{p as x}from"./index-a3873c66.js";import"./dayjs-4778c158.js";const r=(e,{msg:s="ok"}={})=>({code:0,data:e,msg:s,type:"success"}),m=(e="Request failed.",{code:s=-1,data:t=null}={})=>({code:s,data:t,msg:e,type:"error"}),o=T({list:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10",nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}]});function a(e,s){let t=[];if(s==="add"&&(o.list.unshift({...e,id:+new Date,role:"xx",address:"xx"}),t=o.list),s==="edit"){const n=o.list.indexOf(e.id);o.list.splice(n,1),o.list.unshift(e),t=o.list}return e!=null&&e.name&&(e!=null&&e.sex)?(t=o.list.filter(n=>n.name.includes(e==null?void 0:e.name)),t=t.filter(n=>n.sex.includes(e==null?void 0:e.sex))):e!=null&&e.name?t=o.list.filter(n=>n.name.includes(e==null?void 0:e.name)):e!=null&&e.sex?t=o.list.filter(n=>n.sex.includes(e==null?void 0:e.sex)):t=o.list,r({items:t,total:t.length})}const k=[{url:"/api/table/business",timeout:200,method:"post",response:({body:e})=>a(e)},{url:"/api/table/add",timeout:200,method:"post",response:({body:e})=>a(e,"add")},{url:"/api/table/edit",timeout:200,method:"post",response:({body:e})=>a(e,"edit")},{url:"/api/table/proxy",timeout:200,method:"get",response:()=>r({items:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"Man",age:35,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"Man",age:35,address:"Guangzhou"},{id:100011,name:"Test11",nickname:"T11",role:"Test",sex:"Women",age:26,address:"test abc"},{id:100012,name:"Test12",nickname:"T12",role:"Develop",sex:"Man",age:34,address:"Guangzhou"},{id:100013,name:"Test13",nickname:"T13",role:"Test",sex:"Women",age:22,address:"Shenzhen"}],total:13})}],_=Object.freeze(Object.defineProperty({__proto__:null,createFakeTableData:a,default:k},Symbol.toStringTag,{value:"Module"}));function h(){return[{level:"0",mail:"3133192631@qq.com",nickname:"noey",password:"123"},{level:"1",mail:"1",nickname:"noey",password:"1"}]}const y=[{url:"/api/user/login",timeout:200,method:"post",response:({body:e})=>{const{mail:s,password:t}=e,n=h().find(l=>l.mail===s&&t===l.password);if(!n)return m("账号或密码错误！");const{level:d,mail:u,nickname:c}=n;return r({level:d,mail:u,nickname:c})}},{url:"/api/user/userInfo",timeout:200,method:"post",response:({body:e})=>{const{level:s,mail:t,nickname:n}=h()[0];return r({level:s,mail:t,nickname:n})}},{url:"/api/user/register",timeout:200,method:"post",response:()=>r(void 0,{msg:"注册成功"})},{url:"/api/user/sendresetpwdmail",timeout:200,method:"post",response:()=>r(void 0,{msg:"重置成功"})},{url:"/api/user/logout",timeout:200,method:"get",response:()=>r(void 0,{msg:"退出成功"})},{url:"/api/testRetry",statusCode:405,method:"get",response:()=>m("Error!")}],v=Object.freeze(Object.defineProperty({__proto__:null,createFakeUserList:h,default:y},Symbol.toStringTag,{value:"Module"})),i=f;function S(e){i.XHR.prototype.__send=i.XHR.prototype.send,i.XHR.prototype.send=function(){if(this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.custom.requestHeaders){const s={};for(let t in this.custom.requestHeaders)s[t.toString().toLowerCase()]=this.custom.requestHeaders[t];this.custom.options=Object.assign({},this.custom.options,{headers:s})}this.__send.apply(this,arguments)},i.XHR.prototype.proxy_open=i.XHR.prototype.open,i.XHR.prototype.open=function(){let s=this.responseType;this.proxy_open(...arguments),this.custom.xhr&&s&&(this.custom.xhr.responseType=s)};for(const{url:s,method:t,response:n,timeout:d}of e)z(d),i.mock(x(s,void 0,{end:!1}),t||"get",D(n))}function b(e){const s=e.split("?")[1];return s?JSON.parse('{"'+decodeURIComponent(s).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function D(e){return function(s){let t=null;if(typeof e=="function"){const{body:n,type:d,url:u,headers:c}=s;let l=n;try{l=JSON.parse(n)}catch{}t=e({method:d,body:l,query:b(u),headers:c})}else t=e;return i.mock(t)}}function z(e=0){e&&i.setup({timeout:e})}const p=Object.assign({"./demo/table.ts":_,"./sys/auth.ts":v}),g=[];Object.keys(p).forEach(e=>{e.includes("/_")||g.push(...p[e].default)});const w=()=>S(g);export{w as setupProdMockServer};