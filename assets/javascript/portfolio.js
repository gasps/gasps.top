'use strict';


const sources = [
  {
    audio: 'assets/mp4/Babytron - King of the Galaxy.mp4',
    video: 'assets/mp4/Babytron - King of the Galaxy.mp4',
    title: 'Playing: Babytron - King of the Galaxy',
    link: 'https://gasps.top/links/King%20of%20the%20Galaxy'
  },
  {
    audio: 'assets/mp4/Babytron - Mazeltron ft BLP Kosher.mp4',
    video: 'assets/mp4/Babytron - Mazeltron ft BLP Kosher.mp4',
    title: 'Playing: Babytron - Mazeltron ft BLP Kosher',
    link: 'https://gasps.top/links/Mazeltron'
  },
  {
    audio: 'assets/mp4/Babytron - Out on Bond.mp4',
    video: 'assets/mp4/Babytron - Out on Bond.mp4',
    title: 'Playing: Babytron - Out on Bond',
    link: 'https://gasps.top/links/Out%20on%20Bond'
  },
  {
    audio: 'assets/mp4/Babytron - Ouuwee.mp4',
    video: 'assets/mp4/Babytron - Ouuwee.mp4',
    title: 'Playing: Babytron - Ouuwee/See Yall in June',
    link: 'https://gasps.top/links/Ouuwee'
  },
  {
    audio: 'assets/mp4/Babytron - Prince of the Mitten 2.mp4',
    video: 'assets/mp4/Babytron - Prince of the Mitten 2.mp4',
    title: 'Playing: Babytron - Prince of the Mitten 2',
    link: 'https://gasps.top/links/Prince%20of%20the%20Mitten%202'
  },
  {
    audio: 'assets/mp4/J.I.D - Off Deez ft J. Cole.mp4',
    video: 'assets/mp4/J.I.D - Off Deez ft J. Cole.mp4',
    title: 'Playing: J.I.D - Off Deez ft J. Cole',
    link: 'https://gasps.top/links/Off%20Deez'
  },
  {
    audio: 'assets/mp4/Kodak Black - No Flockin Freestyle.mp4',
    video: 'assets/mp4/Kodak Black - No Flockin Freestyle.mp4',
    title: 'Playing: Kodak Black - No Flockin Freestyle',
    link: 'https://gasps.top/links/No%20Flockin%20Freestyle'
  },
  {
    audio: 'assets/mp4/Rio Da Yung OG & RMC Mike - S.O.T.B.mp4',
    video: 'assets/mp4/Rio Da Yung OG & RMC Mike - S.O.T.B.mp4',
    title: 'Playing: Rio Da Yung OG & RMC Mike - S.O.T.B.',
    link: 'https://gasps.top/links/S.O.T.B'
  },
  {
    audio: 'assets/mp4/Waffle House - BabyTron Ft. Drego & Beno, Babyfxce E, RMC Mike, ShittyBoyz, Prince Jefe, & J1Hunnit.mp4',
    video: 'assets/mp4/Waffle House - BabyTron Ft. Drego & Beno, Babyfxce E, RMC Mike, ShittyBoyz, Prince Jefe, & J1Hunnit.mp4',
    title: 'Playing: Babytron - Waffle House ft 7 other ppl',
    link: 'https://gasps.top/links/Waffle%20House'
  },
  {
    audio: 'assets/mp4/Young Thug - Bestfriend.mp4',
    video: 'assets/mp4/Young Thug - Bestfriend.mp4',
    title: 'Playing: Young Thug - Bestfriend',
    link: 'https://gasps.top/links/Bestfriend'
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
  app.audioElement.volume = 0.2;

  const video = document.getElementById('background');
  video.src = source.video;
  app.videoElement = video;
  app.videoElement.volume = 0;

    // Update label with song title
    const titleElement = document.getElementById('song-title');
    const link = document.createElement('a');
    link.href = source.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerText = source.title;
    titleElement.innerHTML = '';
    titleElement.appendChild(link);

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
    showAlert2('welcome to gasps.top!')
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