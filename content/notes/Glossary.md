---
title: "Glossary"
enableToc: true
---


## Visual

### Ambient Occlusion

Ambient Occlusion or AO is a shading and rendering technique used to calculate how exposed each point in a scene is to ambient lighting.
It shows subtle variations in lighting and helps your eyes detect surface details that would otherwise be washed out or unnoticeable. Softens the overall lighting in your scene.

- Adds depth
- Alternative to ray tracing occlusion, however ray tracing occlusion is better
- Requires high res light maps to look good

Example:

![[tdmMtT4.png|600]]

|Ambient Occlusion OFF|Ambient Occlusion ON
|:-:|:-:
|![[AO_off_1.png]]|![[AO_on_1.png]]
|![[AO_off_2.png]]|![[AO_on_2.png]]


### Ray Tracing: Ray Traced Shadows/ Reflections/ Lighting

Ray Tracing is a rendering method that simulates the physical behavior of light rays. It allows accurate rendering of things like shadows, reflections, highlights, and bounced light. However ray tracing doesn't make everything better and sometimes it's good to turn off ray traced shadows and light and only keep ray traced reflections on.

- Only works on NVIDIA RTX and some GTX series cards with DirectX ray tracing support
- Enables ray traced results for shadows, AO, reflections, translucency and global illumination

Example:

![[20230603110116.png|600]]
![[20230603123401.png|600]]

Example of ray tracing making lighting and shadows worse:

![[20230603111140.png|600]]


### Anisotropic Filtering

Anisotropic or AF is a method of enhancing the image quality of textures on surfaces that are at oblique viewing 
angles with respect to the camera
Like bilinear and trilinear filtering, anisotropic filtering eliminates aliasing effects.

Example:

![[20230603111310.png|600]]


### Screen Space Refraction

- Adds local reflections to the objects
- Helps Glass, plastic, water, and other transparent/translucent materials.
- Similar to screen space reflection. Screen Space Reflections and Ambient Occlusion aren't compatible with Screen Space Refraction. And are disabled on surfaces that use it.


### Screen Space Reflection

A technique for reusing screen-space data to calculate reflections. Used for more subtle reflections like wet surfaces or puddles.


### Caustic

https://youtu.be/7l6QOcgWXfI


### Bloom

- Bloom/ light bloom (not to be confused with glow/emission) is a rendering technique to reproduce artifacts of real-world cameras. It produces fringes or feathers of light extending from the borders of bright areas in an image, contributing to the illusion of an extremely bright light overwhelming the camera or eye capturing the scene. 

- Even tough bloom is most apparent around emissive objects, it can just as well happen with normal light sources


### Motion Blur

- Portrays the illusion of speed or movement blurring the objects
- Tends to remove temporal aliasing effects
- Used as a real time filter, for animation renders and even still renders
- Not having Motion Blur on can lead to more eye strain, but can give you motion sickness
- It can also increase the visual fidelity


### Lens Flare

![[20230603111506.png|400]]


### Sub Surface Scattering (SSS)

Real objects can either absorb, scatter or ??? light. To recreate this in 3D SSS and thickness maps are used. For the SSS maps there mostly is a `SSS Color Map` and sometimes a `SSS Control Map` and to help the SSS `Thickness Maps`  are also often used.

#### Theory behind SSS (Transparency and Translucency)
- When traveling in an inhomogeneous medium(air) or translucent materials, light can be absorbed or scattered
- Absorption: `Light intensity decreases`, direction of the ray doesn’t change
- Scattering: The ray direction changes randomly and doesn’t change its intensity (ear is thin -> low absorption = ear catches light)
- If there is no scattering and the absorption is low, rays can pass directly through
- The further light travels in such a medium/material, the more it is absorbed and/or scattered. Therefore, object thickness plays a large role in how much the light is absorbed or scattered

#### Examples

> [!example] Objects where SSS is vital
> 
> - Fleshy characters
> - Wacs
> - Marble
> - Milk

![[20230603111548.png|50]]

> [!example] Objects that absorb light

> [!example] Objects that scatter light
>  
>  - dirty water

> [!example] Objects that don’t scatter/ absorb light
>  
> - Clear Water




### Volumetric effects: Volumetric Lighting/ Fog

- Volumetric Lighting or God Rays let's beams of light shine across the environment

Example:

![[Pasted image 20230603124930.png|500]]



  </details>

- Volumetric Fog is used for 
```
Fog, clouds, dust, smoke or any airborne material capable of partial occlusion
```
Has a great synergy with Volumetric Lighting

---

</details>

<details>
<summary>Chromatic Aberration</summary>

---

