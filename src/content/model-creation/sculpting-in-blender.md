---
title: "Sculpting in Blender"
enableToc: true
---

>[!iinfo] Info
>
>Sculpting professionally is far better in ZBrush, and it's also the industry standard, which means that for most jobs you'll need to know how to use it. If you however don't have ZBrush, then don't worry, sculpting in Blender isn't that bad and fine for learning. And some of Blender's shortcomings, when it comes to sculpting, can be amended with add-ons. Just be aware that using proper sculpting workflows are a massive headache and time sink in Blender.

## Blender to ZBrush Equivalent

|ZBrush|Blender|
|:-:|:-:|
|DynaMesh|Remesh
|ZRemesher|Default Blender doesn't have this.<br>The [Quad Remesher](https://exoside.com/quadremesher/) add-on adds a similar functioning algorithm to Blender.
|Sculptris Pro|Dyntopo

## Blender Sculpting Workflow

Sculpt the model blockout using Remesh. Then either retopologize the blockout by hand, use a remeshing add-on like Quad Remesher or skip the retopology for now. To add detail, use the multires modifier. Finally, create a retopologized version of the model using the already mentioned methods.

Try to stay away from Dyntopo the same as you would avoid Sculptris Pro in ZBrush, it develops bad sculpting habits.

More about good sculpting workflows can be found on other pages, they don't differ that much to ZBrush's.


>[!example] Focal Length
>
>Toggle: N > View > Focal Length
>
>A focal length of 35 or 50 is normal, something like 80 or 100 can however be to see more
details.
>
>Smaller focal length makes you see more of the model but less detail, and 
higher focal length makes you see less of the model but more detail.
>
>ZBrush's default focal length is 50.

>[!example] MatCaps
> 
>- Chose a clay like MatCap that makes it easy to see things like crevices on the sculpt
>- Occasionally switch to a reflective MatCap to see if surfaces are smooth  

>[!example] Other Settings
>
>- Under Viewport Overlays, enable: Annotations, Statistics
>- Switch to annotation surface placement mode 
>- Turn on X mirror

>[!example] Brushes Settings
>
>- Front Faces only
>- Size Pressure = Off
>- Unified Radius = Off
>- Strength Pressure = On
>- Unified Strength = Off
>- Scrape > Tool Settings > Falloff = Constant

## Great Add-ons for Sculpting
- Brush Manager
- Sculpt Layers (Import ZBrush SubDiv levels)
- Sculpt/Paint Wheel (Easy access to sculpting tools through selection wheel)

