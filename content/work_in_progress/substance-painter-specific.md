## Resources

- [Adobe Documentation](https://helpx.adobe.com/substance-3d-painter/home.html)
- [[substance-painter| Substance Painter Hotkeys]]
### Videos & Articles

>[!example]- Substance painter videos 🎥
><div style="text-align: center;">
>
>**Introduction to Substance Painter**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RQ-hRk0WHJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Flipped Normals Substance Painter playlist**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLBX-X8mPyxIpM3dszDoS2V5KQ_cdqGsGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
></div>

>[!example]- General hand painting videos 🎥
><div style="text-align: center;">
>
>**hand Painting Dragon, Entire Process**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nnfkkvCvijc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Blizzard-Style Characters Process**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HwZ9Sj03cBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Riot Artist Hand Painting Environment**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5aueBosHDAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Hand Painting in Substance**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hLfKU4yrlFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Hand Painting Tifa in Blender**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PyNyFhx-f-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZbrZR-9iX_Q?si=K1A6BWmIO-w5R-JZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
></div>

### Channels

**General Texturing (with a focus on Substance Painter):**
- Royal Skies

**Hand Painted Texturing:**
- [Stylized Station's Channel](https://www.youtube.com/@StylizedStation)

### Artists
Hand painting inspiration:
- [Dzung Phung Dinh](https://www.artstation.com/phungdinhdung)
- [Jack Yan](https://www.artstation.com/xiaoyan24)
- Riot Games Artist's

## General Project Configuration

Substance Painter prep:
One can only import one single fbx/ obj file into substance painter, so all objects that should be textured together need to be exported in the same file. The materials the objects are assigned to, defines the texture set it will have in substance painter. 
## Update/ Reimport Textures, Mesh and Shaders
Resource updater:
https://www.youtube.com/watch?v=Zh6MxVW-VSk
https://www.youtube.com/watch?v=unzWvJsOtHE

Edit > Project Configuration


If one edits a texture map in photoshop

## Asset Shelf/ Library
https://helpx.adobe.com/substance-3d-painter/interface/settings/libraries-configuration.html
https://www.youtube.com/watch?v=NBGDo7Y28FE

| Asset path          | Location in Substance Painter                              | File Extensions |
| :------------------ | :--------------------------------------------------------- | --------------- |
| ...\materials       | Shelf Materials                                            | SBSAR, Images   |
| ...\smart-materials | Shelf Smart Materials                                      | SPSM            |
| ...\smart-masks     | Shelf Smart Masks                                          | SPMSK           |
| ...\effects         | Shelf Filters                                              | SBSAR           |
| ...\presets         | Shelf Brushes                                              | SPPR            |
| ...\alphas          | Shelf Alphas                                               | SBSAR, Images   |
| ...\textures        | Shelf Textures                                             | Images          |
| ...\procedurals     | Shelf Textures                                             | SBSAR, Images   |
| ...\colorluts       | Shelf Textures<br>& Display Settings > Color Profile       | Images          |
| ...\environments    | Shelf Environments<br>& Display Settings > Environment Map | EXR, HDR        |
| ...\emitters        | Properties > ??? (Used for physics tools)                  | Scripts (PKFK)  |
| ...\export presets  | ?                                                          | SPEXP           |
| ...\generators      | Add Effects on Layer > Generator                           | SBSAR           |
| ...\presets         | ?                                                          | SPPR, ABR       |
| ...\receivers       | ?                                                          | Scripts (PKFK)  |
| ...\shaders         | ?                                                          | GLSL            |


## Environment & Lighting
ToDo


## Wireframe (rename)

Display Settings > Mesh Wireframe

Preview Cursor Modes Full Preview, Brush Outline and Cursor


## PBR / sRGB Validation

PBR validation is an important process to ensures that textures from Substance Painter, carry over accurately to game engines like Unreal, the following needs to be taken into consideration:

- Base color should be devoid of lighting information
- Dark values should not be lower than 30 sRGB (tolerant range) or 50 sRGB (strict range)
- Bright values should not be higher than 240 sRGB

In addition, the roughness should also not be too extreme:

- Smooth values should not be lower than 0.05
- Rough values should not be higher than 0.95

In Substance Painter, tall of his can be visually validated with the PBR Validate filter. Simply pull it from the asset shelf to the top of the layer stack of every texture set.

>[!example]- PBR validation in context of game engines (video, articles)
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gh2wROK7ceE?si=I6W2s8YM26MwNP9v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>Here are some great articles:
>- https://www.racoon-artworks.de/blog_PBRfromrulestomeasurements.php
>- https://80.lv/articles/validating-pbr-materials-in-ue4/




## Color Blocking

polygon fill tool
## Filters
[Filters](https://helpx.adobe.com/substance-3d-painter/features/effects/filter.html) are one of the main ways, to modify the appearance of layers surface details. There are effect filters and processing filters. Filters like "MatFinish Hammered" are effect filters, while examples of processing filters are "Blur" or "Color Correct".

>[!example]- Filter overview (videos)
>
>**Quick filter overview**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z_UvIA7Zr_s?si=3wsL2DVYeX54hZEe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Overview of most of the filters and what to use them for**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VbiYxRxFy-U?si=IWJQH0sFK9d86Bf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

>[!example]- Creating custom filters in Substance Designer (video)
>
> <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Py7fGlU7DGY?si=MoXdkJd4X9Vb5-x2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
## Generators
[Generators](https://helpx.adobe.com/substance-3d-painter/features/effects/generator.html) can create things like edge wear through the use of masks and the help of topology and baked maps like curvature, cavity, thickness and AO. When adjusting generators, it can be helpful to switch between the Material and Base Color channels to get a clear overview of what the generator looks like.

>[!example]- Using generators (videos)
> 
>**Quick generator overview**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4CFd5HNWf9g?si=aTtz88s9IiwXBOi3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Using the mask builder generator**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ngJVNRJmG1g?si=fwrXFEz_boIzysiB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>Add edge wear (generators) around normal and alpha stamps
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JkZXDLsxByQ?si=lEuPSc4crk7KfBaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Materials

Smart vs normal materials
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a25UX1YH20M?si=ZYvCmLNgQCJZM4Vh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Anchor Points

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cfjKSZqY8Cg?si=_dEJ8jOi75sFiVZf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NAFlgkUubD0?si=j-mO7WvPtz8-vfbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Projection & Stencil

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U78NSxMQpnA?si=SD8dMWNfWxl9zrGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QSFMe5Q06qo?si=Vf4-jX2l4CzL6gTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## Hand Painting
- Use very natural light with no colors or paint only in base color mode
- combinding pbr and hand painted can be very cool
- 

To paint the texute map in photoshop, also take a screenshot of the UV layout and put it on a layer above in photoshop for quick reference of where what parts are

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Nid0b-eyFjY?si=_ZqGOGPmn_xVvoMv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Detail

Avoid adding detail in software like ZBrush at all cost more on that in this video. https://www.youtube.com/watch?v=r3Wt36QwkHg

Some of the reasons are:
- The underlaying mesh one sculpts on has to be super high detail
- It's very hard to get any sort of color id map from things like seems for example
- Creating the detail in such a way that it works in ZBrush is very time consuming and ZBrush's terrible UI  and conveluted options don't help with that.
- Details in zbrush are quite destructive, yes one can constaly use layers and morphs, but that's a terrible workflow
- ZBrush's previews of alphas and detail brushes in the lightbox menu is so much worse than in Substance Painter


---


- tri planar helps avoid seams
- never draw directly on a mask, always add a paint layer (maybe name it) and draw on that instead
- when masking one can invert the mask, which will also invert it's paint layers, or only invert the background of the base mask

https://helpx.adobe.com/substance-3d-painter/technical-support/configuring-pens-and-tablets.html





---
# 🚧🚧🚧

>[!example]- Hand painted texturing (videos, playlists, channels)
><div style="text-align: center;">
>
>**hand Painting Dragon, Entire Process**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nnfkkvCvijc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Blizzard-Style Characters Process**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HwZ9Sj03cBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Riot Artist Hand Painting Environment**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5aueBosHDAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Hand Painting in Substance**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hLfKU4yrlFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Hand Painting Tifa in Blender**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PyNyFhx-f-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
></div>
>
>**Channels:** 
>


## Texturing in Substance Painter
### Importing
Start by creating a new file.
  - Select model to use for texturing
  - Document resolution defines the default texture resolution and can be changed at any time
  - Normal map type mostly should be OpenGL, but full list is 
  - If the maps were baked in another software they can be selected here or added later
  - If one uses UDIMs the setting must be toggled here

### Quick Bake maps
After importing the model into Substance Painter, the maps need to be baked, so materials can use them. In the baking menu, make sure to change the Color ID map to Vertex Colors or Material Color. Also disable all maps that have already been baked in Marmoset.


### Masking

#### Geometry masking
- Click the square box beside a layer to enter geometry mask mode
- One can select by using the viewport or by selecting it in the right sub menu
- Selecting in the viewport is done by clicking LMB or by holding and pulling LMB. This can also be inversed with CTRL. One can also deselect all but the selected by alt clicking in the right sub menu. Other selection options are also located under the three lines at the top of the right sub menu.
- There are different mask types: By Mesh Names, by UV Tiles / UDIMs
- The number in front of the geometry mask icon indicates the amount of objects that are visible in the mask
- Non-destructive, so when one paint on an area and then disables it the painted data isn't lost
- To exit, click on the layer
- With the hide / ignore excluded geometry button in the top bar all other objects will be hidden from viewport and UV space (Alt + h)

#### Color ID mask
To-Do
a
#### Black and white mask
To-Do

### Layer Stack Order
To-Do


https://www.youtube.com/watch?v=BJweDiKLgBs