- When a lens fails to focus all the colors into a single point, causing an ever so slight color shift on the edges of some objects
- A color fringing or distortion
- Basically the R, G and B channels are shifted to the left/ right. The shift amount and what channels are shifted can be tweaked

<details>
<summary>Example</summary>

<img src="https://i.imgur.com/ftXvlyB.png" width="700">

</details>

---

</details>

<details>
<summary>Depth of Field</summary>

---

Blurs out things that are farther away from the focus point. The distance at which the effects starts and ends as well as the fall off can all be tweaked. Sometimes it is even possible to set multiple focal points.
<details>
<summary>Example</summary>

<img src="https://i.imgur.com/VBovAic.png" width="700">

</details>

---

</details>


<details>
<summary>DLSS/ FSR</summary>

--- 

- DLSS stands for Deep learning super sampling (Nvidia GPUs)
- FSR  stand for FidelityFX Super Resolution (AMD GPUs)
- It is a image upscaling technology. Using deep learning to upscale lower-resolution images

---

</details>


<details>
<summary>Anti-Aliasing</summary>

---

Removes aliasing effect. Aliasing is the appearance of jagged edges in a rasterized image (image rendered using pixels). Samples the pixels around the edges and uses them to blend away the appearance of jagged edges.

---

</details>


<details>
<summary>Blending modes in 3D software</summary>

---

Blend methods apply to every software(some have more and some less), every texture has to have a blend mode, the  most common one being Opaque. Blend Modes describe how the output of the current Material will blend over what is already being drawn in the background. Black = invisible/ not rendered and White = visible/ rendered.


### Opaque Blend
Surface through which light neither passes nor penetrates. The previous color will be overwritten and alpha is ignored. 
- Cheapest blend method
```
- Plastics
- Metals
- Stone
- Wood
```

### Masked Blend/ Alpha Clip
Used to make some parts invisible and others visible. The invisible parts are not rendered at all. Only needs Black and white, however if gray values are in the control texture a clip threshold value (which is per default set but can be changed) decides what counts as black and what as white. 
```
- Fence
- Chains
- Net
```

### Translucent Blend/ Alpha Hashed
Used for objects that require some form of transparency. By taking advantage of the full range of a opacity control map it can make objects be and opacity level.
- Can produce noise
- Most expensive blend mode

```
- Thin Cloth/Nylon
- Jellyfish
- Female Clothing
```

### Additive
Takes the pixels of the Material and adds them to the pixels of the background (Like PS Linear Dodge (Add))
No darkening, since all pixel values are added together.

### Multiply/ Modulate
Multiplies the values of the Material against the pixels of the background.

---

</details>


<details>
<summary>Object properties</summary>

---

## Transparent
- With transparent objects almost all light passes directly through them. 
- One can clearly see what's behind transparent objects
```
Air, water, clear glass, plastic wrap
```

## Translucent
- Translucent objects allow some light to travel through them. 
- Often one can't see what's behind translucent object but 
```
Frosted glass, sunglasses, notebook paper, lampshade
```

## Transparency/Opacity/Alpha

---

</details>


<details>
<summary>Light Ray</summary>

---

- In air light rays travel as straight lines

- A light ray that hits a surface is called the `incident ray` and the light that bounces of a surface is called the `reflected ray`

- When the light ray hits an `opaque surface` the `reflected angle` is the `same` as the `incidence angle`

- When a light ray hits opaque surface one of two events occur:
1. Incident light ray hit surface and `bounces off` in the same angle `(reflected light)`
2. The light ray `passes through` the surface in a straight line `(refracted light)`

- Absorption of the light ray doesn’t occur on the material surface

### Examples
```
Objects that reflect light: Polished metal, glass, water

Objects that refracture light: Lenses, prism
```
<img src="https://i.imgur.com/TdwyXUn.png" height="400">

---

</details>


<details>
<summary>Specular Reflection</summary>

---

- The more planar the surface is the more the incidence angle equals the reflected angle (law of reflection)
- Most surfaces are irregular
- Rougher surfaces have `larger highlights` and are `dimmer` and `less reflective`
- Smoother surfaces are `brighter` and `more reflective`


Examples
```
Smoother Objects: Polished metal, glass, water

Rougher Objects: Concrete, wood, leather
```

<img src="https://i.imgur.com/S3d4KwF.png" height="500">


---

</details>


<details>
<summary>Diffuse Reflection</summary>

---

- Diffuse reflection is light that has been refracted
- Light ray hits surface, enters the object, is scattered multiple times and finally is refracted out of the object at the same point it enterd the object
- Most diffuse materials have high absorption so for the light to leave the object it can only travel(scatter) short distances within the object
- Materials with both high scattering and low absorption are called translucent or participating materials
- The outgoing direction of the ray is fairly independent of surface roughness and the incident direction
- Surface irregularities are referred to as roughness, smoothness, glossiness or 
micro-surface

