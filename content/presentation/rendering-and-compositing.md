---
title: Rendering & Compositing
enableToc: true
---

## Render Engines

**Offline Rendering**<br>
Render engines meant for offline rendering don't rely on speed, rather the goal is to, get the best possible result albeit in a somewhat reasonable time. It's used to render portfolio pieces, for example.

**Real-time Rendering**<br>
Render engines that excel at real-time rendering have to be able to fluently render entire scenes at high frame rates and still feel snappy with player input, while also not forfeiting graphical fidelity.

**Showcase Rendering**<br>
These render engines need to be extremely portable so they can easily be shared with clients and employers though either their browser or a file which is easy to open and only has the essential controls. Some good features that a showcase renderer should have are:
- Basic navigation controls
- Show wireframe
- Texture map isolation
- Show model statistics like tris count
- Light rotate
- Multiple cameras with a camera switching system
- Camera rotation and zoom limiting
- Controls for starting, stopping and scrubbing through and animation as well as being able to change the playback speed and cycle through different animation sets
- The ability to display post effects like vignette or chromatic aberration
- A section in the file for the name of the project, one's own name and a link to one's portfolio

**Software Screenshots**
Having screenshots of the project in software is a very good way to convey that a model is fully game ready and modular / easy to adapt, as well as making it clear that you are comfterbal in that software

| Render Engines                 | Offline Rendering | Real-time Rendering | Showcase Rendering |
| :----------------------------- | :---------------: | :-----------------: | :----------------: |
| **Marmoset Toolbag**           |    ✅ Very Good    |     ✅Very Good      |         Ok         |
| **Marmoset Viewer**            |         -         |          -          |    ✅ Very Good     |
| **Unreal Engine**              |    ✅ Very Good    |     ✅ Very Good     |         Ok         |
| **Blender (Eevee / Cycles X)** |       Good        |        ❌ Bad        |         Ok         |
| **Sketchfab**                  |         -         |        Good         |    ✅ Very Good     |
| **Substance Painter**          |        Ok         |         Ok          |         Ok         |
| **Fusion**                     |                   |                     |                    |
| **Arnold**                     |                   |                     |                    |
| **Nuke**                       |                   |                     |                    |
| **Maya**                       |                   |                     |                    |
| **RenderMan**                  |                   |                     |                    |

