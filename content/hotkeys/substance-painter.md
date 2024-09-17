---
title: "Substance Painter Hotkeys"
enableToc: false
---
<style>
code { color: #99E83F; background: #1E3101; font-size: 19px; font-weight: bold; font-family: Consolas, monospace, monaco; }
@media screen and (max-width: 700px) {
table { margin-left: auto; margin-right: auto; }
h2, h3 { text-align: center; }
}
</style>
![[banner_substance_painter.jpg]]


For a full list of all the hotkeys, and more information on every hotkey, take a look at the [Official Adobe Hotkey List](https://helpx.adobe.com/substance-3d-painter/interface/settings/shortcuts.html).

>[!info] Peripherals, Stylus mapping & Navigation
>
>For Substance Painter, I use a keyboard as well as either a display tablet with a stylus that has **2 buttons** or a mouse.<br>
>**Front Stylus Button** ➡️ `MMB`
>**Back Stylus Button** ➡️ 
>
>Substance Painter's navigation hotkeys aren't usable with a tablet and stylus, so they need to be remapped.
>
>_(Edit>Settings>Shortcuts)_
>Camera rotate ➡️ `MMB`
>Camera snap rotate ➡️ `Alt` + `MMB`
>Camera translate ➡️ `Shift` + `MMB`
>Camera zoom ➡️ `Ctrl` + `MMB`
>Auto focus ➡️ `Ctrl` + `Alt` + `Shift` + `MMB` _(this one as well, as it would be in the way of another hotkey)_
>
>|Function|Key|
>|:--|:-:|
>|Rotate|`MMB`|
>|Snap Rotate|`Alt` + `MMB`|
>|Pan|`Shift` + `MMB`|
>|Zoom|`Ctrl` + `MMB` or `Scroll`


>[!tip] Situationally dependent hotkey helper
>
>Holding `Alt`, `Ctrl`, or `Shift` will show a list of hotkeys, that work with that key.

## General

|           Function            |          Key           | Notes                                                                                                                                                                                                                           |
| :---------------------------: | :--------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     HDRI / Light rotation     |    **`Shift`** + **`RMB`**     |                                                                                                                                                                                                                                 |
|      Toggle Camera Depth      |      `F5` & `F6`       | `F5` enables perspective view, which shows depth (object farther from the camera are smaller). `F6` enables orthographic view, which has no depth (objects will be a constant size, no mater how far from the camera they are). |
|    Switch Between Channels    |  `C` & `Shift` + `C`   |                                                                                                                                                                                                                                 |
| Switch Between Baked Channels |  `B` & `Shift` + `B`   |                                                                                                                                                                                                                                 |
|         Material Mode         |          `M`           |                                                                                                                                                                                                                                 |
|      Switch Texture Sets      | `Ctrl` + `Alt` + `RMB` |                                                                                                                                                                                                                                 |
|          Center Mesh          |          `F`           |                                                                                                                                                                                                                                 |


## UI & Menus

|          Function          |  Key  |                    Notes                     |
| :------------------------: | :---: | :------------------------------------------: |
|          Hide UI           | `Tab` |                                              |
|        3D & UV View        | `F1`  |                                              |
|        3D Only View        | `F2`  |                                              |
|        UV Only View        | `F3`  |                                              |
| Swap between 3D & UV View  | `F4`  |                                              |
|        Context Menu        | `RMB` | A portable version of the properties window. |
| Switch to Painting Window  | `F9`  |                                              |
| Switch to Rendering Window | `F10` |                                              |

## Painting
|             Function              |                 Key                  |                                                         Notes                                                         |
| :-------------------------------: | :----------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|               Brush               |                 `1`                  |                                                                                                                       |
|              Eraser               |                 `2`                  |                                                                                                                       |
|            Lazy Mouse             |                 `D`                  |                                                                                                                       |
|             Symmetry              |                 `L`                  |                                                                                                                       |
|           Pick Material           |                 `p`                  | Sort of works like a color picker, just with more capabilities. Doesn't replace the need for the normal color picker. |
|              Resize               | `Ctrl` + `RMB` + `Drag Left / Right` |                                                                                                                       |
|             Hardness              |  `Ctrl` + `RMB` + `Drag Up / Down`   |                                                                                                                       |
|              Rotate               |  `Ctrl` + `LMB` + `Drag Up / Down`   |                                                                                                                       |
|               Flow                | `Ctrl` + `LMB` + `Drag Left / Right` |                                                                                                                       |
|           Straight Line           |           `Shift` + `LMB`            |                        `Ctrl` + `Shift` + `LMB` to snap the straight line to rotation degrees.                        |
|           Polygon Fill            |                 `4`                  |                                                                                                                       |
|              Smudge               |                 `5`                  |                                                                                                                       |
|            Clone Tool             |                 `6`                  |                                                                                                                       |
|       Set Clone Tool Source       |             `V` + `LMB`              |                                  Great for removing seams and fixing small mistakes.                                  |
| Switch to Alternate Toolbar Tools |       `Ctrl` + `1` / `2` / ...       |                         Most of these tools are particle simulated version of the base tools.                         |
| Pause & Resume Particle Animation |               `Space`                |                                                                                                                       |
|  Invert Grayscale Slider (Tools)  |                 `X`                  |                                           For inverting the color in masks.                                           |

## Masking & Hiding

|       Function       |           Key           |                                                                                                                                              Notes                                                                                                                                              |
| :------------------: | :---------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Reveal Layer Mask   |  `Alt` + `LMB` on mask  |                                                                                                                                                                                                                                                                                                 |
|  Toggle Layer Mask   | `Shift` + `LMB` on mask |                                                                                                                                                                                                                                                                                                 |
| Toggle Geometry Mask |       `Alt` + `H`       |                                                                                                                                                                                                                                                                                                 |
| Isolate Texture Set  |       `Alt` + `Q`       |                                                                                                                                                                                                                                                                                                 |
|      Quick Mask      |        `Y` & `U`        | `Y` activates/ deactivated quick mask. `U` switches between toolbar tools and quick mask edit. `Ctrl` + `Shift` + `I` inverts quick mask (only works in quick mask edit). `X` switches between white and black in quick mask edit.<br><br>Deactivating quick mask with `Y` will reset the mask. |

## Layer & Properties

|                                                     Function                                                     |            Key             |                                                                Notes                                                                 |
| :--------------------------------------------------------------------------------------------------------------: | :------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|                                                   Group Layer                                                    |        `Ctrl` + `G`        |                                                                                                                                      |
|                                                 Duplicate Layer                                                  |        `Ctrl` + `D`        |                                                                                                                                      |
|                                                Copy & Paste Layer                                                |     `Ctrl` + `C` & `V`     |                         A slower version of duplicate layer, but allows moving layers between texture sets.                          |
| [Paste Layer Instance](https://helpx.adobe.com/substance-3d-painter/interface/layer-stack/layer-instancing.html) |   `Ctrl` + `Shift` + `V`   | Instanced layers can't be modified and are a live link to the original layer. Good for sharing material setups between texture sets. |
|                                       Disable all other Material Channels                                        | `Ctrl` + `LMB` on channel  |                                                                                                                                      |
|                                            Cycle Through Blend Modes                                             | `Arrow Up` +  `Arrow Down` |                                                                                                                                      |


## Other


|       Function       | Key |                                                                                                                                                Notes                                                                                                                                                |
| :------------------: | :-: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| UV Space Manipulator | ➡️  | `Q` hides/ shows the manipulator. `Ctrl` scale, scales from origin point. `Shift` scale, keeps aspect ratio intact while scaling (`Ctrl` and `Shift` scale can be combined). `Shift` rotate, snap rotates. `Shift` move, locks movement to U / V axis.<br><br>All other options are in the top bar. |

## Material


|   Function    |           Key           |                          Notes                          |
| :-----------: | :---------------------: | :-----------------------------------------------------: |
| Drag Material | `RMB` drag on to object | `Ctrl` + `Drag` to add material to selected mesh parts. |



## Projection

|     Function      |     Key      | Notes |
| :---------------: | :----------: | :---: |
|    Projection     |     `3`      |       |
|  Move Projection  |     `W`      |       |
| Rotate Projection |     `E`      |       |
| Scale Projection  |     `R`      |       |
|  Hide Projection  |     `Q`      |       |
| Rotate Projection | `S` + `LMB`  |       |
|  Zoom Projection  | `S` + `RMB`  |       |
|  Pan Projection   | `S` + `MMB`  |       |
|  Group Selected   | `Ctrl` + `G` |       |

## 🚧 ToDo

- Stencil hotkeys
- Finish projection hotkeys

