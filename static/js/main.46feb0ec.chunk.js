(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),o=(n(12),n(13),n(2)),i=n(3),h=n(5),l=n(4),b=n(0),j=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"Robot"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},d=function(e){var t=e.robots.map((function(e){return Object(b.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(b.jsx)("div",{children:t})},u=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--black bg-lightest-blue shadow-5",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid rgb(8, 4, 44)",height:"74vh"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h3",{children:"Oops Something went wrong!"}):this.props.children}}]),n}(r.Component),g=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"Robo-Friends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)("h3",{children:"Loading..."})]}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"Robo-Friends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(d,{robots:r})})})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}}]),n}(r.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.46feb0ec.chunk.js.map