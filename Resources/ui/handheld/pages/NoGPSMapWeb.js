function NoGPSMapWeb(){
	
	var firstPostLayout = true;
	
	var self = Titanium.UI.createWindow({
		width:'100%',
		heigth:'100%',
		orientationModes:[Titanium.UI.PORTRAIT]
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
		actionBar.title = '';
	};
	
	var webView = Titanium.UI.createWebView({
		width:'100%',
		height:'100%',
		top:0,
		backgroundColor:'#ffffff',
		cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,
		scalesPageToFit:true,
		url:'/HTML/NoGPSMap.html'
	});
	webView.addEventListener('dblclick', function(){Ti.API.info('dblclick disabled');});
	webView.addEventListener('doubletap', function(){Ti.API.info('doubletap disabled');});
	
	var instructions = Ti.UI.createView({
		backgroundColor:'#f8f8f8',
		width:'100%',
		height:'100%',
		layout:'horizontal'
	});

	var checkInstruction = Ti.UI.createSwitch({
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title:'Non mostrare più.',
		top:0,
		left:0
	});
	
	instructions.add(checkInstruction);
	
	var dialog = Ti.UI.createAlertDialog({
    	message: 'Scegli la tua posizione attuale. Fai uno zoom il più preciso possibile tramite i tasti + e -, e tieni premuto a lungo per posizionare il pin.',
    	ok: 'Ok',
    	title: 'saveHer',
    	androidView: instructions
  	});
  	
  	dialog.addEventListener('click', function(){
  		if( checkInstruction.getValue() ){
  			Titanium.App.Properties.setInt('showMapDialog',1);
  		}
  	});
  	
  	self.addEventListener('androidback', function(){
  		self.close();
  	});
  	
  	self.addEventListener('postlayout', function(){
  		if( firstPostLayout ){
			saveHer.stopExecution = false;
			Ti.App.fireEvent('reset_status',{});
  			if(Titanium.App.Properties.getInt('showMapDialog') == null){
  				dialog.show();
  			}
  		}
  	});
  	
  	self.add(webView);
	
	return self;
}

module.exports = NoGPSMapWeb;
