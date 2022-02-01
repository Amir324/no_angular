

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.tabs.sendMessage(tabs[0].id, { type: "getCount" }, function (profile) {
        if (profile) {
            profile.forEach(item => {
                if (item.title) {
                    if (item.date === "Current") {
                        document.querySelector(".current").innerHTML += `<li>- <strong>${item.title}</strong> at <strong>${item.company}</strong></li>`
                    } else {
                        document.querySelector(".past").innerHTML += `<li>- <strong>${item.title}</strong> at <strong>${item.company}</strong></li>`
                    }
                }

                if (item.school) {
                    document.querySelector(".education").innerHTML += `<li>- <strong>${item.school}. </strong>  ${item.degree}  ${item?.fos || ''} </li>`
                }

            });

            
        let copyButton = document.querySelector(".copy-button");

        copyButton.addEventListener("click",

            function copyText(e) {
                let element = document.querySelector("#legacy")
                var range, selection, worked;

                if (document.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(element);
                    range.select();
                } else if (window.getSelection) {
                    selection = window.getSelection();
                    range = document.createRange();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }

                try {
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges()
                    copyButton.innerText = "COPIED !"
                }
                catch (err) {
                    console.error(err)
                    alert('Unable to copy the address');
                }
            }
          )

        } else {
            console.error("profile obj is empty")
        }


      

    });
});

