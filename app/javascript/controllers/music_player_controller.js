import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["musicContainer", "playBtn", "prevBtn", "nextBtn", "audio", "progress", "cover", "title", "progressContainer"]
  static values = { audio: Array }

  // Initially load song details into DOM
   connect() {
    console.log(this.musicContainerTarget)
    this.loadSong(this.audioValue[0]);
    this.currTime = document.querySelector("#currTime");
    this.durTime = document.querySelector("#durTime");
   }

  // Update song details
  loadSong(song) {
    this.titleTarget.innerText = song["title"];
    this.audioTarget.src = song["audio_url"]
    this.coverTarget.src = song["cover_url"];
  }

  // Play song
  playSong() {
    this.musicContainerTarget.classList.add('play');
    this.playBtnTarget.querySelector('i.fas').classList.remove('fa-play');
    this.playBtnTarget.querySelector('i.fas').classList.add('fa-pause');

    this.audioTarget.play();
  }

  // Pause song
  pauseSong() {
    this.musicContainerTarget.classList.remove('play');
    this.playBtnTarget.querySelector('i.fas').classList.add('fa-play');
    this.playBtnTarget.querySelector('i.fas').classList.remove('fa-pause');

    this.audioTarget.pause();
  }

  // Previous song
  prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    this.loadSong(songs[songIndex]);

    this.playSong();
  }

  // Next song
  nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }

    this.loadSong(songs[songIndex]);

    this.playSong();
  }

  // Update progress bar
  updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    this.progressTarget.style.width = `${progressPercent}%`;
  }

  // Set progress bar
  setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = this.audioTarget.duration;

    this.audio.currentTime = (clickX / width) * duration;
  }

  handlePlay() {
    const isPlaying = this.musicContainerTarget.classList.contains('play');

    if (isPlaying) {
      this.pauseSong();
    } else {
      this.playSong();
    }
  }

  //get duration & currentTime for Time of song
  DurTime (e) {
    const {duration,currentTime} = e.srcElement;
    var sec;
    var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
    Math.floor(currentTime/60);
    min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	}

	get_sec (currentTime,sec);

	// change currentTime DOM
	this.currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	}

	// define seconds duration

	get_sec_d (duration);

	// change duration DOM
	this.durTime.innerHTML = min_d +':'+ sec_d;

};
}
