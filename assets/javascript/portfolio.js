'use strict';

// Request sound/speaker permission when the page loads
window.addEventListener('load', () => {
  // Add click event listener to button element
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', () => {
    if (typeof app.audioElement.play() === 'function') {
      app.audioElement.play()
      .then(() => {
        // permission granted, play the sound
        app.audioElement.play();
      })
      .catch((error) => {
        // permission denied or error occurred
        console.error('Unable to play sound:', error);
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
