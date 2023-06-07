---
title: "Image Extensions"
enableToc: false
---

## Great File Formats for Textures

>[!info] Open EXR
>
>- HDR and linear
>- Small size
>- Fast render time
>- Premultiplied Alpha
>- All render passes
>- 16bit (acceptable quality)/ 32bit (increased render time) 
>- PIZ variant: lossless compression (bigger size but better quality)/ DWAA variant: lossy compression (smaller size but worse quality)

>[!info] TGA
>
>- Small size
>- Straight Alpha
>- 16bit RGBA (acceptable quality)/ 24bit RGB (no alpha)/ 32bit RGBA (increased render time) 
>- Raw (no compression)/ Lossless REL compression (works best on logos and cartoons)

>[!info] PNG
>
>- Small size
>- Extremely slow render time
>- Straight Alpha
>- 16bit RGBA/ 24bit RGB (no alpha)/ 32bit RGBA
>- RAW/ Lossless compression/ Lossy compression

>[!info] TIFF
>
>- Straight Alpha, Premultiplied Alpha

## Software Support

|Software|Supported file formats
|:--|:-:
|**Marmoset Toolbag** (Export)|TGA(8bit)/ PNG(8bit, 16bit)/ PSD (8bit, 16bit, 32bit)
|**Blender**|All
|**Substance Painter**|
|**ZBrush**|
|**Unreal Engine**|
|**Maya**|
|**3D-Coat**|
|**Photoshop**|8bit, 16bit, 32bit
|**Clip Studio Paint**| only 8bit

## Factors


### Compression/ Encoding
Compression can be lossless or lossy. Lossless allows to reconstruct the original values as is. Lossy compression leverages that the human perception doesn't notice slight quality degradation. It can therefore reach higher compression ratios. Lossless vs lossy does not influence the save speed but compression speeds up save time. 

### Alpha (Occlusion/ Transparency/ Opacity)
#### Straight Alpha/ Unassociated Alpha/ Un-matted Alpha
- Can't model pixels that are simultaneously emissive and semi-transparent

#### Premultiplied Alpha/ Associated Alpha/ Matted Alpha
- Can store pixels that are simultaneously emissive and semi-transparent
- Suitable for VFX/Compositing

### Comparison
⚠ Take this image with a grain of salt

![[Pasted image 20230604224021.png]]

## Links
- https://blender.stackexchange.com/questions/148231/what-image-format-encodes-the-fastest-or-at-least-faster-png-is-too-slow
- https://devtalk.blender.org/t/why-are-there-options-for-non-color-and-raw-color-spaces-for-image-textures-arent-they-the-same/9991/8
- https://www.exr-io.com/features/
- https://www.pluralsight.com/blog/film-games/vfx-file-formats-you-need-to-know