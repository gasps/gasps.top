// new Code
let isMuted = false;
const video = document.getElementById('vid');
const muteButton = document.getElementById('muteButton');


const sources = [
    {
        audio: 'assets/songs/ikillpeople.mp4',
        video: 'assets/songs/ikillpeople.mp4',
        title: 'Trippie Redd - I Kill People'
    },
    {
        audio: 'assets/songs/turksandcaicos.mp4',
        video: 'assets/songs/turksandcaicos.mp4',
        title: 'Rodwave - Turks & Caicos'
    },
    {
        audio: 'assets/songs/newopp.mp4',
        video: 'assets/songs/newopp.mp4',
        title: 'Sha Gz - New Opp'
    },
    {
        audio: 'assets/songs/psa.mp4',
        video: 'assets/songs/psa.mp4',
        title: 'Kay Flock - PSA'
    },
    {
        audio: 'assets/songs/getback.mp4',
        video: 'assets/songs/getback.mp4',
        title: 'Sha Ek x Pj Glizzy - Get Back'
    },
  ];


  function toggleMute() {
    const volumeIcon = document.getElementById('volumeIcon');
    const muteIcon = document.getElementById('muteIcon');
  
    const video = document.getElementById('vid');
  
    if (isMuted) {
      video.muted = false;
      volumeIcon.style.display = 'inline-block';
      muteIcon.style.display = 'none';
      isMuted = false;
    } else {
      video.muted = true;
      volumeIcon.style.display = 'none';
      muteIcon.style.display = 'inline-block';
      isMuted = true;
    }
  }
  
  // Modify your randomizeVideo function to handle muting/unmuting on video change
  function randomizeVideo() {
    const randomSource = getRandomSource();
    video.src = randomSource.video;
    document.getElementById('song-title').textContent = `♪ ${randomSource.title}`;
    video.volume = 0.5;
    if (isMuted) {
      video.muted = true;
      muteButton.classList.add('muted');
    } else {
      video.muted = false;
      muteButton.classList.remove('muted');
    }
  
    video.addEventListener('ended', onVideoEnded);
    video.play();
  }

  function onVideoEnded() {
    // Remove the 'ended' event listener to prevent multiple calls
    const video = document.getElementById('vid');
    video.removeEventListener('ended', onVideoEnded);

    // Play a new random video
    randomizeVideo();
}

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  function getRandomSource() {
    const shuffledSources = shuffleArray(sources);
    const randomIndex = Math.floor(Math.random() * shuffledSources.length);
    return shuffledSources[randomIndex];
  }


//Clock
function getTime() {
    var date = new Date();
    var h = (date.getHours() <= 9) ? "0" + date.getHours() : date.getHours();
    var m = (date.getMinutes() <= 9) ? "0" + date.getMinutes() : date.getMinutes();
    var s = (date.getSeconds() <= 9) ? "0" + date.getSeconds() : date.getSeconds();
    $("#time").text(`${h}:${m}:${s}`);
}
setInterval(getTime, 1000);
getTime();


//Colored Text
let colorsArr = [
    "red",
    "cyan",
    "purple",
    "orange"
]
let colori = 0;
setInterval(() => {
    document.documentElement.style.setProperty('--color', colorsArr[colori]);
    if (colori == colorsArr.length - 1) {
        colori = 0
    } else {
        colori++
    };
}, 2000);


//Hit Counter
setTimeout(() => {
    $("#visited").text(($(".hitCounter").text().replace(/^0+/, '')));
    $(".hitCounter").remove();
}, 1000);


//Dropdown Menu
let drp = false;
let alwdrp = true;

function dropDown() {
    if (!drp && alwdrp) {
        alwdrp = false;
        $("#dropDownContent").css("display", "block");
        $("#widgetContainer").css("height", "340px");
        $("#widget").css("height", "334px");
        setTimeout(() => {
            $("#dropDownContent").css("opacity", "1");
        }, 50);
        setTimeout(() => {
            $("#dropDownContent div a").each(function (i) {
                ;
                $(this).delay(100 * i).animate({
                    'opacity': 1.0
                }, 350);
            });
        }, 1250);
        drp = true;
        setTimeout(() => {
            alwdrp = true;
        }, 2050)
    } else if (drp && alwdrp) {
        alwdrp = false;
        $($("#dropDownContent div a").get().reverse()).each(function (i) {
            ;
            $(this).delay(100 * i).animate({
                'opacity': 0.0
            }, 10);
        });
        setTimeout(() => {
            $("#dropDownContent").css("opacity", "0");
            $("#widget").css("height", "29px");
            $("#widgetContainer").css("height", "38px");
            setTimeout(() => {
                $("#dropDownContent").css("display", "none");
                alwdrp = true;
            }, 2050);
            drp = false;
        }, 1400);
    }
}



