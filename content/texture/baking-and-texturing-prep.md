---
title: "🧭 Baking & Texturing Preparations"
enableToc: true
---

## Overview

Preparing the model properly is essential before moving on to baking and texturing. The following things are part of the preparation process and will be covered in full detail:
- [[#Mesh & Topology|Fixing mesh topology]]
- [[#Normals & Shading|Normals & shading]]
- [[#UV Unwrapping|UV unwrapping]]
- [[#Naming Conventions|Naming objects and file]]
- [[#Color ID Mapping|Color id mapping setup (if desired)]] 
- [[#Exporting|Proper export]] 

>[!example] Great Resources
>
>**Great Polycount Pages**
>- [Understanding averaged normals and ray projection](https://polycount.com/discussion/81154/understanding-averaged-normals-and-ray-projection-who-put-waviness-in-my-normal-map)
>- [Making sense of hard edges, UVs, normal maps](https://polycount.com/discussion/107196/youre-making-me-hard-making-sense-of-hard-edges-uvs-normal-maps-and-vertex-counts/p1)
>- [Bit Depths, Banding and Normal Maps](https://polycount.com/discussion/148303/of-bit-depths-banding-and-normal-maps/p1)
>- [Making sense of skewed normal map details](https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details/p1)
>
>**Other Great Pages**
>- [Marmoset Official Baking Page](https://marmoset.co/posts/toolbag-baking-tutorial/)
>- [A Practical Guide On Normal Mapping for Games](https://docs.google.com/document/d/0B02lElvs8BcvYllmQWpXUGxod3M/edit?resourcekey=0-qyVFd0vGiqJl56hPbOnRWw)

## Mesh & Topology
Make sure to follow the concepts mentioned on the [[topology-and-retopology|Topology and Retopology]] page.

>[!tip] Some baking specific topology advice 
>- Try to keep the silhouette of the high and low mesh as close to each other as possible
>- Try to strategically use SubDiv modifiers. SubDiv modifiers will often be the cause for **badly baked edges**. For parts that don't play a big role in the silhouette SubDiv is fine
>- When possible, try to have as many mesh pieces that aren't connected as the high, connected as the low. This will reduce poly count, increase texture space and make weight painting as well as animating so much easier
>- Delete all polys that aren't seen, sometimes this means adding in a bit of extra edge flow/ cuts to remove more faces. This makes the mesh use less texture space, meaning the texel density of all the UVs that are actually seen can be increased. A good trade, totally worth the slight increase in polygons that the cuts may create, as texture space is more valuable than poly count.
>- Triangulate the high mesh and make sure the low has no Ngons. Every software triangulates differently, so Triangulating in the modeling software instead of auto triangulation in Marmoset will avoid issues. This however comes with the con of not being able to nicely showcase the wireframe. So one should only Triangulate the high. When you notice quads on the low are triangulating badly, manually triangulate those quads in the modeling software. _(If you're using Maya, you may want to lock the mesh normals first, as the mesh normals change upon triangulation.)_

## Normals & Shading
Normals & Shading is very important and will dramatically alter the bake if handled incorectly. For starters, bakers like Marmoset Toolbag use the normal direction as the baking angle, like shown in this video:

![[image-2024-01-12-17-18-50.gif]]
_video by [Marmoset Toolbag](https://marmoset.co/posts/toolbag-baking-tutorial)_

This will result in normals pointing in the wrong direction like this:
![[image-2024-01-12-17-29-22.jpg]]
_image by [EarthQuake](https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details) (1 bad normals, 2 good normals)_

Marmoset Toolbag has a way of somewhat fixing this, by painting on a skew map one can re-orient the normal/ skew direction to be at a 90° angle to the face. This solution is however tedious and won't work well on curved surfaces.

More on skewd normals in this polycount [article](https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details). _(I don't fully agree however, that adding edge loops to control shading is the best solution for the low mesh in the game industry.)_

Other issue that bad normals & shading will cause are square grid patterns in the textures (in the shape of the topology from the low) as well as black spots.

>[!tip] The ultimate rule of thumb
>
>A smoothing/ shading split always needs a UV split, but a UV split doesn't always need a smoothing/ shading split.


>[!example]- Smoothing/ Shading (articles, videos)
>
>- [Making sense of hard edges, uvs, normal maps and vertex counts](https://polycount.com/discussion/107196/making-sense-of-hard-edges-uvs-normal-maps-and-vertex-counts) (polycount)
>  
> <div style="text-align: center;">
>  
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ciXTyOOnBZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
></div>

Following things will manipulate normals:
- Shading
- Baking cage
- Normal direction 
- Skews

>[!Info] Shading
>
>How the shading is done on the high doesn't matter as long as the shading looks good. Most of the time shade smooth or no shading will give good results for hard surface objects, if the result has issues then the normals at those spots need to be manually manipulated until the result is as desired.
>
>**Hard Surface**
>After UV unwrapping, select the seams and mark them as sharp edges. This works for almost all seams. There will however be some seams where the sharp edges should be removed again, on flat surfaces for example. Then turn on auto smooth or use [Hard Ops](https://hardops-manual.readthedocs.io/en/latest/). Problems can often be fixed by setting smooth angle to 100°. If the shading looks bad at the center mirror point of some objects, add a sharp edge along the center line.
>
>**Organic**
>To-Do

>[!Info] Baking cage
>The cage helps for ray casting to know from where to cast the rays and when to kill the ray. The cage should extend far enough to cover the highest points of the high poly mesh. The cage is almost always a bigger and solidified version of the low and should never be done by hand, if the baker doesn't generate a cage for you then that baker isn't a good baker. Making cages isn't hard, but when working with many objects it's a complete waste of time. Marmoset and Substance generate cages, bakers in Blender and Maya currently don't. 
>
>Sometimes however with more complex objects the generated cage won't work, then one can either:
>- Hand paint the cage distance
>- Import a custom cage
>- Split the object into separate parts

>[!info] Normal direction
>
>Normals should always be pointing outwards. 
>
>In Blender, normals can be manipulated with the Normals menu (Alt + N). Recalculate Outside (Shift + N) almost always works

>[!info] Skews
>
>To-Do
>(real time editing of normals)

## UV Unwrapping

Look at the [[uv-unwrapping|UV Unwrapping]] page.


## Naming Conventions
The name indicates the low and high match, however it doesn't indicate what is put on the same atlas, that depends on what was exported together in the same file. Numbers can be added to match more highs with a low. Use batch renamer to rename objects.
- Needs to end with "**..._low**" or can also be "**..._low_...**" (Marmoset)
- Not case-sensitive
- 1/01/001 all works as long as it's consistent
- Adding no number is fine if there's only one low and high

>[!example] For example
>_("p" is short for part)_
>
>Lows:
>Armor_p014_low (mostly the low will only have one piece)
>Armor_p015_low
>
>Highs:
>Armor_p014_high_001
>Armor_p014_high_002
>Armor_p014_high_003
>Armor_pt015_high

## Color ID Mapping
This is a convenience step which makes masking easier and more precise. T

Color ID mapping is a convenience step. The color ID maps save time down the line and can get more precise texturing results. Note however that they can also have the opposite effect because of having to fiddle with masking the colors and the initial setup needed to be able to render them. For more organic models, hand panting masks while texturing is often faster without ad drop in quality. So in general, doing this step is up to personal preference.

When baking the color ID maps, make sure the colors are flat, so no [[glossary#Anti-Aliasing|anti-aliasing]]. If the baker doesn't support that, Substance Painter has a tolerance slider for the ID map, which is fine as a last resort. The colors should also be as unique as possible from each other.

>[!info] Baking color ID maps
>
>**Method 1 (Materials):**
>Assign different materials to parts of the topology, color can be blank for all. Then import into baker/ texturing software, make sure to have export materials on. For this method, the Object ID map needs to be baked
>
>**Method 2 (Vertex Colors):**
>Select faces in edit mode, then switch to vertex paint mode and toggle mask selected faces. Then press Shift + K to fill with selected color. To keep colors consistent, add them to the vertex color palette.
>
>_(I've only done this in Marmoset Toolbag, but it should work quite similarly in other baking software like Substance Painter)_

## Materials
- The high object needs a blank material, bakers like Marmoset Toolbag will however do this for you
- Remove all materials from both low and high before export. Alternatively, one can also delete them in the baker or disable material export

## Floaters
[[glossary#Floaters|Floaters]] can make the AO maps look bad around the borders of floaters by creating height offsets and messing up light ray paths from the baker. This can be solved by placing the floater not in the air above the mesh, but in such a way that it's a part of the mesh. It's also important to make sure that floaters have the exact angle of the surface below them.

## Exporting
- Export all high objects that should be on the same atlas in one fbx file, do the same for the low in a separate file (`Armor_low.obj` `Armor_high.obj`)
- Only the **mesh**, **UVs** and **normals** are needed (And optionally: Materials/ Vertex colors on the low, for the Color ID map)

**Export File Types:**

>[!example] File format comparisons (articles)
>
>- https://arsenal.cgtrader.com/blog/guide-to-3d-file-formats
>- http://liu.diva-portal.org/smash/get/diva2:462098/FULLTEXT01.pdf

|Features|FBX|OBJ|gITF|Alembic
|:-:|:-:|:-:|:-:|:-:
|Normals|✅|✅|✅|✅
|UVs|✅|✅|✅|✅
|Triangulate at export|✅|✅|
|Size|#2||#1(Up to 5 times smaller (smaller than what???))
|Export time|
|Import time|
|Vertex Color|✅|✅|✅
|Material(limited)|✅|✅|✅
|Texture||||
|~|~|~|~|~
|Bones|✅|
|Animation information|✅|❌|✅|✅
|Kinematics|
|Keyframes|
|Skinning|
|~|~|~|~|~
|Lighting|✅
|Camera|✅|❌|✅
|Scene hierarchies|✅|❌|✅
|NURBS|✅
|Clean Up||Resets rotation, scale and position to 0,0,0. Deletes all vertex information, unused UVs and vertex groups|
|~|~|~|~|~
|Web browser compatibility|bad||very good
|Open to use/ Not a blackbox|❌|✅