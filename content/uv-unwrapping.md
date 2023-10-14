---
title: "UV Unwrapping"
enableToc: true
---
## Overview
UV Unwrapping is best in Blender, by far. When UV unwrapping, it's a good practice to use UV checker maps to better see distortions. Make sure that every part of the model that shares the same atlas texture map has the same UV checker map size. My favorite collection of UV Checker Maps is [here](https://polycount.com/discussion/186513/free-checker-pattern-texture).

## Placing Seams
>[!tip] Helpful stuff for placing seams
>
>- Seams can be selected in select menu (Shift + G or Select > Select Similar > Seam)
>- Seams can be placed at edges that surpass an angle threshold (Select > Select Sharp Edges or Shift + G)
>- Smart UV unwrap can often do the job for hard surface objects
>- Live UV unwrap is quite helpful
>- Seams can be recreated on the model based on the UV Islands, helpful for when seams are lost or extracting smart UV unwrap seams (UV > Seams from Islands)
>- One can cycle through different UV unwraps for one model, helpful for getting the best UV unwrap (Object Data Properties > UV Maps)

>[!tip] Rules for placing seams
>
>- Make islands as big as possible. This reduces space because every island needs its own padding. For very long islands, however, it still makes sense to split them into smaller islands. Another pro of bigger islands is that there are fewer islands, so fewer seams.

>[!tip] The ultimate rule of thumb
>
>A smoothing/ shading split always needs a UV split, but a UV split doesn't always need a smoothing/ shading split.

## Paddings/ Margins
Padding is important to avoid bleeding, which is visible as seems on the model. Correct padding is also important for getting nice bevels when baking. Padding is between every UV island and margin between all islands and the texture borders. The amount of padding depends on the texture resolution. It also depends on how much downresing will happen. If the highest resolution is 4k and there is a low setting which downreses/ mips the texture to let's say 256px, then more padding is needed. How the texture will be viewed is also important, if it's a roof tile on an atlas environment sheet, it's viewed at extremely acute angles and will be mipped/ filtered to hell then more padding is generally good.

>[!tip] Recommended paddings/ margins
>
>Padding is per island, so a padding of 2px will result in a 4px distance between 2 islands.
>
>|Texture map size|Padding
>|:-:|:-:
>|4096px|32px - 16px
>|2048px|16px - 8px
>|1024px|8px - 4px
>|512px|4px - 2px
>|256px|2px - 1px
>|128px |1px - 0.5px

Baking software often adds a margin of its own, when one lays out the UVs with a nice margin this extra margin should be disabled.

[Edge Padding (Polycount wiki)](http://wiki.polycount.com/wiki/Edge_padding)

## Mirroring UVs
Before UV unwrapping one has 2 choices, applying the mirror and UV unwrapping or UV unwrapping and applying the mirror at export. 

Applying the mirror at export has the advantage that there's twice as much texture space because the UVs from the left and right are staked on top of each other, thus allowing to use smaller/ fewer textures or to just have a better resolution. However, this has its issues, generated textures for example don't look natural because everything perfectly mirrors to the other side

Applying the mirror before is often needed for specific designs and makes textures look more natural around the midline. For example, if one wants some words to be on the back of a jacket the UVs of left and right can not be stacked, because both sides should have different text. So the mirror has to be applied before UV unwrapping.

Best practice is to mix it up, objects that connect at the middle and mirror from left to right should not have stacked UVs, but when the mesh is farther away from the middle, stacked UVs are more ok. Another option is to split and object into two parts. And give the center a unique UV but stack the split object at the sides, this however comes with a hole another set of problems and should only be used if UV space optimization is key

### Helpful Stuff for Mirroring UVs
- A good workflow is to apply mirrors for all objects and then to stack UVs with tools that search for same UVs and stack them
- Don't place seams for both sides. Either place them before mirroring or symmetrize topology, so both sides have the same seam (Hard ops Alt+ X)

[Video about mirrored UVs](https://www.youtube.com/watch?v=Rmv1Cxb3kb0)

## Scaling UVs
Scaling UVs on separate meshes that go on the same texture map is fine, however scaling UV islands that touch each other on the same mesh will when texturing result in a lot of issues with most of the procedural materials.

When scaling, make sure to always evenly scale along all axes

## Things to be Aware of
- Not having object's transform scale set to 1 for all object on the same UV map, will result in size differences between UV islands when unwrapping
- For baking only the low needs to be UV unwrapped

## UV Unwrapping Tools

[UV Pack Master](https://uvpackmaster.com) is a wonderful UV unwrapping tool, which can generate beautifully compact UV layouts. In combination with that, I also like using [UV Squares](https://blendermarket.com/products/uv-squares) which straightens UVs to save more space.

- [[uv-unwrapping#UV Pack Master|UV Pack Master section]]
- [[uv-unwrapping#Zen UV|Zen UV section]]
- [[uv-unwrapping#UV Squares|UV Squares section]]


### UV Pack Master

It has quite a few settings to get the perfect result, here are the most important ones to understand.

**General**
- Enable Heuristic for better pack results
- Click validate UVs to find UV errors

**Stack Similar/ Same UV Islands:**
- Align Similar
- Lock Overlapping: Exact or Any Part
- Pack

**UV Unwrap onto Any Texture Ratio/ Size:**
- Add Texture and UV unwrap object
- Under Non-Square Packing enable use texture ratio and click adjust islands to texture
- Pack

**Add New Islands to a UV Already Packed:**
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