function NoGPSMapWeb(){
	
	var firstPostLayout = true;
	var sendButton = null, currentPath = null, parsed = null, preview = null, customCombo = null, currentPath = null;
	var pinDone = false;
	var Listeners = require('external/Listeners');
	var listeners = new Listeners();
	
	var self = Titanium.UI.createWindow({
		width:'100%',
		heigth:'100%',
		orientationModes:[Titanium.UI.PORTRAIT],
		title:''
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	var webView = Titanium.UI.createWebView({
		width:'100%',
		height:'100%',
		top:0,
		backgroundColor:'#ffffff',
		cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,
		scalesPageToFit:true,
		url:'/HTML/StoredNoGPSMap.html'
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
  	
  	Ti.App.addEventListener('pin_done', function(e){
  		parsed.latitude = e.coords.k;
  		parsed.longitude = e.coords.B;
  		pinDone = true;
  	});
  	
  	self.addEventListener('androidback', function(){
  		if( pinDone ){
  			listeners.sendRestoredReport(sendButton, currentPath, parsed, preview, customCombo, currentPath);
  			self.close();
  		}else{
  			self.close();
  		}
  	});
  	
  	self.openWin = function(_sendButton, _currentPath, _parsed, _preview, _customCombo, _currentPath){
  		sendButton = _sendButton;
  		currentPath = _currentPath;
  		parsed =  _parsed;
  		preview =  _preview;
  		customCombo = _customCombo;
  		currentPath = _currentPath;
  		self.open();
  	};
  	
  	self.addEventListener('postlayout', function(){
  		if( firstPostLayout ){
			saveHer.stopExecution = false;
  			if(Titanium.App.Properties.getInt('showMapDialog') == null){
  				dialog.show();
  			}
  		}
  	});
  	
  	self.add(webView);
	
	return self;
}

module.exports = NoGPSMapWeb;
