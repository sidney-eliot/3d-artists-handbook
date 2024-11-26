---
title: "Workflow between ZBrush & Blender"
enableToc: true
---
## Overview
ZBrush is a great software for creating the entire high poly mesh, but it can be clunky when poly modeling and fixing small topology issues. This is why **GoZ** is so good, it allows for seamless use of ZBrush and solid modeling software like Blender or Maya. Sending the model back and forth only takes one button press and a couple of seconds.

As software like ZBruh works quite differently from most modeling software, there are some important things to know before one starts sending one's model around. For the rest of this page, I'll be talking about GoZ in reference to Blender, the add-on used for Blender is called GoB. I find this forked version of [GoB](https://github.com/JoseConseco/GoB) works the best.

### Things to Be Aware Of
Here are some important things to understand about ZBrush, so one can properly use GoZ.

- SubTool history is kept when re-importing an object into ZBrush
- If you rename an object sent from ZBrush to Blender, and send it back to ZBrush, it will not overwrite the SubTool but create a new one. This can sometimes be desired. One disadvantage is that the new SubTool will not keep its history
- Currently (as of version 3.5.85) GoB doesn't use ZBrush's export offset
- The Blender origin point doesn't matter when exporting to ZBrush. The relation from the object volume to the world origin is what matters
- To get the desired size for exporting, instead of changing the unit size, you should change the GoB add-on export scale inside of Blender. (It's vital that you note down this value, as losing it during a project could be detrimental. And Blender resets add-on settings after disabling them)

## The Workflow
0. Set up the GoB add-on settings to fit your needs
1. Set up the scale between ZBrush and Blender. One can either change the GoB add-on export scale as mentioned above or change the scale multiplier in the GoB add-on by changing the `Scale` to Manual. We will leave the ZBrush scale at 1, all offsets at 0 and use the GOB add-on scale multiplier. Now to find out the correct scale multiplier value we need to do following calculation or eyeball it: `Desired size in meters / ZBrush Tool units = Scale Multiplier`. For this example, we'll use `1.7 / 2 = 0.85`. _(I highly recommend noting the scale values somewhere)_
2. There are a couple of GoZ buttons that do different things. `GOZ` will export the selected SubTool, while `All` sends all SubTools and `Visible` only sends visible SubTools. _(All buttons in the Tools tab)_
3. For Blender to actively listen for anything sent from ZBrush via one of the GoZ buttons, the `GoB import` button needs to be enabled _(located at the top right in Blender)
5. When done with the changes in Blender, make sure the mesh is clean. Then select one or multiple objects and click the `GoB export` button _(top right)_. If you don't rename the object in Blender it will replace the SubTool with the newly imported one, if you rename it, ZBrush will import it as a new SubTool. Note that the history will then be lost.

## General Things to Be Aware Of in ZBrush

Here are some important things to understand about ZBrush, before using GoZ to prevent costly mistakes. I condensed this as much as possible, for more in depth on ZBrush look at the [[zbrush-specific|ZBrush page]].
### General
**Ngons**<br>Ngons can't ever exist in ZBrush, it can only use triangles and quads. If you ever import meshes with Ngons, ZBrush will automatically cut the Ngon into triangles and quads. As the way ZBrush decides to cut the Ngon can sometimes be undesired, it's a good idea to cut them in your modeling software before sending it to ZBrush (Most software have tools for finding Ngons).
### Units & Size
**About Units**<br>ZBrush works with their own generic unit system, which is called units. It's important that the entire model is always around the size of **2 units cubed** (XYZ size). Staying close to this size helps brushes, operations and DynaMesh to work properly. Don't be too specific about this, 5 units are still fine.

**Viewing Units & Size**<br>There are two ways of viewing the units of SubTools. Either in the `Size` tab _(Tool > Geometry > Size)_, or by using the legacy transpose tool. The legacy transpose tool will show a different units value than the size tab because it calculates **Units Size * Export Scale** instead of **Units Size**. Use booth depending on what value you want.

**Changing Units & Size**<br>Units can be changed through a multitude of ways:
- The Gizmo Tool has the ability to scale one or every SubTool at once, combining that with changing the location from which the scale is performed makes it a solid option
- The `Unify` button _(Tool > Deformation)_ will set the selected SubTool's units as close as possible to 2 units cubed, as well as resetting the location. It's possible to repeat this action to all other SubTool with the `Repeat To Other` button _(Tool > Deformation)_, this will however often result in undesired results, so watch out
- Probably the best way is to use the `Size` slider _(Tool > Deformation)_ which will scale the selected SubTool. Like mentioned above use the `Repeat To Other` button to repeat the action to all other SubTools



Most of these methods will also work for correcting the model's location. Another great tool for correcting the location is the `Set To Ground` _(Macro Dropdown)_. It only works for one SubTool, however.





What's the difference between the two center points?

- Mirror actions will always look at the **World Center**
- The **floor** reflects user actions, while the **World Center** is static


### World Center (Primary and Secondary Center Points)

ZBrush has a **primary center point** and a **secondary center point**. **The primary center point** is the **world center** like in other software, and is hard locked to the X-0, Y-0, Z-0 point. The **secondary center point** is the **floor**, it has the X and Z axes hard locked to 0, but the Y (up) axis can freely move.

The floor dynamically repositions in order to make sure that it's always below the lowest point of the lowest SubTool, when floor `elv` is set to `-1`_(Draw > Elv)_. When floor `elv` is changed to `0`, then the floor has all axis locked to 0, 0, 0 and stops dynamically adjusting, making the floor always be at the World Center. **Dynamic floor** is great for quickly doing changes like extending the leg size. Because ZBrush currently has no good way of quickly placing the entire model on the floor at World Center, one should use **dynamic floor**.

>[!question] What's the difference between the two center points?
>
>- Mirror actions will always look at the **World Center**
>- The **floor** reflects user actions, while the **World Center** is static


### Export Scale & Offset
`Export Scale` _(Tool > Export)_ is a multiplier for the scale the model exports as. `Distance offset` _(Tool > Export)_ does the same, just for location. 

>[!info] The behavior of things exported from ZBrush to Blender is as follows
>
>- Export scale of 0 is an unset value and acts the same as export scale of 1
>- Export scales / offsets are individual for every Tool
>- A SubTool of `2 units` with a `export scale of 0/1` will import into Blender as `2m`
>- A SubTool of `2 units` with a `export scale of 3` will import into Blender as `6m`
>- Y `Offset of 1` will place the characters feet perfectly on the world origin in Blender and `-1` will make the head be under the world origin (this isn't influenced by the export scale or SubTool units amount)
>- Always make sure X and Z offset is `0`

>[!example]- More about ZBrush's units & scale system (videos)
><div style="text-align: center;">
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4D6vkeCy6rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n2xPrwI9o1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**A video that goes into detail**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EXjfH_X2hkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Manual Exporting & Importing
ZBrush works best with FBX. OBJ / Extended OBJ can't export things like Polygroups. Also, importing OBJs will merge all objects into one SubTool, FBX imports every object as a separate SubTool.

Let's say manually we import an object into ZBrush that's 1.8 m high. ZBrush will make its units as close to 2 as possible, so one can nicely work with it, the important thing however is that it will change the export scale for that object to for this example 0.8. It will also properly adjust the offset values. This is done so when exported back to the original application the model came from, the scale and location stays preserved.