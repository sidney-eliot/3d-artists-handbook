---
title: "⚪ZBrush"
enableToc: true
---

![[zbrush_banner.png]]

## General Things to Be Aware Of
- My workflow between ZBrush and Blender is [[workflow-between-zbrush-and-blender|here]]
- It's good to stay on the left side of the model (right side from the characters perspective). _This is because of Mirror and Weld_
- Unlike in other software, subdivision in ZBrush are destructive. Even if one goes back to SubDiv level 1 and deletes all higher levels, the SubDiv will have dulled the edges in an irreversible way. This doesn't matter if you'll be adding a SubDiv at some point again to the object, because this edge dulling effect does not stack.

   This can make the mesh unusable as a base for the retopo mesh and makes changing things later on quite hard. To avoid this issue either use Dynamic SubDiv or create backups of the object before adding SubDiv levels.

   So in other words always use Dynamic SubDivs as long as possible and only switch to the destructive SubDiv when adding detail, this will also help with performance.

## 🖌Brushes/ Alphas/ Insert Mesh Brushes/ VDM Brushes/ Nano Meshes
### Overview
_ZBrush has so many different types of brushes which are never explained and it can get quite confusing, so here I went through all the different types._

`Alphas` can pull out shapes onto the mesh, `VMD` _(Vector Displacement Mesh)_ Brushes works similarly just that they allow for overhangs, so much more complex shapes are possible. `Insert Mesh Brushes` place objects on other surfaces, but with some tweaking they can also become `Insert Mesh Curve Brushes` for creating chains, ropes and more. `Nano Meshes` are similar to Insert Mesh Brushes, just that they place the object on every face, great for creating patterns or things like fishnet stockings. And last but not least there are the `Normal Brushes` for example clay strips or dam standard. They store alphas, drag mode, settings and can even have custom preview icons. 

Though `Normal Brushes` might seem better than `Alphas`, the big advantage to `Alphas` is that they can be used in any software. So you can use your sculpting alpha collection for texturing in other software as well. Added to that it is allot less effort to simply use alphas instead of creating a brush out of every alpha. There is however one quality of life issue with alphas, and that is that one can't have custom images for how the alpha looks like in action. The way I solve this issue is, when I do have preview images of alphas, I have both alpha and preview file in my collection with the same name but a different suffix. This makes the preview appear and directly before the alpha brush.

- All Brushes use the `.zbp` file extension (which stands for "ZBrush Preference" file)
- All Alphas use .psd file extension per default but .png/ .exr/ .tiff is just as good. Just don't use .jpg/ .jpeg or any other lossy compression type

### Brush Save Locations
Here `your custom brushes` are stored, that `load on startup` into the Brush Menu (B hotkey). Only put brushes in here you use often.

>[!info] Your custom brushes
>```
>"your program files"\Zbrush\ZStartup\BrushPresets
>```

Here the `default ZBrush brushes` ZBrush ships with are stored, that `load on startup` into the Brush Menu (B hotkey). Don't touch this folder.

>[!info] Default ZBrush brushes
>```
>...\ZBrush"Year"\ZData\BrushPresets
>```

Brushes that are put in the `Lightbox` brush tab are only `loaded when selected,` thus not bloating the project file. Added to that you can create your own folder hierarchy inside the Lightbox brush tab, to organize your brushes.

>[!info] Lightbox menu brushes
>```
>...\Zbrush\ZBrushes
>```

### Insert Mesh Brush
A **Insert Mesh Brush** is a **Brush** that contains one or multiple meshes to chose from. These meshes can the be placed on the SubTool or used to perform precisely placed boolean operations of custom shapes on the SubTool.

>[!example] Insert Mesh brush examples
>
>- Hardsurface Booleans

