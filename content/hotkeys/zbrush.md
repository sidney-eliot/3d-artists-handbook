---
title: ZBrush Hotkeys
date: 2024-01-10
enableToc: true
---
<style>
code { color: #050807; background: #FFFFFF; font-size: 19px; font-weight: bold; font-family: Consolas, monospace, monaco; }
@media screen and (max-width: 700px) {
table { margin-left: auto; margin-right: auto; }
h2, h3 { text-align: center; }
}
</style>
![[banner_zbrush.jpg]]

>[!info] Foreword
>
>I use a **keyboard** in my **left hand** and my **drawing tablet** with my **right hand**. The **stylus** of mine has **2 buttons**.

## 🔥 Most Important Hotkeys
|Function|Key|Notes
|:--|:-:|:--
|➕ Add SubDiv Level|`Ctrl` + `D`|
|⬆️Go Up One SubDiv Level|`D`|
|⬇️ Go Down One SubDiv Level|`Shift` + `D`|
|⬆️⬇️Dynamic SubDiv ON/ OFF|`D` / `Shift` + `D`|If there are no SubDiv levels, SubDiv traversal hotkeys will turn ON or OFF Dynamic SubDiv.
|DynaMesh|`Ctrl` + `LMB`<br>(on canvas)|DynaMesh button needs to be toggled. Perform actions over canvas or border.
|👁️ View Topology|`Shift` + `F`|
|Polygroup Masked|`Ctrl` + `W`|Polygroups all when there's no mask
|🖌️ Brush Menu|`B`|
|💡📦 Lightbox Menu|`,`

## General
|Function|Key|Notes
|:--|:-:|:--
|Clear Canvas|`Ctrl` + `N`|
|Repeat Last Action|`1`|
|View Topology|`Shift` + `F`|
|UI Magnifier|`Shift` + `M`
|Expand Multiple Menus at Once|`Shift` + `LMB` <br>(on menu name)
|Toggle Floor|`Shift` + `P`|
|Hide All Side Panels|`F`|
|Center SubTool|`F`|
|Brush Menu|`B`|
|Lightbox Menu|`,`

## Interface
|Function|Key|Notes
|:--|:-:|:--
|Open Image With Associated Image Viewer|`Alt` + `LMB` + `LMB`|Will Open .psd images from the Lightbox tab in photoshop

## Mesh Resolution
|Function|Key|Notes
|:--|:-:|:--
|➕ Add SubDiv Level|`Ctrl` + `D`|
|⬆️ Go Up One SubDiv Level|`D`|
|⬇️ Go Down One SubDiv Level|`Shift` + `D`|
|⬆️⬇️Dynamic SubDiv ON/ OFF|`D/ Shift` + `D`|**If there are no SubDiv levels** SubDiv traversal hotkeys will turn ON or OFF Dynamic SubDiv
|DynaMesh|`Ctrl` + `LMB`<br>(on canvas)|DynaMesh button needs to be toggled. Perform actions over canvas or border

## Navigation
|Function|Key|Notes
|:--|:-:|:--
|Snap Rotation|`Shift` + `LMB`|
|Rotate|`RMB` or `LMB`|Not on model
|Pan|`Alt` + `RMB` or `Alt` + `LMB`|Not on model
|Zoom|`Ctrl` + `LMB`|
|Frame select|`F` + `F`|
|Center SubTool|`F`|

## Selecting (aka hiding)
|Function|Key|Notes
|:--|:-:|:--
|Hide selected|`Ctrl` + `Shift` + `ALT` + `LMB`|
|Hide everything but selected|`Ctrl` + `Shift` + `LMB`|
|Invert hidden|`Ctrl` + `Shift` + `LMB`|Drag on canvas
|Unhide all|`Ctrl` + `Shift` + `LMB`|Click on canvas
|Shrink visible selection|`Ctrl` + `Shift` + `S`|
|Grow visible selection|`Ctrl` + `Shift` + `X`|
|Grow To Polygroup|`Ctrl` + `Shift` + `Q`|Fully reveals all Polygroups that are (partially) visible
|Grow All|`Ctrl` + `Shift` + `A`| Reveals all polys connected to currently visible polys

## Masking
|Function|Key|Notes
|:--|:-:|:--
|Add to mask|`Ctrl` + `LMB`|
|Subtract from mask|`Ctrl` + `Alt` + `LMB`|
|Invert mask|`Ctrl` + `LMB`|Click
|Remove mask|`Ctrl` + `LMB`|Drag on canvas
|Hide masked|`Ctrl` + `Shift` + `Alt` + `LMB`|
|Unhide masked|`Ctrl` + `Shift` + `LMB`|On canvas
|Delete hidden|`Ctrl` + `Shift` + `LMB`|Click
|Split unmasked|`Subtool > Split`|
|_**While Using Curve Mask**_|-|-
|Add curve point|`Alt`|
|Add sharp curve point|`Alt` + `Alt`|
|Expand mask over hole mesh|`Ctrl` + `LMB`|Drag in move mode


## Poly Groups
|Function|Key|Notes
|:--|:-:|:--
|Group masked |`Ctrl` + `W`|Group all when there's no mask
|Group visible|`Polygroups menu`|
|Group from mask|`Polygroups menu`|
|Group by angle|`Polygroups menu`|
|Hide all other poly groups|`Ctrl` + `Shift` + `LMB`| (look into this, what about "Hide poly group"

## Object Manipulation
|Function|Key|Notes
|:--|:-:|:--
|_**Transforms**_|-|-
|Move|`W`|
|Scale|`E`|
|Rotate|`R`|
|_**Other**_|-|-
|Drag copy of|`Ctrl` + `LMB` + `Drag`<br>(on Transpose tool) 
|Symmetry|`X`|

## Brushes
|Function|Key|Notes
|:--|:-:|:--
|Invert brush|`Alt`|
|Brush Size|`S`|



## Drawing Tablet

> [!info] My stylus mapping
> 
>**Front Stylus Button** ➡️ RMB<br>
>**Back Stylus Button** ➡️ Opens my custom ZBrush menu

|Function|Key
|:--|:-:
|Rotation|`Front Button`
|Pan|`Alt` + `Front Button`
|Zoom|`Ctrl` + `Front Button`

## Mask Mesh project
|Function|Key|Notes
|:--|:-:|:--
|Add new plating|`Ctrl`
|Subtract from last placed plating |`Ctrl` + `Alt`|Don't move camera!
|Add to last placed plating|`Ctrl` + `Shift`|Don't move camera, only click shift when done with shape!
|Cut with plating into underlying SubTool|`Ctrl` + `Alt`<br>(Bool On)|Creates new SubTool
|Add new plating as new SubTool|`Ctrl` + `Shift`<br>(Bool On)|After making a new plating tool, use only ctrl (with bool still on) to add platings while being able to move camera. Then when done, ZRemesh to merge all plating of sub tool)

Mesh Ballon works the same.

## Curve Insert Brush
Curve insert brushes are insert brushes that are made in such a way to seamlessly repeat, so they can work with the curve stroke mode. Example of Curve Insert Brushes:
- Chains
- Ropes
- Scribe Chisel

More Curve Settings under:<br>

`Brush > Modifiers`: Mainly to modify the way the curve behaves while being placed

`Stroke > Curve`: Mainly to modify the way the curve behaves in curve edit mode

`Stroke > Curve Functions`: This is where the real power lies with curve brushes

`Stroke > Curve Modifiers`: Here one can change things like taper

|Function|Key|Notes
|:-:|:-:|:-:
|_**Placing Curve**_|-|-
|Snap To Surface|LMB + Shift
|-|-|-
|_**Editing Placed Curve**_|-|-
|Move Curve|LMB Hold on Curve|Under `Stroke > Curve` there are some options: To make movement sturdy disable: `Bend Start`/ `Bend End`. To make start and end not move at all enable: `Lock Strat`/ `Lock End` (For lock to work one or both of the bend settings should be on). `Elastic`/ `Liquid` allow for both ends to be moved (Needs one or both of the bend settings on)
|Change Polygroup|LMB Click on Curve
|Extend Curve|LMB Close to End of Curve|If you hover far enough away from the curve a red line will appear
|Draw new Curve any point of the Curve|LMB Close to Any Part of Curve|If you hover far enough away from the curve a red line will appear
|Change Curve Size|
|Smoothen Curve|LMB Hold on Curve + Shift
|Twist/ Rotate Curve|LMB Hold on Curve + Ctrl
|Snap To Surface After Placing|Stroke > Curve `Snap`
|Confirm/ Leave Curve Edit Mode|LMB Anywhere on SubTool Away From Curve, Stroke > Curve Functions `Delete`
|-|-|-
|_**Curve Functions Menu**_|-|-
|Place Curve Around Mesh Border|`Border`
|Place Curve Around Polygroups|`Polygroups`
|Place Curve Around Creases|`Creased edges`


> [!example]- About curves (videos)
><div style="text-align: center;">
>
>**Curve Tutorial**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BL46Qnef6N0?si=jEikVUNb10RoLskd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Curve Brush Functionality**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9g8NNoc-v3o?si=_NuPMgDNQocLou5H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>