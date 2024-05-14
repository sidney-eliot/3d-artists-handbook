# Visit the 3D Artist's Handbook
https://sidney-eliot.github.io/3d-artists-handbook<br>

I'm happy to hear any feedback and requests on things to improve or add, just message me on Discord, username: epicrex

# Handbook's Features
The [3D Artist's Handbook](https://sidney-eliot.github.io/3d-artists-handbook) lives on [GitHub Pages](https://github.com/sidney-eliot/3d-artists-handbook/actions), uses [quartz](https://github.com/jackyzha0/quartz) as frontend and [Node.js](https://nodejs.org/en) as backend.

📶❌ **Fully Available Offline**<br>
You can download the entire handbook for offline reading. Just follow [these](#how-to-read-the-handbook-offline) simple steps.

🌍🔍 **Universal Search**<br>
Use the search field to search for page names or words all across the handbook. _(It's located at the top left.)_

🌑☀️ **Dark and Light Theme**<br>
Use the sun and moon icons to switch between light and dark mode. _(They are located at the top left.)_

🏠 **Quickly Return to Home Page**<br>
Click the title of the handbook ("3D Artist's Handbook"), to quickly return to the home page. _(It's located at the top left.)_

📂 **Explorer**<br>
Use the explorer to see all pages nicely structured by topics, great for quickly navigating the handbook. _(It's located on the left. It's currently not available on mobile devices and when the browser window is pulled too small, for this reason I've also added the explorer to the home page. Hopefully soon, the explorer will be fully compatible with smaller screens.)_

📑 **Table of Contents**<br>
Use the table of contents to view and navigate to all mayor headers of the current page you're on. _(It's located on the right and at the bottom on mobile.)_

🔗 **Backlinks**<br>
Use backlinks to navigate backwards, to pages that link to the current page you're on. _(It's located on the right and at the bottom on mobile.)_

🗺️ **Interactive Graph**<br>
Use the interactive graph to see how the pages are linked to one another, visualized through a spider web of connections. You could also use it as an alternative way to navigate through the handbook, although I don't recommend it. _(It's located on the right and at the bottom on mobile. Its controls are as follows: Zooming, panning, clicking the node dots, enter full screen by clicking the icon at the top right of the box.)_

👁️ **Page Preview**<br>
Hover links that lead to other pages within the handbook, to get an interactive preview of that page. _(You can tell internal from external links apart by the design of the link, internal links will have a box like background.)_

▶️ **Embedded YouTube Videos** <br>
All videos found across the handbook are embedded YouTube videos. This gives the videos nice thumbnails and allows for them to be played directly within the handbook. If it makes sense, I've also set the videos to start at a specific time.
  
⏳📅 **Read Time & Last Edit Date**<br>
Every page shows an average read time as well as the last date it was edited on. _(This info is located at the top. The date is a new feature I've added, so it won't work retrospectively, meaning many pages will have the same generic date.)_

⏱️ **Instant Page Load Times**<br>
There are no load times when clicking on links to other internal pages.
  
🔻 **Collapsible Sections**<br>
Collapsible sections are found all over the handbook. Clicking them will expand that within. I use them to keep things more digestible.


# How to Read the Handbook Offline
There are **2 methods** when it comes to offline viewing. The localhost method being the better experience but only working on Windows, Mac and Linux.

### Localhost - Method 1
You will need to install the [Node.js](https://nodejs.org/en/download) framework. It's available on Windows, Mac and Linux.

**1.** Download the zip (and unzip) or clone the repository from the [v4 branch](https://github.com/sidney-eliot/3d-artists-handbook/tree/v4) (Click `<> Code` then click `Download ZIP`)<br>

**2.** Execute the following commands in succession in the repository folder you just downloaded, any type of terminal will do the job (If you're on Windows, you can type "cmd" into the address bar of your file explorer to open a terminal in that folder):

_Terminal, CommandLine, PowerShell or Bash:_
```
npm i
npx quartz build --serve
```

**3.**
Now go to http://localhost:8080 in your browser. The page will be an exact copy of the online handbook.

### Obsidian - Method 2
You will need [Obsidian](https://obsidian.md/), which is a completely free note-taking software/ app available on Windows, Mac, Linux, Android, iOS and iPadOS.

**1.** Download the zip (and unzip) or clone the repository from the [v4 branch](https://github.com/sidney-eliot/3d-artists-handbook/tree/v4) (Click `<> Code` then click `Download ZIP`)<br>

**2.** Open Obsidian and click `Open folder as vault`. Then navigate to the "3d-artist-handbook" folder you just downloaded and select the "content" folder inside of it. This will open the "content" folder in Obsidian and all the pages will be there for you to read.<br>

**3.**_(optional)_ If you want to do this in a more clean way, then create a folder called "Offline_3D-Artists-Handbook". Then open the "3d-artist-handbook" you just downloaded from GitHub, and copy and paste the files inside the "content" folder to the "Offline_3D-Artists-Handbook".

---

**_Don't forget to give this GitHub repo a ✨, so you can easily get back to it._**
