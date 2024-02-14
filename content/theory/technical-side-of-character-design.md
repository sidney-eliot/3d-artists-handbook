---
title: "👩🏽‍💻 Technical Side of Character Design"
enableToc: true
---

>[!example] Character Creation Process Resources
>**Videos**
>
>**Articles**
>- [80 lv Character Articles](https://80.lv/articles/character-art/)
>- [Marmoset Character Creation Articles](https://marmoset.co/category/toolbag-tutorials/character/)
>- [Real-time Character Production Workflow (Samurai)](https://discover.therookies.co/2021/05/06/real-time-character-production-workflow-for-games/)
>
>**Breakdown & Showcase**
>- [Stylized Character Presentation in Toolbag](https://marmoset.co/posts/stylized-character-presentation-in-toolbag/)
>- [Steampunk Huntress](https://3dtotal.com/tutorials/t/3d-character-sculpting-a-guide#article-introduction)
>- [Character Presentation With Animation In Toolbag](https://marmoset.co/posts/level-up-your-character-presentation-with-animation-in-toolbag/)
>- [The Rookies Project Breakdowns](https://www.therookies.co/projects)
>- [Red Leaves](https://www.therookies.co/projects/24395)
>- [The Princess of Ambrosia](https://www.therookies.co/projects/26638)
>- [Eilesti - The Local Druid](https://www.therookies.co/projects/22802)
>- [Skywind - Hlaalu Dresses](https://www.therookies.co/projects/28231)
>- ['Fire and Blood' (Real-time)](https://www.therookies.co/projects/24581)
>- [princess Ira and Amina](https://www.therookies.co/projects/29502)


## Important Conventions to Follow
- Create the character in an **A-pose**. Anatomically, it's the most neutral pose the human body can be in. It will make sculpting areas like the shoulders (Deltoids) quite a lot easier. The **A-pose** is also the closest pose to industry standard rigs, like the Unreal Engine rig. An additional benefit of using the **A-pose**, is that showcasing the character poseless in the portfolio will look much more natural than something like the **T-pose**.
- Make sure measurements are correct, **around 1.7m** for an average character (This will make shadows, physics, ... more accurate. And has many other benefits)
- Make sure the character is **pointing to the front**
- Work on the left side of the character (from the character's perspective) and mirror to the right, this helps with Blender add-ons, marmoset skew painting and more. In ZBrush however, work on the right side because of mirror and weld
- Keep center of model always at center of world. In 3D modeling applications this is easy, but in software like ZBrush it's a bit more of a challenge
- Keep entire base mesh and use hide modifier to remove parts
- Keep as many backups as possible of older versions of objects and the entire file (storage is cheap, your time isn't)
- Consider using an empty called "WorldOrigin" as a world origin for all modifiers that need a central point like mirrors. This has many benefits, things like allowing for the origin to be not at the center and for use of multi mirrors. One can think of it as the root bone for rigging(Make sure to hide and disable this empty, so it's never touched)

## Pitfalls to Watch Out For
- Always apply transforms in 3D modeling software when it makes sense (For example, it's good practice to apply scale before beveling if possible). However, often it makes sense to not apply rotation, so one can quickly go back to a neutral orientation for modeling
- Apply all mirrors before rigging
- Always make sure to remove shrinkwrap offset before applying the modifier

## Questions to Ask When Doing Models for Others
- What texture resolution to use
- The Polycount budget
- Desired map types
- The texture Ratio (Mostly 1x1, but sometimes games use different ratios)
- If a base body below the armor is important (for switching outfits and/or nude senses)


## Rundown of the Optimal Workflow

Depending on if the model is hard surface or organic, the workflow will look a bit different. However, it's totally possible to do everything with the organic workflow. The organic workflow is mainly in ZBrush or, if you don't have ZBrush, Blender's sculptor.

1. Use a combination of ZBrush and your favorite modeling application to finish the high model
2. Retopologize the high model in Blender, deciding what detail to keep and what detail to banish into the baked normal map
3. Bake the high to the low to get maps like normal, AO, curvature, ...
4. Texture the model
5. Optionally weight paint, rig and animate it
6. Render and/or bring into a game engine

All these steps are covered in far great detail in this handbook.

If a piece is more hard surface, and you decide to not use ZBrush, but your modeling software instead, then make sure not to care about topology when modeling. Only make sure the high with all its bevels and SubDiv looks good. It's however a good idea to work as no-destructively as possible (and when going destructive to keep backups of the non-destructive pieces). This is done, so one can salvage high pieces to quickly create the retopology.

## 🚧Work in Progress🚧
- Have as much as logically possible merged together, to make rigging easy
- Have as little overlaying meshes and faces as possible, to avoid rigging issues