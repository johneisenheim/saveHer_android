function Wizard(){var e=require("ui/tablet/wizard/FirstPage"),t=require("ui/tablet/wizard/SecondPage"),i=require("ui/tablet/wizard/ThirdPage"),a=Titanium.UI.createWindow({backgroundColor:"#f8f8f8",width:"100%",height:"100%",windowSoftInputMode:Titanium.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN,exitOnClose:!0,orientationModes:[Titanium.UI.PORTRAIT]}),o=new e,r=new t,n=new i,s=Ti.UI.createScrollableView({views:[o,r,n],showPagingControl:!1,width:"100%",height:"100%",scrollingEnabled:!1});return Ti.App.addEventListener("goto_page",function(e){switch(e.page){case 0:s.scrollToView(0),a.addEventListener("androidback",function(){a.close()});break;case 1:s.scrollToView(1),a.addEventListener("androidback",function(){Ti.App.fireEvent("goto_page",{page:0})});break;case 2:n.setMailAddress(Ti.App.Properties.getString("mail")),s.scrollToView(2),a.addEventListener("androidback",function(){Ti.App.fireEvent("login_closed",{what:"all"}),Ti.App.fireEvent("goto_page",{page:1})})}}),Ti.App.addEventListener("goto_app",function(){var e=require("ui/tablet/pages/MainPage"),t=new e;t.open(),a.close()}),a.add(s),a}module.exports=Wizard;