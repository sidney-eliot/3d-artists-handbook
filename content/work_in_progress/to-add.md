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