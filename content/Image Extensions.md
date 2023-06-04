---
title: "Image Extensions"
enableToc: false
---

# Table of Contents
- [Best Formats](#Best-Formats-)
- [Factors](#Factors-)
   - [Bit Depth](#Bit-Depth)
   - [Compression/ Encoding](#Compression-Encoding)
   - [Alpha (Occlusion/ Transparency/ Opacity)](#Alpha-Occlusion-Transparency-Opacity)
- [Links](#Links-)


# Best Formats [^](#table-of-contents)

**Open EXR:**
- HDR and linear
- Small size
- Fast render time
- Premultiplied Alpha
- All render passes
- 16bit (acceptable quality) | 32bit (increased render time) 
- PIZ variant: lossless compression (bigger size but better quality) | DWAA variant: lossy compression (smaller size but worse quality)

**TGA:**
- Small size
- Straight Alpha
- 16bit RGBA (acceptable quality) | 24bit RGB (no alpha) | 32bit RGBA (increased render time) 
- Raw (no compression) | Lossless REL compression (works best on logos and cartoons)

**PNG:**
- Small size
- Extremely slow render time
- Straight Alpha
- 16bit RGBA | 24bit RGB (no alpha) | 32bit RGBA
- RAW | Lossless compression | Lossy compression

**TIFF:**
- Straight Alpha, Premultiplied Alpha

### Software Support
- _**Marmoset Toolbag (Export):**_ TGA(8bit), PNG(8bit, 16bit), PSD (8bit, 16bit, 32bit)
- _**Blender:**_ All
- _**Substance Painter:**_
- _**ZBrush:**_
- _**Unreal Engine:**_
- _**Maya:**_
- _**3D-Coat:**_
- _**Photoshop:**_ 8bit, 16bit, 32bit
- _**Clip Studio Paint:**_ only 8bit

# Factors [^](#table-of-contents)
## Bit Depth
Determines how much information the image can actually hold, which directly influences the dynamic range your image can have. Naturally if you render the frames you don't want to discard a majority of the information, therefore a higher bit depth is desirable. Higher bit depths come with increased render time and bigger file size. Often one can tell if there's an alpha channel by looking at the bit depth (8bit RGBA|16bit RGBA|24bit RGB|32bit RGBA). For example a 32bit depth images mostly consist of 8bit Red channel, 8bit Green channel, 8bit Blue channel and 8bit Alpha channel.

Try to go for 32bit even if you want the final result to be a lower bit depth, correctly converting to lower bit depth is described above. Weather the texture is only for one object or a texture atlas, should not influence which bit depth to choose. Also note that the bit depth gets exponentially bigger.

Maximum amount of unique values per channel:
- 1bit Image (Integer): `2 Tone Values` -> `Black/0 and White/1   `       
- 8bit Image (Integer): `256 Tone Values` -> `256 Reds x 256 Greens x 256 Blues` = **`16.7 Million RGB Values`**
- 16bit Image (Integer/Float): `65,536 Tone Values` -> `65,536 Reds x 65,536 Greens x 65,536 Blues` = **`281 Trillion RGB Values`**
- 32bit Image (Integer/Float): `4,294,967,295 Tone Values`

So 16bit is 250 times bigger than 8bit and 32bit is 15 million times bigger than 16bit. Though the file size gets progressively bigger, it does not increase by that margin. 

### So What to Choose?
Humans can only distinguish between 2 and 10 million colors, so we can't even see all colors of 8 bit. This means that a an image exported in 8 bit or 16 bit will always look identical. The ONLY advantage in using anything above 8 bit is for editing photos and only for the process of editing and not the export. For 2D artists 8bit will always be enough and most drawing software doesn't even support more than 8 bit.

[Video explaining bit depth](https://www.youtube.com/watch?v=Y-wSHpNJs-8)

## Compression/ Encoding
Compression can be lossless or lossy. Lossless allows to reconstruct the original values as is. Lossy compression leverages that the human perception doesn't notice slight quality degradation. It can therefore reach higher compression ratios. Lossless vs lossy does not influence the save speed but compression speeds up save time. 

## Alpha (Occlusion/ Transparency/ Opacity)
### Straight Alpha/ Unassociated Alpha/ Un-matted Alpha
- Can't model pixels that are simultaneously emissive and semi-transparent

### Premultiplied Alpha/ Associated Alpha/ Matted Alpha
- Can store pixels that are simultaneously emissive and semi-transparent
- Suitable for VFX/Compositing

## Comparison
⚠ Take this image with a grain of salt

![[Pasted image 20230604224021.png]]

# Links [^](#table-of-contents)
- https://blender.stackexchange.com/questions/148231/what-image-format-encodes-the-fastest-or-at-least-faster-png-is-too-slow
- https://devtalk.blender.org/t/why-are-there-options-for-non-color-and-raw-color-spaces-for-image-textures-arent-they-the-same/9991/8
- https://www.exr-io.com/features/
- https://www.pluralsight.com/blog/film-games/vfx-file-formats-you-need-to-know