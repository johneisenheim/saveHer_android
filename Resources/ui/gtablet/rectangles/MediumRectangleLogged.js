function MediumRectangleLogged(){
	
	var postLayoutCheck = false;
	
	var container = Ti.UI.createView({
		width:'95%',
		height:250,
		backgroundColor:'transparent',
		layout:'vertical',
		top:15
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:248,
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
		top:5
	});
	
	var separator2 = Ti.UI.createView({
		height:0.5,
		width:'97%',
		backgroundColor:'#DCDCDC',
		top:0
	});
	
	var row1 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:48,
		width:'100%',
		layout:'horizontal',
		top:0
	});
	
	var row2 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:48,
		width:'100%',
		layout:'horizontal'
	});
	
	var row3 = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:48,
		width:'100%',
		layout:'horizontal'
	});
	
	var title = Titanium.UI.createLabel({
		text:'Istruzioni',
		font:{
     		fontSize:21,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:10,
   		width:'100%'
	});
	
	var label = Titanium.UI.createLabel({
		text:'Per creare una nuova segnalazione, premi il tasto',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'90%'
	});
	
	var label2 = Titanium.UI.createLabel({
		text:'Per vedere tutte le segnalazioni, invece, premi il tasto',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#4F5153',
   		textAlign:'center',
   		top:15,
   		width:'90%'
	}); 
	
	var big_world = Ti.UI.createView({
		width:40,
		height:40,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_world_big.png',
		top:5
	});
	
	var big_camera = Ti.UI.createView({
		width:40,
		height:40,
		backgroundColor:'#ffffff',
		backgroundImage:'/images/ic_icon_camera_big.png',
		top:5
	});
	
	whiteView.add(title);
	whiteView.add(separator1);
	whiteView.add(label);
	whiteView.add(big_camera);
	whiteView.add(label2);
	whiteView.add(big_world);
	container.add(whiteView);
	container.add(shadow);
	
	
	return container;
}

module.exports = MediumRectangleLogged;
