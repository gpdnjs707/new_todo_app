(this.webpackJsonpnew_todo_app=this.webpackJsonpnew_todo_app||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(17),n(9)),i=n(8),u=n(1),l=n(2),p=n(4),d=n(3),m=n(5),h=(n(11),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.groups,n=e.form,a=e.children,r=t[e.selected].title;return o.a.createElement("main",{className:"todoContainer"},o.a.createElement("p",{className:"groupName"},r),o.a.createElement("section",{className:"todoFormContainer"},n),o.a.createElement("section",{className:"todoListContainer"},a))}}]),t}(a.Component)),f=function(e){var t=e.children;return o.a.createElement("main",{className:"todoContainer"},o.a.createElement("span",{className:"doneList__title"},"\uc644\ub8cc\ub41c \ud56d\ubaa9"),o.a.createElement("section",{className:"todoListContainer isDone"},t))},v=(n(18),n(19),n(20),n(6)),g=n.n(v),b=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.groupId,n=e.onSelect,a=e.title,r=e.active;return o.a.createElement("div",{className:g()("groupItemContainer",{active:r}),onClick:function(){return n(t)}},o.a.createElement("div",{className:"groupTitle"},a))}}]),t}(a.Component),I=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedId,n=e.onSelect,a=e.groups.map((function(e){var a=e.groupId,r=e.title;return o.a.createElement(b,{groupId:a,title:r,onSelect:n,key:a,active:a===t})}));return o.a.createElement("div",null,a)}}]),t}(a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.groups,n=e.onClick,a=e.selected,r=e.selectedId;return o.a.createElement("div",{className:"navContainer"},o.a.createElement("div",{className:"groupList"},o.a.createElement(I,{groups:t,onSelect:a,selectedId:r})),o.a.createElement("div",{className:"doneGroup"}),o.a.createElement("button",{className:"groupAddBtn",onClick:function(){return n()}},"+"))}}]),t}(a.Component),j=(n(21),function(e){var t=e.value,n=e.onChange,a=e.onKeyPress,r=e.onInsert;return o.a.createElement("div",{className:"formContainer"},o.a.createElement("input",{className:"form-control",value:t,onChange:n,onKeyPress:a,placeholder:"\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694."}),o.a.createElement("button",{className:"btn btn-primary",onClick:r},"+"))}),C=(n(22),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.text,a=e.isDone,r=e.onToggle,c=e.onRemove,s=e.onChange;return o.a.createElement("div",{className:"todoItemContainer"},o.a.createElement("div",{className:"input-group-text"},o.a.createElement("input",{type:"checkbox",checked:a,onClick:function(){return r(t)},readOnly:!0})),o.a.createElement("div",{className:g()("todoItemText",{isDone:a})},o.a.createElement("input",{value:n,onChange:function(e){return s(t,e)}})),o.a.createElement("div",{className:"removeBtn",onClick:function(){return c(t)}},"X"))}}]),t}(a.Component)),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,a=e.onRemove,r=e.onChange,c=e.groups[e.selected].title,s=t.filter((function(e){return e.groupTitle===c})).filter((function(e){return!1===e.isDone})).map((function(e){var t=e.todoId,c=e.text,s=e.isDone;return o.a.createElement(C,{id:t,text:c,isDone:s,onToggle:n,onRemove:a,onChange:r,key:t})}));return o.a.createElement("div",null,s)}}]),t}(a.Component),y=(n(23),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,a=e.onRemove,r=e.onChange,c=e.groups[e.selected].title,s=t.filter((function(e){return e.groupTitle===c})).filter((function(e){return!0===e.isDone})).map((function(e){var t=e.todoId,c=e.text,s=e.isDone;return o.a.createElement(C,{id:t,text:c,isDone:s,onToggle:n,onRemove:a,onChange:r,key:t})}));return o.a.createElement("div",null,s)}}]),t}(a.Component)),k=function(e){var t=e.children,n=document.getElementById("modal");return c.a.createPortal(t,n)},N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.id,e.text),n=e.onChange,a=e.onCreate,r=e.display,c=e.dismiss;return o.a.createElement("div",{className:g()("addGroupPopupContainer",{display:r})},o.a.createElement("div",{className:"closeBtn",onClick:function(){return c()}},"x"),o.a.createElement("p",null,"\uadf8\ub8f9 \ucd94\uac00"),o.a.createElement("input",{value:t,onChange:function(e){return n(e)}}),o.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return a(e)}},"Save"))}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).todoId=1,n.groupId=1,n.state={input:"",popupInput:"",selectedId:0,todos:[{todoId:0,text:"Make todo App",isDone:!1,groupTitle:"Inbox"}],groups:[{groupId:0,title:"Inbox"}],popupDisplay:!1},n.handleInputChange=function(e){n.setState({input:e.target.value})},n.handleInputUpdate=function(e,t){var a=n.state.todos,o=a.findIndex((function(t){return t.todoId===e})),r=a[o],c=t.target.value,u=Object(i.a)(a);u[o]=Object(s.a)({},r,{text:c}),n.setState({todos:u})},n.handleInputInsert=function(){var e=n.state,t=e.input,a=e.todos,o=e.groups[e.selectedId].title;n.setState({input:"",todos:a.concat({todoId:n.todoId++,text:t,isDone:!1,groupTitle:o})})},n.handleKeyPress=function(e){"Enter"===e.key&&n.handleInputInsert()},n.handleToggle=function(e){var t=n.state.todos,a=t.findIndex((function(t){return t.todoId===e})),o=t[a],r=Object(i.a)(t);r[a]=Object(s.a)({},o,{isDone:!o.isDone}),n.setState({todos:r})},n.handleRemove=function(e){var t=n.state.todos;n.setState({todos:t.filter((function(t){return t.todoId!==e}))})},n.handlePopup=function(){var e=n.state.popupDisplay;n.setState({popupDisplay:!e})},n.handlePopupClose=function(){var e=n.state.popupDisplay;n.setState({popupDisplay:!e})},n.handlePopupInput=function(e){n.setState({popupInput:e.target.value})},n.handlePopupInsert=function(){var e=n.state,t=e.popupInput,a=e.groups;""!==t&&(n.setState({popupInput:"",groups:a.concat({groupId:n.groupId++,title:t})}),n.handlePopupClose())},n.handleSelectedGroup=function(e){var t=n.state.groups;n.setState({selectedId:t[e].groupId})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.popupInput,a=e.todos,r=e.groups,c=e.popupDisplay,s=e.selectedId,i=this.handleInputChange,u=this.handleInputInsert,l=this.handleKeyPress,p=this.handleToggle,d=this.handleRemove,m=this.handleInputUpdate,v=this.handlePopup,g=this.handlePopupInsert,b=this.handlePopupInput,I=this.handlePopupClose,C=this.handleSelectedGroup;return o.a.createElement("div",{className:"wrap"},o.a.createElement(k,null,o.a.createElement(N,{text:n,display:c,onCreate:g,onChange:b,dismiss:I})),o.a.createElement(O,{selected:C,groups:r,onClick:v,selectedId:s}),o.a.createElement("div",{className:"todoWrap"},o.a.createElement(h,{form:o.a.createElement(j,{value:t,onKeyPress:l,onChange:i,onInsert:u}),groups:r,selected:s},o.a.createElement(E,{todos:a,onToggle:p,onRemove:d,onChange:m,groups:r,selected:s})),o.a.createElement(f,null,o.a.createElement(y,{todos:a,onToggle:p,onRemove:d,onChange:m,groups:r,selected:s}))))}}]),t}(a.Component);c.a.render(o.a.createElement(x,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.8e75e1d0.chunk.js.map