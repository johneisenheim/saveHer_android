function Questionnaire(){for(var e=require("ui/handheld/ui_elements/Buttons"),t=[],i=null,o=null,r=0;9>r;r++)t[r]="";var n=Titanium.UI.createWindow({width:"100%",height:"100%",backgroundColor:"#f6f6f6",navBarHidden:!1,windowSoftInputMode:Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN,orientationModes:[Titanium.UI.PORTRAIT],title:"Questionario"});n.activity.onCreateOptionsMenu=function(){var e=n.activity.actionBar;e.title=""},n.addEventListener("androidback",function(){Ti.App.fireEvent("report_complete",{}),n.close()});var s=Titanium.UI.createScrollView({width:"100%",height:"100%",backgroundColor:"#f6f6f6",scrollType:"vertical"}),l=Titanium.UI.createView({width:"100%",height:Ti.UI.SIZE,layout:"vertical",top:0,left:0}),c=(Ti.UI.createView({width:"100%",height:"100%",backgroundColor:"transparent",top:0,left:0}),Titanium.UI.createLabel({text:"Grazie!",font:{fontSize:50,fontFamily:"CaviarDreams"},color:"#4F5153",top:10})),u=Titanium.UI.createLabel({text:"La tua segnalazione è andata a buon fine! Ti chiediamo qualche secondo in più: compila questo breve questionario che ci informerà sulla tipologia e causa del danno riscontrato. Questa fase non è obbligatoria, ma ci sarà di grande aiuto per suggerire le azioni di intervento sul bene culturale.",font:{fontSize:21,fontFamily:"CaviarDreams"},color:"#4F5153",textAlign:"center",top:15,width:"95%"}),d=Titanium.UI.createLabel({text:"Che tipo di danno riscontri? E per quali cause?",font:{fontSize:21,fontFamily:"CaviarDreams"},color:"#4F5153",textAlign:"center",top:30,width:"95%"}),f=function(e){var t=Ti.UI.createView({backgroundColor:"#89b47f",height:45}),i=Ti.UI.createLabel({text:e,font:{fontSize:19,fontFamily:"CaviarDreams"},left:5,color:"#fff"});return t.add(i),t},h=Ti.UI.createListView({width:"90%",height:2700,softKeyboardOnFocus:Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS,top:15}),p=Ti.UI.createListSection({headerView:f("Crolli"),index:0}),m=Ti.UI.createListSection({headerView:f("Lesioni"),index:1}),g=Ti.UI.createListSection({headerView:f("Tetto Sconnesso"),index:2}),T=Ti.UI.createListSection({headerView:f("Degrado e/o caduta materiali"),index:3}),v=Ti.UI.createListSection({headerView:f("Danni sistema raccolte acque"),index:4}),_=Ti.UI.createListSection({headerView:f("Presenza d'acqua"),index:5}),w=Ti.UI.createListSection({headerView:f("Atto vandalico sull'edificio"),index:6}),I=Ti.UI.createListSection({headerView:f("Atto vandalico alle opere d'arte"),index:7}),C=Ti.UI.createListSection({headerView:f("Furto beni immobili"),index:8}),S=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Terremoto",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Frana",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Incuria",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Evento meteorico",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Non so",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],b=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Terremoto",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Frana",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Incuria",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Evento meteorico",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Non so",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],y=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Terremoto",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Frana",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Incuria",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Evento meteorico",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Non so",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],k=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Intonaco",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Affreschi",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],A=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Incuria",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Evento meteorico",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Non so",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],D=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Inondazione",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Perdita impianti",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Infiltrazione dal tetto",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Non so",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],E=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Graffito",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Scritte",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Affissione manifesti",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Azione meccanica",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Fuoco",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Esplosione",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],P=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Graffito",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Scritte",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Affissione manifesti",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Azione meccanica",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Fuoco",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Esplosione",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}],U=[{properties:{title:"Nessuno",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Arredi",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Opere d'arte",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}},{properties:{title:"Altro",accessoryType:Titanium.UI.LIST_ACCESSORY_TYPE_NONE,backgroundColor:"transparent",isChoosen:!0,font:{fontSize:18,fontFamily:"CaviarDreams"},color:"#4F5153",left:10,height:40}}];p.setItems(S),m.setItems(b),g.setItems(y),T.setItems(k),v.setItems(A),_.setItems(D),w.setItems(E),I.setItems(P),C.setItems(U);var F=function(e){switch(e){case 0:return"Crolli";case 1:return"Lesioni";case 2:return"Tetto Sconnesso";case 3:return"Degrado e/o caduta materiali";case 4:return"Danni sistema raccolte acque";case 5:return"Presenza d'acqua";case 6:return"Atto vandalico sull'edificio";case 7:return"Atto vandalico alle opere d'arte";case 8:return"Furto beni immobili"}};h.addEventListener("itemclick",function(e){var i=e.section.getItemAt(e.itemIndex),a=e.section.getItems().length;if(Ti.API.info(a),i.properties.accessoryType==Ti.UI.LIST_ACCESSORY_TYPE_NONE){i.properties.accessoryType=Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK,t[e.itemIndex]="Nessuno"!==i.properties.title?i.properties.title:"";for(var o=0;a>o;o++)if(o!=e.itemIndex){var r=e.section.getItemAt(o);r.properties.accessoryType=Ti.UI.LIST_ACCESSORY_TYPE_NONE,e.section.updateItemAt(o,r)}}e.section.updateItemAt(e.itemIndex,i)});var O=e();O.setButtonTitle("Invia!"),O.setButtonTop(15),O.addEventListener("click",function(){O.setButtonTitle("Attendi...");for(var e="",r="{",s=0;s<t.length;s++)""!==t[s]&&(r+='"'+F(s)+'":"'+t[s]+'",',Ti.API.info(F(s)));if(r=r.substr(0,r.length-1),r+="}",Ti.API.info(r),(""==L.value||"Ulteriori informazioni..."==L.value)&&r.length<=1)return O.setButtonTitle("Invia!"),Ti.App.fireEvent("report_complete",{}),void n.close();(""!=L.value||"Ulteriori informazioni..."!=L.value)&&(e=L.value);var l=Titanium.Network.createHTTPClient({onload:function(){Ti.API.info(this.responseText);var e=JSON.parse(this.responseText);e.response?(O.setButtonTitle("Fatto!"),setTimeout(function(){n.close()},3e3)):(a.setMessage("C'è stato un errore nell'invio della richiesta. Ti preghiamo di riprovare più tardi!"),a.show(),donebutton.setButtonTitle("Invia!"))},onerror:function(){a.setMessage("C'è stato un errore nell'invio della richiesta. Ti preghiamo di riprovare più tardi!"),a.show(),O.setButtonTitle("Invia!")}});l.open("POST","http://www.appsaveheritage.com/memquest.php");var c={userid:o,id:i};c.quest=r.length>1?r:"",c.more=""!=L.value?e:"",Ti.API.info(JSON.stringify(c)),l.send(c)}),h.sections=[p,m,g,T,v,_,w,I,C];var L=Ti.UI.createTextArea({borderWidth:0,color:"#4F5153",backgroundColor:"#f8f8f8",font:{fontSize:18,fontFamily:"CaviarDreams"},returnKeyType:Titanium.UI.RETURNKEY_DONE,textAlign:"left",hintText:"Ulteriori informazioni...",top:20,width:"95%",autocorrect:!0,autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES,verticalAlign:Titanium.UI.TEXT_VERTICAL_ALIGNMENT_TOP,height:150});n.openWin=function(e,t){i=e,o=t,n.open(),setTimeout(function(){s.scrollTo(0,0)},500)};var x=Ti.UI.createView({width:1,height:15,top:5});return l.add(c),l.add(u),l.add(d),l.add(h),l.add(L),l.add(O),l.add(x),s.add(l),n.add(s),n}module.exports=Questionnaire;