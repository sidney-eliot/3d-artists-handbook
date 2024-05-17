---
title: "Sharing"
enableToc: true
---

>[!tip] Exporting tips
>
>- Make sure images are **JPG**
>- Make sure videos are **MP4** / **MOV** / **GIF** (GIF being quite big but providing a loop functionality. Some sites however also allow for MP4s to loop)
>- Wipe metadata if you care about that
>- In Photoshop use **Export** instead of **Save as** and export as **sRGB** not as **Embeded Color Profile**

## Showcasing Topology Count in Portfolio
The reason why it's common practice to state the model's topology count in one's portfolio, is to show how optimized it is. The value one states should be easy to grasp and as close as possible to the final count, which as a game artist is the topology count in the game engine. I recommend sticking with triangles (tris) as the unit when showcasing the topology count of different parts of the model and in addition once mentioning the total in engine vertices count of the entire model.

This is because most people are more accustomed to triangle count and will be more easily able to visualize the value. On the other hand, vertex count is also important as it can show that one nicely tried to avoid unnecessary UV and smoothing splits, but this can also be seen when showcasing the texture maps or a checker map on the model.

As mentioned above, it's good to show a breakdown of the topology count, often this includes things like hair, base mesh, clothing / accessories and the weapon. If the character is showcased on some vehicle or in some environment, then the topology count of that (if at all) is mentioned separately and never added up with that up the character.

>[!example]- Here's the full reasoning on why or why not to use a different topology units.
>
>**Face Count**<br>
>The general face count that modeling software often displays, which includes triangles, quads and n-gons is not a good way of measuring topology, as an n-gon could have infinitely many vertices.
>
>**Quad Count**<br>
>Even when we assume that the model is nicely quad based, this also not a good unit, as it means that in a game engine the actual topology count will 2x that value, as 20k quads is roughly 40k triangles. In most situations it's also impossible to actually have a full quads based model, as for good topology there occasionally need to be triangles.
>
>**Triangle Count (Tris)**<br>
>This unit is most commonly seen as it conveys the actual in engine topology count. It's also easy to figure out, as most modeling software will show a calculated triangle count. It has one problem however, game engines don't only require triangles, but also split the mesh topology at every UV and smoothing group split.
>
>**Vertices Count**<br>
>This is the objectively most correct unit, but is also a bit harder to measure, as looking at a model's vertex count in a modeling software will show a quite different value than the vertex count in a game engine. This is because game engines split the mesh wherever UV and smoothing group splits are.
>
>**Example**
>
>|  Object   | Faces | Triangles | Vertices|Vertices (Game Engine)
>| :-------: | ---- | -------- | ------ |---- |
>|   Cube (UV split on every edge)    | 6    | 12       | 8      |24|
>|  Sphere (UV split through center)   |   512   |     960     |     482   |514|
>| Base Mesh |      |          |        ||
>
>As one can also see in this example is that the amount of UV splits matters and can bring up the topology count by quite a considerable amount





