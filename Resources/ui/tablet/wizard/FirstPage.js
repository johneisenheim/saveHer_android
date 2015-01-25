function FirstPage(){
	var Buttons = require('ui/tablet/ui_elements/Buttons');
	var SmallRectangleWizard1 = require('ui/tablet/rectangles/SmallRectangleWizard1');
	var SmallRectangleWizard2 = require('ui/tablet/rectangles/SmallRectangleWizard2');
	var smallRectangleWizard2 = new SmallRectangleWizard2();
	var NicknameRectangle = require('ui/tablet/rectangles/NicknameRectangle');
	var nicknameRectangle = new NicknameRectangle();
	var userChoosePicker = false;
	
	var self = Titanium.UI.createScrollView({
		backgroundColor:'#f6f6f6',
		width:'100%',
		height:'100%',
		//layout:'vertical'
	});
	
	var view = Titanium.UI.createView({
		width:'100%',
		height:Ti.UI.SIZE,
		backgroundColor:'#f6f6f6',
		layout:'vertical'
	});
	
	var title = Titanium.UI.createLabel({
		text:'saveHer',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		top:5
	});
	
	var description = Titanium.UI.createLabel({
		text:'Benvenuto in saveHer. Con questa applicazione è possibile salvaguardare i monumenti che stai visitando inviando una segnalazione ai nostri server.',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:20,
   		width:'95%'
	});
	
	var loginDescription = Titanium.UI.createLabel({
		text:'Se è la prima volta che utilizzi saveHer, inizia la procedura guidata di registrazione.',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:45,
   		width:'95%'
	}); 
	
	var restoreDescription = Titanium.UI.createLabel({
		text:'Altrimenti, ripristina il tuo profilo inserendo il nickname con il quale ti sei registrato e premi poi il pulsante Ripristina.',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:45,
   		width:'95%'
	}); 
	
	var restoreFromTxtDescription = Titanium.UI.createLabel({
		text:'Hai già utilizzato saveHer su questo dispositivo. Se il tuo nickname compare nella lista sottostante, sceglilo direttamente e ripristina il tuo profilo.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:45,
   		width:'90%'
	});
	
	var restore = Titanium.Network.createHTTPClient({
		onload: function(e){
			var parsed = JSON.parse(this.responseText);
			if( parsed.registered ){
				//var txt = "{\"nick\":\""+yetregtextfield.value+"\",\"name\":\""+parsed.name+"\",\"lname\":\""+parsed.lastname+"\",\"photo\":\""+parsed.photo+"\",\"mail\":\""+parsed.email+"\",\"social\":\""+parsed.social+"\",\"id\":\""+parsed.id+"\"}";
				Ti.App.Properties.setInt('wizard',1);
				Ti.App.Properties.setString('mail',parsed.mail);
				Ti.App.Properties.setString('first_name', parsed.name);
				Ti.App.Properties.setString('last_name', parsed.lastname);
				Ti.App.Properties.setString('picture', parsed.photo);
				if( smallRectangleWizard2.getFieldValue() != '' ){
					Ti.App.Properties.setString('nickname',smallRectangleWizard2.getFieldValue());
					username = smallRectangleWizard2.getFieldValue();
				}else{ 
					Ti.App.Properties.setString('nickname',nicknameRectangle.getNickname());
					username = nicknameRectangle.getNickname();
				}
				saveHer.stopExecution = false;
				Ti.App.fireEvent('goto_app',{});
				var pastUser = Titanium.Filesystem.getFile('appdata://','pastUser.txt');
				if( !pastUser.exists() ){
					pastUser.write(username+";", true);
				}else{
					var users = pastUser.read().toString();
					if( users.indexOf(username) == -1 ){
						pastUser.write(username+";", true);
					}
				}
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
			}
	});
	
	
	var button = new Buttons();
	button.setButtonTitle('Ripristina');
	button.setButtonTop(50);
	button.addEventListener('click', function(){
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
	
	view.add(title);
	view.add(description);
	view.add(loginDescription);
	view.add(new SmallRectangleWizard1());
	view.add(restoreDescription);
	view.add(smallRectangleWizard2);
	Ti.API.info(nicknameRectangle.getNicknamesList());
	if( nicknameRectangle.getNicknamesList() != 0 ){
		view.add(restoreFromTxtDescription);
		view.add(nicknameRectangle);
	}
	view.add(button);
	view.add(fakeView);
	self.add(view);
	
	return self;
}

module.exports = FirstPage;
