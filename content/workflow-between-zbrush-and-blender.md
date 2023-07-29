---
title: "🌀Workflow between ZBrush and Blender"
enableToc: true
---
## A Great Workflow Example
The reason why [GoZ/ GoB](https://github.com/JoseConseco/GoB/releases) is so good, is because it allows for the seamless use of all Blender's modeling and sculpting tools, as well as all of ZBrush's modeling and sculpting tools. Without the tedious manual exporting and importing.

### Things to Be Aware Of

These are important things to understand about ZBrush so you can properly use GoB.

- SubTool history is kept when re-importing an object into ZBrush
- If you rename an object sent from ZBrush to Blender, and send it back to ZBrush it will not overwrite the SubTool but create a new one. This can sometimes be desired
- Currently (As of version 3.5.85) GoB does not use ZBrush's export offset
- Origin does not matter when exporting to ZBrush. The relation from the object volume to the world origin is what matters
- To get the desired size for exporting instead of changing the unit size, you should change the GoB addon export scale inside of Blender


### The Workflow

0. Set up the GoB addon settings to fit your needs

1. Set up the scale between ZBrush and Blender. One can either use the methods mentioned above to change the ZBrush export scale or change the scale multiplier in the GoB addon by changing the `Scale` to Manual. We will leave the ZBrush scale at 1, all offsets at 0 and use the GOB addon scale multiplier. Now to find out the correct scale multiplier value we need to do following calculation or eyeball it: `Desired size in meters / ZBrush Tool units = Scale Multiplier`. For this example, we will use `1.7 / 2 = 0.85`. _(I highly recommend noting the scale values somewhere)_

2. Decide what to send to Blender. By choosing one of the GoZ buttons. `GOZ` will export a selected SubTool, to send all SubTools use `All` and to only send visible SubTools click `Visible`(all buttons in the Tools tab).

3. In Blender, toggle import mode with the GoB import button(top right). With import mode, active Blender will listen to ZBrush's GoZ exports

4. When done with the changes in Blender, make sure the mesh is clean. Then select one or multiple objects and click the GoB export button (top right). If you don't rename the object in Blender it will replace the SubTool with the newly imported one, if you rename it ZBrush will import it as a new SubTool. Note that the history of will be lost.

## General Things to Be Aware Of in ZBrush

- It's impossible to have Ngons in ZBrush. ZBrush only works with tris and quads (ZBrush can convert Ngons at import)

### Units & Size
**-About Units-** 

ZBrush works with their own generic unit system which is called units. It's important that the entire model is always around the size of `2 units cubed` (XYZ size). Don't be too specific about this, 5 units is still fine. Staying close to this size helps tools, brushes and DynaMesh work properly.

**-Viewing Units & Size-**

There are 2 ways of viewing the units of SubTools. Either in the Size tab (Tool > Geometry > Size), or by using the legacy transpose tool. The legacy transpose tool will show a different units value than the size tab because it calculates `Units Size * Export Scale` instead of `Units Size`. Use booth depending on what value you want

**-Changing Units & Size-**

Units can be changed through a multitude of ways:

- The Gizmo Tool has the ability to scale one or every SubTool at once, combining that with changing the location from which the scale is performed makes it a good option

- The `Unify` button (Tool > Deformation) will set the selected SubTool's units as close as possible to 2 units cubed, as well as resetting the location. It's possible to repeat this action to all other SubTool with the `Repeat To Other` button (Tool > Deformation), this will however often result in not desired results

- Probably the best way is to use the `Size` slider (Tool > Deformation) which will scale the selected SubTool. To nicely scale down all other SubTools use the `Repeat To Other` button (Tool > Deformation)

Most of these methods will also work for correcting the location. Another great tool for correcting location is the `Set To Ground` in the `Macro` tab. It only works for one SubTool, however.


### World Center (Primary and Secondary Center Points)

ZBrush has a primary center point and a secondary center point. The primary center point is the World Center, and is locked to the X-0 Y-0 Z-0 point. The secondary center point is the floor, it has the X and Z axis locked to 0, but the Y (up) axis can freely move.

The floor dynamically repositions in order to make sure that it's always below the lowest point of the lowest SubTool. When floor `elv` is set to `-1`(Draw > Elv). When floor `elv` is set to `0`, then the floor has all axis locked to 0 0 0 and stops dynamically adjusting, making the floor always be at the World Center. Dynamic floor is great for quickly doing changes like extending the leg size. Because ZBrush currently has no good way of quickly placing the entire Tool on the floor at World Center, one should use dynamic floor.

>[!question] What’s the difference between the two center points?
>
>- Mirror actions will always look at the World Center
>- Floor reflects user actions, World Center is static


### Export Scale & Offset
`Export Scale` _(Tool > Export)_ is a multiplier for the scale the model exports as. `Distance offset` _(Tool > Export)_ does the same, just for location. 

>[!info] The behavior of things exported from ZBrush to Blender is as follows
>
>- Export scale of 0 is an unset value and acts the same as export scale of 1
>- Export scales/ offsets are individual for every Tool
>- A SubTool of `2 units` with a `export scale of 0/1` will import into Blender as `2m`
>- A SubTool of `2 units` with a `export scale of 3` will import into Blender as `6m`
>- Y `Offset of 1` will place the characters feet perfectly on the world origin in Blender and `-1` will make the head be under the world origin (this is not influenced by the export scale or SubTool units amount)
>- Always make sure X and Z offset is `0`

>[!example]- More about ZBrush's units/ scale system (videos)
>
><br>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4D6vkeCy6rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n2xPrwI9o1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**A video that goes into detail**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EXjfH_X2hkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Manual Exporting & Importing
ZBrush works best with FBX. OBJ/ Extended OBJ can't export things like polygroups. Also, importing OBJs will merge all objects into one SubTool, FBX imports every object as a separate SubTool.

Let's say manually we import an object into ZBrush that's 1.8 m high. ZBrush will make its units as close to 2 as possible, so one can nicely work with it, the important thing however is that it will change the export scale for that object to for this example 0.8. It will also properly adjust the offset values. This is done so when exported back to the original application the model came from, the scale and location stays preserved.