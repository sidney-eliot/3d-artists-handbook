- goZ workflow visible
- baking trick where one takes screenshots and oputs them into pure ref side by side
- first mark sharp, then Alt + N then Face Area then Custom Normal (order improtna t for so0me reason)
- auto save intervals for blender and different methods
- mesh machine essentials: unfuse + unchamfer (reverse maybe) or unbevel (reverse maybe)
- corner bevels don't get a triangle with even amount of segments
- When beveling a convex 2 edge area, setting the bevel option miter inner to Arc, will work wonders (https://www.youtube.com/watch?v=BU3fR0ZyPtE)
- baking objects both high and low need no materials because marmoset crerates them

- https://blendermarket.com/creators/pigscales?page=1


- math behind shading: one might think this isn't that important, but I would argue that it's essential for getting perfect shading. For example turinig on the lines (light blue pink, mainly pink) shows how the shading will be, things like average look at the sizes ofg face, so increasing the size of a face on a big plane can completely remove a shading issue
 https://www.youtube.com/watch?v=sqGFhiP-2mc


- ugly seams ad edges in bakes where sharp edges are, are a result of no uv seam, however adding a uv seam will significantly reduce the aperance of these  seams, the will however always be visible when getting close (happens with marmoset baker And substance paibter baker, maxybe i  the future baker wont have this issue https://helpx.adobe.com/substance-3d-bake/common-issues/seams-are-visible-after-baking-a-normal-texture.html and https://helpx.adobe.com/substance-3d-bake/common-issues/aliasing-on-uv-seams.html). The way to reduce this faint line even more is by either increasin sample, format, Res or filer extension, ToDo: investigate ToDo: get example images

- avoid these bevels at all costs (blender bevel outer miter = arc):
this shape can also happen from subdiv, prevented wit rerouting edges (normally by mergeing the 2 closest verts to the spot)
  ![[image-2023-12-30-23-24-23.png]]
  bevel order has a lot of strategy, sometimes it's better to bevel edges in sets after eachother instead of all at once

- shade flat can help fine shading and topology issues, especial those hidden behind modifiers like subD and bevel

- https://help.maxon.net/r3d/cinema/en-us/Content/html/Standard_Material.html
- https://marmoset.co/posts/getting-to-know-toolbag-3/



Where quads vs. tris:

- Films industry: Mostly quads in such a qay that they nicely work with subD even on the low (becAuse the low and high are mostly the same object, just with less SubDivs)

- Games industry: Quads are only needed only parts of the mesh that will deform. On other parts they can even be bad because they add in unesesary topology and make the topology look worse with smaller faces. In generanl the goal is to make all faces sas samish in size as possible. And anyway game engines will convert all quads into tries
Make sure shading is good though, so yeah maybe sometimes quads

Also when the surface isnt perfectly smoth but has curves, then quads will make the shading so much better


- https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details



Batch ops use case:
Apply UV checker material to all objects for the UV unwrapping stage and then quickly remove it again



- GREAT example: https://www.artstation.com/xiaoyan24/albums/2123689 To achieve correct poly desnity, zoom the camera out to the distance renders should see it from and then from that distance adjust the poly detail to no jagged edges are overly visible

- tips on avoiding non planar faces

- never use Alt + H

terms:
uv shell
triangle stripping

https://polycount.com/discussion/105685/smoothing-group-split

"That is wrong. You can have split UVs and keep objects smoothed but not the other way around (you can't have a smoothing split without a UV split). Also, those shells are a good candidate for mirroring. Just make sure the triangle stripping is the same across both sides."


Here are some basic rules/facts:  
  
1. You need uv splits wherever you use hard edges/smoothing groups, not doing so will cause artifacts  
  
2. you *can* use hard edges/smoothing groups anywhere you have uv splits, because it will not increase your actual vert usage(if you have a uv seam, the verts are split regardless).  
  
3. Hard edges/smoothing groups will not cause any sort of negative artifacts if you've followed [#1](https://polycount.com/search?Search=%231&Mode=like), however you must bake with an averaged cage. Max and Maya do this by default. Xnormal's basic ray trace setting does NOT(you have to set up a cage in xnormal or export a cage for Max).  
  
So, if you understand 1-3, really you can just use a simple script that sets all of your uv border edges to hard, because it doesn't have any real drawbacks. The only real exception is in situations where you're doing complex partial mirroring.

"The only other qualifier I would add is that if you have a contiguous smooth surface mapped onto multiple UV shells it should be smoothed together. That is kind of an obvious guideline but I have seen people make that mistake."

"Even then its not really necessary, I mean it might look better in the viewport without textures applied but the baker will account for it. The baker has to account for uv seams like that anyway(where uv direction changes and thus normal color) so having the edge soft or hard shouldn't make any practical difference."

ToDo: how do smoothing groups actually work in blender and isn't hard and soft edges just a fake illusion that doesn't really matter when one gets to the bakig stage

https://80.lv/articles/creating-a-sci-fi-weapon-in-zbrush-3ds-max-substance-3d-painter/

https://polycount.com/discussion/224989/why-is-it-recommended-to-make-all-uv-seams-hard

"It really just depends on where the angle is and how it looks in engine. I've switched to making my smoothing groups first (soft/hard edges) and then uving from that."


"**3d space** is represented along 3 axes-- _X, Y, Z_. **UV Space** is a 2d representation of objects in 3d space, and is represented along two axes, _U_ and _V_.

When you UV map a 3d object, each of its vertices is represented by a point in UV space. That point is referred to as a UV and is represented by the little green dots that you are seeing.

The yellow dots you are seeing (which I believe is what you mean by brown?) are vertices. I'll touch on this a little more later.

Each UV dot in your UV editor directly represents a vertex on your 3d model. A UV functionally acts as a coordinate in UV space to which your texture is mapped. You can move a UV in UV space, and it will move what part of the texture is visible on that specific vertex of the model, without changing where the vertex is in 3d space.

**A UV Shell**, on the other hand, is just a collection of UVs grouped into what we call a "shell". Since each UV represents a vertex on your object, and faces are made up of vertices, a UV shell is basically a representation of a group of specific faces in your mesh.

When you "cut" a UV shell along its edges, you are splitting this representation into parts. This actually _adds_ UVs to the model so that each vertex on your mesh might be represented by MORE than one UV in UV space. So, UV shells can share vertices _without_ sharing UVs.

Back to the yellow dots-- Manipulating _vertices_ in the UV editor will affect all of the UVs that are representing that vertex, which is why when you select a vertex that is on the edge of a UV shell, it selects UVs along the edges of both shells.

I hope this helps to break down the difference between the two and explain why you might want to manipulate UVs vs. shells in UV space!

I think a good example of what you are asking is the "straighten" tool, which gives you the options of "_straighten UVs_" or "_straighten shell_". The difference between these two is minor, but basically it changes the point of reference that maya uses to straighten the UVs-- "_straighten UVs_" straightens the selected UVs in UV space (so that they form straight lines), whereas "_straighten shell_" straightens the entire shell relative to the selected UVs.

I'm not actually sure where you are finding "UV Shell > Layout" because afaik the only type of layout there is is "Layout UV" (though I am in 2018, maybe you are in a newer version?) so if this doesn't answer your question, feel free to post more details / questions I can see if I can help further."



"Yes, setting your smoothing groups by UV shells is the same as splitting your UV shells by smoothing groups. The order in which you do it is up to you, if you feel confident you can set your smoothing groups to where the uv shells should be, then go for it.  
  
You want to split your UVs where seams would fall naturally on the high poly, in seams / crevices. This will hide the seam and make texture creation easier. After that you should do a few quick test bakes with an auto-layed out UV set and take the object and normal map into your engine of choice.  
  
If there are shading errors in the engine, then you have 2 choices.  
  
1. You can add more geo to the area with the bad shading to ease the smoothing errors and keep your original smoothing groups.  
  
2. Or you can split the uv shells, making more of them, in that area and re run the Uv Shells to Smoothing groups script."

https://polycount.com/discussion/226585/black-edges-artifacts-from-normal-map-baking-in-marmoset

offline rendering vs real-time

Use floaters or normal detail in the texturing process all the time to save time and prevent the high from needing more detail for all those crevices

Baking starts getting unstable at around 30-40mil tris (600-800mb file)


Ctrl + C to add a selected modifier from one object to all other selectd objects


"That's not quite how the renderering pipelines of game engine evolve or get used. It doesn't matter *one bit* if this or that feature gets added (for instance, a renderer having some way to simulate the occlusion of light in crevices) - this is just and always will be a tool in a toolset.  
  
Even using an engine with the best-of-the-best implementation of realtime AO ever doesn't mean that there can't be benefits in having it also as a texture pass, or even as some of it baked in the diffuse texture. Especially since dirt gathers in cracks ... _exactly_ like an AO pass.  
  
Just because these 3 things (realtime AO, AO stored as a texture pass, and AO hard-painted into the color pass) are using the same acronym "AO", doesn't mean that one replaces the other."

When ignore groups is on then one hAs to add an extra face row at edges that disappear with a bevel


!!! Make sure to turn off live unwrap as soon as you start using tools like uq squares



when uv squArs doesnt work try frist sclaing up the island

Before unwrapping, make sure to pres Alt + H to unhide all hidden low mesh





when doing retopology, make sure to look at the baked low with ray tracing on, as often artifacts will be visible only with ray cast shadows and will remain hidden with basic viewport rendering


https://polycount.com/discussion/56014/how-the-f-do-i-model-this-reply-for-help-with-specific-shapes-post-attempt-before-asking/p181


Fixes for low not aligning for high for bake: Increase  bevels width on high and set the low more into the high

Thickness map will be totally unusable if hidden faces on the high are deleted for optimization (to-do: investigate, if on clothing deleting the inner side face is ok, but the transition at edges is the problem, making the ryan reos collar method a viable solution)



Keeping topology cuts where material changes happen is quite important, try not to switch materials mid face


- In Unreal Engine 4, we use a metallic and roughness workflow. The texture maps specific to this workflow are base color, metallic, and roughness. In UE4, we do not actually have control of the specular values of metallic materials, and for most dielectric materials (non-metallic) a specular value of 0.5 will work. These specular values are hardcoded into the shader for metallic objects and cannot be changed. This minimizes inaccuracies caused by the user, but can also cause frustrations if you want full control over the shader for specific cases.

https://uv-game.com/intro



- id map should have 0 aliasing, everyy single pixle should be a solid color, to prevent sharp edges edge edges along that area, aliasing will not pix jaged edges as softWare like substance won't nicely add masks that progessively get darker, id selections either tur

-cant edit AO/ normal map
https://www.youtube.com/watch?v=zMYfJ5N67Qg
https://www.youtube.com/watch?v=hgq3aV3EOIE


- make sure id maps are good, hand fixing them in pAInter is not fun

- things like hair can share a texture set with other ojects, but have to have their own material. so substance and marmoset let them have a custom antistropic refelction

- to not acidentally paint on areas one doesnt want to, set alignment to uv projection mode

-look into: 32bit normal maps seem to be brighter, even after conversion, may also be related to baking as psd

- leave a bigger gap between the hair uv shells so painting flow maps is easier
- plug flowe into color


painting flow map:
- get an image of the uv shells (in Blender UV View > UV > Export UV Layout)
- Edit Brush Settings
- Engine: Brush Normal

Brush Tip > Anti-alias = ON
Brush Tip > Ratio = 0,50
Brush Tip > Angle = 270°
Opacity > Enable Pen Settings = OFF (depends on what result one wants)
Flow > Enable Pen Settings = OFF (depends on what result one wants)
Size = OFF
Tangent Tilt > Tilt Options = Direction
Rotation = ON
Rotation > Pressure = OFF
Rotation > Drawing Angle = ON

Then give it a name with the pen icon and click "Save New Brush Preset".

With the brush selected got to **Tool Options** and switch **Brush Smoothing** to Stabilizer. Adjust the delay to something that feels good, I like 120 px.

Finally I recommend chnaging some hotkeys

Settings > Configure Krita > Keyboard Shortcuts

Menu > Select > Deselect > Remap to `Ctrl` + `D`
Tools > Tool Shortcuts > Freehand Selection Tool > Remap to `L`

|    Navigation    | Hotkey                     | Note                                                                                                                                           |
| :--------------: | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|       Move       | Hold `Space`               |                                                                                                                                                |
|       Zoom       | `Ctrl` + `MMB` or `Scroll` |                                                                                                                                                |
|  Rotate Canvas   | `Shift` + `MMB`            |                                                                                                                                                |
|    Brush Tool    | `B`                        |                                                                                                                                                |
|    Lasso Tool    | `L`                        | Under **Tool Options** switch the **Action** to **Replace**. This allows for adding to the selection with `Shift` and subtracting with `Ctrl`. |
| Remove Selection | `Ctrl` + `D`               |                                                                                                                                                |


Propper UV unwrapping helps


Eventhough this method yield quite a good reSult in a reasonable time (took me about 3h for 48 shells), I do see a lot of omprovement is the creation process workflow of flow maps 






<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NBEiTGHLkEo?si=XNhoDL3j0jqHD5c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/193e1uzzGAk?si=SYO4AHslRgLwI7nf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mtbCtwgI440?si=uZdMC-Qk2VpjjrFK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NiSxVZER_ls?si=lyFMrj207Uafl3YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GZgPpLbjwG4?si=Q96Epfy9HSbpfaHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

https://dzungphungdinh.com/projects/De93G?album_id=694340



- in substance painter always name custom user channels with u0, u1 and if one maps has u0 as cavity then use u1 next
- bake hair in such a way to only strand cast shadows onto other strands and nothing like the head makes the hair AO mudy


- to fix normal map errors, one can either fix the map itself, or turn down the roughness, as then there won't be highlights the emphasise the artifacts in the normal map (the artifacts won't be fully hidden though)
- watch out for black dark tips in hair, they often are visible even if all texture maps are disabled, to fix them one either fixes the mesh shading or allows for the normal map to fix them

- make the uv seam in the face go down the center starting at the forehead, so the face is as flat as possible, the ears should be on the vertical level between eyes and nose and not tilted



- give the skin its own material, it will make texturing much more enjoyable


- put more though into the head and body unwrap, maybe let the ear have it's own shell

- always bake every possible map the baker has, the only ones that take any significant time are anyway are the  AO and thickness maps

- whenever working with blur, alwAys use a hard brush instead of a soft brush, this will make the rtesult more uniform, when erase was used, or use a soft one intentioanlly to get a more organic and varried result

- as substance always resets brushes on switch, try to make as little changes to the brushes as possible and modify the effect via effect layers


- a disadvantage of lower topology, is that texturing can look quite different when looked at from different angles


- try to keep all roughness adjustments together in one group in which only rougfness is adjusted. However for the makeup around the eyes, it can make sense, to let those makeup line affect roughness as well, so one doesnt have to retrace the makeup to correct the roughness


Edge control methods:
ZBrush makes some methods quite a lot more aluring, for example the zremesher, but that can cause massive increase in polies when subdividing. Compared to using more common method like placing edge loop for control. Becaue with that only the areas that need the detail get denser. I'm noticing that simple object with like 40k polygons quickly go to 4mil just because I added one small detail, and the entire mesh needes that extra density for that one detail. DynaMesh / sculptris pro one would think would be the soklution, but one shoudl stay away from terrible tool like those in the final stages of the model (anything that isnt blockout)


#### Links

- https://www.youtube.com/watch?v=eL7r1Yav7qs (theory of sketching clothing before committing)
- https://www.youtube.com/watch?v=vaGvsk51vUI&list=RDCMUCH0FwuoIVHtYsuci4QMEbAA&index=2 (form ZBrush base to marvelous)
- https://www.youtube.com/watch?v=imp3j7l6V1U&list=RDCMUCH0FwuoIVHtYsuci4QMEbAA&index=3 (theory of correct cloth folds)
- https://www.youtube.com/watch?v=cIYHaPO7IRw&list=RDCMUCH0FwuoIVHtYsuci4QMEbAA&index=4 (cloth sculpting in zrbsuh)
- https://www.youtube.com/watch?v=lopXcsHzVHU&t=1s (The Amazing Sculpting Brush NOBODY Knows About)