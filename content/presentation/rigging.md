---
title: Rigging
enableToc: true
---

## Overview

There are so many ways to tackle rigging and the subsequent weight painting, that it can get overwhelming quite quickly. Not only that, but depending on what the character is meant to be used for, the rigging process may change as well.

This page will focus on how to create a rig, for either a quick portfolio shot and animation in software like Marmoset Tollbag, Blender or real-time interactive viewers like Marmoset Viewer and Sketchfab, as well as making it game-ready for Unreal Engine 5. The focus will be on humanoid characters, but the same principles also apply to non-humanoid creatures. 

One last note before we get started, it's quite likely, that a lot will change in regard to rigging workflows for games, as the Unreal Engine team is currently working on a built-in, full encompassing rigging and weight painting system. Here them showcasing their progress on that (late 2023):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/miZFpMVYnB4?si=9-zoqhGS7UmG85qS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Software & Tools
The two main software used for professional rigging are **Maya** and **Blender** (and potentially soon Unreal Engine as well). For now, I'll only cover the rigging process in Blender, but will be adding the Maya approach in the future. For a smoother and more efficient experience, I recommend some add-ons:

- Rigify _(A Blender built-in add-on for generating basic bones structures and control rigs)_
- [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) _(A free essential weight painting add-on, which allows for painting through the mesh.)_
- [Game Rig Tools](https://toshicg.gumroad.com/l/game_rig_tools) _(A free add-on which helps with making control rigs game-ready)_
- [Send to Unreal](https://github.com/EpicGamesExt/BlenderTools) _(To quickly preview changes done to the rig in Unreal)_
- [Voxel Heat Diffuse Skinning](https://blendermarket.com/products/voxel-heat-diffuse-skinning) _(A paid add-on which improves and adds to Blender's automatic weights algorithms. This add-on is definitely not needed as I find that doing weights fully by hand is anyway better, but if you want to start with automatic weights as a base, then this add-on will save a lot of your time. There's also a [free version](https://github.com/meshonline/Surface-Heat-Diffuse-Skinning) which doesn't add any new algorithms, but prevents the bone heat weighting error from appearing.)_
- [BatchOPS](https://blendermarket.com/products/batchops) _(If you end up wanting to change or add things to your rig, then this add-on will be a lifesaver.)_
- [UEFY 2](https://www.rakiz.com/uefy/) _(A very complex but powerful Blender to Unreal pipeline add-on worth mentioning. I however currently don't use it in my workflow.)_

_I don't recommend using Auto Rig Pro, which is a paid alternative to Rigify, if you plan on making the rig game-ready, as there are a lot less resources and tools covering the process with that, and it's already hard enough as is with rigify._

## Resources

The [Maya rigging wiki](https://sites.google.com/site/mayariggingwiki/home) is a massive and very helpfull resource even for non Maya users.

Some other interesting pages are:
- https://www.3dfiggins.com/writeups/paintingWeights/
- https://www.hippydrome.com/
- https://area.autodesk.jp/column/tutorial/character_arpeggio/07_rigging_02/ ([translated](https://area-autodesk-jp.translate.goog/column/tutorial/character_arpeggio/07_rigging_02/?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=de) with Google translate)
- https://polycount.com/discussion/184948/community-rigs-and-resources
- https://polycount.com/discussion/78223/animators-free-rigged-characters-online
- https://www.p2design-academy.com/

[[rigging#Additional Helpfull Videos|Here]] are also some relevant videos, but I recommend looking through them after you've finished reading the rigging page.


## Rig Types
There are three types of rigs: **Meta-rigs**, **control-rigs** and **game-rigs**. 

First, the **meta-rig** is created which is basically a blueprint that defines what bones the character has, where they are located as well as what the bone chain relations look like (through parenting). The meta-rig also stores all the rig's preferences.

Next, the **control-rig** is generated using the **meta-rig** as a blueprint and then bound to the character through a process called weight painting. The **control-rig**'s purpose is to provide the artist with complex and comprehensive shematics which allow for easy posing and animating of the character.

Finally, the **game-rig** is generated from the **control-rig** or **meta-rig**. The **game-rig** also needs to be bound to the character with weights. Everything necessary like animations and shape keys are then baked into the **game-rig**. Lastly, the character and the **game-rig** are exported into Unreal Engine via a FBX file.

_Both the **meta-rigs** and **game-rigs** will only have very few bones, while **control-rigs** will be made of many colorful shapes._

You might have noticed a problem with what I just said, the **control-rig** and **game-rig**, both want to be bound to the character mesh. This however isn't possible in most software, and Blender can only have one rig bound to a character at a time. So one can't easily switch back to the **control-rig** if one wants to add an animation or tweak the rig. Depending on the workflow that is being used, there are a couple of ways of fixing it, one being the "Switch Parent Armature" option, that comes with the Game Rig Tool add-on, more on that later.

>[!example]- If it's not clear yet, here's a video explaining rig types
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1ajn_vBelgQ?si=JpnJ8a0INcmdWu2n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What Makes Game Ready Rigs Unique

Rigs are usually made up of multiple parts, the deform bones and the controls. The deform bones are bound to the mesh with weights and are able to manipulate the mesh. The controls on the other hand are only there to help pose or animate the character and only ever manipulate the mesh indirectly through the deform bones. Some examples of the control rigs features are **IK** (Inverse Kinematics) and **FK** (Forward Kinematics) setups or **poles** that tell the knee or elbow in which direction to point. Game engines, however, only require the basic deform bones and in a specific hierarchy and thus aren't able to use the control-rig. 

When looking at other artist's workflows, you might notice that many of them use the rig that comes with UE5 and weight paint it onto their character. Although in theory this might be a great way of doing it, as one ensures that Unreal Engine will fully understand the rig, in practice this is a terrible approach as it will not allow you to pose or animate your own character properly. You'll only be able to use poses and animations made by others, as well as having to go through the pain of exporting the rig from Unreal if you want to render in other software. This is because it's currently not possible to generate a control-rig from the UE5 rig. And posing or animating without a control-rig is a waste of time and will not yield good results. _(This is as of May 2024, I'll try to update this part as soon as something changes in regard to this situation.)_

So that leaves the question, what is the correct approach? The most optimal way of giving the game engine what it wants and not sacrificing the artist's posing and animating experience, is by first creating a versatile control rig, weighting it, creating poses or animations and then stripping it of all its features right before importing it into Unreal while also baking the created poses and animations onto it. 

The disadvantage of this approach is that one won't be able to use the stock UE5 player controller animation system like running, jumping or poses and animations by others on the Unreal marketplace, without first retargeting the game-rig you created onto the UE5 stock game-rig. Retargeting is a one time process which can be a somewhat tedious and convoluted, but I'll cover it here as simple as possible. _(This again is something that I'm very sure will be automated by a script in the near future, removing the need for retargeting by hand when using a standardized rigify control-rig. And I'll update this as soon as that's available)_.

Let's quickly cover what exactly either won't transfer over, or needs to be adjusted before importing into Unreal Engine:

1. As already mentioned, bones that don't deform the mesh won't be wanted in a game engine. In Blender the control rig is made up of many non deforming bones with fancy shapes, whereas other software like Maya uses empties instead to represent non deforming bones. These should not be exported to Unreal. _(In Blender one can check if a bone is a deforming bone under the Bone tab. One can toggle bone deform for an entire rig or only specific bones in the rig.)_

2. Rig hierarchy is derived from bone parenting and doesn't matter in Blender and Maya. Games engines however are quite specific when it comes to the rig's hierarchies. Unreal Engine wants every rig hierarchy to start with a bone called "root". More on what the exact hierarchy should look like later.

3. Shape keys aren't directly transferable to Unreal and need to be baked into the animation first, which means that the animations that used the shape keys will be fine, but one won't be able to tweak the value of the shape key on the fly as it doesn't exist in Unreal anymore. (Shape key baking is done automatically in Blender at export via the ??? option.)

5. Squash and stretch with squishy bones won't have the same visual result in Unreal Engine as in Blender, because Unreal Engine preserves the volume of the mesh, meaning the mesh will taper when stretched whereas Blender won't taper the mesh when stretched.

6. Modifiers won't export to Unreal Engine and need to be applied before or at export

7. Game ready rigs should be controlled with constraints and not parenting. In addition, the character's mesh has to be connected to the deform rig via vertex groups only and not parenting



## Rigging Preparations

Before starting with these preparation and clean up steps, make sure to create a backup of the Blender file. Also, try to create your future projects with these steps in mind:

- Feet right above world center
- Humanoid characters in A-pose (not T-pose)
- Tails on characters or creatures, if present, should be straightened
- Clothing or accessories that hang from the body should be in a gravity friendly state in the rest pose
- Humanoid character matching proportions of UE5 mannequin (things like arm length and head size).
- Character at realistic unit scale
- Facing front
- Units, dimensions & transforms correct (origins/ pivot points centered)
- All origins should be at the world orogin if possible
- Applying modifiers
- Deleting vertex groups, relations & parenting


his step is only needed if you plan on retargeting and want the best, most compatibility with stock Unreal Engine or Unreal marketplace poses and animations

>[!info]- More about: The pose and proportions
>
>Keeping the character's default pose and proportions (relative proportions) as close to that of the UE5 mannequin as possible, isn't a requirement and often creative freedom will take president, but will improve the compatibility of your retargeted character and the stock Unreal Engine or Unreal marketplace poses and animations.
>
>A quick example: Let's say there's an animation where the character touches their faces with their hand. If your character has longer arms than the UE5 mannequin, then the arm might go through the head.
>
>
>To ensure that animations created by others will work with your character (especially if you plan on retargeting), then it's a good idea to follow some pose guidelines. This is because if the pose of your character doesn't match up with the animations you want to retarget to it, then the animations won't perfectly transfer over. There are a couple of ways of fixing this.
>
>
>**Correct Pose for Animation Retargeting**
>If your character's rest pose doesn't match up with the animations you want to retarget to it, then the animations won't perfectly transfer over. There are a couple of ways of fixing this.
>
>The most simple way and what you should do with any future project is to simply grab the Unreal Engine default character and try to roughly match the pose while creating your characters. If your character is already finished, however, then you have some other options as well.
>
>For a quick option, one can have uefy at export from Blender match the pose as shown [here](https://youtu.be/SAEuZM5Hp0g?t=84). This has the disadvantage that the model is forcefully put in a slightly different rest pose, which can mess with the model (especially around the crotch and armpit area).
>
>Another method is to temporarily give the model a different pose in the IK retargeter as shown [here](https://youtu.be/N7WdyAeeDrw?t=595). This pose is only for the retargeting of animations, and the character will keep its original rest pose after animation export. This comes with the disadvantage of having to have all animations separate for every character with a different rest pose.
>
>Or one could simply make use of the pose and grab sculpting brushes.
>
>All of these methods have pros and cons. Just be aware that they don't have to perfectly line up. Eyeballing it, is fine. Also, a combination of multiple methods may be the best method.


>[!info]- More about: Units, dimensions & transforms correct
>
>It's quite important that the character has a proper unit size. Before changing the size, make sure that Blenders unit system is default _(Properties Window > Scene > Units)_. The default is Unit System Metric and Unit Scale 1 (some might say the scale should be set to 0.01, this however is not true anymore as this issue was fixed around 2021). Then make sure that the character has a believable height, something around 1.70 m depending on the character. This value can be found under the X coordinate dimension.
>
>Also check if the character is rotated correctly, when entering front view (1), the character should be looking at you.
>
>After that, apply the transforms so they are default. For reference, location and rotation XYZ should be 0, and scale XYZ 1. Also check if the delta transform values are set to those defaults as well _(Properties Window > Object > Transform > Delta Transform)_.
>
>Transforms can be applied with the Ctrl + A transform apply menu. If any object changes in size or moves after applying the transforms, then revert the action and investigate why that's happening.



>[!info]- More about: Applying modifiers
>
>Most of Blender's modifiers won't properly carry over to game engines and potentially mess things up during the rigging and animation process in Blender. A couple of exceptions which can be desired at times are Triangulate, Subdivision Surface, Bevel and non geo edition modifiers like Weighted Normal.


>[!info]- More about: Deleting vertex groups, relations & parenting
>
>Vertex will be used for rigging, so having existing ones which were used for the creation process of the character will only be in the way. Make sure that things that rely on them, like specific modifiers, are applied before deleting the vertex groups. To delete them, select all objects and beside the vertex group menu press the arrow down button and select Delete All Groups. If you for some reason want to keep some of the vertex groups, lock them and choose Delete All Unlocked Groups instead.
>
>
>"In theory your character can be custom rigged and the animation can be not made for unreal and you'll still be able to use it. By fixing the rig and the animation, but as the contreol of the character is in your hand as the character artist, make you life easy and use a unreal compatile rig, then you can use unreal made animations and non unreal friendly animation by retargeting."
>
>"And important thing to understand is that Blender rigs can be quite different from game ready rigs, if you plan on using the character in a game engine, then use the a game ready rig to rig your charactrer.
Correcting the pose includes things like having the elbows bent at the right angle, or having the hand rotation match up"
>
>"There are 2 main reasons why one might want to retarget. The first one being if ones character doesn't match the bone setup or if the animation wasn't made for the default UE5 bone setup -WRONG"
>
>"Retargeting involves quite a lot of effort, so if the default Unreal Rig is ok for your character, then use that without adding any more bones."


## Meta-Rig
As we'll be using rigify to generate a control-rig, the meta-rig should be compatible with rigify. The best way of doing this is by starting with rigify's "Human (Meta-Rig)" _(Add > Armature)_ and then adding to that the bones that one still needs for the character. There's nothing special about this pre-made meta-rig, and one can easily replicate it with rigify's meta-rig building blocks, but sticking with the pre-built rig will reduce the chance of errors when generating the game-rig.

Some examples of things one might require extra bones for, are hair and body physics, extra body parts like more than two arms, a tail, an extra set of ears or clothing parts that require bones.

All of that can be added as long as one isn't adding in new bones into pre-existing bone chains and doesn't delete any bones. The only exception to that is the face, if you don't need to animate the character's face, then delete all the face bones from the met-arig, including the bone called "face" hiding inside the "spine.006" bone. 

For a better understanding on how to customize the meta-rig, or create your own from scratch with the meta-rig building blocks, I recommend watching this video series by CG Dive.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=ta-a4f-iiYHAiPXf&amp;list=PLdcL5aF8ZcJv68SSdwxip33M7snakl6Dx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Before placing the bones, make sure to enable `X-Axis mirror` as well as `In Front` _(Outliner > Data > Viewport Display)_. When placing the bones, use `Snap to Face` _(Shift + Tab)_ to quickly place bones where they roughly should be.

### Bone Placement

>[!example]- An interesting take on bone placements
>This was written by [bandages](https://blenderartists.org/t/some-general-tips-on-bone-locations/1247070/2) and is a somewhat long read, but well worth it.
>
>---
>
>Bones need to be placed at the centers of rotation, rather than the exact bone locations.
>
>The place where this is the biggest issue is with the spine. Your organs can only compress/extend so much, so when you bend forward, your vertebrae kinda expand or something (they’re separated by more flexible discs). What happens is that you don’t literally rotate around the position of the spine bones, but much more centrally than that.
>
>You can see this pretty easily by trying to rig a model and placing the spine realistically. Arching the back will make the front of your torso seem to expand unnaturally. In reality, there are actually a lot of different things going on, it’s not a simple rotation about some point, but the closest simple abstraction is that your body is rotating about some point somewhat forward (“anterior”) of your spine.
>
>Other places, the center of rotation _is_ at the location of the bone. Compression isn’t a big issue for knees, and the ankle ends up maintaining a constant distance from roughly the center of the leg. (Not necessarily true near the joint itself though.)
>
>The actual directions that bones point doesn’t really matter-- Blender’s “tails” don’t matter. They’re used to establish autoweights and they’re used for local axes, and they can be used by some constraints. But the only important thing for the final model is where the head is. One of the things that means is that you should feel to rotate tails however you want to get the autoweights you want. So should your spine rotate with your model? If your model is modelled with a straight back, your spine bones should be in a straight line! If your model is not (modelled with near-porn back arch, say) then your spine bones are not going to be in a line. The important thing is where bones are rotating about, relative to how the mesh has been modelled.
>
>Now, if you look at an actual human being, and ask them to wiggle their jaw, what you’ll find is that the jaw maintains a roughly constant distance from the temporomandibular articulation. So for a realistic model, that’s where the jaw needs to rotate about, or that’s where a parent of distal child bones like “chin” needs to rotate about. That doesn’t mean that autoweights from a bone running from the temporomandibular to the chin will give you good autoweights near the joint itself. That’s a different issue.
>
>But the way I think about it is, you don’t see bones on character models. You see flesh. This whole idea of “bone” is just a metaphor. That’s why you don’t model forearms as an ulna/radius pair. You don’t care about the ulna and the radius. You care about the muscles which are attached to the bones, the skin that is stretched over those muscles, and that has different behavior than the bones themselves. So you don’t have twin long bones, you have short twist bones.
>
>For bone placement relative to the surface of the skin, the important thing to recognize is first, that armatures are merely simplified abstractions; second, that bone placement for autoweights and for posing are different things. In reality, the clavicle connects the scapula and the sternum. It does not control all shoulder movement; the scapula is much more influential. But how many models have scapulae? Few. The entire model is controlled by a simplified scapula/rib/humerus/clavicle structure. Where should that rotate about? In reality, you’d have multiple rotation points and complicated constraints connecting them. In reality? The scapula is generally ignored, while more care is taken for the clavicle, which rotates about the articulation with the sternum, more anterior than posterior. Mostly, not because that’s real, but because we don’t care about our model’s back-- we’re not looking at it very often. (And in my experience, getting good scapula deformation is a real chore. It’s one of those places where there’s a lot of skin sliding, which skeletal deformation isn’t built to simulate.)
>
>But autoweights are something different. How do they work? The closer the line representing the bone is to the surface of the mesh, the _sharper_ the weights are going to be. They’re going to work best if you maintain the origin of the bone, but you can do autoweights and then shift the tail afterwards to your heart’s content, so you can manipulate the sharpness of weights. This makes some sense: if you’re placing your clavicle, place it near the skin, and it will mimic a superficial clavicle deforming the skin, while it will deform the scapula only very generally and loosely, in conjunction with spine and arm bones.
>
>All that is just my experience. I don’t want to pretend like I’m an expert rigger. I have plenty to improve. Don’t treat it like it’s authoritative.

I won't say too much more in regard to bone placements as the text above is quite comprehensive, but one thing to take into consideration, is that a lot of people will quite heavily rely on automatic weights. For anyone that uses automatic weights, placing the spine in the center of the body is essential, so the weighting algorithm can evenly place the weights. But if one anyway weight paints by hand, which one should, then that shouldn't be a reason to place the spine in the center of the body. That doesn't mean however that there aren't other benefits of placing the spine in the center of the body as [bandages](https://blenderartists.org/t/some-general-tips-on-bone-locations/1247070) mentioned above.

Looking at reference of skeletons or people in poses can help with placing the bones.

### Supporting Bones
The most bare bone meta-rig that would be able to move everything would be structured like this:
- Two arm bones
- Two leg bones
- A couple of spine bones
- Some neck bones
- A head bone
- A hand bone
- A bone for every finger joint
- Two foot bones (one for the main part of the foot and one for the toes)

This meta-rig would allow for everything to move normally, but it wouldn't look very good. The thing that's missing are supporting bones. Examples of supporting bones are:

- Clavicle bone
- Scapula bone (rare, and hard to implement but important if back deformation is key)
- Arm twist bones (A replacement for the twin bone twist system (Ulna & Radius) in our body. Even though the upper arm bone (Humerus) doesn't have this, it doesn't hurt to also give it the twist bones)
- Palm bones (helps with poses like fists and spreading out all the fingers)
- Pelvic bone (makes the leg bone have less influence of the hip area)
- Extra hip area support bone
- Breast bone (only for females, to get a realist breast movement)
- But bone (not to common but can make sense)

Note that some of these aren't that important and are used to improve the result of automatic weight algorithms.

Of those, the rigify meta-rig includes the clavicle, arm twist, palm, pelvic and breast bones. The arm twist bones won't be visible at first in the meta-rig, but will appear in the generated control-rig (This behavior can be modified or disabled. Select the upper arm bone in pose mode and go to _Outliner > Bone > Rigify Type_. Setting `Limb Segments` to 1 will disable arm twist.)


## Control-Rig


_ToDo: Finish the control-rig section_

_ToAdd: A great benefit of having a script like rigify generate the control-rig, is that one can re-generate it on a whim without having the set-up things again, as all the set-up happens in the meta-rig. Losing the control-rig basically doesn't matter as all the weights are stored in the vertex groups of the character's objects and the poses and animations are key framed in the action editor. Only the current un-keyed pose would be lost. This is also why one should never delete the meta-rig after the control-rig has been generated as one never knows when one will need the blueprint for the control-rig again._

_ToAdd: Quickly talk about WGTS collection. (The WGTS_rig collection can also be disabled)_

_ToAdd: Cover possible control-rig generation errors
**Bone spine disjoint:**
Some bone heads and tails have to overlap, so they were probably moved away from each other when aligning the rig. Make them overlap again by using Snap to Cursor. 
This error appears when specific bone heads and tails aren't overlapping anymore. To find which bones are the culprit, look at the default rigify meta-rig and see if there are any perfectly overlapping bones that aren't overlapping anymore on your rig. To make them overlap, use `Snap to Cursor`. If there is some specific reason why you don't want to have the bones overlap, then you can tell rigify that those bones aren't supposed to overlap.
**ORG-nose not found:**
Not all face bones were deleted.
**Armature transforms incorrect:**
Apply transforms before generating rig._


## Weight Painting

### Some Theory

**Weight painting** also referred to as **skinning**, is the process of binding the mesh to the control-rig / game-rig, or more specifically, the deform bones.

If you're totally new to weight painting, then I recommend watching any or all of these videos.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PLWv9yjVaoU?si=1HFVguafwv715dTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

>[!example]- A longer, more in-depth video on weight painting
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5SLlp3AwShM?si=ZNlb-n2mmDM2OX13&amp;start=89" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Before we get into [[rigging#The Workflow|the workflow]], let's take a look at how weights work in general and how Blender handles them.

Weights represent the control a bone has over any given vertex of a mesh, the more weight, the more control a bone has. Blender stores weights in vertex groups. When weight painting a character, every bone will have a matching vertex group that shares the name of the respective bone. While weight painting a bone, if the entire mesh is pink instead of the usual weight paint color, then that means that there is no vertex group with a name matching the bone. You'll see this whenever you select any part of the control-rig, as it will obviously not have associated vertex groups.

Posing in general relies on the concept, that every vertex's weight on a mesh is controlled up to 100% by bones and no more. This means that two bones can't both control 80% of a vertex's weight, one of the bones could however control 30% of the weight while the other one controls 70%. This single concept is quite literally all there is to posing a 3D character. In Blender, a weight control of 0% (0) is visualized with the color blue and a control of 100% (1) with red. Per default, Blender won't be very strict when enforcing the rule of every vertex can only be controlled up to a 100%, as one is able to give many bones 100% control over a vertex's weight. The reason why Blender allows this, is because it will interpret three bones 100% control over a vertex's weight, as three bones that control only 33.33% of it. In addition to that, if a vertex's weight is in total only controlled by 40%, then Blender will interpret the control as 100%. This takes away the user's responsibility of making sure vertex weights don't surpass 100%. When the rigged character is then exported from Blender, Blender will modify all the weights, so they conform with the 100% rule, which ensures that this way of handling weights is compatible with other software.

There is one issue with this approach, however, if one wants to return the full control over an area of the mesh to a bone, then one has to first go through every other vertex group and remove that area's weight. This would without a doubt drive anyone insane, and is where a feature called **Auto Normalize** comes in. Auto normalize will make it **impossible** for any vertex's weight to bypass 100%. This is achieved by evenly reducing or "stealing" the weights from other vertex groups as soon as the sum suprasses 100%.

### Binding Mesh to Rig

There's one last step before one can start weight painting and that's binding the character mesh to the control-rig or game-rig. In Blender this is done through the `Set Parent To` menu _(Ctrl + P)_. In this menu, there are three relevant choices: **With Empty Groups**, **With Envelope Weights** and **With Automatic Weights**. All of them do three things:
- Parents all selected character objects to the rig
- Creates one vertex group for every bone on every selected object with the respective name of the bone
- Adds an Armature modifier to all selected objects and sets the selected rig in the modifier options

In addition, the **With Envelope Weights** and **With Automatic Weights** options will do some automatic weight painting for you based on two different algorithms. **With Empty Groups** will as the name implies not add any weight paintig to the vertex groups.

I personally recommend using **With Empty Groups** as it will better teach you how to weight paint and will actually speed the specific workflow we'll be using. If you however just want a quick and dirty result, then use the **With Automatic Weights** algorithm. That algorithm will quite often result in a "Bone Heat Weighting" error message. If that happens, then one can use the [Voxel Heat Diffuse Skinning](https://blendermarket.com/products/voxel-heat-diffuse-skinning) add-on or it's [free version](https://github.com/meshonline/Surface-Heat-Diffuse-Skinning) which improve and add to Blender's weight generation algorithms.

>[!example]- A showcase of the Voxel Heat Skinning add-on in action
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QoKwjvuXb9I?si=LiF1UBR05GAuPwLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If when using automatic weights, you don't want to give everything weights, then temporarily turn off deform for those bones _(Alt + W) or (Properties > Bone > Deform)_. (Ctrl + Shift + W exclusively enables instead of toggles and can be useful in some situations).
### What Bones to Weight Paint
As mentioned above one should only ever weight paint deform bones. The deform bones are all in the bone collection called "DEF" which is hidden by default and needs to be un-hidden _(Outliner > Data > Bone Collection)_. (In pre 4.0 Blender bone collections were called bone layers and weren't nameable. The deform bones from rigify rigs were on layer 30)

The deform bones will be hidden at first and need to be un-hidden. They are all on the layer called "DEF" _(Outliner > Data > Bone Collection)_

### Weight Painting Tools, Options & Tips

This is a relatively long section, but not being aware of these things will make your weight painting experience miserable, so at the very least skim through left column.

**Bones and Pose**

|                  Name                   |                                                                                                                                                                                                                                                      Description                                                                                                                                                                                                                                                      |
| :-------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **Live Deformation Feedback**      |                                                                                                                                                        To get live feedback on how the weight painting effects the mesh, use the weight paint pose hybrid mode. To enter it, select the rig followed by Shift selecting the mesh and enter weight paint mode.                                                                                                                                                         |
|             **Reset Pose**              |                                                                                                                        To reset the posed bones one usually goes to `Pose > Clear Transform > All`, but as that is not available in weight paint mode, use the `Search` menu _(F3 / Space)_ and search for "Clear Transform All" or even better, add that option to the `Quick Favorite` menu.                                                                                                                        |
|           **Merging Objects**           | If a character's low is made up of many objects, then it can make sense to merge as many as possible before weight painting, to reduce the amount of objects that need to be weight painted. Merging too much together can sometimes make it harder to paint, but that can mostly be fixed by using vertex selection limits and the [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) add-on. Eyes for example should probably be their own object and not merged into the rest of the character. |
|   **IK Helper for Game Rig Painting**   |                                                                                                                                                   If you're weight painting a game-rig instead of a control-rig, then to help with weight painting it can be useful to add a quick IK setup for posing the bones, just make sure not to change the bone hierarchy.                                                                                                                                                    |
|       **Switching Between Bones**       |                                                                                                        Switching between bones can be done in a couple of ways. One can Ctrl + Shift click them _(just Ctrl in pre 4.0 Blender)_, or select the corresponding vertex group through either the `Vertex Groups` menu under the `Object Data` tab, or the vertex group dropdown list, at the top of the viewport.                                                                                                        |
|    **Bone Searching and Filtering**     |                                                                                                                                                                              The Vertex Group Object Data tab also has a filter field collapsed under the triangle icon, which can be helpful for filtering by terms like "arm" or "r".                                                                                                                                                                               |
| **Auto Locking Opposite Bones (L / R)** |                                                                                                                                                                                                         There is currently no way of automatically locking and unlocking the opposite bone at the same time.                                                                                                                                                                                                          |

**Tools**

|                     Name                     |                                                                                                                                                                                                                                                                               Description                                                                                                                                                                                                                                                                                |
| :------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Weight Painting Multiple Objects at Once** |                                                                                                                                                                                                                                          As of version 4.2, Blender only allows for one object to be weight painted at a time.                                                                                                                                                                                                                                           |
|      **Basic Weight Painting Controls**      |                                                                                                                                                                                   `LMB` adds weight, while `Ctrl` removes it. This behavior depends on the `Blend Mode` _(Tool > Brush Settings)_ which should mostly be kept at `mix`, as well as the `Weight` and `Srength` values.                                                                                                                                                                                    |
|            **Smoothing Weights**             |             Smoothing weights is an integral part of weight painting. One can either evenly smooth the entire vertex group with the `Smooth` button _(Weights > Smooth)_. Or use the `Blur` tool for more targeted smoothing (holding Shift while painting will temporally switch to the Blur tool). Smooth is however as of version 4.2 still broken and will not take Auto Normalize into consideration. Until this is fixed you should under no circumstance use smooth. As smooth is mostly better and quicker than blur, this is hopefully fixed soon.              |
|               **Other Tools**                |                                                                                                                                                                         Other useful tools like `Sample Weight` and `Gradient` can be found in the toolbar _(T)_ (The gradient tool is as of version 4.2 still broken the same way smooth is, and won't take Auto Normalize into consideration).                                                                                                                                                                         |
|              **Auto Normalize**              |                                                                     An essential option to enable is Auto Normalize _(Tool > Options > Auto Normalize)_. The full explanation on it is at the start of the weight painting section, but basically to recap, this option makes it impossible for more than one bone to fully control one vertex. It achieves this by automatically while one is painting, stealing and adding weights to surrounding bones to never surpass the 100% weight control.                                                                      |
|          **Auto Normalize Button**           |                                                                                                                      The `Normalize All` button _(Weights)_ will force all vertices to only be controlled up to 100%. This can be helpful, but can also mess up weight paint. Optimally, one would never want to get into the situation where this option is needed, by using Auto Normalize from the start and not painting with the Armature off.                                                                                                                      |
|          **Mirroring Weight Paint**          |                                           Make sure your weight painting is being mirrored, by enabling `Mirror Vertex Groups` as well a setting the mirror axis to `X` _(Tool > Symmetry)_. This feature works by looking at the name of the vertex groups and matching "l" (left) and "r" (right) vertex groups. If you forgot to enable mirroring, then there are ways to mirror the entire model's weight paint or only selected weight paint groups later on, a video on that [here](https://youtu.be/Ha_YU5xJsSc?t=89).                                            |
| **Limiting Weight Paint To Areas (Masking)** |                                                                                                                                                                   To limit weight painting to an area, enter edit mode, select the vertices and back in weight paint mode switch to vertex or face selection mode, which will lock all vertices from being painted that aren't selected in edit mode.                                                                                                                                                                    |
|            **Paint Through Mesh**            | To paint through the mesh, both `Front Face Only` _(Properties > Tool > Advanced)_ needs to be disabled and the `Falloff Shape` should be set to `Projected` _(Properties > Tool > Falloff)_. There's an add-on called [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) which does this automatically and thus makes switching between normal and paint through weight paint mode easier. Just be aware that it can be buggy sometimes (Make sure to disable paint through as soon as it's not needed anymore, as it can easily mess up your work). |
|             **Painting Falloff**             |                                                                                                                                                           Based on the situation and one's personal preference, it can also make sense to disable or enable `Front Face Only` painting _(Brush Settings > Advanced > Front Face Only)_. I like to keep it on as the brush falloff is more natural with it on.                                                                                                                                                            |
|       **Assing Automatic from Bones**        |                                                                                                                                                                                                                                                                                  _ToDo_                                                                                                                                                                                                                                                                                  |
|                  **Clean**                   |                                                                                                                                                                                                                                                              `Clean` _(Weights)_ will remove stray weights.                                                                                                                                                                                                                                                              |

**Visual**

|                      Name                      |                                                                                                                                                                                                           Description                                                                                                                                                                                                           |
| :--------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       **Display Zero Weights as Black**        |          Per default, one will see the weight paint ranging from blue (0) to red (1). Vertices that don't yet have a weighting for that bone will be displayed as blue, which is simply misleading. Setting `Zero Weights` to `Active` _(Weight Paint Overlay)_ will help identify many issues directly when they occur, instead of when posing. Having this is especially important when using Auto Normalize tools.           |
|                 **Wireframe**                  |                                                             I personally can't weight paint without wireframe on, it tremendously helps gauge how the deformations will look like and if any wacky things are going on. Keeping it on will also help build an understanding of how one can improve on the retopology of future characters _(Overlays > Geometry)_.                                                              |
|        **Utilizing Multiple Viewports**        |                                                                                              Have two viewports both focused on the left and right side of the character and pose one side of the character. Then switch between the viewport with the relaxed and posed version while weight painting depending on the situation.                                                                                              |
|         **Better Overview of Results**         | To nicely see the weight paint, one should be in the `Solid Viewport Shading` mode with color set to `single` with `white`, or `random`. Changing the bone type to `stick` can also make things more readable _(Data > Viewport Display > Display As)_. It's also good to occasionally disable `Show Overlays`, to get a sense of how the mesh deformation actually looks like (maybe also have a dedicated viewport for this). |
|        **Showing Weights in Edit Mode**        |                                                                                                                                           The weight of the currently selected vertex group can be shown in edit mode by enabling `Vertex Group Weights` _(Mesh Edit Mode Overlays)_.                                                                                                                                           |
| **Viewing and Tweaking Single Vertex Weights** |                                                                                                                                               Enter `Vertex Selection` mode while weight painting, `Alt` select a vertex and view its weight painting in the right sidebar _(N)_.                                                                                                                                               |
|         **Bone Locking Visualization**         |                                                                                                                                                                                       Locked bones are red while unlocked ones are blue.                                                                                                                                                                                        |
|             **Pink Weight Paint**              |                                                                                                                            Pink weight paint signalizes, that the current bone doesn't have any associated vertex group. Proceeding to paint will create a vertex group (this is mostly undesired).                                                                                                                             |
|                 **Bone Names**                 |                                                                                                                            Enabling bone names can be helpful _(Outliner > Data > Viewport Display)_ _(If the names don't appear beside the bones, then enable Text Info under the Overlay options)_                                                                                                                            |
|                 **Bone Axes**                  |                                                                                                                                                                     _ToDo: Explain why bone axes visuals are used._ _(Outliner > Data > Viewport Display)_                                                                                                                                                                      |

### Avoiding & Fixing Weight Painting Mistakes

It's important to be aware that Auto Normalize can be inconsistent and buggy at times, it will seemingly randomly paint on completely other parts of the model. A reliable way of almost fully countering this, is by using the [lock workflow](https://www.youtube.com/watch?v=3yrwKXQbRpI), more on that workflow later. It's still possible though for the other side of the model to get messed up, as one has to unlock both the left and right bone pairs when painting. 

Another important thing to know about Auto Normalize, is that it will completely stop working if the Armature modifier is disabled. This is mostly not wanted as weights will start going over 100%. But whenever Auto Normalize isn't doing what you want it to, because it's being buggy, then it can make sense to quickly disable the Armature modifier, fix the mistake and enable it again.

Painting on the other side by accident can also sometimes be your doing. You'll mostly notice this happened when things start moving that shouldn't be moving. To quickly fix it, increase the brush size and make one big stroke over that side with X-Ray Weight Paint on.


### The Workflow

My workflow is based on Yami's. Here's a video of him showing it in action:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3yrwKXQbRpI?si=J9qanlRDQcEf0YO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I personally find this is to be the only viable workflow for weight painting in Blender.

In the video he only weights paints a simple meta-rig, but when weight painting a proper control-rig, instead of starting with the clavicle, one should start with the uppermost arm bone. Other than that, one simply works ones way down every bone chain of the rig. For the hand, one has the hand bone and one of the palm bones unlocked. Then one slowly makes ones way down the finger and repeats it again for the next palm bone, also unlocking the hand bone again. This is the most tedious weight painting area but a necessary evil.

Here's a less strict version of the workflow which I also quite like. It doesn't rely on locking bone groups, which makes it more flexible and fast.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1TnzOpYogZQ?si=iRZF0oK8-cop0djJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Refining the Deformations

Look at reference art of nude people in poses or you own body and look for things like where creases occur or how skin is pulled when limbs are bent. For example try putting your finger right above where your upper and lower arm bones meet (Humerus & Ulna) and watch how your finger moves when you bend your arm. Or raise your entire arm and see how the skin on you chest is also pulled up as well. 3D rigs are made to emulate our own skeleton and the whole weight painting system basically works the same way on our own body.

The best way however to learn how weight groups should look is by looking at rigged and weight painted charcaters from other artist that have more experience with it. There are plenty of free models available online, but for paid options I recommend buying one of Ryan Reos's or Dzung Phung Dinh's recent models. Both of them are masters of deformation. Rush Zilla is also very good at that, but I'm not sure if he makes his models available online.

_ToDo: Talk about areas that need extra fixes to nicely deform, like knees and elbows._

## Switching out the Rig

Even after the character's weight painting is complete, one can still change out the rig without losing any weight painting work. This works as long as the new rig's bones have the same names. To do this, all links between the rig and the character's model need to be removed.

This is done by un-parenting all the character's objects from the rig via **Clear Parent** _(Alt + P)_, followed by removing the armature from all the objects, which is something that is hard in vanilla Blender, but very easy with the [BatchOPS](https://moth3r.gumroad.com/l/batchops) add-on.

Then instead of following the normal [[rigging#Binding Mesh to Rig|binding]] process, which would mess with the weight painting in the vertex groups, one does it manually. First select all the character's objects and parent them to the rig _(Ctrl + P)_. Then all the objects need an armature modifier which points to the rig. To do this, one first has to make sure that the built-in [Copy Attribute Menu](https://docs.blender.org/manual/en/latest/addons/interface/copy_attributes.html) add-on is enabled. Then one simply sets up one armature modifier on any of the objects, selects the rest of the objects and in the `Copy Attributes` menu _(Ctrl + C)_ selects `Copy Selected Modifiers`.

_(If the prior rig is deleted then in theory none of these steps need to be done, as the new parenting would overwrite the old parenting. And the old armature modifier would stay, but would reference no rig and thus do nothing. But this isn't very clean and possibly prone to unexpected outcomes.)_

Now you can re-generate the rigify control-rig with the new meta-rig, and everything should work.

If you also want to reset the weight painting and delete all vertex groups. Then you'll need to use either the [BatchOPS](https://moth3r.gumroad.com/l/batchops) add-on or find a script online like [this one](https://blenderartists.org/t/how-to-remove-vertex-colors-vertex-groups-from-multiple-objects/652774), as Blender currently isn't able to bulk delete vertex groups from multiple objects.


## Game-Rig
Once the control-rig and weight painting are done, one can finally generate the game-rig.

If you haven't read through the [[rigging#What Makes Game Ready Rigs Unique|what makes game readyrigs unique]] section, then do that first.

CG Dive has a video series called bridging the gap, which I recommend watching for a full encompassing understanding, of the possible hurdles there are and what issues to watch out for. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=W_tOtEKbRp3euYBo&amp;list=PLdcL5aF8ZcJvCyqWeCBYVGKbQgrQngen3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I'll continue with the assumption that the character is meant to be used in Unreal Engine 5.x. It's important not to be using UE4 as UE5 changed quite a lot in regard to rigs and animations.

_WIP: The game rig section is still a work in progress, as I'm still figuring out the most optimal and comfortable workflow._


## Additional Helpfull Videos

- [Unreal explaining skeletons / animation theory 1](https://www.youtube.com/watch?v=FDbpHamn2eY)
- [Unreal explaining skeletons / animation theory 2](https://www.youtube.com/watch?v=JkcJ5bjGPsg)

>[!example]- These are some interesting videos showing off workflows of rigging and animating characters in Blender for Unreal.
>
>_As things with rigging change quite often, I've added a date beside the resource. Also note, that most of the stuff related to UE4 rigging doesn't work anymore in UE5._
>
>(2023 Apr) Bring Rigged Character & Animation from Blender to UE5
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L4OcpF7-YB0?si=LZFUWSW_iOAuJ1CC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vqVA4lvpVWQ?si=2Tqca4K3gOZ3eA5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2023 Feb) Rigging character in Blender for Unreal using Game Rig Tools add-on
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CIViLsI3SCU?si=FzxKlC-hpfZC3Pmh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2020 Feb) Bringing rigged character from Blender to Unreal and some animation retargeting (He's a solo indie dev, so take it with a grain of salt.)
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nY4Q8cYBLP8?si=GSDh-zVB3KP1-hIr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 May) Part 1: Rigging character in Blender for UE5 using uefy 2.5 _by Rakiz Farooq_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AhpOrqyGf0o?si=nbyp8R6QCpV1SLdq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 May) Part 2: Setting up rig in UE5 _by Rakiz Farooq_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GdObGfhRPGA?si=N9fpI0TnkdjHtldO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 May) Part 3: Retargeting in UE5 _by Rakiz Farooq_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mgxGM08bCkA?si=AGLuVdBzgrtygQQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 May) Part 4: IK retargeter in UE5 _by Rakiz Farooq_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6Tw2nPNWygs?si=FZfRmMVH8RdjAgXu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2021 May) Part 1: Rigging character in Blender for UE4 using rigify _by CG Dive_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O-5MXyKyyhc?si=w_llf40wvcU4VuoT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2021 Jun) Part 4: Bringing rigged character from Blender to UE4 using both Send to Unreal and FBX _by CG Dive_
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y51-tXjKEzc?si=qs03sXqsdvpLqba_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 Apr) Retargeting UE5
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_I1ldRuAr74?si=k9f00uAIxkUgEAby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2022 May) IK Retargeting UE5
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N7WdyAeeDrw?si=ows2Zq_byC8Ha82B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2019 Apr) Blender to Unreal 3 Part Series: Rakiz Farooq has an updated version of this series, but this old one still has some interesting stuff in it (UE4)
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oZ14vidzSs4?si=6nUx21QhIGIU6bbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>(2019 Jan) Another older video of Rakiz Farooq but with some interesting stuff (UE4)
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SAEuZM5Hp0g?si=aPhcsEDhmWsOXOzd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


These channels produce a lot of great content focused on rigging:
- [Rakiz Farooq's Channel](https://www.youtube.com/@RakizFarooq)
- [CG Dive](https://www.youtube.com/@CGDive)




