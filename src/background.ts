chrome.runtime.onInstalled.addListener(() => {
        chrome.contextMenus.create({
            title: 'Copy Link Text',
            contexts: ['link'],
            id: 'link'
        });
    });

chrome.contextMenus.onClicked.addListener((data, tab) => {
    chrome.tabs.sendMessage(tab!.id!, "getClickedEl", { frameId: data.frameId });
});


