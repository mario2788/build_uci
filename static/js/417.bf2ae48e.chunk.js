"use strict";(self.webpackChunkcoc_ui=self.webpackChunkcoc_ui||[]).push([[417],{8417:function(e,t,n){n.r(t);var r=n(1413),a=n(885),i=n(4165),o=n(5861),s=n(2791),c=n(4554),l=n(1889),u=n(3457),d=n(1523),m=n(7191),f=n(4038),x=n(4919),p=n(8515),g=n(8277),h=n(6030),j=n(8025),v=n(979),b=n(5910),Z=n(3191),y=n(184),S=m.b0.urlServer,w=m.b0.requestOptionsGet,P=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r,a,o,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"Patient"),(0,p.Z)(w));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,a=r.entry,o=r.total,!(r.link.length>1)){e.next=17;break}return e.next=12,fetch("".concat(S,"Patient?_count=").concat(o),(0,p.Z)(w));case 12:return s=e.sent,e.next=15,s.json();case 15:c=e.sent,a=c.entry;case 17:console.log(a.filter((function(e){var t,n;return(null===(t=e.resource)||void 0===t?void 0:t.identifier)&&(null===(n=e.resource)||void 0===n?void 0:n.address)})).map((function(e){return e.resource}))),t(a.filter((function(e){var t,n;return(null===(t=e.resource)||void 0===t?void 0:t.identifier)&&(null===(n=e.resource)||void 0===n?void 0:n.address)})).map((function(e){var t=e.resource;return{id:t.id,nombre:t.name[0].text,cnt:t.identifier[0].value,ala:t.address?t.address[0].district:"na",sala:t.address?t.address[0].state:"na",cama:t.address?t.address[0].text:"na",state:0}})));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r,a,o,s,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"Location"),(0,p.Z)(w));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,a=r.entry,!((o=r.total)>10)){e.next=16;break}return e.next=11,fetch("".concat(S,"Location?_count=").concat(o),(0,p.Z)(w));case 11:return s=e.sent,e.next=14,s.json();case 14:c=e.sent,a=c.entry;case 16:console.log(a.map((function(e){return e.resource}))),l=a.map((function(e){return{ala:e.resource.name,salas:[{sala:e.resource.identifier[1].value,capacidad:e.resource.address.text}]}})),t(l);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(){document.getElementById("root").style.backgroundColor="#d1e1e5";var e=(0,h.I0)();e((0,j.p)("0"));var t=(0,f.A)(),n=(0,x.z)()._lg,m=(0,s.useState)([]),p=(0,a.Z)(m,2),S=p[0],w=p[1],k=(0,s.useState)([{ala:"",salas:[{sala:"",capacidad:0}]}]),C=(0,a.Z)(k,2),_=C[0],N=C[1],D=(0,s.useState)(!1),O=(0,a.Z)(D,2),J=O[0],F=O[1],L=(0,h.v9)((function(e){return e.neuroDesk.value}));null!==L&&e((0,v.kK)((0,r.Z)((0,r.Z)({},L),{},{available:!0}))),(0,s.useEffect)((function(){localStorage.removeItem("Data"),localStorage.removeItem("idPatient"),localStorage.removeItem("cntPatient"),localStorage.removeItem("intervalos"),localStorage.removeItem("units"),localStorage.removeItem("patients");var e=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(N),e.next=3,P(w);case 3:F(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("pacientes: ",S);var E,B,z=["#60AE53","#F6E05E","#F06F11","#D23531"],A=function(e){return(0,y.jsx)(c.Z,{className:t.bg_blue,my:1,pl:2,children:(0,y.jsxs)(l.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,columns:20,children:[(0,y.jsx)(l.ZP,{item:!0,xs:17,children:(0,y.jsx)(Z.D,{color:"white",span:e.span,children:e.text})}),(0,y.jsx)(l.ZP,{item:!0,xs:3,children:e.children})]})})},G=function(e,n,r,a){var i=a-e.length;return(0,y.jsx)(c.Z,{className:[t.text_bold,t.text_color_title,t.bg_white].join(" "),mb:1,children:(0,y.jsxs)(l.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",columns:15,children:[(0,y.jsx)(l.ZP,{xs:11,item:!0,py:1,children:(0,y.jsx)(c.Z,{pl:1,children:(0,y.jsxs)(b.D,{children:["Ala : ",n," - Sala : ",r]})})}),(0,y.jsx)(l.ZP,{xs:4,item:!0,py:1,children:(0,y.jsx)(c.Z,{pl:1,children:(0,y.jsxs)(b.D,{children:["Disponibilidad: ",i,"/",a]})})})]})})},U=function(e){var r=e.obj,a=e.asig;return(0,y.jsx)(c.Z,{style:{paddingBottom:"2px"},children:(0,y.jsxs)(l.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",columns:12,children:[(0,y.jsx)(l.ZP,{xs:9,item:!0,children:(0,y.jsx)(c.Z,{px:1,mr:1,py:.25,my:.2,style:{backgroundColor:z[r.state],fontSize:n?"25px":"15px",fontWeight:"500"},className:t.font_monserrat,children:a?(0,y.jsx)(d.rU,{to:"/coc/panel/uci/monitor",style:{color:"rgb(42, 20, 55)",textDecorationLine:"none"},children:(0,y.jsxs)("span",{className:t.button,onClick:function(){return e=r.id,console.log("home => idPatient: ",e),void localStorage.setItem("idPatient",JSON.stringify({id:e},null,2));var e},children:["Cama ",r.cama," : ",r.nombre]})}):(0,y.jsxs)("span",{children:["Cama ",r.cama," : ",r.nombre]})})}),(0,y.jsx)(l.ZP,{xs:3,item:!0,children:(0,y.jsx)(c.Z,{px:1,py:.25,my:.2,style:{backgroundColor:"rgb(255, 255, 255)",fontSize:n?"25px":"15px",fontWeight:"500"},className:[t.text_color_title,t.text_center,t.font_monserrat].join(" "),children:(0,y.jsx)(d.rU,{to:"/coc/panel/uci/formularioEnfermeria",style:{color:"rgb(42, 20, 55)",textDecorationLine:"none"},children:(0,y.jsx)("span",{className:t.button,onClick:function(){return e=r.cnt,localStorage.setItem("cntPatient",JSON.stringify(e,null,2)),localStorage.setItem("patients",JSON.stringify(S)),void(0,g.e)(JSON.parse(localStorage.getItem("cntPatient")),(new Date).toLocaleString("en-GB").split(", ")[0].split("/").reverse().join("-")).then((function(e){var t=e.data,n=e.idPatient;t.Fecha=(new Date).toLocaleString("en-GB").split(", ")[0].split("/").reverse().join("-"),localStorage.setItem("Data",JSON.stringify(t,null,2)),localStorage.setItem("idPatient",JSON.stringify(n,null,2)),console.log("home => idPatient: ",n)}));var e},children:"Formulario"})})})})]})})},W=function(){var e=(0,u.Z)("button")({width:"90%",fontFamily:"Montserrat",paddingBlock:"0.5rem",paddingInline:"0.8rem",background:"white",borderRadius:"2px",fontWeight:"bold",margin:"0.2rem",color:"#0d47a1",border:"0","&:hover":{background:"#0d47a1",color:"white",cursor:"pointer"}});return J?(0,y.jsx)(d.rU,{to:"/coc/panel/uci/crearPaciente",style:{color:"rgb(42, 20, 55)",textDecorationLine:"none",width:"100%"},children:(0,y.jsx)(e,{onClick:function(){localStorage.setItem("units",JSON.stringify(_)),localStorage.setItem("patients",JSON.stringify(S))},children:"Crear paciente"})}):(0,y.jsx)("p",{children:"''"})},q=S.filter((function(e){return"-"===e.ala}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(A,{text:"Inicio",span:!0,children:(0,y.jsx)(W,{})}),(0,y.jsx)(l.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"flex-start",spacing:1,columns:12,children:(E=_,B=S,E.map((function(e,t){var n=B.filter((function(t){return t.ala===e.ala}));return e.salas.map((function(t,r){var a=n.filter((function(e){return e.sala===t.sala}));return(0,y.jsxs)(l.ZP,{item:!0,xs:6,children:[G(a,e.ala,t.sala,t.capacidad),a.map((function(e,t){return(0,y.jsx)(U,{obj:e,asig:!0},t)}))]},r)}))})))}),(0,y.jsx)(A,{text:"Pacientes sin asignar"}),(0,y.jsx)(l.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"flex-start",spacing:1,columns:12,children:q.map((function(e,t){return(0,y.jsx)(l.ZP,{item:!0,xs:6,children:(0,y.jsx)(U,{obj:e,asig:!1})},t)}))})]})}}}]);
//# sourceMappingURL=417.bf2ae48e.chunk.js.map