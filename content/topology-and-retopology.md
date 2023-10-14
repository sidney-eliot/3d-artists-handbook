---
title: "Topology/ Retopology"
enableToc: true
---
[[glossary#Topology|Glossary Topology Terms]]

>[!example]- Topology resources (videos, articles)
><div style="text-align: center;">
>
>**Everything you need to know about topology**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6Kt0gW3_kio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
><div style="text-align: left;">
>
>**Articles:**
>- https://topologyguides.com/


## Topology Types

There are different types of topology which depend on use case.

### For Real Time Use (Games Industry):

First, there's the high-res mesh. This mesh has to play nice with SubDiv, bevels and other modifiers that the mesh needs to utilize. It's only used for baking and as a base for the retopology of the low res mesh. Then there's the low res mesh, the low res mesh is the game ready topology and needs to be optimized, and doesn't have to work with modifiers (SubDiv, bevels).


### For Pre-rendered Content (Film Industry):

The high-res mesh is the same as in the games industry, only used of baking and as a retopology base. The low however needs to be modifier/ SubDiv friendly and isn't too restricted on poly optimization. Though baking is used in the film industry, it definitely is used a lot less. The reason for why it has to be SubDiv/ bevel friendly, is because for a movie one can't have sharp edge silhouettes, so for rendering a SubDiv is added.

Some examples of `Professional Film Industry` topology:

>[!example]- Examples (by [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog))
>
>![[Pasted image 20230608152633.jpg|1300]]
>![[Pasted image 20230608152651.jpg|1300]]
>![[Pasted image 20230608152656.jpg|1300]]
>![[Pasted image 20230608152704.jpg|1300]]
>![[Pasted image 20230608152711.jpg|1300]]
>![[Pasted image 20230608152717.jpg|1300]]
>![[Pasted image 20230608152725.jpg|1300]]
>![[Pasted image 20230608152733.jpg|1300]]
>![[Pasted image 20230608152740.jpg|1300]]
>![[Pasted image 20230608152745.jpg|1300]]
>![[Pasted image 20230608152753.jpg|1300]]
>![[Pasted image 20230608152802.jpg|1300]]
>![[Pasted image 20230608152809.jpg|1300]]
>![[Pasted image 20230608152816.jpg|1300]]
>![[Pasted image 20230608152824.jpg|1300]]
>![[Pasted image 20230608152830.jpg|1300]]
>![[Pasted image 20230608152839.jpg|1300]]
>![[Pasted image 20230608152846.jpg|1300]]
>![[Pasted image 20230608152852.jpg|1300]]
>![[Pasted image 20230608152923.jpg|1300]]


>[!example]- Production ready vs concept topology (by [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog))
>
>![[Pasted image 20230608152320.jpg|1300]]
>![[Pasted image 20230608152457.jpg|1300]]
>![[Pasted image 20230608152513.jpg|1300]]
>![[Pasted image 20230608152521.jpg|1300]]
>![[Pasted image 20230608152528.jpg|1300]]
>![[Pasted image 20230608152534.jpg|1300]]
>![[Pasted image 20230608152540.jpg|1300]]
>![[Pasted image 20230608152546.jpg|1300]]


![[Pasted image 20230608024516.jpg|1000]]
_topology by [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog)_


## Poles
### What Are Poles
Poles also called stars consist of two types: `N-Poles (3 edges)` and `E-Poles (5+ edges)`.

A pole is a set of edges that merge into a single vertex. Avoiding poles with six or more edges on curved surfaces is something that you should incorporate into your modeling workflow. The best practice is to try to avoid poles when modeling.

### When Do Poles Happen
- (E) When extruding
- (E) When using triangles and Ngons (it's possible to integrate them without poles)
- (N) At edges (a cube for example has 8 N-Poles)
- (N) Surfaces with greater than 90° angle to connecting

A good way to find poles is to use selection tools or to add a SubDiv which will immediately reveal all poles as super dense topology areas

### Pole Conclusion
Poles can create shading issues when animating and will result in problems when using SubDiv modifiers. Poles also create uneven topology density when subdividing. 3/5 edge poles should appear sparingly. 6 and more should ideally never appear except for on flat surfaces and only when there's no other way. To avoid poles, one simply has to redo the topology at that spot. However, often the pole is needed and can then be relocated.

### Placing/ Relocating Poles
Good spots for poles are hidden areas, like under the armpit, between the legs and so on. Other criteria for good poles is how curved the surface is, the less curved the better for a pole. It's also important to move poles away from heavy deformation areas. Instead of dealing with poles when they're a problem, it's good to anticipate them and plan their locations. It's relatively easy to judge where poles happen by looking at where the mayor topology flows intersect each other. When poles do happen, they can also be relocated:

![[Pasted image 20230608024451.png|850]]
![[Pasted image 20230608024436.png|850]]


## Terminating/ Rerouting Edge Loops
Terminating edge loops is important when doing the final retopologized version of a mesh. There are 2 patterns to achieve this, these patterns can also be used to increase loops instead of decreasing as well as for rerouting loops.

**The first pattern is:**

![[Pasted image 20230608024420.png|750]]

**And the second pattern (diamond reroute):**

![[Pasted image 20230608024406.png|250]]

Edge rerouting is best avoided on curved surfaces and best done on flat surfaces. Edge rerouting is unnecessary for the high and added to that it will often make modifiers like SubDiv look bad (There are however exceptions, if one is using a SubDiv control workflow, rerouting is quite useful).

## The Optimal Triangle/ Quad Shape
- The most optimal triangle shape is a triangle with all of its sides having the same edge length, this is refered to as a equilateral triangle.
- The most optimal quad shape is a quad with all of its sides having the same edge length, this is  refered to as a square quad.

So with that in mind, in theory the cap topology on the right is better (it also has 2 fewer triangles). However, the difference doesn't really matter that much, and the latter topology takes more time to make.

![[Pasted image 20230608024347.png|750]]

For the high cylinder, the most optimal cap would look something like this (Blender grid fill operation):

![[Pasted image 20230608024334.png|400]]

As one can nicely see here, it has the best result with SubDiv and quite a good result with bevels. Method 1 is the best with bevels, but the difference to 3 is negligible:

![[Pasted image 20230608024320.png|750]]


## 🚧Work in Progress🚧
- Avoid holding edges, go with creases and bevels
- Evenly space edge loops and try to keep every quad the same size
- Use extra edge loops in areas of heavy deformation. For example transition areas and muscle joints
- denser topology around movement areas
- Add density in key areas and terminate the edge loop when it leaves that are to reduce polygons but still benefit from dense deformation areas
- Align edge loops with axis animation in mind, the axis of animation is mostly also the direction of the muscles. Though this is good practice, triangulation makes this much less important

Example:

![[Pasted image 20230608024220.png|600]]

- Tris aren't always bad it's more that with a tris always a pole comes which is bad
- Try out I and o for loopcut

## Topology Methods
These methods are great for the low object, but one should be careful of using them for the high because SubDiv often doesn't play well with topology that isn't nicely quaded with 4 edge poles. And anyway this is to reduce topology count and that doesn't really matter for the high.

## Retopology
### ZRemesher Retopo
Use ZRemesher during the creation process or for sculpts that are simply for training, but not for the final retopology pass for characters.

There are 2 methods of getting proper results with ZRemesher. Method 1 is to use the `ZRemesherGuides` tool and method 2 is to use polypaint.

#### ZRemesherGuides Method (Method1):

#### Polypaint Method (Method2):
[Video on this method](https://www.youtube.com/watch?v=9kSaJ1b4QZU)
1. Polypaint the lines you want ZRemesh to follow (It's good to turn off Tablet RGB Intensity)
2. `PolyGroupIt from Paint` with PolyGroupIt Plugin in the ZPlugin tab (default plugin)
3.(optional) Tessimate SubTool for ZRemesh to go faster
4. ZRemesh with `KeepGroups` on

To-Do
- Loops/ Topology Of Characters
- Loops/ Topology Of the Face
- Loops/ Topology Of The Body
- Loops/ Topology Of The Hands
- Loops/ Topology Of The Feet