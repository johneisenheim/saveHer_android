function MapRectangleWeb(){
	
	var container = Ti.UI.createView({
		width:'95%',
		height:Ti.UI.SIZE,
		backgroundColor:'#f8f8f8',
		layout:'vertical',
		top:10
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:'98%',
		backgroundColor:'#ffffff',
		layout:'vertical',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	var webView = Titanium.UI.createWebView({
		width:'98%',
		height:'92%',
		top:0,
		backgroundColor:'#ffffff',
		cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,
		scalesPageToFit:true,
		url:'/HTML/HTMLMap.html'
	});
	
	webView.addEventListener('dblclick', function(){Ti.API.info('dblclick disabled');});
	webView.addEventListener('doubletap', function(){Ti.API.info('doubletap disabled');});
	webView.addEventListener('load', function(){Ti.App.fireEvent('web_loaded',{});});
	
	var controlsRow = Titanium.UI.createView({
		height:50,
		width:'100%',
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		top:0
	});
	
	var plus = Ti.UI.createLabel({
		text:'+',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#577C59',
   		textAlign:'center',
   		top:-10,
   		right:10
	});
	
	var minus = Ti.UI.createLabel({
		text:'-',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#577C59',
   		textAlign:'center',
   		top:-10,
   		left:10
	});
	
	var zoom = Titanium.UI.createLabel({
		text:'zoom',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5,
   		left:0,
   		width:Ti.UI.FILL
	}); 
	
	controlsRow.add(minus);
	controlsRow.add(zoom);
	controlsRow.add(plus);
	
	plus.addEventListener('click', function(){
		Ti.API.info('plus');
		Ti.App.fireEvent('zoom', {type:'in'});
	});
	
	zoom.addEventListener('click', function(){
		Ti.API.info('minus');
		Ti.App.fireEvent('zoom', {type:'out'});
	});
	
	container.gotoURL = function(url){
		webView.url = url;
	};
	
	whiteView.add(webView);
	whiteView.add(controlsRow);
	container.add(whiteView);
	container.add(shadow);
	
	
	return container;
	
}

module.exports = MapRectangleWeb;
