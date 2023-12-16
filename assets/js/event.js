	// stop keyboard shortcuts
    window.addEventListener("keydown", (event) => {
        if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
           event.preventDefault();    }
        if(event.ctrlKey && (event.key === "C")) {
           event.preventDefault();    }
        if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
           event.preventDefault();    }
        if(event.ctrlKey && (event.key === "I" || event.key === "i" || event.key === "ı")) {
           event.preventDefault();    }
        if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
           event.preventDefault();    }
        if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
           event.preventDefault();    }
        if(event.key === "F12") {
        event.preventDefault();
        }
                    // stop right click
                    document.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                  });
        });




// code for 404 page

const domain = window.location.hostname
var element = document.getElementById("hostname");
element.innerHTML = domain

var subdomain = window.location.hostname.split('.')[0];
var errorElement = document.getElementById('error-message');

if (subdomain !== 'm0tion') {
  errorElement.innerHTML = 'Sorry, the subdomain you requested does not exist.';
} else if (subdomain !== 'moti0n') {
    errorElement.innerHTML = 'Sorry, fake';
}