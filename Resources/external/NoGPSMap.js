function NoGPSMap(){
	var Map = null;
	var needsWebMap = false;
	var mapview = null;
	var isCalledFromStoredReports = false;
	if (Ti.Platform.Android.API_LEVEL <= 10 ){
		needsWebMap = true;
	}else{
		Map = require('ti.map');
	}
	var checkItem = null;
	var mapButton = null;
	var currentLatitude = null, currentLongitude = null;
	
	var self = Titanium.UI.createWindow({
		width:'100%',
		heigth:'100%'
		//backgroundColor:'transparent'
	});
	
	if(!needsWebMap){
		var rc = Map.isGooglePlayServicesAvailable();
		switch (rc) {
    		case Map.SUCCESS:
    	    	Ti.API.info('Google Play services is installed.');
        	break;
    		case Map.SERVICE_MISSING:
        		alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
        	break;
    		case Map.SERVICE_VERSION_UPDATE_REQUIRED:
        		alert('Google Play services is out of date. Please update Google Play services.');
        	break;
    		case Map.SERVICE_DISABLED:
        		alert('Google Play services is disabled. Please enable Google Play services.');
        	break;
    		case Map.SERVICE_INVALID:
        		alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        	break;
    		default:
        		alert('Unknown error.');
        	break;
		}
	}
	
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
		actionBar.title = '';
		var menu = e.menu;
		checkItem = menu.add({ 
			title : "Ok", 
			icon : Titanium.App.Android.R.drawable.ic_action_check, 
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM,
			visible:false 
		});  
		var mapItem = menu.add({ 
			title : "Chiudi", 
			icon : Titanium.App.Android.R.drawable.ic_action_cross, 
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM 
		}); 
		checkItem.addEventListener('click', function(e){
			if(!isCalledFromStoredReports) 
				mapButton.setButtonTitle('Mappa');
			//Ti.API.info('Current '+currentLatitude+', '+currentLongitude);
			Ti.App.fireEvent('position_by_map',{latitude:currentLatitude, longitude:currentLongitude});
			self.close();
		});
		mapItem.addEventListener("click", function(e) { 
			if( !isCalledFromStoredReports ){
				mapButton.setButtonTitle('Mappa');
			}else{
				mapButton.setButtonTitle('Invia');
			}
			self.close();
		}); 
	};
	
	self.addEventListener('androidback', function(e){
		var activity = Titanium.Android.currentActivity;
        activity.finish();
		self.close();
	});
	
	var container = Titanium.UI.createView({
		backgroundColor:'#f8f8f8',
		width:'100%',
		height:'100%',
		layout:'vertical'
	});
	
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
	
	if ( !needsWebMap ){
		var _pin = Map.createAnnotation({
    		title:"La tua posizione",
    		draggable:true,
    		animate:true,
    		showInfoWindow:true,
    		isAdded:false
		});
	
		mapview = Map.createView({
			mapType:Map.NORMAL_TYPE,
			width:'100%',
			height:'100%',
			animate:true,
    		regionFit:false,
    		userLocation:false
		});
	
		mapview.addEventListener('longclick', function(e){
			Ti.API.info('lat:'+e.latitude+', lon:'+e.longitude);
			_pin.latitude = e.latitude;
			_pin.longitude = e.longitude;
			currentLatitude = e.latitude;
			currentLongitude = e.longitude;
			mapview.addAnnotation(_pin);
			_pin.isAdded = true;
			checkItem.setVisible(true);
		});
	}else{
		var WebMap = require('/ui/pages/WebMap');
		mapview = new WebMap();
	}
	
	self.openWin = function(win, view, item, mapbutton){
		self.open();
		win.remove(view);
		item.enabled = true;
		mapButton = mapbutton;
		var prop = Titanium.App.Properties.getInt('showMapDialog');
		switch(prop){
			case 0:
				dialog.show();
			break;
			case 1:
			break;
			default:
				dialog.show();
			break;
		}

	};
	
	self.openWin2 = function(win, view, button, item){
		self.open();
		win.remove(view);
		item.enabled = true;
		mapButton = button;
		isCalledFromStoredReports = true;
		var prop = Titanium.App.Properties.getInt('showMapDialog');
		switch(prop){
			case 0:
				dialog.show();
			break;
			case 1:
			break;
			default:
				dialog.show();
			break;
		}
	};
	
	Ti.App.addEventListener('web_map_pin',function(e){
		currentLatitude = e.coords.k;
		currentLongitude = e.coords.B;
		checkItem.setVisible(true);
		Ti.API.info(currentLatitude+','+currentLongitude);
	});
	
	//container.add(mapview);
	self.add(mapview);
	
	return self;
	
}
module.exports = NoGPSMap;
