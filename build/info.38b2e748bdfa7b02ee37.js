webpackJsonp([3],{352:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(477);c.d(b,"component",function(){return d.a});var e=c(357);c.d(b,"reducer",function(){return e.a}),c.d(b,"reducerKey",function(){return e.b})},356:function(a,b,c){"use strict";function d(a){return{type:i,payload:a}}c.d(b,"a",function(){return i}),b.b=function(){var a=this;return(()=>{var b=h()(f.a.mark(function b(c){var e,g;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/package.json");case 3:return e=a.sent,a.next=6,e.text();case 6:return g=a.sent,c(d(g)),a.abrupt("return",g);case 11:return a.prev=11,a.t0=a["catch"](0),c(d(a.t0.message||"Unknown error")),a.abrupt("return",a.t0);case 15:case"end":return a.stop();}},b,a,[[0,11]])}));return function(){return b.apply(this,arguments)}})()};var e=c(159),f=c.n(e),g=c(157),h=c.n(g),i="INFO_RECEIVED"},357:function(a,b,c){"use strict";c.d(b,"b",function(){return e}),b.a=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:f,b=arguments[1];switch(b.type){case d.a:return b.payload;default:return a;}};var d=c(356),e="info",f=""},477:function(a,b,c){"use strict";var d=c(44),e=c.n(d),f=c(5),g=c.n(f),h=c(93),i=c(6),j=c.n(i),k=c(354),l=c.n(k),m=c(480),n=c.n(m),o=c(356),p={fetchInfo:o.b};class q extends f.PureComponent{componentWillMount(){this.props.fetchInfo()}render(){return e()("div",{className:"Info"},void 0,e()("h3",{className:"Info__date"},void 0,l()().format()),e()("pre",{className:"Info__pre"},void 0,this.props.info))}}q.defaultProps={info:""},b.a=c.i(h.b)((a)=>({info:a.info}),p)(q)},480:function(){}});
//# sourceMappingURL=info.38b2e748bdfa7b02ee37.js.map