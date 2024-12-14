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
  bevel order has a lot of strategy, sometimes it's better to bevel edges in sets after each other instead of all at once

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

Changing Eye colors:
1.  Saturation adjustment layer + mask with big brush dot covering eye + gaussian blur
2. Another saturation adjustment layer + arrow hand to select color mistakes in eye (greens) + chnage hue saturation brightness


- when making the jaw, make sure to add a roof and bottom, as relying on the mouth cavity in the head mesh is not good.


talk about how bones are shaped how they are and why the chain starts with a parent and then moves to children and is universially done in all software


Overwrite widget meshes is a must toggle

show how to add a def bone toggle to rigify UI

Instead of using limit constraints simply lock axes

bug where deleting bones remvoes constraints when reverting or even removes them from mirror copy of bone even if mirror is off


double mirrors on objects will scre with weight apinting mirror

- after adding new bones into the meta.-rig and regenerATing the control rig, make sure to parent with empty groups agAIn

if ypu r creative softwarwe allows for bypassing the 100% weight limit (which most will), then there are some good use cases for it, which I will cover later

to prevent tentacle psine from sclaing bones in the chain give all children bones a copy scale that copies the scale of the root bone ijn the control rig



Removed from rigging page:

You might have noticed a problem with what I just said, the **control-rig** and **game-rig**, both want to be bound to the character mesh. This however isn't possible in most software, and Blender can only have one rig bound to a character at a time. So one can't easily switch back to the **control-rig** if one wants to add an animation or tweak the rig. Depending on the workflow that is being used, there are a couple of ways of fixing it, one being the "Switch Parent Armature" option, that comes with the Game Rig Tool add-on, more on that later.




Custom rig imporvements:
- Add a eye look target for the eye controller
- Extra hand controls (curl controller is not needed)
- extra breats bones for breast jiggle
- have a main toggle to remove stretch features

Constantly keyframing stuff is essential, lost entire day of posing due to this


Keeping bones Especially in pKLaces like hair parented but disconnecvted help posing



Don't rely on clothing to nicely deform with the body, give them some bones with weighting that goes above 100% (with auto normalize off), so it's non destructive and doesn't affect any other deformations


Placing topology cuts between materials will give clean transitions between materials no matter how low resolution the texture is


never add shadows into base color map, except for on hand painted models, instead add it into the AO map


- track to surface bone for clothing acessories
- marmoset toolbag animation moves incorrectly at a specific spot almost in a jjumpy manor, try removing the action from  the nla and re pushing it to the nla



frame dopping is a real issue when animating, when unsure that its going on then take a stopwatch and make sure the duration is correct  by dividing the total number of frames by the frame rate


For anatomy handbook:
teth arent fully white they can be yellowish due to many reasons one being that the toth reveals the blod vesseles that flow though it, teeth also seem a lot whiter on people with darker skin tones.
https://80.lv/articles/001agt-002mrs-organic-art-realistic-subdermal-shaders/
https://www.youtube.com/watch?v=IquQILcBc_4


Watch out when adding normal maps into substance painter layer view, it will automatically give it direct x even if the substance project is set to open gl.



Normal combination calculation: https://www.youtube.com/watch?v=S9sz00l3FqQ


The most minimal blur can fully fix height to normal seams in substance



Substance: Just because one is painting in the UV view, doesnt mean thatz one cant accidentally paint over object that are in 3d space above the currenty painted object, this is is a silly bug one has to be aware of

Substance can not blur across UV islands

uv unwrap and texture character with eyes closed


Important point: seams should never be visible and if they are than its mostly fully the softwares fault and some filter is just not well designed. But thats not to say that one can't fix the softwares shortcomming as an artist.


https://actiondawg.itch.io/3dblur
https://actiondawg.itch.io/

texture with AO off, enable it a couple of times to get a feel

 Never ever export mesh maps, as they are just the the maps you fed to substance painter, and you are better off  using the maps you gave susbat ne in the first place, except for if you want substance to convert them in a image format/ bit depth for you

Substance: L as in 16L signifies bit depth

if normal map is too bright then its color mode is set to sRGB instead of linear

Images like  = roughness, glossiness, metaliness, normal, displace, ambient occlusion. Should use non color aka linear. Photoshop likes to force sRGB which will make these images which are suposed to be in linerar color space look wrong

"Normal maps absolutely have to be in linear space.  
  
Other than that, if your gloss/roughness/metalness/etc maps are in linear or sRGB space or how you/paint them is not particularly important. What is important is that if you're authoring the map and previewing somewhere, you should make sure that the final result has the same gamma/linear space option checked.  
  
If you're painting a gloss/roughness map, what you see in photoshop has very little relevance. I mean you can make some basic assumptions like X value is brighter than Y, but you can't see the effect of these maps in photoshop, so there is little need to be concerned about authoring them in the "correct" space. You shoud be authoring while previewing with some sort of realtime shader to see the end result. Thus, what color space they are authored or previewed in photoshop doesn't matter.  
  
