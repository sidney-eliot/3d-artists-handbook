---
title: "🧊🗿 Organic Sculpting & Hard Surface Sculpting & Modeling"
enableToc: true
---

>[!warning] Still Being Migrated

## Overview
This page covers all possible ways to achieve general and specific modeling and sculpting tasks. There's no reason to only stick to Blender, ZBrush or any other 3D software, thanks to tools like GoB / GoZ one can send entire or selected parts of the model between both software with one click.

Currently, only **Blender**, **ZBrush** and a bit of **Maya** is covered here, but other software like **Fusion 360** and **Marvelous Designer** is also worth considering for the modeling and sculpting stage. (I'll most likely add them into this page at some point, when I get more familiar with them).

I assume that you are familiar with the basics of polygon modeling, if not, watch some videos on that.

---

Even though a lot is possible in both Blender and ZBrush, you should still be using ZBrush for the bulk of the work, because it's faster and allows for more creativity. But it really depends on what kind of model one is working on.

- My workflow between ZBrush and Blender can be found [here](https://github.com/Epicrex/3DArtistsHandbook/wiki/ZBrush-To-Blender-Workflow)
- And here are the [[blender|Blender]] and [[zbrush|ZBrush]] hotkeys I regularly use

#### I'll use
- 🟠 to indicate that it's a **Blender** action
- ⚪ to indicate that it's a **ZBrush** action
- 🔵 to indicate that it's a **Maya** action
- Blocks like `so` to indicate a hotkey or option location
## Best Channels For ZBrush

<div style="border-radius: 999px;">

|![[Pasted image 20230604224313.jpg\|70]]|[Keos Masons](https://www.youtube.com/@KeosMasons/featured)|![[Pasted image 20230604224506.jpg\|70]]|[Michael Pavlovich](https://www.youtube.com/@MichaelPavlovich)
|:-:|:-:|:-:|:-:
|![[Pasted image 20230604225008.jpg\|70]]|[Flipped Normals](https://www.youtube.com/@FlippedNormals)|![[Pasted image 20230604225043.jpg\|70]]| [Royal Skies](https://www.youtube.com/@TheRoyalSkies)
|![[Pasted image 20230604225154.jpg\|70]]|[Speed Char](https://www.youtube.com/@SpeedChar)|![[Pasted image 20230604225236.jpg\|70]]|[Outgang](https://www.youtube.com/@Outgang)
|![[Pasted image 20230604225251.jpg\|70]]|[J Hill](https://www.youtube.com/@artofjhill)|![[Pasted image 20230604225307.jpg\|70]]|[Danny Mac](https://www.youtube.com/@DannyMac3d)
|![[Pasted image 20230604225324.jpg\|70]]|[Folgore CGI](https://www.youtube.com/@TheFolgore94)|![[Pasted image 20230604225338.jpg\|70]]|[Ryan Kingslien](https://www.youtube.com/@RyanKingslienVertexSchool)
|![[Pasted image 20230604225403.jpg\|70]]|[Pixologic ZBrush](https://www.youtube.com/@PixologicZBrush) 

</div>

## ─────────
## General Actions
## ─────────

### Adding & Editing Primitive Shapes
|Method|Notes|
|:-:|:--|
|**Insert Brushes**|⚪ A quick way to add shapes and even entire models directly onto a SubTool. Works great with mesh fusion and snaps to mesh.
|**Add Primitive Shape**|⚪ `Tool > SubTool > Append or Insert`<br>🟠 `Ctrl` + `A`<br>🔵 Poly Modeling Shelf<br>🔵 `Create > Polygon Primitives`
|**Edit Primitive Shape**|🔵 `T`<br>⚪ _ToDo_

🔵 **Adding & Editing Primitives**
- Interactive Creation can be toggled in the `Create > Polygon Primitives` menu.

![[Pasted image 20230608024009.png]]

- In the `Create > Polygon Primitives` menu, one can also directly edit the primitive settings.

![[Pasted image 20230608024017.png]]


### Transformations
|Method|Notes|
|:-:|:--|
|**G/S/R**|🟠 The fastest
|**Transpose Gizmo**|⚪ If the Gizmo is acting strangely it may be because of focal shift.
|**Transpose Line**|⚪ Advanced Transpose Tool
|**Snap to Ground (macro)**|⚪ `Macro > Macros > Snap to Ground`
|**Unify**|⚪ Resets location and sets scale as close as possible to 2 units cubed.
|**S.Pivot / C.Pivot**|⚪ Use `S.Pivot` button to reset the model’s rotation, symmetry, etc. based on the visible polygons. Press `C.Pivot` to return to how the model was originally. Great for doing Symmetry actions on SubTools that aren't at the center.


⚪ **Transpose Line**
Video on Transpose line [here](https://www.youtube.com/watch?v=FVaTCf90l7Q).

Click the Gizmo button, to switch between the Transpose Line and Gizmo. (`Transform > Gizmo Button`)
- Click hold to stick to surface
- Outer circles to position transpose
- Inner circles to modify object (shift works)
- `Ctrl` + `LMB` on white circle, to make view align to line

### Deformations
|Method|Notes|
|:-:|:--|
|**Transpose Gizmo Cog Wheel**|⚪ Amazing suite of deformations and transformations.
|**Bend & other Deform Modifiers** |🟠 _ToDo_


### Remeshing
|Method|Notes|
|:-:|:--|
|**ZRemesher/**<br>**Quad Remesher Add-on**|⚪ ZRemesher is the best auto retopology tool.<br>🟠 Quad Remesher is a Blender add-on made by ZRemesher developer.
|**DynaMesh/**<br>**Remesh**|⚪ DynaMesh is great for early stages of sculpting.<br>🟠 Blender's Remesh takes very long and yields not the best of results.<br>Both of these remeshers are best for the block out and silhouette finding stages. They also both only work when the mesh has no holes.
|**Sculptris Pro/**<br>**Dyntopo**|⚪+🟠 Can be useful for block out stages, I don't however recommend them for beginners because they develope bad sculpting habits.
|**Retopology by Hand**|🟠+⚪ Very good in Blender, but also quite good in ZBrush with the retopology Brush. There's also a great software dedicated to retopology by hand called [Topo Gun](http://www.topogun.com/)
|**Decimate Modifier**|🟠 Reduces mesh density while trying not to lose the mesh shape.


### Edge Control (Bevels, Creases & Edge Loops)
Edge control can be achieved through adding:
- Bevels & Chamfers
- Creases
- Edge Loops


**Beveling & Chamfering by Hand**

Manually beveling gives the best control of the bevel shape and location, but needs good topology as a base.

|Method|Notes|
|:-:|:--|
|**Blender's Bevel**|🟠 Edges and verticies can be beveled differently. The segment amount, bevel profile as well as other aspects of Blender's bevels are also very customizable.<br>(`Ctrl` + `B` for Edge Bevel<br>`Ctrl` + `Shift` + `B` for vertex bevel<br>`MMB Scroll` for segment amount<br>Other bevel option are in the bevel pop-up menu)<br><br>![[Pasted image 20230604225628.png\|265]]![[Pasted image 20230604225642.png\|265]]<br><br>  
|**ZModeler Edge Bevel**|⚪ Manual bevels in ZBrush are done via the ZModeler Brush. `Bevel`(Edge Mode) can only do chamfers, with 7 profiles to chose from. It's only capable of making chamfers because it's not meant to be used like a conventional bevel, but together with subdivisions.<br><br>Some tips for beveling with the ZModeler Brush:<br><ul><li>Use `Insert`(Edge Mode) with `Interactive Elevation` to create make shift bevels with arcs</li><li>Alternatively use `Swivel`(Edge Mode) or `Delete`(Edge Mode) to create chamfers</li><li>Masking and Selections can also</li></ul>![[Pasted image 20230604225656.png]]
|**Crease Menu Bevel**|⚪ Similar to the "ZModeler Edge Bevel", just that this places the bevel based on the creases. Remember to remove the crease. (`Tool > Geometry > Crease`)
|**Bevel & Chamfer Brush**|⚪ Great for quick bevels on models with bad topology.
|**Hard Brushes like hPolish & TrimDynamic**|⚪+🟠 A sculpting approach to bevels, which makes the bevels look more organic and interesting.<br><br>(I find this to be a very interesting work ethic to give ones models that extra spice, I'll be revisitng this in other parts of the handbook)

**Beveling & Chamfering Dynamically & Automatically**

|Method|Notes|
|:-:|:--|
|**Bevel Modifier**|🟠 Same as the manual bevel, just that edges for beveling are chosen by angle, vertex groups and so on.
|**Bevel Pro**|⚪ Works on terrible topology.<ul><li>Prep: `Fix Mesh`, `Weld Points`</li><li>Prep: `Polish By Polygroups / Features` when using DynaMeshed mesh</li></ul>(`ZPlugin > BevelPro` [Full tutorial on Bevel Pro](https://www.youtube.com/watch?v=6uvPmEqD4nY))
|**Dynamic SubDiv Menu**|⚪ This menu allows for all kinds of bevels and chamfers. (`Tool > Geometry > Dynamic SubDiv`)

**Creasing**

Creases can be transfered between ZBrush and Blender. Note that creases in Blender can go from 0% - 100%, but edges in ZBrush can only be creased or not.

|Method|Notes|
|:-:|:--|
|**Creasing By Hand**|⚪ ZModeler Edge Crease<br>🟠 Quite good in Blender, because it has the best edge selection tools. (`Shift` + `E`)
|**Crease by Polygroups / ???**|⚪ _ToDo_
|**Crease With Selection Menu**|🟠 _ToDo_


**Edge Loops**
_ToDo_


### Mirroring
|Method|Notes|
|:-:|:--|
|**Mirror Modifier**|🟠 Allows for mirroring of mirrors and other complex mirror operations. Can also use empties as mirror points, to determine mirror location and rotation.
|**Mirror**|⚪ Flips the SubTool from one side to the other, depending on the selected mirror axis. It uses the world center as the mirror point.
|**Mirror And Weld**|⚪ Perfectly mirrors the SubTool from the +X to -X axis along the world center. It welds together both halves. 

>[!tip] Custom Mirror Axis in ZBrush
>To circumvent the issue of not being able to set ones own mirror axis in ZBrush, use S.Pivot / C.Pivot.


### Booleans
_ToDo_


### Duplicating & Repeating
|Method|Notes|
|:-:|:--|
|**Repeat Last Brush Stroke**|⚪ Pressing `1` key will repeat the last action. Works for insert brushes as well: Click sticky button above Transpose Gizmo, then drag out new boolean `(Ctrl` + `Drag`) and press `1`
|**Duplicate**|⚪ Move object with Transpose Gizmo + `Alt`.<br>🟠 `Shift` + `D`
|**Live Duplicate**|🟠_ToDo_ (`Alt` + `D`)
|**Arrays**|🟠 _ToDo_<br>⚪ _ToDo_

### Splitting & Merging
**Splitting**

The words **split** and **separate** are used interchangeably.

|Method|Notes|
|:--|:--|
|**Split by Visibility**|⚪ Split Hidden (`Tool > SubTool > Split`)
|**Split by Masking**|⚪ Split Masked or Unmasked Points (`Tool > SubTool > Split`)
|**Split by Polygroups**|⚪ Groups Split (`Tool > SubTool > Split`)
|**Split by Loose Parts**|Great for splitting SubTools in many different SubTools.<br>⚪ Split To Parts (`Tool > SubTool > Split`)<br>🟠 Separate By Loose Parts (`P` or `Mesh > Separate`)
|**Split by Material**|🟠 Separate By Material (`P` or `Mesh > Separate`)
|**Split by Selection**|🟠 Separate Selection, creates a new object (`P` or `Mesh > Separate`).<br>🟠 Split Selection, only splits the selected not creating a new object (`Alt` + `M` or `Y` (already used my Mesh Machine add-on) or `Mesh > Split`) 
|**Rip Vertices Apart**|🟠 Creates a hole (`V` or `Vertex > Rip Vertices`) [[1](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices.html)].<br>🟠 The rip can also be done with a fill (`Alt` + `V` or `Vertex > Rip Vertices`) [[2](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices_fill.html)]

**Merging**

The words **merge** and **join** are used interchangeably.

|Method|Notes|
|:-:|:--|
|**Join Selected**|🟠 Join joins all selected object into the active selected object (`Ctrl` + `J` or `Object`)
|**Merge lower SubTool into Current SubTool**|⚪ Watch out, MergeDown merges the SubTool below the currently selected one in the hierarchy into itself and deletes the other SubTool's history (`Tool > Subtool > Merge`)
|**Merge all Visible SubTools**|⚪ Watch out, MergeVisible deletes the history of all but the selected SubTool (`Tool > Subtool > Merge`)


### Filling
_ToDo_
_(Fill, Grid Fill, Bridge Edge Loops, Fix Holes, ...)_

### Cutting
|Software|Method|Notes|
|:-:|:-:|:--|
|⚪|**Clip & Trim & Knife & Slice (ZBrush)**|All of these tools are located in the selection brush menu. (`Ctrl` + `Shift` + `Click on Brush Selection`)<br><br>⚪ **Knife**: Use **knife** to remove parts of the mesh.<br><br>⚪ **Trim**: If knife doesn't work, use **trim** instead. Only do straight cuts with trim, because the topology will otherwise collapse!(No Alt)!<br><br>⚪ **Clip**: If you want to remove a part of the mesh but want to keep the topology intact, use **clip**.<br><br>⚪ **Slice**: Use **slice** to add in edge cuts.<br><br>Remember that all of these actions can be inverted with alt.
|⚪|Cuttings With DynaMesh + Polygroups|Slice mesh to get 2 Polygroups, then DynaMesh with Enable Groups, Blur = 0. If the results aren't as desired, then first set DynaMesh to a high value and then go back down to a lower value
|⚪|Deleting with Selection|Use Selection Tools and then `Del Hidden` (Tool > Geometry > Modify Topology)
|🟠|Box/Lasso Trim, Line Project|The trim tools are like ZBrush's knife tool but create Ngons. The Line Project works like ZBrush's clip
|🟠|Edge Split|Mark edge as sharp, add edge split + solidify + bevel modifier

<details>
<summary>Example of Edge Split or Cutting With DynaMesh + Polygroups</summary>

![[Pasted image 20230608023519.png]]
</details>


#### Clip (Blender Line Project)
- Smashes the clipped side into the model
- Keeps topology intact
#### Trim
- Removes trimmed mesh and closes the hole with the close hole operation
- Creates issues because the close holes operation algorithm is quite simple
#### Knife (Blender Trim)
- Removes knifed mesh and closes holes with its own algorithm
- A better version of trim
- (Knife currently isn't stable so always quick save before using it)
- For cutting 45° angles with curve knife in all directions, following degrees are good to remember(**45°, 135°, 225°, 315°**)
#### Slice 
- Creates a clean edge loop through the mesh (Also creates a new Polygroup)

### Morphing
#### ⚪ Morphs
_(Morph menu is at `Tool > Morph Target`)_


After a morph is stored with the `StoreMT` button, new strokes ignore each other. This allows for great use of brushes like chisel, layer and so on.

**Without Morph Target:**

![[Pasted image 20230608024046.png]]

**With Morph Target Stored:**

![[Pasted image 20230608024118.png]]

While a morph target is stored, one can use the **Morph Brush** to bring back parts of the stored morph. Or in other words, erase strokes after storing the morph.

Morphs and Layers have great synergy, as showcased in this video: https://www.youtube.com/watch?v=8oU7ZnTSkHA
#### Shape Keys & Layers
##### 🟠 Shape Keys

##### ⚪ Layers

### Extruding & Thickening
|Software|Method|Notes
|:-:|:-:|:-:
|⚪🟠|Extrude|**ZBrush:** ZModeler QMesh /  Extrude. **Blender:** Extrude or extrude menu for more options _(Alt + E)_
|⚪🟠|Push Along Surface Normals or Shrink/Flatten|**Blender:** _(Alt+ S)_ Enabling `Offset Even` in the pop-up window can often yield better results. **ZBrush:** While using QMesh or Extrude hold Shift
|⚪🟠|Mask + Transpose / Move
|⚪|Thick Skin|Caps the distance a mesh can go in or out, use this in combination with other tools _(Tool > Thick Skin)_
|⚪|Extract|_(Tool > SubTool > Extract)_
|⚪|Mesh Project|A mask brush. [Mesh Project video here](https://www.youtube.com/watch?v=CTnYP4vXFsU) 1:49 min
|⚪|Topology Brush
|⚪|Slice + QMesh new Polygroup

#### Mesh Project
|Hotkey|Name
|:-:|:-:
|Ctrl|Add new plating
|Ctrl + Alt|Remove parts of last plating (don't move camera)
|Ctrl + Shift|Add plating to last plating (don't move camera, only click shift when done with shape)
|Ctrl + Alt (Bool On)|Cut plating into mesh (as new tool)
|Ctrl + Shift (Bool On)|Add new plating (as new tool, after making a new plating tool, use only ctrl (with bool still on) to add platings while being able to move camera. Then when done, ZRemesh to merge all plating of SubTool) (!rephrase this gibberish)

(Mesh balloon works the same)


### Reprojecting Detail
From high to low

⚪ >
1. Apply SubDiv levels to SubTool
2. ZRemesh model
3. Duplicate SubTool
4. Go to the original SubTool (the one with history) and go back before the ZRemesh
5. Hide all other objects except for these 2
6. Then select the ZRemeshed duplicate. Add 1 SubDiv level and click ProjectAll. Repeat this step however often


🟠 >


### Recreating Subdivision Levels
⚪ >

🟠 >

**Recreate ZBrush's subdivisions in Blender**

1. Add Multires modifier to low and subdivision levels to it
2. Add Shrinkwrap to low, select the high and apply it

Or use the [Sculpt Layers](https://blendermarket.com/products/sculpt-layers)

### Fusing Meshes
|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Mesh Fusion|Only works with 2 meshes at once. [Mesh Fusion Tutorial](https://www.youtube.com/watch?v=frxGss8_XBY&). [Video of nicely using it here](https://youtu.be/sp0pwSGoaRM?t=155)
|⚪🟠|DynaMesh/Remesh|DynaMesh/Remesh will fuse meshes when they are close enough

#### ⚪ Fusion
0. Turn off DynaMesh
1. Place mesh with insert brush for example, make sure the back faces are facing the target mesh
2. Create a Polygroup around area where fusion should happen
3. Clear mask, then clear mask again for fusion


### ZModeler
#### Introduction To ZModeler
ZModeler is a brush in ZBrush that allows for poly modeling. **Royal Skies has a great [`playlist`](https://www.youtube.com/playlist?list=PLZpDYt0cyiuvWir5Lmzf7NM7j27FOn2fp) covering everything about the ZModeler as quickly as possible.**


- Hover over vertex, edge or face and press space to open the ZModeler action menu
- Alt hold to paint poly group white, whiteout letting go click alt again to cycle through poly groups

<details>
<summary>ZModeler Actions</summary>

#### Vertex Actions

#### Edge Actions
##### Bevel
- Hold on edge to bevel
- Click on another edge to repeat last bevel amount

##### Insert(Loop Cut)
- Alt to dissolve edge

#### Face Actions
##### Q Mesh (Smart Extrude)
- Pull on face to extrude
- Push in face to delete block
- Hold Shift to dissolve closet edge loop
- Hold Alt to duplicate and separate faces
- While extruding click alt to cycle through poly groups
- Extrude does smart merges, smart merge chamfer step amount can be adjusted

#### Inset
- One can choose to inset entire poly group
- Clicking on other face gives them the last inset amount
- Ctrl and shift for more

</details>

### Visibility & Masking
ToDo
- Mask Changed Points
- Polygroup Changed Points

## ─────────
## SPECIFIC ACTIONS
## ─────────

### Diamond Grid
Used for fishnet stockings, fences and nets.

🟠 >

**Square grid to Diamond grid (quad based)**
- Un-Subdivide and in the pop-up window, set Iterations to 1
- Poke Faces then Tris to Quads
- Armored Vitaly Poke (best result) (Armored scripts add-on)


⚪ >

- https://www.youtube.com/watch?v=wv3uNqr1Rf4

### Cushion

<details>
<summary>Example</summary>
![[Pasted image 20230608023725.png]]
</details>

🟠 > 

- [Armored Colony's Approach to it](https://youtu.be/HsBvq2j5zt8)
- Or use Cloth Pro add-on


### Bevel Transitions
🟠 > 

<details>
<summary>Example</summary>

![[Pasted image 20230608024132.png]]
![[Pasted image 20230608024146.png]]

</details>

### Connecting Circle with Square or Low Detail Circle
🟠 > 
<details>
<summary>Example</summary>
![[Pasted image 20230608024158.png]]
</details>

### Rotation Reset Trick
🟠 >

Rotation Reset Trick or "box trick" is a method for removing extra data from a model: unwanted transforms, corrupted internal data, etc.
1. Create a cube
2. Merge object with issues into cube and delete cube mesh


### Bend Object along the Surface of Another
<details>
<summary>Example</summary>
![[Pasted image 20230608023737.png]]
</details>

🟠 >

1. Make sure the origin is at the point where the object should connect with the target object
2. Extrude outwards at the connection point. And add a 4 segment bevel at the lowest corner
3. Make a vertex group and assign every edge loop a different weight. Starting at the outermost loop with a weight of 1. Give the second outermost a weight of 
0.8 and so on. After assigning weight 0.2 stop.
4. Set cursor to object origin. Add a grid, and turn on wireframe for that object. Then press F9 and adjust the grid topology density. The more curve the target has, the more dense the gird has to be.
5. Add a surface deform mod to the object. Target: Grid, Click Bind.
6. Apply scale and rotation for grid, object and parent object to grid
7. Add Shrinkwrap mod to gird. Snap Mode: Outside surface, Target: Target Object 
8. Enable face snap. Snap With: Median, Align Rotation to Target. And place the grid on the target surface
9. Add DataTransfer mod on Object. Source: Target Object, Vertex Group: vertex group from 3., Face Corner Data: Custom Normals

⚪ > 

### Clean Surface Transition Between 2 Objects
<details>
<summary>Example</summary>
![[Pasted image 20230608023749.png]]
</details>

🟠 >

**Shrink wrap + Vertex groups**
1. Make sure the origin is at the point where the object should connect with the target object
2. Extrude outwards at the connection point. And add a 4 segment bevel at the lowest corner
3. Make a vertex group and assign every edge loop a different weight. Starting at the outermost loop with a weight of 1. Give the second outermost a weight of 0.8 and so on. After assigning weight 0.2 stop.
4. Add Shrinkwrap mod. Snap mode: Outside surface, Target: Target Object, Vertex Group: vertex group from 4.
5. Enable face snap. Snap With: Median, Align Rotation to Target. And place object on the target surface
6. Add DataTransfer mod. Source: Target Object, Vertex Group: vertex group from 4., Face Corner Data: Custom Normals

### Wireframe

<details>
<summary>Example</summary>
![[Pasted image 20230608023800.png]]
![[Pasted image 20230608023809.png]]
</details>

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Wireframe Modifier
|⚪|


### Clothing, Armor or Retopology

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Shrinkwrap + SubDiv|Use Shrinkwrap and SubDiv with others mods like bevel. In the `Snap To` menu, switch to the `Snap With` `Closet` mode. When retopologizing results may often be better on lower SubDiv levels because the Shrinkwrap won't have the chance to imprint every sculpted imperfection.

### Interesting Skin Clothing Effect

<details>
<summary>Example</summary>
![[Pasted image 20230608023822.png]]
</details>

|Software|Method|Notes
|:-:|:-:|:-:
|🟠|Edge Split At Perfect Angle|Edge Split mod set to specific angle amount. Other mods to use with this: Solidify, SubDiv, Bevel, Shrink Wrap



### Smoothing Polygroup Borders

![[Pasted image 20230604225721.png|215]]
![[Pasted image 20230604225730.png|200]]

|Software|Method|Notes
|:-:|:-:|:-:
|⚪|Smooth Groups Brush|_(Lightbox > Brush Tab > Smooth Folder > Smooth Groups.ZBP)_ Be careful to not smooth the mesh by accident, use masking

## ─────────
## SCULPTING
## ─────────

Organic sculpting is something best learned by simply sculpting and watching others sculpt

### Sculpting Tips
- Try to adjust brush strength as little as possible and instead set up your stylus correctly
- Don't have the mindset that every sculpt will be a portfolio piece
- Jump around the sculpt instead of finishing one area. This has 2 main reasons. The first being, that one should first get the main shapes correct before moving on to smaller shapes and reasons two is, if one works on one area too long, one stops seeing mistakes
- Regularly check silhouette and proportions by zooming out, moving the head away from the screen and turning on ZBrush's silhouette preview

[How you should Sculpt EVERYTHING](https://www.youtube.com/watch?v=zwn7EZczPjY&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(J Hill - 27min)_

[15 Blender and ZBrush Sculpting Tips No One Talks About](https://www.youtube.com/watch?v=rkMH77hZ9xc) _(Outgang  - 7min)_

### Brushes
The **`B ...`** box is the hotkey for the brush. "B" for "brush" and the other letters for the brush name.
#### Main Brushes
- Clay Buildup **`B CB`**
- Standard **`B ST`**
- Dam Standard **`B DS`**
#### Surface Smoothing
- Smooth
- Trim Dynamic **`B TD`**
- hPolish **`B HP`** (Same as flatten but respects hard edges, alt for different behavior)
- Flatten **`B FA`**
- Planar **`B PL`**

#### Special Brushes
- Move **`B MV`** (+Interesting interaction with Ctrl)
- Inflate **`B IN`**
- Layer **`B LA`**
- Bevel Arc / Flat **`B BA`** / **`B BF`**
- Pinch **`B PI`**
- Scribe Chisel **`B SC`**
- History Recall **`B HR`**

#### Great Brush Packs
Search for Brushes and Insert Brushes on ArtStation and Gumroad.

- [Orb Brush Pack (free)](https://orb.gumroad.com/l/nOkHw)
- [Flipped Normals Skin Kit (paid)](https://flippednormals.com/downloads/flippednormals-skin-kit/)
- [550 Blender Brushes Stylized Edition (paid)](https://www.artstation.com/marketplace/p/80bz/megapack-550-blender-brushes-stylized-edition-4k-alphas-included)
- [Sculpting Brushes for Dragons, Lizards(paid/free demo)](https://www.artstation.com/marketplace/p/XPXl/vdm-and-sculpting-brushes-for-dragons-lizards-and-etc?utm_source=artstation&utm_medium=referral&utm_campaign=homepage&utm_term=marketplace)
- [Igor Golovkov (free + paid)](https://www.artstation.com/astiil/store)
- [Flipped Normal Shop Sin Brushes (free + paid)](https://flippednormals.com/downloads/tag/skin/)

### Sculpting Videos
For good YouTube channels look [here](#Best-Channels-For-ZBrush-)


- [Principles of Sculpting | Complete Guide to Zbrush 2022](https://www.youtube.com/watch?v=rkiNs3AQg_o&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(1h 26min)_
- [Top Tips for Improving Your Sculpts in ZBrush](https://www.youtube.com/watch?v=3boCwp9uLsY&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(Flipped Normals - 31min)_
- [ZBrush- General Organic Sculpting Tips](https://www.youtube.com/watch?v=Lj2WPYJfCj0&list=PLveghVPT3X7ZT_SheZDFm4P7FoCRkuj3M) _(Arrimus 3D - 25min)_