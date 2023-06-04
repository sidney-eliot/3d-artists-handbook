---
title: "Rendering/ Compositing/ Uploading"
enableToc: false
---

# Table of Contents
- [Rendering](#rendering-)
- [Compositing](#compositing-)
- [Export/ Upload](#export-upload-)
- [Great Showcase Examples](#great-showcase-examples-)

# Rendering [^](#table-of-contents)
## Where to Render
|Renderer|Rendering|Real-Time Rendering|Showcase|Notes
|:-:|:-:|:-:|:-:|:-:
|Marmoset Toolbag|Very Good|Very Good|Very Good|Best for single models/ characters, not that good for environments. Also not good for complex lighting. Amazing showcase because of Marmoset Viewer
|Unreal Engine|Very Good|Very Good|Very Good|Good for characters/ props but also environments and complex lighting
|Blender|Good|Bad|Ok|A good option for artworks
|Sketchfab|x|Good|Very Good|Not good for complex lighting and environments can only handle smaller things
|Substance Painter|
|Fusion|
|Arnold|
|Nuke|
|Maya|

## Upload Limitations
|-|Art Station User|Art Station Pro User|Sketchfab User|Youtube
|:-:|:-:|:-:|:-:|:-:
|Max size (mb)|10mb|||-
|Res (px)|400 x 400 - 1920 x 1080|400 x 400 - 10k x 10k ||8k
|Max clip res (px)|2k|4k|-|-
|Max clip length (min)|1min|1min|-|-
|Max MarmosetViewer size (mb)|15|50||-
|Embeding YT link|yes|yes||-

## Resolutions
### Common Display ratio(16:9)
- 1920 x 1080 (2k/Full HD)
- 2560 x 1440 (QHD/WQHD)
- 3840 x 2160 (4k/Ultra HD)
- 7680 x 4320 (8k/Ultra HD)
- 15360 x 8640 (16k)

Try to not go above 3840 × 2160 res for final art pieces, for showcases higher is fine.

### Triple Image
This is a workaround for getting better res if you just want bigger images look [here](https://magazine.artstation.com/2017/01/maximizing-images-artstation/).

Split render into 3 separate images to see more detail without having to zoom, and bypass file size/res limits.

- 5760 x 3240 (1920 x 1080 * 3)
- 7680 x 4320 (2560 x 1440 * 3)
- 5400 X 9600 (1800 x 3200 *3)
- 11520 x 6480 (3840 x 2160 * 3)

## Turntable Animation
This can be done by rendering the sequence as a video by stitching the images together after rendering. Stitching is better because the render can crash.
||24fps|30fps|60fps
|:-:|:-:|:-:|:-:
|**4sec**|96f  |120f |240f
|**5sec**|120f |150f |300f
|**6sec**|144f |180f |360f
|**7sec**|168f |210f |420f
|**8sec**|192f |240f |480f

In Blender:
- Keyframe Interpolation Mode > Linear
- Start at frame 1 (???)

## Wireframe Rendering
Best with marmoset viewer. Marmoset can also render wireframe as texture maps. Blender can also render wireframe by marking every edge as a freestyle edge and toggling that in the render settings.

<details>
<summary>Blender wireframe rendering</summary>
- Mark all edges as freestyle edges
- Toggle only edge mark
- Decrease thickness

</details>


## Rendering in Blender
### Camera Manager Addon
[Camera Manager addon](https://blenderartists.org/t/render-button-camera-manager-for-blender-2-81-update-07-01-2020-v0-3-7/1159414)

### Rendering all cameras with one click
- Make camera active camera (Ctrl + 0)
- Place marker at desired frame in timeline (M)
- Bind active camera to marker (Ctrl + B)
- Repeat for all cameras on following frames


### Eevee Render Settings
####
- Background Transparency on
- Bloom off (only turn it off  right before rendering)

#### Color Management
|Setting|Value
|:-:|:-:
|Display Device|SRGB
|View Transform|Filmic (more realistic/ greater color range)
|Exposure|0
|Gamma|1
|Sequencer|sRGB/Linear

### Render Passes
|Passes|Use|Explanation
|:-:|:-:|:-:
|Combined|yes|All render passes
|Z/ Depth|yes|Great for atmospherics/ volumetrics and object blending. Mist pass is the same as z/depth pass just that the z/depth pass is not configureable while the mist pass is. Mist pass depth adjustments in world panel, set start to 0m and depth to farthest point in scene. Also z/ depth pass isn't anti aliased
|Mist|yes|" "
|Normal|no|
|Diffuse/ Specular|yes/ no|
|Volume Light||
|Transmittance|-|Only needed when using volumetrics
|Scatter|-|Only needed when using volumetrics
|Emission|yes|Makes adding post bloom very easy and accurate
|Environment|no|Very similar to alpha pass
|Shadow|yes|Making shadows softer, essential when blending many renders
|Ambient Occlusion|yes|Add depth to image
|Bloom|no|Good for underwater scenes
|Cryptomatte|no|

### Rendering Output
|Setting|Value
|:-:|:-:
|Output path|Keep empty
|File Format|OpenEXR Multilayer
|Color|RGBA
|Color Depth|Float (Full)
|Codec|PIZ/ ZIP(lossless) or DWAA (lossy), DWAA is one of the smallest image formats and looks almost identical to the lossless EXR codecs


### Rendering (Bloom in Compositing Software)


### Rendering (Bloom in Blender)

This is a viable way but I don't use it anymore and use the one above instead. This way adds the bloom in blender instead doing it in the compositing software.

<details>
<summary>Bloom in Blender</summary>



Take into consideration that working with EXR files especially Multilayer EXR is very advanced (at the benefit of more artistic control) and should only be used if one is a bit more experienced.

- Toggle background transparency under Render>Film>Transparent
- Set render output as Open EXR with RGBA, Float (full), PIZ/ ZIP/ DWAA
- In the compositor output 2 EXRs, one with the image with back background and one with transparency, like in this image (renders 2 EXR files)
<details>
<summary>Node Setup</summary>
<img src="https://i.imgur.com/ru3WTmy.png" width="800">
</details>

- Pull the color EXR into PS with default [EXR IO](https://www.exr-io.com/) settings and split alpha on
- Delete the A layer
- Then Pull in the alpha EXR into PS with default [EXR IO](https://www.exr-io.com/) settings and split alpha off
- Now bring both together
- The color EXR has to have Linear Dodge(Add) blending mode and has to be above the alpha EXR
- Finally Put a exposure adjustment layer at the top and make Gamma Correction 0.51, because this is a 32bit image Photoshop will not be smart enough to make things look correctly so this layer always has to be at the top

Extra Info: 
- Converting the image mode to 16bit will remove all EXR features so while working it should stay at 32bit
- I've noticed that bloom can be more dominant than it was in the render

</details>

## Rendering in Marmoset
## Rendering with Marmoset Real time Viewer
- Add a camera, camera spawn location is viewport view
- Adjust render settings. They are available in the camera tab, Lens and Post Effects but also in export tab. Note that some settings won't carry over into the viewer file like chromatic aberration


# Compositing [^](#table-of-contents)
## Where to Composite
- Photoshop (the best)
- Clip Studio Paint
- Blender (very slow)
- DaVinci Resolve (The fastest for animations)
- Premiere (For animations)
- Filmora (For animations)

Photoshop is by far the best, however one needs the [EXR IO](https://www.exr-io.com/) plugin when one want's to work with .EXR images

## Adjustment Layers

# Export/ Upload [^](#table-of-contents)
- Make sure image is a JPG
- Make sure video is a MP4/ MOV/ GIF
(GIF being quite big but providing a loop functionality, however many sites also allow for MP4's to loop)
- Wipe metadata
- Use export instead of save as 
- Export as sRGB not as `Embeded Color Profile`



# Great Showcase Examples [^](#table-of-contents)
[Showcase playlist](https://www.youtube.com/playlist?list=PLveghVPT3X7bzbViFXOMNKP5IQqLDzr1f)

### Turn Table Animation
- https://www.artstation.com/artwork/zOoGNw

### Marmoset Viewer
- https://www.artstation.com/artwork/31kvv

### Technical Showcase
- https://www.artstation.com/artwork/B1PLOz

