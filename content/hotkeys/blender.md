---
title: "Blender Hotkeys"
enableToc: true
---
<style>
code { color: #265787; background: #EA7600; font-size: 19px; font-weight: bold; font-family: Consolas, monospace, monaco; }
@media screen and (max-width: 700px) {
table { margin-left: auto; margin-right: auto; }
h2, h3 { text-align: center; }
}
</style>
![[banner_blender.jpg]]
## Foreword

All of these hotkeys are quite helpful and worth integrating into your daily Blender usage, and over time using them should become second nature. They are mostly Blender's default, but in the rare instance where I added or changed one, I noted it beside the hotkey.

Hotkeys for add-ons like Hard Ops and Boxcutter can be found in the [[blender-addons|add-ons]] section.

As my keyboard doesn't have a numpad, I have enabled `Emulated Numpad` _(Input > Keyboard> Emulated Numpad)_ in Blender (I prefer TKL keyboards). This means, that when I say "1" then it's the same as "Numpad 1". [Here's](https://docs.blender.org/manual/en/latest/getting_started/configuration/hardware.html) the Blender documentation on that. I personally actually prefer emulating the numpad even on keyboards with numpads, as it moves all the important numpad functions to a more accessible place on the keyboard. And the number keys anyway don't have anything important on them.

>[!info] Peripherals, Stylus mapping & Navigation
>
>For Blender I use a keyboard and mouse, as well as sometimes a display tablet with a stylus that has 2 buttons.<br>
>**Front Stylus Button** ➡️ `MMB`
>**Back Stylus Button** ➡️ `Quick Favorites`
>
>|Function|Key|
>|:--|:-:|
>|Rotate (Orbit)|`MMB`|
>|Snap Rotate|`Alt` + `MMB`
>|Pan|`Shift` + `MMB`
>|Zoom|`Ctrl` + `MMB` or `Scroll`

>[!tip] Situationally dependent hotkey helper
>
>Blender will always show possible hotkeys to follow up with at the bottom. This can be especially helpful when using feature rich tools from add-ons like Hard ops or Boxcutter.
## View

|         Function         |         Key         |   Notes   |
| :----------------------: | :-----------------: | :-------: |
|  View from Front / Back  | `1` or `Ctrl` + `1` | Remapped! |
|  View from Right / Left  | `2` or `Ctrl` + `2` | Remapped! |
|  View from Top / Bottom  | `3` or `Ctrl` + `3` | Remapped! |
|         Orbit Up         |         `4`         | Remapped! |
|        Orbit Down        |         `5`         | Remapped! |
|        Orbit Left        |         `6`         | Remapped! |
|       Orbit Right        |         `7`         | Remapped! |
|       Pan View Up        |    `Ctrl` + `4`     | Remapped! |
|      Pan View Down       |    `Ctrl` + `5`     | Remapped! |
|      Pan View Left       |    `Ctrl` + `6`     | Remapped! |
|      Pan View Right      |    `Ctrl` + `7`     | Remapped! |
|        Orbit 180°        |         `9`         | Remapped! |
| Isolate Selected Objects |         `^`         |           |


Although I don't recommend it, it's possible to give Blender a first person like navigation like Unreal Engine. Simply assign a hotkey to walk & fly _(Pref > Keymap > "walk/fly")_. Then customize its options _(Pref > Navigation > Fly & Walk)_. Use fly mode to work on the project and walk mode can be used to walk around the scene, which can be especially interesting for environment artists (one can even enable jumping and gravity).

The reason why navigation like that is better suited for game engines, is because there one mostly places objects into a world, where the normal navigation system simply wouldn't work. But in modeling software where one is mostly working on one character or object at a time, it's a lot more useful to be able to orbit around the object.

## Menus

>[!tip] Popup menu searching
>All pop-up menus can be searched with `Space`.

**General Menus:**

|                                                  Function                                                   |                  Key                   |                                                Notes                                                |
| :---------------------------------------------------------------------------------------------------------: | :------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| [Quick Favorite Menu](https://docs.blender.org/manual/en/latest/interface/tool_system.html#quick-favorites) |                 `MB4`                  |     The default mapping is `Q`, but Hard Ops already uses that key, so it's remapped to `MB4`.      |
| [Search Menu](https://docs.blender.org/manual/en/latest/interface/controls/templates/operator_search.html)  | `Space` or `F3` _(Depends on version)_ | If yours is set to `F3`, I recommend remapping it to `Space`, except for if you often do animating. |
|       [Toggle Toolbar](https://docs.blender.org/manual/en/latest/interface/tool_system.html#toolbar)        |                  `T`                   |                                                                                                     |
|                                               Toggle Sidebar                                                |                  `N`                   |                                                                                                     |
|                                                Maximize View                                                |        `Ctr` + `Alt` + `Space`         |                                                                                                     |
|                                          Maximize View But Keep UI                                          |            `Ctrl` + `Space`            |                                                                                                     |
|                                                  Quad View                                                  |          `Ctrl` + `Alt` + `Q`          |                                                                                                     |

**Object & Edit Mode Menus:**

|                                                  Function                                                  |         Key          | Notes                                                                                      |
| :--------------------------------------------------------------------------------------------------------: | :------------------: | :----------------------------------------------------------------------------------------- |
| [Mode Pie Menu](https://docs.blender.org/manual/en/latest/interface/controls/buttons/menus.html#pie-menus) |    `Ctrl` + `Tab`    |                                                                                            |
|                                        Object Context / Action Menu                                        |        `RMB`         |                                                                                            |
|                                               Add/ Mesh Menu                                               |    `Shift` + `A`     |                                                                                            |
|                                              Cursor Pie Menu                                               |    `Shift` + `S`     |                                                                                            |
|                                              Origin Pie Menu                                               | `Ctrl` + `Alt` + `X` | Requires "3D Viewport Pie menu" add-on, uncheck all but origin pie menu in add-on settings |


**Object Mode Menus:**

|         Function          |              Key               | Notes                                                                                                                                                                                                                                                                  |
| :-----------------------: | :----------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        Apply Menu         |          `Ctrl` + `A`          |                                                                                                                                                                                                                                                                        |
|        Parent Menu        |          `Ctrl` + `P`          | There's also vertex parent in edit mode.                                                                                                                                                                                                                               |
|     Clear Parent Menu     |          `Alt` + `P`           |                                                                                                                                                                                                                                                                        |
|       Keyframe Item       |              `I`               | Directly keyframes the selected item. One can keyframe almost everything in Blender, both in the viewport and in the UI. If an item can't be keyframed with `I`, then right click it or click the little diamond beside the field. Keyframed fields are marked yellow. |
|       Keframe Menu        | `K` _(`I` in pre Blender 4.1)_ |  More on that in the animation hotkey section.                                                                                                                            |
| Link / Transfer Data Menu |          `Ctrl` + `L`          |                                                                                                                                                                                                                                                                        |
|  Move to Collection Menu  |              `M`               |                                                                                                                                                                                                                                                                        |
|    Select Grouped Menu    |         `Shift` + `G`          |                                                                                                                                                                                                                                                                        |

**Edit Mode Menus:**

|    Function    |      Key      | Notes |
| :------------: | :-----------: | :---- |
|  Extrude Menu  |  `Alt` + `E`  |       |
|  Normals Menu  |  `Alt` + `N`  |       |
|    UV Menu     |      `U`      |       |
| Separate Menu  |      `P`      |       |
|   Merge Menu   |      `M`      |       |
| Select Similar | `Shift` + `G` |       |
| Vertices Menu  | `Ctrl` + `V`  |       |
|   Edge Menu    | `Ctrl` + `E`  |       |
|   Faces Menu   | `Ctrl` + `F`  |       |
|   Hook Menu    | `Ctrl` + `H`  |       |

## Object Related

|                                                                     Function                                                                      |                        Key                        |                                                                                                                                                  Notes                                                                                                                                                  |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                               Move / Rotate / Scale                                                               |    `G` / `R` / `S` + Move Mouse / Type number     | Use `Shift` and `Ctrl` for slow and snap. Tools like magnet can also be toggled mid-action with `Shift` + `Tab`. Common rotations are: 45°, 90°, 135°, 180°, for anything above 180° use minus values to rotate in the opposite direction: -45°, -90°, ... . Minus values also work for move and scale. |
|                                                      Limit Move / Rotate / Scale to One Axis                                                      |      `G` / `R` / `S` + `X` / `Y` / `Z` + ...      |                                                                                                                                                                                                                                                                                                         |
|                                                      Limit Move / Rotate / Scale to Two Axes                                                      | `G` / `R` / `S` + `Shift` + `X` / `Y` / `Z` + ... |                                                                                                                                                                                                                                                                                                         |
|                                                                 Trackball Rotate                                                                  |                     `R` + `R`                     |                                                                                                                                                                                                                                                                                                         |
|                                                                      Delete                                                                       |                        `X`                        |                                                                                                                                                                                                                                                                                                         |
|                           [Disolve](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/delete.html)                           |                   `Ctrl` + `X`                    |                                                                                                                    A soft delete. Works well on edges but not that well on vertices                                                                                                                     |
|                      [Hide / Un-hide](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/show_hide.html)                       |                 `H` / `Alt` + `H`                 |                                                                             Never use `Alt` + `H` in object mode, as it reveals every single hidden object in the Blend file. There are better ways of managing visibility.                                                                             |
|                       [Repeat Last Action](https://docs.blender.org/manual/en/latest/interface/undo_redo.html#repeat-last)                        |                   `Shift` + `R`                   |                                                                                                                                                                                                                                                                                                         |
|                         [Duplicate](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/duplicate.html)                         |                   `Shift` + `D`                   |                                                                                                                                                                                                                                                                                                         |
|                  [Duplicate Linked](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/duplicate_linked.html)                  |                    `Alt` + `D`                    |                                                                          All changes to any object part of the link will be done to all other objects in that link. This link can be done manually with the `Ctrl` + `L` menu.                                                                          |
|                       [Inset Face](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/inset_faces.html)                       |                        `I`                        |                                                                                                                                                                                                                                                                                                         |
| [Extrude](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/extrude_faces.html#bpy-ops-view3d-edit-mesh-extrude-move-normal) |                        `E`                        |                                                                                                                    Can be combined with scale (`S`) for a more versatile face inset.                                                                                                                    |
|                             [Fill](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/fill.html)                              |                        `F`                        |                                                                                                      Connects all selected vertices with a ngon face. Can also connect two vertices with an edge.                                                                                                       |
|             [Connect Vertex Path](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/connect_vertex_path.htmll)             |                        `J`                        |                                                                                                                                                                                                                                                                                                         |
|                   [Knife Tool](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/knife_topology_tool.html)                   |                        `K`                        |             `Shift` + `K` cuts only selected faces. `Space` or `Enter` confirms cut.  `RMB` begins new cut. `LMB` drag, draws line. `LMB` double-click closes loop. `C` cuts through faces. `Shift` snaps to middle of edge. `A` limits cut to angles (type number to change angle degree).             |
|                            [Bevel](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/bevel.html)                             |                   `Ctrl `+ `B`                    |                                                                                                                     `Scroll` changes bevel segment count. `P` changes bevel shape.                                                                                                                      |
|                   [Vertex Bevel](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/bevel_vertices.html)                    |              `Ctrl` + `Shift` + `B`               |                                                                                                                                                                                                                                                                                                         |
|                 [Slide Vertices / Edges](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/edge_slide.html)                  |                     `G` + `G`                     |                                                                                       `E` toggles even. `F` flips the even. `Alt` or `C` toggles clamping. `A` adds a snap point (snapping has to be turned on).                                                                                        |
|                             [Add Loop Cut](https://docs.blender.org/manual/en/latest/modeling/meshes/tools/loop.html)                             |                   `Ctrl` + `R`                    |                                                          `Scroll` adds more loops. `LMB` locks cut. `RMB` locks cut without slide. Temporarily hide faces (`H`) to limit the cuts to specific areas.<br><br>All slide hotkeys are applicable.                                                           |
|                    [Rip Vertices](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices.html)                     |                        `V`                        |                                                               Works on vertices and edges. `Alt` + `V` fills the created holes ([doc](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices_fill.html)).                                                                |




## Selecting

Blender [documentation](https://docs.blender.org/manual/en/latest/modeling/meshes/selecting/index.html) on selecting.

One can switch between vertex, face and edge select mode with `Ctrl` + `1` / `2` / `3` _(emulated numpad on)_. At the top left one can also switch between modes like "Set a new selection", "Extend existing selection", "Subtract existing selection", "Invert existing selection" and "Intersect existing selection" (not all selection tools have all of these modes).

|                                                          Function                                                           |                   Key                    |                                                                                  Notes                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                 [Selection Tool Cycle](https://docs.blender.org/manual/en/latest/interface/selecting.html)                  |                   `W`                    |                                                                                                                                                                          |
|                                                         Select All                                                          |                   `A`                    |                                                                                                                                                                          |
|                                                         Select None                                                         |         `Alt` + `A` or `A` + `A`         |                                                                                                                                                                          |
|                                                      Inverse Selection                                                      |               `Ctrl` + `I`               |                                                                                                                                                                          |
|                                                      Selecting by Hand                                                      | `LMB` & `Shift` + `LMB` & `Ctrl` + `LMB` |                                                                                                                                                                          |
|                                                      Select Edge Loop                                                       |              `Alt` + `LMB`               |                                        A more powerful version of this is located at _Select > Select Loops > Select Edge Loops_.                                        |
|                                                      Select Edge Ring                                                       |          `Ctrl` + `Alt` + `LMB`          |                                        A more powerful version of this is located at _Select > Select Loops > Select Edge Rings._                                        |
| [Select Linked](https://docs.blender.org/manual/en/latest/modeling/meshes/selecting/linked.html#bpy-ops-mesh-select-linked) |    `L` & `Shift` + `L` & `Ctrl` + `L`    | `L` selects all linked geo under the cursor. `Shift` + `L` deselects all linked geo under the cursor. `Ctrl` + `L` selects all geo linked to the currently selected geo. |
|                                                     Select Similar Menu                                                     |              `Shift` + `G`               |                                                                                                                                                                          |
|                                                         Select More                                                         |               `Ctrl` + `+`               |                                                                                                                                                                          |
|                                                         Select Less                                                         |               `Ctrl` + `-`               |                                                                                                                                                                          |

More selection tools like checker deselect and select random are in the selection menu.

## Camera

|          Function           |         Key          |                                  Notes                                   |
| :-------------------------: | :------------------: | :----------------------------------------------------------------------: |
|  Set View To Active Camera  |         `0`          |                                                                          |
|  Set Active Camera To View  | `Ctrl` + `Alt` + `0` |                                                                          |
| Set Camera As Active Camera |     `Ctrl` + `0`     | The active camera will be marked with an opaque black triangle above it. |


## Other

|            Function            |       Key       |                         Notes                          |
| :----------------------------: | :-------------: | :----------------------------------------------------: |
|       Open Documentation       |      `F1`       | Opens the Blender documentation for the selected item. |
|             Rename             |      `F2`       |                                                        |
|        Cursor to Center        |  `Shift` + `C`  |                                                        |
|         Toggle Magnet          | `Shift` + `Tab` |                                                        |
|    Toggle Proportional Edit    |       `O`       |                                                        |
| Switch Objects while Sculpting |   `Alt` + `Q`   |                                                        |
|    Toggle Transparent Mode     |   `Alt `+ `Z`   |                                                        |

## Animation

|                  Function                  |              Key               |                                                                                                                                 Notes                                                                                                                                  |
| :----------------------------------------: | :----------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                **GENERAL**                 |               -                |                                                                                                                                   -                                                                                                                                    |
|              Start Animation               |            `Space`             |                                                                                                                                                                                                                                                                        |
|             Move to Next Frame             |  `Arrow Keys Left` / `Right`   |                                                                                                                                                                                                                                                                        |
|           Move to Next Keyframe            |    `Arrow Keys Up` / `Down`    |                                                                                                                                                                                                                                                                        |
| Switch between Dope Sheet and Graph Editor |         `Ctrl` + `Tab`         |                                                                                                                                                                                                                                                                        |
|           Lock / Unlock Channel            |             `Tab`              |                                                                                                                                                                                                                                                                        |
|             Set Preview range              |              `P`               |                                                                                                                                                                                                                                                                        |
|            Remove Preview range            |          `Alt` + `P`           |                                                                                                                                                                                                                                                                        |
|             Auto preview range             |      `Ctrl` + `Alt` + `P`      |                                                                                                                                                                                                                                                                        |
|               **KEYFRAMES**                |               -                |                                                                                                                                   -                                                                                                                                    |
|              Insert Keyframe               |  `I` _(added in Blender 4.1)_  | Directly keyframes the selected item. One can keyframe almost everything in Blender, both in the viewport and in the UI. If an item can't be keyframed with `I`, then right click it or click the little diamond beside the field. Keyframed fields are marked yellow. |
|              Delete Keyframe               |          `Alt` + `I`           |                                                                                                                                                                                                                                                                        |
|               Keyframe Menu                | `K` _(`I` in pre Blender 4.1)_ |                                                                                     Opens the keyframe menu, which allows for keyframing specific values, like only the rotation.                                                                                      |
|             Set Keyframe Type              |              `R`               |                                                                                                                                                                                                                                                                        |
|      Set Keyframe Interpolation Mode       |              `T`               |                                                                                                                                                                                                                                                                        |
|                Handle Type                 |              `V`               |                                                                                                                                                                                                                                                                        |
|          Select linked Keyframes           |              `L`               |                                                                                                                                                                                                                                                                        |
|         Selects Keframes in column         |         `Alt` + `LMB`          |                                                                                                                                                                                                                                                                        |
|                 **OTHER**                  |               -                |                                                                                                                                   -                                                                                                                                    |
|                 Add Marker                 |              `M`               |                                                                                                                                                                                                                                                                        |
|               Rename Marker                |          `Ctrl` + `M`          |                                                                                                                                                                                                                                                                        |
|               Hide Transform               |              `H`               |                                                                                                                                                                                                                                                                        |
|         Hide all other Transforms          |         `Shift` + `H`          |                                                                                                                                                                                                                                                                        |
|           Unhide all Transforms            |          `Alt` + `H`           |                                                                                                                                                                                                                                                                        |
|             F-Curve Modifiers              |     `Ctrl` + `Shift` + `M`     |                                                                                                                                                                                                                                                                        |
|             Extrapolation mode             |         `Shift` + `E`          |                                                                                                                                                                                                                                                                        |



## Geometry Nodes

|        Function        |          Key          |                Notes                 |
| :--------------------: | :-------------------: | :----------------------------------: |
|       Mute Node        |          `M`          |                                      |
|       Hide Node        |          `H`          |                                      |
|   Merge Node Routes    | `Shift` + `F` + `RMB` |                                      |
|    Soft Remove Node    |     `Alt` + `LMB`     |                                      |
|      Delete Node       |          `X`          |                                      |
|    Soft Delete Node    |     `Ctrl` + `X`      |                                      |
|   Create Node Group    |     `Ctrl` + `G`      | Enter and leave node groups with Tab |
| Connect Node to Output |    `Alt` + `Shift`    |                                      |

## Shader Editor

|          Function           |           Key            |              Notes              |
| :-------------------------: | :----------------------: | :-----------------------------: |
|          Mute Node          |           `M`            |                                 |
|          Hide Node          |           `H`            |                                 |
|       Reload Textures       |       `Alt` + `R`        |                                 |
|     Add Mapping to Node     |       `Ctrl` + `T`       | Requires "Node Wrangler" add-on |
|     Cut Node Connection     |      `Ctrl` + `RMB`      |                                 |
| Connect Node to Viewer Node | `Ctrl` + `Shift` + `LMB` | Requires "Node Wrangler" add-on |

## Other Hotkey Sheets

- [BlenderHotkeyReference](https://download.blender.org/documentation/BlenderHotkeyReference.pdf)
- [Blender Doc](https://docs.blender.org/manual/en/latest/index.html)
