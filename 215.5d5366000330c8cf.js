"use strict";(self.webpackChunkcarmi_art=self.webpackChunkcarmi_art||[]).push([[215],{8215:(k,m,u)=>{u.r(m),u.d(m,{LoginModule:()=>P});var c=u(6814),p=u(5692),i=u(6223),e=u(5879),r=u(5324),g=u(7903),f=u(6990),d=u(2371);function h(n,l){if(1&n&&(e.TgZ(0,"div",9),e._UZ(1,"br"),e.TgZ(2,"nb-alert",12),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.formHeaders.value.messageResponse)}}let _=(()=>{class n{constructor(t,o,s,a){this.service=t,this.formBuilder=o,this.router=s,this.options=a,this.showPassword=!0,this.formHeaders=i.cw,this.loading=!1,this.changeValues=new e.vpe}ngOnInit(){this.fielReactive()}fielReactive(){this.formHeaders=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]],messageResponse:[""],success:[!0]})}getInputType(){return this.showPassword?"password":"text"}toggleShowPassword(){this.showPassword=!this.showPassword}loginSignIn(){this.formHeaders.controls.messageResponse.setValue(""),this.formHeaders.controls.success.setValue(!0);const t=this.formHeaders.value,o=f.N.auth+"/login",s={email:t.email,provider:"carmi",password:t.password};this.loading=!0,this.service.addNameDataPublic$(o,s).subscribe(a=>{if(a&&a.success){const U=JSON.stringify(a&&a?.token);localStorage.setItem("token",U),this.router.navigate(["/pages/settings/products"])}else localStorage.removeItem("token")},()=>this.loading=!1,()=>this.loading=!1)}init(){this.router.navigate(["/login"])}typesChange(){this.changeValues.emit("REGISTER")}recoveryChange(){this.changeValues.emit("RECOVERY")}ngOnDestroy(){}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.m),e.Y36(i.qu),e.Y36(p.F0),e.Y36(g.u))};static#s=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-sign-in"]],outputs:{changeValues:"changeValues"},decls:22,vars:7,consts:[[1,"text-center",2,"padding","0px"],["src","https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png","alt","","height","150px",2,"border-radius","3rem"],[3,"formGroup"],[1,"label",2,"color","white","font-weight","bold"],["type","text","status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","email","autocomplete","new-email","placeholder","Correo"],["status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","password","autocomplete","new-password","placeholder","Contrase\xf1a",3,"type"],["nbSuffix","","nbButton","","ghost","",3,"click"],["pack","eva",3,"icon"],["class","text-center",4,"ngIf"],[1,"text-center"],["nbButton","","size","small","status","success","shape","semi-round",3,"disabled","nbSpinner","click"],["icon","arrow-forward-outline"],["status","danger",2,"font-size","10px"]],template:function(o,s){1&o&&(e.TgZ(0,"div")(1,"div",0),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"div")(4,"form",2)(5,"div")(6,"label",3),e._uU(7,"Correo"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e.TgZ(9,"div")(10,"label",3),e._uU(11,"Contrase\xf1a"),e.qZA(),e.TgZ(12,"nb-form-field"),e._UZ(13,"input",5),e.TgZ(14,"button",6),e.NdJ("click",function(){return s.toggleShowPassword()}),e._UZ(15,"nb-icon",7),e.qZA()()(),e.YNc(16,h,4,1,"div",8),e.qZA()(),e.TgZ(17,"div",9),e._UZ(18,"br"),e.TgZ(19,"button",10),e.NdJ("click",function(){return s.loginSignIn()}),e._uU(20,"Iniciar sesi\xf3n "),e._UZ(21,"nb-icon",11),e.qZA()()()),2&o&&(e.xp6(4),e.Q6J("formGroup",s.formHeaders),e.xp6(9),e.Q6J("type",s.getInputType()),e.xp6(2),e.Q6J("icon",s.showPassword?"eye-outline":"eye-off-2-outline"),e.uIk("aria-label",s.showPassword?"hide password":"show password"),e.xp6(1),e.Q6J("ngIf",!s.formHeaders.value.success),e.xp6(3),e.Q6J("disabled",s.formHeaders.invalid)("nbSpinner",s.loading))},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,r.DPz,r.h8i,r.fMN,r.jBG,r.yyc,r.$9b,r.Q7R]})}return n})();function w(n,l){if(1&n&&(e.TgZ(0,"div",10),e._UZ(1,"br"),e.TgZ(2,"nb-alert",13),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.formHeaders.value.messageResponse)}}let b=(()=>{class n{constructor(t,o){this.service=t,this.formBuilder=o,this.showPassword=!0,this.formHeaders=i.cw,this.loading=!1,this.changeValues=new e.vpe}ngOnInit(){this.fielReactive()}fielReactive(){this.formHeaders=this.formBuilder.group({username:["",[i.kI.required]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]],messageResponse:[""],success:[!0]})}getInputType(){return this.showPassword?"password":"text"}toggleShowPassword(){this.showPassword=!this.showPassword}registerLogin(){this.formHeaders.controls.messageResponse.setValue(""),this.formHeaders.controls.success.setValue(!0);const t=this.formHeaders.value,s={email:t.email,password:t.password,name:t.username};this.loading=!0,this.service.addNameData$("register",s).subscribe(a=>{this.formHeaders.controls.messageResponse.setValue(a.message),this.formHeaders.controls.success.setValue(a.success),a&&a.success&&this.changeValues.emit("SIGN_IN")},()=>this.loading=!1,()=>this.loading=!1)}backRegister(){this.changeValues.emit("SIGN_IN")}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.m),e.Y36(i.qu))};static#s=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login-register"]],outputs:{changeValues:"changeValues"},decls:29,vars:8,consts:[["nbSpinnerSize","tiny","nbSpinnerStatus","primary",2,"border-radius","3rem",3,"nbSpinner"],[1,"text-center",2,"font-weight","bold"],[3,"formGroup"],[1,"label"],["type","text","status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","username","autocomplete","new-username"],["type","text","status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","email","autocomplete","new-email"],["status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","password","autocomplete","new-password",3,"type"],["nbSuffix","","nbButton","","ghost","",3,"click"],["pack","eva",3,"icon"],["class","text-center",4,"ngIf"],[1,"text-center"],["nbButton","","size","tiny","status","basic","shape","semi-round",3,"click"],["nbButton","","size","tiny","status","primary","shape","semi-round",3,"disabled","nbSpinner","click"],["status","danger",2,"font-size","10px"]],template:function(o,s){1&o&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header",1),e._uU(2," REGISTRE SU USUARIO Y CONTRASE\xd1A "),e.qZA(),e.TgZ(3,"nb-card-body")(4,"form",2)(5,"div")(6,"label",3),e._uU(7,"Usuario:"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"div")(11,"label",3),e._uU(12,"Correo:"),e.qZA(),e._UZ(13,"input",5),e.qZA(),e._UZ(14,"hr"),e.TgZ(15,"div")(16,"label",3),e._uU(17,"Contrase\xf1a:"),e.qZA(),e.TgZ(18,"nb-form-field"),e._UZ(19,"input",6),e.TgZ(20,"button",7),e.NdJ("click",function(){return s.toggleShowPassword()}),e._UZ(21,"nb-icon",8),e.qZA()()(),e.YNc(22,w,4,1,"div",9),e.qZA()(),e.TgZ(23,"nb-card-footer",10)(24,"button",11),e.NdJ("click",function(){return s.backRegister()}),e._uU(25,"Cancelar"),e.qZA(),e._uU(26,"\xa0 "),e.TgZ(27,"button",12),e.NdJ("click",function(){return s.registerLogin()}),e._uU(28,"Guardar"),e.qZA()()()),2&o&&(e.Q6J("nbSpinner",s.loading),e.xp6(4),e.Q6J("formGroup",s.formHeaders),e.xp6(15),e.Q6J("type",s.getInputType()),e.xp6(2),e.Q6J("icon",s.showPassword?"eye-outline":"eye-off-2-outline"),e.uIk("aria-label",s.showPassword?"hide password":"show password"),e.xp6(1),e.Q6J("ngIf",!s.formHeaders.value.success),e.xp6(5),e.Q6J("disabled",s.formHeaders.invalid)("nbSpinner",s.loading))},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,r.DPz,r.Asz,r.yKW,r.XWE,r.ndF,r.h8i,r.fMN,r.jBG,r.yyc,r.$9b,r.Q7R]})}return n})();function v(n,l){if(1&n&&(e.TgZ(0,"div",6),e._UZ(1,"br"),e.TgZ(2,"nb-alert",9),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.formHeaders.value.messageResponse)}}let Z=(()=>{class n{constructor(t,o){this.service=t,this.formBuilder=o,this.formHeaders=i.cw,this.loading=!1,this.changeValues=new e.vpe}ngOnInit(){this.fielReactive()}fielReactive(){this.formHeaders=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],messageResponse:[""],success:[!0]})}requestPAssword(){this.formHeaders.controls.messageResponse.setValue(""),this.formHeaders.controls.success.setValue(!0);const s={email:this.formHeaders.value.email};this.loading=!0,this.service.addNameData$("reset-password",s).subscribe(a=>{this.formHeaders.controls.messageResponse.setValue(a.message),this.formHeaders.controls.success.setValue(a.success),a&&a.success&&this.changeValues.emit("NEW_PASSWORD")},()=>this.loading=!1,()=>this.loading=!1)}backRegister(){this.changeValues.emit("SIGN_IN")}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.m),e.Y36(i.qu))};static#s=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login-recovery"]],outputs:{changeValues:"changeValues"},decls:17,vars:5,consts:[["nbSpinnerSize","tiny","nbSpinnerStatus","primary",2,"border-radius","3rem",3,"nbSpinner"],[1,"text-center",2,"font-weight","bold"],[3,"formGroup"],[1,"label"],["type","text","status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","email","autocomplete","new-email"],["class","text-center",4,"ngIf"],[1,"text-center"],["nbButton","","size","tiny","status","basic","shape","semi-round",3,"click"],["nbButton","","size","tiny","status","primary","shape","semi-round",3,"disabled","nbSpinner","click"],["status","danger",2,"font-size","10px"]],template:function(o,s){1&o&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header",1),e._uU(2," SOLICITAR NUEVA CONTRASE\xd1A "),e.qZA(),e.TgZ(3,"nb-card-body")(4,"form",2)(5,"div")(6,"label",3),e._uU(7,"Correo:"),e.qZA(),e._UZ(8,"input",4),e.qZA(),e._UZ(9,"hr"),e.YNc(10,v,4,1,"div",5),e.qZA()(),e.TgZ(11,"nb-card-footer",6)(12,"button",7),e.NdJ("click",function(){return s.backRegister()}),e._uU(13,"Cancelar"),e.qZA(),e._uU(14,"\xa0 "),e.TgZ(15,"button",8),e.NdJ("click",function(){return s.requestPAssword()}),e._uU(16,"Enviar"),e.qZA()()()),2&o&&(e.Q6J("nbSpinner",s.loading),e.xp6(4),e.Q6J("formGroup",s.formHeaders),e.xp6(6),e.Q6J("ngIf",!s.formHeaders.value.success),e.xp6(5),e.Q6J("disabled",s.formHeaders.invalid)("nbSpinner",s.loading))},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,r.DPz,r.Asz,r.yKW,r.XWE,r.ndF,r.h8i,r.$9b,r.Q7R]})}return n})();function y(n,l){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.validPass)}}function T(n,l){if(1&n&&(e.TgZ(0,"div",11),e._UZ(1,"br"),e.TgZ(2,"nb-alert",15),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.formHeaders.value.messageResponse)}}let I=(()=>{class n{constructor(t,o){this.service=t,this.formBuilder=o,this.showPassword=!0,this.showPassword2=!0,this.formHeaders=i.cw,this.loading=!1,this.changeValues=new e.vpe}ngOnInit(){this.fielReactive()}fielReactive(){this.formHeaders=this.formBuilder.group({password:["",[i.kI.required]],confirm_password:["",[i.kI.required]],codigo:["",[i.kI.required]],messageResponse:[""],success:[!0]})}getInputType(){return this.showPassword?"password":"text"}toggleShowPassword(){this.showPassword=!this.showPassword}getInputType2(){return this.showPassword2?"password":"text"}toggleShowPassword2(){this.showPassword2=!this.showPassword2}get validPass(){let t="";const o=this.formHeaders.value;return t=o.password!==o.confirm_password&&o.password&&o.confirm_password?"Las contrase\xf1as deben ser iguales":"",t}newPasswordLogin(){this.formHeaders.controls.messageResponse.setValue(""),this.formHeaders.controls.success.setValue(!0);const t=this.formHeaders.value,s={password:t.password,confirm_password:t.confirm_password,codigo:t.codigo};this.loading=!0,this.service.addNameData$("new-password",s).subscribe(a=>{this.formHeaders.controls.messageResponse.setValue(a.message),this.formHeaders.controls.success.setValue(a.success),a&&a.success&&this.changeValues.emit("SIGN_IN")},()=>this.loading=!1,()=>this.loading=!1)}backRegister(){this.changeValues.emit("RECOVERY")}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(d.m),e.Y36(i.qu))};static#s=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login-new-password"]],outputs:{changeValues:"changeValues"},decls:33,vars:12,consts:[["nbSpinnerSize","tiny","nbSpinnerStatus","primary",2,"border-radius","3rem",3,"nbSpinner"],[1,"text-center",2,"font-weight","bold"],[3,"formGroup"],[1,"label"],["status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","password","autocomplete","new-password",3,"type"],["nbSuffix","","nbButton","","ghost","",3,"click"],["pack","eva",3,"icon"],["status","info","nbInput","","fullWidth","","shape","semi-round","formControlName","confirm_password","autocomplete","new-password",3,"type"],["style","color: red; font-size: 9px;",4,"ngIf"],["type","text","nbInput","","fullWidth","","shape","semi-round","formControlName","codigo","autocomplete","new-username"],["class","text-center",4,"ngIf"],[1,"text-center"],["nbButton","","size","tiny","status","basic","shape","semi-round",3,"click"],["nbButton","","size","tiny","status","primary","shape","semi-round",3,"disabled","nbSpinner","click"],[2,"color","red","font-size","9px"],["status","danger",2,"font-size","10px"]],template:function(o,s){1&o&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header",1),e._uU(2," NUEVA CONTRASE\xd1A "),e.qZA(),e.TgZ(3,"nb-card-body")(4,"form",2)(5,"div")(6,"label",3),e._uU(7,"Nueva contrase\xf1a:"),e.qZA(),e.TgZ(8,"nb-form-field"),e._UZ(9,"input",4),e.TgZ(10,"button",5),e.NdJ("click",function(){return s.toggleShowPassword()}),e._UZ(11,"nb-icon",6),e.qZA()()(),e._UZ(12,"hr"),e.TgZ(13,"div")(14,"label",3),e._uU(15,"Confirmar contrase\xf1a:"),e.qZA(),e.TgZ(16,"nb-form-field"),e._UZ(17,"input",7),e.TgZ(18,"button",5),e.NdJ("click",function(){return s.toggleShowPassword2()}),e._UZ(19,"nb-icon",6),e.qZA()(),e.YNc(20,y,2,1,"span",8),e.qZA(),e._UZ(21,"hr"),e.TgZ(22,"div")(23,"label",3),e._uU(24,"C\xf3digo de verificaci\xf3n (Revice su correo):"),e.qZA(),e._UZ(25,"input",9),e.qZA(),e.YNc(26,T,4,1,"div",10),e.qZA()(),e.TgZ(27,"nb-card-footer",11)(28,"button",12),e.NdJ("click",function(){return s.backRegister()}),e._uU(29,"Cancelar"),e.qZA(),e._uU(30,"\xa0 "),e.TgZ(31,"button",13),e.NdJ("click",function(){return s.newPasswordLogin()}),e._uU(32,"Guardar"),e.qZA()()()),2&o&&(e.Q6J("nbSpinner",s.loading),e.xp6(4),e.Q6J("formGroup",s.formHeaders),e.xp6(5),e.Q6J("type",s.getInputType()),e.xp6(2),e.Q6J("icon",s.showPassword?"eye-outline":"eye-off-2-outline"),e.uIk("aria-label",s.showPassword?"hide password":"show password"),e.xp6(6),e.Q6J("type",s.getInputType2()),e.xp6(2),e.Q6J("icon",s.showPassword2?"eye-outline":"eye-off-2-outline"),e.uIk("aria-label",s.showPassword2?"hide password":"show password"),e.xp6(1),e.Q6J("ngIf",s.validPass),e.xp6(6),e.Q6J("ngIf",!s.formHeaders.value.success),e.xp6(5),e.Q6J("disabled",s.formHeaders.invalid||""!==s.validPass)("nbSpinner",s.loading))},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,r.DPz,r.Asz,r.yKW,r.XWE,r.ndF,r.h8i,r.fMN,r.jBG,r.yyc,r.$9b,r.Q7R]})}return n})();function N(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-sign-in",3),e.NdJ("changeValues",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.changeValues(s))}),e.qZA()()}}function C(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-login-register",3),e.NdJ("changeValues",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.changeValues(s))}),e.qZA()()}}function S(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-login-recovery",3),e.NdJ("changeValues",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.changeValues(s))}),e.qZA()()}}function A(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-login-new-password",3),e.NdJ("changeValues",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.changeValues(s))}),e.qZA()()}}const R=[{path:"",component:(()=>{class n{constructor(t){this.formBuilder=t,this.formHeaders=i.cw}ngOnInit(){this.fielReactive()}fielReactive(){this.formHeaders=this.formBuilder.group({type:["SIGN_IN",[i.kI.required]]})}changeValues(t){this.formHeaders.controls.type.setValue(t)}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(i.qu))};static#s=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login-home"]],decls:7,vars:4,consts:[[1,"found"],[1,"col-md-2","col-sm-8","col-lg-2"],[4,"ngIf"],[3,"changeValues"]],template:function(o,s){1&o&&(e.TgZ(0,"nb-layout")(1,"nb-layout-column",0)(2,"div",1),e.YNc(3,N,2,0,"div",2),e.YNc(4,C,2,0,"div",2),e.YNc(5,S,2,0,"div",2),e.YNc(6,A,2,0,"div",2),e.qZA()()()),2&o&&(e.xp6(3),e.Q6J("ngIf","SIGN_IN"===s.formHeaders.value.type),e.xp6(1),e.Q6J("ngIf","REGISTER"===s.formHeaders.value.type),e.xp6(1),e.Q6J("ngIf","RECOVERY"===s.formHeaders.value.type),e.xp6(1),e.Q6J("ngIf","NEW_PASSWORD"===s.formHeaders.value.type))},dependencies:[c.O5,r.Aqw,r.dP_,_,b,Z,I],styles:[".found[_ngcontent-%COMP%]{background:linear-gradient(#2aa1c2,#174551,#063b49,#000f13)}nb-layout-column[_ngcontent-%COMP%]{margin:0;padding:0;height:100vh;display:flex;justify-content:center;align-items:center}"]})}return n})()}];let H=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#s=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),p.Bz]})}return n})(),P=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#s=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({providers:[d.m],imports:[c.ez,i.u5,i.UX,H,r.BW0,r.T2N,r.zyh,r.nKr,r.KdK,r.V7y,r.PYG,r.uuI]})}return n})()}}]);