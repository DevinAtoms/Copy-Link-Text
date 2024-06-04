
chrome.contextMenus.onClicked.addListener(onClick);

function onClick( data: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab | undefined) {

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    chrome.tabs.sendMessage(tab!.id!, "getClickedEl", {frameId: data.frameId}, (text: string) => {
        chrome.scripting.executeScript({
            target: { tabId: tab!.id!, frameIds: [data.frameId!]},
            func: copyText,
            args: [text]
        })
    });
}

chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({
        title: 'Get Link Text',
        contexts: ['link'],
        id: 'link'
    });

});