---
title: "My Setup"
enableToc: true
---

## Utility Software
_Full list of art software [[art-software|here]]._

- Reference board: [PureRef](https://www.pureref.com/) and [VizRef](https://vizref.com/) for my tablet
- Reference manager: [Eagle](https://en.eagle.cool/) (Far better than Adobe Bridge in every way. I highly recommend managing reference art with tag-based methods. Many issues arise with regular folders). 
- Screenshots: [LightShot](https://app.prntscr.com/en/index.html), [GreenShot](https://getgreenshot.org/), `Win + Shift + S`, `Print key`
- Color Picker (from ref): [Windows Power Toys Color Picker](https://learn.microsoft.com/en-us/windows/powertoys/color-picker), [JCPicker](https://annystudio.com/software/colorpicker/). Art software often has a built-in color picker
- Color Palette Picker: [Coolors](https://coolors.co/), [Lospec](https://lospec.com/palette-list), [Adobe Colors](https://color.adobe.com/create/color-wheel)
- EXR Image Reader: [DJV](https://darbyjohnston.github.io/DJV/)
- Preview all kinds of Image Extensions in File Explorer: SageThumbs (supports: .PSD / .TGA / .TIFF / .BMP / +defaults +more)
- Nightlight for my eyes: [F.Lux](https://justgetflux.com/)
- Disk Folder Size Analyzer: [TreeSize](https://treesize.net/) (For when some software like ZBrush thinks it's funny to fill up your entire disk with saves)

## Project Folder Structure
Always keep project files organized, and try to use a similar folder structure across different projects.

>[!example] Example structure
>📂Projects<br>
>├── 📂Character Projects<br>
>│&emsp;&emsp;├── 📂Astro Girl<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Reference<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄AstroGirl.pur<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄StyleGuide.pur<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄links.txt<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄image.png<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Textures<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Blaster<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├──📄blaster_ao.png<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄blaster_cavity.png<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄blaster_albedo.png<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄...<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Bodysuit<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂...<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Substance Painter Output<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📂Baked Maps Backup<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Low<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄AstroGirl.fbx<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄AstroGirl-test2.fbx<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Rigged Character<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Renders<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Render Output<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Screenshots<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Compositing Resources<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂Final Presentation<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📂PS Edits<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄RenderCollection.psd<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄Render Info.txt<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄WIP Astro Girl.mview<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Other<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Blender<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂ZBrush<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄AstroGirlProject1.zpr<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄AstroGirlProject2.zpr<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;├── 📄AstroGirlProject3.zpr<br>
>│&emsp;&emsp;│&emsp;&emsp;│&emsp;&emsp;└── 📄...<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Marmoset Toolbag<br>
>│&emsp;&emsp;│&emsp;&emsp;├── 📂Substance Painter<br>
>│&emsp;&emsp;│&emsp;&emsp;└── 📂... names of other software used<br>
>│&emsp;&emsp;└── 📂Divine Paladin<br>
>├── 📂Creature Projects<br>
>├── 📂Environment Projects<br>
>└── 📂Studies

>[!info] Some notes related to this structure
>
>Don't have the textures in the folder of your texturing software and rather have them in their own "Textures" folder. This is because one will likely edit the textures in multiple software like the texturing software as well as Photoshop, and often also use them for the final portfolio showcase or select them in a game engine. The "Low" folder is used for the retopologized model. One will have to export often into here for baking in Marmoset or if some changes to the model need to be re-imported into Substance Painter. A "Rigged Character", "Final Character" or whatever one wants to call it is also a good folder to have, if one is working with a game engine like Unreal.
>
>Also note that this structure is only an example and one will probably need quite a bit more folders, depending on the project and situation at hand. But starting a project with an already roughly set file structure, will make the experience a lot more enjoyable.

## The Hardware I Use
- **Huion Kamvas 22 Plus** _(21.5 inch - 1920 x 1080 (16:9) - 60Hz -140% sRGB Color Gamut (QLED) - Etched Anti-Glare Glass - Fully Laminated - 1200:1 Contrast Ratio)_
- **iPad Pro 11 4th Gen** _(11 inch - 2388 x 1668 (7:5) - Dynamic refresh rate from 24Hz to 120 Hz (ProMotion) - P3 D65 Color Gamut (A P3 display where sRGB is properly mapped) - Liquid Retina panel - IPS - 600 nits - Fully Laminated - adjust color and intensity to match ambient light (True Tone) - anti-reflective coating (1.8% reflectivity))_
- **64GB DDR4 RAM** (I intend to upgrade to 128GB as for specific things like high-res texture baking 64GB just doesn't cut it)
- **10 key less Mechanical Keyboard** _(Master keys 730 - Cherry MX Red Switches)_
- **Wireless Mouse with Infinite Scroll Wheel toggle** _(Logitech G502 X Lightspeed)_
- **DT 770 Pro** _(Studio Headphones)_
- **U-PHORIA UMC202HD** _(Sound Interface)_
- **Windows 11**
- **Sapphire Pulse AMD Radeon RX 5700 GPU** _(8GB VRAM - 1.75 GHz Clock Speed - Release 2019)_
- **AMD Ryzen 9 5900X CPU** _(12 Cores - 24 Threads - 3.7 GHz-4.8 GHz Clock Speed - 7 nm - Release 2020)_
- **Samsung C32JG50 WQHD Monitor** _(2560 x 1440 px - 32 Inch / Zoll - 144 Hz)_