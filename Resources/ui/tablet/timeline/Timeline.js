function Timeline(){
	
	var postLayoutCheck = true;
	var timeline = Ti.Filesystem.getFile('appdata://','timeline.json');
	var LoadingRow = require('ui/tablet/timeline/LoadingRow');
	var Row1 = require('ui/tablet/timeline/Row1');
	var Row2 = require('ui/tablet/timeline/Row2');
	var Row3 = require('ui/tablet/timeline/Row3');
	var Row4 = require('ui/tablet/timeline/Row4');
	var Row5 = require('ui/tablet/timeline/Row5');
	var row1 = new Row1();
	var row2 = new Row2();
	var row3 = new Row3();
	var row4 = new Row4();
	var row5 = new Row5();
	
	var container = Ti.UI.createView({
		width:'90%',
		height:411,
		backgroundColor:'transparent',
		layout:'vertical',
		top:40
	});
	
	var whiteView = Ti.UI.createView({
		width:'100%',
		height:408,
		backgroundColor:'#ffffff',
		layout:'vertical',
		borderColor:'#DCDCDC',
		borderWidth:0.4,
		top:0
	});
	
	var shadow = Ti.UI.createView({
		width:'100%',
		height:3,
		backgroundColor:'#DBDBDB'
	});
	
	
	var separator1 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:5
	});
	
	var separator2 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:0
	});
	
	var separator3 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:0
	});
	
	var separator4 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:0
	});
	
	var separator5 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:0
	});
	
	var separator6 = Ti.UI.createView({
		height:0.5,
		width:'100%',
		backgroundColor:'#E6E6E6',
		top:0
	});
	
	var reportsReq = Titanium.Network.createHTTPClient({
		onload: function(e){
			var parsed = null;
			try{
				parsed = JSON.parse(this.responseText);
			}catch(ex){
				activityLabel.text = 'Errore recupero!';
			}
			//Ti.API.info(this.responseText);
			if( parsed.recovered === false ){
				activityLabel.text = 'Nessuna attività da visualizzare.';
				return;
			}
			var users = [];
			var i = 0;
			for (i = 0; i < parsed.length; i++ ){
				Ti.API.info(parsed[i].nickname);
				users.push({"nickname":parsed[i].nickname});
				switch(i){
					case 0:
						row1.setNickname(parsed[i].nickname);
					break;
					case 1:
						row2.setNickname(parsed[i].nickname);
					break;
					case 2:
						row3.setNickname(parsed[i].nickname);
					break;
					case 3:
						row4.setNickname(parsed[i].nickname);
					break;
					case 4:
						row5.setNickname(parsed[i].nickname);
					break;
				}
			}
			var contents = JSON.stringify(users);
			timeline.write(contents);
			if( i <= 4 ){
				Ti.API.info(i);
				var newTop = 0;
				for ( var j = i; j < 5; j ++ ){
					newTop += 36.5;
				}
				whiteView.remove(activityView);
				row1.setAllRowsTop(newTop);
				switch(i){
					case 1:
						whiteView.add(row1);
					break;
					case 2:
						whiteView.add(row1);
						whiteView.add(separator3);
						whiteView.add(row2);
					break;
					case 3:
						whiteView.add(row1);
						whiteView.add(separator3);
						whiteView.add(row2);
						whiteView.add(separator4);
						whiteView.add(row3);
					break;
					case 4:
						whiteView.add(row1);
						whiteView.add(separator3);
						whiteView.add(row2);
						whiteView.add(separator4);
						whiteView.add(row3);
						whiteView.add(separator5);
						whiteView.add(row4);
					break;
				}
			}else{
				whiteView.remove(activityView);
				whiteView.add(row1);
				whiteView.add(separator2);
				whiteView.add(row2);
				whiteView.add(separator3);
				whiteView.add(row3);
				whiteView.add(separator4);
				whiteView.add(row4);
				whiteView.add(separator5);
				whiteView.add(row5);
			}
			
		},
		onerror : function(){
			activityLabel.text = 'Errore recupero!';
			/*var dialog = Ti.UI.createAlertDialog({
    			message: 'Sembra esserci stato un problema nel server. Ti preghiamo di riprovare, grazie.',
    			ok: 'Ok',
    			title: 'Timeline'
  			}).show();*/
		}
	});
	
	
	container.startConnection = function(){
		try{
			if( !Ti.Network.getOnline() ){
				if ( timeline.exists() ){
					Ti.API.info(timeline.read());
					var parsed = JSON.parse(timeline.read());
					if( parsed.recovered === false ){
						activityLabel.text = 'Nessuna attività da visualizzare.';
						return;
					}
					var i = 0;
					for ( i = 0; i < parsed.length; i++ ){
						
						switch(i){
							case 0:
								row1.setNickname(parsed[i].nickname);
							break;
							case 1:
								row2.setNickname(parsed[i].nickname);
							break;
							case 2:
								row3.setNickname(parsed[i].nickname);
							break;
							case 3:
								row4.setNickname(parsed[i].nickname);
							break;
							case 4:
								row5.setNickname(parsed[i].nickname);
							break;
						}
					}
					if( i <= 4 ){
						var newTop = 0;
						for ( var j = i; j < 5; j ++ ){
							newTop += 36.5;
						}
						whiteView.remove(activityView);
						row1.setAllRowsTop(newTop);
						switch(i){
							case 1:
								whiteView.add(row1);
							break;
							case 2:
								whiteView.add(row1);
								whiteView.add(separator3);
								whiteView.add(row2);
							break;
							case 3:
								whiteView.add(row1);
								whiteView.add(separator3);
								whiteView.add(row2);
								whiteView.add(separator4);
								whiteView.add(row3);
							break;
							case 4:
								whiteView.add(row1);
								whiteView.add(separator3);
								whiteView.add(row2);
								whiteView.add(separator4);
								whiteView.add(row3);
								whiteView.add(separator5);
								whiteView.add(row4);
							break;
						}
					}else{
						whiteView.remove(activityView);
						whiteView.add(row1);
						whiteView.add(separator2);
						whiteView.add(row2);
						whiteView.add(separator3);
						whiteView.add(row3);
						whiteView.add(separator4);
						whiteView.add(row4);
						whiteView.add(separator5);
						whiteView.add(row5);
					}
				}else{
					activityLabel.text = 'Non riesco a recuperare gli elementi.';
				}
			}else{
				try{
					reportsReq.open("GET","http://www.appsaveheritage.com/site_getLastFiveReports.php");
					reportsReq.send();
				}catch(ex){
					activityLabel.text = 'Errore recupero!';
				}
			}
		}catch(ex){
			activityLabel.text = 'Errore recupero!';
		}
	};
	
	var activityView = Titanium.UI.createView({
		width:'100%',
		height:'100%',
		backgroundColor:'#ffffff'
	});
	
	var activityLabel =  Ti.UI.createLabel({
		text:'Carico...',
		font:{
     		fontSize:18,
      		fontFamily:"Lato-Italic",
   		},
   		color:'#75787B',
   		textAlign:'center',
   		width:Ti.UI.SIZE
	});
	
	activityView.add(activityLabel);


	whiteView.add(new LoadingRow());
	whiteView.add(activityView);
	//whiteView.add(separator1);
	container.add(whiteView);
	container.add(shadow);
	
	
	return container;
}

module.exports = Timeline;

