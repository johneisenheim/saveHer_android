function SocialRectangle(){
	
	var Facebook = require('social/Facebook');
	var ggParams = {
    	clientId: '331092282221.apps.googleusercontent.com',
    	clientSecret: 'U7maR77FSyi8JYTacYpAwqts',
    	redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
    	devKey: 'AIzaSyBadl5XuzYbwWW8HAJvodz3iF3JCUK2L3g',
	};
	var Google = require('social/Google').GoogleService;
	var Social = require('social/Social');
	
	var postLayoutCheck = false;
	
	var container = Ti.UI.createView({
		width:'95%',
		height:176,
		backgroundColor:'transparent',
		layout:'vertical',
		top:25
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:174,
		backgroundColor:'#ffffff',
		layout:'vertical',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	var separator1 = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:0
	});
	
	var separator2 = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:0
	});
	
	var separator3 = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:0
	});
	
	var row1 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:58,
		width:'100%',
		//layout:'horizontal',
		top:0
	});
	
	var row2 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:58,
		width:'100%'
		//layout:'horizontal'
	});
	
	var row3 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:58,
		width:'100%'
		//layout:'horizontal'
	});
	
	var label1 = Titanium.UI.createLabel({
		text:'Facebook',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		left:0,
   		width: Ti.UI.FILL
	});
	
	var label2 = Titanium.UI.createLabel({
		text:'Google+',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		width:Ti.UI.FILL
	});
	
	var label3 = Titanium.UI.createLabel({
		text:'Linkedin',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15,
   		width:Ti.UI.FILL
	}); 
	
	var rightIcon1 = Titanium.UI.createView({
		width:27,
		height:27,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	var leftIcon1 = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_facebook.png',
		top:10,
		left:13
	});
	
	var rightIcon2 = Titanium.UI.createView({
		width:27,
		height:27,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	var leftIcon2 = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_google.png',
		top:10,
		left:13
	});
	
	var rightIcon3 = Titanium.UI.createView({
		width:27,
		height:27,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_tap.png',
		top:15,
		right:10
	});
	
	var leftIcon3 = Titanium.UI.createView({
		width:30,
		height:30,
		backgroundColor:'#ffffff',
		backgroundImage: '/images/ic_linkedin.png',
		top:10,
		left:13
	});
	
	row1.add(leftIcon1);
	row1.add(label1);
	row1.add(rightIcon1);
	
	row2.add(leftIcon2);
	row2.add(label2);
	row2.add(rightIcon2);
	
	row3.add(leftIcon3);
	row3.add(label3);
	row3.add(rightIcon3);

	row1.addEventListener('click', function(){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		if(!Ti.Network.getOnline()){
			var dialog = Ti.UI.createAlertDialog({
    			message: 'Il tuo dispositivo non è connesso ad una rete, pertanto non puoi effettuare il login.',
    			ok: 'Okay',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
			return;
		}
		label1.text = 'Attendi...';
		new Facebook().openWin();
	});
	
	row2.addEventListener('click', function(){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		if(!Ti.Network.getOnline()){
			var dialog = Ti.UI.createAlertDialog({
    			message: 'Il tuo dispositivo non è connesso ad una rete, pertanto non puoi effettuare il login.',
    			ok: 'Okay',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
			return;
		}
		label2.text = 'Attendi...';
		var google = new Google(ggParams);
		google.login(function(e){
    			Ti.API.info('Token: ' + google.accessToken());
    			Ti.API.info(JSON.stringify(e));

    			var params = {
        			params: [],
        			call: 'userinfo',
        			method: 'GET'
    			};
 
    			google.callMethod(params, function(e) {
        			Ti.API.info(e.data);
        			var parsed = JSON.parse(e.data); 
        			Ti.API.info("MYPARSED"+parsed);
        			Titanium.Network.removeAllHTTPCookies();
					Titanium.Network.removeAllSystemCookies();
        			//"{\"nick\":\""+tvtextfield.value+"\",\"name\":\""+parsed.given_name+"\",\"lname\":\""+parsed.family_name+"\",\"photo\":\""+parsed.picture+"\",\"mail\":\""+parsed.email+"\",\"social\":\"google\",\"id\":\""+parsed.id+"\"}";
        			Ti.App.Properties.setString('first_name',parsed.given_name);
					Ti.App.Properties.setString('last_name',parsed.family_name);
					Ti.App.Properties.setString('picture', parsed.picture);
					Ti.App.Properties.setString('mail',parsed.email);
					Ti.App.Properties.setString('id',parsed.id);
					Ti.App.Properties.setString('login_type','google');
					Ti.App.fireEvent('goto_page',{page:2});
				});
			});
	});
	
	row3.addEventListener('click', function(){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		if(!Ti.Network.getOnline()){
			var dialog = Ti.UI.createAlertDialog({
    			message: 'Il tuo dispositivo non è connesso ad una rete, pertanto non puoi effettuare il login.',
    			ok: 'Okay',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
			return;
		}
		label3.text = 'Attendi...';
		var linkedin = Social.create({
			consumerSecret : 'COb2k9sZVHqTEi8Z',
			consumerKey : '77bncz1h0n12ac',
			site: 'linkedin'
		});
		var opts = '';
		opts.message = '';
		opts.success = '';
		opts.error = '';
		linkedin.getProfileLinkedin(opts);
	});
	
	Ti.App.addEventListener('login_closed', function(e){
		saveHer.stopExecution = false;
		switch(e.what){
			case 'facebook':
				label1.text = 'Facebook';
			break;
			case 'google':
				label2.text = 'Google+';
			break;
			case 'linkedin':
				label3.text = 'Linkedin';
			break;
			case 'all':
				label1.text = 'Facebook';
				label2.text = 'Google+';
				label3.text = 'Linkedin';
			break;
		}
	});
	
	whiteView.add(row1);
	whiteView.add(separator1);
	whiteView.add(row2);
	whiteView.add(separator2);
	whiteView.add(row3);
	whiteView.add(separator3);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
	
}

module.exports = SocialRectangle;
