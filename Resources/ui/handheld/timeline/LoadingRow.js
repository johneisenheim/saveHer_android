function LoadingRow(){
	
	var row = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:30,
		width:'100%',
		layout:'horizontal',
		top:0
	});
	
	var status = Titanium.UI.createLabel({
		text:'Timeline',
		font:{
     		fontSize:16,
      		fontFamily:"Lato-BoldItalic",
   		},
   		color:'#75787B',
   		textAlign:'center',
   		top:10,
   		left:10,
   		width:Ti.UI.SIZE
	});
	
	row.add(status);
	
	
	return row;
}
module.exports = LoadingRow;
