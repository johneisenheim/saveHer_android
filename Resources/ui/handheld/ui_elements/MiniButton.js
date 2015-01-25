function MiniButton(){
	
	var self = Titanium.UI.createView({
		width:130,
		height:28,
		backgroundColor:'white',
		top:15
	});
	
	var label = Titanium.UI.createLabel({
		text:'',
		font:{
     		fontSize:20,
      		fontFamily:"CaviarDreams"
   		},
   		color:'white',
   		textAlign:'center',
   		width:'auto'
	});
	
	self.add(label);
	
	self.setButtonTitle = function(newTitle){
		label.text = newTitle;
	};
	
	self.setButtonTop = function(newTop){
		self.top = newTop;
	};
	
	self.setButtonRight = function(newRight){
		self.right = newRight;
	};
	
	self.setButtonColor = function(newHex){
		self.backgroundColor = newHex;
	};
	
	return self;
	
}

module.exports = MiniButton;