>[!Info] Creating custom Insert Mesh brushes
>
>1. Make the mesh that should become a insert brush
>2. Make sure it's orientation and scale is correct
>3. Save the insert mesh (Brush > Create InsertMesh)
>- [All about Insert Mesh Brushes](https://www.youtube.com/watch?v=qwchznvX-jQ)
>- [All about Insert Mesh Curve Brushes](https://www.youtube.com/watch?v=BL46Qnef6N0)


### Curve Insert Mesh Brush 
A **Curve Insert Mesh Brush** is a **Insert Mesh Brushes** that is made in such a way to seamlessly repeat along a stylus stroke (arraying along a stroke). 

>[!example] Curve Insert Mesh brush examples
>
>- Chains
>- Ropes
>- Seams
>- Bandages
>- Scribe Chisel

>[!Info] Creating custom Curve Insert Mesh brushes
>
>- Delete top and bottom faces so there are no internal faces when it repeats


### VDM Brush (Vector Displacement Mesh) 
>[!example] VDM brush examples
>
>- Dragon Scales
>- Sharp Teeth/ Spikes
>- Insert Ears/ Nose/ Horns

>[!Info] Creating custom VDM brushes
>
>1. Switch to a Plane3D Tool (Make PolyMesh3D)
>2. Sculpt desired detail onto plane. Make sure to not touch the borders of the plane, masking them can help. Alternatively one can mask everything except for the borders and use `Morph to Grid` (Tool > Deformation). `Relax Plane Grid` can also help. Also make sure to sculpt onto the plane from the correct direction. Keep on adding in more planes as SubTools with different detail if you want
>3. Select a chisel brush
>4. Make sure that the Tool only contains SubTools that should go into the VDM brush
>5. Create the VDM brush with `Create MultiAlpha Brush` (Brush > Create)
>6. Optional: Give the Brush an icon of the current view (Brush > Alt click on SetIcon)
>7. Save the VDM brush (Brush > Save As) and give it a fitting name
>- [Making Custom Vector Brushes (Flipped Normals)](https://www.youtube.com/watch?v=jBXs8cUm0CI) 17min
>- [Making Custom Vector Brushes (Pixologic)](https://www.youtube.com/watch?v=FB07uGbFje8) 12min


### Alpha Brush
>[!example] Alpha brush examples
>
>- Hardsurface Detail
>- Skin Detail
>- Scratch Marks

>[!Info] Fixing Alphas
>
>Sometimes alphas like folds will not just add folds but also dramatically change the surface curvature. There are `2 fixes` to this issue:
>- Fix 1 is to change the `MidValue` to somewhere around 50. Or enable `Surface`. In the `Alpha > Modify` menu. 
>- Mostly Fix 1 isn't enough, so fix 2 comes into play. In Photoshop, go to `Filter > Other > High Pass` and reduce the value. Optionally you can also add a levels layer.

>[!Info] Creating custom Alphas
>
>There are 2 ways of making alphas. The first way is by making them in a 2D software like Photoshop or generating them in software like substance designer. And the second way is by generating them from a 3D mesh.
>- [Making Of Alphas in PS for ZBrush](https://www.youtube.com/watch?v=a7CT8MruMcI)
>- [Making Of Alphas in ZBrush](https://www.youtube.com/watch?v=QyMmeoHrWjk)


### Sculpting Brush
>[!example] Sculpting brush examples
>
>- Clay Strips
>- Dam Standard
>- Inflate
>- Grab

>[!Info] Creating custom sculpting brushes
>
>1. Clone a brush
>2. Change it's settings
>3. Save Brush (Brush>Save As) and give it a fitting name


### Nano Mesh
>[!example] Nano Mesh Examples
>
>- Patterns
>- Fishnet Stockings
>- Nets
>- Clothing Spikes

>[!Info] Creating Custom Nano Meshes
>
>- [Nano Meshes short](https://www.youtube.com/watch?v=HPmlMD3f4xs) (Michael Pavlovich) 3min
>- [Nano Meshes](https://www.youtube.com/watch?v=wv3uNqr1Rf4) (Michael Pavlovich) 10min
>- [All Michael Pavlovich videos to Nano Meshes](https://www.youtube.com/@MichaelPavlovich/search?query=Nano+Mesh)


## 💾Saving/ Backups/ ZPR vs ZTL
>[!tip] Saving strategy
>
>- Save as ZTL every once and a while during the day as well as clicking the QuickSave button before doing risky actions
>- At the end of the day save as ZPR and ZTL
>- If during the day ZBrush crashes use auto saves to get back undo history
>
>f you don't care about history, then only use ZTL and auto saves. And if you do care about history then still occasionally save as ZTL because it's not to uncommon for ZPR files to get corrupted, not work on other systems/ OS's or newer ZBrush versions.

>[!info] ZPR vs ZTL
>
>- ZPR = Entire Project
>- ZTL = Selected Tool
>
>|Feature|ZPR|ZTL
>|:-:|:-:|:-:
>|Tools|All|Selected Only
>|File Size|Big|Light weight
>|Undo History|✅|❌
>|Project Settings|✅|❌
>|Non-Default Materials|✅|❌
>|Gird Image Reference|✅|❌
>|Keyframes|✅|❌
>|Poly Groups|✅|✅
>|Textures, Displacement and Normal Maps|✅|✅
>|Poly Paint|✅|✅
>|Creasing|✅|✅
>|Export Scale/ Offset values|✅|✅

>[!question] Where are these save methods located?
>
>Save ZPR
>```
>File > Save As
>```
>Save ZTL
>```
>Tool > Save As
>```
>You can also increase the Quick Save Time
>```
>Preference > QuickSave > Maximum Duration
>``` 
>Auto saves are saved at
>```
>???
>```


## 👤Check Silhouette
Open Thumbnail Window and Turn on Silhouette `Preferences > Thumbnail` or switch to the `Flat Color` MatCap (SubTools need PolyPaint for this to work properly).

## 🎨Poly Paint

>[!example]- PolyPaint resources (videos)
>
>**Polypainting/ Material Painting**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eQ7B3Y4aGZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


>[!info] About PolyPaint
>
>- Resolution of mesh affects resolution of PolyPaint
>- Clicking the brush icon beside the SubTool will toggle the PolyPaint (Colorize) of that SubTool. Shift clicking the icon will do that for all SubTools
>- If the SubTool has no Polypaint on it or PolyPaint is disabled for that SubTool, then the SubTool will adjust to the currently selected color
>- A SubTool can't be PolyPainted on, before it has been filled with a base color
>- DynaMesh will not remove PolyPaint **as long as the paint is visible**, it will however remove all materials
>- ZRemesher will completely remove PolyPaint and materials
>- Unlike PolyPaint, Material Paint can either be or not be on a face, which makes material transitions rough. To reduce this issue: Hide transitions, increase mesh detail or turn on Render Materials Blend-Radius
>- ToDo: Figure out how reprojection plays with poly paint

### Working With Color
Use the pre-installed ZColor plugin `ZPlugin > ZColor`. 
- To get all settings, expand the window downwards
- To **create** a new palette `File > New`
- To **add** to your palette, drag from the lower color field onto any color on your screen. Then right click the lower color field and `Add to Swatches `
- To **save** your palette `File > Save`
- To **name** colors within the palette, double click beside the color
- To **re-position** colors within the palette, drag them up and down
- To **delete** colors from the palette, right click delete colors _(will only work when Direct mode is off)_
- `Set Color` will set your color in ZBrush
- `Direct mode` (triangle button) will automatically set your color in ZBrush when you select a color from the swatch
- `Fill Object mode` (paint bucket button) fills the selected SubTool with the selected ZColor color _(Fill Object mode synergizes with Direct mode)_

ZColor doc [here](http://docs.pixologic.com/user-guide/zbrush-plugins/zcolor/).

- To sample color within ZBrush use C

### PolyPaint Setup Process
1. Select the `Paint` Brush (Or Select the `Standard` brush, set its channel to `Rgb` and disable `Zadd`/ `Zsub`)
2. Select the `Smooth` brush, disable `Zadd`/`Zsub`
3. Fill SubTool with base color (Color > FillObject)
4. Make sure a plain MatCap is selected (Material Tab)

### Paint with materials
Works the same as color painting.

To paint with materials, switch to the brush channel `M`, fill the object with that material (FillObject) and then you can freely switch to other materials and paint with them.

### Painting Options
The paint options are in the `Draw`, `Color` and `Stroke` tab. Almost all sculpt options apply to painting as well.

- Color (Color > Color Selector, Clicking on the Main or Secondary Color will open of the color selector window in big)
- Switch Colors (`SwitchColor` switches between main and secondary color, `Alternate` makes Alt key switch between the 2 colors)
- Color Picker (C key picks color on screen)
- Opacity (Draw > Rgb Intensity)
- Stroke Type (Dots, DragRect, Spray)
- Brush Alpha



## 📷Rendering

>[!example]- Rendering in ZBrush resources (videos)
>
><br>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uM-VonmG0jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HoIRjQdAL3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/g4lxPB25Zp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


>[!info] Rendering info
>
>- The render resolution is the size of the ZBrush document

>[!tip] Render Settings
>
>- Antialiasing (SPix)
>- Subsurface Scattering (Sss)
>- Shadows
>- AOcclusion
>- Materials Blend-Radius
>- Wax Preview: Only for preview mode

>[!tip] Lighting in ZBrush
>
>ToDo


## Document Size

>[!question] How to get rid of the empty document border?
>
>When ever ZBrush is on a different monitor resolution or you change that monitors scale size, you will have to redo the following steps (something I despise). 
>
>1. In the Documents Menu toggle `WSize` and click `NewDocument`
>2. Now your canvas will be empty, to get back your SubTools drag on the Canvas once and press T. The angle at which you pull out your tool and how big you pull it is completely irrelevant and will not mess up your tool
>3. So ZBrush always opens at this resolution, click `Save As Startup Doc` in the Document menu


## ⚙Configuring UI
1. Enable `Configure UI` and do changes
2. Then store the UI for yourself somewhere
3. Finally click `Store Config` so ZBrush starts with that UI
4. There are situations where ZBrush does not start with your UI, in that case click `Load UI`

The process is the same for Hotkeys and Color Themes.



## Using My Interface
My ZBrush configs are [here](https://github.com/Epicrex/3d-artists-handbook/tree/repo_storage/zbrush-stuff), you only need the interface file.

For the interface, if the size of the display you use for ZBrush is 1920 x 1080, you're 'good to go. If not, then you'll need to adjust the document size, so you don't have massive gray borders around your 3D viewport ([video about that here](https://www.youtube.com/watch?v=04wFtkdict0)).

The main thing about this interface is that I made a custom menu with every tool in it that is often used sorted into groups. The menu is at the top and called "MyInterface", I recommend giving it some hotkey you will never press and then in the driver settings for your tablet, mapping that hotkey to the back button of your stylus.


## ❌Errors

>[!error] "To many items in AllList" error
>
>|Q|A
>|:-:|:--
>|**Info**|- Latest recorded version: ZBrush 2022.0.1<br>- Happens when saving .zpr (entire project)
>|**Fix**|Save file without history, or delete Tools and SubTools you don't need anymore (Isn't a good fix).
>|**Cause**|_Unknown_
>|**Possible cause**|File size to big (started happening around the 2.3 - 2.5GB mark for me).
>|**What isn't the cause**|- Amount of SubTools (tested 400)<br>- Amount of Tools (tested 40)<br>- Amount of polygons in SubTools (tested 150 mil)
>|**What does it do**|It makes ZBrush immediately crash the next time you or ZBrush quick/ manual saves.

>[!error] ZBrush file extension is .ZZZ instead of .ZTL
>
>ZZZ files are temporary ZBrush files, it's how ZBrush names ZTLs while it's writing into them (saving). When the file extensions stays .ZZZ after the process has finished it means something went wrong while saving and the file is most likely corrupted. The corrupted file is as far as I know unfixable.

## 🚧Work in Progress🚧
- use dynamic sub d as long as possible to keep the ZBrush file small