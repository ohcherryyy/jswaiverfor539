var video = document.getElementById("player1");
var btnstart = document.getElementById("play");
var btnpause = document.getElementById("pause");
var btnslow = document.getElementById("slower");
var btnfast = document.getElementById("faster");
var btnskip = document.getElementById("skip");
var btnmute = document.getElementById("mute");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");
var btnold = document.getElementById("vintage");
var btnorg = document.getElementById("orig")

video.autoplay = false
video.loop = true
delete video.src

window.addEventListener("load", function () {
	console.log("Good job opening the window")
});

btnstart.addEventListener("click", function () {
	if (video.src == null) {
		video.src = 'assets/marchingband.mov'
		video.load()
	}
	video.play()
	volume.innerText = slider.value + "%"
})

btnpause.addEventListener("click", function () {
	video.pause()
})

btnslow.addEventListener("click", function () {
	video.playbackRate = video.playbackRate * (1 - 0.05)
	console.log("New Speed:"+video.playbackRate)
})

btnfast.addEventListener("click", function () {
	video.playbackRate = video.playbackRate / (1 - 0.05)
	console.log("New Speed:"+video.playbackRate)
})

btnskip.addEventListener("click", function () {
	var skip_time = video.currentTime + 15
	if (skip_time <= video.duration) {
		video.currentTime = skip_time
	} else if (skip_time > video.currentTime) {
		video.currentTime = 0
	}
	video.play()
	console.log("New location:"+video.currentTime)
})

btnmute.addEventListener("click", function () {
	if (video.muted) {
		video.muted = false
		this.innerHTML = "Mute"
		slider.value = video.volume * 100
		volume.innerText = video.volume * 100 + "%"
	} else if (!video.muted) {
		video.muted = true
		this.innerHTML = "Unmute"
		slider.value = 0
		volume.innerText = 0
	}
})

slider.addEventListener("mouseup", function () {
	volume.innerText = slider.value + "%"
	video.volume = slider.value / 100
	if (slider.value == 0) {
		btnmute.innerHTML = "Unmute"
	} else {
		btnmute.innerHTML = "Mute"
	}
})

btnold.addEventListener("click", function () {
	video.className = "oldSchool"
})

btnorg.addEventListener("click", function () {
	video.className = "video"
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });