function MainPage(){
	
	var firstPostLayout = true;
	var SmallRectangleLogged1 = require('ui/gtablet/rectangles/SmallRectangleLogged1');
	var SmallRectangleLogged2 = require('ui/gtablet/rectangles/SmallRectangleLogged2');
	var TimeLine = require('ui/gtablet/timeline/Timeline');
	var timeLine = new TimeLine();
	var Report = require('ui/gtablet/pages/Report');
	var Markers = require('ui/gtablet/pages/Markers');
	var NewReport = require('ui/gtablet/rectangles/NewReport');
	var newReport = new NewReport();
	var ShowMarkers = require('ui/gtablet/rectangles/ShowMarkers');
	var showMarkers = new ShowMarkers();
	var reportItem = null, worldItem = null;
	var youCanClose = 0;
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#eeeeee',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT]
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
		//actionBar.title = '';
		/*var menu = e.menu; 
		reportItem = menu.add({ 
			title : "Report", 
			icon : Titanium.App.Android.R.drawable.ic_action_camera, 
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM 
		}); 
		reportItem.addEventListener("click", function(e) {
			reportItem.icon = Titanium.App.Android.R.drawable.ic_action_clock;
			var report = new Report();
			report.open();
			self.close();
		});
		worldItem = menu.add({
			title : "Segnalazioni", 
			icon : Titanium.App.Android.R.drawable.ic_action_icon_world, 
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
		});
		worldItem.addEventListener("click", function(e) {
			if( !Ti.Network.getOnline() ){
				var dialog = Ti.UI.createAlertDialog({
   					message: "Per visualizzare le segnalazioni, devi essere connesso ad Internet!",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				return;
			}
			worldItem.icon = Titanium.App.Android.R.drawable.ic_action_clock;
			var markers = new Markers();
			markers.open();
			self.close();
		});*/
	};
	
	var view = Titanium.UI.createView({
		backgroundColor:'#f6f6f6',
		width:'90%',
		height:Ti.UI.SIZE,
		layout:'vertical'
	});
	
	var shadow = Titanium.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	var toast = Ti.UI.createNotification({
    	message:"Premi di nuovo per uscire",
    	duration: Ti.UI.NOTIFICATION_DURATION_SHORT
	});
		
	self.addEventListener('androidback', function(){
		if ( !youCanClose ){
			toast.show();
			youCanClose++;
			setTimeout(function(){
				youCanClose = 0;
			},2000);
		}else if ( youCanClose ){
			self.close();
		}
	});
	
	var title = Titanium.UI.createLabel({
		text:'saveHer',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Inizia subito:',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		//top:25,
   		top:40,
   		width:Ti.UI.SIZE
	});
	
	var or = Titanium.UI.createLabel({
		text:'oppure',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		//top:25,
   		top:5,
   		width:Ti.UI.SIZE
	});
	
	Ti.App.addEventListener('restore_icon', function(){
		newReport.setLabelTitle('Crea nuovo report');
		showMarkers.setLabelTitle('Vedi segnalazioni');
	});

	var fakeView = Titanium.UI.createView({
		width:1,
		height:25,
		backgroundColor:'transparent',
		top:0
	});
	
	newReport.addEventListener('click', function(){
		newReport.setLabelTitle('Attendi...');
		new Report().open();
		self.close();
	});
	
	showMarkers.addEventListener('click', function(){
		showMarkers.setLabelTitle('Attendi...');
		new Markers().open();
		self.close();
	});
	
	timeLine.startConnection();
	
	Ti.App.addEventListener('close_app', function(){
		Ti.API.info('close app event');
		self.close();
	});
	
	view.add(title);
	view.add(description);
	view.add(newReport);
	view.add(or);
	view.add(showMarkers);
	view.add(timeLine);
	view.add(new SmallRectangleLogged1());
	view.add(new SmallRectangleLogged2());
	view.add(fakeView);
	view.add(shadow);
	self.add(view);
	
	return self;
	
}

module.exports = MainPage;
