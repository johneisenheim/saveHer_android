function Row5(){
	
	var row = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:73,
		width:'100%',
		layout:'horizontal',
		top:0
	});
	
	var marker = Titanium.UI.createView({
		backgroundColor:'#EE5656',
		width:10,
		height:'100%',
		left:0
	});
	
	var nickname = Ti.UI.createLabel({
		text:'',
		font:{
     		fontSize:21,
      		fontFamily:"Lato-BoldItalic",
   		},
   		color:'#75787B',
   		textAlign:'center',
   		top:15,
   		left:10,
   		width:Ti.UI.SIZE
	});
	
	var text = Ti.UI.createLabel({
		text:'',
		font:{
     		fontSize:19,
      		fontFamily:"Lato",
   		},
   		color:'#75787B',
   		textAlign:'center',
   		top:15,
   		left:3,
   		width:Ti.UI.SIZE
	});
	
	row.setNickname = function(_nickname){
		nickname.text = _nickname; 
		text.text = 'ha inviato un nuovo report.';
	};
	
	row.add(marker);
	row.add(nickname);
	row.add(text);
	
	return row;
	
}

module.exports = Row5;