However, for a project wide basis, you should make sure these maps are authored in the same consistent way. If one artist is painting gloss maps in sRGB and another in linear, you'll have problems when people try to create new shaders reusing those assets. So it's best to pick some standards for each map type."


"Quite tempted to write a god damn essay to clarify this stuff, but don't have the time or required effort available right now. We tried using a fully linear texture pipeline at my studio and suffice to say : it isn't good, don't do it. Works fucking awesome for film / offline, works horribly in games. Certain data textures should be stored in linear yes (normalmaps mostly) but anything which requires precision in the darker end of the histogram will get royally fucked by trying to use linear  8-bit textures. Banding everywhere.  
  
By far the most important thing is that you aren't fucking up your texture inputs by doing unnecessary gamma conversions at any point in your pipeline, cos that breaks everything. What most people do is just author everything in sRGB (gamma space) (except normals which are always linear) and then either in the shader when the texture is loaded OR via hardware support, convert those textures from gamma-space to linear-space (because in general all shader calcs need to be done in linear otherwise everything breaks) and then the renderer processes everything in linear, and converts the final frame back to sRGB before it writes it to the screen.  
  
Upon a few minutes reflection, I'd probably say that gloss textures should **absolutely** be authored in linear-space if possible. Because god damn the amount of artifacting I've seen with very glossy materials. Linear would help there. If you're using roughness though, sRGB all the way. it's to do with where in the histogram you need your precision tbh."


If possible save the highest  bit depth version of maps like normal and AO only as 24 bit, excluding the alpha channel



Susbtance Painter: To keep an overview over mask paint layers use following naming conventions, start with color selection, then "fill", "paint", "remvoal fixes" 




Most images cant properly store alpha + emisive on the same pixel. The solution is to either



shadow terminator:
https://computergraphics.stackexchange.com/questions/4986/ray-tracing-shadows-the-shadow-line-artifact
https://polycount.com/discussion/226419/toolbag-4-ray-traced-shadow-artefacts#latest

Just wanted to add my own experience with this issue:  

---

Adding sub-division level in Marmoset: This solution is not practical, as it's a good practice to force triangulate specific quads that aren't very flat and might flip incorrectly, as well as even good retopology models occasionally having tris, which won't yield the best results when subdivided  
  
Disabling shadow casting for specific objects: This will fix the issue but depending on the model, will make the shadow lighter/ less and thus worse (one can compensate with AO maps, although they will mostly only carry smaller shadow details)

Disabling self shadow casting for specific objects: This is probably one of the best fixes and is a better version of disabling shadow casting from the object entirely. Sadly Marmoset doesn't have this feature yet

Editing the low to more match the high by adding topology: This is definitely not a good fix, there are things which the low poly detail should be based on like what one can see in the silhouette but ray tracing shouldn't be a reason to massively increase the poly count

Disabling normal map or adding a blank one: Does nothing in regard to this issue

Enabling and editing render Shadow Cascadel: Does nothing in regard to this issue

HDRI: This could be an issue for some, but I still have these issues with the default HDRI

Checking maps like normal and AO for grid like patterns: This can help but in my case is not an issue (proper checking is done in image editing software like PS by adding adjustment layers like exposure to reveal hidden detail)

GPU/ Other Hardware: For any one thinking it might be their hardware, I'm very sure that this is not the case

Changing light intensity, location/ rotation and other light properties: This works but is obviously not desired as one doesn't want to change lighting just for shadow terminators. However, just reducing the intensity by a bit might fully fix the issue, and your lighting might have been to intense/ physically unrealistic anyway. A better option to having super bright lights might be to add more lights or add a HDRI/ let the HDRI take over more of the lighting

---


Also, if you have issues with this then your AO maps that you baked with Marmoset might have experienced the same issues. As having a low which is very different from the high, surface wise, will introduce topology imitating grid patterns into the AO map. I however made sure that my topology density on the low mes was good enough to achieve clean AO map bakes, but am still having ray traced shadow terminator issues. 


https://gurneyjourney.blogspot.com/2010/02/light-and-form-part-1_15.html



Marmoset has a limited amount of render passes, to add more simply plug the texture into albedo and activate albedo pass

Never render bloom, instead use mask in PS to capture the bloom areas or use a separate render that only shows blooms spots and add the bloom in PS


Light will have problems loghting the eye if a scalera is present and the light is set to cast shadow


Rendering though glass for the entire chartacter face isnt that smnArt as detail is lost, a bitter alternative is to have the glass as a shader effect (like overwatch)



greyboxing


ZBrush's move brush has an interesting interaction with Alt


