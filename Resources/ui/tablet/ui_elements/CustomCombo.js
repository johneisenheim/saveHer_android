function CustomCombo(preview){
	
	var dirpath = Titanium.Filesystem.getFile('appdata://','reports');
	var dirpathList = dirpath.getDirectoryListing();
	var dirpathLen = dirpathList.length;
	var sex = null;
    var valuesArray = [];
    var sexData = '';
    var fileToParse = null, parsed = null, name = null, currentPath = null;
	
	var self = Titanium.UI.createView({
		width : '90%',
		height : 90,
		backgroundColor:'#ffffff'
	});
	
	var Tw = function(){};
	Tw.UI = require('external/UI');
	
    
    for(var i = 0; i < dirpathLen; i++ ){
    	fileToParse = Titanium.Filesystem.getFile(dirpath.getNativePath()+'/'+dirpathList[i]+'/date.json');
    	var root = Titanium.Filesystem.getFile(dirpath.getNativePath()+'/'+dirpathList[i]).getNativePath();
		if ( !fileToParse.exists() )
			continue;
		parsed = JSON.parse(fileToParse.read());
		if( parsed.address != '' ){
        	name = parsed.day+'/'+parsed.month+'/'+parsed.year+' ore '+parsed.hour+':'+parsed.minute+' in '+parsed.address;
        	valuesArray.push({'title':name,'value':root});
        }else{
        	name = parsed.day+'/'+parsed.month+'/'+parsed.year+' ore '+parsed.hour+':'+parsed.minute;
        	valuesArray.push({'title':name,'value':root});
        }
    }
    
    sex = Tw.UI.createCombobox({
		borderWidth : '1dp',
		borderRadius : '5dp',
		labelSelect : "Scegli...",
		width : '100%',
		height : 50,
		values :valuesArray,
		selectedValueIndex : 1,
		multiple : false,
		top:15
	});
	
	sex.addEventListener('TwChange', function(e) {
		var sexData = e.value;
		//var parsed = JSON.parse(sexData);
		Ti.API.info(sexData);
	    if( sexData != 'exclude' ){
	        preview.setReport(sexData);
	        currentPath = sexData;
	    }else{
	       preview.resetReport();
	       currentPath = null;
	    }
    });
    
    self.reloadCombo = function(){
    	valuesArray = [];
    	for(var i = 0; i < dirpathLen; i++ ){
    		fileToParse = Titanium.Filesystem.getFile(dirpath.getNativePath()+'/'+dirpathList[i]+'/date.json');
    		var root = Titanium.Filesystem.getFile(dirpath.getNativePath()+'/'+dirpathList[i]).getNativePath();
			if ( !fileToParse.exists() )
				continue;
			parsed = JSON.parse(fileToParse.read());
			if( parsed.address != '' ){
        		name = parsed.day+'/'+parsed.month+'/'+parsed.year+' ore '+parsed.hour+':'+parsed.minute+' in '+parsed.address;
        		valuesArray.push({'title':name,'value':root});
        	}else{
        		name = parsed.day+'/'+parsed.month+'/'+parsed.year+' ore '+parsed.hour+':'+parsed.minute;
        		valuesArray.push({'title':name,'value':root});
        	}
    	}
    	var _sex = Tw.UI.createCombobox({
			borderWidth : '1dp',
			borderRadius : '5dp',
			labelSelect : "Scegli...",
			width : '100%',
			height : 50,
			values :valuesArray,
			selectedValueIndex : 1,
			multiple : false,
			top:15
		});
		_sex.addEventListener('TwChange', function(e) {
			sexData = e.value;
	    	if( sexData != 'exclude' ){
	        	preview.setReport(sexData);
	        	currentPath = sexData;
	    	}else{
	       		//preview.resetReport();
	       		currentPath = null;
	    	}
    	});
		self.remove(sex);
		sex = null;
		self.add(_sex);
		sex = _sex;
    };
    
    self.getCurrentPath = function(){
    	return currentPath;
    };
    
    self.add(sex);
	
	return self;
	
}

module.exports = CustomCombo;
