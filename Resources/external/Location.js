function Location(){
	var moment = require('external/moment');
	var self = {};
	self.isGPSRunning = false;
	Ti.Geolocation.Android.manualMode = true;
	var now = new Date();
	self.hasGPSDone = false;
	var minutesPassed = -1;
	gpsProvider = Ti.Geolocation.Android.createLocationProvider({
    	name: Ti.Geolocation.PROVIDER_GPS,
    	minUpdateTime: 60,
    	minUpdateDistance: 150
	});
	Ti.Geolocation.Android.addLocationProvider(gpsProvider);
	
	var dialog = Ti.UI.createAlertDialog({
   		message: "",
    	ok: 'Ok',
    	title: 'saveHer'
  	});
	
	var locationListener = function(e){
		self.isGPSRunning = true;
		try{
			if ( e.success && ( (typeof e.coords.latitude !== 'undefined') && (typeof e.coords.longitude !== 'undefined' ))){
				minutesPassed = moment(now).diff(new Date(e.coords.timestamp),'minute');
				if ( minutesPassed <= 3 ){
					if ( e.coords.accuracy < 150 ){
						var lat = e.coords.latitude;
						var lon = e.coords.longitude;
						Ti.App.fireEvent('gps_event',{accuracy: e.coords.accuracy, latitude: e.coords.latitude, longitude: e.coords.longitude, timestamp:true});
						Ti.API.info('Location is '+ e.coords.latitude+','+e.coords.longitude);
						self.isGPSRunning = false;
						Titanium.Geolocation.removeEventListener('location', locationListener);
						self.hasGPSDone = true;
						
					}
				}
				Ti.API.info(e.coords.latitude+','+e.coords.longitude);
				Ti.API.info('Now is '+now);
				Ti.API.info( 'From coords '+new Date(e.coords.timestamp) );
				//Ti.App.fireEvent('gps_event',{accuracy:e.coords.accuracy, latitude: null, longitude: null, timestamp:null});
			}
		}catch(ex){
			//alert('Exception: '+ex);
			Ti.App.fireEvent('disable_gps', {});
		}
	};
  	
  	self.startGPS = function(){
  		if( Titanium.Geolocation.getLocationServicesEnabled() ){
  			self.gpsEnabled = true;
  			Ti.API.info('gpsenabled');
  			Ti.Geolocation.addEventListener('location', locationListener );
  		}else{
  			self.gpsEnabled = false;
  			Ti.API.info('gpsdisabled');
  		}
  	};
  	
  	self.getGPSRunning = function(){
  		return self.isGPSRunning;
  	};
  	
  	self.removeGPSEvent = function(){
  		//if(self.isGPSRunning){
  			Titanium.Geolocation.removeEventListener('location', locationListener);
  			Ti.API.info('removeGPSEvent');
  		//}
  	};
	
	return self;
}
module.exports = Location;

