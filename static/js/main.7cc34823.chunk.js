(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={name:"Phonebook_name__2t9eT",contactList:"Phonebook_contactList__1shda",number:"Phonebook_number__-O59o",button:"Phonebook_button__3Kom2",loader:"Phonebook_loader__2iimM"}},16:function(e,t,n){e.exports={filter:"FilterInput_filter__dbefC",input:"FilterInput_input__2ygU6"}},23:function(e,t,n){e.exports={Container:"Container_Container__v9-YR"}},29:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),i=(n(29),n(11)),s=n(9),u=n.n(s),l=n(21),b=n(6),d=Object(l.a)({reducerPath:"contactApi",baseQuery:Object(b.d)({baseUrl:"https://616ae6b616e7120017fa1120.mockapi.io/api/v1/"}),tagTypes:["Contact"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]})}}}),m=d.useFetchContactsQuery,j=d.useDeleteContactMutation,f=d.useCreateContactMutation,h=n(22),O=n.n(h),p=n(2),_=function(e){e.onSubmit,e.items;var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],b=s[1],d=m().data,j=f(),h=Object(i.a)(j,1)[0],_=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}},x=function(){r(""),b("")};return Object(p.jsxs)("form",{className:u.a.form,onSubmit:function(e){e.preventDefault();var t=d.find((function(e){return e.name===c}));if(t)return O.a.Notify.failure("".concat(t.name," is already in contacts")),void x();h({name:c,number:l}),x()},children:[Object(p.jsxs)("div",{className:u.a.labels,children:[Object(p.jsxs)("label",{className:u.a.name,children:["Name",Object(p.jsx)("input",{className:u.a.input,type:"text",name:"name",value:c,onChange:_})]}),Object(p.jsxs)("label",{className:u.a.name,children:["Number",Object(p.jsx)("input",{className:u.a.input,type:"tel",name:"number",value:l,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(p.jsx)("button",{className:u.a.button,type:"submit",children:"Add contact"},"submitBtn")]})},x=n(23),v=n.n(x);function C(e){var t=e.children;return Object(p.jsx)("div",{className:v.a.Container,children:t})}var y=n(4),g=function(e){return e.filter},N=n(10),F=n.n(N),k=n(15),w=n.n(k);function P(e){var t=e.name,n=e.number,a=e.id,c=j(),r=Object(i.a)(c,2),o=r[0],s=r[1].isLoading;return Object(p.jsxs)(p.Fragment,{children:[t,": ",Object(p.jsxs)("span",{className:F.a.number,children:[" ",n," "]}),Object(p.jsxs)("button",{className:F.a.button,onClick:function(){return o(a)},disabled:s,children:[s&&Object(p.jsx)(w.a,{type:"Puff",color:"#00BFFF",height:12,width:12}),"Delete"]})]})}n(54);var T=function(){var e=m(),t=e.data,n=e.isFetching,a=Object(y.e)((function(e){return g(e)})),c=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(p.jsxs)("ul",{className:F.a.contactList,children:[n&&Object(p.jsx)("div",{className:F.a.loader,children:Object(p.jsx)(w.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:3e3})}),t&&c.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){var t=e.id,n=e.name,a=e.number;return Object(p.jsx)("li",{className:F.a.name,children:Object(p.jsx)(P,{id:t,name:n,number:a})},t)}))]})},S=n(16),L=n.n(S),q=n(1),E=Object(q.d)({name:"contacts/filter",initialState:"",reducers:{filter:function(e,t){return t.payload}}}),A=E.actions.filter,B=E.reducer,D=function(){var e=Object(y.d)(),t=Object(y.e)((function(e){return g(e)}));return Object(p.jsx)("div",{className:L.a.filter,children:Object(p.jsxs)("label",{className:L.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:L.a.input,type:"text",name:"filter",value:t,onChange:function(t){e(A(t.currentTarget.value))}})]})})};n(55);function M(){return Object(p.jsxs)(C,{children:[Object(p.jsx)("h1",{children:" Phonebook "}),Object(p.jsx)(_,{}),Object(p.jsx)("h2",{children:" Contacts "}),Object(p.jsx)(D,{}),Object(p.jsx)(T,{})]})}var I,R=n(24),G=n(20),J=Object(q.a)({reducer:(I={},Object(G.a)(I,d.reducerPath,d.reducer),Object(G.a)(I,"filter",B),I),middleware:function(e){return[].concat(Object(R.a)(e()),[d.middleware])}});Object(b.e)(J.dispatch);n(56);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y.a,{store:J,children:Object(p.jsx)(M,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"Form_form__wAKAd",labels:"Form_labels__3EPG2",name:"Form_name__o_RPW",input:"Form_input__1pkSg",button:"Form_button__6RGw1"}}},[[57,1,2]]]);
//# sourceMappingURL=main.7cc34823.chunk.js.map