function PreviewRectangle(){
	
	var Preview = require('ui/gtablet/ui_elements/Preview');
	var preview = new Preview();
	var currentPath = null;
	var Listeners = require('ui/gtablet/external/Listeners');
	var listeners = new Listeners();
	var StoredNoGPSMap = require('ui/gtablet/pages/StoredNoGPSMap');
	var customCombo = null;
	/*if (Ti.Platform.Android.API_LEVEL <= 10 ){
		StoredNoGPSMap = require('ui/handheld/pages/StoredNoGPSMapWeb');
	}else{
		StoredNoGPSMap = require('ui/handheld/pages/StoredNoGPSMap');
	}*/
	
	var container = Ti.UI.createView({
		width:'95%',
		height:230,
		backgroundColor:'transparent',
		layout:'vertical',
		bubbleParent:false,
		top:40
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:227,
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
	
	var separator = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:20
	});
	
	var underButtons = Ti.UI.createView({
		width:'100%',
		height:60,
		//layout:'horizontal',
		top:5
	});
	
	var lens = Ti.UI.createView({
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_airplane.png',
		width:40,
		height:40,
		left:'20%'
	});
	
	var album = Ti.UI.createView({
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_5066.png',
		width:40,
		height:40,
		right:'20%'
	});
	
	var longSeparator = Ti.UI.createView({
		height:40,
		width:0.5,
		backgroundColor:'#DCDCDC',
		left:'50%'
	});
	
	var status = Titanium.UI.createLabel({
		text:'',
		font:{
     		fontSize:19,
      		fontFamily:"Lato-Italic",
   		},
   		color:'#65686D',
   		textAlign:'center',
   		width:Ti.UI.SIZE,
   		top:5
	});
	
	underButtons.add(lens);
	underButtons.add(longSeparator);
	underButtons.add(album);
	
	lens.addEventListener('click', function(){
		if( currentPath == null )
			return;
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		status.text = 'Attendi...';
		var jDataFile = Titanium.Filesystem.getFile(currentPath+'/date.json');
		Ti.API.info(jDataFile.getNativePath());
		var parsed = JSON.parse(jDataFile.read());
		if( parsed.latitude == '' && parsed.longitude == '' ){
			var storedNoGPSMap = new StoredNoGPSMap();
			storedNoGPSMap.openWin(status, currentPath, parsed, preview, customCombo, currentPath);
		}else{
			if( !Titanium.Network.getOnline() ){
				var dialog = Ti.UI.createAlertDialog({
   					message: "Sembra che il tuo dispositivo non sia connesso ad una rete. Riprova, per piacere.",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				status.text = '';
  				return;
			}
			listeners.sendRestoredReport(status, currentPath, parsed, preview, customCombo, currentPath);
		}
	});
	
	album.addEventListener('click', function(){
		if( currentPath == null )
			return;
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		status.text = 'Attendi...';
		var toDelete = Titanium.Filesystem.getFile(currentPath);
		if(toDelete.deleteDirectory(true)){
			status.text = 'Fatto';
			customCombo.reloadCombo();
			preview.resetReport();
			setTimeout(function(){
				status.text = '';
				saveHer.stopExecution = false;
				Ti.App.fireEvent('reload_circle',{});
			},2000);
		}else{
			status.text = 'Riprova!';
			customCombo.reloadCombo();
			preview.resetReport();
			setTimeout(function(){
				status.text = '';
				saveHer.stopExecution = false;
			},2000);
		}
	});
	
	container.setCurrentPath = function(path){
		currentPath = path;
	};
	
	container.setLabelStatus = function(status){
		status.text = status;
	};
	
	container.setReport = function(data){
		preview.setReport(data);
	};
	
	container.resetReport = function(){
		preview.resetReport();
		currentPath = null;
	};
	
	container.setCustomCombo = function(_combo){
		customCombo = _combo;
	};
	
	Ti.App.addEventListener('report_complete', function(){
		status.text = '';
	});
	
	whiteView.add(preview);
	whiteView.add(status);
	whiteView.add(separator);
	whiteView.add(underButtons);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
	
}

module.exports = PreviewRectangle;
