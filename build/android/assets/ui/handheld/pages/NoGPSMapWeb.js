function NoGPSMapWeb(){var e=!0,t=Titanium.UI.createWindow({width:"100%",heigth:"100%",orientationModes:[Titanium.UI.PORTRAIT]});t.activity.onCreateOptionsMenu=function(){var e=t.activity.actionBar;e.title=""};var i=Titanium.UI.createWebView({width:"100%",height:"100%",top:0,backgroundColor:"#ffffff",cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,scalesPageToFit:!0,url:"/HTML/NoGPSMap.html"});i.addEventListener("dblclick",function(){Ti.API.info("dblclick disabled")}),i.addEventListener("doubletap",function(){Ti.API.info("doubletap disabled")});var a=Ti.UI.createView({backgroundColor:"#f8f8f8",width:"100%",height:"100%",layout:"horizontal"}),o=Ti.UI.createSwitch({style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,title:"Non mostrare più.",top:0,left:0});a.add(o);var n=Ti.UI.createAlertDialog({message:"Scegli la tua posizione attuale. Fai uno zoom il più preciso possibile tramite i tasti + e -, e tieni premuto a lungo per posizionare il pin.",ok:"Ok",title:"saveHer",androidView:a});return n.addEventListener("click",function(){o.getValue()&&Titanium.App.Properties.setInt("showMapDialog",1)}),t.addEventListener("androidback",function(){t.close()}),t.addEventListener("postlayout",function(){e&&(saveHer.stopExecution=!1,Ti.App.fireEvent("reset_status",{}),null==Titanium.App.Properties.getInt("showMapDialog")&&n.show())}),t.add(i),t}module.exports=NoGPSMapWeb;