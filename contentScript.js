// Read from the page's localStorage

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("content script received message");
  if (message.type === "LOCALSTORAGE_DATA") {
    (async () => {
      // Send the data to the  background or popup

      let storedData = await chrome.storage.session.get();

      console.log(window.sessionStorage);
      console.log(storedData);
      console.log("token: ", JSON.parse(window.sessionStorage.auth).token);

      sendResponse({ data: JSON.parse(window.sessionStorage.auth).token });
    })();
    return true;
  }
});
