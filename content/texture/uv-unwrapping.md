---
title: "🎁 UV Unwrapping"
enableToc: true
---
## Overview
UV unwrapping is best in Blender, by far. When UV unwrapping, it's good practice to use UV checker maps as well as heat maps, to better see stretching and distortions. UV checker maps also help visualize texel density differences between UV islands, but more on that [[#Texel Density|later]]. My favorite collection of UV checker maps can be found [here](https://polycount.com/discussion/186513/free-checker-pattern-texture).

## Blender UV Related Options & Advice

|Functionality|How to Achieve
|:-:|:-:
|Only show polygons in UV Editor that are selected in 3D viewport|`UV Sync Selection` (2-way arrows at top left)
|Only select desired UV island with `L` select|Switch to `Face select` mode or disable `UV Sync Selection`
|Unwrap automatically after every seam that's placed|`Options > Live Unwrap`
|Add/ remove a seam every time edges are Ctrl selected|Switch to `Edge select` mode, then Ctrl select some edges, finally in the pop-up menu switch `Edge Tag` to `Tag Seam`

- Not having the transform scale of all objects on the same UV map set to 1, will result in size ratio differences between UV islands when unwrapping _(If cube A and cube B have the same visual size, but cube B has a transform scale of 0.5, then the UV unwrap of cube B will be half the size of cube A)_
- If you intend to bake the model, then you can completely disregard the UV's of the high mesh
- When unwrapping objects with a SubDiv, it can be good to turn it off in edit mode. So one can see the edges better



## Placing Seams
**Helpful knowledge for placing seams :**
- Seams can be selected in select menu (Shift + G or Select > Select Similar > Seam)
- Seams can be placed at edges that surpass an angle threshold (Select > Select Sharp Edges or Shift + G)
- Smart UV unwrap can often do the job for hard surface objects
- Live UV unwrap is quite helpful
- Seams can be recreated on the model based on the UV Islands, helpful for when seams are lost or extracting smart UV unwrap seams (UV > Seams from Islands)
- One can cycle through different UV unwraps for one model, helpful for getting the best UV unwrap (Object Data Properties > UV Maps)

>[!tip] Rules for placing seams
>
>- Make islands as big as possible. This reduces space because every island needs its own padding. For very long islands, however, it still makes sense to split them into smaller islands. Another pro of bigger islands is that there are fewer islands, so fewer seams.

>[!tip] The ultimate rule of thumb 🔥
>
>A smoothing/ shading split always needs a UV split, but a UV split doesn't always need a smoothing/ shading split.

## Texel Density


