(this.webpackJsonpdict=this.webpackJsonpdict||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){e.exports=n(74)},45:function(e,t,n){},46:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),c=n(3),s=n(4),l=n(6),u=n(5),m=(n(45),function(){return r.a.createElement("h1",{className:"header-container"},"The All In One Dictionary that you Need!")}),d=(n(46),n(12)),f=n(22),p=n.n(f),h=n(36),v=n(37),y=n.n(v).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb"}),b=n(8),E=Object(b.a)(),O=n(14),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={word:null},e.onFormSubmit=function(t){t.preventDefault(),e.state.word?(e.setState({word:""}),e.mainForm.reset(),e.props.getDefinitions(e.state.word)):alert("enter any text!")},e.options=["Definitions","Pronunciations","Examples"],e.defaultOption=e.options[0],e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sbmain"},r.a.createElement("form",{ref:function(t){return e.mainForm=t},className:"sb-container",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"sb-form"},r.a.createElement("input",{id:"maininput",type:"text",autoComplete:"off",className:"sb-input",onChange:function(t){e.setState({word:t.target.value})},required:!0}),r.a.createElement("label",{className:"sb-label-name"},r.a.createElement("span",{className:"sb-content-name"},"Enter any word here!"))),r.a.createElement("div",{className:"linkwrapper"},r.a.createElement(O.a,{to:"/Dictionary/".concat(this.state.word),className:"sb-button button",onClick:this.onFormSubmit},"Search!"))),r.a.createElement("br",null))}}]),n}(a.Component),N=Object(d.b)(null,{getDefinitions:function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("".concat(e,"?fields=definitions,pronunciations,examples,etymologies&strictMatch=false"),{headers:{app_id:"7bb08d93",app_key:"de97395e0b8634ff6cbb3d9767c69109"}});case 3:a=t.sent,n({type:"DEFINITIONS",payload:a.data.results[0].lexicalEntries}),E.push("/Dictionary/".concat(e)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:"ERROR",payload:null}),E.push("/eRrOrXxX");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(j),w=n(2),R=(n(70),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("aside",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/Dictionary/".concat(this.props.word,"/definitions")},"Definitions")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/Dictionary/".concat(this.props.word,"/examples")},"Examples")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/Dictionary/".concat(this.props.word,"/etymologies")},"Etymologies")),r.a.createElement("li",null,"Pronunciations")),r.a.createElement("div",{className:"instruct"},"Click any one of 'em!!"))}}]),n}(a.Component)),g=(n(71),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"totalcontainer"},r.a.createElement("div",{className:"totaldatacontainer"},r.a.createElement(R,{word:this.props.match?this.props.match.params.word:"",clcont:this.clcontainer})))}}]),n}(a.Component)),k=(n(20),function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return e.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,".")," ")}))}))}}),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"subsenses"!==n&&("definitions"===n?e.result.push(t[n]):e.nestRemover(t[n]))})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e}return Object(s.a)(n,[{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.result.length>0?r.a.createElement("div",{className:"def-container"},r.a.createElement(k,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),D=Object(d.b)((function(e){return{definitions:e.definitions}}))(I),S=n(39),x=function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,"."))}))}},A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"text"===n?"Noun"!==t[n]&&"Verb"!==t[n]&&"Interjection"!==t[n]&&"Conjunction"!==t[n]&&e.result.push(t[n]):e.nestRemover(t[n])})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e.modifiedResult=function(t){e.result=Object(S.a)(new Set(t))},e}return Object(s.a)(n,[{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.modifiedResult(this.result),this.result.length>0?r.a.createElement("div",{className:"def-container"},r.a.createElement(x,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),C=Object(d.b)((function(e){return{definitions:e.definitions}}))(A),_=function(e){var t=e.data,n=e.keyid;if(t){var a=0;return t.map((function(e){return r.a.createElement("div",{className:"td-wrapper",key:n[a++]},r.a.createElement("div",{className:"td-container"},e,".")," ")}))}},F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).result=[],e.resultid=[],e.nestRemover=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemover):"object"===typeof t&&Object.keys(t).forEach((function(n){"etymologies"===n?e.result.push(t[n]):e.nestRemover(t[n])})))},e.nestRemoverId=function(t){t&&(Array.isArray(t)?t.forEach(e.nestRemoverId):"object"===typeof t&&Object.keys(t).forEach((function(n){"id"===n?e.resultid.push(t[n]):e.nestRemoverId(t[n])})))},e}return Object(s.a)(n,[{key:"render",value:function(){return this.result=[],this.resultid=[],this.nestRemover(this.props.definitions),this.nestRemoverId(this.props.definitions),this.result.length>0?r.a.createElement("div",{className:"def-container"},r.a.createElement(_,{data:this.result,keyid:this.resultid})):r.a.createElement("div",{className:"ntg-container"},"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15")}}]),n}(a.Component),X=Object(d.b)((function(e){return{definitions:e.definitions}}))(F),T=function(){return r.a.createElement("div",{className:"er-container"},r.a.createElement("div",{className:"er-wrapper"},r.a.createElement("div",{className:"err-container"},r.a.createElement("span",{role:"img","aria-label":"faint"},"\ud83d\ude35"),"Sorry! No match Found!",r.a.createElement("span",{role:"img","aria-label":"faint"},"\ud83d\ude35"))))},P=(n(72),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(w.b,{history:E},r.a.createElement("div",{className:"app-container"},r.a.createElement(m,null),r.a.createElement(N,null)),r.a.createElement(w.a,{path:"/eRrOrXxX",exact:!0,component:T}),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/Dictionary/:word",component:g})),r.a.createElement(w.a,{path:"/Dictionary/:word/definitions",component:D}),r.a.createElement(w.a,{path:"/Dictionary/:word/examples",component:C}),r.a.createElement(w.a,{path:"/Dictionary/:word/etymologies",component:X})))}}]),n}(a.Component)),q=(n(73),n(13)),J=Object(q.c)({definitions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFINITIONS":case"ERROR":return t.payload;default:return e}}}),L=n(38),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,U=Object(q.e)(J,M(Object(q.a)(L.a)));o.a.render(r.a.createElement(d.a,{store:U},r.a.createElement(P,null)),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.df853062.chunk.js.map