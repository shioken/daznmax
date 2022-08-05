const applyShowPanel = () => {
    chrome.storage.local.get("maximized", function (value) {
        maintag = document.getElementsByTagName('main');
        if (maintag.length > 0) {
            maintag[0].style["maxWidth"] = "100%";
        }

        asides = document.getElementsByTagName("aside");
        if (asides.length > 0) {
            asides[0].remove();
        }
    });
}

applyShowPanel();

chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
    if (request.update == true) {
        applyShowPanel();
        sendResponse({ "res": true });
    }
});
