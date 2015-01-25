function Listeners(){
	var imagefactory = require('ti.imagefactory');
	var Compression = require('ti.compression');
	var Questionnaire = require('ui/gtablet/pages/Questionnaire');
	var MainPage = require('ui/handheld/pages/MainPage');
	var self = {};
	
	self.sendRestoredReport = function(status, path, parsed, preview, customCombo, currentPath){
		status.text = 'Attendi...';
		var zipelements = [];
		if (parsed.img1 != '')
			zipelements[0] = parsed.img1;
		if (parsed.img2 != '')
			zipelements[1] = parsed.img2;
		if (parsed.img3 != '')
			zipelements[2] = parsed.img3;
		var zipfile = Ti.Filesystem.getFile(currentPath+"/report.zip");
		var toDelete = Ti.Filesystem.getFile(currentPath);
		var zipfilepath = zipfile.getNativePath();
		var result = Compression.zip(zipfilepath, zipelements);
		if (result == 'success') {
		if (!zipfile.exists()) {
			var dialog = Ti.UI.createAlertDialog({
   				message: "C\'è stato un errore nella costruzione dei dati. Per favore, riprova!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			status.text = '';
  			saveHer.stopExecution = false;
  			return;
		}
		var request = Titanium.Network.createHTTPClient({
			onload: function(e){
						var response = JSON.parse(this.responseText);
						if ( response.response ){
							var lastrepid = response.lastid;
							//sendButton.setButtonTitle('Inviato!');
							toDelete.deleteDirectory(true);
							setTimeout(function(){
								new Questionnaire().openWin(lastrepid, Ti.App.Properties.getString('nickname'));
								preview.resetReport();
								customCombo.reloadCombo();
								Ti.App.fireEvent('reload_circle',{});
								saveHer.stopExecution = false;
							},3000);
						}else{
							var dialog = Ti.UI.createAlertDialog({
   								message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    							ok: 'Ok',
    							title: 'saveHer'
  							}).show();
  							status.text = '';
							zipfile.deleteFile();
  							customCombo.reloadCombo();
  							saveHer.stopExecution = false;
  							return;
						}
						Ti.API.info((this.responseText));
					},
			onerror: function(e){
						var dialog = Ti.UI.createAlertDialog({
   							message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    						ok: 'Ok',
    						title: 'saveHer'
  						}).show();
  						status.text = '';
						zipfile.deleteFile();
						customCombo.reloadCombo();
						saveHer.stopExecution = false;
					}
				});
				if( Titanium.Network.getOnline() ){
					var url = "http://maps.google.com/maps/api/geocode/json?latlng=" + parsed.latitude + "," + parsed.longitude + "&sensor=true";
			    	var xhr = Titanium.Network.createHTTPClient();
			    	xhr.open('GET', url);
			    	xhr.onload = function() {
			        	var json = this.responseText;
			        	var gotitems = eval('(' + json + ')');
			        	if(gotitems.results != '') {
			        		try{
			        			parsed.address = gotitems.results[0].address_components[2].long_name;
			        		}catch(ex){
			        			parsed.address = '';
			        		}
			       		}
			       		Ti.API.info('Indirizzo ' + parsed.address);
						request.open("POST",'http://www.appsaveheritage.com/rep.php');
						var prms = {
							nick: Ti.App.Properties.getString('nickname'),
		            		zip: zipfile.read(),
		            		latitude:parsed.latitude,
		            		longitude:parsed.longitude
						};
						Ti.API.info(JSON.stringify(prms));
						request.send(prms);			 
			    	};
			    	xhr.onerror = function(){
			    		request.open("POST",'http://www.appsaveheritage.com/rep.php');
						var prms = {
							nick: Ti.App.Properties.getString('nickname'),
		            		zip: zipfile.read(),
		            		latitude:parsed.latitude,
		            		longitude:parsed.longitude
						};
						Ti.API.info(JSON.stringify(prms));
						request.send(prms);	
			    	};
			    	xhr.send();
				}
	 	}
	};
	
	self.sendReport = function(button, reportRectangle, gpsRectangle){
		var zipelements = [];
		button.setButtonTitle('Attendi...');
		try{
			var checkdir = Titanium.Filesystem.getFile('appdata://reports');
			if ( !checkdir.exists() ){
				checkdir.createDirectory();
			}
			var folderToStore = Titanium.Filesystem.getFile(checkdir.getNativePath()+'/tmp');
			folderToStore.createDirectory();
			var tempFile = null, newBlob = null;
			if( reportRectangle.isFirstImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/1.jpg");
				newBlob = imagefactory.compress(reportRectangle.getFirstBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[0] = tempFile.getNativePath();
			}
			if( reportRectangle.isSecondImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/2.jpg");
				newBlob = imagefactory.compress(reportRectangle.getSecondBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[1] = tempFile.getNativePath();
			}
			if( reportRectangle.isThirdImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/3.jpg");
				newBlob = imagefactory.compress(reportRectangle.getThirdBigLayer(), 0.15);
				tempFile.write(newBlob);
				zipelements[2] = tempFile.getNativePath();
			}
		}catch(ex){
			Ti.API.info(ex);
			var dialog = Ti.UI.createAlertDialog({
   				message: "Sembra ci sia stato un problema nella memorizzazione dei files. Controlla lo spazio libero sulla tua SDCard.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			saveHer.stopExecution = false;
  			return;
		}
		var zipfile = Ti.Filesystem.getFile(checkdir.getNativePath()+"/report.zip");
		var zipfilepath = zipfile.getNativePath();
		var result = Compression.zip(zipfilepath, zipelements);
		if (result == 'success') {
			if (!zipfile.exists()) {
				var dialog = Ti.UI.createAlertDialog({
   					message: "C\'è stato un errore nella costruzione dei dati. Per favore, riprova!",
    				ok: 'Ok',
    				title: 'saveHer'
  				}).show();
  				button.setButtonTitle('Invia');
  				saveHer.stopExecution = false;
  				return;
			}
			var request = Titanium.Network.createHTTPClient({
				onload: function(e){
					var response = JSON.parse(this.responseText);
					if ( response.response ){
						var lastrepid = response.lastid;
						if( lastrepid == 0 )
							lastrepid = 1;
						//button.setButtonTitle('Inviato!');
						folderToStore.deleteDirectory(true);
						zipfile.deleteFile();
						setTimeout(function(){
							new Questionnaire().openWin(lastrepid, Ti.App.Properties.getString('nickname'));
						},3000);		
					}else{
						var dialog = Ti.UI.createAlertDialog({
   							message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    						ok: 'Ok',
    						title: 'saveHer'
  						}).show();
  						button.setButtonTitle('Invia');
  						folderToStore.deleteDirectory(true);
						zipfile.deleteFile();
						saveHer.stopExecution = false;
  						return;
					}
							
				},
				onerror: function(e){
					var dialog = Ti.UI.createAlertDialog({
   						message: "C\'è stato un errore nell\'invio dei dati. Per favore, riprova!",
    					ok: 'Ok',
    					title: 'saveHer'
  					}).show();
  					button.setButtonTitle('Invia');
  					folderToStore.deleteDirectory(true);
					zipfile.deleteFile();
					saveHer.stopExecution = false;
				}
			});
			request.open("POST",'http://www.appsaveheritage.com/rep.php');
			var prms = {
				nick: Ti.App.Properties.getString('nickname'),
            	zip: zipfile.read(),
            	latitude:gpsRectangle.getLat(),
            	longitude:gpsRectangle.getLon()
			};
			request.send(prms);
		}else{
			var dialog = Ti.UI.createAlertDialog({
   				message: "C\'è stato un errore nell\'elaborazione dei dati. Per favore, riprova!",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			button.setButtonTitle('Invia');
  			folderToStore.deleteDirectory(true);
  			saveHer.stopExecution = false;
  			return;
		}
	};
	
	self.storeReport = function(networkRectangle, reportRectangle,location, gpsRectangle, self){
		if( saveHer.stopExecution )
			return;
		saveHer.stopExecution = true;
		networkRectangle.setButtonStatus('Attendi...');
		if ( !reportRectangle.isFirstImagePresent() && !reportRectangle.isSecondImagePresent() && !reportRectangle.isThirdImagePresent() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Per inviare un report, per favore inserisci almeno una foto.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			networkRectangle.setButtonStatus('Memorizza');
  			saveHer.stopExecution = false;
  			return;
		}
		if ( !Titanium.Filesystem.isExternalStoragePresent() ){
			var dialog = Ti.UI.createAlertDialog({
   				message: "È necessaria una memoria esterna di appoggio per processare i dati prima dell\'invio, ma il tuo disposito non sembra esserne munito.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			networkRectangle.setButtonStatus('Memorizza');
  			saveHer.stopExecution = false;
  			return;
		}
		var now = null, folderToStore = null, folderToStoreName = null, thumb = null, thumbFile = null;
		try{
			var checkdir = saveHer.root;//Titanium.Filesystem.getFile('appdata://reports');
			if ( !checkdir.exists() ){
				checkdir.createDirectory();
			}
			now = new Date();
			var jData = {
				day: now.getDate(),
				month: now.getMonth(),
				hour: now.getHours(),
				minute: now.getMinutes(),
				year: now.getFullYear(),
				address:''
			};
			folderToStoreName = now.getDate()+now.getMonth()+now.getHours()+now.getMinutes()+now.getFullYear();
			folderToStore = Titanium.Filesystem.getFile(checkdir.getNativePath()+'/'+folderToStoreName);
			folderToStore.createDirectory();
			var jDateFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/date.json");
			if( reportRectangle.isFirstImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/1.jpg");
				thumbFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/t_1.jpg");
				newBlob = imagefactory.compress(reportRectangle.getFirstBigLayer(), 0.15);
				thumb = imagefactory.imageAsThumbnail(newBlob, {size: 120});
				tempFile.write(newBlob);
				thumbFile.write(thumb);
				jData.img1 = tempFile.getNativePath();
				jData.thumb1 = thumbFile.getNativePath();
			}else{
				jData.img1 = '';
				jData.thumb1 = '';
			}
			if( reportRectangle.isSecondImagePresent() ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/2.jpg");
				thumbFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/t_2.jpg");
				newBlob = imagefactory.compress(reportRectangle.getSecondBigLayer(), 0.15);
				thumb = imagefactory.imageAsThumbnail(newBlob, {size: 120});
				tempFile.write(newBlob);
				thumbFile.write(thumb);
				jData.img2 = tempFile.getNativePath();
				jData.thumb2 = thumbFile.getNativePath();
			}else{
				jData.img2 = '';
				jData.thumb2 = '';
			}
			if( reportRectangle.isThirdImagePresent()  ){
				tempFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/3.jpg");
				thumbFile = Titanium.Filesystem.getFile(folderToStore.getNativePath()+"/t_3.jpg");
				newBlob = imagefactory.compress(reportRectangle.getThirdBigLayer(), 0.15);
				thumb = imagefactory.imageAsThumbnail(newBlob, {size: 120});
				tempFile.write(newBlob);
				thumbFile.write(thumb);
				jData.img3 = tempFile.getNativePath();
				jData.thumb3 = thumbFile.getNativePath();
			}else{
				jData.img3 = '';
				jData.thumb3 = '';
			}
			if( location.hasGPSDone ){
				Ti.API.info("here");
				jData.latitude = gpsRectangle.getLat();
				jData.longitude = gpsRectangle.getLon();
				jData.address = location.reverseGeocodingRequest;
				if( Titanium.Network.getOnline() ){
					var url = "http://maps.google.com/maps/api/geocode/json?latlng=" + jData.latitude + "," + jData.longitude + "&sensor=true";
    				xhr = Titanium.Network.createHTTPClient();
    				xhr.open('GET', url);
    				xhr.onload = function() {
        				var json = this.responseText;
        				var gotitems = eval('(' + json + ')');
        				if(gotitems.results != '') {
            				jData.address = gotitems.results[0].address_components[2].long_name;
       			 		}
       			 		jDateFile.write(JSON.stringify(jData));
						networkRectangle.setButtonStatus('Fatto');
						//setTimeout(function(){
							//networkRectangle.setButtonStatus('Memorizza');
							var mainPage = new MainPage();
    						mainPage.open();
    						networkRectangle.removeInterval();
    						location.removeGPSEvent();
    						self.close();
    						saveHer.stopExecution = false;

						//},2000);
 
    				};
    				xhr.onerror = function(){
    					Ti.API.info("here2");
    					jData.address = '';
    					jDateFile.write(JSON.stringify(jData));
    					networkRectangle.setButtonStatus('Fatto');
						//setTimeout(function(){
							networkRectangle.setButtonStatus('Memorizza');
							//var mainPage = new MainPage();
    						//mainPage.open();
    						networkRectangle.removeInterval();
    						location.removeGPSEvent();
    						//self.close();
    						saveHer.stopExecution = false;
						//},2000);
    				};
    				xhr.send();
				}
			}else{
				Ti.API.info("here3");
				jData.latitude = '';
				jData.longitude = '';
				Ti.API.info(JSON.stringify(jData));
				jDateFile.write(JSON.stringify(jData));
			
				networkRectangle.setButtonStatus('Fatto!');
				//setTimeout(function(){
					//networkRectangle.setButtonStatus('Memorizza');
					//var mainPage = new MainPage();
    				//mainPage.open();
    				networkRectangle.removeInterval();
    				location.removeGPSEvent();
    				saveHer.stopExecution = false;
    				//self.close();
				//},2000);
			}
			
		}catch(ex){
			var dialog = Ti.UI.createAlertDialog({
   				message: "Sembra ci sia stato un problema nella memorizzazione dei files. Controlla lo spazio libero sulla tua SDCard.",
    			ok: 'Ok',
    			title: 'saveHer'
  			}).show();
  			networkRectangle.setButtonStatus('Memorizza');
  			Ti.API.info(ex);
  			saveHer.stopExecution = false;
		}
	};
	
	return self;
}

module.exports = Listeners;
