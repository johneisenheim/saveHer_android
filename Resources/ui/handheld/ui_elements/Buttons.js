function Buttons(){
	
	var self = Titanium.UI.createView({
		width:180,
		height:38,
		backgroundColor:'#89B47F',
		top:15
	});
	
	var label = Titanium.UI.createLabel({
		text:'',
		font:{
     		fontSize:25,
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
	
	self.getButtonTitle = function(){
		return label.text;
	};
	
	self.setButtonTop = function(newTop){
		self.top = newTop;
	};
	
	self.setButtonRight = function(newRight){
		self.right = newRight;
	};
	
	return self;
	
}

module.exports = Buttons;
