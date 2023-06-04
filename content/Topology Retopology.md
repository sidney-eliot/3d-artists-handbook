---
title: "Topology and Retopology"
enableToc: false
---

# Table of Contents

- [Topology Types](#Topology-Types-)
- [Poles](#Poles-)
- [Terminating/ Rerouting Edge Loops](#Terminating-Rerouting-Edge-Loops-)
- [The Optimal Triangle/ Quad Shape](#The-Optimal-Triangle-Quad-Shape-)


[**Glossary Topology Terms**](https://github.com/Epicrex/3DArtistsHandbook/wiki/Technical-Terms#topology)

# Topology Types [^](#table-of-contents)

There are different types of topology which depend on use case. 

### For Real Time Use (Games Industry):

First there's the high res mesh. This mesh has to play nice with SubDiv, bevels and other modifiers that the mesh needs to utilize. It's only used for baking and as a base for the retopology of the low res mesh. Then there's the low res mesh, the low res mesh is the game ready topology and needs to be optimized, and doesn't have to work with modifiers (SubDiv, bevels).


### For Pre-rendered Content (Films Industry):

The high res mesh is the same as in the games industry, only used of baking and as a retopology base. The low however needs to be modifier/ SubDiv friendly and isn't to restricted on poly optimization. Though baking is used in the film industry it definitely is used allot less. The reason for why it has to be SubDiv/ bevel friendly, is because for a movie one can't have sharp edge silhouettes, so for rendering a SubDiv is added.

Some examples of `Professional Films Industry` topology:

<details>
<summary>Further Professional Films Industry Topology</summary>

All by the artist [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog)

<img src="https://user-images.githubusercontent.com/85735034/183865798-4cbffcef-0abd-417a-bc72-e9da772c203d.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865813-d7bec002-2c5e-4c90-933e-8a0bfa22b9dd.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865816-53236471-6fd2-4bcc-a89a-ed68dc53515e.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865833-e5cf82e6-50e9-448c-bd69-08357bd2cde0.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865846-40a52c9e-544c-4364-8603-9f42d22a5216.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865864-db8a701b-b35d-4582-a6a5-7252fafd1ff3.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865878-cf45c8a5-7852-467a-b8bc-52486b30cb3d.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865893-7c2240b2-c9e5-4021-a013-4e9c9af4b958.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865905-5bd7c535-a41e-4fec-bbeb-316c28925b9c.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865921-b2510324-62f1-4e38-b4b5-f9b6ab637e45.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183865937-f4be0f46-7624-411b-a216-dd369c324df0.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866011-bff3fea7-2b2e-4584-a884-6223e65d9cae.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866032-aa89b558-d659-4db5-a1dd-d0ea9944f05e.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866062-d41c6a2a-fe9f-4ff1-ba91-e2253d39bc5d.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866086-ea3ea1dc-da4e-40f1-8d9c-de6a9b961fc9.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866098-4df617b6-11d7-4e6f-82c6-eb0d6f1a4877.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866116-5c22d064-ee69-4b5d-b6a9-f91d24f6ac06.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866133-23efad5a-69a4-440f-abf3-b022b16de5f1.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866147-16c20033-e9be-435e-b13d-e0205114bd61.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183866169-fbdf83ec-40fb-411a-b88f-6424607c9a4b.jpg" width="1300">
</details>


<details>
<summary>Professional Films Industry Topology: Production Ready vs Concept</summary>

All by the artist [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog)

<img src="https://user-images.githubusercontent.com/85735034/183863228-00f96f1f-a7bc-4f69-b67a-c5069dbb97ce.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863259-802e2e82-aae7-46d9-9fe0-b41123809f55.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863280-d35cca7a-62ef-42f5-bd42-8a678f88d700.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863300-358d1336-5305-4c1b-a960-aea30071a69c.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863316-f126eb35-643f-4de6-8c83-3ec0ec4972b3.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863335-9758717b-de08-4e21-a741-f067334684ca.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863346-4c35761d-cc43-4202-9ba1-159b90731471.jpg" width="1300">
<img src="https://user-images.githubusercontent.com/85735034/183863243-d69c3435-4e44-4813-84e8-e1b528f29bbe.jpg" width="1300">

</details>

<img src="https://user-images.githubusercontent.com/85735034/183862158-235635a9-9d16-4314-bf06-a023f1e32f49.jpg" width="1000">

topology by [Andrew Hodgson](https://www.artstation.com/andrewhodgson/blog)


# Poles [^](#table-of-contents)
### What Are Poles
Poles also called stars consist of two types: `N-Poles (3 edges)` and `E-Poles (5+ edges)`.

A pole is a set of edges that merge into a single vertex. Avoiding poles with six or more edges on a curved surfaces is something that you should incorporate into your modeling workflow. The best practice is to try to avoid poles when modeling.

### When Do Poles Happen
- (E) When extruding
- (E) When using triangles and Ngons (it's possible to integrate them without poles)
- (N) At edges (a cube for example has 8 N-Poles)
- (N) Surfaces with greater than 90° angle to connecting

A good way to find poles is to use selection tools or to add a SubDiv which will immediately reveal all poles as super dense topology areas

### Pole Conclusion
Poles can create shading issues when animating and and will result in problems when using SubDiv modifiers. Poles also create uneven topology density when subdividing. 3/5 edge poles should appear sparingly. 6 and more should ideally never appear except for on flat surfaces and only when there's no other way. To avoid poles one simply has to redo the topology at that spot. However often the pole is needed and can then be relocated.

### Placing/ Relocating Poles
Good spots for poles are hidden areas, like under the armpit, between the legs and so on. Other criteria for good poles is how curved the surface is the less curved the better for a pole. It's also important to move poles away from heavy deformation areas. Instead of dealing with poles when they're a problem, it's good to anticipate them and plan their locations. It's relatively easy to judge where poles happen by looking at where the mayor topology flows intersect each other. When poles do happen they can also be relocated:
<details>
<summary>Example</summary>

<img src="https://user-images.githubusercontent.com/85735034/166419675-e6751c52-1950-4a9b-956a-66db06637f5c.png" width="850">
<img src="https://user-images.githubusercontent.com/85735034/166419783-4ef97324-2714-49db-a648-86bf5fc413cc.png" width="850">

</details>


# Terminating/ Rerouting Edge Loops [^](#table-of-contents)
Terminating edge loops is important when doing the final retopologized version of a mesh. There are 2 patterns to achieve this, these patterns can also be used to increase loops instead of decreasing as well as for rerouting loops.

The first pattern is:

<img src="https://user-images.githubusercontent.com/85735034/180173603-e1fbbf87-f9f2-42e6-91f6-8e997947b2a2.png" width="750">

And the second pattern (diamond reroute):

<img src="https://user-images.githubusercontent.com/85735034/180172441-238d063b-2052-4a07-bbf1-517242a64fe5.png" width="250">

Edge rerouting is best avoided on curved surfaces and best done on flat surfaces. Edge rerouting is unnecessary for the high and added to that it will often make modifiers like SubDiv look bad (There are however exceptions, if one is using a SubDiv control workflow, rerouting is quite useful).

# The Optimal Triangle/ Quad Shape [^](#table-of-contents)
- The most optimal triangle shape is a triangle with all of it's sides having the same edge length. (Also called equilateral triangle) 
- The most optimal quad shape is a quad with all of it's sides having the same edge length. (Also called square quad)

So with that in mind, in theory the cap topology on the right is better (it also has 2 less triangles). However the difference doesn't really matter that much and the latter topology takes more time to make.


<img src="https://user-images.githubusercontent.com/85735034/179994320-92914b6a-d4cf-4416-8c36-30dbb8b8a8af.png" width="750">

For the high cylinder however the most optimal cap would look something like this (Blender grid fill operation):

<img src="https://user-images.githubusercontent.com/85735034/179998100-4f5e18f2-2ac4-4ae0-bf1e-b5d101e57ca7.png" width="400">

As one can nicely see here, it has the best result with SubDiv and bevels:

<img src="https://user-images.githubusercontent.com/85735034/179999171-74fcaa12-1515-42d0-8048-8ded40ff5abe.png" width="750">




#  ⚠ Unfinished, Sort in
- Avoid holding edges, go with creases and bevels
- Evenly space edge loops and try to keep every quad the same size
- Use extra edge loops in areas of heavy deformation. For example transition areas and muscle joints
- denser topology around movement areas
- Add density in key areas and terminate the edge loop when it leaves that are to reduce polygons but still benefit from dense deformation areas
- Align edge loops with axis animation in mind, the axis of animation is mostly also the direction of the muscles. Though this is good practice triangulation makes this much less important

<details>
<summary>Example</summary>

![grafik](https://user-images.githubusercontent.com/85735034/166423608-1e278231-0660-448a-a556-f98003a6f6eb.png)
</details>

- Tris aren't always bad it's more that with a tris always a pole comes which is bad
- try out i and o for loopcut

# Topology Methods
These methods are great for the low object but one should be careful of using them for the high because SubDiv often doesn't play well with topology that isn't nicely quaded with 4 edge poles. And anyway this is to reduce topology count and that doesn't really matter for the high.

# Retopology
## ZRemesher Retopo
Use ZRemesher during the creation process or for sculpts that are simply for training, but not for the final retopology pass for characters.

There are 2 methods of getting proper results with ZRemesher. Method 1 is to use the `ZRemesherGuides` tool and method 2 is to use PolyPaint.

### ZRemesherGuides Method (Method1):

### PolyPaint Method (Method2):
[Video on this method](https://www.youtube.com/watch?v=9kSaJ1b4QZU)
1. Polypaint the lines you want ZRemesh to follow (It's good to turn off Tablet Rgb Intensity)
2. `PolyGroupIt from Paint` with PolyGroupIt Plugin in the ZPlugin tab (default plugin)
3.(optional) Tessimate SubTool for ZRemesh to go faster
4. ZRemesh with `KeepGroups` on

# Loops/ Topology Of Characters
## Loops/ Topology Of the Face
## Loops/ Topology Of The Body
## Loops/ Topology Of The Hands
## Loops/ Topology Of The Feet

# Links
### Videos
[EVERYTHING You Need to Know About Topology](https://www.youtube.com/watch?v=6Kt0gW3_kio) (J Hill - 40min) 


### Articles
- https://topologyguides.com/