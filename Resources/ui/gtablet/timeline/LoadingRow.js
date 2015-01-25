function LoadingRow(){
	
	var row = Titanium.UI.createView({
		backgroundColor:'#ffffff',
		height:46,
		width:'100%',
		layout:'horizontal',
		top:0
	});
	
	var status = Titanium.UI.createLabel({
		text:'Timeline',
		font:{
     		fontSize:22,
      		fontFamily:"Lato-BoldItalic",
   		},
   		color:'#75787B',
   		textAlign:'center',
   		top:15,
   		left:10,
   		width:Ti.UI.SIZE
	});
	
	row.add(status);
	
	
	return row;
}
module.exports = LoadingRow;
