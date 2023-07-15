---
title: "Blender Addons Guide"
enableToc: true
---

## Boxcutter
### Theory
- All options are under N>BoxCutter and the gear in the header
- Turn off Sort modifiers to not bevel new bool cuts, this is mostly desired(this can also be achieved by keeping this on and correcting the sort order)
- Some bool modes are in x cycle the others are in D-Helper
- Don't use magnet with Ngon but it's own built in angle lock (ctrl for magnet off)
- While placing bevel one can access the D helper menu after locking the bevel
- Bool snapping to object, view or origin can be adjusted in D-Helper
- Magnet is very important sometimes better without grid
- When using lasercut depth cap, the exact bool solver should be on

>[!example] Links
>
>- [Boxcutter manual](https://boxcutter-manual.readthedocs.io/en/latest/)
>- [Boxcutter manual hotkeys](https://boxcutter-manual.readthedocs.io/en/latest/hotkeys/)
>- [Boxcutter full feature showcase form version 7.19 (Jan 2022)](https://youtu.be/qCABKvC_peE)


#### Bool Modes
- Slice: Extract shape
- Intersect: Only keep intersection area
- Inset: Shell like effect
- Join: Add shape on object
- Make: Add shape as new object
- Knife: Directly cuts edges into mesh (Watch out when going over bool mods)
- Extract: Select piece of geo for bool cut and then place the extracted shape

### Hotkeys
|Hotkey|Name
|:-:|:-:|
|Alt + W|Switch between BoxCutter and HardOps
|W|Go back to normal blender
|D|Boxcutter Pie Menu
|Alt/Shift while pulling bool cut|
|Tab|Lock bool
|X|Cycle through Boolean modes
|W|Cycle through Wedges (Ctrl for perfect 90° wedge)
|G/R/S|Transformation (Ctrl + R for 90° rotation, X,Y,Z for axis lock)
|B|Bevel
|T|Solidify (Increase size,scale,depth)
|V|Array (V again for circle array)


## Hard Ops
### Theory

ToDo:
- knife project (shift on knife)
- Tab for Lock Shape

### Hotkeys
|Hotkey|Name
|:-:|:-:|
|Alt+X|Mirror
|Alt + V|Viewport Menu
|Ctrl + +|Hops Join
|Clean Border|
Edge manager under operations bevel manager
|Shift + N|Recalculate Normals

#### Q menu in Object Mode
|Hotkey|Name
|:-:|:-:|
|**Sharpen**|
|---|---|
|**Bevel**|After a bevel has been added adding a new bevel will edit the exsiting one
|Ctrl + Click on Bevel|Add new bevel
|Ctrl + Shift + Click on Bevel|Add new bevel with 60° angle
|---|---|
|**Array V2**|Only works if no booleans exist
|X|Change Axis
|Scroll|Change amount
|Hold X and tap Ctrl|Change Axis without getting set back to the object origin
|A|Add another Array
|---|---|
|**Mod Scroll/Toggle**|Allows you to scroll through all booleans
|Alt + Click on Mod Scroll|Smart Apply (applies all boolean modifiers)
|Shift + Click on Mod Scroll|Slowly reveals all booleans
|---|---|
|**Dice**|A Powerful loop cut tool. Allows one to create loop cuts on n-gons.
|---|---|
|**Twist 360°**|Uses many modifiers to create a circle of your object
|---|---|
|**Radial Array**|A sirqular array
|---|---|
|**Step**|

#### Q menu in Edit Mode
|Hotkey|Name
|:-:|:-:|
|**Mark**|A controlled Sharpen
|Curve Extract|
|Curve Extract|Replaces edges with pipes
|Alt + Click on Curve Extract|Replaces edges with pipes and deletes Face
|Ctrl + Click on Curve Extract|Duplicates a face and makes it to a new object
|Shift + Click on Curve Extract|Duplicates a face and makes it to a new object and gives it a Solidify Modifier
|---|---
|**Circle**|Best on Vertices. Creates a circle that can be adjusted. Also works on corners.
|---|---|
|**EM Macro**|EM Macro|Extrude rotated Quads from a face
|Ctrl + Click on EM Macro|Extrudes Quad Spikes from a face
|Alt + Click on EM Macro|Extrude along Normals
|Shift + Click on EM Macro|Intrude the Face along the Edges (Ctrl to change size)

ToDo:
|Alt + V|
|Alt + M|
hops helper
Polygon debug
Alt and shift click on mark

## MESHmachine
### Theory
### Hotkeys
|Hotkey|Name
|:-:|:-:|
|Y|Acces
|Fuse|Add Bevel
|Refuse|Modify Bevel
|Unfuse|Remove Bevel (only removes all bevels til to the last bevel)
|Unchamfer|Remove Bevel (only works on a single bevel)
|Unbevel|
|Unfck|
|Flaten|Select 2 faces and flatten the second selected one or select 3 verts with verts between them to make everything be in a straight line
|Change Width|Change Width


## Grid Modeler
### Theory
### Hotkeys
|Hotkey|Name               
|:-:|:-:
|H|Help
|Ctrl + Scroll|Subdivide Grid
|Alt + Scroll|Change Grid Size
|Ctrl + Click|Fit Grid to a Edge
|P|Rotate Grid at placed line (Ctrl+P Rotate grid at blue line or middle if there is no blue line)
|A|Switch between relative mode and absolute mode
|U|Disable Snapping
|F1|Save Grid and Shapes
|F2|Load grid and Shapes
|G|Center Grid to Face Center
|Arrow Key Up / Down|Move Grid
|Y|Construction Line
|Space|Stop drawing
|---|---
|W / Right Click|Switch between selection mode and normal mode
|G/ R/ S|Move/ Rotate/ Scale( X or Y to scale on axis)
|E|Edit Shape (Entf to dissolve, F to fill or delete, A to add)
|D|Array (C for rotation)
|B|Bevel
|C|Custom Shape (Hold Shift + Scroll to change edge amount)
|N|Flip Side ways
|M|Flip Horizontally
|I|Inset/ Outset
|Alt + N/ M|Mirror every selected shape at blue +
|Q / Enter|Boolean/Finish