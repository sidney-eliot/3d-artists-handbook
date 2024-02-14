---
title: "🖼️ Image Extensions"
enableToc: true
---

## Great File Formats for Textures

>[!info] Open EXR
>
>- HDR and linear
>- Small size
>- Fast render time
>- Premultiplied Alpha
>- All render passes
>- 16 bit & 32 bit (increased render time) 
>- PIZ variant: lossless compression (bigger size but better quality) or DWAA variant: lossy compression (smaller size but worse quality)

>[!info] TGA
>
>- Small size
>- Straight Alpha
>- 16 bit RGBA & 24 bit RGB (no alpha) & 32 bit RGBA (increased render time) 
>- Raw (no compression) or Lossless REL compression (works best on logos and cartoons)

>[!info] PNG
>
>- Small size
>- Extremely slow render time
>- Straight Alpha
>- 16 bit RGBA or 24 bit RGB (no alpha) or 32 bit RGBA
>- RAW or Lossless compression or Lossy compression

>[!info] TIFF
>
>- Straight Alpha, Premultiplied Alpha

## Software Support

|Software|Supported file formats
|:--|:-:
|**Marmoset Toolbag** (Export)|TGA(8 bit), PNG(8 bit, 16 bit), PSD (8 bit, 16 bit, 32 bit)
|**Blender**|All
|**Substance Painter**|
|**ZBrush**|
|**Unreal Engine**|
|**Maya**|
|**3D-Coat**|
|**Photoshop**|8 bit, 16 bit, 32 bit
|**Clip Studio Paint**| only 8 bit

## Factors

There are 3 factors to compare when choosing between image formats:

- [[glossary#Bit Depth|Bit Depth]]
- Compression & Encoding
- Alpha (Occlusion / Transparency / Opacity)


### Compression & Encoding
Compression can be lossless or lossy. Lossless allows to reconstruct the original values as is. Lossy compression leverages that the human perception doesn't notice slight quality degradation. It can therefore reach higher compression ratios. Lossless vs. lossy doesn't influence the save speed, but compression speeds up save time. 

### Alpha (Occlusion / Transparency / Opacity)

>[!info] Straight Alpha / Unassociated Alpha / Un-matted Alpha
>
>- Can't model pixels that are simultaneously emissive and semi-transparent

>[!info] Premultiplied Alpha, Associated Alpha & Matted Alpha
>
>- Can store pixels that are simultaneously emissive and semi-transparent
>- Suitable for VFX / Compositing

### Comparison
🚧 Take this image with a grain of salt

![[Pasted image 20230604224021.png]]

## Links
- https://blender.stackexchange.com/questions/148231/what-image-format-encodes-the-fastest-or-at-least-faster-png-is-too-slow
- https://devtalk.blender.org/t/why-are-there-options-for-non-color-and-raw-color-spaces-for-image-textures-arent-they-the-same/9991/8
- https://www.exr-io.com/features/
- https://www.pluralsight.com/blog/film-games/vfx-file-formats-you-need-to-know