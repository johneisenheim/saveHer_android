function MapRectangle(){
	
	var Map = require('ti.map');
	var firstPostLayout = false;

	var container = Ti.UI.createView({
		width:'95%',
		height:Ti.UI.FILL,
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
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	var mapview =  Map.createView({
		mapType:Map.NORMAL_TYPE, 
		width:'95%', 
		height:'95%',
		animate:true,
    	regionFit:false,
    	userLocation:false,
    	region: {latitude:42.2962494, longitude:13.4796522},
    	top:5
	});
	
	var pinReq = Titanium.Network.createHTTPClient({
		onload: function(){
				var json = pinReq.responseText;  
    			var response = JSON.parse(json); 
    			Ti.API.info(json);
    			var nick =  Ti.App.Properties.getString('nickname');
    			for ( var i = 0; i < response.length; i++ ){
    				var _pin = Map.createAnnotation({
    					latitude:response[i].latitude,
    					longitude:response[i].longitude,
    					title:"Report da "+response[i].nickname,
    					subtitle:'Status: '+response[i].status,//+" Utente: "+response[i].username,
    					animate:true
					});
						
					if ( response[i].nickname == nick )
						_pin.pincolor = Map.ANNOTATION_GREEN;
					else _pin.pincolor = Map.ANNOTATION_BLUE;
					mapview.addAnnotation(_pin);
					
    			}
			},
			onerror : function(){
				var dialog = Ti.UI.createAlertDialog({
    				message: 'Sembra esserci stato un problema nel server. Ti preghiamo di riprovare, grazie.',
    				ok: 'Ok',
    				title: 'Network'
  				}).show();
			}
	});
	
	container.addEventListener('postlayout', function(){
		if( !firstPostLayout ){
			var rc = Map.isGooglePlayServicesAvailable();
			switch (rc) {
    			case Map.SUCCESS:
    	    		pinReq.open("GET","http://www.appsaveheritage.com/getpins.php");
					pinReq.send();
					firstPostLayout = true;
        		break;
    			case Map.SERVICE_MISSING:
    				var dialog = Ti.UI.createAlertDialog({
    					message: 'saveHer necessita dei Google Play Services, scaricabili gratuitamente dal Play Store.',
    					ok: 'Ok',
    					title: 'Network'
  					}).show();
        		break;
    			case Map.SERVICE_VERSION_UPDATE_REQUIRED:
    				var dialog = Ti.UI.createAlertDialog({
    					message: 'saveHer necessita dei Google Play Services, scaricabili gratuitamente dal Play Store. Quelli installati sul tuo dispositivo, sono obsoleti. Aggiornali, per favore.',
    					ok: 'Ok',
    					title: 'Network'
  					}).show();
        		break;
    			case Map.SERVICE_DISABLED:
    				var dialog = Ti.UI.createAlertDialog({
    					message: 'saveHer necessita dei Google Play Services, ma sembrano essere disabilitati. Per favore, abilitali.',
    					ok: 'Ok',
    					title: 'Network'
  					}).show();
        			//alert('Google Play services is disabled. Please enable Google Play services.');
        		break;
    			case Map.SERVICE_INVALID:
    				var dialog = Ti.UI.createAlertDialog({
    					message: 'saveHer necessita dei Google Play Services, ma sembra ci sia un problema di autenticazione. Per favore, reinstallali dal Play Store.',
    					ok: 'Ok',
    					title: 'Network'
  					}).show();
        			//alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        		break;
    			default:
    				var dialog = Ti.UI.createAlertDialog({
    					message: 'saveHer necessita dei Google Play Services, ma sembra ci sia un problema nel loro caricamento. Per favore, scaricali o reinstallali dal Play Store.',
    					ok: 'Ok',
    					title: 'Network'
  					}).show();
        		break;
			}
		}
	});
	
	whiteView.add(mapview);
	container.add(whiteView);
	container.add(shadow);
	
	
	return container;
	
}

module.exports = MapRectangle;
