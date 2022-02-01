
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    chrome.tabs.sendMessage(tabId, {type: 'getDoc'}, function (doc) {
        console.log(tab.url);
    });

})

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.tabs.sendMessage(tabs[0].id, {type: "getDoc"});
// });