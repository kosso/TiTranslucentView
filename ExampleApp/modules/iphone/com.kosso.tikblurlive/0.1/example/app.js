// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

// TODO: write your module tests here
var TiKBlurLive = require('com.kosso.TiKBlurLive');
Ti.API.info("module is => " + TiKBlurLive);

var foo = TiKBlurLive.createView({
  "color":"red",
  "width":20,
  "height":20
});

win.add(foo);

win.open();

