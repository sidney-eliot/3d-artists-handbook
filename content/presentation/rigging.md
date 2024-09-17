---
title: Rigging
enableToc: true
---

## Overview

There are so many ways to tackle rigging and the subsequent weight painting, that it can get overwhelming quite quickly. Not only that, but depending on what the character is meant to be used for, the rigging process may change as well.

This page will focus on how to create a rig, for either a quick portfolio shot and animation in software like Marmoset Toolbag, Blender or real-time interactive viewers like Marmoset Viewer and Sketchfab, as well as making it game-ready for Unreal Engine 5. The focus will be on humanoid characters, but the same principles also apply to non-humanoid creatures or mechanical models. 

One last note before we get started, it's quite likely, that a lot will change in regard to rigging workflows for games, as the Unreal Engine team is currently working on a built-in, full encompassing rigging and weight painting system. Here them showcasing their progress on that (late 2023):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/miZFpMVYnB4?si=9-zoqhGS7UmG85qS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Software & Tools
The two main software used for professional rigging are **Maya** and **Blender** (and potentially soon Unreal Engine as well). For now, this page will only cover the rigging process in Blender, but the Maya approach will be added at some point in the future. For Blender, these are some add-ons that will make the experience smoother and more efficient:

- Rigify _(A Blender built-in add-on for generating basic bones structures and control rigs)_
- [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) _(A free essential weight painting add-on, which allows for painting through the mesh.)_
- [Game Rig Tools](https://toshicg.gumroad.com/l/game_rig_tools) _(A free add-on which helps with making control rigs game-ready)_
- [Send to Unreal](https://github.com/EpicGamesExt/BlenderTools) _(To quickly preview changes done to the rig in Unreal)_
- [Voxel Heat Diffuse Skinning](https://blendermarket.com/products/voxel-heat-diffuse-skinning) _(A paid add-on which improves and adds to Blender's automatic weights algorithms. This add-on is definitely not needed as I find that doing weights fully by hand is anyway better, but if you want to start with automatic weights as a base, then this add-on will save a lot of your time. There's also a [free version](https://github.com/meshonline/Surface-Heat-Diffuse-Skinning) which doesn't add any new algorithms, but prevents the bone heat weighting error from appearing.)_
- [BatchOPS](https://blendermarket.com/products/batchops) _(If you end up wanting to change or add things to your rig, then this add-on will be a lifesaver.)_
- [UEFY 2](https://www.rakiz.com/uefy/) _(A very complex but powerful Blender to Unreal pipeline add-on worth mentioning. I however currently don't use it in my workflow.)_

_I don't recommend using Auto Rig Pro, which is a paid alternative to Rigify, if you plan on making the rig game-ready, as there are a lot less resources and tools covering the process with that, and it's already hard enough as is with rigify._

## Resources

The [Maya rigging wiki](https://sites.google.com/site/mayariggingwiki/home) is a massive and very helpful resource even for non Maya users.

Some other interesting pages are:
- https://www.3dfiggins.com/writeups/paintingWeights/
- https://www.hippydrome.com/
- https://area.autodesk.jp/column/tutorial/character_arpeggio/07_rigging_02/ ([translated](https://area-autodesk-jp.translate.goog/column/tutorial/character_arpeggio/07_rigging_02/?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=de) with Google translate)
- https://polycount.com/discussion/184948/community-rigs-and-resources
- https://polycount.com/discussion/78223/animators-free-rigged-characters-online
- https://www.p2design-academy.com/

[[rigging#Additional Helpfull Videos|Here]] are also some relevant videos, but I recommend looking through them after you've finished reading the rigging page.


## Types of Rigs
There are a couple different types of rig which may or may not be needed based on what you're doing.

**Control-rig**<br>
The control-rig is used no matter the model's intended use case. It's created either by hand or with the help or scripts and consists of fancy features, controls and UI elements, and doesn't have to take into regard what's technically feasible in the game engine. It's also used to create the weight painting, as one can directly see the weight painted results in action on the control-rig. The control-rig's goal is to provide the animator with a robust and feature rich rig to animate with.

**Meta-rig**<br>
The meta-rig, or whatever name the software / script wants to call it, is the concept of quickly creating a scaffolding rig with some basic instructions and let the software / script generate a complex control-rig for you. One can sort of think of it as a blueprint for the control-rig, although often one still has to make adjustments in the generated control-rig.

**Game-rig**<br>
The game-rig, as the name implies, is specifically used when importing animated models into game engines. As game engines have to be highly optimized, they often sacrifice features that other 3D software have. This means that simply importing a control-rig into a game engine won't work, instead one creates a game-rig, which is a highly modified control-rig stripped of all its features. Creating the game-rig can either be done by hand or through the help of scripts, as most of the fixes can be easily automated.

It can make sense to only use the game-rig that comes with the game engine and completely skip the control-rig, as long as you don't want to create your own poses and animations for the character.

**Render- / Film-rig**<br>
In the film industry or for general animation rendering, the control-rig is mostly used, but sometimes there are reasons to create a separate render-rig.

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
>"In theory your character can be custom rigged and the animation can be not made for unreal and you'll still be able to use it. By fixing the rig and the animation, but as the control of the character is in your hand as the character artist, make you life easy and use a unreal compatible rig, then you can use unreal made animations and non unreal friendly animation by retargeting."
>
>"And important thing to understand is that Blender rigs can be quite different from game ready rigs, if you plan on using the character in a game engine, then use the a game ready rig to rig your charactrer.
Correcting the pose includes things like having the elbows bent at the right angle, or having the hand rotation match up"
>
>"There are 2 main reasons why one might want to retarget. The first one being if ones character doesn't match the bone setup or if the animation wasn't made for the default UE5 bone setup -WRONG"
>
>"Retargeting involves quite a lot of effort, so if the default Unreal Rig is ok for your character, then use that without adding any more bones."


## Meta-Rig

Meta-rig creation is such a vast topic, that it deserves its [[meta-rig|own page]]. 

[[meta-rig|Meta Rig]]




## Control-Rig

### Poles
Poles help IK set-ups point in the correct direction. The two main IK setups are for the knee and elbow. Rigify will hide poles in the control-rig, to reveal them select either one of the upper arm or leg arrow controls in pose mode. Then turn on `Toggle Pole` _(Sidebar > Item)_. For the knee, the pole should point perfectly straight forward. If the pole isn't in that position, then there are two options of fixing it. One can fix the bone `Roll` and bone location in edit mode on the meta-rig, which is often not possible as one would then be changing the knee rotation point and thus make the control-rig worse. Or simply move the poles on the control-rig in edit mode to the correct location, which has the only disadvantage that one has to redo this action every time one re-generates the control rig.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

https://blender.stackexchange.com/questions/253635/auto-rig-pro-knees-bent-backwards

### Broken Control-Rig
After generating the control-rig, there are a handfull of things that can break during generation or be broken in the generated control-rig.

The knee poles should be pointing perfectly straight forward, if they don't then either the bone roll has changed, and they aren't 0 anymore, or the leg bones aren't in a straight line on the X axis.

ToDo

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

In addition, the **With Envelope Weights** and **With Automatic Weights** options will do some automatic weight painting for you based on two different algorithms. **With Automatic Weights** is the better one of the two but quite prone to errors like the "Bone Heat Weighting" error message. To help with that, one can use the [Voxel Heat Diffuse Skinning](https://blendermarket.com/products/voxel-heat-diffuse-skinning) add-on, which fixes the automatic weights algorithm and also introduces some new ones. **With Empty Groups** will as the name implies not add any weight painting to the vertex groups.

One doesn't have to limit oneself to only one of these options, as one can use a mix of these algorithms for different objects of the character or even different parts of the same mesh.

First one binds all the characters objects to the rig **With Empty Groups**, this is the best option to start with as it will do the necessary things like parenting, and creating the armature as well as vertex groups, without adding any weights.


There is no right way of doing this, but I personally recommend sticking with the **With Empty Groups** option for most of the model and doing the weight painting by hand, as it will better teach you how to weight paint and will actually speed the specific workflow we'll be using. For parts like the face, I however recommend using one of the automatic weighting algorithms as a base to work from.

A CG Dive video going into detail on using and mixing different algorithms.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QoKwjvuXb9I?si=LiF1UBR05GAuPwLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

To use Blender's Automatic or Envelope algorithm on specific areas, the steps are as following.  Enter edit mode on the mesh and select the vertecies that should be weighted. Then enter pose mode on the control-rig (make sure deform bone collection is visible) and select the deform bones that should be used to generate the weights. Finaly enter weight paint mode with both the control-rig and the mesh, activate `Vertex Selection` mode and use `Assign Automatic from Bones` _(Weights)_.

>[!example]- To use the Voxel Heat Diffuse Skinning add-on's algorithms on specific areas, follow this video
>
>_It's clipped to start at the correct spot._
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QoKwjvuXb9I?si=BRdMElj6cXpzA2Pj&amp;start=502" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)

If you just want a quick and dirty result, then use the **With Automatic Weights** algorithm for the entire character and fix the weighting mistakes that occur (or the [Voxel Heat Diffuse Skinning](https://blendermarket.com/products/voxel-heat-diffuse-skinning) version if you have that). 

If when using automatic weights, you don't want to give everything weights, then temporarily turn off deform for those bones _(Alt + W) or (Properties > Bone > Deform)_. (Ctrl + Shift + W exclusively enables instead of toggles and can be useful in some situations).
### What Bones to Weight Paint
As mentioned above one should only ever weight paint deform bones. The deform bones are all in the bone collection called "DEF" which is hidden by default and needs to be un-hidden _(Outliner > Data > Bone Collection)_. (In pre 4.0 Blender bone collections were called bone layers and weren't nameable. For old rigify rigs it's as follows: Layer 29 = DEF, Layer 30 = MCH, Layer 31 = ORG)

The deform bones will be hidden at first and need to be un-hidden. They are all on the layer called "DEF" _(Outliner > Data > Bone Collection)_

### Weight Painting Tools, Options & Tips

This is a relatively long section, but not being aware of these things will make your weight painting experience miserable, so at the very least skim through left column.

**Bones and Pose**

|                  Name                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **Live Deformation Feedback**      | To get live feedback on how the weight painting effects the mesh, use the weight paint pose hybrid mode. To enter it, select the rig followed by Shift selecting the mesh and enter weight paint mode.                                                                                                                                                                                                                                                                                                                |
|             **Reset Pose**              | To reset the posed bones one usually goes to `Pose > Clear Transform > All`, but as that is not available in weight paint mode, use the `Search` menu _(F3 / Space)_ and search for "Clear Transform All" or even better, add that option to the `Quick Favorite` menu.                                                                                                                                                                                                                                               |
|           **Merging Objects**           | If a character's low is made up of many objects, then it can make sense to merge as many as possible before weight painting, to reduce the amount of objects that need to be weight painted. Merging too much together can sometimes make it harder to paint, but that can mostly be fixed by using vertex selection limits and the [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) add-on. Eyes for example should probably be their own object and not merged into the rest of the character. |
|   **IK Helper for Game Rig Painting**   | If you're weight painting a game-rig instead of a control-rig, then to help with weight painting it can be useful to add a quick IK setup for posing the bones, just make sure not to change the bone hierarchy.                                                                                                                                                                                                                                                                                                      |
|       **Switching Between Bones**       | Switching between bones can be done in a couple of ways. One can Ctrl + Shift click them _(just Ctrl in pre 4.0 Blender)_, or select the corresponding vertex group through either the `Vertex Groups` menu under the `Object Data` tab, or the vertex group dropdown list, at the top of the viewport.                                                                                                                                                                                                               |
|    **Bone Searching and Filtering**     | The Vertex Group Object Data tab also has a filter field collapsed under the triangle icon, which can be helpful for filtering by terms like "arm" or "r".                                                                                                                                                                                                                                                                                                                                                            |
| **Auto Locking Opposite Bones (L / R)** | There is currently no way of automatically locking and unlocking the opposite bone at the same time.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|          **Bone Collections**           | _ToDo_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**Tools**

|                     Name                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Weight Painting Multiple Objects at Once** | As of version 4.2, Blender only allows for one object to be weight painted at a time. For bulk work one has to get creative with built-in tools like `Assing Automatic from Bones` or add-ons that enable that functionallty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|      **Basic Weight Painting Controls**      | `LMB` adds weight, while `Ctrl` removes it. This behavior depends on the `Blend Mode` _(Tool > Brush Settings)_ as well as the `Weight` and `Srength` values. The blend mode should mostly be kept at `mix`, but occasionally switching to `subtract` can be handy for completely removing weights from a bone (with completely I mean even remove 0 weights, making that areas weight paint black again instead of blue).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|            **Smoothing Weights**             | Smoothing weights is an integral part of weight painting. One can either evenly smooth the entire vertex group with the `Smooth` button _(Weights > Smooth)_. Or use the `Blur` tool for more targeted smoothing (holding Shift while painting will temporally switch to the Blur tool). Smooth is however as of version 4.2 still broken and will not take Auto Normalize into consideration. Until this is fixed you should under no circumstance use smooth. As smooth is mostly better and quicker than blur, this is hopefully fixed soon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|               **Other Tools**                | Other useful tools like `Sample Weight` and `Gradient` can be found in the toolbar _(T)_ (The gradient tool is as of version 4.2 still broken the same way smooth is, and won't take Auto Normalize into consideration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|              **Auto Normalize**              | An essential option to enable is `Auto Normalize` _(Tool > Options > Auto Normalize)_. The full explanation on it is at the start of the weight painting section, but basically to recap, this option makes it impossible for more than one bone to fully control one vertex. It achieves this by automatically while one is painting, stealing and adding weights to surrounding bones to never surpass the 100% weight control.<br><br>(A good thing to know about auto normalize, is that it will only steal and add weights to bones that have any vertex weight to begin with. Display zero weights will help identify this, but more on that later. _ToDo: Is this really true?_)<br><br>Here's a list of tools that won't work with Auto Normalize, and thus shouldn't be used until Blender fixes them (There are workarounds to still be able to use some of these tools, like for example using the `Normalize All` button every time after using the tool, with `Lock Active` on):<br><br>- Smooth _(Weights)_<br>- Set Weight _(Weights)_<br>- Gradient _(Toolbar)_<br>(There might be more) |
|          **Auto Normalize Button**           | The `Normalize All` button _(Weights)_ will force all vertices to only be controlled up to 100%. This can be helpful, but can also mess up weight paint. Optimally, one would never want to get into the situation where this option is needed, by using Auto Normalize from the start and not painting with the Armature off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|          **Mirroring Weight Paint**          | Make sure your weight painting is being mirrored, by enabling `Mirror Vertex Groups` as well a setting the mirror axis to `X` _(Tool > Symmetry)_. This feature works by looking at the name of the vertex groups and matching "l" (left) and "r" (right) vertex groups. If you forgot to enable mirroring, then there are ways to mirror the entire model's weight paint or only selected weight paint groups later on, a video on that [here](https://youtu.be/Ha_YU5xJsSc?t=89).<br><br>If for some reason, some of the objects still have mirrors on them at the point of weight painting, then the mirror's `Vertex Groups` option _(Modifiers > Mirror > Data)_ will properly set the weights for the opposite side after the modifier is applied (either manually or at export).                                                                                                                                                                                                                                                                                                                  |
| **Limiting Weight Paint To Areas (Masking)** | To limit weight painting to an area, enter edit mode, select the vertices and back in weight paint mode switch to vertex or face selection mode, which will lock all vertices from being painted that aren't selected in edit mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|            **Paint Through Mesh**            | To paint through the mesh, both `Front Face Only` _(Properties > Tool > Advanced)_ needs to be disabled and the `Falloff Shape` should be set to `Projected` _(Properties > Tool > Falloff)_. There's an add-on called [X-Ray Weight Paint](https://toshicg.gumroad.com/l/xray_weight_paint) which clicks both of these buttons, which makes enabling and disabling paint through a lot quicker. (Make sure to disable paint through as soon as it's not needed anymore, as it can easily mess up your work without you noticing it in time!).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|             **Painting Falloff**             | Based on the situation and one's personal preference, it can also make sense to disable or enable `Front Face Only` painting _(Brush Settings > Advanced > Front Face Only)_. I like to keep it on as the brush falloff is more natural with it on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|       **Reseting & Cleaning Weights**        | `Clean` _(Weights)_ has two uses. It can fix stray weights by using `low values`, or reset all the weights for either every or only the selected bone by setting the value to `1`.<br><br>This can also be done in a more targeted way, by setting the brushes `Blend` mode to `Subtract`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    **Quickly Fill Area With One Weight**     | In `Edit Mode` select the vertices that you want to give a weight, then enter `Weight Paint` mode and enable `Vertex Selection`. Then use `Set Weight` _(Ctrl + X or under Weights)_, which will fill the selection with the current `Weight` value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|       **Assing Automatic from Bones**        | _ToDo_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|              **Sample Weights**              | `Shift + X` over any area to make that weight the current weight value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|             **Transfer Weights**             | Very useful for transferring weights from the body to clothing. Sometimes doesn't work when character is in a pose.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|        **Smooth Corrective Modifier**        | This modifier can be added to any weight painted object and has the potential to make your weight paint look better by smoothening things out. If your weight paint turned out nicely however and was done with care, then this modifier will make things look worse. The best way of using corrective smooth, is to limit it to specific objects or parts of the mesh through the use of vertex groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

**Visual**

|                      Name                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       **Display Zero Weights as Black**        | Per default, one will see the weight paint ranging from blue (0) to red (1). Vertices that don't yet have a weighting for that bone will be displayed as blue, which is simply misleading. Setting `Zero Weights` to `Active` _(Weight Paint Overlay)_ will help identify many issues directly when they occur, instead of when posing. Having this is especially important when using Auto Normalize tools.                  |
|             **Wireframe Overlay**              | Wireframe overlay tremendously helps gauge how the deformations will look like and if any wacky things are going on. Keeping it on will also help build an understanding of how one can improve on the retopology of future characters _(Overlays > Geometry)_.                                                                                                                                                               |
|        **Utilizing Multiple Viewports**        | Have two viewports both focused on the character's the left and right hand, for example. Then pose one side to see the deformations in action, and keep the other side in rest pose. Finally switch between the viewport with the relaxed and posed version while weight painting depending on the situation.                                                                                                                 |
|         **Better Overview of Results**         | To nicely see the weight paint, one should be in the `Solid Viewport Shading` mode with color set to `single` with `white`, or `random`.<br><br> It's also good to occasionally disable `Show Overlays`, to get a sense of how the mesh deformation actually looks like (maybe also have a dedicated viewport for this).                                                                                                      |
|        **Showing Weights in Edit Mode**        | The weight of the currently selected vertex group can be shown in edit mode by enabling `Vertex Group Weights` _(Mesh Edit Mode Overlays)_.                                                                                                                                                                                                                                                                                   |
| **Viewing and Tweaking Single Vertex Weights** | Enter `Vertex Selection` mode while weight painting, `Alt` select a vertex and view its weight painting in the right sidebar _(N)_.                                                                                                                                                                                                                                                                                           |
|         **Bone Locking Visualization**         | Locked bones are red while unlocked ones are blue.                                                                                                                                                                                                                                                                                                                                                                            |
|             **Pink Weight Paint**              | Pink weight paint signalizes, that the current bone doesn't have any associated vertex group. Proceeding to paint will create a vertex group. This is mostly undesired, but can be used as a means to easily add new vertex groups for bones that were added later on and weren't a part of the initial binding process.                                                                                                      |
|           **Reducing Bone Clutter**            | Changing the bone type to `stick` can make things more readable _(Properties > Data > Viewport Display > Display As)_. One can also switch the bone display type to `Wire` as well as toggle `In Front` _(Properties > Object > Viewport Display > Display As)_. If things are still too cluttered, one should hide currently unneeded bone collections, or even bones in the current collection that aren't being worked on. |
|                 **Bone Names**                 | Enabling bone names can be helpful _(Outliner > Data > Viewport Display)_. (If the names don't appear beside the bones, then enable Text Info under the Overlay options).                                                                                                                                                                                                                                                     |
|                 **Bone Axes**                  | _ToDo: Explain why bone axes visuals are used._ _(Outliner > Data > Viewport Display)_                                                                                                                                                                                                                                                                                                                                        |

Tip:
- Weight paint breast bones last, so when transferring weight from body to clothing, the clothing doesn't get controlled by the breast controls, as long as the clothing is hard
- Don't be to hasty when deleting hidden faces on the hair and head, as hair movement might reveal them. Try to decide which hair pieces are the base layer to hide the head, and which are meant to move and jiggle around, and only delete hidden faces from the base layer hair strands
### Avoiding & Fixing Weight Painting Mistakes

It's important to be aware that Auto Normalize can be inconsistent and buggy at times, it will seemingly randomly paint on completely other parts of the model. A reliable way of almost fully countering this, is by using the [lock workflow](https://www.youtube.com/watch?v=3yrwKXQbRpI), more on that workflow later. It's still possible though for the other side of the model to get messed up, as one has to unlock both the left and right bone pairs when painting. 

Another important thing to know about Auto Normalize, is that it will completely stop working if the Armature modifier is disabled. This is mostly not wanted as weights will start going over 100%. But whenever Auto Normalize isn't doing what you want it to, because it's being buggy, then it can make sense to quickly disable the Armature modifier, fix the mistake and enable it again.

Painting on the other side by accident can also sometimes be your doing. You'll mostly notice this happened when things start moving that shouldn't be moving. To quickly fix it, increase the brush size and make one big stroke over that side with X-Ray Weight Paint on.


### The Workflow

My workflow is based on Yami's. Here's a video of him showing it in action:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3yrwKXQbRpI?si=J9qanlRDQcEf0YO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I personally find this is to be the only viable workflow for weight painting in Blender.

In the video he only weights paints a simple meta-rig, but when weight painting a proper control-rig, instead of starting with the clavicle, one should start with the uppermost arm bone. Other than that, one simply works ones way down every bone chain of the rig. For the hand, one has the hand bone and one of the palm bones unlocked. Then one slowly makes ones way down the finger and repeats it again for the next palm bone, also unlocking the hand bone again. This is the most tedious weight painting area but a necessary evil.

Here's a less strict version of the workflow, which I also quite like. It doesn't rely on locking bone groups, which makes it more flexible and fast.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1TnzOpYogZQ?si=iRZF0oK8-cop0djJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


I prefer sticking with a more strict locking workflow for the initial painting and unlocking all groups for the final refinements.
### Refining the Deformations

Look at reference art of nude people in poses, or your own body, and look for things like where creases occur or how skin is pulled when limbs are bent. For example, try putting your finger right above where your upper and lower arm bones meet (Humerus & Ulna) and watch how your finger moves when you bend your arm. Or raise your entire arm and see how the skin on your chest is also pulled up as well. 3D rigs are made to emulate our own skeleton, and the whole weight painting system basically works the same way on our own body.

The best way to learn how weights should look like, is by looking at rigged and weight painted characters from other artists that have more experience with it. There are plenty of free models available online, but for paid options, I recommend buying one of Ryan Reos's or Dzung Phung Dinh's recent models. Both of them are masters of deformation. Rush Zilla is also very good at that, but I'm not sure if any of his models are available online (I think he only sells STL files for 3D printing).

Now would also be a good time to go back into the meta-rig and move some of the bones that might not have been placed optimally at first. Some artists like placing bones anatomically correct and others try to place them wherever they work best, but at the end of the day all that matters are the results.



**Hair**
Before weight painting the hair, give all the hair a weight of 1 (red) to the "DEF-spine.006" bone, this ensures that the hair will no matter what fully move with the head. Instead of using "DEF-spine.006" as the base for the hair weight paint, it would probably be even better to create a new dedicated bone for this. Next, weight paint all hair strands to new bones that you want to either be able to manually control or control via simulated physics.


**Eyes**

**_Tear Duct (Nasolacrimal duct)_**

**Knee**
_ToDo_

**Elbow**
_ToDo
## Switching out the Rig

Even after the character's weight painting is complete, one can still change out the rig without losing any weight painting work. This works as long as the new rig's bones have the same names. To do this, all links between the rig and the character's model need to be removed.

This is done by un-parenting all the character's objects from the rig via **Clear Parent** _(Alt + P)_, followed by removing the armature from all the objects, which is something that is hard in vanilla Blender, but very easy with the [BatchOPS](https://moth3r.gumroad.com/l/batchops) add-on.

Then instead of following the normal [[rigging#Binding Mesh to Rig|binding]] process, which would mess with the weight painting in the vertex groups, one does it manually. First select all the character's objects and parent them to the rig _(Ctrl + P)_. Then all the objects need an armature modifier which points to the rig. To do this, one first has to make sure that the built-in [Copy Attribute Menu](https://docs.blender.org/manual/en/latest/addons/interface/copy_attributes.html) add-on is enabled. Then one simply sets up one armature modifier on any of the objects, selects the rest of the objects and in the `Copy Attributes` menu _(Ctrl + C)_ selects `Copy Selected Modifiers`.

_(If the prior rig is deleted then in theory none of these steps need to be done, as the new parenting would overwrite the old parenting. And the old armature modifier would stay, but would reference no rig and thus do nothing. But this isn't very clean and possibly prone to unexpected outcomes.)_

Now you can re-generate the rigify control-rig with the new meta-rig, and everything should work.

If you also want to reset the weight painting and delete all vertex groups. Then you'll need to use either the [BatchOPS](https://moth3r.gumroad.com/l/batchops) add-on or find a script online like [this one](https://blenderartists.org/t/how-to-remove-vertex-colors-vertex-groups-from-multiple-objects/652774), as Blender currently isn't able to bulk delete vertex groups from multiple objects.

>[!info] Just because you can doesn't mean you should
>
>Eventhough one can switch out the control-rig with any other control-rig that meets the discused conditions, it's still a good idea to have the new control-rig not have bones that are placed to differently, as shifted bone pivot locations might make the deformations not look to good with weight painting that was done with the old control-rig in mind.


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




