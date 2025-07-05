chrome.storage.session.setAccessLevel({ accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS" });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content script received message");
  if (message.type === "LOCALSTORAGE_DATA") {
    (async () => {
      // Send the data to the  background or popup

      let storedData = await chrome.storage.session.get();

      console.log(storedData);

      sendResponse({ data: storedData });
    })();
    return true;
  }
});
