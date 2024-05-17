---
title: "Blender to Unreal Pipeline"
enableToc: true
---


## 1. Install uefy Add-on / Script
Download the free [uefy lite version](https://www.rakiz.com/uefy-script-lite/) python script or paid [uefy pro version](http://www.rakiz.com/uefy/) python add-on. For the `pro version` simply install the add-on (version 2.5 and up needed). This will create a new panel called `Uefy Script Panel` located in the `Object Data Properties` tab. For the `lite version`, open it in the scripting tab and click run. It will create the same panel but with less functionality. It's important to know that the `light version` doesn't dynamically update, so if after running the script the control rig was renamed, the script has to be run again. This process will be possible with both lite and pro, however at some points some more manual effort will be needed with the lite version, when those spots come I will describe how to do it both with pro and lite.

Rigify add-on is also needed, but it's shipped with Blender. If it isn't already enabled, then enable it.

## 2. TODO: Fill the Blender part

## 3. Import into Unreal Engine
- **Skeleton**: If this is the first character with this type of rig, `don't select skeleton`. For every other character that has that same skeleton, `select that previously imported skeleton`. (If you bring in let's say a new race with 4 arms, then for the first character of that race, select no skeleton. After that select the previously imported 4 arm skeleton for every 4 arm character)
- **Skeletal Mesh**: Only `false` when "Skeleton" has a skeleton selected, otherwise `true`
- **Import Mesh**: `true`
- **Import Animation**: `false`

## 4. Quick Clean Up
Inside the `CharacterX` folder, create following folders: `Meshes` `Rigs` `Materials` `Textures` 
- Put the imported Skeletal Mesh, Physics Asset and Skeleton into the `Meshes` folder
- Put the imported materials into the `Materials` folder
- Pull in all textures from the file explorer to the `Textures` folder

## 5. Create Control Rig Blueprint 
1. Inside the `Rigs` folder, create a new `Control Rig` (RMB>Animation>Control Rig)
2. Rename the `Control Rig` to `CharacterName_ControlRig`
3. Open the `Control Rig`
4. Click `Import Hierarchy` and select the corresponding `Skeletal Mesh` that was just imported (sometimes the skeletal mesh isn't selectable, this makes little sense, nut re-importing can fix it)
5. Compile, save and close the `Control Rig`

## 6. Create Procedural Control Rig Blueprint
1. Get the `Procedural Control Rig` called `CR_Mannequin_Procedural` from the Unreal Engine 5 third person starter project (All>Content>Characters>Mannequins>Rigs). And bring a copy of it back to your `Rigs` folder
2. Rename the `Procedural Control Rig` to `CharacterName_Procedural_ControlRig`
3. Open the `Procedural Control Rig`
4. Under Preview Scene > Mesh select the corresponding `Skeletal Mesh` that was just imported
5. Repeat following changes across all blocks of BP nodes as often as they occur (Ctrl + F can help)
   - In all nodes called `To Swing & Twist` change the values to `X=0/Y=1/Z=0`
   - There will always be 2 nodes called `Interpolate` beside each other. Change the left ones value to `0.0` and the right ones value to `0.5`
6. Save and close the `Procedural Control Rig`

## 7. Create Post Process Animation Blueprint
1. Inside the `Rigs` folder, create a new `Animation Blueprint` and select the corresponding `skeleton` that was just imported(RMB>Animation>Animation Blueprint)
2. Rename the `Post Process Animation` BP to `CharacterName_Post_Process_AnimBP`
3. Open the `Post Process Animation` BP
4. Add following nodes:
   - Input Pose node
   - Control Rig node. In the Details panel of this node under Control Rig, select the corresponding `Procedural Control Rig` that was just created
   - Then connect the nodes like so: Input Pose > Control Rig > Output Pose
5. Compile, save and close the `Post Process Animation` BP

## 8. Skeletal Mesh Settings
1. Open `Skeletal Mesh`
2. In Asset Details > Animation Rig, set `Default Animation Rig` to the corresponding `Control Rig` that was just created
3. In Asset Details > Skeletal Mesh, set `Post Process Animation Blueprint` to the corresponding `Post Process Animation` that was just created
4. Switch to `Skeleton Tree` tab
5. Under cog wheel enable `Show Retargeting Options`
6. Switch Translation Retargeting Mode of bones:
   - Right click root and click `Recursively Set Translation Retargeting Skeleton`
   - Set `root` bone back to `Animation` mode
   - Set `pelvis` bone to `Animation Scaled` mode
7. Switch to Skeleton mode (top right) and make sure the correct `Skeleton` is selected under Preview Scene > Mesh (If beside that there is an "apply to asset" button, click it)

## 9. Create IK Rig
1. Inside the `Rigs` folder, create a new `IK Rig` and select the corresponding `skeletal Mesh` that was just imported(RMB > Animation > IK Rig)
2. Rename the `IK Rig` to `CharacterName_IKRig`
3. Open the `IK Rig`
4. Right click `pelvis` bone and click `Set Retarget Root`. 
5. Then with `pelvis` bone selected click `Add New Solver` button and select the solver option `Full Body Ik`
6. Select the `Full Body Ik` solver, then right-click the `pelvis` bone and select `Set Root Bone on Selected Solver`
7. Still with the `Full Body Ik` solver selected, right click `hand_l` bone and select `New IK Goal`. Do the same for the bone `ball_l`. Repeat for right side bones
8. Rename the `ball_l_Goal` goal to `foot_l_Goal`. Repeat for right side bone
9. Select the `IK Retargeting` tab (left). This is where retargeting chains are displayed. To create retargeting chains, select one or multiple bones in the bone Hierarchy tab on the left, right click them and click `New Retarget Chain from Selected Bones`.

   Chain all bones together that are surrounded by a red box in this image:

>[!example]- Bone hierarchy screenshot
>
>![[Pasted image 20230604230343.png|600]]


10. Select `Full Body Ik Slover` again and right-click the bones with green dots in the image above and click `Add Settings to Selected Bone`. After adding settings, adjust the settings in the `Details` panel to what is seen in the image above. As seen in the picture, the `hand_l_goal settings` have to also changed

11. Lastly, go to the `IK Retargeting` panel(right). And change following `IK Goals`:
    - For the chain `upperarm_l` the IK Goal = `hand_l_Goal`
    - For the chain `thigh_l` the IK Goal = `foot_l_Goal`
    - Repeat for right side

## 10. Create IK Rig for Animation Pack
1. Somewhere inside the folder of the animation pack, create a new `IK Rig` and select the corresponding `skeletal Mesh` of that animation pack(RMB>Animation>IK Rig)
2. Rename the `IK Rig` to `AnimationPackName_IKRig`
3. Open the `IK Rig`
4. Follow steps from section 9.. Apply some common logic when creating the bone chains, the order in which the bones are in will differ as well as the length of some of the chains.

## 11. Create IK Retargeter
1. Inside the `Rigs` folder, create a new `IK Retargeter` (RMB>Animation>IK Retargeter)
2. Rename the `IK Retargeter` to `AnimationPackName_To_CharacterName_IKRetargeter`
3. Open the `IK Retargeter`
4. Set `Target IKRig Asset` to the `IK Rig` of you character/the character that should recieve the animations (Optionally one can also switch the skeletal mesh, to see the result on different meshes)
5. In the `Asset Browser` tab you can see the result on animations
6. If bone names don't match up between source and target skeleton, they will have to be manually matched in the `Chain Mapping` Tab. If one of the skeletons has more bones, then some chain will have to be unassigned for everything to look correct. 

    If the source is the UE4 skeleton, following `Target Chains` will have to be set to none:

    - All metacarpal bones (because the UE4 SK doesn't have them)
    - `lowerarm_twist_02_l` (because the UE4 SK doesn't have them)
    - `upperarm_twist_02_l` (because the UE4 SK doesn't have them)
    - `lowerarm_twist_01_l` (because UE5 procedurally animates them)
    - `upperarm_twist_01_l` (because UE5 procedurally animates them)
     
    If the source is the UE5 skeleton, everything will match up. Even though they have the same skeleton, the animations will still need to be retargeted.

7. Optionally correct the rest pose now as explained [here](https://github.com/Epicrex/3DArtistsHandbook/wiki/Blender-to-Unreal-Pipeline#correct-pose-for-animation-retargeting), if it isn't already correct

8. Finally, when happy with the result, export the animations. The Export button is at the top of the `Asset Browser` tab, select all the animations you want to export and click the button

## 12. Cleaning Up Animation
If the animation looks kind of off, or you think something can be improved, then tweak values from all prier steps as well as maybe using different chains. If the source and target skeleton are very different, then a lot of tweaking will have to be done until everything looks perfect.

## Extended Setup
### High Heels
Resources:
- https://www.youtube.com/watch?v=CzbzRevmOhc
- https://forums.unrealengine.com/t/high-heels-and-flat-feet-help/147715
- https://www.reddit.com/r/unrealengine/comments/m1qqk0/highheels_and_non_highheels_animations_help/
- https://forum.reallusion.com/320306/Unreal-4-Retarget-CC-20-Highheel-Flatheel-Characters


### Hair Physics
Resources:
https://www.youtube.com/watch?v=T5pCaj0trAQ

### Breast & But Jiggle Physics
Jiggle physic can either be integrated into the animation, simulated or a combination of both. For physics to work, the rig needs bones and weight painting for breasts and but

Resources:
- https://www.youtube.com/watch?v=BFE5e-XUcwo
- https://www.youtube.com/watch?v=8NB0Z79Gzk8
- https://www.youtube.com/watch?v=kM4owhT2bR8


### Accessories & Extra Body Parts (Necklaces, Wings, Tails, ...)




## WHAT'S NEXT?
The next section (not done yet) will cover how to actually use the animation ready character, either for animations, still renders or as a player controlled character in Unreal Engine 5. 

## 🚧Work in Progress🚧

## Route 1 Converting Rigify Rig to Unreal Engine Ready Rig
- Go into Unreal Engine and export the `SKM_Quinn_Simple` or `SKM_Manny_Simple` Skeletal Mesh(RMB > Asset Actions > Export)
- In Blender set unit scale to 0.01
- Import Simple Quinn or Manny from. In import window: disable `Animations`, enable `Automatic Bone Orientation`
- Select the mesh called `SKM_Quinn_Simple_LOD0`. And click the uefy button "Extract Mesh" (If you have light version clear parent(Alt+P) instead)
- Delete all other imported objects
- Add in an uefy armature (Shift + A > Armature > Uefy Script > Mannequin Metarigs Presets > Quinn89 Metarig / Manny89 Metarig)
- With the rig selected use the rigify button `Generate Rig` (now there should be a rig and a meta-rig)
- Select mesh and shift click on rig and parent with `Armature Deform`
- The character is now ready to animate. Weight paint corrections are also possible (deform bones for weight painting are on layer 24,25,26)



## Export & Import Character from Blender to Unreal Engine
1. Make sure rig is called "Armature"
2. Select entire control rig and all connected objects
3. Export as fbx. Make sure to enable "Only Deform bones", disable "Bake Animations", disable "Add Leaf Bones" and set "Smoothing Mode" to "Face"
4. Pull fbx into Unreal Engine. In the import window: Enable "Skeletal Mesh", enable "Import Mesh", disable "Import Animations", don't select a skeleton


# Character Animations
## Export/Import Character Animations From Blender To Unreal Engine
1. Go in NLA view and make sure under the rig, all actions are pushed into the NLA strip. Check all boxes and uncheck all stars
2. Select entire control rig and all connected objects
3. Export as fbx. Make sure to enable "Only Deform bones", enable "Bake Animations", disable "Add Leaf Bones", enable "NLA Strips" and disable "All Actions"
4. Pull fbx into Unreal Engine. In the import window: Enable "Skeletal Mesh", enable "Import Mesh", enable "Import Animations", select the correct skeleton




# Links

- [Skelton System Explainded](https://www.youtube.com/watch?v=FDbpHamn2eY)
- https://www.youtube.com/watch?v=nY4Q8cYBLP8

It's also important to know that this script breaks the rig and makes it no longer usable in Blender, so one should create a backup of the blend file.

### Important Notes
- One Skeleton / Rig can be used for many models




## Other Method for Already Rigged and Animated Models

## Route 1 or Route 2 ?
Now, it's important to decide if you want to go `route 1` or `route 2`. `Route 1` will make the model compatible with every Unreal Engine animation and is recommended. `Route 2` is for if you have an already rigged and animated character. Try to avoid `route 2` and first generate an Unreal Engine ready rig before weight painting and animating (In short: `Route 1` your animations and other animations, `route 2` only your animations).

## Route 2 Converting Rigify Rig to Unreal Engine Ready Rig
- Set unit scale to 0.01
- Select control rig
- Go to action editor and unlink current action
- Then in pose mode reset all transforms and go back to object mode
- In the `Uefy Script Panel` located in the `Object Data Properties` tab, make sure `Character:` has the correct control rig selected (The control rig rigify generates is called rig per default)
- ...