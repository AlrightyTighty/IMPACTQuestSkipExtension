# IMPACTQuestSkipExtension
Browser extension that allows you to skip quests on Code Ninjas Impact.

# How to Install
Either clone the repository or download the source code directly; you need to download the entire folder.

Once the folder is downloaded, install it as a local Chrome extension. I have not paid the $5 fee to upload the plugin to the Chrome extension store, so you will have to re-download this plugin from source every time an update is pushed.

Made by Josh from CNWK :)

# How it Works

Whoever designed the IMPACT site didn't do a very good job of keeping things secure (although, I doubt security was a huge concern given the fact that accounts don't even have passwords). The JWT used for authentication is stored in session storage instead of as an http-only cookie. This means that it can be easily scraped via the plugin. Then, the extension just sends a request to "save" the finished code to the specified project. The complete code that is saved is stored in the body of the request, so changing the request body will change the project that is saved.
