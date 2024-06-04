var element: HTMLElement;

document.addEventListener("contextmenu", function(event){
    element = event.target as HTMLElement;
});

chrome.runtime.onMessage.addListener(function() {
    const text = element.innerText
    navigator.clipboard.writeText(text)
});