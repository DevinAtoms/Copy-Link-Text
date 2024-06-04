var element: HTMLElement;

document.addEventListener("contextmenu", function(event){
    element = event.target as HTMLElement;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const response = element.innerText
    console.log(response)
    sendResponse(response);
});