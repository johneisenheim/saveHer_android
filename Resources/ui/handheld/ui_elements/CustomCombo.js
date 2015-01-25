function CustomCombo(){
	
	var dirpath = Titanium.Filesystem.getFile('appdata://','reports');
	var dirpathList = dirpath.getDirectoryListing();
	var dirpathLen = dirpathList.length;
	var sex = null;
    var valuesArray = [];
    var sexData = '';
    var fileToParse = null, parsed = null, name = null, currentPath = null;
    var preview = null;
	
	var self = Titanium.UI.createView({
		width : '90%',
		height : 65,
		backgroundColor:'#f6f6f6'
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
	        //preview.setReport(sexData);
	        preview.setCurrentPath(sexData);
	        preview.setReport(sexData);
	        //currentPath = sexData;
	    }else{
	       //preview.resetReport();
	       preview.resetReport();
	       preview.setCurrentPath(null);
	       currentPath = null;
	    }
    });
    
    self.reloadCombo = function(){
    	Ti.API.info('reload');
    	valuesArray = null;
    	valuesArray = [];
    	var dirpath = Titanium.Filesystem.getFile('appdata://','reports');
    	var dirpathList = dirpath.getDirectoryListing();
		var dirpathLen = dirpathList.length;
		Ti.API.info(dirpathLen);
    	for(var i = 0; i < dirpathLen; i++ ){
    		Ti.API.info('_reload');
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
    	Ti.API.info('reload');
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
		Ti.API.info('reload');
		_sex.addEventListener('TwChange', function(e) {
			sexData = e.value;
	    	if( sexData != 'exclude' ){
		        //preview.setReport(sexData);
		        preview.setCurrentPath(sexData);
		        preview.setReport(sexData);
		        //currentPath = sexData;
		    }else{
		       //preview.resetReport();
		       preview.resetReport();
		       preview.setCurrentPath(null);
		       currentPath = null;
		    }
    	});
    	Ti.API.info('reload');
		self.remove(sex);
		sex = null;
		self.add(_sex);
		sex = _sex;
    };
    
    self.getCurrentPath = function(){
    	return currentPath;
    };
    
    self.setPreviewRectangle = function(_preview){
    	preview = _preview;
    };
    
    self.add(sex);
	
	return self;
	
}

module.exports = CustomCombo;