>[!info] Marmoset rendering
>
>- Best for single characters and props, not that good for bigger environments
>- Not that good for complex lighting setups
>- Amazing showcase via [Marmoset Viewer](https://marmoset.co/toolbag/viewer/)
>
>**Marmoset Viewer:**
>- Some sites like ArtStation support the Marmoset Viewer API allowing for the 3D model to be viewed in the browser
>- The recipient needs to download a file and the Marmoset Viewer software

>[!info] Unreal Engine rendering
>
>- Great for characters and props as well as big environments
>- Very good for complex lighting setups andd ussing things like shadow catchers
>- The single best showcase for the simple reason that if people see it runs properly in a game engine they know it's well optimized

>[!info] Sketchfab rendering
>
>- Not good for complex lighting and environments can only handle smaller things
>- Models can be shared with just a link

>[!info] Blender rendering
>
>A good option for artworks.

## Things to Showcase

ToDo: link some example portfolios

These are some ideas of what one could include in one's portfolio showcase.

- Screenshot of Unreal Engine to show that it's fully game ready
- Screenshot of layer stack in Substance Painter to show that the textures can easily be adapted
- Screenshots of node setups in Substance Designer or the compositor as long as they are somewhat complex / relevant
- Screenshot of the project in the modeling software (make sure outlier is nice and organized). This can show things like baking groups. I recommend doing this more so if Maya was used and maybe not with Blender
- Screenshot of the high detail mesh in ZBrush. This is less needed and maybe not even representative of the final high as one might have done changes to the model in the modeling software
- Screenshot or render of the model with UV checker maps
- Screenshot of the character's game rig or control rig and maybe some weight painting. What one could also do is record a quick video of putting the character into different poses to showcase the weight paint
- One the main cover render itself one could add an Unreal Engine or Marmoset Toolbag logo watermark as long as it was actually rendered in that software. Artists often do this to show that a model is game ready or in general to show that they are experienced and know what their doing, as many beginner artists will opt to using the modeling software built-in renders (I'm not saying that the built-in renders aren't good or don't have their purpose, but that's the general stigma. An employer will most likely think more of a render if it has an Unreal or Marmoset watermark).
- An idle animation or any kind of slight movement to make the character feel more dynamic and interesting (of course if one is good at animating, then making a small animation is even better)

## Render Resolution & Aspect Ratio

Firstly, one should look at what device will be viewing the art. Most displays of PCs, laptops, phones, TVs except for tablets, will have an aspect ratio of exactly 16:9 or be close to that ratio (Most tablets have an aspect ratio of 4:3).

This means that when rendering, it's good to stick with one of these 16:9 resolutions.

- 1280x720 (HD)
- 1920 x 1080 (2k / Full HD)
- 2560 x 1440 (QHD / WQHD)
- 3840 x 2160 (4k / Ultra HD)
- 7680 x 4320 (8k / Ultra HD)

_(H=High, D=Definition, Q=Quad, W=Widescreen (a meaningless letter added for marketing purposes))_


Then it's important to look at what resolutions are even supported by sites. Mostly you'll want to render in your desired resolution and then downscale it to meet the resolution requirements set by the website one is uploading it to.

|-|ArtStation|ArtStation Pro|Sketchfab|YouTube|
|:--|:-:|:-:|:-:|:-:|
|**Max size**|10mb|||-
|**Max resolution**|400 x 400 - 1920 x 1080|400 x 400 - 10k x 10k ||8k
|**Max clip resolution**|2k|4k|-|-
|**Max clip length**|1 min|1 min|-|-
|**Max MarmosetViewer size**|15mb|50mb||-
|**YouTube iframe**|yes|yes||-


Your final art pieces renders should mostly not exceed 3840 × 2160 (this obviously totally depends on the situation, like if one wants to be able to use the art work on posters or 8K displays as a background). But for showcases, renders with higher resolutions are fine, so one can zoom in to see more details.

Note that even though an aspect ratio of 16:9 is good as a default, choosing the aspect ratio is an artistic choice in itself. For a landscape one would maybe want a more wide image, or if one is showcasing details of a character's armor, a square aspect ratio could look nice and better suit the purpose.

Lastly, there's a trick to circumvent resolution caps websites set for uploading art. By splitting the image into 2 or more commonly 3 parts, and displaying them above each other, one gets far more resolution with the downside of small gaps in between the images (this works best with portrait oriented images). 

[Here's](https://magazine.artstation.com/2017/01/maximizing-images-artstation/) ArtStation's take on it, and as they say don't use this method if you just want the image to display big, but if you want to be able to upload higher resolution images.

To achieve this split art work style, the resolutions would look like this:

- 5760 x 3240 (3 times 1920 x 1080 on top of each other)
- 7680 x 4320 (3 times 2560 x 1440 on top of each other)
- 5400 X 9600 (3 times 1800 x 3200 on top of each other)
- 11520 x 6480 (3 times 3840 x 2160 on top of each other)


## Turntable Animation Rendering

Turntable animations are a looping animation where a character does one full turn in a circle, perfectly looping back to the first frame. One could directly render out a video, but it's better to let the renderer render every frame as a separate image, so that if it crashes while rendering one doesn't have to start from the beginning again. Then, after all frames are rendered into a folder, one can stitch them together again.

When animating the rotation, it's important to make sure that the keyframe interpolation mode is set properly. In Blender for example, per default the animations has easing at the start and end (to fix in Blender: Keyframe Interpolation Mode > Linear). Also, make sure to start at frame 1 and not frame 0.


The amount of frames the animation should have depends on the duration that one full turn should take and the frame rate the animation will be rendered at:

||24 fps|30 fps|60 fps
|:-:|:-:|:-:|:-:
|**4 sec**|96|120|240
|**5 sec**|120|150|300
|**6 sec**|144|180|360
|**7 sec**|168|210|420
|**8 sec**|192|240|480


## Animation Rendering
To-Do


## Wireframe Rendering
Wireframe can either be pre rendered into the image or toggled in real-time renderer. The 3 best options for both offline rendering and real-time rendering wireframe is Marmoset Toolbag, Blender And Unreal Engine. I personally find Marmoset Toolbag / Unreal Engine best for real-time wireframe showcase and Blender / Marmoset Toolbag best for pre rendered wireframe showcase.


>[!info] Marmoset Toolbag wireframe rendering
>
>To-Do


>[!info] Blender wireframe rendering
>
>Blender doesn't actually have a proper way of rendering wireframe, but there's a hacky solution of using freestyle edges
>
>- Mark all edges as freestyle edges
>- Toggle only edge mark
>- Decrease thickness
>- Toggle freestyle edges in the render settings
>- Configure freestyle edges render settings until you like the wireframe output (e.g. line thickness, line color, line opacity)

>[!info] Unreal Engine wireframe rendering
>
>To-Do

## Render Passes
To-Do


## Rendering in Blender

Good Blender add-ons for rendering:
- [Camera Manager add-on](https://blenderartists.org/t/render-button-camera-manager-for-blender-2-81-update-07-01-2020-v0-3-7/1159414)

### Rendering all cameras with one click (Blender)
- Make camera active camera (Ctrl + 0)
- Place marker at desired frame in timeline (M)
- Bind active camera to marker (Ctrl + B)
- Repeat for all cameras on following frames


### Rendering Bloom (Blender)

This is a viable way of doing it, but often it's better to add bloom during post processing in the compositing software instead.

To-Do: Explain why EXR file format best for rendering bloom

Take into consideration that working with EXR files, especially Multilayer EXR is very advanced and should only be used if one is a bit more experienced. It comes with the benefit of more artistic control.

>[!info]- The workflow
>
>- Toggle background transparency (Render > Film > Transparent)
>- Set render output as Open EXR with RGBA, Float (full), PIZ / ZIP / DWAA
>- In the compositor output 2 EXRs, one with the image with a black background and one with transparency. Like in this node setup (renders 2 EXR files):
>  
>![[Pasted image 20230604225809.png]]
>
>- Pull the color EXR into PS with default [EXR IO](https://www.exr-io.com/) settings and split alpha on
>- Delete the A layer
>- Then Pull in the alpha EXR into PS with default [EXR IO](https://www.exr-io.com/) settings and split alpha off
>- Now bring both together
>- The color EXR has to have Linear Dodge(Add) blending mode and has to be above the alpha EXR
>- Finally put an exposure adjustment layer at the top and make Gamma Correction 0.51, because this is a 32 bit image Photoshop will not be smart enough to make things look correctly, so this layer always has to be at the top
>
>**Extra Info: **
>- Converting the image mode to 16 bit will remove all EXR features so while working it should stay at 32 bit
>- I've noticed that bloom can be more dominant than it was in the render


### Eevee Render Settings (Blender)
- Background Transparency on
- Bloom off (only turn it off right before rendering)

>[!info]- Color Management
>
>|Setting|Value
>|:--|:-:
>|**Display Device**|SRGB
>|**View Transform**|Filmic (more realistic and greater color range)
>|**Exposure**|0
>|**Gamma**|1
>|**Sequencer**|sRGB / Linear

>[!info]- Render Passes
>
>|Pass|Use|Explanation
>|:--|:-:|:-:
>|**Combined**|yes|All render passes
>|**Z / Depth**|yes|Great for atmospherics, volumetrics and object blending. Mist pass is the same as z/depth pass, just that the z/depth pass isn't configurable while the mist pass is. Mist pass depth adjustments in world panel, set start to 0 m and depth to the farthest point in scene. Also, z / depth pass isn't anti aliased
>|**Mist**|yes|(Same as Z / Depth)
>|**Normal**|no|
>|**Diffuse / Specular**|depends|
>|**Volume Light**||
>|**Transmittance**|-|Only needed when using volumetrics
>|**Scatter**|-|Only needed when using volumetrics
>|**Emission**|yes|Makes adding post bloom very easy and accurate
>|**Environment**|no|Very similar to alpha pass
>|**Shadow**|yes|Making shadows softer, essential when blending many renders
>|**Ambient Occlusion**|yes|Add depth to image
>|**Bloom**|no|Good for underwater scenes
>|**Cryptomatte**|no|

>[!info]- Render Output
>
>|Setting|Value
>|:--|:-:
>|**Output path**|Keep empty
>|**File Format**|OpenEXR Multilayer
>|**Color**|RGBA
>|**Color Depth**|Float (Full)
>|**Codec**|PIZ / ZIP(lossless) or DWAA (lossy), DWAA is one of the smallest image formats and looks almost identical to the lossless EXR codecs


## Rendering in Marmoset Toolbag

Create a couple of cameras and give them some names based on what shots they'll be for. Then switch to one of those cameras with the camera drop down list. Moving the viewport now, will affect the selected camera's shot. To see the render region of a camera, enable `Safe Frame` _(Camera Options > Lens > Safe Frame)_, increasing the `Frame Opacity` can help get a better understanding of how the final shot will look like.  

## Rendering with Marmoset Real-time Viewer
To-Do

In Marmoset, one can either offline render shots or go the real-time route with Marmoset Viewer.

- Add a camera, the camera location will be the default viewport view
- Adjust render settings. They are available in the camera tab, Lens and Post Effects but also in export tab. Note that some settings won't carry over into the viewer file, like chromatic aberration


## Compositing Software

|     Software      |           Area of use           |         Performance          |        Compositing features        |
| :---------------: | :-----------------------------: | :--------------------------: | :--------------------------------: |
|     Photoshop     |      📷 Image compositing       |          Very fast           |              The most              |
|  Affinity Photo   |      📷 Image compositing       |                              |                                    |
| Clip Studio Paint |      📷 Image compositing       |                              | Missing some more obscure features |
|      Blender      | ⚙️ In render engine compositing |             Slow             |                                    |
|  DaVinci Resolve  |      🎥 Video compositing       | The fastest video compositor |                                    |
|     Premiere      |      🎥 Video compositing       |          Very fast           |                                    |
|      Filmora      |      🎥 Video compositing       |                              |                                    |
|     Lightroom     |   🎞️ Bulk image compositing    |                              |                                    |

>[!info] Photoshop compositing
>
>Photoshop is by far the best for compositing images. If one plans on compositing EXR images in Photoshop, the [EXR IO](https://www.exr-io.com/) plugin is required. 
>
>

#### Adjustment Layers
To-Do

#### Post Processed Bloom
To-Do

## Sharing Online

>[!tip] Exporting tips
>
>- Make sure images are **JPG**
>- Make sure videos are **MP4** / **MOV** / **GIF** (GIF being quite big but providing a loop functionality. Some sites however also allow for MP4s to loop)
>- Wipe metadata if you care about that
>- In Photoshop use **Export** instead of **Save as** and export as **sRGB** not as **Embeded Color Profile**

### Showcasing Topology Count in Portfolio
The reason why it's common practice to state the model's topology count in one's portfolio, is to show how optimized it is. The value one states should be easy to grasp and as close as possible to the final count, which as a game artist is the topology count in the game engine. I recommend sticking with triangles (tris) as the unit when showcasing the topology count of different parts of the model and in addition once mentioning the total in engine vertices count of the entire model.

This is because most people are more accustomed to triangle count and will be more easily able to visualize the value. On the other hand, vertex count is also important as it can show that one nicely tried to avoid unnecessary UV and smoothing splits, but this can also be seen when showcasing the texture maps or a checker map on the model.

As mentioned above, it's good to show a breakdown of the topology count, often this includes things like hair, base mesh, clothing / accessories and the weapon. If the character is showcased on some vehicle or in some environment, then the topology count of that (if at all) is mentioned separately and never added up with that up the character.

>[!example]- Here's the full reasoning on why or why not to use a different topology units.
>
>**Face Count**<br>
>The general face count that modeling software often displays, which includes triangles, quads and n-gons is not a good way of measuring topology, as an n-gon could have infinitely many vertices.
>
>**Quad Count**<br>
>Even when we assume that the model is nicely quad based, this also not a good unit, as it means that in a game engine the actual topology count will 2x that value, as 20k quads is roughly 40k triangles. In most situations it's also impossible to actually have a full quads based model, as for good topology there occasionally need to be triangles.
>
>**Triangle Count (Tris)**<br>
>This unit is most commonly seen as it conveys the actual in engine topology count. It's also easy to figure out, as most modeling software will show a calculated triangle count. It has one problem however, game engines don't only require triangles, but also split the mesh topology at every UV and smoothing group split.
>
>**Vertices Count**<br>
>This is the objectively most correct unit, but is also a bit harder to measure, as looking at a model's vertex count in a modeling software will show a quite different value than the vertex count in a game engine. This is because game engines split the mesh wherever UV and smoothing group splits are.
>
>**Example**
>
>|  Object   | Faces | Triangles | Vertices|Vertices (Game Engine)
>| :-------: | ---- | -------- | ------ |---- |
>|   Cube (UV split on every edge)    | 6    | 12       | 8      |24|
>|  Sphere (UV split through center)   |   512   |     960     |     482   |514|
>| Base Mesh |      |          |        ||
>
>As one can also see in this example is that the amount of UV splits matters and can bring up the topology count by quite a considerable amount

