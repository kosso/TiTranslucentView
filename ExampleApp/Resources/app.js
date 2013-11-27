// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundImage:'rainbow.png'
});

// To see if this is 'Live', let's add a test video...

//var vid = 
var videoPlayer = Titanium.Media.createVideoPlayer({
	autoplay:false,
    height : 169,
    width : 300,
    mediaControlStyle:Titanium.Media.VIDEO_CONTROL_EMBEDDED,
	scalingMode:Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});


videoPlayer.url = 'video_test.mp4';
win.add(videoPlayer);



var TiKBlurLive = require('com.kosso.TiKBlurLive');
Ti.API.info("module is => " + TiKBlurLive);

var blurView = TiKBlurLive.createView({
  // translucentAlpha:1.0,
  // borderWidth:4,
  // borderColor:'red',
  // translucentTintColor:'#002200',
  borderRadius:20,
  top:30,
  width:180,
  bottom:40
});

blurView.setTranslucentAlpha(1.0);


var label = Ti.UI.createLabel({
	text:'Click me to change to a random translucentTintColor\n\n\nDouble-click me to set back to transparent',
	top:20,
	left:10,
	right:10,
	font:{fontSize:10},
	textAlign:'center',
	height:Ti.UI.SIZE
});

blurView.add(label);


var label_color = Ti.UI.createLabel({
	text:'transparent',
	bottom:20,
	left:10,
	right:10,
	font:{fontSize:10},
	textAlign:'center',
	height:Ti.UI.SIZE
});

blurView.add(label_color);


win.add(blurView);

win.open();

Ti.API.info('translucentStyle : '+blurView.translucentStyle);


function randomColor(){
  return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] + (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
}

blurView.addEventListener('click', function(e){
	//blurView.setBackgroundColor('#111');
	//blurView.setTranslucentAlpha(0.5);
	var new_color = randomColor();
	label_color.text = new_color;
	blurView.setTranslucentTintColor(new_color);
	//blurView.setTranslucentBackgroundColor('rgba(0, 0, 255, 0.5)');
});

blurView.addEventListener('dblclick', function(e){
	blurView.setTranslucentTintColor('rgba(255, 255, 255, 0)');
	
});

var default_style = false;

blurView.addEventListener('longpress', function(e){

	// toggle style. 
	Ti.API.info('set style default : '+default_style);
	blurView.setDefaultTranslucentStyle(default_style);
	default_style = !default_style;
	
});








