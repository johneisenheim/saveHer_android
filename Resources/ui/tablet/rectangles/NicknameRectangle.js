function NicknameRectangle(){
	
	var NicknameCustomCombo = require('ui/tablet/ui_elements/NicknameCustomCombo');
	var nicknameCustomCombo = new NicknameCustomCombo();
	
	var container = Ti.UI.createView({
		width:'85%',
		height:73,
		backgroundColor:'transparent',
		layout:'vertical',
		top:15
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:70,
		backgroundColor:'#ffffff',
		//layout:'horizontal',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});

	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
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
