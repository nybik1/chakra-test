(this["webpackJsonpchakra-test"]=this["webpackJsonpchakra-test"]||[]).push([[0],{253:function(e,s,r){"use strict";r.r(s);var a=r(0),o=r(44),n=r.n(o),t=r(274),c=r(269),i=r(270),d=r(271),l=r(272),b=r(3),h=r(138),j=r(273),u=r(275),x=r(57),p=r(267),m=r(277),w=r(276),g=r(48),O=g.a().shape({oldPass:g.c().required("Write your old password please"),newPass:g.c().required("New password is required"),confirmPass:g.c().oneOf([g.b("newPass"),null],"Passwords must match").required()}),P=r(8),f=function(){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),r=s[0],o=s[1],n=Object(j.a)(),t=Object(h.a)({initialValues:{oldPass:"",newPass:"",confirmPass:""},onSubmit:function(){o(!0),setTimeout((function(){o(!1),t.resetForm(),n({title:"Password is changed",status:"success",duration:3e3,isClosable:!0})}),1e3)},validationSchema:O});return Object(P.jsx)("form",{style:{minWidth:"320px"},onSubmit:t.handleSubmit,children:Object(P.jsxs)(u.a,{spacing:4,children:[Object(P.jsxs)(x.a,{children:[Object(P.jsx)(p.a,{children:"Your old password"}),Object(P.jsx)(m.a,{name:"oldPass",onChange:t.handleChange,value:t.values.oldPass,type:"password",p:"5px",borderColor:t.errors.oldPass||t.errors.newPass?"red.500":"gray.100",_hover:{borderColor:"gray.700"},_focus:{borderColor:"gray.700"}}),t.errors.oldPass&&Object(P.jsx)(x.b,{color:"red.500",children:t.errors.oldPass})]}),Object(P.jsxs)(x.a,{children:[Object(P.jsx)(p.a,{children:"New password"}),Object(P.jsx)(m.a,{name:"newPass",value:t.values.newPass,onChange:t.handleChange,type:"password",p:"5px",borderColor:t.errors.confirmPass||t.errors.newPass?"red.500":"gray.100",_hover:{borderColor:"gray.700"},_focus:{borderColor:"gray.700"}}),t.errors.newPass&&Object(P.jsx)(x.b,{color:"red.500",children:t.errors.newPass})]}),Object(P.jsxs)(x.a,{children:[Object(P.jsx)(p.a,{children:"Confirm new password"}),Object(P.jsx)(m.a,{name:"confirmPass",value:t.values.confirmPass,onChange:t.handleChange,type:"password",p:"5px",borderColor:t.errors.confirmPass?"red.500":"gray.100",_hover:{borderColor:"gray.700"},_focus:{borderColor:"gray.700"}}),t.errors.confirmPass&&Object(P.jsx)(x.b,{color:"red.500",children:"Passwords must match!"})]}),Object(P.jsx)(w.a,{isLoading:r,variant:"submitBtn",type:"submit",disabled:!t.isValid,children:"Save changes"})]})})},y=r(268),C=r(264),v={variants:{submitBtn:{bg:"green.500",color:"white",height:"40px",width:"150px",m:"20px auto 0",display:"flex",alignItems:"center",cursor:"pointer",outline:"none",transition:"box-shadow 0.3s ease-in-out, background 0.3s ease",_hover:{bg:Object(C.f)("green.500",20),boxShadow:"0px 0px 45px 17px rgba(56, 161, 105, 0.3)"},_focus:{boxShadow:"none"}}}},S=Object(y.a)({components:{Button:v}}),_=function(){return Object(P.jsxs)(t.a,{theme:S,children:[Object(P.jsx)(c.a,{}),Object(P.jsx)(i.a,{maxW:"lg",height:"100vh",children:Object(P.jsxs)(d.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",height:"100%",children:[Object(P.jsx)(l.a,{as:"h1",mb:"50px",children:"Create your new password"}),Object(P.jsx)(f,{})]})})]})};n.a.render(Object(P.jsx)(a.StrictMode,{children:Object(P.jsx)(_,{})}),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.57f7be9b.chunk.js.map