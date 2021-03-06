function Report(){
	var Listeners = require('ui/gtablet/external/Listeners');
	var listeners = new Listeners();
	var Location = require('external/Location');
	//var Compression = require('ti.compression');
	//var imagefactory = require('ti.imagefactory');
	var ReportRectangle = require('ui/gtablet/rectangles/ReportRectangle');
	var reportRectangle = new ReportRectangle();
	var NetworkRectangle = require('ui/gtablet/rectangles/NetworkRectangle');
	var networkRectangle = new NetworkRectangle();
	var GPSRectangle = require('ui/gtablet/rectangles/GPSRectangle');
	var gpsRectangle = new GPSRectangle();
	var Buttons = require('ui/gtablet/ui_elements/Buttons');
	var MainPage = require('ui/gtablet/pages/MainPage');
	var location = new Location();
	var latitude = -1, longitude = -1;
	var isReportSent = false;
	var myTimeout = null;
	var postLayoutCheck = false;
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#eeeeee',
		width:'100%',
		height:'100%',
		title:'Report',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT]
		//exitOnClose:true
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	self.addEventListener('androidback', function(e){
		Ti.App.fireEvent('restore_icon',{});
		location.removeGPSEvent();
		var activity = Titanium.Android.currentActivity;
        activity.finish();
    	var mainPage = new MainPage();
    	mainPage.open();
		self.close();
	});
	
	networkRectangle.addEventListener('click', function(){
		if (networkRectangle.getButtonStatus() != 'Fatto!')
			listeners.storeReport(networkRectangle, reportRectangle,location, gpsRectangle, self);
	});
	
	
	var scrollView = Titanium.UI.createView({
		width:'90%',
		height:Ti.UI.SIZE,
		backgroundColor:'#f6f6f6',
		layout:'vertical'
	});
	
	var shadow = Titanium.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	var title = Titanium.UI.createLabel({
		text:'Report',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Crea una nuova segnalazione.',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:25,
   		width:'95%'
	});
	
	var netDescription = Titanium.UI.createLabel({
		text:'Se sei in condizioni di scarsa rete, puoi memorizzare la segnalazione effettuando un tap sulla tile sottostante.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:35,
   		width:'90%'
	});
	
	var gpsDescription = Titanium.UI.createLabel({
		text:'Se sei stanco di attendere il segnale GPS, specifica le tue coordinate manualmente tappando sulla tile qui sotto.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:35,
   		width:'90%'
	});
	
	var button = new Buttons();
	button.setButtonTitle('Invia');
	button.setButtonTop(40);
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
			},3000);
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
	scrollView.add(shadow);
	
	self.add(scrollView);
	
	return self;
}

module.exports = Report;
