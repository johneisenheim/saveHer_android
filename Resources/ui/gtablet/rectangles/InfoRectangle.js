function InfoRectangle(){
	
	var container = Ti.UI.createView({
		width:'90%',
		height:300,
		backgroundColor:'transparent',
		layout:'vertical',
		top:40
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:297,
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
	
	var logo = Titanium.UI.createView({
		width:120,
		height:120,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_logo_big.png',
		top:30
	});
	
	var label = Titanium.UI.createLabel({
		text: 'saveHer',
		font:{
     		fontSize:31,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:20
	}); 
	
	var version = Titanium.UI.createLabel({
		text: 'Versione: '+Titanium.App.version,
		font:{
     		fontSize:19,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:10
	}); 
	
	var site = Titanium.UI.createLabel({
		text: 'www.appsaveheritage.com',
		font:{
     		fontSize:19,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#65686D',
   		textAlign:'center',
   		top:10
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
