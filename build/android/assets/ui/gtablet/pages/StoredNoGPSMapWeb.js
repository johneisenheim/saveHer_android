function NoGPSMapWeb(){var e=!0,t=null,i=null,n=null,a=null,o=null,i=null,r=!1,s=require("ui/tablet/external/Listeners"),l=new s,u=Titanium.UI.createWindow({width:"100%",heigth:"100%",orientationModes:[Titanium.UI.PORTRAIT],title:""});u.activity.onCreateOptionsMenu=function(){u.activity.actionBar};var c=Titanium.UI.createWebView({width:"100%",height:"100%",top:0,backgroundColor:"#ffffff",cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,scalesPageToFit:!0,url:"/HTML/StoredNoGPSMap.html"});c.addEventListener("dblclick",function(){Ti.API.info("dblclick disabled")}),c.addEventListener("doubletap",function(){Ti.API.info("doubletap disabled")});var d=Ti.UI.createView({backgroundColor:"#f8f8f8",width:"100%",height:"100%",layout:"horizontal"}),f=Ti.UI.createSwitch({style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,title:"Non mostrare più.",top:0,left:0});d.add(f);var h=Ti.UI.createAlertDialog({message:"Scegli la tua posizione attuale. Fai uno zoom il più preciso possibile tramite i tasti + e -, e tieni premuto a lungo per posizionare il pin.",ok:"Ok",title:"saveHer",androidView:d});return h.addEventListener("click",function(){f.getValue()&&Titanium.App.Properties.setInt("showMapDialog",1)}),Ti.App.addEventListener("pin_done",function(e){n.latitude=e.coords.k,n.longitude=e.coords.B,r=!0}),u.addEventListener("androidback",function(){r?(l.sendRestoredReport(t,i,n,a,o,i),u.close()):u.close()}),u.openWin=function(e,r,s,l,c,r){t=e,i=r,n=s,a=l,o=c,i=r,u.open()},u.addEventListener("postlayout",function(){e&&(saveHer.stopExecution=!1,null==Titanium.App.Properties.getInt("showMapDialog")&&h.show())}),u.add(c),u}module.exports=NoGPSMapWeb;