//Main Function
mainActive = false;
setTimeout(() => {
    if (document.getElementById("vid").paused) {
        $("#clickToPlay").css("opacity", "1");
    } else {
        main()
    }
}, 1000);



function main() {
    if (mainActive) return;
    mainActive = true;
    $("#clickToPlay").css("opacity", "0");
    $("#main").css("opacity", "1");
    $("#widgetContainer").css("opacity", "1");
    $(".hitCount").css("opacity", "1");
    setTimeout(() => {
        $("#clickToPlay").css("display", "none");
    }, 1050);
}

//Start Main Function
$("#clickToPlay").click(() => {
    main();
    randomizeVideo();
});

function search_list() {
	let input = document.getElementById('searchbar').value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName('groups1');
	let z = document.getElementsByClassName('links1');

	for (let i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.opacity = 0;
		} else {
			x[i].style.opacity = 1;
		}
	}

	for (let j = 0; j < z.length; j++) {
		if (!z[j].innerHTML.toLowerCase().includes(input)) {
			z[j].style.opacity = 0;
		} else {
			z[j].style.opacity = 1;
		}
	}
}



 //Border
    borderTop = 0;
    borderRight = 0;
    borderBottom = 0;
    borderLeft = 0;

    function topBorder() {
        let int = setInterval(() => {
            borderTop++;
            if (borderTop <= 100) {
                $("#borderTop").css("width", borderTop + "%");
            } else {
                rightBorder();
                clearInterval(int);
                $("#borderTop").css({
                    "left": "",
                    "right": "0"
                });
                setTimeout(() => {
                    let int = setInterval(() => {
                        borderTop--;
                        if (borderTop >= 0) {
                            $("#borderTop").css("width", borderTop + "%");
                        } else {
                            $("#borderTop").css({
                                "right": "",
                                "left": "0"
                            });
                            clearInterval(int);
                        }
                    }, 14);
                }, 250);
            }
        }, 14);
    }

    function rightBorder() {
        let int = setInterval(() => {
            borderRight++;
            if (borderRight <= 100) {
                $("#borderRight").css("height", borderRight + "%");
            } else {
                bottomBorder();
                clearInterval(int);
                $("#borderRight").css({
                    "top": "",
                    "bottom": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderRight--;
                        if (borderRight >= 0) {
                            $("#borderRight").css("height", borderRight + "%");
                        } else {
                            $("#borderRight").css({
                                "bottom": "",
                                "top": "0"
                            });
                            clearInterval(int);
                        }
                    }, 10);
                }, 450);
            }
        }, 10);
    }

    function bottomBorder() {
        let int = setInterval(() => {
            borderBottom++;
            if (borderBottom <= 100) {
                $("#borderBottom").css("width", borderBottom + "%");
            } else {
                leftBorder();
                clearInterval(int);
                $("#borderBottom").css({
                    "right": "",
                    "left": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderBottom--;
                        if (borderBottom >= 0) {
                            $("#borderBottom").css("width", borderBottom + "%");
                        } else {
                            $("#borderBottom").css({
                                "left": "",
                                "right": "0"
                            });
                            clearInterval(int);
                        }
                    }, 14);
                }, 250);
            }
        }, 14);
    }

    function leftBorder() {
        let int = setInterval(() => {
            borderLeft++;
            if (borderLeft <= 100) {
                $("#borderLeft").css("height", borderLeft + "%");
            } else {
                topBorder();
                clearInterval(int);
                $("#borderLeft").css({
                    "bottom": "",
                    "top": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderLeft--;
                        if (borderLeft >= 0) {
                            $("#borderLeft").css("height", borderLeft + "%");
                        } else {
                            $("#borderLeft").css({
                                "top": "",
                                "bottom": "0"
                            });
                            clearInterval(int);
                        }
                    }, 10);
                }, 450);
            }
        }, 10);
    }
    topBorder();


    function copyText(text) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showNotification(); // Call the notification function
      }
      
      function showNotification() {
        const notification = document.getElementById('notification');
        notification.style.visibility = 'visible';
        notification.style.opacity = '1';
        setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.visibility = 'hidden';
        }, 2000); // Change the timeout value (in milliseconds) as needed
      }
      
      