(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c67368"],{1114:function(t,e,i){},5388:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("van-nav-bar",{staticClass:"header",attrs:{title:"登陆页面"}}),i("main",{staticClass:"main"},[i("div",{staticStyle:{"padding-top":"15px"}},[i("form",[i("div",{staticClass:"mine-input-row"},[i("label",[t._v("账号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}})]),i("div",{staticClass:"mine-input-line"}),i("div",{staticClass:"mine-input-row"},[i("label",[t._v("密码")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),i("div",{staticClass:"mine-button-block",staticStyle:{"margin-top":"18px"},on:{click:t.loginIn}},[t._v(" 登陆 ")])]),i("div",{staticClass:"mine-link-center"},[i("span",{on:{click:t.registerAccount}},[t._v("注册账号")]),i("span",[t._v("|")]),i("span",{on:{click:t.forgetAccount}},[t._v("忘记密码")])])])]),i("footer",{staticClass:"footer"})],1)},s=[],a=i("ade3"),o=(i("da02"),i("6b41")),r=(i("b0c0"),i("cebe"),{data:function(){return{login:{username:"pkcile",password:"1234"}}},methods:{loginIn:function(){var t=this;this.login.username&&this.login.password?t.$store.dispatch("User/loginIn",{login:t.login,Router:t.$router,Toast:t.$toast}):(t.$toast("请完整输入账户密码信息"),t.login.username||t.login.password||t.$toast("你是否尝试匿名登陆"))},registerAccount:function(){window.sessionStorage.setItem("registerMark","1"),this.$router.push("/user/register")},forgetAccount:function(){this.$notify("不要忘记密码，找不回来了 :)")}},created:function(){},components:Object(a["a"])({},o["a"].name,o["a"])}),l=r,c=(i("c368"),i("2877")),u=Object(c["a"])(l,n,s,!1,null,"033fca82",null);e["default"]=u.exports},"6b41":function(t,e,i){"use strict";var n=i("d282"),s=i("b1d2"),a=i("ad06"),o=Object(n["a"])("nav-bar"),r=o[0],l=o[1];e["a"]=r({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(a["a"],{class:l("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:l("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:l("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[l({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[s["a"]]=this.border,t)]},[e("div",{class:l("content")},[this.hasLeft()&&e("div",{class:l("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[l("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:l("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:l("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},a30f:function(t,e,i){},ade3:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return n}))},b1d2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o}));var n="van-hairline",s=n+"--bottom",a=n+"--top-bottom",o=n+"-unset--top-bottom"},c368:function(t,e,i){"use strict";i("a30f")},da02:function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2"),i("1114")}}]);