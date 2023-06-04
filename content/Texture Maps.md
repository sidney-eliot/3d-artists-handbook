---
title: "Anime Style Characters"
enableToc: false
---

# Table of Contents
- [Overview](#Overview-)
- [Maps](#Maps-)
- [Utility Maps](#Utility-Maps-)
- [Unused Maps](#Unused-Maps-)

# Overview [^](#table-of-contents)
Texture maps are commonly referred to as "map", "skin", "atlas" or "trim sheet".

These textures are for the PBR metallic workflow. This texture workflow has replaced the outdated specular workflow. The specular workflow should not be used however when using materials one can still come across this outdated workflow so it isn't bad to know how it works, it also is quite easy to convert a specular workflow material to a metallic workflow material.

- Amazing breakdown of all the map types by Marmoset [here](https://marmoset.co/posts/toolbag-baking-tutorial/#maptypes)
- Polycount also covers map types [here](http://wiki.polycount.com/wiki/Texture_types)

# Maps [^](#table-of-contents)
### Base Color Map
```
known as: Color, Base Color, Albedo, Diffuse
contains: sRGB colors
controls: All the base colors
more info: Use multiply and hue/ Saturation value nodes
color space: sRGB
```
### Metallic Map
```
known as: Metallic, Metalness, Metal, Albedo(Metal)
contains: Gray scale
controls: Reflectiveness
more info: White is fully metallic and black is not metallic
color space:
```
### Roughness Map
```
known as: Roughness, Glossy(inverted), Smoothness(inverted), Micro Surface  
contains: Gray scale
controls:
more info: White is rough and black is shiny
color space: Non-color
```
### Normal Map
```
known as: Normal
contains: Vectors and Offsets
controls: Controls the Normals X,Y & Z(vector) values per pixel 
more info: Alters the shading and thus can fake detail
color space: Linear, Non-color
```

### Ambient Occlusion Map
```
known as: AO, Ambient Occlusion, Occlusion
contains: 
controls: Lighting info
more info: Used in game engines, the AO map can be combined with he albedo map 
```
### Opacity Map
```
known as: Opacity, Alpha, Transparency
controls: Alpha black is transparent and white is opaque or when
the texture has alpha then alpha is transparent and no alpha is opaque.
more info:
color space: Non-color
```
### Emission Map
```
known as: Emission, Emissive, Glow, Self-illumination
controls:
more info:
color space:
```

### Subsurface Scattering Map
```
known as: Subsurface Scattering, SSS, Blood map, Vein map
contains:
controls:
more info: Subsurface Scattering maps fake the behavior of light bounce inside of a semitranslucent surface, such as skin or wax. 
color space:
```
### Subdermal Map
```
known as: Subdermal, Blood map, Vein map, Skin shaders
contains:
controls:
more info: Subdermal maps are used in skin shaders, representing the layer underneath skin: fatty tissue, blood tone and blood vessels.
color space:
```

# Utility Maps [^](#table-of-contents)
### Mask
```
known as: Mask, Control map, Utility map
contains: grayscale or only black and white (Depending on the purpose)
controls: It has no set purpose, can control anything
more info: It can be used for many things like for example and alpha map 
with only a black and white state that decides if something is rendered, or for tattoos/body paint.
color space: Non-color
```
### Color ID
known as: Color ID, Object ID, Material ID, ID
### Curvature
### Thickness
### Position


# Unused Maps [^](#table-of-contents)

### Diffuse Map
```
known as: Diffuse, Diffuse Albedo
controls: All base colors and shading
more info: Outdated map, was split into Albedo map and ambient occlusion map
```
### Specular
```
more info: Outdated map, was used with the specular workflow which has been retired by the metallic workflow
```
### Bump Map
```
known as: Height, Displacement, Bump
contains: Gray scale
controls: High and low points of geometry(white high, black low)
more info: Has 3 workflows. 1 Bump Normal, 2 Bump Sub D, 3 Bump displacement. 
1 Best performance but flat, 
2 worse performance alters geo, 
3 alters geo looks best but terrible render times. Can be combined with normal map. 
Only use when making displacement through mixing noise. 
You should only ever use bump maps if you are using pre made textures which are bump.
https://youtu.be/_dU3DONwSzU
```

# ⚠ Sort In ⚠
# The making of texture maps
Res: 512, 1024, 2048, 4096, 8192

- Painting: Substance Painter, Quixel Mixer, Marmoset Toolbag, 3D Coat, PS/CSP/..., Blender texture painting
- Procedural: Substance Designer, Blender nodes, Material Maker
- Other: Materialize, Marmoset Toolbag

### Making Base Color Map using a photography
The color map should not contain any shadows or ambient occlusion. Every photograph contains this so the first step is to remove them.

<details>
<summary>Example</summary>

Left Bad | Right Good

<img src="https://i.imgur.com/xuSHJsS.jpg" height="250">
</details>

#### Removal method 1
- Make an inverted Luminance Map of the Image, Desaturate it and invert it.
- Clone the layer and use the “Soft Light” blend mode on that layer.

#### Removal  method 2

### Making Base Color Map
- Chose a resolution (That has a factor of 2: 1, 2, 4,...)
- UV unwrap the object

