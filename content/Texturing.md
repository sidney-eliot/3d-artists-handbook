---
title: "🖌️Texturing"
enableToc: true
---

## Texturing Software
[Substance Painter](https://www.adobe.com/products/substance3d-designer.html), [Quixel Mixer](https://quixel.com/mixer) and [Marmoset Toolbag](https://marmoset.co/toolbag/texturing/) are the best **layer based texturing software** (these are regarded as the power tool software for texturing). [3D Coat](https://3dcoat.com/), [Photoshop](https://www.adobe.com/products/photoshop.html), [ZBrush](https://pixologic.com/features/) as well as [Substance Painter](https://www.adobe.com/products/substance3d-painter.html) are the best for **hand painted texturing** (Blender can also work for hand painted texturing, but the it's texturing toolkit currently quite primitive). There's also [Substance Designer](https://www.adobe.com/products/substance3d-designer.html) but that is allot more complex, it's used to make **procedural materials**. A good alternative to Substance Designer is [Material Maker](https://www.materialmaker.org/).

Don't use Blender's shader nodes to texture models if you want texture maps for the model. This is because currently there's no way of exporting Blenders shader nodes to a proper baker, and baking in Blender is a nightmare (So only consider using Blender's shader nodes for when rendering in Blender).



## Layer Based Texturing 
ToDo

>[!example]- Layer Based Texturing (videos, playlists, channels)
>
>**Introduction to Substance Painter**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RQ-hRk0WHJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Flipped Normals Substance Painter playlist**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLBX-X8mPyxIpM3dszDoS2V5KQ_cdqGsGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
>**Quixel Mixer introduction**
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/azPwrgrStS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Hand Painted Texturing
ToDo

>[!example]- Hand Painted Texturing (videos, playlists, channels)
>
>**Channels:**
>- [Stylized Station's Channel](https://www.youtube.com/@StylizedStation)
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


## Texturing in Substance Painter
### Importing
Start by creating a new file.
  - Select model to use for texturing
  - Document resolution defines the default texture resolution an can be changed at any time
  - Normal map type mostly should be OpenGL but full list is 
  - If the maps where baked in another software they can be selected here or added later
  - If one uses UDIMs the setting must be toggled here

### Quick Bake maps
After importing the model into Substance Painter the maps need to be baked, so materials can use them. In the baking menu make sure to change the Color ID map to Vertex Colors or Material Color. Also disable all maps that have already been baked in Marmoset.


### Masking

#### Geometry masking
- Click the square box beside a layer to enter geometry mask mode
- One can select by using the viewport or by selecting it in the right sub menu
- Selecting in the viewport is done by clicking LMB or by holding and pulling LMB. This can also be inversed with ctrl. One can also deselect all but the selected by alt clicking in the right sub menu. Other selection options are also located under the three lines at the top of the right sub menu.
- There are different mask types: By Mesh Names, by UV Tiles/ UDIMs
- The number in front of the geometry mask icon indicates the amount of objects that are visible in the mask
- Non destructive, so when one paint on a area and then disables it the painted data isn't lost
- To exit, click on the layer
- With the hide/ ignore excluded geometry button in the top bar all other objects will be hidden from viewport and UV space (Alt + h)

#### Color Id mask
ToDo

#### Black and white mask
ToDo

### Layer Stack Order
ToDo

## Texturing in 3D Coat
ToDO