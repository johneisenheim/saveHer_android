function NoGPSMapWeb(){
	
	var Map = require('ti.map');
	var firstPostLayout = true;
	var currentLatitude = null, currentLongitude = null;
	var Listeners = require('ui/gtablet/external/Listeners');
	var listeners = new Listeners();
	var sendButton = null, currentPath = null, parsed = null, preview = null, customCombo = null, currentPath = null;
	
	var self = Titanium.UI.createWindow({
		width:'100%',
		heigth:'100%',
		orientationModes:[Titanium.UI.PORTRAIT],
		title:''
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	var _pin = Map.createAnnotation({
    	title:"La tua posizione",
    	draggable:true,
    	animate:true,
    	showInfoWindow:true,
    	isAdded:false
	});
	
	var mapview = Map.createView({
		mapType:Map.NORMAL_TYPE,
		width:'100%',
		height:'100%',
		animate:true,
    	regionFit:false,
    	userLocation:false,
    	region: {latitude:42.2962494, longitude:13.4796522}
	});
	
	mapview.addEventListener('longclick', function(e){
		Ti.API.info('lat:'+e.latitude+', lon:'+e.longitude);
		_pin.latitude = e.latitude;
		_pin.longitude = e.longitude;
		currentLatitude = e.latitude;
		currentLongitude = e.longitude;
		mapview.addAnnotation(_pin);
		_pin.isAdded = true;
	});
	
	var dialog = Ti.UI.createAlertDialog({
    	message: 'Non sono presenti le coordinate per questo report. Scegli la posizione dalla mappa facendo uno zoom il più preciso possibile, poi premi a lungo sulla zona corrispondente alla tua posizione.',
    	ok: 'Ok',
    	title: 'saveHer'
  	});
  	
  	self.addEventListener('androidback', function(){
  		if( _pin.isAdded ){
  			parsed.latitude = _pin.latitude;
  			parsed.longitude = _pin.longitude;
  			listeners.sendRestoredReport(sendButton, currentPath, parsed, preview, customCombo, currentPath);
  			self.close();
  		}else self.close();
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
  			firstPostLayout = false;
  		}
  	});
  	
  	self.add(mapview);
	
	return self;
}

module.exports = NoGPSMapWeb;
