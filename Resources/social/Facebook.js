function Facebook(){

	var self = Titanium.UI.createWindow({
		backgroundColor:'white',
		exitOnClose:false,
		layout:'vertical',
		orientationModes:[Titanium.UI.PORTRAIT]
	});
	
	var request = Titanium.Network.createHTTPClient({
		onload: function(e){
			var parsed = JSON.parse(this.responseText);
			//var text = "{\"nick\":\""+nickname+"\",\"name\":\""+parsed.first_name+"\",\"lname\":\""+parsed.last_name+"\",\"photo\":\"http://graph.facebook.com/"+parsed.id+"/picture?width=500&height=500\",\"mail\":\""+parsed.email+"\",\"social\":\"facebook\",\"id\":\""+parsed.id+"\"}";
			Ti.App.Properties.setString('first_name',parsed.first_name);
			Ti.App.Properties.setString('last_name',parsed.last_name);
			Ti.App.Properties.setString('mail',parsed.email);
			Ti.App.Properties.setString('id',parsed.id);
			Ti.App.Properties.setString('login_type','facebook');
			Ti.App.Properties.setString('picture', 'http://graph.facebook.com/'+parsed.id+'/picture?width=500&height=500');
			Ti.API.info(parsed.email+','+parsed.last_name+','+parsed.first_name);
			Titanium.Network.removeAllHTTPCookies();
			Titanium.Network.removeAllSystemCookies();
			saveHer.stopExecution = false;
			
			Ti.App.fireEvent('goto_page',{page:2});
			self.close();
		},
		onerror: function(e){
			a.setMessage("C\'è stato un errore nell\'invio della richiesta. Ti preghiamo di riprovare più tardi!");
        	a.show();
        	self.close();
        	saveHer.stopExecution = false;
		}
	
	});
	
	var aWebView = Ti.UI.createWebView({
		url : 'https://www.facebook.com/dialog/oauth?client_id=565787606817344&redirect_uri=https://www.facebook.com/connect/login_success.html&response_type=token&scope=email',
		width:'100%',
		height:'100%',
		top:0,
		left:0,
		cacheMode: Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE
	});

	aWebView.addEventListener('load', function(e) {
		//self.remove(label);
		Ti.API.info('webview loaded: '+ e.url);
		if( e.url.indexOf('access_token') != -1 ){
			var access_token = e.url.split('=');
			Ti.API.info(access_token[1]);
			fireRequest(access_token[1]);
		}
	});
	
	function fireRequest(token){
		Ti.API.info("fireRequest");
		request.open("GET",'https://graph.facebook.com/me?access_token='+token);
		Ti.API.info("open parameters");
		request.send();
	}

	self.openWin = function(){
		self.open();
	};
	
	self.add(aWebView);
	//aWebView.add(spinner);
	
	self.addEventListener('androidback', function(){
		Ti.App.fireEvent('login_closed',{what:'facebook'});
		self.close();
	});
	
	return self;
	
}
module.exports = Facebook;
