function Profile(len){

	var profileRectangle = null;
	var Buttons = require('ui/handheld/ui_elements/Buttons');
	var repDir = Titanium.Filesystem.getFile('appdata://reports');
	var repDirLen = repDir.getDirectoryListing().length;
	var CustomCombo = require('ui/handheld/ui_elements/CustomCombo');
	var customCombo = new CustomCombo();
	var PreviewRectangle = require('ui/handheld/rectangles/PreviewRectangle');
	var previewRectangle = new PreviewRectangle();
	customCombo.setPreviewRectangle(previewRectangle);
	previewRectangle.setCustomCombo(customCombo);
	
	if( repDirLen > 0 ){
		var ProfileReportsRectangle = require('ui/handheld/rectangles/ProfileReportsRectangle');
		profileRectangle = new ProfileReportsRectangle();
	}else{
		var ProfileRectangle = require('ui/handheld/rectangles/ProfileRectangle');
		profileRectangle = new ProfileRectangle();
	}
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f8f8f8',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		orientationModes:[Titanium.UI.PORTRAIT]
	});
	
	self.activity.onCreateOptionsMenu = function(e) { 
		var actionBar = self.activity.actionBar;
		actionBar.title = 'Profilo';
	};
	
	var title = Titanium.UI.createLabel({
		text:'Profilo',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		top:10
	});
	
	var scrollView = Titanium.UI.createScrollView({
		width:'100%',
		height:'100%',
		backgroundColor:'#f6f6f6',
		layout:'vertical'
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
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var button = new Buttons();
	button.setButtonTitle('Logout');
	button.setButtonTop(25);
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
					Wizard = require('ui/handheld/wizard/Wizard');
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
     		fontSize:17,
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
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:40,
   		width:'95%'
	});
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:20,
		backgroundColor:'transparent'
	});
	
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('profile_closed', {});
		self.close();
	});
	
	scrollView.add(title);
	scrollView.add(description);
	scrollView.add(profileRectangle);
	
	if( repDirLen > 0 ){
		scrollView.add(description2);
		scrollView.add(previewRectangle);
		scrollView.add(customCombo);
	}
	
	scrollView.add(logoutDescription);
	scrollView.add(button);
	scrollView.add(fakeView);
	self.add(scrollView);
	
	return self;
	
}

module.exports = Profile;
