(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){e.exports=t(54)},39:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),l=t(2),i=t(3),c=t(5),o=t(4),m=t(6),u=t(16),d=t(1),h=(t(39),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"firstpage-section"},s.a.createElement("center",null,s.a.createElement("h1",{className:"welcome-heading"},"Welcome To Quiz App"),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link-firstpage",to:localStorage.quizAdminToken?"admins/".concat(localStorage.quizAdminToken,"/createquiz"):"/admins"},"Login As Admin")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link-firstpage",to:localStorage.quizuserToken?"users/".concat(localStorage.quizusername,"/quizsets"):"/users"},"Login As User")))))}}]),a}(s.a.Component)),p=t(8),g=(t(27),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState(Object(p.a)({},a.target.name,a.target.value))},e.handleAdminSignup=function(a){a.preventDefault(),fetch("/api/v1/admins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({adminname:e.state.adminname,adminemail:e.state.adminemail,adminpassword:e.state.adminpassword})}).then((function(e){return e.json()})).then((function(a){a.success?(alert("successfully registered"),e.props.history.push("/admins/signin")):alert("enter valid details")}))},e.state={adminname:"",adminemail:"",adminpassword:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("center",null,s.a.createElement("div",{className:"signup-div"},s.a.createElement("div",{className:"rightsignup-section"},s.a.createElement("h1",{className:"rightside-signupheader"},"Hello Friends!"),s.a.createElement("p",{className:"rightside-signupheader"},"Already Have An Account? GO for Signin"),s.a.createElement("button",{className:"signup-button"},s.a.createElement(d.b,{className:"span",to:"admins/signin"},"Signup"))),s.a.createElement("div",{className:"leftsignup-section"},s.a.createElement("h1",{className:"rightside-header"},"Sign Up for Admin"),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-user icon"}),s.a.createElement("input",{className:"input-username",type:"text",name:"adminname",onChange:this.handleChange,value:this.state.adminname,placeholder:"Name"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-envelope icon"}),s.a.createElement("input",{className:"input-email",type:"email",name:"adminemail",value:this.state.adminemail,onChange:this.handleChange,placeholder:"Email"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-lock icon"}),s.a.createElement("input",{className:"input-password",type:"password",name:"adminpassword",value:this.state.adminpassword,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{onClick:this.handleAdminSignup,className:"signup-button"},"SIGN UP"))))}}]),a}(s.a.Component)),E=Object(u.f)(g),v=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState(Object(p.a)({},a.target.name,a.target.value))},e.handleAdminSignin=function(a){a.preventDefault(),fetch("/api/v1/admins/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({adminemail:e.state.adminemail,adminpassword:e.state.adminpassword})}).then((function(e){return e.json()})).then((function(a){a.success&&(console.log(a),alert("successfully loggedin"),localStorage.setItem("quizAdminToken",a.token),localStorage.setItem("quizadminname",a.adminname),e.props.handleIslogged(!0),e.props.history.push("/admins/".concat(localStorage.quizadminname,"/createquiz")))}))},e.state={adminemail:"",adminpassword:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("center",{className:"signin-bg"},s.a.createElement("div",{className:"signup-div"},s.a.createElement("div",{className:"leftsignup-section"},s.a.createElement("h1",{className:"leftsidetext-sighinheader"},"Sign In for Admin"),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-envelope icon"}),s.a.createElement("input",{className:"input-email",type:"email",name:"adminemail",value:this.state.adminemail,onChange:this.handleChange,placeholder:"Email"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-lock icon"}),s.a.createElement("input",{className:"input-password",type:"password",name:"adminpassword",value:this.state.adminpassword,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{onClick:this.handleAdminSignin,className:"signup-button"},"SIGN IN")),s.a.createElement("div",{className:"rightsignup-section"},s.a.createElement("h1",{className:"rightside-signinheader"},"Hello Friends!"),s.a.createElement("p",{className:"rightside-signinheader"},"Dont't Have An Account Signup First"),s.a.createElement("button",{className:"signup-button"},s.a.createElement(d.b,{className:"span",to:"/admins/signup"},"Signup")))))}}]),a}(s.a.Component),b=Object(u.f)(v),f=(t(44),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).handleLogout=function(){localStorage.removeItem("quizAdminToken"),localStorage.removeItem("quizadminname"),t.props.handleIslogged(!1)},t.PublicHeader=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header-div"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(d.b,{className:"quiz-logo",to:"/admins"},s.a.createElement("h1",{className:"quiz-head"},"Quizzz"))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement(d.c,{activeClassName:"navbar__link--active",exact:!0,className:"navbar_link",to:"/admins"},"Home"),s.a.createElement(d.c,{activeClassName:"navbar__link--active",className:"navbar_link",to:"/admins/signup"},"Sign up"),s.a.createElement(d.c,{activeClassName:"navbar__link--active",className:"navbar_link",to:"/admins/signin"},"Sign in")))))))},t.PrivateHeader=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header-div"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(d.b,{className:"quiz-logo",to:"/admins"},s.a.createElement("h1",{className:"quiz-head"},"Quizzz"))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/admins"},"Home")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/admins/".concat(localStorage.quizadminname,"/createquiz")},"Create Quiz")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/admins/".concat(localStorage.quizadminname,"/profile")},"Profile")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{onClick:t.handleLogout,className:"navbar__link",to:"/admins"},"Logout"))))))))},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("nav",{className:"header"},localStorage.quizAdminToken?this.PrivateHeader():this.PublicHeader())))}}]),a}(s.a.Component));t(28),t(45);var N=function(){return s.a.createElement("div",{className:"homepage"},s.a.createElement("div",{className:"homepage-div"},s.a.createElement("div",null,s.a.createElement("h1",{className:"quiz-heading"},"Want to Create quiz click here"),s.a.createElement("div",{id:"container"},s.a.createElement("button",{className:"learn-more"},s.a.createElement("span",{className:"circle","aria-hidden":"true"},s.a.createElement("span",{className:"icon arrow"})),localStorage.quizAdminToken?s.a.createElement(d.b,{className:"button-text",to:"/admins/:adminname/createquiz"},"start"):s.a.createElement(d.b,{className:"button-text",to:"/admins/signin"},"start")))),s.a.createElement("div",null,s.a.createElement("img",{src:"quiz.svg",className:"homepage-img",alt:"quiz"}))))},O="GET_ADMIN",j="GET_USER";function z(){return function(e){fetch("/api/v1/admin",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.quizAdminToken}}).then((function(e){return e.json()})).then((function(a){var t;console.log(a),e((t=a.admin,{type:O,payload:t}))}))}}var y=t(15),q=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).state={admin:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(z())}},{key:"render",value:function(){var e=this.props.admin;return s.a.createElement("div",{className:"profile-section"},s.a.createElement("h1",{className:"profile-head"},"Your Profile"),s.a.createElement("h3",{className:"profile-name"},e&&e.adminname),s.a.createElement("p",{className:"profile-email"},e&&e.adminemail))}}]),a}(s.a.Component);var k=Object(y.b)((function(e){return{admin:e.admin.adminDetails}}))(q),S=(t(47),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){var t=a.target,n=t.name,s=t.value;e.setState(Object(p.a)({},n,s));var r=e.state,l=[r.option1,r.option2,r.option3,r.option4];e.setState({answers:l})},e.handleSubmit=function(a){a.preventDefault(),fetch("/api/v1/quizzes",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.quizAdminToken},body:JSON.stringify({title:e.state.title,answers:e.state.answers,correctanswer:e.state.correctanswer,quizset:e.state.quizset})}).then((function(e){return e.json()})).then((function(a){a.success&&(alert("Quiz is Successfully Created"),e.props.history.push("/admins/:adminname/profile"))}))},e.state={title:"",option1:"",option2:"",option3:"",option4:"",answers:[],correctanswer:"",quizset:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"sign-wrapper"},s.a.createElement("div",{className:"sign-section"},s.a.createElement("form",{className:"sign-form"},"Question: ",s.a.createElement("br",null),s.a.createElement("input",{className:"sign-input first-input",type:"text",name:"title",placeholder:"Enter Your Question",value:this.state.title,onChange:this.handleChange}),s.a.createElement("div",{className:"create-options"},"Options: ",s.a.createElement("br",null),s.a.createElement("input",{className:"sign-input",type:"text",name:"option1",placeholder:"First Option",value:this.state.option1,onChange:this.handleChange}),s.a.createElement("input",{className:"sign-input",type:"text",name:"option2",placeholder:"Secound Option",value:this.state.option2,onChange:this.handleChange}),s.a.createElement("input",{className:"sign-input",type:"text",name:"option3",placeholder:"Third Option",value:this.state.option3,onChange:this.handleChange}),s.a.createElement("input",{className:"sign-input",type:"text",name:"option4",placeholder:"Fourth Option",value:this.state.option4,onChange:this.handleChange}),s.a.createElement("br",null),"Correct answer: ",s.a.createElement("br",null),s.a.createElement("input",{className:"sign-input",type:"text",name:"correctanswer",placeholder:"Correct Answer",value:this.state.correctanswer,onChange:this.handleChange}),s.a.createElement("br",null),"Quizset Name: ",s.a.createElement("br",null),s.a.createElement("input",{className:"sign-input",type:"text",name:"quizset",placeholder:"Question Type",value:this.state.quizset,onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"create-btn",type:"submit",value:"Submit",onClick:this.handleSubmit})))))}}]),a}(s.a.Component)),w=Object(u.f)(S),C=(t(48),s.a.Component,function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleIslogged=function(e){t.setState({islogged:e})},t.state={islogged:!1},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"PublicRoutes",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/admins"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(N,null)),s.a.createElement(u.a,{exact:!0,path:"/admins/signup"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(E,null)),s.a.createElement(u.a,{exact:!0,path:"/admins/signin"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(b,{handleIslogged:this.handleIslogged}))))}},{key:"PrivateRoutes",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/admins"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(N,null)),s.a.createElement(u.a,{exact:!0,path:"/admins/:adminname/createquiz"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(w,null)),s.a.createElement(u.a,{exact:!0,path:"/admins/:adminname/profile"},s.a.createElement(f,{handleIslogged:this.handleIslogged}),s.a.createElement(k,null))))}},{key:"render",value:function(){return s.a.createElement("div",{className:"whole-app"},localStorage.quizAdminToken?this.PrivateRoutes():this.PublicRoutes())}}]),a}(s.a.Component)),I=(t(29),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState(Object(p.a)({},a.target.name,a.target.value))},e.handleUserSignUp=function(a){a.preventDefault(),fetch("/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.username,email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(a){a.user&&e.props.history.push("/users/signin")}))},e.state={username:"",email:"",password:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("center",null,s.a.createElement("div",{className:"signup-div"},s.a.createElement("div",{className:"rightsignup-section"},s.a.createElement("h1",{className:"userside-signupheader"},"Hello Friends!"),s.a.createElement("p",{className:"userside-signupheader"},"Already Have An Account! Go for Signin"),s.a.createElement("button",{className:"signup-button"},s.a.createElement(d.b,{className:"span",to:"/users/signin"},"Signin"))),s.a.createElement("div",{className:"leftsignup-section"},s.a.createElement("h1",{className:"leftside-userheader"}," Sign Up for User "),s.a.createElement("form",null,s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-user icon"}),s.a.createElement("input",{className:"input-username",type:"text",name:"username",onChange:this.handleChange,value:this.state.username,placeholder:"UserName"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-envelope icon"}),s.a.createElement("input",{className:"input-email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-lock icon"}),s.a.createElement("input",{className:"input-password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{onClick:this.handleUserSignUp,className:"signup-button"},"SIGN UP")))))}}]),a}(s.a.Component)),P=Object(u.f)(I),A=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState(Object(p.a)({},a.target.name,a.target.value))},e.handleUserSignin=function(a){a.preventDefault(),fetch("/api/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(a){a.token&&(alert("Login Successfully"),localStorage.setItem("quizuserToken",a.token),localStorage.setItem("quizusername",a.user.username),e.props.handleIslogged(!0),e.props.history.push("/users/".concat(localStorage.quizusername,"/quizsets")))}))},e.state={email:"",password:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("center",{className:"signin-bg"},s.a.createElement("div",{className:"signup-div"},s.a.createElement("div",{className:"leftside-signinuser"},s.a.createElement("h1",{className:"leftside-userheader"},"Hello Friends!"),s.a.createElement("p",{className:"leftside-userheader"},"Don't Have An Account Signin First?"),s.a.createElement("button",{className:"signup-button"},s.a.createElement(d.b,{className:"span",to:"/users/signup"},"Signup"))),s.a.createElement("div",{className:"rightside-signinuser"},s.a.createElement("h1",{className:"userside-signupheader"},"Sign In for User"),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-envelope icon"}),s.a.createElement("input",{className:"input-email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),s.a.createElement("div",{className:"input-icons"},s.a.createElement("i",{className:"fas fa-lock icon"}),s.a.createElement("input",{className:"input-password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{onClick:this.handleUserSignin,className:"signup-button"},"SIGN IN"))))}}]),a}(s.a.Component),_=Object(u.f)(A),T=(t(49),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).handleLogout=function(){localStorage.removeItem("quizuserToken"),localStorage.removeItem("quizusername"),t.props.handleIslogged(!1)},t.PublicHeader=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header-div"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(d.b,{className:"quiz-logo",to:"/users"},s.a.createElement("h1",{className:"quiz-head"},"Quizzz"))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement(d.c,{activeClassName:"navbar__link--active",exact:!0,className:"navbar_link",to:"/users"},"Home"),s.a.createElement(d.c,{activeClassName:"navbar__link--active",className:"navbar_link",to:"/users/signup"},"Sign up"),s.a.createElement(d.c,{activeClassName:"navbar__link--active",className:"navbar_link",to:"/users/signin"},"Sign in")))))))},t.PrivateHeader=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header-div"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(d.b,{className:"quiz-logo",to:"/users"},s.a.createElement("h1",{className:"quiz-head"},"Quizzz"))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/users/".concat(localStorage.quizusername,"/quizsets")},"Play Quiz")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/users/".concat(localStorage.quizusername,"/myprofile")},"My Profile")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{className:"navbar__link",to:"/users/".concat(localStorage.quizusername,"/marks")},"Marks")),s.a.createElement("button",{className:"button-header"},s.a.createElement(d.c,{onClick:t.handleLogout,className:"navbar__link",to:"/users"},"Logout"))))))))},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("nav",{className:"header"},localStorage.quizuserToken?this.PrivateHeader():this.PublicHeader())))}}]),a}(s.a.Component));t(50),t(51);var x=function(){return s.a.createElement("div",{className:"homepage"},s.a.createElement("div",{className:"homepage-div"},s.a.createElement("div",null,s.a.createElement("h1",{className:"quiz-heading"},"Want to start quiz click here"),s.a.createElement("div",{id:"container"},s.a.createElement("button",{className:"learn-more"},s.a.createElement("span",{className:"circle","aria-hidden":"true"},s.a.createElement("span",{className:"icon arrow"})),localStorage.quizuserToken?s.a.createElement(d.b,{className:"button-text",to:"users/:username/quizsets"},"start"):s.a.createElement(d.b,{className:"button-text",to:"users/signin"},"start")))),s.a.createElement("div",null,s.a.createElement("img",{src:"quiz.svg",className:"homepage-img",alt:"quiz"}))))},D=(t(30),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).handleQuizzes=function(){e.setState({quizname:e.props.match.params.quizname}),fetch("/api/v1/quizzes").then((function(e){return e.json()})).then((function(a){a.success&&a.questions.map((function(a){return a.quizset===e.state.quizname?e.setState({filterqns:e.state.filterqns.concat(a)}):""}))}))},e.handleAns=function(a,t,n){e.setState({ans:!0}),a.target.parentElement.parentElement.innerText=a.target.innerText,a.target.parentElement.style.visibility="hidden",e.setState({show:!0});var s=e.state,r=s.marks;s.filterqns.map((function(a){if(a._id==t)return a.correctanswer==n?e.setState({marks:r+1}):""}))},e.handleSubmit=function(){fetch("/api/v1/user/submit",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.quizuserToken},body:JSON.stringify({mark:e.state.marks,quizname:e.state.quizname})}).then((function(e){return e.json()})).then((function(a){a.success&&e.props.history.push("/users/".concat(localStorage.quizusername,"/marks"))}))},e.state={show:!1,quizname:"",filterqns:[],marks:0,ans:!1},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.handleQuizzes()}},{key:"render",value:function(){var e=this,a=this.state,t=a.ans,n=a.quizname,r=a.filterqns,l=a.show;return s.a.createElement("div",{className:"quizlist-section"},s.a.createElement("div",{className:"quizlist-heading-section"},s.a.createElement("p",{className:"quizlist-heading"},r.length?n:"")),r.length?r.map((function(a,n){return s.a.createElement("div",null,s.a.createElement("div",{className:"quiz-wrapper"},s.a.createElement("div",null,s.a.createElement("p",{className:"question-no"},n+1,".")),s.a.createElement("div",{className:"questions"},s.a.createElement("p",{className:"question-title"},a.title),s.a.createElement("div",{className:"question-answers ".concat(t?"correct-answer":"")}))),s.a.createElement("div",null,a.answers.map((function(t){return s.a.createElement("div",{className:"answers"},s.a.createElement("button",{onClick:function(n){e.handleAns(n,a._id,t)},className:"question-answers-item"},t))}))))})):s.a.createElement("p",{className:"quizlist-heading"},"no question found"),s.a.createElement("h3",{onClick:this.handleSubmit,className:"".concat(l?"quizlist-submit-btn":""," ")},l?"SUBMIT":""))}}]),a}(s.a.Component)),H=Object(u.f)(D),F=t(33),U=(t(52),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).state={questions:"",quizsetArr:[],quizsetName:[]},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/quizzes").then((function(e){return e.json()})).then((function(a){e.setState({questions:a.questions}),e.state.questions.map((function(a){return e.setState({quizsetArr:e.state.quizsetArr.concat(a.quizset)})})),e.setState({quizsetName:Object(F.a)(new Set(e.state.quizsetArr))})}))}},{key:"render",value:function(){var e=this.state.quizsetName;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"quizsets-list-wrapper"},s.a.createElement("h3",{className:"quizset-heading"},"Which type of question you start the quiz:"),s.a.createElement("div",{className:"quizsets-list"},e&&e.map((function(e){return s.a.createElement(d.c,{className:"quizset-text",to:"/users/".concat(localStorage.quizusername,"/quizsets/").concat(e)},e)})))))}}]),a}(s.a.Component));function Q(){return function(e){fetch("/api/v1/user",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.quizuserToken}}).then((function(e){return e.json()})).then((function(a){var t;e((t=a.user,{type:j,payload:t}))}))}}var M=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).state={totalmarks:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Q())}},{key:"render",value:function(){var e=this.props.totalmarks;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"showmarks-section"},e&&e.marksId.length?s.a.createElement("div",null,s.a.createElement("p",null,"All Marks"),e.marksId.map((function(e,a){return s.a.createElement("div",{className:"marks"},s.a.createElement("p",null,a+1,"."),s.a.createElement("h3",{className:"quizsetname-marks"},e.quizname,","),s.a.createElement("h3",{className:"quiz-marks"},e.mark,s.a.createElement("span",{className:"marks-span"}," marks")))}))):s.a.createElement("p",null,"No Marks Appeared")))}}]),a}(s.a.Component);var G=Object(y.b)((function(e){return{totalmarks:e.user.userDetails}}))(M),L=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).state={user:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Q())}},{key:"render",value:function(){var e=this.props.user;return s.a.createElement("div",{className:"profile-section"},s.a.createElement("h1",{className:"profile-head"},"Your profile"),s.a.createElement("h3",{className:"profile-name"},e&&e.username),s.a.createElement("p",{className:"profile-name"},e&&e.email))}}]),a}(s.a.Component);var R=Object(y.b)((function(e){return{user:e.user.userDetails}}))(L),J=(t(53),s.a.Component,function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleIslogged=function(e){t.setState({islogged:e})},t.state={islogged:!1},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"PublicRoutes",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/users"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(x,null)),s.a.createElement(u.a,{exact:!0,path:"/users/signup"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(P,null)),s.a.createElement(u.a,{exact:!0,path:"/users/signin"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(_,{handleIslogged:this.handleIslogged}))))}},{key:"PrivateRoutes",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/users"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(x,null)),s.a.createElement(u.a,{exact:!0,path:"/users/:username/quizsets"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(U,null)),s.a.createElement(u.a,{exact:!0,path:"/users/:username/myprofile"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(R,null)),s.a.createElement(u.a,{exact:!0,path:"/users/:username/quizsets/:quizname"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(H,null)),s.a.createElement(u.a,{exact:!0,path:"/users/:username/marks"},s.a.createElement(T,{handleIslogged:this.handleIslogged}),s.a.createElement(G,null))))}},{key:"render",value:function(){return s.a.createElement("div",{className:"whole-app"},localStorage.quizuserToken?this.PrivateRoutes():this.PublicRoutes())}}]),a}(s.a.Component)),B=t(17);function W(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?W(Object(t),!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var K={admin:""};function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function X(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Z={user:""};var $=Object(B.c)({admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Y({},e,{adminDetails:a.payload});default:return Y({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return X({},e,{userDetails:a.payload});default:return X({},e)}}}),ee=Object(B.d)($,Object(B.a)((function(e){return function(a){return function(t){return"function"===typeof t?t(e.dispatch):a(t)}}})));Object(r.render)(s.a.createElement(d.a,null,s.a.createElement(y.a,{store:ee},s.a.createElement((function(){return s.a.createElement(u.a,{exact:!0,path:"/"},s.a.createElement(h,null))}),null),s.a.createElement(J,null),s.a.createElement(C,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b708ccea.chunk.js.map