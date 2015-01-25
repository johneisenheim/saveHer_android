function ThirdPage(){
	var SmallRectangleWizard3 = require('ui/tablet/rectangles/SmallRectangleWizard3');
	var SmallRectangleWizard4 = require('ui/tablet/rectangles/SmallRectangleWizard4');
	var SmallRectangleWizard5 = require('ui/tablet/rectangles/SmallRectangleWizard5');
	var Buttons = require('ui/tablet/ui_elements/Buttons');
	
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
		text:'Step 2',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Abbiamo finito: inserisci un nickname per poter essere riconosciuto sui nostri server, e poi registrati.',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:40,
   		width:'95%'
	});
	
	var smallRectangleWizard3 = new SmallRectangleWizard3();
	
	var mailRecap = Titanium.UI.createLabel({
		text:'Di seguito è riportato il tuo indirizzo email. Se non è specificato, per favore inseriscine uno valido: potremo così contattarti quando le segnalazioni che invii saranno risolte.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:40,
   		width:'90%'
	}); 
	
	var smallRectangleWizard4 = new SmallRectangleWizard4();
	
	var smallRectangleWizard5 = new SmallRectangleWizard5();
	
	var cdialog = Ti.UI.createAlertDialog({
    	cancel: 1,
    	buttonNames: ['Si', 'No'],
    	message: 'Il nickname che hai scelto è disponibile. Sei sicuro di volerlo impostare?',
    	title: 'saveHer'
  	});
	
	var button = new Buttons();
	button.setButtonTitle('Registrati');
	button.setButtonTop(40);
	button.addEventListener('click', function(){
		if( !Ti.Network.getOnline() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Non sembra esserci rete dati. Per favore connetti il tuo dispositivo alla rete.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			return;
		}
		var nickname = smallRectangleWizard3.getFieldValue();
		var email = smallRectangleWizard4.getFieldValue();
		if ( nickname != '' ){
			if( email != '' ){
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   				if(reg.test(email) == false) {
        			var dialog = Ti.UI.createAlertDialog({
   						message: "Per poter effettuare la registrazione, per favore inserisci un indirizzo email valido.",
    					ok: 'Ho capito',
    					title: 'saveHer'
  					}).show();
  					return;
    			} 
    			button.setButtonTitle('Attendi...');
				//self.touchEnabled = false;
				var reg = Titanium.Network.createHTTPClient({
					onload:function(e){
						button.setButtonTitle('Registrati');
						self.touchEnabled = true;
						Ti.API.info(reg.responseText);
						var json = reg.responseText;  
						var parsed = JSON.parse(json);
						if( parsed.registered ){
							registerUser(nickname,smallRectangleWizard5.getSwitchValue());
						}else{
							var dialog = Ti.UI.createAlertDialog({
   								message: "Il nickname che hai inserito è stato già scelto. Inseriscine un altro, per favore.",
    							ok: 'Ok',
    							title: 'saveHer'
  							}).show();
						}
					},
					onerror:function(e){
						var dialog = Ti.UI.createAlertDialog({
   									message: "saveHer non è riuscita a contattare il server. Riprova, per piacere.",
    								ok: 'Riprovo',
    								title: 'saveHer'
  								}).show();
					}
				});
				var params = {
					nick: nickname
				};
			
				reg.open('POST','http://www.appsaveheritage.com/reguser.php');
				reg.send(params);
			}else{
				var dialog = Ti.UI.createAlertDialog({
   					message: "Sembra non ci sia nessun indirizzo e-mail. Per favore, inseriscilo per completare la registrazione.",
    				ok: 'Ho capito',
    				title: 'saveHer'
  				}).show();
			}
		}else{
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per poter impostare il tuo nickname devi prima inserirlo!",
    			ok: 'Ho capito',
    			title: 'saveHer'
  			}).show();
		}
	});
	
	self.setMailAddress = function(mail){
		smallRectangleWizard4.setFieldValue(mail);
	};
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:20,
		backgroundColor:'transparent'
	});
	
	view.add(title);
	view.add(description);
	view.add(smallRectangleWizard3);
	view.add(mailRecap);
	view.add(smallRectangleWizard4);
	view.add(smallRectangleWizard5);
	view.add(button);
	view.add(fakeView);
	
	self.add(view);
	
	return self;
}

function registerUser(username, basicSwitchValue){
	if( !Ti.Network.getOnline() ){
		var dialog = Ti.UI.createAlertDialog({
   			message: "Per poter effettuare la registrazione, per favore connetti il tuo dispositivo alla rete.",
    		ok: 'Ok',
    		title: 'saveHer'
  		}).show();
	}else{
		var socialused = Ti.App.Properties.getString('login_type');
		Ti.App.Properties.setString('nickname', username);
		switch(socialused){
			case 'facebook':
				params = {
					nick:username,
					mail: Ti.App.Properties.getString('mail'),
					id: Ti.App.Properties.getString('id'),
					photo: "http://graph.facebook.com/"+Ti.App.Properties.getString('id')+"/picture?width=500&height=500",
					social:'facebook',
					name:Ti.App.Properties.getString('first_name'),
					lastname:Ti.App.Properties.getString('last_name')
				};
				Ti.API.info(params);
				break;
				case 'linkedin':
					params = {
						nick: username,
						mail: '',
						id: 'none',
						photo: Ti.App.Properties.getString('picture'),
						social:'linkedin',
						name:Ti.App.Properties.getString('first_name'),
						lastname:Ti.App.Properties.getString('last_name')
					};
				break;
				case 'google':
					//var pparsed = JSON.parse(textgoogle);
					params = {
						nick: username,
						mail: Ti.App.Properties.getString('mail'),
						id: Ti.App.Properties.getString('id'),
						photo: Ti.App.Properties.getString('picture'),
						social:'google',
						name:Ti.App.Properties.getString('first_name'),
						lastname:Ti.App.Properties.getString('last_name')
					};
					Ti.API.info(params);
				break;
			}
					
			var regme = Titanium.Network.createHTTPClient({
					onload:function(e){
						var json = regme.responseText;  
						Ti.API.info("json from regme "+json);
						var parsed = JSON.parse(json);
						if( parsed.registered ){
							//Ti.App.fireEvent('change_page', {to:'logged', first:true});
							var pastUser = Titanium.Filesystem.getFile('appdata://','pastUser.txt');
							if( !pastUser.exists() ){
								pastUser.write(username+";", true);
							}else{
								var users = pastUser.read().toString();
								if( users.indexOf(username) == -1 ){
									pastUser.write(username+";", true);
								}
							}
							
							Titanium.App.Properties.setInt('wizard',1);
							Ti.App.fireEvent('goto_app', {});
							//self.close();
						}else{
							var dialog = Ti.UI.createAlertDialog({
   								message: "Il nickname che hai scelto non è disponibile. Prova ad inserirne un altro.",
    							ok: 'Riprovo',
    							title: 'saveHer'
  							}).show();
						}
					},
					onerror:function(e){
						var dialog = Ti.UI.createAlertDialog({
   							message: "saveHer non è riuscita a contattare il server. Riprova, per piacere.",
    						ok: 'Riprovo',
    						title: 'saveHer'
  						}).show();
					}
				});
				if (basicSwitchValue ){
					params.newsletter = 1;
				}else params.newsletter = 0;
				regme.open('POST','http://www.appsaveheritage.com/reg.php');
				regme.send(params);
		}
}

module.exports = ThirdPage;

