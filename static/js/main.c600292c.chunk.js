(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),n(15),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e.robot.id,"?set=set1&size=160x160")}),a.a.createElement("h2",null," ",e.robot.name),a.a.createElement("p",null," ",e.robot.email," "))}),d=function(e){return a.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return a.a.createElement(m,{key:e.id,robot:e})})))},f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t}),console.log(t)})).catch((function(e){return console.log("Something went wrong")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robots,o=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Robot Rolodex"),a.a.createElement(f,{placeholder:"search robots",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(d,{robots:r}))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c600292c.chunk.js.map