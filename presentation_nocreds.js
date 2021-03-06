//var dotenv = require('dotenv');
//dotenv.load();
//require('dotenv').config();
var fs = require('fs');
var cloudinary = require('cloudinary').v2;

var uploads = {};

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: 'dougsillars',
  api_key: 'XXX',
  api_secret: 'YYY'
});

















/*
//reading from url params...
var video = process.argv[2];
var id = "";
if (process.argv[3].length >0){
	id = process.argv[3];
 }
*/
console.log( "** ** ** ** ** ** ** ** ** explicit upload ** ** ** ** ** ** ** ** ** **");




/*

cloudinary.v2.uploader.explicit("sample3", 
  { type: "private",
    eager: [
      { width: 200, crop: "scale" }, 
      { width: 360, height: 200, 
          crop: "crop", gravity: "north"} ] }, 
  function(error, result) {console.log(result, error); } );
*/


cloudinary.api.update(
	"imagecon_video",
	{
		resource_type: "video",
		raw_convert: "google_speech:srt:vtt"
	},
	function(error, result){
		console.log(error, result);
	}
);

// File upload
cloudinary.uploader.explicit("imagecon_video", 
		{ type: "upload", resource_type: "video",  
    eager_async: true,
    eager_notification_url: "https://sneaky-pool-dolphin.glitch.me/receive_webhook",
    eager:[
		{
		format: "mp4",
		transformation: [
				{  width: 1920,
					height: 1080,
					audio_codec: "none",
					format: "mp4"
				},
				{
					overlay:"backgroundImage",
					width: 1920,
					height: 1080,
				},
				{
					flags: "layer_apply"	
				},
				{
					overlay:"video:imagecon_video",
					audio_codec:"none",
					start_offset: 5.2,
					width: 1280, 
					height: 720		
				},
				{
					gravity:"north_west",
					x: 475,
					y: 200,
					flags: "layer_apply"			
				},
				{
					overlay:"video:camera",
					start_offset:8, 
					width: 350, 
					height: 500,
					crop: "fill"	
				},
				{
					gravity:"auto"
				},
				{
					gravity:"north_west",
					x: 50,
					y: 350,
					flags: "layer_apply"			
				},
				
			]
		}
    ]
},

//https://res.cloudinary.com/dougsillars/image/upload/w_1920,h_1080/l_preso,w_1280,h_720,c_fill,g_auto/g_north_west,x_475,y_200,fl_layer_apply//l_presenterimage,w_350,h_500,c_fill,g_auto/g_north_west,x_50,y_350,fl_layer_apply/backgroundImage.jpg
	function(err,result){ //azure_video_indexer:vtt:en-US.  google_speech:srt:vtt
  console.log(result);
  if (err){ console.warn(err);}
 
});


