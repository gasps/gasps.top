function toggleMute(event) {
  var video = document.getElementById("audio");
  if (event.target.id !== "copyText" && !event.target.closest("#alert-container") && !event.target.closest(".event-alert-box")) {
    video.muted = !video.muted;
  }
}

document.body.addEventListener("click", toggleMute);
