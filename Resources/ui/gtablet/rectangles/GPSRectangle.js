function GPSRectangle(){
	
	var NoGPSMap = require('ui/gtablet/pages/NoGPSMap');
	/*if (Ti.Platform.Android.API_LEVEL <= 10 ){
		NoGPSMap = require('ui/gtablet/pages/NoGPSMapWeb');
	}else{
		NoGPSMap = require('ui/gtablet/pages/NoGPSMap');
	}*/
	
	
	var postLayoutCheck = false;
	var latitude = -1, longitude = -1;
	var preStatus = 'Ottengo Posizione';
	
	var container = Ti.UI.createView({
		width:'95%',
		height:73,
		backgroundColor:'transparent',
		layout:'vertical',
		top:10
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:70,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var leftIcon = Titanium.UI.createView({
		width:40,
		height:40,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_gps.png',
		top:12,
		left:15
	});
	
	var statusLabel = Titanium.UI.createLabel({
		text:'Ottengo Posizione',
		font:{
     		fontSize:23,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#CA2D22', //577336
   		textAlign:'center',
   		width:Ti.UI.FILL,
   		left:10,
   		top:17
	}); 
	
	var rightIcon = Titanium.UI.createView({
		width:37,
		height:37,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:15
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
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
