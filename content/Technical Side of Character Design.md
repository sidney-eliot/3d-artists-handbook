---
title: "Technical Side of Character Design 👩🏽‍💻"
enableToc: false
---

# Table of Contents
- [Important Conventions to Follow](#important-conventions-to-follow-)
- [Pitfalls to Watch Out For](#pitfalls-to-watch-out-for-)
- [Questions to Ask When Doing Models for Others](#questions-to-ask-when-doing-models-for-others-)
- [Rundown of the Optimal Workflow](#rundown-of-The-optimal-workflow-)
- [Character Creation Process Resources](#character-creation-process-resources-)


# Important Conventions to Follow [^](#table-of-contents)
- Use `A pose`, it's the most neutral pose and the closet pose to industry standard rigs, like the UE rig. The `T pose` is the second best but also not very good because it makes sculpting the shoulders quite hard and does not match industry standards
- Make sure measurements are correct, `around 1.7m` for an average character (This will make shadows, physics and more, more accurate. And has many other benefits)
- Make sure the character is `pointing to the front`
- Work on the left side of the character (from the characters perspective) and mirror to the right, this helps with blender addons, marmoset skew painting and more. In ZBrush however work on the right side because of mirror and weld
- Keep center of model always at center of world. In 3D modeling applications this is easy, but in software like ZBrush it's a bit more of a challenge
- Keep entire base mesh and use hide modifier to remove parts
- Keep as many backups as possible of older versions of objects/ the entire file(storage is cheap, your time isn't)
- Consider using an empty called "WorldOrigin" as a world origin for all modifiers that need a central point like mirrors. This has many benefits, things like allowing for the origin to be not at the center and for use of multi mirrors. One can think of it as the root bone for rigging(Make sure to hide and disable this empty so it is never touched)



# Pitfalls to Watch Out For [^](#table-of-contents)
- Always apply transforms in 3D modeling software when it makes sense (For example it is good practice apply scale before beveling if possible). However often it makes sense to not apply rotation, so one an quickly go back to a neutral orientation for modeling
- Apply all mirrors before rigging
- Always make sure to remove shrinkwrap offset before applying the modifier

# Questions to Ask When Doing Models for Others [^](#table-of-contents)
- What texture resolution to use
- The Polycount budget
- Desired map types
- The texture Ratio (Mostly 1x1 but sometimes games use different ratios)
- If a base body below the armor is important (for switching outfits and/or nude senses)


# Rundown of the Optimal Workflow [^](#table-of-contents)
Depending on if the model is hardsurface or organic the workflow will look a bit different. However it is totally possible to do everything with the organic workflow. The organic workflow is mainly in ZBrush or if you don't have ZBrush, blenders sculptor.

1. Use a combination of ZBrush and your favourite modeling application to finish the high model
2. Retopologize the high model in Blender, deciding what detail to keep and what detail to banish into the baked normal map
3. Bake the high to the low to get maps like normal, ao, curvature, ...
4. Texture the model
5. Optionally weight paint, rig and animate it
6. Render and/or bring into a game engine

All these steps are covered in far great detail in this handbook.

If a piece is more hardsurface, and you decide to not use ZBrush, but your modeling software instead, then make sure not to care about topology when modeling. Only make sure the high with all it's bevels and SubDiv looks good. Is is however a good idea to work as non destructively as possible(and when going destructive to keep backups of the the non destructive pieces). This is done so one can salvage high pieces to quickly create the retopology.

# Character Creation Process Resources [^](#table-of-contents)
### Videos
### Articles

- [80 lv Character Articles](https://80.lv/articles/character-art/)
- [Marmoset Character Creation Articles](https://marmoset.co/category/toolbag-tutorials/character/)
- [Real-Time Character Production Workflow (Samurai)](https://discover.therookies.co/2021/05/06/real-time-character-production-workflow-for-games/)


# Breakdown/ Showcase [^](#table-of-contents)
- [Stylized Character Presentation in Toolbag](https://marmoset.co/posts/stylized-character-presentation-in-toolbag/)
- [Steampunk Huntress](https://3dtotal.com/tutorials/t/3d-character-sculpting-a-guide#article-introduction)
- [Character Presentation With Animation In Toolbag](https://marmoset.co/posts/level-up-your-character-presentation-with-animation-in-toolbag/)
- [The Rookies Project Breakdowns](https://www.therookies.co/projects)
- [Red Leaves](https://www.therookies.co/projects/24395)
- [The Princess of Ambrosia](https://www.therookies.co/projects/26638)
- [Eilesti - The Local Druid](https://www.therookies.co/projects/22802)
- [Skywind - Hlaalu Dresses](https://www.therookies.co/projects/28231)
- ['Fire and Blood' (Real-time)](https://www.therookies.co/projects/24581)
- [princess Ira and Amina](https://www.therookies.co/projects/29502)



# ⚠ Sort In
- Have as much as logically possible merged together, to make rigging easy
- Have as little overlaying geo as possible, to avoid rigging issues