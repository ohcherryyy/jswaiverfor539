var video=document.getElementById("player1");
var btnstart=document.getElementById("play");
var btnpause=document.getElementById("pause");
var btnslow=document.getElementById("slower");
var btnfast=document.getElementById("faster");
var btnskip=document.getElementById("skip");
var btnmute=document.getElementById("mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

btnstart.addEventListener("click",function(){
	video.play()
})

btnpause.addEventListener("click",function(){
	video.pause()
})

btnslow.addEventListener("click",function(){
	var speed_origin=video.playbackRate
	if(speed_origin==0){
		video.playbackRate=0
	}
	else{
		video.playbackRate=speed_origin*(1-0.05)
	}
	console.log(video.playbackRate)
})

btnfast.addEventListener("click",function(){
	var speed_origin=video.playbackRate
	if(speed_origin==0){
		video.playbackRate=0
	}
	else{
		video.playbackRate=speed_origin/(1-0.05)
	}
	console.log(video.playbackRate)
})

btnskip.addEventListener("click",function(){
	var skip_time=video.currentTime+15
	if(skip_time<video.duration){
		video.currentTime=skip_time
	}
	else if(skip_time>=video.currentTime){
		video.currentTime=video.duration
	}
	video.play()
})

btnmute.addEventListener("click",function(){
	if(video.muted){
		video.muted=false
		this.innerHTML="mute"
	}
	else if (!video.muted){
		video.muted=true
		this.innerHTML="unmute"
	}
})



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

