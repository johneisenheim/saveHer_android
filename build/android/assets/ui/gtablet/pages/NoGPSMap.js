function NoGPSMapWeb(){var e=require("ti.map"),t=!0,n=null,i=null,a=Titanium.UI.createWindow({width:"100%",heigth:"100%",orientationModes:[Titanium.UI.PORTRAIT],title:""});a.activity.onCreateOptionsMenu=function(){a.activity.actionBar};var r=e.createAnnotation({title:"La tua posizione",draggable:!0,animate:!0,showInfoWindow:!0,isAdded:!1}),o=e.createView({mapType:e.NORMAL_TYPE,width:"100%",height:"100%",animate:!0,regionFit:!1,userLocation:!1,region:{latitude:42.2962494,longitude:13.4796522}});o.addEventListener("longclick",function(e){Ti.API.info("lat:"+e.latitude+", lon:"+e.longitude),r.latitude=e.latitude,r.longitude=e.longitude,n=e.latitude,i=e.longitude,o.addAnnotation(r),r.isAdded=!0});var s=Ti.UI.createView({backgroundColor:"transparent",width:"100%",height:"100%",layout:"horizontal"}),l=Ti.UI.createSwitch({style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,title:"Non mostrare più.",top:0,left:0});s.add(l);var u=Ti.UI.createAlertDialog({message:'Scegli la tua posizione attuale. Fai uno zoom il più preciso possibile e tieni premuto a lungo per posizionare il pin. Premi il tasto "Indietro" del tuo dispositivo per terminare.',ok:"Ok",title:"saveHer",androidView:s});return u.addEventListener("click",function(){l.getValue()&&Titanium.App.Properties.setInt("showMapDialog",1)}),a.addEventListener("androidback",function(){r.isAdded&&Ti.App.fireEvent("web_map_pin",{coords:{k:n,B:i}}),a.close()}),a.addEventListener("postlayout",function(){t&&(saveHer.stopExecution=!1,Ti.App.fireEvent("reset_status",{}),null==Titanium.App.Properties.getInt("showMapDialog")&&u.show(),t=!1)}),a.add(o),a}module.exports=NoGPSMapWeb;