function MapRectangleWeb(){var e=Ti.UI.createView({width:"95%",height:Ti.UI.SIZE,backgroundColor:"#f8f8f8",layout:"vertical",top:10}),t=Ti.UI.createView({width:"100%",height:"98%",backgroundColor:"#ffffff",layout:"vertical",borderColor:"#DCDCDC",borderWidth:.4,top:0}),i=Ti.UI.createView({width:"100%",height:2,backgroundColor:"#DBDBDB"}),n=Titanium.UI.createWebView({width:"98%",height:"92%",top:0,backgroundColor:"#ffffff",cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,scalesPageToFit:!0,url:"/HTML/HTMLMap.html"});n.addEventListener("dblclick",function(){Ti.API.info("dblclick disabled")}),n.addEventListener("doubletap",function(){Ti.API.info("doubletap disabled")}),n.addEventListener("load",function(){Ti.App.fireEvent("web_loaded",{})});var a=Titanium.UI.createView({height:50,width:"100%",backgroundColor:"#ffffff",top:0}),o=Ti.UI.createLabel({text:"+",font:{fontSize:40,fontFamily:"CaviarDreams"},color:"#577C59",textAlign:"center",top:-10,right:10}),r=Ti.UI.createLabel({text:"-",font:{fontSize:40,fontFamily:"CaviarDreams"},color:"#577C59",textAlign:"center",top:-10,left:10}),s=Titanium.UI.createLabel({text:"zoom",font:{fontSize:21,fontFamily:"CaviarDreams"},color:"#65686D",textAlign:"center",top:5,left:0,width:Ti.UI.FILL});return a.add(r),a.add(s),a.add(o),o.addEventListener("click",function(){Ti.API.info("plus"),Ti.App.fireEvent("zoom",{type:"in"})}),s.addEventListener("click",function(){Ti.API.info("minus"),Ti.App.fireEvent("zoom",{type:"out"})}),e.gotoURL=function(e){n.url=e},t.add(n),t.add(a),e.add(t),e.add(i),e}module.exports=MapRectangleWeb;