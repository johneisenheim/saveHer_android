function Report(){var e=require("external/Listeners"),t=new e,i=require("external/Location"),a=(require("ti.compression"),require("ti.imagefactory"),require("ui/tablet/rectangles/ReportRectangle")),o=new a,n=require("ui/tablet/rectangles/NetworkRectangle"),r=new n,s=require("ui/tablet/rectangles/GPSRectangle"),l=new s,c=require("ui/tablet/ui_elements/Buttons"),d=require("ui/tablet/pages/MainPage"),u=new i,f=!1,h=Titanium.UI.createWindow({backgroundColor:"#f8f8f8",width:"100%",height:"100%",title:"Report",windowSoftInputMode:Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,orientationModes:[Titanium.UI.PORTRAIT]});h.activity.onCreateOptionsMenu=function(){h.activity.actionBar},h.addEventListener("androidback",function(){Ti.App.fireEvent("restore_icon",{}),u.removeGPSEvent();var e=Titanium.Android.currentActivity;e.finish();var t=new d;t.open(),h.close()}),r.addEventListener("click",function(){"Fatto!"!=r.getButtonStatus()&&t.storeReport(r,o,u,l,h)});var p=Titanium.UI.createScrollView({width:"100%",height:"100%",backgroundColor:"#f6f6f6",layout:"vertical"}),m=Titanium.UI.createLabel({text:"Report",font:{fontSize:60,fontFamily:"CaviarDreams"},color:"#4F5153",top:10}),g=Titanium.UI.createLabel({text:"Crea una nuova segnalazione.",font:{fontSize:26,fontFamily:"CaviarDreams"},color:"#4F5153",textAlign:"center",top:25,width:"95%"}),T=Titanium.UI.createLabel({text:"Se sei in condizioni di scarsa rete, puoi memorizzare la segnalazione effettuando un tap sulla tile sottostante.",font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#4F5153",textAlign:"center",top:35,width:"90%"}),v=Titanium.UI.createLabel({text:"Se sei stanco di attendere il segnale GPS, specifica le tue coordinate manualmente tappando sulla tile qui sotto.",font:{fontSize:24,fontFamily:"CaviarDreams"},color:"#4F5153",textAlign:"center",top:35,width:"90%"}),w=new c;w.setButtonTitle("Invia"),w.setButtonTop(40),w.addEventListener("click",function(){if("Inviato!"!=w.getButtonTitle()&&!saveHer.stopExecution){if(saveHer.stopExecution=!0,o.areImagesEmpty()){{Ti.UI.createAlertDialog({message:"Per inviare un report, per favore inserisci almeno una foto.",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void w.setButtonTitle("Invia")}if(!u.hasGPSDone){{Ti.UI.createAlertDialog({message:"Prima di inviare il report, attendi che le coordinate vengano acquisite!",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void w.setButtonTitle("Invia")}if(!Ti.Network.getOnline()){{Ti.UI.createAlertDialog({message:"Per inviare un report, connetti il tuo dispositivo ad una rete!",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void w.setButtonTitle("Invia")}if(!Titanium.Filesystem.isExternalStoragePresent()){{Ti.UI.createAlertDialog({message:"È necessaria una memoria esterna di appoggio per processare i dati prima dell'invio, ma il tuo disposito non sembra esserne munito.",ok:"Ok",title:"saveHer"}).show()}return saveHer.stopExecution=!1,void w.setButtonTitle("Invia")}t.sendReport(w,o,l)}});var _=Titanium.UI.createView({width:1,height:20,backgroundColor:"transparent"});return Ti.App.addEventListener("web_map_pin",function(e){l.setLatLng(e.coords.k,e.coords.B),u.removeGPSEvent(),u.hasGPSDone=!0,l.setStatusWithColor("Posizione(mappa)","#279219")}),Titanium.Geolocation.getLocationServicesEnabled()||l.setStatus("Disabilitato!"),Ti.App.addEventListener("report_complete",function(){w.setButtonTitle("Inviato!")}),p.addEventListener("postlayout",function(){f||(setTimeout(function(){u.startGPS()},3e3),f=!0)}),p.add(m),p.add(g),p.add(o),p.add(T),p.add(r),p.add(v),p.add(l),p.add(w),p.add(_),h.add(p),h}module.exports=Report;