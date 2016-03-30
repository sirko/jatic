// This script is only injected when the popup form is loaded
// (see popup.js), so we don't need to worry about waiting for page load
function getSelectedText(){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    return range ? range.cloneContents().textContent : '';
  };

// Object to hold information about the current page
var pageInfo = {
    'title': document.title,
    'url': window.location.href,
    'summary': getSelectedText()
};

// Send the information back to the extension
chrome.extension.sendMessage(pageInfo);
