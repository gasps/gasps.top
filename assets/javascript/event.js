
const eventAlertContainer = document.getElementById('event-alert-container');
const eventAlertBox = document.getElementById('event-alert-box');
const eventAlertMessage = document.getElementById('event-alert-message');
const eventAlertClose = document.getElementById('event-alert-close');
  


// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
    if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
       event.preventDefault();
     showEventAlert("This feature is disabled");
    }
    if(event.ctrlKey && (event.key === "C")) {
       event.preventDefault();
       showEventAlert("This feature is disabled");
    }
    if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
       event.preventDefault();
       showEventAlert("This feature is disabled");
    }
    if(event.ctrlKey && (event.key === "I" || event.key === "i" || event.key === "ı")) {
       event.preventDefault();
       showEventAlert("This feature is disabled");
    }
    if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
       event.preventDefault();
       showEventAlert("This feature is disabled");
    }
    if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
       event.preventDefault();
       showEventAlert("This feature is disabled");
    } // remove f12 to enable dev   tools
	if(event.key === "F12") {
	event.preventDefault();
	}
});

  });
            // stop right click
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
  }
});

  let alertContainerCount = 0;

  function showEventAlert(message) {
    // create a new alert box
    const alertBox = document.createElement('div');
    alertBox.classList.add('event-alert-box');
    alertBox.style.right = '10px'; // adjust the right value to change the position
    // create a new close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('event-alert-close');
    closeButton.innerText = 'X';
  
    // append the close button to the alert box
    alertBox.appendChild(closeButton);
  
    // create a new alert message
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('event-alert-message');
    alertMessage.innerText = message;
  
    // append the alert message to the alert box
    alertBox.appendChild(alertMessage);
  
    // increment alert box count and reset if limit is reached
    alertContainerCount++;
    if (alertContainerCount >= 6) {
        alertContainerCount = 0;
        eventAlertContainer.innerHTML = '';
     }
  
    // append the alert box to the bottom of the container
    eventAlertContainer.appendChild(alertBox);
  
    // show the alert
    eventAlertContainer.style.display = 'flex';
    eventAlertContainer.style.flexDirection = 'column';
    eventAlertContainer.style.justifyContent = 'flex-end';
  
    // schedule the alert to be removed after 15 seconds
    setTimeout(() => {
      alertBox.style.animation = 'fade-out 0.5s ease-out';
      setTimeout(() => {
        alertContainer.remove();
        alertContainerCount--;
      }, 500);
    }, 15000);
  
    // add click event listener to the close button
    closeButton.addEventListener('click', () => {
      alertBox.style.animation = 'fade-out 0.5s ease-out';
      setTimeout(() => {
        alertBox.remove();
        alertContainerCount--;
      }, 500);
    });
  }
  
  eventAlertClose.addEventListener('click', () => {
    eventAlertContainer.style.display = 'none';
  });
