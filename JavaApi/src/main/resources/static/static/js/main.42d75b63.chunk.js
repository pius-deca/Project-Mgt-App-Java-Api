(this["webpackJsonpreact-client"]=this["webpackJsonpreact-client"]||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(25),o=a.n(c),s=(a(51),a(52),a(4)),i=a(5),l=a(7),m=a(6),u=a(8),p=a(1);var d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addProject",className:"btn btn-lg btn-outline-info"},"Create a Project"))},h=a(2),v=a(9),f=a.n(v),b=a(15),E=a(12),j=a.n(E),g=function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1",style:{color:"green"}},"  Project Board"))),n.a.createElement(p.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("i",{className:"fa fa-edit pr-1"},"  Update Project Info"))),n.a.createElement("li",{className:"list-group-item",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1",style:{color:"red"}},"  Delete Project")))))))}}]),t}(r.Component),y=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all data related to it")){t.next=4;break}return t.next=3,j.a.delete("/api/project/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(N),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e;return e=function(e){return e.length<1?n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project on this board"):n.a.createElement("div",null,e.map((function(e){return n.a.createElement(y,{key:e.id,project:e})})))}(this.props.project.projects),n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(d,null),n.a.createElement("br",null),n.a.createElement("br",null),e))))}}]),t}(r.Component),k=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(O),C=function(e){e?j.a.defaults.headers.common.Authorization=e:delete j.a.defaults.headers.common.Authorization},S=a(27),x=a.n(S),w=function(){return function(e){localStorage.removeItem("token"),C(!1),e({type:"SET_CURRENT_USER",payload:{}})}},_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashbord"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fa fa-user-circle mr-1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout"))));return e=a&&r?o:c,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-secondary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Project Management Application"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggler":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),P=Object(h.b)((function(e){return{security:e.security}}),{logout:w})(_),T=(a(78),a(22)),R=a(14),D=a(10),I=a(11),G=a.n(I),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(e)),e.onSubmit=e.onSubmit.bind(Object(D.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,startDate:this.state.start_date,endDate:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project Form"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control",{"is-invalid":e.projectIdentifier}),placeholder:"Project Identifier",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.description)),n.a.createElement("h6",{className:"text-left"},"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",{className:"text-left"},"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",className:"btn btn-lg btn-block btn-outline-success mt-4"}),n.a.createElement(p.b,{to:"/dashboard",className:"btn btn-lg btn-outline-danger btn-block mt-4"},"Cancel")))))))}}]),t}(r.Component),U=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:g})(A),B=a(19),L=a(44),q={},M=a(20),J={projects:[],project:{}},W={project_tasks:[],project_task:{}},F={user:{},validToken:!1},K=function(e){return!!e},H=Object(B.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(M.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(M.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(M.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(M.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(M.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(M.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(M.a)({},e,{validToken:K(t.payload),user:t.payload});default:return e}}}),X={},V=[L.a],z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Y=window.navigator.userAgent.includes("Chrome")&&z?Object(B.e)(H,X,Object(B.d)(B.a.apply(void 0,V),z)):Object(B.e)(H,X,Object(B.d)(B.a.apply(void 0,V))),$=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(e)),e.onSubmit=e.onSubmit.bind(Object(D.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project Form"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Project Identifier",name:"projectIdentifier",disabled:!0,value:this.state.projectIdentifier,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.description)),n.a.createElement("h6",{className:"text-left"},"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",{className:"text-left"},"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",className:"btn btn-lg btn-block btn-outline-success mt-4"}),n.a.createElement(p.b,{to:"/dashboard",className:"btn btn-lg btn-outline-danger btn-block mt-4"},"Cancel")))))))}}]),t}(r.Component),Q=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:g})($),Z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority?(t="bg-danger text-light",e="HIGH"):2===a.priority?(t="bg-warning text-light",e="MEDIUM"):(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate"},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-outline-primary mr-3"},"View / Update"),n.a.createElement("button",{onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),className:"btn btn-outline-danger"},"Delete")))}}]),t}(r.Component),ee=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", this action cannot be undone"))){a.next=4;break}return a.next=3,j.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(Z),te=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(ee,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status?t.push(e[c]):"IN_PROGRESS"===e[c].props.project_task.status?a.push(e[c]):r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TODO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(te,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-outline-info mb-3"},n.a.createElement("i",{className:"fa fa-plus-circle"}," Create Project Task")),n.a.createElement("br",null),e)}}]),t}(r.Component),re=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(ae),ne=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(D.a)(a)),a.onSubmit=a.onSubmit.bind(Object(D.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-projectTask"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to project Board"),n.a.createElement("h6",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback text-left"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",name:"acceptanceCriteria",placeholder:"Acceptance Criteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",{className:"text-left"},"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select status"),n.a.createElement("option",{value:"TO_DO"},"TODO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-outline-secondary btn-lg btn-block mt-4"}))))))}}]),t}(r.Component),ce=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(b.a)(f.a.mark((function r(n){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(ne),oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:"",createdAt:"",errors:{}},a.onChange=a.onChange.bind(Object(D.a)(a)),a.onSubmit=a.onSubmit.bind(Object(D.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_sequence;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier,m=t.createdAt;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l,createdAt:m})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,createdAt:this.state.createdAt};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-projectTask"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to project Board"),n.a.createElement("h6",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," + Project Task ID: ",this.state.projectSequence),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",name:"acceptanceCriteria",placeholder:"Acceptance Criteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",{className:"text-left"},"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select status"),n.a.createElement("option",{value:"TO_DO"},"TODO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-outline-secondary btn-lg btn-block mt-4"}))))))}}]),t}(r.Component),se=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(b.a)(f.a.mark((function r(n){var c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(b.a)(f.a.mark((function n(c){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(oe),ie=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Project Management Application"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement(p.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(p.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),t}(r.Component),le=Object(h.b)((function(e){return{security:e.security}}))(ie),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",confirmPassword:"",fullName:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(e)),e.onSubmit=e.onSubmit.bind(Object(D.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword,fullName:this.state.fullName};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create Your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:G()("form-control",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-outline-info btn-lg btn-block mt-4"}))))))}}]),t}(r.Component),ue=Object(h.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(r){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(me),pe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(e)),e.onSubmit=e.onSubmit.bind(Object(D.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.loginUser(t)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:G()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback text-left"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-outline-info btn-lg btn-block mt-4"}))))))}}]),t}(r.Component),de=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{loginUser:function(e){return function(){var t=Object(b.a)(f.a.mark((function t(a){var r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("token",n),C(n),c=x()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(pe),he=a(45),ve=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(he.a)(e,["component","security"]);return n.a.createElement(T.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(T.a,{to:"/login"})}}))})),fe=localStorage.getItem("token");if(fe){C(fe);var be=x()(fe);Y.dispatch({type:"SET_CURRENT_USER",payload:be});var Ee=Date.now()/1e3;be.exp<Ee&&(Y.dispatch(w()),window.location.href="/")}var je=function(){return n.a.createElement(h.a,{store:Y},n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(P,null),n.a.createElement(T.b,{exact:!0,path:"/",component:le}),n.a.createElement(T.b,{exact:!0,path:"/register",component:ue}),n.a.createElement(T.b,{exact:!0,path:"/login",component:de}),n.a.createElement(T.d,null,n.a.createElement(ve,{exact:!0,path:"/dashboard",component:k}),n.a.createElement(ve,{exact:!0,path:"/addProject",component:U}),n.a.createElement(ve,{exact:!0,path:"/updateProject/:id",component:Q}),n.a.createElement(ve,{exact:!0,path:"/projectBoard/:id",component:re}),n.a.createElement(ve,{exact:!0,path:"/addProjectTask/:id",component:ce}),n.a.createElement(ve,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_sequence",component:se})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.42d75b63.chunk.js.map