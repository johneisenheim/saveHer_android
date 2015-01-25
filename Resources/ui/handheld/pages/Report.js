function Report(){
	var Listeners = require('external/Listeners');
	var listeners = new Listeners();
	var Location = require('external/Location');
	var ReportRectangle = require('ui/handheld/rectangles/ReportRectangle');
	var reportRectangle = new ReportRectangle();
	var NetworkRectangle = require('ui/handheld/rectangles/NetworkRectangle');
	var networkRectangle = new NetworkRectangle();
	var GPSRectangle = require('ui/handheld/rectangles/GPSRectangle');
	var gpsRectangle = new GPSRectangle();
	var Buttons = require('ui/handheld/ui_elements/Buttons');
	var MainPage = require('ui/handheld/pages/MainPage');
	var location = new Location();
	var latitude = -1, longitude = -1;
	var isReportSent = false;
	var myTimeout = null;
	var postLayoutCheck = false;
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f8f8f8',
		width:'100%',
		height:'100%',
		title:'Report',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT],
		exitOnClose:true
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	self.addEventListener('androidback', function(e){
		location.removeGPSEvent();
		networkRectangle.removeInterval();
    	var mainPage = new MainPage();
    	mainPage.open();
		self.close();
	});
	
	networkRectangle.addEventListener('click', function(){
		if (networkRectangle.getButtonStatus() != 'Fatto!')
			listeners.storeReport(networkRectangle, reportRectangle,location, gpsRectangle, self);
	});

	
	var scrollView = Titanium.UI.createScrollView({
		width:'100%',
		height:'100%',
		backgroundColor:'#f6f6f6',
		layout:'vertical'
	});
	
	
	var title = Titanium.UI.createLabel({
		text:'Report',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Crea una nuova segnalazione.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var netDescription = Titanium.UI.createLabel({
		text:'Se sei in condizioni di scarsa rete, puoi memorizzare la segnalazione effettuando un tap sulla tile sottostante.',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:25,
   		width:'90%'
	});
	
	var gpsDescription = Titanium.UI.createLabel({
		text:'Se sei stanco di attendere il segnale GPS, specifica le tue coordinate manualmente tappando sulla tile qui sotto.',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:25,
   		width:'90%'
	});
	
	var button = new Buttons();
	button.setButtonTitle('Invia');
	button.setButtonTop(25);
	button.addEventListener('click', function(){
		if( button.getButtonTitle() == 'Inviato!' )
			return;
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		if( reportRectangle.areImagesEmpty() ){
			//no photos added
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per inviare un report, per favore inserisci almeno una foto.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Invia');
  			return;
		}
		if( !location.hasGPSDone  ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Prima di inviare il report, attendi che le coordinate vengano acquisite!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Invia');
  			return;
		}
		if( !Ti.Network.getOnline() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per inviare un report, connetti il tuo dispositivo ad una rete!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Invia');
  			return;
		}
		if ( !Titanium.Filesystem.isExternalStoragePresent() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "È necessaria una memoria esterna di appoggio per processare i dati prima dell\'invio, ma il tuo disposito non sembra esserne munito.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Invia');
  			return;
		}
		
		listeners.sendReport(button, reportRectangle, gpsRectangle);
	});
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:20,
		backgroundColor:'transparent'
	});
	
	Ti.App.addEventListener('web_map_pin', function(e){
		gpsRectangle.setLatLng(e.coords.k,e.coords.B);
		location.removeGPSEvent();
		location.hasGPSDone = true;
		gpsRectangle.setStatusWithColor('Posizione(mappa)','#279219');
	});
	
	if( !Titanium.Geolocation.getLocationServicesEnabled() ){
		gpsRectangle.setStatus('Disabilitato!');
	}
	
	Ti.App.addEventListener('report_complete', function(){
		button.setButtonTitle('Inviato!');
	});
	
	scrollView.addEventListener('postlayout', function(){
		if( !postLayoutCheck ){
			setTimeout(function(){
				location.startGPS();
			},1000);
			postLayoutCheck = true;
		}
	});
	
	scrollView.add(title);
	scrollView.add(description);
	scrollView.add(reportRectangle);
	scrollView.add(netDescription);
	scrollView.add(networkRectangle);
	scrollView.add(gpsDescription);
	scrollView.add(gpsRectangle);
	scrollView.add(button);
	scrollView.add(fakeView);
	
	self.add(scrollView);
	
	return self;
}

module.exports = Report;
