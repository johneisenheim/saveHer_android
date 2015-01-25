function SecondPage(){
	var SocialRectangle = require('ui/handheld/rectangles/SocialRectangle');
	
	var self = Titanium.UI.createScrollView({
		backgroundColor:'#eeeeee',
		width:'100%',
		height:'100%',
		layout:'vertical'
	});
	
	var title = Titanium.UI.createLabel({
		text:'Step 1',
		font:{
     		fontSize:40,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		top:10
	});
	
	var description = Titanium.UI.createLabel({
		text:'Effettua il login con uno dei social networks specificato nella parte sottostante.',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'95%'
	});
	
	var socialRectangle = new SocialRectangle();
	
	var whySocialTitle = Titanium.UI.createLabel({
		text:'Perchè i social network?',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:25,
   		width:'90%'
	}); 
	
	var whySocialDescription = Titanium.UI.createLabel({
		text:'I social network garantiscono l\'accesso ai nostri server mediante un protocollo di autenticazione sicuro. Le informazioni di login non saranno utilizzate in alcun modo dai gestori di saveHer.',
		font:{
     		fontSize:17,
      		fontFamily:"CaviarDreams"
   		},
   		color:'#6f6f6f',
   		textAlign:'center',
   		top:15,
   		width:'90%'
	}); 
	
	var fakeView = Titanium.UI.createView({
		width:1,
		height:20,
		backgroundColor:'transparent'
	});
	
	self.add(title);
	self.add(description);
	self.add(socialRectangle);
	self.add(whySocialTitle);
	self.add(whySocialDescription);
	self.add(fakeView);
	
	return self;
	
}

module.exports = SecondPage;
