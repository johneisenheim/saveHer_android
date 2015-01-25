function NoGPSMapWeb(){
	
	var Map = require('ti.map');
	var firstPostLayout = true;
	var currentLatitude = null, currentLongitude = null;
	
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
	
	var instructions = Ti.UI.createView({
		backgroundColor:'transparent',
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
    	message: 'Scegli la tua posizione attuale. Fai uno zoom il più preciso possibile e tieni premuto a lungo per posizionare il pin. Premi il tasto "Indietro" del tuo dispositivo per terminare.',
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
  		if( _pin.isAdded )
  			Ti.App.fireEvent('web_map_pin',{coords:{k:currentLatitude, B:currentLongitude}});
  		self.close();
  	});
  	
  	self.addEventListener('postlayout', function(){
  		if( firstPostLayout ){
			saveHer.stopExecution = false;
			Ti.App.fireEvent('reset_status',{});
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