Hotkey sheets
- [BlenderHotkeyReference](https://download.blender.org/documentation/BlenderHotkeyReference.pdf)
- [Blender Doc](https://docs.blender.org/manual/en/latest/index.html)

ZBrush Projection Master (`G`)
Ctrl + Alt to assing custom hotkey



What do they do?

| Hide masked                  | `Ctrl` + `Shift` + `Alt` + `LMB` |                   |
| :--------------------------- | :------------------------------: | :---------------- |
| Unhide masked                |     `Ctrl` + `Shift` + `LMB`     | On canvas         |




## ZBrush Curve Insert Brush
Curve insert brushes are insert brushes that are made in such a way to seamlessly repeat, so they can work with the curve stroke mode. Example of Curve Insert Brushes:
- Chains
- Ropes
- Scribe Chisel

More Curve Settings under:<br>

`Brush > Modifiers`: Mainly to modify the way the curve behaves while being placed

`Stroke > Curve`: Mainly to modify the way the curve behaves in curve edit mode

`Stroke > Curve Functions`: This is where the real power lies with curve brushes

`Stroke > Curve Modifiers`: Here one can change things like taper

|               Function                |                                    Key                                     |                                                                                                                                                                         Notes                                                                                                                                                                         |
| :-----------------------------------: | :------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|          _**Placing Curve**_          |                                     -                                      |                                                                                                                                                                           -                                                                                                                                                                           |
|            Snap To Surface            |                                LMB + Shift                                 |                                                                                                                                                                                                                                                                                                                                                       |
|      _**Editing Placed Curve**_       |                                     -                                      |                                                                                                                                                                           -                                                                                                                                                                           |
|              Move Curve               |                             LMB Hold on Curve                              | Under `Stroke > Curve` there are some options: To make movement sturdy disable: `Bend Start` / `Bend End`. To make start and end not move at all enable: `Lock Strat` / `Lock End` (For lock to work one or both of the bend settings should be on). `Elastic` / `Liquid` allow for both ends to be moved (Needs one or both of the bend settings on) |
|           Change Polygroup            |                             LMB Click on Curve                             |                                                                                                                                                                                                                                                                                                                                                       |
|             Extend Curve              |                         LMB Close to End of Curve                          |                                                                                                                                          If you hover far enough away from the curve a red line will appear                                                                                                                                           |
| Draw new Curve any point of the Curve |                       LMB Close to Any Part of Curve                       |                                                                                                                                          If you hover far enough away from the curve a red line will appear                                                                                                                                           |
|           Change Curve Size           |                                                                            |                                                                                                                                                                                                                                                                                                                                                       |
|            Smoothen Curve             |                         LMB Hold on Curve + Shift                          |                                                                                                                                                                                                                                                                                                                                                       |
|         Twist / Rotate Curve          |                          LMB Hold on Curve + Ctrl                          |                                                                                                                                                                                                                                                                                                                                                       |
|     Snap To Surface After Placing     |                           Stroke > Curve `Snap`                            |                                                                                                                                                                                                                                                                                                                                                       |
|    Confirm / Leave Curve Edit Mode    | LMB Anywhere on SubTool Away From Curve, Stroke > Curve Functions `Delete` |                                                                                                                                                                                                                                                                                                                                                       |
|      _**Curve Functions Menu**_       |                                     -                                      |                                                                                                                                                                           -                                                                                                                                                                           |
|    Place Curve Around Mesh Border     |                                  `Border`                                  |                                                                                                                                                                                                                                                                                                                                                       |
|     Place Curve Around Polygroups     |                                `Polygroups`                                |                                                                                                                                                                                                                                                                                                                                                       |
|      Place Curve Around Creases       |                              `Creased edges`                               |                                                                                                                                                                                                                                                                                                                                                       |


> [!example]- About curves (videos) 
><div style="text-align: center;"></div>
>
>**Curve Tutorial**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BL46Qnef6N0?si=jEikVUNb10RoLskd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Curve Brush Functionality**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9g8NNoc-v3o?si=_NuPMgDNQocLou5H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




---

Hotkeys for add-ons like Hard Ops and Boxcutter can be found in the [[blender-addons|add-ons]] section.




## Blender Animation hotkeys

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



Maya to add:
- Shelf in Maya and adding items like scripts
- G
- Alt + D
- Alt + F9
- Q + LMB menu
- Alt + Shift + D
- view layer
- book marks (bookmarks vs selection sets?)
- end action quicker by pressing Y instead of Enter
- 3 methods of exiting tools, Enter Y, T and Q, not all of them work with every tool
- one can use attribute editor to change stuff like old bevels
- grayed out fields are locked attributes, they can be unlocked with RMB but mostly they have been locked because the option doesn't work as intended in that Maya version
- mmb with move tool
- green surface means no shading group (look into materials and shading groups https://www.youtube.com/watch?v=gDif305TsoU)
- Enable use all light to get siluette

ZBrush: fit mesh to view is amazing

Blender: hold alt with most tools to navigate



talk about this
https://blender.stackexchange.com/questions/253635/auto-rig-pro-knees-bent-backwards



https://www.artstation.com/blogs/shinsoj/VoZK/optimization-general-theory