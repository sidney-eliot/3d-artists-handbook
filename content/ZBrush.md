# Table of Contents
- [General Things to Be Aware Of](#General-Things-To-Be-Aware-Of-)
- 🖌 [Brushes/ Alphas/ Insert Mesh Brushes/ VDM Brushes/ Nano Meshes](#-Brushes-Alphas-Insert-Mesh-Brushes-VDM-Brushes-Nano-Meshes-)
    - [Overview](#Overview-)
    - [Brush Save Locations](#Brush-Save-Locations-)
    - [Insert Mesh Brush](#Insert-Mesh-Brush-)
    - [Curve Insert Mesh Brush](#Curve-Insert-Mesh-Brush-)
    - [VDM Brush (Vector Displacement Mesh)](#VDM-Brush-Vector-Displacement-Mesh-)
    - [Alpha Brush](#Alpha-Brush-)
    - [Sculpting Brush](#Sculpting-Brush-)
    - [Nano Mesh](#Nano-Mesh-)
- 💾 [Saving/ Backups/ ZPR vs ZTL](#-Saving-Backups-ZPR-vs-ZTL-)
- 👤 [Check Silhouette](#Check-Silhouette-)
- 🎨 [Poly Paint](#Poly-Paint-)
- 📷 [Rendering](#Rendering-)
- ⚙ [Configuring UI](#-Configuring-UI-)
- [Using My Interface](#Using-My-Interface-)
- ❌ [Errors](#-Errors-)

# General Things to Be Aware Of [^](#table-of-contents)
- My workflow between ZBrush and Blender is [here](Workflow%20Between%20ZBrush%20and%20Blender.md)
- It's good to stay on the left side of the model (right side from the characters perspective). _This is because of Mirror and Weld_
- Unlike in other software, subdivision in ZBrush are destructive. Even if one goes back to SubDiv level 1 and deletes all higher levels, the SubDiv will have dulled the edges in an irreversible way. This doesn't matter if you'll be adding a SubDiv at some point again to the object, because this edge dulling effect does not stack.

   This can make the mesh unusable as a base for the retopo mesh and makes changing things later on quite hard. To avoid this issue either use Dynamic SubDiv or create backups of the object before adding SubDiv levels.

   So in other words always use Dynamic SubDivs as long as possible and only switch to the destructive SubDiv when adding detail, this will also help with performance.

# 🖌 Brushes/ Alphas/ Insert Mesh Brushes/ VDM Brushes/ Nano Meshes [^](#table-of-contents)
## Overview [^](#table-of-contents)
_ZBrush has so many different types of brushes which are never explained and it can get quite confusing, so here I went through all the different types._

`Alphas` can pull out shapes onto the mesh, `VMD` _(Vector Displacement Mesh)_ Brushes works similarly just that they allow for overhangs, so much more complex shapes are possible. `Insert Mesh Brushes` place objects on other surfaces, but with some tweaking they can also become `Insert Mesh Curve Brushes` for creating chains, ropes and more. `Nano Meshes` are similar to Insert Mesh Brushes, just that they place the object on every face, great for creating patterns or things like fishnet stockings. And last but not least there are the `Normal Brushes` for example clay strips or dam standard. They store alphas, drag mode, settings and can even have custom preview icons. 

Though `Normal Brushes` might seem better than `Alphas`, the big advantage to `Alphas` is that they can be used in any software. So you can use your sculpting alpha collection for texturing in other software as well. Added to that it is allot less effort to simply use alphas instead of creating a brush out of every alpha. There is however one quality of life issue with alphas, and that is that one can't have custom images for how the alpha looks like in action. The way I solve this issue is, when I do have preview images of alphas, I have both alpha and preview file in my collection with the same name but a different suffix. This makes the preview appear and directly before the alpha brush.

- All Brushes use the `.zbp` file extension (which stands for "ZBrush Preference" file)
- All Alphas use .psd file extension per default but .png/ .exr/ .tiff is just as good. Just don't use .jpg/ .jpeg or any other lossy compression type

## Brush Save Locations [^](#table-of-contents)
Here `your custom brushes` are stored, that `load on startup` into the Brush Menu (B hotkey). Only put brushes in here you use often

```php
"your program files"\Zbrush\ZStartup\BrushPresets
```
Here the `default ZBrush brushes` ZBrush ships with are stored, that `load on startup` into the Brush Menu (B hotkey). Don't touch this folder
```php
...\ZBrush"Year"\ZData\BrushPresets
```
Brushes that are put in the `Lightbox` brush tab are only `loaded when selected,` thus not bloating the project file. Added to that you can create your own folder hierarchy inside the Lightbox brush tab, to organize your brushes.
```php
...\Zbrush\ZBrushes
```

## Insert Mesh Brush [^](#table-of-contents)
A **Insert Mesh Brush** is a **Brush** that contains one or multiple meshes to chose from. These meshes can the be placed on the SubTool or used to perform precisely placed boolean operations of custom shapes on the SubTool.
### Insert Mesh Brush Examples
```gql
- Hardsurface Booleans
```
### Creating Custom Insert Mesh Brushes
1. Make the mesh that should become a insert brush
2. Make sure it's orientation and scale is correct
3. Save the insert mesh (Brush > Create InsertMesh)
- [All about Insert Mesh Brushes](https://www.youtube.com/watch?v=qwchznvX-jQ)
- [All about Insert Mesh Curve Brushes](https://www.youtube.com/watch?v=BL46Qnef6N0)


## Curve Insert Mesh Brush [^](#table-of-contents)
A **Curve Insert Mesh Brush** is a **Insert Mesh Brushes** that is made in such a way to seamlessly repeat along a stylus stroke (arraying along a stroke). 
### Curve Insert Mesh Brush Examples
```gql
- Chains
- Ropes
- Seams
- Bandages
- Scribe Chisel
```
### Creating Custom Curve Insert Mesh Brushes
- Delete top and bottom faces so there are no internal faces when it repeats


## VDM Brush (Vector Displacement Mesh) [^](#table-of-contents)
### VDM Brush Examples
```gql
- Dragon Scales
- Sharp Teeth/ Spikes
- Insert Ears/ Nose/ Horns
```
### Creating Custom VDM Brushes
1. Switch to a Plane3D Tool (Make PolyMesh3D)
2. Sculpt desired detail onto plane. Make sure to not touch the borders of the plane, masking them can help. Alternatively one can mask everything except for the borders and use `Morph to Grid` (Tool > Deformation). `Relax Plane Grid` can also help. Also make sure to sculpt onto the plane from the correct direction. Keep on adding in more planes as SubTools with different detail if you want
3. Select a chisel brush
4. Make sure that the Tool only contains SubTools that should go into the VDM brush
5. Create the VDM brush with `Create MultiAlpha Brush` (Brush > Create)
6. Optional: Give the Brush an icon of the current view (Brush > Alt click on SetIcon)
7. Save the VDM brush (Brush > Save As) and give it a fitting name
- [Making Custom Vector Brushes (Flipped Normals)](https://www.youtube.com/watch?v=jBXs8cUm0CI) 17min
- [Making Custom Vector Brushes (Pixologic)](https://www.youtube.com/watch?v=FB07uGbFje8) 12min


## Alpha Brush [^](#table-of-contents)
### Alpha Brush Examples
```gql
- Hardsurface Detail
- Skin Detail
- Scratch Marks
```
### Fixing Alphas
Sometimes alphas like folds will not just add folds but also dramatically change the surface curvature. There are `2 fixes` to this issue:
- Fix 1 is to change the `MidValue` to somewhere around 50. Or enable `Surface`. In the `Alpha > Modify` menu. 
- Mostly Fix 1 isn't enough, so fix 2 comes into play. In Photoshop, go to `Filter > Other > High Pass` and reduce the value. Optionally you can also add a levels layer.
### Creating Custom Alphas
There are 2 ways of making alphas. The first way is by making them in a 2D software like Photoshop or generating them in software like substance designer. And the second way is by generating them from a 3D mesh.
- [Making Of Alphas in PS for ZBrush](https://www.youtube.com/watch?v=a7CT8MruMcI)
- [Making Of Alphas in ZBrush](https://www.youtube.com/watch?v=QyMmeoHrWjk)


## Sculpting Brush [^](#table-of-contents)
### Sculpting Brush Examples
```gql
- Clay Strips
- Dam Standard
- Inflate
- Grab
```
### Creating Custom Sculpting Brushes
1. Clone a brush
2. Change it's settings
3. Save Brush (Brush>Save As) and give it a fitting name


## Nano Mesh [^](#table-of-contents)
### Nano Mesh Examples
```gql
- Patterns
- Fishnet Stockings
- Nets
- Clothing Spikes
```
### Creating Custom Nano Meshes</summary>
- [Nano Meshes short](https://www.youtube.com/watch?v=HPmlMD3f4xs) (Michael Pavlovich) 3min
- [Nano Meshes](https://www.youtube.com/watch?v=wv3uNqr1Rf4) (Michael Pavlovich) 10min
- [All Michael Pavlovich videos to Nano Meshes](https://www.youtube.com/c/MichaelPavlovich/search?query=Nano%20Mesh)


# 💾 Saving/ Backups/ ZPR vs ZTL [^](#table-of-contents)
### Strategy
- Save as ZTL every once and a while during the day as well as clicking the QuickSave button before doing risky actions
- At the end of the day save as ZPR and ZTL
- If during the day ZBrush crashes use auto saves to get back undo history

If you don't care about history, then only use ZTL and auto saves. And if you do care about history then still occasionally save as ZTL because it's not to uncommon for ZPR files to get corrupted, not work on other systems/ OS's or newer ZBrush versions.

### ZPR vs ZTL
- ZPR = Entire Project
- ZTL = Selected Tool

|Feature|ZPR|ZTL
|:-:|:-:|:-:
|Tools|All|Selected Only
|File Size|Big|Light weight
|Undo History|✓|
|Project Settings|✓|
|Non-Default Materials|✓|
|Gird Image Reference|✓|
|Keyframes|✓|
|Poly Groups|✓|✓
|Textures, Displacement and Normal Maps|✓|✓
|Poly Paint|✓|✓
|Creasing|✓|✓
|Export Scale/ Offset values|✓|✓
</details>

### Location

Save ZPR
```
File > Save As
```
Save ZTL
```
Tool > Save As
```
You can also increase the Quick Save Time
```
Preference > QuickSave > Maximum Duration
``` 
Auto saves are saved at
```
???
```


# Check Silhouette [^](#table-of-contents)
- Open Thumbnail Window and Turn on Silhouette `Preferences > Thumbnail`

or

- Switch to the `Flat Color` MatCap (SubTools need PolyPaint for this to work properly)

# Poly Paint [^](#table-of-contents)
### PolyPaint Info
- Resolution of mesh affects resolution of PolyPaint
- Clicking the brush icon beside the SubTool will toggle the PolyPaint (Colorize) of that SubTool. Shift clicking the icon will do that for all SubTools
- If the SubTool has no Polypaint on it or PolyPaint is disabled for that SubTool, then the SubTool will adjust to the currently selected color
- A SubTool can't be PolyPainted on, before it has been filled with a base color
- DynaMesh will not remove PolyPaint **as long as the paint is visible**, it will however remove all materials
- ZRemesher will completely remove PolyPaint and materials
- Unlike PolyPaint, Material Paint can either be or not be on a face, which makes material transitions rough. To reduce this issue: Hide transitions, increase mesh detail or turn on Render Materials Blend-Radius
- ToDo: Figure out how reprojection plays with poly paint

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

### PolyPaint Links
- [Polypainting/ Material Painting](https://www.youtube.com/watch?v=eQ7B3Y4aGZY) (Michael Pavlovich - 25min)


# Rendering [^](#table-of-contents)
### Rendering Info
- Render is the size of the document

### Render Settings
- Antialiasing (SPix)
- Subsurface Scattering (Sss)
- Shadows
- AOcclusion
- Materials Blend-Radius
- Wax Preview: Only for preview mode

### Further Tweaking Settings

### Lighting

### ZBrush Render Links
- [Rendering and Exporting](https://www.youtube.com/watch?v=uM-VonmG0jU) (7min)
- [How to create a stunning CINEMATIC render](https://www.youtube.com/watch?v=HoIRjQdAL3k) (Digital Clay - 9min)
- [ZBRUSH Rendering to PHOTOSHOP Compositing](https://www.youtube.com/watch?v=g4lxPB25Zp4) (1h 30min)




# Document Size
How to get rid of the terrible document border?

When ever ZBrush is on a different monitor resolution or you change that monitors scale size, you will have to reset your redo the following steps (something I despise). 

1. In the Documents Menu toggle `WSize` and click `NewDocument`
2. Now your canvas will be empty, to get back your SubTools drag on the Canvas once and press T. The angle at which you pull out your tool and how big you pull it is completely irrelevant and will not mess up your tool
3. So ZBrush always opens at this resolution, click `Save As Startup Doc` in the Document menu


# ⚙ Configuring UI [^](#table-of-contents)
1. Enable `Configure UI` and do changes
2. Then store the UI for yourself somewhere
3. Finally click `Store Config` so ZBrush starts with that UI
4. There are situations where ZBrush does not start with your UI, in that case click `Load UI`

The process is the same for Hotkeys and Color Themes.



# Using My Interface [^](#table-of-contents)
My configs are [here](https://github.com/Epicrex/3DArtistsHandbook/tree/main/ZBrush%20Configs), you only need the interface file.

For the interface, if the size of the display you use for ZBrush is 1920 x 1080, you are good to go. If not, then you will need to adjust the document size, so you don't have massive gray borders around the 3D viewport ([video about that here](https://www.youtube.com/watch?v=04wFtkdict0)).

The main thing about this interface is that I made a custom menu with every tool in it that is often used sorted into groups. The menu is at the top and called "MyInterface", I recommend giving it some hotkey you will never press and then in the driver settings for your tablet, mapping that hotkey to the back button of your stylus.


# ❌ Errors [^](#table-of-contents)

## "To many items in AllList" error
|Q|A
|:-:|:--
|**Info**|- Latest recorded version: ZBrush 2022.0.1<br>- Happens when saving .zpr (entire project)
|**Fix**|Save file without history, or delete Tools and SubTools you don't need anymore (Isn't a good fix)
|**Cause**|_Unknown_
|**Possible cause**|File size to big (started happening around the 2.3 - 2.5GB mark for me)
|**What isn't the cause**|Amount of SubTools(tested 400), amount of Tools(tested 40), amount of polygons in SubTools(tested 150 mil)
|**What does it do**|It makes ZBrush immediately crash the next time you or ZBrush quick/ manual saves

## ZBrush file extension .ZZZ instead of .ZTL

ZZZ files are temporary ZBrush files, it's how ZBrush names ZTLs while it's writing into them (saving). When the file extensions stays .ZZZ after the process has finished it means something went wrong while saving and the file is most likely corrupted. The corrupted file is as far as I know unfixable.

# ⚠ Unsorted tips area
- us dynamic sub d as long as possible to keep the zbrush file small