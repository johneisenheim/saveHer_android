function GPSRectangle(){
	
	var NoGPSMap = require('ui/handheld/pages/NoGPSMap');
	/*if (Ti.Platform.Android.API_LEVEL <= 10 ){
		NoGPSMap = require('ui/handheld/pages/NoGPSMapWeb');
	}else{
		NoGPSMap = require('ui/handheld/pages/NoGPSMap');
	}*/
	
	var postLayoutCheck = false;
	var latitude = -1, longitude = -1;
	var preStatus = 'Ottengo Posizione';
	
	var container = Ti.UI.createView({
		width:'95%',
		height:60,
		backgroundColor:'transparent',
		layout:'vertical',
		top:5
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:58,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var leftIcon = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_gps.png',
		top:12,
		left:10
	});
	
	var statusLabel = Titanium.UI.createLabel({
		text:'Ottengo Posizione',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#CA2D22', //577336
   		textAlign:'center',
   		width:Ti.UI.FILL,
   		left:10,
   		top:17
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:27,
		height:27,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	container.getLat = function(){
		return latitude;
	};
	
	container.getLon = function(){
		return longitude;
	};
	
	container.setLatLng = function(lat, lon){
		latitude = lat;
		longitude = lon;
	};
	
	container.setStatus = function(status){
		statusLabel.text = status;
	};
	
	container.setStatusWithColor = function(status,color){
		statusLabel.text = status;
		statusLabel.color = color;
	};
	
	whiteView.add(leftIcon);
	whiteView.add(statusLabel);
	whiteView.add(rightIcon);
	container.add(whiteView);
	container.add(shadow);
	
	Ti.App.addEventListener('disable_gps', function(){
		statusLabel.text = 'Disabilitato!';
		statusLabel.color = '#CA2D22';
	});
	
	container.addEventListener('click', function(){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		preStatus = statusLabel.text;
		statusLabel.text = 'Attendi...';
		var noGPSMap = new NoGPSMap();
		noGPSMap.open();
	});
	
	Ti.App.addEventListener('gps_event', function(e){
		if( e.accuracy <= 150 ){
			statusLabel.text = 'Ho la posizione';
			statusLabel.color = '#279219';
			preStatus = statusLabel.text;
			latitude = e.latitude;
			longitude = e.longitude;
		}
	});
	
	Ti.App.addEventListener('reset_status',function(){
		statusLabel.text = preStatus;
	});

	
	return container;
	
}

module.exports = GPSRectangle;
