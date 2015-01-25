function NicknameCustomCombo(){
	
	var pastUser = Titanium.Filesystem.getFile('appdata://pastUser.txt');
    var valuesArray = [];
    var sexData = '';
    var user = '';
	
	var self = Titanium.UI.createView({
		width : '90%',
		height : 60,
		backgroundColor:'#ffffff'
	});
	
	var Tw = function(){};
	Tw.UI = require('external/UI');
	
	if( pastUser.exists() ){
		var users = pastUser.read().toString();
		Ti.API.info(users);
		var splitted = users.split(';');
		for(var i = 0; i < splitted.length-1 ; i++ ){
			valuesArray.push({'title':splitted[i],'value':splitted[i]});
		}
	}
   
    var sex = Tw.UI.createCombobox({
		borderWidth : '1dp',
		borderRadius : '5dp',
		labelSelect : "Scegli...",
		width : '100%',
		height : 50,
		values :valuesArray,
		selectedValueIndex : 1,
		multiple : false,
		top:5
	});
	
	sex.addEventListener('TwChange', function(e) {
		var sexData = e.value;
		//var parsed = JSON.parse(sexData);
		Ti.API.info(sexData);
	    if( sexData != 'exclude' ){
	       user = sexData;
	    }else{
	        user = '';
	    }
    });
    
    self.getUser = function(){
    	return user;
    };
    
    self.getNicknamesList = function(){
    	if( pastUser.exists() ){
			var users = pastUser.read().toString();
			var splitted = users.split(';');
			return splitted.length;
		}else return 0;
    };

    self.add(sex);
	
	return self;
	
}

module.exports = NicknameCustomCombo;
