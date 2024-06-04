

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function getAllTabs() {

    let queryOptions = {
        lastFocusedWindow: true
    };

    let tabs = await chrome.tabs.query(queryOptions);
    return tabs;
}

const exec = (tab: any, func: any, args: any) => {
    chrome.scripting.executeScript({
        target: { tabId: tab, allFrames: true },
        func: func,
        args: args,
    });
}

export { getCurrentTab, getAllTabs, exec }