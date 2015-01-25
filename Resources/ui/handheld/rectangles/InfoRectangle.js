function InfoRectangle(){
	
	var container = Ti.UI.createView({
		width:'95%',
		height:230,
		backgroundColor:'transparent',
		layout:'vertical',
		top:25
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:228,
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
	
	var logo = Titanium.UI.createView({
		width:100,
		height:100,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_logo_big.png',
		top:15
	});
	
	var label = Titanium.UI.createLabel({
		text: 'saveHer',
		font:{
     		fontSize:26,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:15
	}); 
	
	var version = Titanium.UI.createLabel({
		text: 'Versione: '+Titanium.App.version,
		font:{
     		fontSize:16,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	}); 
	
	var site = Titanium.UI.createLabel({
		text: 'www.appsaveheritage.com',
		font:{
     		fontSize:16,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:5
	}); 
	
	site.addEventListener('click', function(){
		Titanium.Platform.openURL('http://www.appsaveheritage.com');
	});
	
	whiteView.add(logo);
	whiteView.add(label);
	whiteView.add(version);
	whiteView.add(site);
	container.add(whiteView);
	container.add(shadow);
	
	return container;
}

module.exports = InfoRectangle;
