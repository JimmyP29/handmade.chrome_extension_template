const handleOnPageClick = (info: any, tab: any) => {
  console.log("Context Info: ", info);
  console.log("Context Tab: ", tab);
};

const handleOnSelectionClick = (info: any, tab: any) => {
  console.log("Context Info: ", info);
  console.log("Context Tab: ", tab);
};

export default chrome.runtime.onInstalled.addListener(() => {
  console.log("Background Service Worker working...");

  chrome.contextMenus.create({
    id: "some-id-page",
    title: "New Menu Option - Page",
    contexts: ["page"],
  });
  chrome.contextMenus.create({
    id: "some-id-selection",
    title: "New Menu Option - Selection",
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const { menuItemId } = info;

    if (menuItemId === "some-id-page") handleOnPageClick(info, tab);

    if (menuItemId === "some-id-selection") handleOnSelectionClick(info, tab);
  });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "open_side_panel") {
    chrome.windows.getCurrent((w) => {
      chrome.sidePanel.open({ windowId: w.id! });
      console.log("Command/Ctrl + O triggered! :)");
    });
  }
});
