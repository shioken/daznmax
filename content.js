const applyShowPanel = () => {
    chrome.storage.local.get("maximized", function (value) {
        maintag = document.getElementsByTagName('main');
        maintag[0].style["maxWidth"] = "100%";
    });
}

applyShowPanel();

chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
    if (request.update == true) {
        applyShowPanel();
        sendResponse({ "res": true });
    }
});
