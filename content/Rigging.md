---
title: "Rigging 🦴"
enableToc: false
---

# Rigging Humanoid with Blender's Rigify (Addon)

## Theory
Object division:
- Body + Face + Tongue + Eye Lashes + Eye Shade + Eye Moisture
- Jaw Top
- Jaw Bot
- Eye Left
- Eye Right
- Hair
- All Clothing (together or separate)

Bone positions:
- Eye Bone has to be exactly at center of eye
- Jaw bone position is vital

Asymmetrical rig can have problems, however with rigify's upgraded rig this isn't a problem anymore

## Process
1. Create Human Meta Rig in Add menu
2. Set bone **Viewport Visibility** to **In Front**, toggling bone **Names** can also help (enable text in overlay to see bone names)
3. Align bones in edit mode and make sure x mirror is on
4. If you don't want to rig the face delete all face bones including the face bone hiding in the head bone
5. Then make sure the character mesh and the rig have following: 
   - Scale applied and if possible all transform
   - The origin should be at the world origin if possible
6. With the rig selected in object mode, generate the rig (Object Data Properties > Rigify Buttons > Generate Rig). This button does following: Generate another rig called rig and a WGTS collection
    <details>
    <summary>Possible Errors (when generating rig)</summary>

    ```
    Bone spine disjoint:
    Some bone heads and tails have to overlap, so they where probably moved away from each other when aligning the rig. 
    Make them overlap again by using Snap to Cursor
    ```
    ```
    ORG-nose not found:
    Not all face bones where deleted
    ```
    ```
    Armature transforms incorrect:
    Apply transforms before generating rig 
    ```
    </details>
7. One can either generate the weights, do them by hand or use both methods

    7.1. Select the character and everything else that should be influenced by the rig and select the rig last. Then parent everything to the rig with Ctrl + P > **With Automatic Weights**

      7.2. Or one can manually parent object to the rig and weight paint them, which is often a must with some models
8. For cleanup disable the WGTS_rig collection and the metarig and put them in a collection as a backup.

### Manually Painting
- Make sure to paint with the correct bones, disable all other bone layers (layer 29)
- Be aware of following settings: Mirror X, Front Faces Only, Toggle Mesh Wireframe
- If some parts of the model aren't using a mirror, the X mirror will sometimes not work. A fix is to make both sides the same
- If when you start painting everything briefly turns pink, you probably did something wrong

For Face, parent lower teeth to teeth bone same with upper

Outliner layout:

![[Pasted image 20230604225851.png]]

Rigify Rig:

![[Pasted image 20230604225910.png]]
