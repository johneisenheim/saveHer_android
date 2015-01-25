function FirstPage(){
	var Buttons = require('ui/handheld/ui_elements/Buttons');
	var SmallRectangleWizard1 = require('ui/handheld/rectangles/SmallRectangleWizard1');
	var SmallRectangleWizard2 = require('ui/handheld/rectangles/SmallRectangleWizard2');
	var smallRectangleWizard2 = new SmallRectangleWizard2();
	var NicknameRectangle = require('ui/handheld/rectangles/NicknameRectangle');
	var nicknameRectangle = new NicknameRectangle();
	var userChoosePicker = false;
	
	var self = Titanium.UI.createScrollView({
		backgroundColor:'#eeeeee',
		width:'100%',
		height:'100%',
		layout:'vertical'
	});
	
	var title = Titanium.UI.createLabel({
		text:'saveHer',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Benvenuto in saveHer. Con questa applicazione è possibile salvaguardare i monumenti che stai visitando inviando una segnalazione ai nostri server.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var loginDescription = Titanium.UI.createLabel({
		text:'Se è la prima volta che utilizzi saveHer, inizia la procedura guidata di registrazione.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	}); 
	
	var restoreDescription = Titanium.UI.createLabel({
		text:'Altrimenti, ripristina il tuo profilo inserendo il nickname con il quale ti sei registrato e premi poi il pulsante Ripristina.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	}); 
	
	var restoreFromTxtDescription = Titanium.UI.createLabel({
		text:'Hai già utilizzato saveHer su questo dispositivo. Se il tuo nickname compare nella lista sottostante, sceglilo direttamente e ripristina il tuo profilo.',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'90%'
	});
	
	var restore = Titanium.Network.createHTTPClient({
		onload: function(e){
			var parsed = JSON.parse(this.responseText);
			if( parsed.registered ){
				//var txt = "{\"nick\":\""+yetregtextfield.value+"\",\"name\":\""+parsed.name+"\",\"lname\":\""+parsed.lastname+"\",\"photo\":\""+parsed.photo+"\",\"mail\":\""+parsed.email+"\",\"social\":\""+parsed.social+"\",\"id\":\""+parsed.id+"\"}";
				var username = '';
				Ti.App.Properties.setInt('wizard',1);
				Ti.App.Properties.setString('mail',parsed.mail);
				Ti.App.Properties.setString('first_name', parsed.name);
				Ti.App.Properties.setString('last_name', parsed.lastname);
				Ti.App.Properties.setString('picture', parsed.photo);
				Ti.App.Properties.getString('login_type', parsed.social);
				if( smallRectangleWizard2.getFieldValue() != '' ){
					Ti.App.Properties.setString('nickname',smallRectangleWizard2.getFieldValue());
					username = smallRectangleWizard2.getFieldValue();
				}else{ 
					Ti.App.Properties.setString('nickname',nicknameRectangle.getNickname());
					username = nicknameRectangle.getNickname();
				}
				saveHer.stopExecution = false;
				var pastUser = Titanium.Filesystem.getFile('appdata://','pastUser.txt');
				if( !pastUser.exists() ){
					pastUser.write(username+";", true);
				}else{
					var users = pastUser.read().toString();
					if( users.indexOf(username) == -1 ){
						pastUser.write(username+";", true);
					}
				}
				saveHer.stopExecution = false;
  				button.setButtonTitle('Ripristina');
				Ti.App.fireEvent('goto_app',{});
			}else{
				var dialog = Ti.UI.createAlertDialog({
   					message: "Non è stato trovato nessun nickname che corrisponda a ciò che hai immesso. Per favore, controlla le tue credenziali.",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				saveHer.stopExecution = false;
  				button.setButtonTitle('Ripristina');
				}
			},
			onerror: function(e){
				var dialog = Ti.UI.createAlertDialog({
   					message: "Non è stato possibile effettuare la richiesta. Riprova, per favore.",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				saveHer.stopExecution = false;
  				button.setButtonTitle('Ripristina');
			},
			timeout:5000
	});
	
	
	var button = new Buttons();
	button.setButtonTitle('Ripristina');
	button.setButtonTop(30);
	button.addEventListener('click', function(){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		if( !Ti.Network.getOnline() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per poter ripristinare le tue informazioni, per favore connetti il tuo dispositivo alla rete.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Ripristina');
  			return;
		}
		button.setButtonTitle('Attendi...');
		if ( smallRectangleWizard2.getFieldValue() == '' && nicknameRectangle.getNickname() == ''){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per poter ripristinare le tue informazioni, per favore inserisci il tuo nickname o sceglilo dal menù a tendina.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Ripristina');
  			return;
		}
		if ( smallRectangleWizard2.getFieldValue() != '' && nicknameRectangle.getNickname() != ''){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per poter ripristinare le tue informazioni, per favore scegli se digitare il nickname o recuperarlo dal menù a tendina.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			button.setButtonTitle('Ripristina');
  			return;
		}
		button.setButtonTitle('Attendi...');
		var params = {
			nick: ''
		};
		if( smallRectangleWizard2.getFieldValue() != '' )
			params.nick = smallRectangleWizard2.getFieldValue();
		else params.nick = nicknameRectangle.getNickname();
		Ti.API.info(params.nick);
		restore.open('POST','http://www.appsaveheritage.com/restore.php');
		restore.send(params);
	});
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:20,
		backgroundColor:'transparent'
	});
	
	self.add(title);
	self.add(description);
	self.add(loginDescription);
	self.add(new SmallRectangleWizard1());
	self.add(restoreDescription);
	self.add(smallRectangleWizard2);
	Ti.API.info(nicknameRectangle.getNicknamesList());
	if( nicknameRectangle.getNicknamesList() != 0 ){
		self.add(restoreFromTxtDescription);
		self.add(nicknameRectangle);
	}
	self.add(button);
	self.add(fakeView);
	
	return self;
}

module.exports = FirstPage;
