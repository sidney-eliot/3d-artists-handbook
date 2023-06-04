---
title: "Anime Style Characters"
enableToc: false
---

# Overview
This section covers all possible ways to achieve general and specific modeling/ sculpting tasks. There's no reason to only stick to Blender or ZBrush, thanks to GoB/ GoZ one can send selected parts of the model between both software with one click. 

Other software to consider using for the modeling and sculpting stages would be: **Fusion 360**, **Maya** and **Marvelous Designer** (I'll most likely add them into this section at some point, when I get more familiar with them).

_(What isn't covered here is basic polygon modeling, watch videos for that)_

---

Even though allot is possible in both of these software, you should still be using ZBrush for the bulk of the work because it's faster and allows for more creativity. But it really depends on what one is doing.


- The workflow between ZBrush and Blender is [here](https://github.com/Epicrex/3DArtistsHandbook/wiki/ZBrush-To-Blender-Workflow)
- And here are the [Blender](https://github.com/Epicrex/3DArtistsHandbookHotkeyEdition/wiki/Blender-Hotkeys) and [ZBrush](https://github.com/Epicrex/3DArtistsHandbookHotkeyEdition/wiki/ZBrush-Hotkeys) hotkeys I regularly use



### I'll use
- 🟠 to indicate that it's a **Blender** action
- ⚪ to indicate that it's a **ZBrush** action
- 🔵 to indicate that it's a **Maya** action

# Table of Contents

- [Best Channels For ZBrush](#Best-Channels-For-ZBrush-)
### Basic Actions
- [Adding/ Editing Primitive Shapes](#adding-editing-primitive-shapes-)
- [Transformations](#transformations-)
- [Deformations](#deformations-)
- [Remeshing](#remeshing-)
- [Edge Control (Bevels/ Creases/ Edge Loops)](#edge-control-)
- [Mirroring](#Mirroring-)
- [Booleans](#Booleans-)
- [Duplicating/ Repeating](#duplicating-repeating-)
- [Splitting/ Merging](#splitting-merging-)
- [Cutting](#cutting-)
- [Morphing](#morphing-)
- [Extruding/ Thickening](#extruding-thickening-)
- [Reprojecting Detail](#reprojecting-detail-)
- [Recreating Subdivision Levels](#recreating-subdivision-levels-)
- [Fusing Meshes](#fusing-meshes-)
- [ZModeler (ZBrush's Modeling Brush)](#zmodeler-zbrushs-modeling-brush-)

### Specific Actions
- [Diamond Grid](#Diamond-Grid-)
- [Cushion](#Cushion-)
- [Bevel Transitions](#Bevel-Transitions-)
- [Connecting Circle with Square or Low Detail Circle](#Connecting-circle-with-square-or-low-detail-circle-)
- [Rotation Reset Trick](#Rotation-Reset-Trick-)
- [Bend Object along the Surface of Another](#Bend-Object-Along-The-Surface-Of-Another-)
- [Clean Surface Transition Between 2 Objects](#Clean-Surface-Transition-Between-2-Objects-)
- [Wireframe](#Wireframe-)
- [Clothing, Armor or Retopology](#clothing-armor-or-retopology-)
- [Interesting Skin Clothing Effect](#Interesting-Skin-Clothing-Effect-)
- [Smoothing PolyGroup Borders](#Smoothing-PolyGroup-borders-)

### Sculpting
- [Sculpting Tips](#Sculpting-Tips)
- [Brushes](#Brushes)
- [Sculpting Videos](#Sculpting-Videos)

# Best Channels For ZBrush [^](#table-of-contents)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu83MuHLljeij-3leh4AAfCdhEzpYkhMg1SdEKhGaw=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Keos Masons](https://www.youtube.com/@KeosMasons/featured)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu-19uSR48ET4I1mEbJ7h1zdcVQdiYkVeaky7eXvfA=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Michael Pavlovich](https://www.youtube.com/c/MichaelPavlovich)
- <img src="https://yt3.ggpht.com/7_urt0o6U2ojEgwZkH0zUHWqXV303JAbQWj4Ia6OaBH5M9sWZnDEAzIOjD7AAj_J7VXe2695_w=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Flipped Normals](https://www.youtube.com/c/FlippedNormals)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu9aI4p24Wd70m1qlQKBE9S8kW6CB2lFpV3WVsPq=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Royal Skies](https://www.youtube.com/c/RoyalSkiesLLC)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu9ZtAtv4ZFqLQvxgtSLg8YA7FIO1R6T_SFK30ruyw=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Speed Char](https://www.youtube.com/c/SpeedChar)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu8N2vGqVcndjQ_Y7uVnlZkpRaOCziuMLGA-UGLL=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Outgang](https://www.youtube.com/c/Outgang)
- <img src="https://yt3.googleusercontent.com/C5KNYUXf7pNS0FJM6kQKDURmIRZGxvE5ESALT_pQAG6WMaNBe0huqlosy-k_6-phKbBD0-27LhI=s176-c-k-c0x00ffffff-no-rj" width ="35"> [J Hill](https://www.youtube.com/c/artofjhill/videos)
- <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-ADWZLhnTFFRmEX_Xt6bRABBqk09RX9sv0eLag-w=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Danny Mac](https://www.youtube.com/c/DannyMac3d)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu8hcWtNG6BSaKqDEF52JHFpd5e_30gAz5MTNWIxBw=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Folgore CGI](https://www.youtube.com/c/TheFolgore94)
- <img src="https://yt3.ggpht.com/ytc/AMLnZu-qYCfZHjCIFUWmYB5bRQE-YZdl5jWiujVsscNd=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Ryan Kingslien](https://www.youtube.com/c/RyanKingslienVertexSchool/videos)
- <img src="https://yt3.googleusercontent.com/ytc/AMLnZu_eYmDxieJp3bFdoBflM0AFwizNKJ_OMYQ-u0TOoA=s176-c-k-c0x00ffffff-no-rj" width ="35"> [Pixologic ZBrush](https://www.youtube.com/c/PixologicZBrush) 

# ------ BASIC ACTIONS ------ [^](#table-of-contents)

# Adding/ Editing Primitive Shapes [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Insert Brushes|Quick, directly into SubTool, works great with mesh fusion and snaps to mesh
|⚪🟠🔵|Add Primitive Shape|⚪ Tool > SubTool > Append or Insert 🟠 Ctrl + A 🔵 Poly Modeling Shelf 🔵 Create > Polygon Primitives
|🔵⚪|Edit Primitive Shape|🔵T⚪

### 🔵 Adding/ Editing Primitives
- Interactive Creation can be toggled in the `Create > Polygon Primitives` menu ![image](https://user-images.githubusercontent.com/85735034/206026463-e3d79fba-7d5c-4011-9180-2f8a3413cf3b.png)

- In the `Create > Polygon Primitives` menu one can also directly edit the primitive settings ![image](https://user-images.githubusercontent.com/85735034/206026314-7dfe07e2-c83d-469a-b317-cfccf795b7e6.png)



# Transformations [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|🟠|G/S/R|The fastest
|⚪|Transpose Gizmo|If the gizmo is acting strangely it may be because of focal shift
|⚪|Transpose Line|Advanced Tranpose Tool
|⚪|Snap to Ground (macro)|(Macro > Macros > Snap to Ground)
|⚪|Unify|Resets location and sets scale as close as possible to 2 units qubed
|⚪|S.Pivot/ C.Pivot|Use `S.Pivot` button to reset the model’s rotation, symmetry, etc. based on the visible polygons. Press `C.Pivot` to return to how the model was originally. Great for doing Symmetry actions on SubTools that aren't at the center.


### Transpose Line
Video on Transpose line [here](https://www.youtube.com/watch?v=FVaTCf90l7Q)

Click the gizmo button (Transform > Gizmo Button) to switch between the transpose line and gizmo 
- Click hold to stick to surface
- Outer circles to position transpose
- Inner circles to modify object (shift works)
- Ctrl + Click on white circle, makes view align to line

# Deformations [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Transpose Gizmo Cog Wheel|Amazing suite of deformations/transformations
|🟠|Bend/ other Deform Modifiers|


# Remeshing [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪🟠|**Z:** ZRemesher/ **B:** Quad Remesher Addon|The best auto retopology tool. Quad Remesher is a blender addon made by the maker of ZRemesher
|⚪🟠|**Z:** DynaMesh/ **B:** Remesh|Great for early stages of sculpting. Blenders Remesh takes very long and yields not the best of results. Both of these remeshers are best for the block out/ silhouette finding stages. They also both only work when the mesh has no holes.
|⚪🟠|**Z:** Sculptris Pro/ **B:** Dyntopo| Not ever needed, never use as beginner because it develops bad habits
|🟠⚪|Retopology by hand|Very good in blender, but also quite good in ZBrush with the retopology Brush. There's also a great software dedicated to retopology by hand called [Topo Gun](http://www.topogun.com/)
|🟠|Decimate Modifier|Reduces mesh density without losing mesh shape


# Edge Control [^](#table-of-contents)
Edge control can be achieved through adding:
- Bevels/ Chamfers
- Creases
- Edge Loops

## Beveling (By Hand)
Manually beveling gives the best control of the bevel shape and location, but needs good topology as a base.

### 🟠 Blender's Bevel
Manual bevels in blender are done via `Ctrl + B` for edges or `Ctrl + Shift + B` for vertices and scrolling to adjust segment count, and is very customizable.

<img src="https://user-images.githubusercontent.com/85735034/211197348-d7f1a864-f07b-435a-a203-f4fe6e43b234.png" width="250">

<img src="https://user-images.githubusercontent.com/85735034/211197934-3674b766-a9a5-4e50-9d6f-7b6550199934.png" width="250">


### ⚪ ZModeler Edge Bevel
Manual bevels in ZBrush are done via the ZModeler Brush. `Bevel`(Edge Mode) can only do chamfers, with 7 profiles to chose from. It's only capable of making chamfers because it's not meant to be used like a conventional bevel, but together with subdivisions. 

Some tips for beveling with the ZModeler Brush:

- Use `Insert`(Edge Mode) with `Interactive Elevation` to create make shift bevels with arcs
- Alternatively use `Swivel`(Edge Mode) or `Delete`(Edge Mode) to create chamfers
- Masking and Selections can also

<img src="https://user-images.githubusercontent.com/85735034/211197518-6241ddaf-9111-4867-a90e-5f1aac58c4ab.png" width="400">


### ⚪ Crease Menu Bevel
(Tool > Geometry > Crease) Similar to the "ZModeler Edge Bevel", just that this places the bevel based on the creases. Remember to remove the crease.
### ⚪ Bevel/Chamfer Brush
Great for quick bevels on models with bad topology
### ⚪ Hard Brushes like hPolish, TrimDynamic
A sculpting approach to bevels. Makes the bevel look more organic and interesting 

## Beveling (Dynamically/ Automatically)
### 🟠 Blender Bevel Modifier
Same as the manual bevel just that edges  for beveling are chosen by angle, vertex groups and so on.
### ⚪ Bevel Pro
(ZPlugin > BevelPro) [Full tutorial on Bevel Pro](https://www.youtube.com/watch?v=6uvPmEqD4nY). Works on terrible topology.
- Prep: `Fix Mesh`, `Weld Points`
- Prep: `Polish By Polygroups/ Features` when using DynaMeshed mesh
### ⚪ Dynamic SubDiv menu
(Tool > Geometry > Dynamic SubDiv)This menus allows for all kinds of bevel and chamfers

## Creasing
Creases can transfer between ZBrush and Blender. Note that creases in Blender can go from 0% to 100% but ZBrush can only have or not have a crease.

|Software|Method|Notes
|:-:|:-:|:-:
|⚪🟠|Creasing By Hand|ZBrush: ZModeler Edge Crease, Blender: Shift + E. Quite good in Blender because it has the best edge selection tools
|⚪|Crease by Polygroups/???|
|🟠|Crease With Selection Menu|

# Mirroring [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Mirror Modifier|Allows for mirroring of mirrors and other complex mirror operations. Can also use empty's as mirror point
|⚪|Mirror|Flips the SubTool from one side to the other, depending on the selected mirror axis. Uses the world center as mirror point
|⚪|Mirror And Weld|Perfectly mirrors the SubTool from the +X to -X axis along the world center. Welding together both half's 

**Tip:** To circumvent the issue of not being able to set ones own mirror axis in ZBrush, use S.Pivot/C.Pivot

# Booleans [^](#table-of-contents)
ToDo


# Duplicating/ Repeating [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Repeat Last Brush Stroke|1 key. Works for insert brushes as well: Click sticky button above transpose gizmo, then drag out new boolean(Ctrl + Drag) and press 1
|⚪🟠|Duplicate|**ZBrush:** Move object with Transpose Gizmo + Alt. **Blender:** Shift + D
|🟠|Live Duplicate|Alt + D
|⚪🟠|Arrays

# Splitting/ Merging [^](#table-of-contents)
- Split = Separate
- Merge = Join

|Software|Method|Notes
|:-:|:-:|:-:
|⚪🟠|**Z:** Split Hidden, **Z:** Split Masked/ Unmasked, **B:** Separate Selected|**Z:** Tool > SubTool > Split, B:
|⚪🟠|**Z:** Split By Polygroups, **B:** Separate By Loose Parts, **B:** Separate By Material|Great for splitting SubTools in many different SubTools
|-|-|-
|🟠|Join Selected
|⚪|Merge Down (In Hierarchy)|Watch out, the history of the lower/ not selected object is lost
|⚪|Merge Visible (In Viewport)|Watch out, the history of all but the selected object is lost

# Cutting [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Clip/Trim/Knife/Slice|Use `Knife` to remove parts of the mesh. If knife doesn't work use `trim` instead(Only do straight cuts with trim, because the topo will otherwise collapse!(No Alt)). If you want to remove a part of the mesh but want to keep the topology intact use `clip`. Use `slice` to add in edge cuts. (Remember that all of these actions can be inverted with alt)
|⚪|Cuttings With DynaMesh + Polygroups|Slice mesh to get 2 Polygroups, then DynaMesh with Enable Groups, Blur = 0 . If the results aren't as desired, then first set DynaMesh to a high value and then go back down to a lower value
|⚪|Deleting with Selection|Use Selection Tools and then `Del Hidden` (Tool > Geometry > Modify Topology)
|🟠|Box/Lasso Trim, Line Project|The trim tools are like ZBrush's knife tool but create Ngons. The Line Project works like ZBrush's clip
|🟠|Edge Split|Mark edge as sharp, add edge split + solidify + bevel modidier

<details>
<summary>Example of Edge Split or Cutting With DynaMesh + Polygroups</summary>

![3](https://i.imgur.com/qNrzuLN.png)
</details>


### Clip (Blender Line Project)
- Smashes the clipped side into the model
- Keeps topology intact
### Trim
- Removes trimmed mesh and closes the hole with the close hole operation
- Creates issues because the close holes operation algorithm is quite simple
### Knife (Blender Trim)
- Removes knifed mesh and closes holes with it's own algorithm
- A better version of trim
- (Knife currently is not stable so always quick save before using it)
- For cutting 45° angles with curve knife in all directions, following degrees are good to remember(**45°, 135°, 225°, 315°**)
### Slice 
- Creates a clean edge loop through the mesh (Also creates a new Polygroup)

# Morphing [^](#table-of-contents)
### ⚪ Morphs
_(Morph menu is at `Tool > Morph Target`)_


After a morph is stored with the `StoreMT` button, new strokes ignore each other. This allows for great use of brushes like chisel, layer and so on.

**Without Morph Target:**

![image](https://user-images.githubusercontent.com/85735034/192107920-138337bf-0afd-4f07-9c81-ac875f14617a.png)

**With Morph Target Stored:**

![image](https://user-images.githubusercontent.com/85735034/192107901-99f646ec-e2aa-4767-b22a-74afa45f5141.png)

While a morph target is stored one can use the **Morph Brush** to bring back parts of the stored morph. Or in other words, erase strokes after storing the morph.

Morphs and Layers have great synergy as showcased in this video: https://www.youtube.com/watch?v=8oU7ZnTSkHA
# Shape Keys/ Layers
### 🟠 Shape Keys

### ⚪ Layers

# Extruding/ Thickening [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪🟠|Extrude|**ZBrush:** ZModeler QMesh/ Extrude. **Blender:** Extrude or extrude menu for more options _(Alt + E)_
|⚪🟠|Push Along Surface Normals or Shrink/Flatten|**Blender:** _(Alt+ S)_ Enabling `Offset Even` in the pop up window can often yield better results. **ZBrush:** While using QMesh or Extrude hold Shift
|⚪🟠|Mask + Transpose/ Move
|⚪|Thick Skin|Caps the distance a mesh can go in or out, use this in combination with other tools _(Tool > Thick Skin)_
|⚪|Extract|_(Tool > SubTool > Extract)_
|⚪|Mesh Project|A mask brush. [Mesh Project video here](https://www.youtube.com/watch?v=CTnYP4vXFsU) 1:49 min
|⚪|Topology Brush
|⚪|Slice + QMesh new Polygroup

### Mesh Project
|Hotkey|Name
|:-:|:-:
|Ctrl|Add new plating
|Ctrl + Alt|Remove parts of last plating (don't move camera)
|Ctrl + Shift|Add plating to last plating (don't move camera, only click shift when done with shape)
|Ctrl + Alt (Bool On)|Cut plating into mesh (as new tool)
|Ctrl + Shift (Bool On)|Add new plating (as new tool, after making a new plating tool, use only ctrl (with bool still on) to add platings while being able to move camera. Then when done, ZRemesh to merge all plating of SubTool) (!rephrase this gibberish)

(Mesh balloon works the same)


# Reprojecting Detail [^](#table-of-contents)
From high to low

⚪ >
1. Apply SubDiv levels to SubTool
2. ZRemesh model
3. Duplicate SubTool
4. Go to the original SubTool (the one with history) and go back before the ZRemesh
5. Hide all other objects except for these 2
6. Then select the ZRemeshed duplicate. Add 1 SubDiv level and click ProjectAll. Repeat this step however often


🟠 >


# Recreating Subdivision Levels [^](#table-of-contents)
⚪ >

🟠 >

**Recreate ZBrush's subdivisions in Blender**

1. Add Multires modifier to low and and subdivision levels to it
2. Add Shrinkwrap to low, select the high and apply it

Or use the [Sculpt Layers](https://blendermarket.com/products/sculpt-layers)

# Fusing Meshes [^](#table-of-contents)
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Mesh Fusion|Only works with 2 meshes at once. [Mesh Fusion Tutorial](https://www.youtube.com/watch?v=frxGss8_XBY&). [Video of nicely using it here](https://youtu.be/sp0pwSGoaRM?t=155)
|⚪🟠|DynaMesh/Remesh|DynaMesh/Remesh will fuse meshes when they are close enough

### ⚪ Fusion
0. Turn off DynaMesh
1. Place mesh with insert brush for example, have back faces facing target mesh
2. Create a Polygroup around area where fusion should happen
3. Clear mask, then clear mask again for fusion


# ZModeler (ZBrush's Modeling Brush) [^](#table-of-contents)
## Introduction To ZModeler
**Royal Skies has a great [`playlist`](https://www.youtube.com/playlist?list=PLZpDYt0cyiuvWir5Lmzf7NM7j27FOn2fp) covering everything about the ZModeler as quickly as possible.**


- Hover over vertex, edge or face and press space to open the ZModeler action menu
- Alt hold to paint poly group white, whiteout letting go click alt again to cycle through poly groups

<details>
<summary>ZModeler Actions</summary>

## Vertex Actions

## Edge Actions
### Bevel
- Hold on edge to bevel
- Click on another edge to repeat last bevel amount

### Insert(Loop Cut)
- Alt to dissolve edge

## Face Actions
### Q Mesh (Smart Extrude)
- Pull on face to extrude
- Push in face to delete block
- Hold Shift to dissolve closet edge loop
- Hold Alt to duplicate and separate faces
- While extruding click alt to cycle through poly groups
- Extrude does smart merges, smart merge chamfer step amount can be adjusted

## Inset
- One can chose to inset entire poly group
- Clicking on other face gives them the last inset amount
- Ctrl and shift for more

</details>


# ------ SPECIFIC ACTIONS ------ [^](#table-of-contents)

# Diamond Grid [^](#table-of-contents)
Used for fishnet stockings, fences and nets.

🟠 >

**Square grid to Diamond grid (quad based)**
- Un-Subdivide and in the pop up window, set Iterations to 1
- Poke Faces then Tris to Quads
- Armored Vitaly Poke (best result)(Armored scripts addon)


⚪ >

- https://www.youtube.com/watch?v=wv3uNqr1Rf4

# Cushion [^](#table-of-contents)

<details>
<summary>Example</summary>

![1](https://i.imgur.com/OaNwL4M.png)
</details>

🟠 > 

- [Armored Colony's Approach to it](https://youtu.be/HsBvq2j5zt8)
- Or use Cloth Pro addon


# Bevel Transitions [^](#table-of-contents)
🟠 > 

<details>
<summary>Example</summary>

![grafik](https://user-images.githubusercontent.com/85735034/166425986-543c6630-59be-40b0-84ca-cf521da835e9.png)
![grafik](https://user-images.githubusercontent.com/85735034/166426001-ab74c073-a8f2-4773-b9fa-607250fc8e2e.png)
</details>

# Connecting Circle with Square or Low Detail Circle [^](#table-of-contents)
🟠 > 
<details>
<summary>Example</summary>

![grafik](https://user-images.githubusercontent.com/85735034/166427410-f894450b-d03e-417c-83d7-02fe0820e583.png)
</details>

# Rotation Reset Trick [^](#table-of-contents)
🟠 >

Rotation Reset Trick or "box trick" is a method for removing extra data from a model: unwanted transforms, corrupted internal data, etc.
1. Create a cube
2. Merge object with issues into cube and delete cube mesh


# Bend Object along the Surface of Another [^](#table-of-contents)
<details>
<summary>Example</summary>

![2](https://i.imgur.com/xAZci9M.png)
</details>

🟠 >

1. Make sure the origin is at the point where the object should connect with the target object
2. Extrude outwards at the connection point. And add a 4 segment bevel at the lowest corner
3. Make a vertex group and assign every edge loop a different weight. Starting a the most outer loop with a weight of 1. Second most outer a weight of 
0.8 and so on. After assigning weight 0.2 stop.
4. Set cursor to object origin. Add a grid, and turn on wireframe for that object. Then press F9 and adjust the grid topology density. The more curve the target has the more dense the gird has to be.
5. Add a surface deform mod to the object. Target: Grid, Click Bind.
6. Apply scale and rotation for grid, object and parent object to grid
7. Add Shrinkwrap mod to gird. Snap Mode: Outside surface, Target: Target Object 
8. Turn on face snap. Snap With: Median, Align Rotation to Target. And place the grid on the target surface
9. Add DataTransfer mod on Object. Source: Target Object, Vertex Group: vertex group from 3., Face Corner Data: Custom Normals

⚪ > 

# Clean Surface Transition Between 2 Objects [^](#table-of-contents)
<details>
<summary>Example</summary>

![1](https://i.imgur.com/U6qiK9u.png)
</details>

🟠 >

**Shrink wrap + Vertex groups**
1. Make sure the origin is at the point where the object should connect with the target object
2. Extrude outwards at the connection point. And add a 4 segment bevel at the lowest corner
3. Make a vertex group and assign every edge loop a different weight. Starting a the most outer loop with a weight of 1. Second most outer a weight of 0.8 and so on. After assigning weight 0.2 stop.
4. Add Shrinkwrap mod. Snap mode: Outside surface, Target: Target Object, Vertex Group: vertex group from 4.
5. Turn on face snap. Snap With: Median, Align Rotation to Target. And place object on the target surface
6. Add DataTransfer mod. Source: Target Object, Vertex Group: vertex group from 4., Face Corner Data: Custom Normals

# Wireframe [^](#table-of-contents)

<details>
<summary>Example</summary>

![5](https://i.imgur.com/ogSh1PT.png)
![6](https://i.imgur.com/VgRW1mH.png)
</details>

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Wireframe Modifier
|⚪|


# Clothing, Armor or Retopology [^](#table-of-contents)

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Shrinkwrap + SubDiv|Use Shrinkwrap and SubDiv with others mods like bevel. In the `Snap To` menu switch to the `Snap With` `Closet` mode. When retopologizing results may often be better on lower SubDiv levels because the Shrinkwrap won't have the chance to imprint every sculpted imperfection.

# Interesting Skin Clothing Effect [^](#table-of-contents)

<details>
<summary>Example</summary>

![4](https://i.imgur.com/BjdIjU3.png)
</details>

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Edge Split At Perfect Angle|Edge Split mod set to specific angle amount. Other mods to use with this: Solidify, SubDiv, Bevel, Shrink Wrap



# Smoothing PolyGroup Borders [^](#table-of-contents)

<img src="https://github.com/Epicrex/3DArtistsHandbook/blob/14f73be42900535619a13e28bb08b121a6a601fe/wiki_image_storage/group_smoothing_1.png" width="215">

<img src="https://github.com/Epicrex/3DArtistsHandbook/blob/14f73be42900535619a13e28bb08b121a6a601fe/wiki_image_storage/group_smoothing_2.png" width="200">

|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Smooth Groups Brush|_(LightBox > Brush Tab > Smooth Folder > Smooth Groups.ZBP)_ Be careful to not smooth the mesh by accident, use masking

# ------ SCULPTING ------ [^](#table-of-contents)
Organic sculpting is something best learned by simply sculpting and watching others sculpt

## Sculpting Tips
- Try to adjust brush strength as little as possible and instead setup your stylus correctly
- Don't have the mindset that every sculpt will be a portfolio piece
- Jump around the sculpt  instead of finishing one area. This has 2 main reasons reason one is one should first get the main shapes correct before moving on to smaller shapes and reasons 2 is, if one works on one area to long, one stops seeing mistakes
- Regularly check silhouette and proportions by zooming out, moving the head away from the screen and turning on ZBrush's silhouette preview

[How you should Sculpt EVERYTHING](https://www.youtube.com/watch?v=zwn7EZczPjY&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(J Hill - 27min)_

[15 Blender and Zbrush Sculpting Tips No One Talks About](https://www.youtube.com/watch?v=rkMH77hZ9xc) _(Outgang  - 7min)_

## Brushes
### Main Brushes
- Clay Buildup _(B CB)_
- Standard _(B ST)_
- Dam Standard _(B DS)_

### Surface Smoothing
- Smooth
- Trim Dynamic _(B TD)_
- hPolish (same as flatten but respects hard edges, alt for different behaviour) _(B HP)_
- Flatten _(B FA)_
- Planar _(B PL)_

### Special Brushes
- Inflate _(B IN)_
- Layer _(B LA)_
- Bevel Arc/ Flat _(B BA/ B BF)_
- Pinch _(B PI)_
- Scribe Chisel _(B SC)_
- History Recal(_B HR_)

### Great Brush Packs
Search for Brushes/ Insert Brushes on Artstation and Gumroad

- [Orb Brush Pack (free)](https://orb.gumroad.com/l/nOkHw)
- [Flipped Normals Skin Kit (paid)](https://flippednormals.com/downloads/flippednormals-skin-kit/)
- [550 Blender Brushes Stylized Edition (paid)](https://www.artstation.com/marketplace/p/80bz/megapack-550-blender-brushes-stylized-edition-4k-alphas-included)
- [Sculpting Brushes for Dragons, Lizards(paid/free demo)](https://www.artstation.com/marketplace/p/XPXl/vdm-and-sculpting-brushes-for-dragons-lizards-and-etc?utm_source=artstation&utm_medium=referral&utm_campaign=homepage&utm_term=marketplace)
- [Igor Golovkov (free + paid)](https://www.artstation.com/astiil/store)
- [Flipped Normal Shop Sin Brushes (free + paid)](https://flippednormals.com/downloads/tag/skin/)

## Sculpting Videos
For good YouTube channels look [here](#Best-Channels-For-ZBrush-)


- [Principles of Sculpting | Complete Guide to Zbrush 2022](https://www.youtube.com/watch?v=rkiNs3AQg_o&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(1h 26min)_
- [Top Tips for Improving Your Sculpts in ZBrush](https://www.youtube.com/watch?v=3boCwp9uLsY&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(Flipped Normals - 31min)_
- [Zbrush- General Organic Sculpting Tips](https://www.youtube.com/watch?v=Lj2WPYJfCj0&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(Arrimus 3D - 25min)_