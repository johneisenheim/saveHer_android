function Buttons(){
	
	var self = Titanium.UI.createView({
		width:300,
		height:60,
		backgroundColor:'#89B47F',
		top:40
	});
	
	var label = Titanium.UI.createLabel({
		text:'',
		font:{
     		fontSize:35,
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
	
	self.getButtonTitle = function(){
		return label.text;
	};
	
	return self;
	
}

module.exports = Buttons;
