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



Where quads vs tris:

- Films industry: Mostly quads in such a qay that they nicely work with subD even on the low (becAuse the low and high are mostly the same object, just with less SubDivs)

- Games industry: Quads are only needed only parts of the mesh that will deform. On other parts they can even be bad because they add in unesesary topology and make the topology look worse with smaller faces. In generanl the goal is to make all faces sas samish in size as possible. And anyway game engines will convert all quads into tries
Make sure shading is good though, so yeah maybe sometimes quads

Also when the surface isnt perfectly smoth but has curves, then quads will make the shading so much better


- https://polycount.com/discussion/147227/skew-you-buddy-making-sense-of-skewed-normal-map-details