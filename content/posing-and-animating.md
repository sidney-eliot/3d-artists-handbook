---
title: "Posing Animating"
enableToc: true
---

# 🚧Work in Progress🚧

# Exporting animations
### Actions
This refers to a timeline containing keyframes of an animation. All animations can be in one action or separated into single actions(run, idle, shoot,...), both methods are fine however separating every animation into a separate actions can make things easier.

### File format
The only 2 file formats one can really use are .fbx and .abc(Alembic). 

### Prepping Mesh Before Export
- Make sure all scales are set to 1

### Export options for FBX
- Selected Objects: Enable
- Forward/ Up: Depends on destination software

![[Pasted image 20230604225600.jpg|700]]

- Apply Modifiers: In most cases good, allows working non-destructively
- Only Deform Bones: Only export bones that have deform toggled. This is often good because unnecessary helper bone are not exported
- Add Leaf Bones: Disable. Adds a bone to the end of every bone chain
- NLA Strips: Disable
- All Actions: Disable if all animations are in one action. Enable if every animation has a separate action
- Simplify: Set to 0.10. Makes exporting take a bit longer but avoid issues especially in the face area

# 🚧Sort in

### Rotation modes
XYZ Euler: The first axis has the highest priority and the last the lowest priority.

Quaternion (WXYZ): Fixes rotation problems but has the drawback that it can't rotate more than 180° because of looking for the fastest path. But this can be fixed by separating it into multiple keyframes that don't rotate more than 180°.


Specific rotations can also be achieved with parenting the object to a empty and making both the parent and child rotate differently for both rotations to be mixed.


## other

Turn off IK stretch for arms legs and head


https://www.youtube.com/watch?v=NRMCGJk_hN8
