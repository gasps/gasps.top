// Get the element with the ID "copyText"
const copyText = document.getElementById("copyText");

// Add a click event listener to the element
copyText.addEventListener("click", function() {
  // Create a new textarea element and set its value to the text to be copied
  const textarea = document.createElement("textarea");
  textarea.value = copyText.textContent;

  // Add the textarea element to the DOM
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the textarea element from the DOM
  document.body.removeChild(textarea);

  // Display an alert to let the user know the text has been copied
    showEventAlert('Text copied')
});
