"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[812],{812:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a="ContactListStyle_list__contact__6AolR",r="ContactListStyle_items__contact__UggIp",s="ContactListStyle_contact__U2Zre",c="ContactListStyle_remove__btn__pjUir",o=function(e){return e.contacts.contacts},i=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},u=n(9434),d=n(5119),m=function(e){return e.filter},_=n(184),h=function(){var e=(0,u.v9)(o),t=(0,u.I0)(),n=(0,u.v9)(m);return(0,_.jsx)("ul",{className:a,children:e.length>0?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,a=e.name,o=e.number;return(0,_.jsxs)("li",{className:r,children:[(0,_.jsxs)("p",{className:s,children:[a,": ",o]}),(0,_.jsx)("button",{className:c,onClick:function(){!function(e){var n=(0,d.b8)(e);t(n)}(n)},children:"Remove"})]},n)})):(0,_.jsx)("span",{style:{fontSize:"30px"},children:"You don`t have contacts"})})},p=(n(2791),n(5705)),b="contact_form_contact__Muvuc",f="contact_input__form__l7bUy",x="contact_submit__btn__zeGEr",v=function(){var e=(0,u.v9)(o),t=(0,u.I0)();return(0,_.jsx)(p.J9,{initialValues:{name:"",number:""},onSubmit:function(n,a){var r=n.name,s=n.number,c=a.resetForm;if(e.map((function(e){return e.name})).includes(r))return alert("".concat(r," is alredy in contacts."));var o=(0,d.Ft)({name:r,number:s});t(o),c()},children:(0,_.jsxs)(p.l0,{className:b,children:[(0,_.jsx)("label",{children:(0,_.jsx)(p.gN,{className:f,id:"firstName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name"})}),(0,_.jsx)("label",{children:(0,_.jsx)(p.gN,{className:f,id:"lastName",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Number"})}),(0,_.jsx)("button",{className:x,type:"submit",children:"S U B M I T"})]})})},j=n(1634),N=function(){var e=(0,u.I0)(),t=(0,u.v9)(m);return(0,_.jsx)("label",{children:(0,_.jsx)("input",{className:f,type:"text",name:"filter",value:t,onChange:function(t){console.log(t.target.value);var n=(0,j.w)(t.target.value);e(n)}})})},g="contacts_phonebook__FsJsd",y=function(){var e=(0,u.v9)(i),t=(0,u.v9)(l);return(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(v,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(N,{}),e&&!t&&(0,_.jsx)("b",{children:"Request in progress..."}),(0,_.jsx)(h,{})]})}}}]);
//# sourceMappingURL=812.379ced3c.chunk.js.map