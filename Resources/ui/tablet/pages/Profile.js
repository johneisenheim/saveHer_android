function Profile(len){

	var profileRectangle = null;
	var Buttons = require('ui/tablet/ui_elements/Buttons');
	var repDir = Titanium.Filesystem.getFile('appdata://reports');
	var repDirLen = repDir.getDirectoryListing().length;
	var CustomCombo = require('ui/gtablet/ui_elements/CustomCombo');
	var customCombo = new CustomCombo();
	var PreviewRectangle = require('ui/gtablet/rectangles/PreviewRectangle');
	var previewRectangle = new PreviewRectangle();
	customCombo.setPreviewRectangle(previewRectangle);
	previewRectangle.setCustomCombo(customCombo);

	
	if( repDirLen > 0 ){
		var ProfileReportsRectangle = require('ui/tablet/rectangles/ProfileReportsRectangle');
		profileRectangle = new ProfileReportsRectangle();
	}else{
		var ProfileRectangle = require('ui/tablet/rectangles/ProfileRectangle');
		profileRectangle = new ProfileRectangle();
	}
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT],
		title:'Profilo'
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
	};
	
	var view = Titanium.UI.createScrollView({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:Ti.UI.SIZE,
		layout:'vertical'
	});
	
	var shadow = Titanium.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	var title = Titanium.UI.createLabel({
		text:'Profilo',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var socialString = '';
	switch(Ti.App.Properties.getString('login_type')){
		case 'facebook':
			socialString = 'Facebook';
		break;
		case 'google':
			socialString = 'Google+';
		break;
		case 'linkedin':
			socialString = 'Linkedin';
		break;
	}
	
	var description = Titanium.UI.createLabel({
		text:'Ecco le informazioni ricevute da '+socialString+' a seguito del tuo login.',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var button = new Buttons();
	button.setButtonTitle('Logout');
	button.setButtonTop(40);
	button.addEventListener('click', function(){
		var cdialog = Ti.UI.createOptionDialog({title:'Vuoi effettuare il logout?',buttonNames:['Conferma','Annulla']});
		cdialog.show();
		cdialog.addEventListener('click', function(e){
			if ( e.index == 0 ){
				profileRectangle.cleanUp();
				setTimeout(function(){
					Ti.App.Properties.removeProperty('wizard');
					Ti.App.Properties.removeProperty('mail');
					Ti.App.Properties.removeProperty('first_name');
					Ti.App.Properties.removeProperty('last_name');
					Ti.App.Properties.removeProperty('picture');
					Ti.App.Properties.removeProperty('nickname');
					Ti.App.Properties.removeProperty('showMapDialog');
					Wizard = require('ui/tablet/wizard/Wizard');
	    			var wizard = new Wizard();
	    			wizard.open();
	    			self.close();
	    			Ti.App.fireEvent('close_app',{});
				},2000);
			}
		});
	});
	
	var logoutDescription = Titanium.UI.createLabel({
		text:'Non sei tu o vuoi cambiare utente? Effettua il logout.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:20,
   		width:'90%'
	});
	
	var description2 = Titanium.UI.createLabel({
		text:'Scegli il report memorizzato: puoi inviarlo o eliminarlo tramite gli appositi pulsanti.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:40,
   		width:'95%'
	});
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:40,
		backgroundColor:'transparent'
	});
	
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('profile_closed', {});
		self.close();
	});
	
	view.add(title);
	view.add(description);
	view.add(profileRectangle);
	if( repDirLen > 0 ){
		view.add(description2);
		view.add(previewRectangle);
		view.add(customCombo);
	}
	view.add(logoutDescription);
	view.add(button);
	view.add(fakeView);
	view.add(shadow);
	self.add(view);
	
	return self;
	
}

module.exports = Profile;
