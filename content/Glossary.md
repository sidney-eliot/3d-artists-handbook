---
title: "Glossary 📄"
enableToc: true
---
## Visual

---

### Ambient Occlusion
_[[Wikipedia]](https://en.wikipedia.org/wiki/Ambient_occlusion) - [[Polycount]](http://wiki.polycount.com/wiki/Ambient_occlusion_map) - [[Unreal Engine Doc]](https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/PostProcessEffects/AmbientOcclusion/) - [[Unity Doc]](https://docs.unity3d.com/2021.3/Documentation/Manual/LightingBakedAmbientOcclusion.html)_

Ambient Occlusion (AO) is a shading and rendering technique used to calculate how exposed each point in a scene is to ambient lighting. It shows subtle variations in lighting and helps your eyes detect surface details that would otherwise be washed out or unnoticeable.

> [!info] Ambient Occlusion Info
> 
> - Softens the overall lighting in your scene
> - Adds depth
> - Can be used as a budget [[Glossary#Ray Tracing|ray traced]] occlusion
> - Requires high resolution light maps to look good

|Ambient Occlusion Off|Ambient Occlusion On
|:-:|:-:
|![[AO_off_1.png]]|![[AO_on_1.png]]
|![[AO_off_2.png]]|![[AO_on_2.png]]
|![[tdmMtT4_off.png]]|![[tdmMtT4_on.png]]

---

### Ray Tracing

_[[Wikipedia]](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)) - [[Unreal Engine Doc]](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/RayTracing/) (real-time)  [[Unreal Engine Doc]]() (hardware) - [[Unity Doc]](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@14.0/manual/Ray-Tracing-Getting-Started.html)_

Ray tracing can either be real-time ray tracing (games industry) or hardware ray tracing (films industry).

Ray Tracing is a rendering method that simulates the physical behavior of light rays. It allows accurate rendering of things like shadows, reflections, highlights, and bounced light. However ray tracing doesn't make everything better and sometimes it's good to turn off ray traced shadows, lights and only keep ray traced reflections on.

Ray tracing is a broad term and consists of many smaller things like:
- Ray Traced Shadows
- Ray Traced Reflections
- Ray Traced Lighting
- Ray Traced [[Glossary#Ambient Occlusion|Ambient Occlusion]]
- Ray Traced Global Illumination [[1]](https://developer.nvidia.com/rtx/ray-tracing/rtxgi)[[2]](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@15.0/manual/Ray-Traced-Global-Illumination.html)
- Ray Traced Translucency

> [!info] Ray Tracing Info
> 
> - Only works on [Nvidia RTX](https://en.wikipedia.org/wiki/Nvidia_RTX) and some Nvidia GTX series graphics cards (all their graphic cards with DirectX ray tracing support)

Ray tracing off vs on:

![[20230603110116.png|600]]
![[20230603123401.png|600]]

On the flipped side, here's and example of ray tracing making the lighting and shadows look way worse. 

![[20230603111140.png|600]]

This doesn't mean that ray tracing in it's nature makes lighting and shadows worse, but rather adding |ray tracing into a scene that wasn't designed with ray tracing in mind won't yield good results. It's important for the environment artists to have direct previews of how the scene will look like with ray tracing on. And potentially there needs to be 2 different presets for ray tracing on and off. 

---
### Anisotropic Filtering
ToDo: Explain better

Anisotropic filtering or AF for short, is a method of enhancing the image quality of textures on surfaces that are at oblique viewing angles with respect to the camera. Like bilinear and trilinear filtering, anisotropic filtering eliminates aliasing effects.

![[20230603111310.png|600]]

---
### Screen Space Refraction
- Adds local reflections to the objects
- Helps Glass, plastic, water, and other transparent/translucent materials.
- Similar to screen space reflection. Screen Space Reflections and Ambient Occlusion aren't compatible with Screen Space Refraction. And are disabled on surfaces that use it.

---
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


### Lens Flare (ToDo)

![[20230603111506.png|400]]


### Sub Surface Scattering (SSS)
Real objects can either absorb, scatter or ??? light. To recreate this in 3D SSS and thickness maps are used. For the SSS maps there mostly is a `SSS Color Map` and sometimes a `SSS Control Map` and to help the SSS `Thickness Maps`  are also often used.

#### Theory behind SSS (Transparency and Translucency)
- When traveling in an inhomogeneous medium(air) or translucent materials, light can be absorbed or scattered
- Absorption: `Light intensity decreases`, direction of the ray doesn’t change
- Scattering: The ray direction changes randomly and doesn’t change its intensity (ear is thin -> low absorption = ear catches light)
- If there is no scattering and the absorption is low, rays can pass directly through
- The further light travels in such a medium/material, the more it is absorbed and/or scattered. Therefore, object thickness plays a large role in how much the light is absorbed or scattered

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
> - Clear water


### Volumetric effects: Volumetric Lighting/ Fog

#### Volumetric Lighting

Volumetric lighting or God Rays lets beams of light shine across the environment.

![[Pasted image 20230603124930.png|500]]

#### Volumetric Fog

> [!example] Volumetric Fog is used for 
>
> - Fog
> - clouds
> - dust
> - smoke
> - Or any airborne material capable of partial occlusion

Volumetric fog has a great synergy with volumetric lighting.

ToDo: Add image

### Chromatic Aberration
ToDo: Restructure

- In real life chromatic aberration occurs when a lens fails to focus all the colors into a single point, causing an ever so slight color shift on the edges of some objects
- A color fringing or distortion
- Basically the R, G and B channels are shifted to the left/ right. The shift amount and what channels are shifted can be tweaked

![[Pasted image 20230603125616.png|700]]


### Depth of Field
Blurs out things that are farther away from the focus point. The distance at which the effects starts and ends as well as the fall off can all be adjusted in the render/ game engines settings. Sometimes it is even possible to set multiple focal points.

![[Pasted image 20230603125653.png|700]]


### DLSS/ FSR
- DLSS stands for Deep learning super sampling (Nvidia GPUs)
- FSR  stand for FidelityFX Super Resolution (AMD GPUs)
- It is a image upscaling technology. Using deep learning to upscale lower-resolution images


### Anti-Aliasing
Removes aliasing effect. Aliasing is the appearance of jagged edges in a rasterized image (image rendered using pixels). Samples the pixels around the edges and uses them to blend away the appearance of jagged edges.


### Blending modes in 3D software
ToDo: Restructure

Blend methods apply to every software (some have more or less modes). Every texture has to have a blend mode, the most common one being Opaque. Blend Modes describe how the output of the current material will blend over what is already being drawn (rendered) in the background.

- Black = invisible/ not rendered
- White = visible/ rendered

#### Opaque Blend
Surface through which light neither passes nor penetrates. The previous color will be overwritten and alpha is ignored. 
- Cheapest blend method

> [!example] Opaque Blend Examples
> 
> - Plastics
> - Metals
> - Stone
> - Wood

#### Masked Blend/ Alpha Clip
Used to make some parts invisible and others visible. The invisible parts are not rendered at all. Only needs Black and white, however if gray values are in the control texture a clip threshold value (which is per default set but can be changed) decides what counts as black and what as white. 

> [!example] Masked Blend/ Alpha Clip Examples
> 
> - Fence
> - Chains
> - Net

#### Translucent Blend/ Alpha Hashed
Used for objects that require some form of transparency. By taking advantage of the full range of a opacity control map it can make objects be and opacity level.
- Can produce noise
- Most expensive blend mode

> [!example] Translucent Blend/ Alpha Hashed Examples
> 
> - Thin cloth/ Nylon
> - Jellyfish
> - Allot of female clothing

#### Additive
Takes the pixels of the Material and adds them to the pixels of the background (Like PS Linear Dodge (Add))
No darkening, since all pixel values are added together.

#### Multiply/ Modulate
Multiplies the values of the Material against the pixels of the background.


### Object properties

#### Transparent
- With transparent objects almost all light passes directly through them. 
- One can clearly see what's behind transparent objects

> [!example] Transparent Examples
> 
> - Air
> - Water
> - Clear glass
> - Plastic wrap

#### Translucent
- Translucent objects allow some light to travel through them. 
- Often one can't see what's behind translucent object but 

> [!example] Translucent Examples
> 
> - Frosted glass
> - Sunglasses
> - Notebook paper
> - Lampshade

#### Transparency/Opacity/Alpha


### Light Ray
- In air light rays travel as straight lines
- A light ray that hits a surface is called the `incident ray` and the light that bounces of a surface is called the `reflected ray`
- When the light ray hits an `opaque surface` the `reflected angle` is the `same` as the `incidence angle`
- When a light ray hits opaque surface one of two events occur:
    1. Incident light ray hit surface and `bounces off` in the same angle `(reflected light)`
    2. The light ray `passes through` the surface in a straight line `(refracted light)`
- Absorption of the light ray doesn’t occur on the material surface

> [!example] Objects that reflect light
> 
> - Polished metal
> - Glass
> - Water

> [!example] Objects that reflect light
> 
> - Lenses
> - Prism

![[Pasted image 20230603130631.png|400]]


### Specular Reflection
- The more planar the surface is, the more the incidence angle equals the reflected angle (law of reflection)
- Most surfaces are irregular
- Rougher surfaces have `larger highlights` and are `dimmer` and `less reflective`
- Smoother surfaces are `brighter` and `more reflective`


Examples:

> [!example] Smoother Objects
> 
> - Polished metal
> - Glass
> - Water

> [!example] Rougher Objects
> 
> - Concrete
> - Wood
> - Leather

![[Pasted image 20230603130821.png|500]]


### Diffuse Reflection

- Diffuse reflection is light that has been refracted
- Light ray hits surface, enters the object, is scattered multiple times and finally is refracted out of the object at the same point it entered the object
- Most diffuse materials have high absorption so for the light to leave the object it can only travel(scatter) short distances within the object
- Materials with both high scattering and low absorption are called translucent or participating materials
- The outgoing direction of the ray is fairly independent of surface roughness and the incident direction
- Surface irregularities are referred to as roughness, smoothness, glossiness or 
micro-surface

Examples for diffuse objects:

> [!example] Objects with high scattering and high absorption

> [!example] Objects with high scattering and low absorption
> 
> - Smoke
> - Milk
> - Skin
> - Jade
> - Marble
> - Fog

![[Pasted image 20230603131037.png|400]]

## Topology


### Poles
There are two types of poles N-Poles (3 edges) and E-Poles (5+ edges). More about poles on the topology page.

A pole is a set of edges that merge into a single vertex. Avoiding poles with six or more edges on a curved surfaces is something that you should incorporate into your modeling workflow. It is best practice to try to avoid poles when modeling.

### Faces

- Triangle, Tris, Polygon: 3 vert face
- Quad: 4 vert face
- Ngon: 5+ vert face

### Backface Culling (ToDo)

### Convex/ Convex Hull
Convex is means (ToDo). A convex hull is a mesh that wraps around another mesh in the most optimal way.

> [!example] Convex Hulls are used for
> 
> - Collisions
> - Physics calculation boundaries, for hair for example
> - Baking cages

### Chamfer
A corner with one edge is a hard edge, with 2 edges a chamfer and anything more than 2 is a bevel. Chamfers mostly have a 45° angle.

### LOD's (Level of Detail) (ToDo)

### Tessellation
Also called triangulation. Is the process of the converting faces to random even triangles.


## Textures

### Banding
Banding artifacts are caused by a lack of precision with 8-bit normal maps. There aren’t enough color values to accurately represent subtle differences between the high poly and low poly surfaces, which results in stair stepping artifacts.

[In depth PDF about banding](https://loopit.dk/banding_in_games.pdf)

### Atlas/ Trim Sheet (ToDo)

### Dithering
Adds noise to combat banding. So Dithering is mostly only used with low bit images. Dithering can be done by adding a noise filter in Photoshop.

### Tangent space
Normal maps can be tangent-space or object-space. World-space is basically the same as object-space, except it requires the model to remain in its original orientation, neither rotating nor deforming, so it's almost never used. Always use tangent space for the normal map, however object space normal maps can be useful as a utility mask for texturing. The object space Normals maps are easily spotted, they look like orange normal maps.


### Handedness (Normal Map)
Handedness has influence over: Object transforms, Normal maps, rigs/ animations, ... . 


#### Handedness with Normal maps
Normal maps can either be Direct X or Open GL. To go from one to the other the green channel from the normal maps needs to be flipped.

#### Handedness with Objects
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

### Mipmaps (ToDo)

### Tangent space ToDo
https://marmoset.co/posts/toolbag-baking-tutorial/

## Animation

### Apex/ Peak (ToDo)

### Bone Head/ Tail/ Body (ToDo)


## Baking

### Floaters
Floaters are loose detail pieces that float above the surface of a mesh and are baked down into the normal map. This creates the illusion that they are connected with the mesh they hover above. A boolean cut floater for example can save allot of time because one does not actually have to do a boolean cut and can quickly duplicate the piece along the mesh surface without having to integrate it into the topology.

### Low/ High Poly
ToDo:

(in the context of baking high to low)

### Skews (ToDo)

## 🚧Work in Progress🚧

## Other (ToDo)

### Rigid body (ToDo)
An object that is affected by forces gravity.