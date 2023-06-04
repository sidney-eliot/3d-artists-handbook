---
title: "Texturing/ Baking Preparations"
enableToc: true
---
# Great Resources

#### Great Polycount Pages
   - [Understanding averaged normals and ray projection](https://polycount.com/discussion/81154/understanding-averaged-normals-and-ray-projection-who-put-waviness-in-my-normal-map)
   - [Making sense of hard edges, uvs, normal maps](https://polycount.com/discussion/107196/youre-making-me-hard-making-sense-of-hard-edges-uvs-normal-maps-and-vertex-counts/p1)
   - [Bit Depths, Banding and Normal Maps](https://polycount.com/discussion/148303/of-bit-depths-banding-and-normal-maps/p1)
   - [Making sense of skewed normal map details](https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details/p1)

#### Other Great Pages
   - [Marmoset Official Baking Page](https://marmoset.co/posts/toolbag-baking-tutorial/)
   - [A Practical Guide On Normal Mapping for Games](https://docs.google.com/document/d/0B02lElvs8BcvYllmQWpXUGxod3M/edit?resourcekey=0-qyVFd0vGiqJl56hPbOnRWw)

# Mesh
- Try to keep the silhouette of the high and low mesh as close to each other as possible
- Try to strategically use SubDiv modifiers, they will allot of the times be the cause for badly baked edges. For pieces that don't play a big role in the silhouette SubDiv is fine
- When possible try to have as many mesh pieces that aren't connected as the high, connected as the low. This will reduce poly count, increase texture space and make weight painting/ animating so much easier
- Delete all polys that aren't seen, sometimes this means adding in a bit of extra cuts to remove more faces. `Some Extra Cuts < More Texture Space`
- Triangulate the high mesh and make sure the low has no Ngons. Every software triangulates differently so Triangulating in the modeling software instead of auto triangulation in Marmoset will avoid issues (If you are using Maya, you may want to lock the mesh normals first, as the mesh normals change upon triangulation). This however comes with the con of not being able to nicely showcase the wireframe. So one should only Triangulate the high. When you notice quads on the low are triangulating badly manually triangulate those quads in the modeling software

### Floaters
- Floaters create AO map height offset (makes AO map look bad around floater)
- Make sure floater has the exact angle of the the face below

# Normals [[Preparations for Baking and Texturing|^]]
Normals or shading is very important and can dramatically alter the bake. Bad normals will result in a multitude of issues, some of them being grid patterns, black spots, bad angles of baked detail.

The ultimate rule of thumb:
```
A smoothing/shading split always needs a UV split but a UV split doesn't always need a smoothing/shading split
```

<details>
<summary>Smoothing/shading Resources </summary>

- https://www.youtube.com/watch?v=ciXTyOOnBZQ&feature=youtu.be

- [Polycount thread](https://polycount.com/discussion/107196/making-sense-of-hard-edges-uvs-normal-maps-and-vertex-counts)

</details>

### All Things That Will Manipulate Normals
- Shading
- Baking cage
- Normal direction (fix by flipping normals Alt + N)
- Skews (real time editing of normals)

### -> SHADING

How the shading is done on the high does not matter as long as the shading looks good. In most cases shade smooth/ no shading is desired however manually manipulating the normals can give better results

#### Hardsurface:

After UV unwrapping, select the seams and mark them as sharp edges. This works for almost all seams however there will be some seams where one should remove the sharp edges again, on flat surfaces for example. Then turn on auto smooth or use hard ops. Problems can often be fixed by setting smooth angle to 100°.

#### Organic:

### -> BAKING CAGE
The cage helps for ray casting to know from where to cast the rays and when to kill the ray. The cage should extend far enough to cover the highest points of the high poly mesh. The cage is almost always a bigger/ solidified version of the low and should never be done by hand if the baker doesn't generate a cage for you then that baker isn't a good baker. Making cages isn't hard but when working with many objects it's a complete waste of time. Marmoset and Substance generate cages, bakers in Blender and Maya currently don't. 

Sometimes however with more complex objects the generated cage won't work, then one can either:
- Hand paint the cage distance
- Import a custom cage
- Split the object into separate parts

# UV Unwrapping

More in the [UV](UV%20Unwrapping.md) page


# Naming Conventions
The name indicates the low and high match however it doesn't indicate what is put on the same atlas, that depends on what was exported together in the same file. Numbers can be added to match more highs with a low. Use batch renamer to rename objects.
- Needs to end with ```..._low``` or can also be ```..._low_...``` (Marmoset)
- Not case sensitive
- 1/01/001 all works as long as it's consistent
- Adding no number is fine if there's only one low/ high

```
Armor_high_001 
Armor_high_002
```
```
Armor_low_001
Armor_low_002 (mostly the low will only have one piece)
```

# Color ID Mapping [^](#table-of-contents)
This is a convenience step which makes masking easier and more precise. Though this step saves time, it sometimes doesn't because of having to fiddle with masking the colors, for more organic models hand panting masks often is faster an gives the same results. 

Make sure the color Id map only has flat colors, so no anti aliasing. If the baker doesn't support that, Substance Painter has a tolerance slider for the id map which is fine as a last resort. 

### Method 1 (Materials)
Assign different materials to parts of the topology, color can be blank for all. Then import into baker/ texturing software, make sure to have export materials on. For this method the Object ID map needs to be baked (Marmoset)

### Method 2 (Vertex Colors)
Select faces in edit mode, then switch to vertex paint mode and toggle mask selected faces. Then press Shift + K to fill with selected color. To keep colors consistent, add them to the vertex color palette.

# Materials [^](#table-of-contents)
- The high object needs a blank material, however bakers like Marmoset will do this for you
- Remove all materials from both low and high before export. Alternatively one can also delete them in the baker or disable material export

# Extra [^](#table-of-contents)
- If shading looks bad at the center mirror point of some objects, add a sharp edge along the center line

# Exporting [^](#table-of-contents)
- Export all high objects that should be on the same atlas do the same for the low in separate file (```Armor_low.obj```  ```Armor_high.obj```)
- Only the Mesh, UVs, Normals are needed (And optionally:  Materials/ Vertex Colors on the low, for the Color ID map)

### Export File Types
|Features|FBX|OBJ|gITF|Alembic
|:-:|:-:|:-:|:-:|:-:
|Normals|yes|yes|yes|yes
|UVs|yes|yes|yes|yes
|Triangulate at export|yes|yes|
|Size|#2||#1(Up to 5 times smaller
|Export time|
|Import time|
|Vertex Color|yes|yes|yes
|Material(limited)|yes|yes|yes
|Texture||||
|-|-|
|Clean Up||Resets rotation, scale and position to 0,0,0. Deletes all vertex information, unused UVs and vertex groups|
|-|-|
|Bones|yes|
|Animation information|yes|no|yes|yes
|Kinematics|
|Keyframes|
|Skinning|
|-|-|
|NURBS|yes
|Lighting|yes
|Camera|yes|no|yes
|Scene hierarchies|yes|no|yes
|Open to use|no|yes
|Web browser compatibility|bad||very good

- https://arsenal.cgtrader.com/blog/guide-to-3d-file-formats
- http://liu.diva-portal.org/smash/get/diva2:462098/FULLTEXT01.pdf