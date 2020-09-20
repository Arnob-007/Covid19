(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{195:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),s=(a(92),a(16)),l=a(231),i=a(232),u=a(233),d=a(225),m=a(229),v=a(230),f=a(15),p=a.n(f),h=(a(93),function(e){var t=e.setCasesType,a=e.active,n=e.title,o=e.cases,r=e.total;return c.a.createElement("div",{className:"infobox ".concat(a&&"info__actv")},c.a.createElement(d.a,{onClick:t},c.a.createElement(m.a,null,c.a.createElement(v.a,{color:"textSecondary"},n),c.a.createElement("h2",{className:"info__h2"},"+".concat(p()(o).format("0.0a"))),c.a.createElement(v.a,{color:"textSecondary"},"".concat(p()(r).format("0.0a")," in Total")))))}),E=(a(97),a(98),function(e){var t=e.countries;return c.a.createElement("div",{className:"livecases"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null," ",t," "),c.a.createElement("td",null,c.a.createElement("strong",null," ",p()(a).format("0,0")," ")))})))}),y=a(80),_=(a(195),{legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return p()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return p()(e).format("0a")}}}]}}),b=function(e){var t=e.casesType,a=Object(n.useState)({}),o=Object(s.a)(a,2),r=o[0],l=o[1];return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a,n=[];for(var c in e[t]){if(a){var o={x:c,y:e[t][c]-a};n.push(o)}a=e[t][c]}l(n)}))}),[t]),c.a.createElement("div",{className:"linegraph"},(null===r||void 0===r?void 0:r.length)&&c.a.createElement(y.Line,{height:"100%",options:_,data:{datasets:[{data:r,backgroundColor:"".concat("recovered"===t?"rgba(0, 128, 0, 0.2)":"rgba(255, 0, 0, 0.2)"),borderColor:"".concat("recovered"===t?"green":"red")}]}}))},g=a(235),j=a(236),N=a(234),O=a(237),w=(a(196),{cases:{color:"red",multiply:1e3},recovered:{color:"green",multiply:1e3},deaths:{color:"red",multiply:2e3}}),C=function(e){var t=e.countries,a=e.center,n=e.zoom,o=e.casesType,r=void 0===o?"cases":o;return c.a.createElement("div",{className:"mapped"},c.a.createElement(g.a,{className:"mapped__map",center:a,zoom:n},c.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),null===t||void 0===t?void 0:t.map((function(e){return c.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:w[r].color,fillColor:w[r].color,radius:Math.sqrt(e[r])*w[r].multiply},c.a.createElement(O.a,null,c.a.createElement("div",{className:"info__container"},c.a.createElement("div",{className:"info__flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info__name"},e.country),c.a.createElement("div",{className:"info__data"},"Cases: ",p()(e.cases).format("0.0a")),c.a.createElement("div",{className:"info__data"},"Recovered: ",p()(e.recovered).format("0.0a")," "),c.a.createElement("div",{className:"info__data"},"Deaths: ",p()(e.deaths).format("0.0a")," "))))}))))},k=(a(197),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("Worldwide"),d=Object(s.a)(r,2),m=d[0],v=d[1],f=Object(n.useState)(),p=Object(s.a)(f,2),y=p[0],_=p[1],g=Object(n.useState)([]),j=Object(s.a)(g,2),N=j[0],O=j[1],w=Object(n.useState)({lat:34.80746,lng:-40.4796}),k=Object(s.a)(w,2),S=k[0],x=k[1],T=Object(n.useState)(3),I=Object(s.a)(T,2),W=I[0],D=I[1],R=Object(n.useState)([]),A=Object(s.a)(R,2),M=A[0],z=A[1],L=Object(n.useState)("cases"),B=Object(s.a)(L,2),J=B[0],V=B[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){o(e.map((function(e){return{name:e.country,value:e.countryInfo.iso3}}))),z(e),O(e.sort((function(e,t){return e.cases>t.cases?-1:1})))})),fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return _(e)}))}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",{className:"app__title"}," COVID19 TRACKER",c.a.createElement("div",{className:"blink__icon"})),c.a.createElement(l.a,{className:"app__dropdown"},c.a.createElement(i.a,{value:m,variant:"outlined",onChange:function(e){var t=e.target.value;v(t);var a="Worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t);fetch(a).then((function(e){return e.json()})).then((function(e){_(e),x("Worldwide"===t?{lat:34.80746,lng:-40.4796}:[e.countryInfo.lat,e.countryInfo.long]),D(4)}))}},c.a.createElement(u.a,{value:"Worldwide"}," Worldwide "),a.map((function(e){return c.a.createElement(u.a,{value:e.value}," ",e.name," ")}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(h,{setCasesType:function(){return V("cases")},active:"cases"===J,title:"CoronaVirus Cases",cases:null===y||void 0===y?void 0:y.todayCases,total:null===y||void 0===y?void 0:y.cases}),c.a.createElement(h,{setCasesType:function(){return V("recovered")},active:"recovered"===J,title:"Recovered",cases:null===y||void 0===y?void 0:y.todayRecovered,total:null===y||void 0===y?void 0:y.recovered}),c.a.createElement(h,{setCasesType:function(){return V("deaths")},active:"deaths"===J,title:"Deaths",cases:null===y||void 0===y?void 0:y.todayDeaths,total:null===y||void 0===y?void 0:y.deaths})),c.a.createElement(C,{casesType:J,countries:M,center:S,zoom:W})),c.a.createElement("div",{className:"app__right"},c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(E,{countries:N}),c.a.createElement("h3",{className:"New__cases"},"Worldwide New ",J),c.a.createElement(b,{casesType:J})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(198)},92:function(e,t,a){},93:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.61313535.chunk.js.map