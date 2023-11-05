# Visit the 3D Artist's Handbook
https://epicrex.github.io/3d-artists-handbook<br>

I'm happy to hear any feedback and requests on things to improve or add, just message me on discord, username: epicrex

`⚠️There is currently a bug on Firefox and Safari where picutres won't load in specific situations. Until I fix it and you encounter it, simply press F5⚠️`

_(You can see the raw pages here on the [v4 branch](https://github.com/Epicrex/3d-artists-handbook/tree/v4))_
# Info About this Handbook

The [3D Artist's Handbook](https://epicrex.github.io/3d-artists-handbook) lives on [GitHub Pages](https://github.com/Epicrex/3d-artists-handbook/actions) and uses [quartz](https://github.com/jackyzha0/quartz) as frontend and [Node.js](https://nodejs.org/en) as backend.

### Handbook's Features
**Fully Available Offline** 📶❌<br>
You can download the entire handbook for offline reding, just follow [these](#how-to-read-the-handbook-offline) simple steps.

**Universal Search** 🌍🔍<br>
On the top left or top of every page, is a search field which can be used to search for headers or words all across the handbook.

**Dark and Light Theme** 🌑☀️<br>
Beside the search bar of every page, is a sun/ moon icon, which are used to switch between the light and dark mode.

**Quickly Return to Home Page** 🏠<br>
On the right or top of every page, is the title "🦑 3D Artist's Handbook". Clicking this will send you back to the home page.

**Explorer** 📂<br>
The explorer shows all the pages nicley structured by topic, great for quickly navigating around the handbook. (It's located on the left and currently not available on mobile. I've added the explorer to the home page so mobile users can still use it and hopefully soon mobile users will also be able to use the explorer)

**Table of Contents** 📑<br>
The table of contents shows all the mayor headers on the current page. (It's located on the right and at the bottom on mobile)

**Backlinks** 🔗<br>
The backlink section shows all other pages that link to the current page you're on. (It's located on the right and at the bottom on mobile)

**Interactive Graph** 🗺️<br>
The interactive graph is a spider web of page connections. It visualizes how the pages link to each other. One can zoom in and out, pan the view, click the dots to navigate to the pages and click the little icon at the top right of the box to enlarge the interactive graph. (It's located on the right and at the bottom on mobile)

**Embedded YouTube Videos** ▶️<br>
  All videos found across the handbook are embedded YouTube videos. This gives the videos nice thumbnails and allows for them to be played directly within the handbook. If it makes sense, I have also set the videos to start at a specific time.
  
**Read Time & Last Edit Date** ⏳📅<br>
  At the top of every page the average read time can be found as well as the date, when the page was last edited.
  
**Instant Page Load Times** ⏱️<br>
  There are no load times when clicking on links to other internal pages.
  
**Collapsible Sections** 🔻<br>
  Collapsible sections are found all over the handbook. They can be expanded with the `ᐯ` (arrow down) icon.


# How to Read the Handbook Offline
There are 2 options when it comes to offline viewing. The localhost method being the better experience but only working on Windows, Mac and Linux.

## Localhost Method
You will need to install the [Node.js](https://nodejs.org/en/download) framework. It's available on Windows, Mac and Linux.

**1.** Download the zip (and unzip) or clone the repository from the [v4 branch](https://github.com/Epicrex/3d-artists-handbook/tree/v4) (Click `<> Code` then click `Download ZIP`)<br>

**2.** Execute the following commands in succession in the repository folder you just downloaded (If you're on Windows you can type `cmd` into the address bar of your file explorer to open a command prompt in that folder):

```cmd
npm i
npx quartz build --serve
```

**3.**
Now go to http://localhost:8080 in your browser. The page will be an exact copy of the online handbook.

## Obsidian Method
You will need [Obsidian](https://obsidian.md/), which is a completely free note-taking software/ app available on Windows, Mac, Linux, Android, iOS and iPadOS.

**1.** Download the zip (and unzip) or clone the repository from the [v4 branch](https://github.com/Epicrex/3d-artists-handbook/tree/v4) (Click `<> Code` then click `Download ZIP`)<br>

**2.** Open Obsidian and click `Open folder as vault`. Then navigate to the "3d-artist-handbook" folder you just downloaded and select the "content" folder inside of it. This will open the "content" folder in Obsidian and all the pages will be there for you to read.<br>

**3.**_(optional)_ If you want to do this in a more clean way, then create a folder called "Offline_3D-Artists-Handbook". Then open the "3d-artist-handbook" you just downloaded from GitHub, and copy paste the files inside the "content" folder to the "Offline_3D-Artists-Handbook".


**_Don't forget to give this GitHub repo a ✨ so you can easily get back to it._**