>[!example]- Texel Videos, Articles
>
>- **[Texel Density: All you need to know PDF by Leonardo Iezzi](https://www.artstation.com/marketplace/p/JWwlB/texel-density-all-you-need-to-know-hq-pdf)**
>  
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-SwixDySbIw?si=L4hfia7za2rjInWy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x-pTALV0wuI?si=1jrNV_esh-cjvQnP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### What's Texel Density
In the same way that pixels are the smallest unit of a screen, texels (short for texture elements) are the smallest unit of a texture. Texel density describes the amount of texture resolution on a mesh.

The way the one changes the texel density is by scaling up or down UV islands on the texture/ in the UV Editor. The bigger the UV island, the more texel density it has and the therefor giving the texture a higher resolution/ more detail

### Why is Texel Density Important
Different texel densities across multiple UV islands that come from the same mesh, is a no-go and will cause a lot of issues with procedural materials while texturing. What's however in theory fine, is to have different texel densities across multiple UV islands, that come from different meshes. No matter if those UV islands are on the same UDIM or not. 

That said, the most important thing when in comes to texel densities, is consistency. An object that is made ob different meshes with different texel densities, will be very noticeable.

Although t


- keeping the the same texel density alloWs for consistency between different artist and even ones own work

but are still on the same texture map is fine in theory. And 

is fine in theory. 

 Not just that, but it will also look very inconsistent.

Scaling UVs individually across separate meshes that go on the same texture map is fine, however scaling UV islands that come from the same mesh individually, 


### What Texel Density to Choose

Firstly, one should know, how to calculate texel density. The math is as follows:

|Texture<br>Resolution|Divide by Standard UDIM Unit<br>(Project dependent)<br>normally 100cm (1m)|Texel Density<br>px/cm or px/unit|Used For|Density Category
|-:|:-:|:-:|:-:|:-:
|128px|➗ 100cm 🟰|1,28|Strategic Camera|Low
|256px|➗ 100cm 🟰|2,56|Strategic Camera|Low 
|512px|➗ 100cm 🟰|5,12|Third-Person Camera|Medium 
|1024px|➗ 100cm 🟰|10,24|First-Person Camera|High
|2058px|➗ 100cm 🟰|20,48|First-Person Weapon and Arms|High
|4096px|➗ 100cm 🟰|40,48|First-Person Weapon and Arms|Very High
|8192px|➗ 100cm 🟰|80,96||Ultra High

Different texel densities across multiple UV islands that come from the same mesh, is a no-go and will cause a lot of issues with procedural materials while texturing. What's however in theory fine, is to have different texel densities across multiple UV islands, that come from different meshes. No matter if those UV islands are on the same UDIM or not. 

That said, the most important thing when in comes to choosing texel densities, is consistency. An object that is made of different meshes with different texel densities, will be very noticeable to the eye.

So how does one stay consistent without using the same texel density for everything? The solution is to split up the environment into different priority/ density groups, as seen in these images:
![[image-2023-11-22-19-12-57.png]]
![[image-2023-11-22-19-11-59.png]]
_images by Leonardo Iezzi and Nicky Cry_

|Priority/ Density Group||
|:-:|:-:|:-:
|🟩 High 🟩|Places the player can easily get close to
|🟨 Medium 🟨|
|🟥 Low 🟥|Background. Far away assets


**Things that affect texel density are :**
- Camera perspective
- Distance from camera to asset
- Hardware goal
- Art style


### How to See and Change Texel Density

The most simple way to see texel density inconsistencies, is with the help of UV checker maps ([here](https://polycount.com/discussion/186513/free-checker-pattern-texture) my favorite UV checker maps collection).

---


UV unwrapping is best in Blender, by far. When UV unwrapping, it's good practice to use UV checker maps as well as heat maps, to better see stretching and distortions. UV checker maps also help visualize texture resolution differences between UV islands, but more on that [[#Scaling UVs|later]]. My favorite collection of UV checker maps can be found [here](https://polycount.com/discussion/186513/free-checker-pattern-texture).


----



---

As mentioned before, UV checker maps can visualize the texture resolution of every UV island directly in the 3D view on the model. The bigger the UV checker map, the bigger the texture resolution. Scaling UVs individually across separate meshes that go on the same texture map is fine, however scaling UV islands that come from the same mesh individually, will cause a lot of issues with procedural materials while texturing. 

It's also very important to always scale UV islands evenly along all axes, not doing so will result in distorted textures.

If you notice, that you screwed up the scaling of some of your islands, then there are some easy ways to fix it. Firstly, re unwrapping the affected UVs will give them the same scale again. A much better way of doing it, that doesn't require re unwrapping, is by selecting the affected UV islands in the UV editor and clicking `UV > Average Islands Scale`.

Some reasons why one would want to scale the UV islands of some meshes more than others, would be because one part has more important or visible detail, where other parts of the model might be more hidden, with blank surfaces, that don't need much detail.

Generally, the workflow regarding scaling UV islands will look something like this: Unwrap everything and start baking. Notice that there's no way that the textures will look crisp with your budget of texture resolution and UDIMs amount. After trying every trick in the book to increase the size of the mesh in the UV space (like optimizing the retopology mesh, tweaking the UV packing algorithm, ...), you finally turn to the last option there is, sacrificing the detail of some UV islands to have more space in return to scale up those UV islands that really need it.

## Rotating UVs

Most UV pack algorithms will only rotate the UV islands by 90°. This is done, to make jagged less visible in the texture. The reason for this has to do with the fact that a monitor pixel has four sides. Having the UV islands follow the flow one of the these sides, that being 90°, 180°, 270°, 360° reduces the effect of jagged edges. [[glossary#Anti-Aliasing|Anti-aliasing]] can also help reduce this issue, but not fully.

_90° snap texture result (without the help of [[glossary#Anti-Aliasing|anti-aliasing]])<br>_
![[image-2023-11-21-15-17-59.png\|400]]<br>
_45° snap texture result (without the help of [[glossary#Anti-Aliasing|anti-aliasing]])<br>_
![[image-2023-11-21-15-26-07.png\|400]]

With higher resolution textures, this is less this of an issue, and in rare situations there can be reasons why one would want to rotate UV islands by more or less than 90°, but in most cases one should stick to 90° rotations.

## Mirroring UVs
Before UV unwrapping one has 2 choices, applying the mirror and UV unwrapping or UV unwrapping and applying the mirror at export. 

Applying the mirror at export has the advantage that there's twice as much texture space because the UVs from the left and right are staked on top of each other, thus allowing to use smaller/ fewer textures or to just have a better resolution. However, this has its issues, generated textures for example don't look natural because everything perfectly mirrors to the other side

Applying the mirror before is often needed for specific designs and makes textures look more natural around the midline. For example, if one wants some words to be on the back of a jacket the UVs of left and right can not be stacked, because both sides should have different text. So the mirror has to be applied before UV unwrapping.

Best practice is to mix it up, objects that connect at the middle and mirror from left to right should not have stacked UVs, but when the mesh is farther away from the middle, stacked UVs are more ok. Another option is to split and object into two parts. And give the center a unique UV but stack the split object at the sides, this however comes with a hole another set of problems and should only be used if UV space optimization is key

### Helpful Stuff for Mirroring UVs
- A good workflow is to apply mirrors for all objects and then to stack UVs with tools that search for same UVs and stack them
- Don't place seams for both sides. Either place them before mirroring or symmetrize topology, so both sides have the same seam (Hard ops Alt+ X)

[Video about mirrored UVs](https://www.youtube.com/watch?v=Rmv1Cxb3kb0)
## Padding & Margin
Padding is important to avoid bleeding, which is visible as seems on the model. Correct padding is also important for getting nice bevels when baking. Padding is between every UV island and margin between all islands and the texture borders. The amount of padding depends on the texture resolution. It also depends on how much downresing will happen. If the highest resolution is 4k and there is a low setting which downreses/ mips the texture to let's say 256px, then more padding is needed. How the texture will be viewed is also important, if it's a roof tile on an atlas environment sheet, it's viewed at extremely acute angles and will be mipped/ filtered to hell then more padding is generally good.

>[!tip] Recommended paddings/ margins
>
>Padding is per island, so a padding of 2px will result in a 4px distance between 2 islands.
>
>|Texture Map Size|Recommended Padding
>|:-:|:-:
>|4096px|16px - 32px 
>|2048px|8px - 16px
>|1024px|4px - 8px
>|512px|2px - 4px
>|256px|1px - 2px
>|128px |0.5px - 1px

Baking software often adds a margin of its own, when one lays out the UVs with a nice margin this extra margin should be disabled.

[Edge Padding (Polycount wiki)](http://wiki.polycount.com/wiki/Edge_padding)

## UV Packing
UV packing is the last step of the UV process, but occasionally packing beforehand can be helpful, to get a feel of what still has to be done. The goal with packing is to fit all UV islands as densely together as possible, so all islands can be scaled up and have more texture resolution. UV packing is done with packing algorithms and never by hand. Blender has a built-in packing algorithm, but it's functionality is quite lackluster (it's located under `UV > Pack Islands`, clicking on it will open a menu with some packing customization options). 

What I recommend using instead, is [UV Pack Master](https://uvpackmaster.com). It's able to pack much more compactly and has many more vital packing options. It has a [free and paid](https://uvpackmaster.com/free-sdk/) version, but I think the paid version is well worth it. More on how to use UV Pack Master [[#UV Pack Master|here]].

## UV Unwrapping Tools

- [UV Squares](https://blendermarket.com/products/uv-squares) (straightens UVs to save more space)
- [[uv-unwrapping#UV Pack Master|UV Pack Master section]]
- [[uv-unwrapping#Zen UV|Zen UV section]]
- [[uv-unwrapping#UV Squares|UV Squares section]]

### UV Pack Master

It has quite a lot of settings that help to achieve the perfect pack. Here are the most important ones to understand.

#### General
- Enable `Heuristic` for better pack results (but slightly slower packs)
- Click `Validate UVs` to find UV errors

#### Stacking UV Islands
If the model has many repeating parts, stacking identical UVs on top of each other, can save a lot of space. Even if some polys of these repeating parts move a bit, they can still be stacked by increasing the similarity threshold.

`Align Similar` and `Similarity Thresh` are under `Advanced Options`. `Lock Overlapping` is also helpful and should be set to `Exact` or `Any Part` depending on the situation.

#### Packing in Custom Aspect Ratios
Sometimes the texture needs to be other aspect ratios than 1x1. In those cases, one tell the packing algorithm to pack in different aspect ratios.

To do this, add the texture with the aspect ratio you're aiming for. Then under `Non-Square Packing` enable `Use Texture Ratio` and click `Adjust Islands To Texture`.

#### Add New Islands to a UV Already Packed
- Under Advanced options, enable pack to others
- Select the new UV island
- Pack

**Pack UVs Across Multiple UDIMs:**
- Under Packing Box Set packing box to UDIM tile and use the arrows to navigate across tiles
- Select the UVs you want to pack on a UDIM
- Pack

**Padding between UVs:**
- Select UVs
- Under Pixel Margin, set Pixel Margin to 10 and Pixel padding to 1
- Pack

**Define Rotation Step Per Island:**
- Under Rotation Step enable it
- Show rotation to view, G is default and reset will put it back to g
- Select island enter rotation step value and set rotation

**Lock Groups**
- This is great to keep duplicates stacked when packing
- Watch out to not have things locked that shouldn't be, when problems occur look at the groups

**UV Squares (Blender Addon):**
Straightens out quad UV strips at the cost of small distortion.
Allows one to fit UVs more tightly together and makes UV unwraps look better. It's often also needed for specific textures(patterns) that should appear correctly on the object.

### UV Squares
[UV Squares](https://blendermarket.com/products/uv-squares) straightens out quad UV strips at the cost of small distortion. Allows for UVs to be fitted more tightly together and makes UV unwraps look better. It's often also needed for specific textures (patterns) that should appear correctly on the object. For specific hand painting tasks, it's sometimes even essential to have straight UVs.

### Zen UV
Wonder full UV unwrapping tool, I'll cover it at some point. [Here's](https://www.youtube.com/@SergeyTyapkin/videos) the channel of the addon creator.



## Good UV Unwrap Examples
To-Do


---

Temp

https://www.youtube.com/watch?v=x-pTALV0wuI

https://www.youtube.com/watch?v=-SwixDySbIw

https://www.youtube.com/watch?v=HDURGTLNu2Q

https://www.youtube.com/watch?v=ztfPDcSINnA

https://www.youtube.com/watch?v=PK0kgjEOk1U

https://www.youtube.com/watch?app=desktop&v=8qv6DbWr6zw&t=100

https://80.lv/articles/textel-density-tutorial/

https://leonano.gumroad.com/l/texeldensity

https://www.beyondextent.com/deep-dives/deepdive-texeldensity

https://uploads-ssl.webflow.com/6280d2582095efc547d41220/62befe963aa1f205531b3057_DeepDive_TexelDensity_02.pdf

https://www.youtube.com/watch?v=IWY9Wk7z54s

https://www.youtube.com/watch?v=5e6zvJqVqlA

https://www.youtube.com/watch?v=PLLOQD97UAk
https://www.youtube.com/@nickycry5834