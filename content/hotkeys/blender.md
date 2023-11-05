---
title: "Blender Hotkeys"
enableToc: true
---
<style>
code { color: #265787; background: #EA7600; }
</style>
![[banner_blender.jpg]]


>[!info] These are the hotkeys I use regularly
>
>- Some essential key binds are remapped
>- The hotkeys for addons like Hard Ops and Boxcutter are in the [addon](https://github.com/Epicrex/3DArtistsHandbookAddonEdition/wiki/Blender-Addons-Guide) section
>- My config files are [here](https://github.com/Epicrex/3d-artists-handbook/tree/repo_storage/blender-stuff) of the repo


## Navigation, View, Transforms
|Function|Key|Notes
|:-:|:-:|:-:
|Orbit View|**`MMB`**|
|Pan View|**`Shift`** + **`MMB`**|
|Zoom View|**`Ctrl`** + **`MMB`**|
|Axis View Align|**`Alt`** + **`MMB`**|
|Front / Back|**`1`** / **`Ctrl`** + **`1`**|
|Right / Left|**`2`** / **`Ctrl`** + **`2`**|
|Top / Bottom|**`3`** / **`Ctrl`** + **`3`**|
|Orbit Up|**`4`**|
|Orbit Down|**`5`**|
|Orbit Left|**`6`**|
|Orbit Right|**`7`**|
|Pan View Up|**`Ctrl`** + **`4`**|
|Pan View Down|**`Ctrl`** + **`5`**|
|Pan View Left|**`Ctrl`** + **`6`**|
|Pan View Right|**`Ctrl`** + **`7`**|
|Orbit 180°|**`9`**|
|Hide all non-selected objects|**`^`**|
|-|-|-
|Move / Rotate / Scale|**`G`** /**`R`** / **`S`**
|Limit Move/Rotation/Scale Axis|G/R/S + X/Y/Z + Move/Type number|Use Shift and Ctrl for slow and snap. Minus values also work. Tools like magnet can also be toggled mid-action. Common Rotations: 45°, 90°, 135°, 180°
|Limit Move/Rotation/Scale to only the input axis|G/R/S + Shift + X/Y/Z + ...|
|Trackball Rotate|**`R`** + **`R`**

_If you want a first person game like navigation, head to `pref>Navigation>Fly&Walk` and give it a good hotkey. However, I recommend using the normal navigation because other 3D software shares that navigation (except for in game engines, there first person game like navigation is better and more common)._


## Menus
|Function|Key|Notes
|:-:|:-:|:-:
|**GENERAL**|-|-
|Search|F3
|Toggle Left Context Menu|T
|Toggle Right Context Menu|N
|Maximize Window but keep menus|Ctrl + Space
|Maximize Window|Ctrl + Alt + Space
|Quad View|Ctrl + Alt + Q
|**OBJECT AND EDIT MODE**|-|-
|Interaction Mode Pie Menu|Ctrl + Tab
|Object Context/ Action Menu|RMB
|Add Menu|Shift + A
|Cursor Pie Menu|Shift + S
|Origin Pie Menu|Ctrl + Alt + X|Requires "3D Viewport Pie menu" addon, uncheck all but origin pie menu in addon settings
|Quick Access Menu|Q
|**OBJECT MODE**|-|-
|Apply Menu|Ctrl + A
|Parent Menu|Ctrl + P
|Unparent Menu|Alt + P
|Keframe Menu (Works in every interface)|I
|Link/Data Transfer Menu|Ctrl + L
|Collection Move Menu|M
|Select Grouped|Shift + G
|**EDIT MODE**|-|-
|Extrude Menu|Alt + E
|Normals Menu|Alt + N
|UV Menu|U
|Separate Menu|P
|Merge Menu|M
|Select Similar|Shift + G
|Vertices Menu|Ctrl + V
|Edge Menu|Ctrl + E
|Faces Menu|Ctrl + F

## Objects
|Function|Key|Notes
|:-:|:-:|:-:
|Redo Last Action|Shift + R|
|Duplicate Objects|Shift + D|
|Duplicate Objects Linked|Alt + D|All changes to any object part of the link will be done to all other objects in that link. This link can be done by hand with the Ctrl + L menu
|Inset Face|I|
|Extrude (can be combined with S)|E|
|Hide|H|Hides selected object
|Un-Hide|Alt + H|Un-Hides every single object. !!! Watch out this is almost never wanted, there are better ways of managing visibility
|Add Loop Cut|Ctrl + R|Use Scroll to add more loops. Use Right Click to center and use H to terminate, so the loop cut doesn't go around the whole object
|Knife Tool|K|Enter to confirm cut. RMB to stop that cut and start a new one
|Fill|F|Connects all selected vertices with a face. Also used to create an edge between two selected vertices
|Join|J|Use it to separate faces/ Ngons by selecting 2 vertices
|Bevel|Ctrl + B|Scroll to change amount of bevels. Click P to change the bevel shape
|Vertex Bevel|Ctrl + Shift + B|
|Solidify|Ctrl + X|A soft delete. Works well on edges but not that well on vertices
|Slide|G + G|Can be used on Vertices and Edges
|**Slide Options**|-|-
|Even|E|
|Flip the Even|F|
|Clamp|Alt/C|
|Add Snap Point|A|Needs Snapping On

## Selecting
|Function|Key|Notes
|:-:|:-:|:-:
|Selection Tool Cycle|W|
|Select all|A|
|Deselect all|AA|
|Select Linked|L|
|Select Linked of every selected item|Ctrl + L|
|Deselect Linked|Shift + L|
|Select Entire Edge Loop|Alt + LMB|
|Select Similar Menu|Shift + G|
|Select More|Ctrl + +|
|Select Less|Ctrl + -|
|Invert Selection|Ctrl + I|
|Remove from selection|B + LMB + Shift|
||Ctrl + Alt|

_More selection tools in selection menu. Examples:Checker Deselect, Select Random(stacks)_

## Camera
|Function|Key|Notes
|:-:|:-:|:-:
|Set Camera To View|Ctrl + Alt + 0|
|Set View To Camera|0|
|Make Camera fill viewport|???|


## Other
|Function|Key|Notes
|:-:|:-:|:-:
|Open Documentation|F1|
|Rename|F2|
|Cursor to Center|Shift + C|
|Toggle Magnet|Shift + Tab|
|Toggle Proportional Edit|O|
|Switch Objects while Sculpting|Alt + Q|
|Toggle Transparent Mode|Alt + Z|

## Animation
|Function|Key|Notes
|:-:|:-:|:-:
|**GENERAL**|-|-
|Start Animation|Space|
|Move to Next Frame|Arrow Keyes Left/ Right|
|Move to Next Keyframe|Arrow Keyes Up/ Down|
|-|-|-
|Switch between Dope Sheet and Graph Editor|Ctrl + Tab|
|Lock/Unlock Channel|Tab|
|-|-|-
|Set Preview range|P|
|Remove Preview range|Alt + P|
|Auto preview range|Ctrl + Alt + P|
|**KEYFRAMES**|-|-
|Insert Keyframe|I|
|Delete Keyframe|Alt + I|
|Set Keyframe Type|R|
|Set Keyframe Interpolation Mode|T|
|Handle Type|V|
|Select linked Keyframes|L|
|Selects Keframes in column|Alt + LMB|
|**OTHER**|-|-
|Add Marker|M|
|Rename Marker|Ctrl + M|
|Hide Transform|H|
|Hide all other Transforms|Shift + H|
|Unhide all Transforms|Alt + H|
|F-Curve Modifiers|Ctrl + Shift + M|
|Extrapolation mode|Shift + E|


## Geometry Nodes
|Function|Key|Notes
|:-:|:-:|:-:
|Mute Node|M
|Hide Node|H
|Merge Node Routes|Shift + F + RMB|
|Soft Remove Node|Alt + LMB|
|Delete Node|X|
|Soft Delete Node|Ctrl + X|
|Create Node Group|Ctrl + G|Enter and leave node groups with Tab
|Connect Node to Output|Alt + Shift|


## Shader Editor
|Function|Key|Notes
|:-:|:-:|:-:
|Mute Node|M|
|Hide Node|H|
|Reload Textures|Alt + R|
|Add Mapping to Node|Ctrl + T|Requires "Node Wrangler" addon
|Cut Node Connection|Ctrl + RMB|
|Connect Node to Viewer Node|Ctrl + Shift + LMB|Requires "Node Wrangler" addon


## Other Hotkey Sheets
- [BlenderHotkeyReference](https://download.blender.org/documentation/BlenderHotkeyReference.pdf)
- [Blender Doc](https://docs.blender.org/manual/en/latest/index.html)