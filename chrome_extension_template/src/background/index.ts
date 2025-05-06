export default chrome.runtime.onInstalled.addListener(() => {
  console.log("Background Service Worker working...");
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "open_side_panel") {
    chrome.windows.getCurrent((w) => {
      chrome.sidePanel.open({ windowId: w.id! });
      console.log("Command/Ctrl + O triggered! :)");
    });
  }
});