Examples for diffuse objects
```
Objects with high scattering and high absorption:
Objects with high scattering and low absorption: Smoke, milk, skin, jade, marble, fog
```
<img src="https://i.imgur.com/zJ8fMq4.png" height="400">

---

</details>


# Topology


<details>
<summary>Poles</summary>

---

There are two types of poles N-Poles (3 edges) and E-Poles (5+ edges). More about poles on the topology page


A pole is a set of edges that merge into a single vertex. Avoiding poles with six or more edges on a curved surfaces is something that you should incorporate into your modeling workflow. It is best practice to try to avoid poles when modeling.

---

</details>


<details>
<summary>Faces</summary>

---

- Triangle, Tris, Polygon: 3 vert face
- Quad: 4 vert face
- Ngon: 5+ vert face

---

</details>


<details>
<summary>Backface Culling (empty)</summary>


---

---

</details>


<details>
<summary>Convex/ Convex Hull</summary>

---

Convex is .
A convex hull is a mesh that wraps around another mesh in the most optimal way. Often used for collisions.

---

</details>


<details>
<summary>Chamfer</summary>

---

A corner with one edge is a hard edge, with 2 edges a chamfer and anything more than 2 is a bevel. Chamfers mostly have a 45° angle.

---

</details>


<details>
<summary>LOD's (Level of detail) (empty)</summary>

---

---

</details>


<details>
<summary>Tessellation</summary>

---

Also called triangulation. Is the process of the converting faces to random even triangles

---

</details>


# Textures


<details>
<summary>Banding</summary>

---

Banding artifacts are caused by a lack of precision with 8-bit normal maps. There aren’t enough color values to accurately represent subtle differences between the high poly and low poly surfaces, which results in stair stepping artifacts.

[In depth PDF about banding](https://loopit.dk/banding_in_games.pdf)

---

</details>


<details>
<summary>Atlas/ Trim Sheet (empty)</summary>

---

---

</details>


<details>
<summary>Dithering</summary>

---

Adds noise to combat banding. So Dithering is mostly only used with low bit images. Dithering can be done by adding a noise filter in Photoshop.

---

</details>


<details>
<summary>Tangent space</summary>

---

Normal maps can be tangent-space or object-space. World-space is basically the same as object-space, except it requires the model to remain in its original orientation, neither rotating nor deforming, so it's almost never used. Always use tangent space for the normal map, however object space normal maps can be useful as a utility mask for texturing. The object space normals maps are easily spotted, they look like orange normal maps

---

</details>


<details>
<summary>Handedness (normal map)</summary>

---
Handedness has influence over: Object transforms, normal maps, rigs/animations,... . 

### Normal maps
Normal maps can either be Direct X or Open GL. To go from one to the other the green channel from the normal maps needs to be flipped.

### Objects
For objects it's as following:

|Handedness|Cords|Software
|:-:|:-:|:-:
|Right Handed (Open GL)|Y-Up|Marmoset, Substance Painter, Maya, Houdini, Modo
|Right Handed (Open GL)|Z-Up|Blender, 3ds Max, CryENGINE
|-|-|-
|Left Handed (Direct X)|Y-Up|ZBrush, Unity, Cinema 4D, Light Wave
|Left Handed (Direct X)|Z-Up|Unreal

Software that supports both Left and Right handedness: Blender, Substance, IClone


The X is in all software the Right vector (Left/Right). The Y and X can either be Forward vector (Forward/Back or Back/Forward) or the Up vector (Up/Down or Down/Up).


It's important to use the same space for an assets and it's textures. When working with software that has different spaces this can be done by switching channels at export.

---

</details>


<details>
<summary>Mipmaps (empty)</summary>

---

---

</details>


<details>
<summary>Tangent space</summary>

---

https://marmoset.co/posts/toolbag-baking-tutorial/

---

</details>

# Animation


<details>
<summary>Apex/ Peak (empty)</summary>

---

---

</details>

<details>
<summary>Bone Head/ Tail/ Body (empty)</summary>

---



---

</details>

# Baking

<details>
<summary>Floaters</summary>

---

Floaters are loose detail pieces that float above the surface of a mesh and are baked down into the normal map. This creates the illusion that they are connected with the mesh they hover above. A boolean cut floater for example can save allot of time because one does not actually have to do a boolean cut and can quickly duplicate the piece along the mesh surface without having to integrate it into the topology.

---

</details>

<details>
<summary>Skews (empty)</summary>

---

---

</details>


# Other

<details>
<summary>x</summary>

## Rigid body
An object that is affected by forces gravity

</details>