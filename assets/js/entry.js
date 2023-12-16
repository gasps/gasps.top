// Select the unordered list
const entryList = document.getElementById('entryList');

// Function to add an entry with a link to the list
function addEntry(text, href) {
    const listItem = document.createElement('li'); // Create a list item
    const link = document.createElement('a'); // Create an anchor element
    link.textContent = text; // Set the text content of the link
    link.href = href; // Set the href attribute of the link
    link.target = "_blank"; // Open link in a new tab/window
    listItem.appendChild(link); // Append the link to the list item
    entryList.appendChild(listItem); // Append the list item to the list
}

// Usage:
// Call addEntry('Your new entry text', 'URL') to add a new entry with a link to the list
// For example:
addEntry('Motion - TrafficerMC fork (Deprecated)', 'github.com/devgasps/Motion');
addEntry('Lyra Addon - A Meteor Client Addon', 'github.com/RattlesHyper/Lyra-Addon');