function Markers(){
	var MapRectangle = null;
	var MapRectangleWeb = null;
	var mapRectangle = null;
	var MainPage = require('ui/handheld/pages/MainPage');
	var firstPostLayout = true;
	
	if(Titanium.Platform.Android.API_LEVEL <=10 ){
		MapRectangleWeb = require('ui/handheld/rectangles/MapRectangleWeb');
		mapRectangle = new MapRectangleWeb();
	}else{
		MapRectangle = require('ui/handheld/rectangles/MapRectangle');
		mapRectangle = new MapRectangle();
	}
		
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		layout:'vertical',
		orientationModes:[Titanium.UI.PORTRAIT],
		title:'Segnalazioni'
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('restore_icon');
		var mainPage = new MainPage();
    	mainPage.open();
		self.close();
	});
	
	self.add(mapRectangle);
	
	return self;
}

module.exports = Markers;
