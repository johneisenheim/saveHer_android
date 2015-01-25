function NicknameRectangle(){
	
	var NicknameCustomCombo = require('ui/handheld/ui_elements/NicknameCustomCombo');
	var nicknameCustomCombo = new NicknameCustomCombo();
	
	var container = Ti.UI.createView({
		width:'95%',
		height:60,
		backgroundColor:'transparent',
		layout:'vertical',
		top:5
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:58,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});

	var shadow = Ti.UI.createView({
		width:'100%',
		height:2,
		backgroundColor:'#DBDBDB'
	});
	
	container.getNickname = function(){
		return nicknameCustomCombo.getUser();
	};
	
	container.getNicknamesList = function(){
		return nicknameCustomCombo.getNicknamesList();
	};
	
	whiteView.add(nicknameCustomCombo);
	container.add(whiteView);
	container.add(shadow);

	return container;
	
}

module.exports = NicknameRectangle;
