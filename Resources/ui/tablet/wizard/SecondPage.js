function SecondPage(){
	var SocialRectangle = require('ui/tablet/rectangles/SocialRectangle');
	
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
		text:'Step 1',
		font:{
     		fontSize:60,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Effettua il login con uno dei social networks specificato nella parte sottostante.',
		font:{
     		fontSize:28,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:45,
   		width:'95%'
	});
	
	var socialRectangle = new SocialRectangle();
	
	var whySocialTitle = Titanium.UI.createLabel({
		text:'Perchè i social network?',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:45,
   		width:'90%'
	}); 
	
	var whySocialDescription = Titanium.UI.createLabel({
		text:'I social network garantiscono l\'accesso ai nostri server mediante un protocollo di autenticazione sicuro. Le informazioni di login non saranno utilizzate in alcun modo dai gestori di saveHer.',
		font:{
     		fontSize:24,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:25,
   		width:'90%'
	}); 
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:25,
		backgroundColor:'transparent'
	});
	
	view.add(title);
	view.add(description);
	view.add(socialRectangle);
	view.add(whySocialTitle);
	view.add(whySocialDescription);
	view.add(fakeView);
	
	self.add(view);
	
	return self;
	
}

module.exports = SecondPage;
