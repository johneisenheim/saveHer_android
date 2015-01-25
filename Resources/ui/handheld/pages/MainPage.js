function MainPage(){
	
	var firstPostLayout = true;
	var SmallRectangleLogged1 = require('ui/handheld/rectangles/SmallRectangleLogged1');
	var SmallRectangleLogged2 = require('ui/handheld/rectangles/SmallRectangleLogged2');
	var TimeLine = require('ui/handheld/timeline/Timeline');
	var timeLine = new TimeLine();
	var Report = require('ui/handheld/pages/Report');
	var Markers = require('ui/handheld/pages/Markers');
	var NewReport = require('ui/handheld/rectangles/NewReport');
	var newReport = new NewReport();
	var ShowMarkers = require('ui/handheld/rectangles/ShowMarkers');
	var showMarkers = new ShowMarkers();
	
	var reportItem = null, worldItem = null;
	var youCanClose = 0;
	var report = null;
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#ececf1',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT],
		exitOnClose:true
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
			report = new Report();
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
	
	var scrollView = Ti.UI.createScrollView({
		width:'100%',
		height:'100%',
		top:0,
		left:0,
		layout:'vertical',
		backgroundColor:'#f6f6f6'
	});
	
	var title = Titanium.UI.createLabel({
		text:'saveHer',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Inizia subito:',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		//top:25,
   		top:30,
   		width:Ti.UI.SIZE
	});
	
	var or = Titanium.UI.createLabel({
		text:'oppure',
		font:{
     		fontSize:18,
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
		height:20,
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
	
	scrollView.add(title);
	//scrollView.add(description);
	scrollView.add(description);
	scrollView.add(newReport);
	scrollView.add(or);
	scrollView.add(showMarkers);
	scrollView.add(timeLine);
	scrollView.add(new SmallRectangleLogged1());
	scrollView.add(new SmallRectangleLogged2());
	scrollView.add(fakeView);
	self.add(scrollView);
	
	return self;
	
}

module.exports = MainPage;
