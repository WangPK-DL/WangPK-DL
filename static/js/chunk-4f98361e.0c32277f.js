(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f98361e"],{"4be3":function(t,i,e){"use strict";e("89d9")},"4de4":function(t,i,e){"use strict";var o=e("23e7"),n=e("b727").filter,s=e("1dde"),a=s("filter");o({target:"Array",proto:!0,forced:!a},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"89d9":function(t,i,e){},f7c6:function(t,i,e){t.exports=e.p+"static/img/close.2429f76a.svg"},fe8f:function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"mine-send-part"},[o("div",{staticClass:"send-title"},[t._v(" 位置显示 "),o("div",{staticClass:"send-control",style:{"background-image":"url("+e("f7c6")+")"},on:{click:t.goToHomeMain}})]),o("div",{staticClass:"send-main",attrs:{id:"viewDiv"}}),o("div",{staticClass:"send-footer",class:{sendStatus:t.leaflet.send},on:{click:t.getSendData}},[t._v(" 发送 ")])])},n=[],s=(e("d3b7"),e("4de4"),e("d81d"),e("cebe")),a=e.n(s),l=e("c249"),r=e("860c"),d=e.n(r),u={data:function(){return{leaflet:{map:null,send:!1}}},mounted:function(){var t,i,e,o,n,s,r,u,c,v,f,p,g,m,h,w,b,k={task_placename:null===this||void 0===this||null===(t=this.$store)||void 0===t||null===(i=t.state)||void 0===i||null===(e=i.User)||void 0===e||null===(o=e.login)||void 0===o?void 0:o.task_placename,task_radius:null===this||void 0===this||null===(n=this.$store)||void 0===n||null===(s=n.state)||void 0===s||null===(r=s.User)||void 0===r||null===(u=r.login)||void 0===u?void 0:u.task_radius,task_starttime:null===this||void 0===this||null===(c=this.$store)||void 0===c||null===(v=c.state)||void 0===v||null===(f=v.User)||void 0===f||null===(p=f.login)||void 0===p?void 0:p.task_starttime,task_endtime:null===this||void 0===this||null===(g=this.$store)||void 0===g||null===(m=g.state)||void 0===m||null===(h=m.User)||void 0===h||null===(w=h.login)||void 0===w?void 0:w.task_endtime,positionPoint:null===this||void 0===this||null===(b=this.$store)||void 0===b?void 0:b.getters["User/positionPointGeoJSON"](),_this:this},y=k.task_placename,_=k.task_radius,$=k.task_starttime,D=k.task_endtime,P=k.positionPoint,S=k._this;if(!(_&&$&&D&&P))return S.$toast("无打卡任务无需判断"),void J();function C(t){var i=l["buffer"](P,.001*_,{units:"kilometers"});if(window.localStorage.getItem("initPositionData")){var e=JSON.parse(window.localStorage.getItem("initPositionData")),o=e.features.filter((function(t,i,e){var o;return(null===t||void 0===t||null===(o=t.properties)||void 0===o?void 0:o.Name)===y||""==y})),n=o.filter((function(t,e,o){var n=!!l["intersect"](t,i);return n}));t({positionBufferPolygon:i,positionFilterResult:n})}else a.a.get("./school-building.geojson").then((function(t){window.localStorage.setItem("initPositionData",JSON.stringify(null===t||void 0===t?void 0:t.data))})).then((function(){var e=JSON.parse(window.localStorage.getItem("initPositionData")),o=e.features.filter((function(t,i,e){var o;return(null===t||void 0===t||null===(o=t.properties)||void 0===o?void 0:o.Name)===y||""==y})),n=o.filter((function(t,e,o){var n=!!l["intersect"](t,i);return n}));t({positionBufferPolygon:i,positionFilterResult:n})}))}function J(t){var i,e,o=d.a.map("viewDiv",{zoomControl:!0,attributionControl:!0});S.leaflet.map=o,d.a.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"Mapbox"}).addTo(o),o.setView({lat:(null===P||void 0===P||null===(i=P.geometry)||void 0===i?void 0:i.coordinates[1])||28.682975759198253,lon:(null===P||void 0===P||null===(e=P.geometry)||void 0===e?void 0:e.coordinates[0])||116.026260653},18),null!==t&&void 0!==t&&t.positionBufferPolygon&&null!==t&&void 0!==t&&t.positionFilterResult&&P&&(d.a.geoJSON(t.positionBufferPolygon,{style:{color:"#00f",weight:5,opacity:.5,fillColor:"#fff"}}).addTo(S.leaflet.map),d.a.geoJSON(t.positionFilterResult,{style:{color:"#f00",weight:3,opacity:1,fillColor:"#fff"}}).addTo(S.leaflet.map),d.a.geoJSON(P,{pointToLayer:function(t,i){var e={radius:8,fillColor:"#ff7800",color:"#fff",weight:1,opacity:1,fillOpacity:.8};return d.a.circleMarker(i,e)},onEachFeature:function(t,i){i.bindPopup("定位获取的位置").openPopup()}}).addTo(o))}new Promise(C).then((function(t){return new Promise((function(i){var e,o=Date.now(),n=Date.parse("".concat($)),s=Date.parse("".concat(D)),a=0,l=null===t||void 0===t||null===(e=t.positionFilterResult)||void 0===e?void 0:e.length;if(o<n?a=2:o>=s&&o>=n?a=-1:o>=n&&o<=s&&(a=1),l)switch(a){case-1:S.$notify({message:"迟到了",type:"danger"});break;case 0:S.$notify({message:"未打卡？？",type:"danger"});break;case 1:S.$notify({message:"定位分析成功",type:"success"});break;case 2:S.$notify({message:"来早了",type:"danger"});break}else a=-2,S.$notify({message:"位置偏离",type:"warning"});var r=new Date,d=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" "+r.getHours()+":"+(r.getMinutes()+1)+":"+(r.getSeconds()+1);S.$store.state.User.get.sendDatabase.datenow=d,S.$store.state.User.get.sendDatabase.task_status=a,i(t)}))})).then(J)},computed:{},methods:{goToHomeMain:function(){this.$router.push("main")},getSendData:function(){var t,i,e,o,n,s,l,r,u,c={positionPoint:null===this||void 0===this||null===(t=this.$store)||void 0===t||null===(i=t.state)||void 0===i||null===(e=i.User)||void 0===e||null===(o=e.get)||void 0===o||null===(n=o.locationItem)||void 0===n?void 0:n.positionPoint,_this:this,map:this.leaflet.map,sendDatabase:null===this||void 0===this||null===(s=this.$store)||void 0===s||null===(l=s.state)||void 0===l||null===(r=l.User)||void 0===r||null===(u=r.get)||void 0===u?void 0:u.sendDatabase},v=c.positionPoint,f=c._this,p=c.map,g=c.sendDatabase;p.setView(d.a.latLng(v.latitude,v.longitude),17,{duration:2}),a.a.get("".concat("https://www.pkcile.cn/advsk/sj/sj13/public/index.php","/api/position/submit"),{params:g}).catch((function(){f.$toast({message:"网络出现了点问题",position:"bottom"})})).then((function(t){"ok"===t.data.status?f.$toast({message:"打卡结果提交成功",position:"bottom"}):"false"===t.data.status&&f.$toast({message:"请重新获取定位后再提交",position:"bottom"}),f.leaflet.send=!0}))}}},c=u,v=(e("4be3"),e("2877")),f=Object(v["a"])(c,o,n,!1,null,null,null);i["default"]=f.exports}}]);