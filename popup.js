const cb = document.getElementById("maxmized");
chrome.storage.local.get("maxmized", function (value) {
    cb.checked = value.shown;
});

cb.onchange = event => {
    chrome.storage.local.set({ "maxmized": cb.checked }, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { update: true }, item => {
                console.log("hoge");
            });
        });
    });
}
