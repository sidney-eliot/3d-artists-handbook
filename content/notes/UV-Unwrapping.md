---
title: "UV Unwrapping"
enableToc: true
---

# Table of Contents
- [[#Overview|Overview]] works in obsidian - works in hugo
- [Overview](#Overview) works in obsidian
- [[#Placing Seams|Placing Seams]] works in obsidian
- [Placing Seams](#Placing-Seams) doesn't work in obsidian



- [[#Paddings/ Margins|Paddings/ Margins]]
- [[#Mirroring UVs|Mirroring UVs]]
- [[#Scaling UVs|Scaling UVs]]
- [[#Things to be Aware of|Things to be Aware of]]
- [[#Blender UV Unwrapping Tools|Blender UV Unwrapping Tools]]
- [[#Good UV Unwrap Examples|Good UV Unwrap Examples]]



# Overview
UV Unwrapping is best in blender, by far. When UV unwrapping it's good practice to use UV checker maps to better see distortions. Make sure that every part of the model that shares the same atlas texture map has the same UV checker map size. (My favorite collection of UV Checker Maps is [here](https://polycount.com/discussion/186513/free-checker-pattern-texture))

# Placing Seams
## Helpful Stuff for Placing Seams
- Seams can be selected in select menu (Shift + G or Select > Select Similar > Seam)
- Seams can be placed at edges that surpass an angle threshold (Select > Select Sharp Edges or Shift + G)
- Smart UV unwrap can often do the job for hard surface objects
- Live UV unwrap is quite helpful
- Seams can be recreated on the model based on the UV Islands, helpful for when seams are lost or extracting smart UV unwrap seams (UV > Seams from Islands)
- One can cycle through different UV unwraps for one model, helpful for getting the best UV unwrap (Object Data Properties > UV Maps)

## Rules for Placing Seams
- Make islands as big as possible. This reduces space because every island needs its own padding. For very long islands however, it still makes sense to split them into smaller islands. Another pro of bigger islands is that there are less islands so less seams.

# Paddings/ Margins
Padding is important to avoid bleeding which is visible as seems on the model. Correct padding is also important for getting nice bevels when baking. Padding is between every UV island and margin between all islands and the texture borders. The amount of padding depends on the texture resolution. It also depends on how much downresing will happen. If the highest resolution is 4k and there is a low settings which downreses/ mips the texture to let's say 256px, then more padding is needed. How the texture will be viewed is also important, if it's a roof tile on an atlas environment sheet, it's viewed at extremely acute angles and will be mipped/ filtered to hell then more padding is generally good.

Recommended paddings/ margins:
(Padding is per island so a 2px padding is a 4px distance between 2 islands)
- 4096px = 32px - 16px
- 2048 = 16 - 8
- 1024 = 8 - 4
- 512 = 4 - 2
- 256 = 2 - 1
- 128 = 1 - 0.5

Baking software often adds a margins of it's own, when one lays out the UV's with a nice margin this extra margin should be disabled.

[Edge Padding (Polycount wiki)](http://wiki.polycount.com/wiki/Edge_padding)

# Mirroring UVs
Before UV unwrapping one has 2 choices, applying the mirror and UV unwrapping or UV unwrapping and applying the mirror at export. 

Applying the mirror at export has the advantage that there's twice as much texture space because the UV's from the left and right are staked on top of each other, thus allowing to use smaller/ less textures or to just have a better resolution. However this has it's issues, generated textures for example don't look natural because everything perfectly mirrors to the other side

Applying the mirror before is often needed for specific designs and makes textures look more natural around the midline. For example if one wants some words to be on the back of a jacket the UV's of left and right can not be stacked, because both sides should have different text. So the mirror has to be applied before UV unwrapping.

Best practice is to mix it up, object that connect at the middle and mirror form left to right should not have stacked UV's, however objects that are farther away from the middle can have stacked UV's. Another option is to split and object into two parts. And give the center a unique UV but stack the split object at the sides, this however comes with a hole another set of problems and should only be used if UV space optimization is key

## Helpful Stuff for Mirroring UVs
- A good workflow is to apply mirrors for all objects and then to stack UV's with tools that search for same UV's and stack them
- Don't place seams for both sides. Either place them before mirroring or symmetrize topology so both sides have the same seam (Hard ops Alt+ X)

[Video about mirrored UV's](https://www.youtube.com/watch?v=Rmv1Cxb3kb0)

# Scaling UVs
Scaling UV's on separate meshes that go on the same texture map is fine, however scaling UV islands that touch each other on the same mesh will when texturing result in allot of issues with most of the procedural materials.

When scaling make sure to always evenly scale along all axis

# Things to be Aware of
- Not having objects transform scale set to 1 for all object on the same UV map, will result in size differences between UV islands when unwrapping
- For baking only the low needs to be UV unwrapped

# Blender UV Unwrapping Tools
## UV Pack Master (Blender Addon)
### General
- Enable Heuristic for better pack results
- Click validate UVs to find UV errors

### Stack Similar/ Same UV Islands
- Align Similar
- Lock Overlapping: Exact or Any Part
- Pack

### UV Unwrap onto Any Texture Ratio/ Size
- Add Texture and UV unwrap object
- Under Non-Square Packing enable use texture ratio and click adjust islands to texture
- Pack

### Add New Islands to a UV Already Packed
- Under Advanced options enable pack to others
- Select the new UV island
- Pack

### Pack UVs Across Multiple UDIMs
- Under Packing Box Set packing box to UDIM tile and use the arrows to navigate across tiles
- Select the UVs you want to pack on a UDIM
- Pack

### Padding between UVs
- Select UVs
- Under Pixel Margin set Pixel Margin to 10 and Pixel padding to 1
- Pack

### Define Rotation Step Per Island
- Under Rotation Step enable it
- Show rotation to view, G is default and reset will put it back to g
- Select island enter rotation step value and set rotation

### Lock Groups
- This is great to keep duplicates stacked when packing
- Watch out to not have things locked that shouldn't be, when problems occur look at the groups

## UV Squares (Blender Addon)
Straightens out quad UV strips at the cost of small distortion.
Allows one to fit UVs more tightly together and makes UV unwraps look better. It's often also needed for specific textures(patterns) that should appear correctly on the object.

## Zen UV (Blender Addon)
- Wonder full UV unwrapping tool, I'll cover it at some point. [Here's](https://www.youtube.com/c/SergeyTyapkin/videos) the channel of the creator

# Good UV Unwrap Examples