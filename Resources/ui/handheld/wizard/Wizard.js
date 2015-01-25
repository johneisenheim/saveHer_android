function Wizard(){
	var FirstPage = require('ui/handheld/wizard/FirstPage');
	var SecondPage = require('ui/handheld/wizard/SecondPage');
	var ThirdPage = require('ui/handheld/wizard/ThirdPage');
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#f8f8f8',
		width:'100%',
		height:'100%',
		windowSoftInputMode: Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,
		exitOnClose:true
	});
	
	var firstPage = new FirstPage();
	var secondPage = new SecondPage();
	var thirdPage = new ThirdPage();
	
	var scrollableView = Ti.UI.createScrollableView({
  		views:[firstPage,secondPage,thirdPage],//[view1,view2, view3],
  		showPagingControl:false,
  		width:'100%',
  		height:'100%',
  		scrollingEnabled:false
	});
	
	Ti.App.addEventListener('goto_page', function(e){
		
		switch(e.page){
			case 0:
				scrollableView.scrollToView(0);
				self.addEventListener('androidback', function(e){
					self.close();
				});
			break;
			case 1:
				scrollableView.scrollToView(1);
				self.addEventListener('androidback', function(e){
					Ti.App.fireEvent('goto_page',{page:0});
				});
			break;
			case 2:
				thirdPage.setMailAddress(Ti.App.Properties.getString('mail'));
				scrollableView.scrollToView(2);
				self.addEventListener('androidback', function(e){
					Ti.App.fireEvent('login_closed', {what:'all'});
					Ti.App.fireEvent('goto_page',{page:1});
				});
			break;
		}
	});
	
	Ti.App.addEventListener('goto_app', function(){
		//Ti.App.removeEventListener('goto_page');
		//Ti.App.removeEventListener('goto_app');
		//Ti.App.removeEventListener('login_closed');
		var MainPage = require('ui/handheld/pages/MainPage');
		var mainPage = new MainPage();
		mainPage.open();
		self.close();
	});
	
	self.add(scrollableView);
	
	return self;
	
}

module.exports = Wizard;
