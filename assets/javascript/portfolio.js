'use strict';


const sources = [
  {
    audio: 'assets/mp4/ouuwee.mp4',
    video: 'assets/mp4/ouuwee.mp4',
  },
  {
    audio: 'assets/mp4/mazeltron.mp4',
    video: 'assets/mp4/mazeltron.mp4',
  },
  {
    audio: 'assets/mp4/princeofthemitten2.mp4',
    video: 'assets/mp4/princeofthemitten2.mp4',
  },
  {
    audio: 'assets/mp4/offdeez.mp4',
    video: 'assets/mp4/offdeez.mp4',
  },
  {
    audio: 'assets/mp4/noflock.mp4',
    video: 'assets/mp4/noflock.mp4',
  },
];

function getRandomSource() {
  const index = Math.floor(Math.random() * sources.length);
  return sources[index];
}

window.addEventListener('load', () => {
  const source = getRandomSource();

  const audio = document.getElementById('audio');
  audio.src = source.audio;
  app.audioElement = audio;
  app.audioElement.volume = 0;

  const video = document.getElementById('background');
  video.src = source.video;
  app.videoElement = video;
  app.videoElement.volume = 0;

  // Add click event listener to button element
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', () => {
    if (typeof app.audioElement.play() === 'function') {
      app.audioElement.play()
      .then(() => {
        // Audio is playing
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  });
});

$(window).on('beforeunload', function(){
  app.videoElement.currentTime = 0;
  app.audioElement.currentTime = 0;
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

$('#main').fadeOut(100);
$('#main').remove();
app.videoElement.play();
app.audioElement.play();
app.videoElement.addEventListener('timeupdate', () => {
  $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
}, false);

$('.container').fadeIn();
$('.background').fadeIn(200);

$('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};


const alertContainer = document.getElementById('alert-container');
const alertBox = document.getElementById('alert-box');
const alertMessage = document.getElementById('alert-message');
const alertClose = document.getElementById('alert-close');

function showAlert(message) {
  alertMessage.innerText = message;
  alertContainer.style.display = 'block';
  
  setTimeout(() => {
    alertBox.style.animation = 'fade-out 0.5s ease-out';
    setTimeout(() => {
      alertContainer.style.display = 'none';
      alertBox.style.animation = '';
      showAlert2('welcome to gasps.top!');
    }, 500);
  }, 15000);
}

alertClose.addEventListener('click', () => {
  alertBox.style.animation = 'fade-out 0.5s ease-out';
  setTimeout(() => {
    alertContainer.style.display = 'none';
    alertBox.style.animation = '';
    showAlert2('welcome to gasps.top!');
  }, 500);
});

// Show the first alert when the page loads
showAlert('Please enable sound to play music. (optional)');

const alert2Container = document.getElementById('alert-container-2');
const alert2Box = document.getElementById('alert-box-2');
const alert2Message = document.getElementById('alert-message-2');

function showAlert2(message) {
  alert2Message.innerText = message;
  alert2Container.style.display = 'block';

  setTimeout(() => {
    alert2Box.style.animation = 'fade-out 0.5s ease-out';
    setTimeout(() => {
      alert2Container.style.display = 'none';
      alert2Box.style.animation = '';
    }, 500);
  }, 5000);
}