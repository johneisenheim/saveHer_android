function ThirdPage(){var e=require("ui/tablet/rectangles/SmallRectangleWizard3"),t=require("ui/tablet/rectangles/SmallRectangleWizard4"),i=require("ui/tablet/rectangles/SmallRectangleWizard5"),a=require("ui/tablet/ui_elements/Buttons"),o=Titanium.UI.createScrollView({backgroundColor:"#f6f6f6",width:"100%",height:"100%"}),r=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE,backgroundColor:"#f6f6f6",layout:"vertical"}),n=Titanium.UI.createLabel({text:"Step 2",font:{fontSize:60,fontFamily:"CaviarDreams"},color:"#6f6f6f",top:10}),s=Titanium.UI.createLabel({text:"Abbiamo finito: inserisci un nickname per poter essere riconosciuto sui nostri server, e poi registrati.",font:{fontSize:26,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:40,width:"95%"}),l=new e,c=Titanium.UI.createLabel({text:"Di seguito è riportato il tuo indirizzo email. Se non è specificato, per favore inseriscine uno valido: potremo così contattarti quando le segnalazioni che invii saranno risolte.",font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:40,width:"90%"}),u=new t,d=new i,f=(Ti.UI.createAlertDialog({cancel:1,buttonNames:["Si","No"],message:"Il nickname che hai scelto è disponibile. Sei sicuro di volerlo impostare?",title:"saveHer"}),new a);f.setButtonTitle("Registrati"),f.setButtonTop(40),f.addEventListener("click",function(){if(Ti.Network.getOnline()){var e=l.getFieldValue(),t=u.getFieldValue();if(""!=e)if(""!=t){var i=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(0==i.test(t)){{Ti.UI.createAlertDialog({message:"Per poter effettuare la registrazione, per favore inserisci un indirizzo email valido.",ok:"Ho capito",title:"saveHer"}).show()}return}f.setButtonTitle("Attendi...");var i=Titanium.Network.createHTTPClient({onload:function(){f.setButtonTitle("Registrati"),o.touchEnabled=!0,Ti.API.info(i.responseText);var t=i.responseText,a=JSON.parse(t);if(a.registered)registerUser(e,d.getSwitchValue());else{Ti.UI.createAlertDialog({message:"Il nickname che hai inserito è stato già scelto. Inseriscine un altro, per favore.",ok:"Ok",title:"saveHer"}).show()}},onerror:function(){Ti.UI.createAlertDialog({message:"saveHer non è riuscita a contattare il server. Riprova, per piacere.",ok:"Riprovo",title:"saveHer"}).show()}}),a={nick:e};i.open("POST","http://www.appsaveheritage.com/reguser.php"),i.send(a)}else{Ti.UI.createAlertDialog({message:"Sembra non ci sia nessun indirizzo e-mail. Per favore, inseriscilo per completare la registrazione.",ok:"Ho capito",title:"saveHer"}).show()}else{Ti.UI.createAlertDialog({message:"Per poter impostare il tuo nickname devi prima inserirlo!",ok:"Ho capito",title:"saveHer"}).show()}}else{Ti.UI.createAlertDialog({message:"Non sembra esserci rete dati. Per favore connetti il tuo dispositivo alla rete.",ok:"Ok",title:"saveHer"}).show()}}),o.setMailAddress=function(e){u.setFieldValue(e)};var h=Titanium.UI.createView({width:1,height:20,backgroundColor:"transparent"});return r.add(n),r.add(s),r.add(l),r.add(c),r.add(u),r.add(d),r.add(f),r.add(h),o.add(r),o}function registerUser(e,t){if(Ti.Network.getOnline()){var i=Ti.App.Properties.getString("login_type");switch(Ti.App.Properties.setString("nickname",e),i){case"facebook":params={nick:e,mail:Ti.App.Properties.getString("mail"),id:Ti.App.Properties.getString("id"),photo:"http://graph.facebook.com/"+Ti.App.Properties.getString("id")+"/picture?width=500&height=500",social:"facebook",name:Ti.App.Properties.getString("first_name"),lastname:Ti.App.Properties.getString("last_name")},Ti.API.info(params);break;case"linkedin":params={nick:e,mail:"",id:"none",photo:Ti.App.Properties.getString("picture"),social:"linkedin",name:Ti.App.Properties.getString("first_name"),lastname:Ti.App.Properties.getString("last_name")};break;case"google":params={nick:e,mail:Ti.App.Properties.getString("mail"),id:Ti.App.Properties.getString("id"),photo:Ti.App.Properties.getString("picture"),social:"google",name:Ti.App.Properties.getString("first_name"),lastname:Ti.App.Properties.getString("last_name")},Ti.API.info(params)}var a=Titanium.Network.createHTTPClient({onload:function(){var t=a.responseText;Ti.API.info("json from regme "+t);var i=JSON.parse(t);if(i.registered){var o=Titanium.Filesystem.getFile("appdata://","pastUser.txt");if(o.exists()){var r=o.read().toString();-1==r.indexOf(e)&&o.write(e+";",!0)}else o.write(e+";",!0);Titanium.App.Properties.setInt("wizard",1),Ti.App.fireEvent("goto_app",{})}else{Ti.UI.createAlertDialog({message:"Il nickname che hai scelto non è disponibile. Prova ad inserirne un altro.",ok:"Riprovo",title:"saveHer"}).show()}},onerror:function(){Ti.UI.createAlertDialog({message:"saveHer non è riuscita a contattare il server. Riprova, per piacere.",ok:"Riprovo",title:"saveHer"}).show()}});params.newsletter=t?1:0,a.open("POST","http://www.appsaveheritage.com/reg.php"),a.send(params)}else{Ti.UI.createAlertDialog({message:"Per poter effettuare la registrazione, per favore connetti il tuo dispositivo alla rete.",ok:"Ok",title:"saveHer"}).show()}}module.exports=ThirdPage;