function FirstPage(){var e=require("ui/tablet/ui_elements/Buttons"),t=require("ui/tablet/rectangles/SmallRectangleWizard1"),i=require("ui/tablet/rectangles/SmallRectangleWizard2"),a=new i,o=require("ui/tablet/rectangles/NicknameRectangle"),r=new o,n=Titanium.UI.createScrollView({backgroundColor:"#f6f6f6",width:"100%",height:"100%"}),s=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE,backgroundColor:"#f6f6f6",layout:"vertical"}),l=Titanium.UI.createLabel({text:"saveHer",font:{fontSize:60,fontFamily:"CaviarDreams"},color:"#6f6f6f",top:5}),c=Titanium.UI.createLabel({text:"Benvenuto in saveHer. Con questa applicazione è possibile salvaguardare i monumenti che stai visitando inviando una segnalazione ai nostri server.",font:{fontSize:28,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:20,width:"95%"}),d=Titanium.UI.createLabel({text:"Se è la prima volta che utilizzi saveHer, inizia la procedura guidata di registrazione.",font:{fontSize:28,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:45,width:"95%"}),u=Titanium.UI.createLabel({text:"Altrimenti, ripristina il tuo profilo inserendo il nickname con il quale ti sei registrato e premi poi il pulsante Ripristina.",font:{fontSize:28,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:45,width:"95%"}),f=Titanium.UI.createLabel({text:"Hai già utilizzato saveHer su questo dispositivo. Se il tuo nickname compare nella lista sottostante, sceglilo direttamente e ripristina il tuo profilo.",font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#6f6f6f",textAlign:"center",top:45,width:"90%"}),h=Titanium.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);if(e.registered){Ti.App.Properties.setInt("wizard",1),Ti.App.Properties.setString("mail",e.mail),Ti.App.Properties.setString("first_name",e.name),Ti.App.Properties.setString("last_name",e.lastname),Ti.App.Properties.setString("picture",e.photo),""!=a.getFieldValue()?(Ti.App.Properties.setString("nickname",a.getFieldValue()),username=a.getFieldValue()):(Ti.App.Properties.setString("nickname",r.getNickname()),username=r.getNickname()),saveHer.stopExecution=!1,Ti.App.fireEvent("goto_app",{});var t=Titanium.Filesystem.getFile("appdata://","pastUser.txt");if(t.exists()){var i=t.read().toString();-1==i.indexOf(username)&&t.write(username+";",!0)}else t.write(username+";",!0)}else{{Ti.UI.createAlertDialog({message:"Non è stato trovato nessun nickname che corrisponda a ciò che hai immesso. Per favore, controlla le tue credenziali.",ok:"Ok",title:"saveHer"}).show()}saveHer.stopExecution=!1,p.setButtonTitle("Ripristina")}},onerror:function(){Ti.UI.createAlertDialog({message:"Non è stato possibile effettuare la richiesta. Riprova, per favore.",ok:"Ok",title:"saveHer"}).show();saveHer.stopExecution=!1,p.setButtonTitle("Ripristina")}}),p=new e;p.setButtonTitle("Ripristina"),p.setButtonTop(50),p.addEventListener("click",function(){if(!Ti.Network.getOnline()){{Ti.UI.createAlertDialog({message:"Per poter ripristinare le tue informazioni, per favore connetti il tuo dispositivo alla rete.",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void p.setButtonTitle("Ripristina")}if(p.setButtonTitle("Attendi..."),""==a.getFieldValue()&&""==r.getNickname()){{Ti.UI.createAlertDialog({message:"Per poter ripristinare le tue informazioni, per favore inserisci il tuo nickname o sceglilo dal menù a tendina.",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void p.setButtonTitle("Ripristina")}if(""!=a.getFieldValue()&&""!=r.getNickname()){{Ti.UI.createAlertDialog({message:"Per poter ripristinare le tue informazioni, per favore scegli se digitare il nickname o recuperarlo dal menù a tendina.",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void p.setButtonTitle("Ripristina")}p.setButtonTitle("Attendi...");var e={nick:""};e.nick=""!=a.getFieldValue()?a.getFieldValue():r.getNickname(),Ti.API.info(e.nick),h.open("POST","http://www.appsaveheritage.com/restore.php"),h.send(e)});var g=Titanium.UI.createView({width:1,height:20,backgroundColor:"transparent"});return s.add(l),s.add(c),s.add(d),s.add(new t),s.add(u),s.add(a),Ti.API.info(r.getNicknamesList()),0!=r.getNicknamesList()&&(s.add(f),s.add(r)),s.add(p),s.add(g),n.add(s),n}module.exports=FirstPage;