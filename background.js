//background.js--this is just a test to try changing things when icon clicked

//called when user clicks on browser action
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var activeTab = tabs[0];
		//sends message to current tab
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});
