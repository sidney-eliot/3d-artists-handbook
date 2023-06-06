---
title: "Hair 💇🏼‍♀️"
enableToc: true
---
## Table of Contents
- [General](#general-)
- [Good Software for Making Hair](#good-software-for-making-hair-)
- [Sculpted Hair](#sculpted-hair-)
   - [Sculpted Hair Examples](#sculpted-hair-examples-)
   - [About Sculpted Hair](#about-sculpted-hair-)
- [Hair Cards](#hair-cards-)
   - [Hair Card Hair Examples](#hair-card-hair-examples-)
   - [About Hair Cards](#about-hair-cards-)
   - [Creating Hair Cards](#creating-hair-cards-)
   - [Placing Hair Cards](#placing-hair-cards-)
   - [Rendering Hair Cards](#rendering-hair-cards-)
- [Stylized Hair (Curves/ Arrays)](#Stylized-hair-curves-arrays-)
- [Particle System Hair](#particle-system-hair-)
- [Resources](#resources-)

>[!tip]- A YouTube playlist I made, for all kinds of hair methods
> 
><br>
><div style="text-align: center;">
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
></div>


## General
I recommend starting every haircut with a base sculpt. Refine this sculpt until the silhouette is close to what you want. After that create the hair with your desired style, keeping true to your sculpted block out.

## Good Software for Making Hair
- **[Hair Strand Designer](https://www.artstation.com/marketplace/p/j7PY/hair-strand-designer-v1-68-2-full-perpetual-license-free-demo-and-sample-set)** is a great software for creating high quality realistic hair cards quickly. But less useful for stylized anime hair for example.

- **Blender** is a S-Tier tool for creating hair of any style, since the 3.3 update

- **XGen** is a **Maya** hair engine, good for making particle hair

- Both **Blender** and **ZBrush** are the best when it comes to placing hair strand curves by hand


## Sculpted Hair
![[Pasted image 20230604170808.png|350]]![[Pasted image 20230604170824.png|350]]![[Pasted image 20230604170858.png|300]]![[Pasted image 20230604170907.png|300]]![[Pasted image 20230604170758.png|250]]![[Pasted image 20230604170921.png|600]]

Sculpting is great method for the final hair but where it really shines is as a base/ block out for all other hair creations methods. Make it a habit to first sculpt a block out of the haircut until the silhouette is correct, and to use that as a shape guide.

**Sculpting Hair Playlist:**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLveghVPT3X7bAL5O02HQ6Y_ESsW26t1wK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Hair Cards
![[Pasted image 20230604174906.png|400]]
![[Pasted image 20230604174914.png|400]]
![[Pasted image 20230604174921.png|400]]

Hair cards are a hair method where a variety of strand texture maps are mapped to a flat mesh plane. These hair planes are then subdivided and placed around the head while moving vertices to fit the shape of the head and haircut. 

To avoid repetition in textures used for strands, a couple of materials are created each using different hair stands that can then be easily chosen from. This allows one to be very flexible as one can at any point decide that one wants to replace all the hair stand types with other or even more types.

Hair cards are great for games because of its low tris count and working well with physics/ animation. The poly count vastly depends on hair style, can range from 1k tris to 10k tris.

|Tris|Character
|:-:|:-:
|100k|Alloy's hair from Horizon Zero Dawn


It's used for both hyper realistic and stylized hair.

ToDo: Add industry examples


## Creating Hair Cards
### Different Ways To Make Hair
There are a couple of ways of getting hair cards. The easiest is to look for pre made ones. Another good way is to use software like [Hair strand Designer](https://www.artstation.com/marketplace/p/j7PY/hair-strand-designer-v1-67-5-full-perpetual-license-free-demo-and-sample-set). Software like this creates all different maps for you. The last and most time costly way is to use particle systems to create hair and then to render some of the maps and use PS or other software to generate the others.

### What to Put on the Hair Card
The hair card contains the **hair**, but also **eyebrows** and **eyelashes**.
For hair strands there should be following:

- (1) **Main Hard**
- (2) **Big Breakup**
- (2) **Small Breakup**
- (2) **Transitional Hair** (Helps connect hair to head by placing them at borders)
- (1-2) **Flyaways** (These wild hair strands help break the silhouette)
- (0-1) **Scalp Card** (Scalp Cards are optional because the scalp hair can also be baked into the head texture. But if there should be areas where one see a bit of the skin below the hair then scalp cards are the way to go. Scalp Cards are also more flexible because the characters hair style can be changed dramatically without having to re-bake scalp hair into the body texture map)

[Video to Hair Card types/ breakup](https://youtu.be/tiuNm7ZD9qw?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&t=153)

### Needed Texture Maps
The textures that are most essential are: Alpha, Color, Normal, AO, Gradient

But to get the desired hair look there are many others that are often used.

![[Pasted image 20230604224005.png]]

|Map|Explained
|:-:|:--
|**Mask**|Decides which parts of the hair are rendered and which not(so only black and white texture map). In blender this would be alpha clip and in unreal masked blend. This is the best alpha mode performance wise.
|**Alpha**|Decides which parts of the hair are rendered and which not however the difference to the mask being that here values between black and white accepted. In blender this would be alpha hashed and in unreal translucent blend.
|**Mask and Alpha synergy**|There is no way of getting around using an alpha texture however one can make the performance better by also making a mask texture. The mask texture then exclude a good amount of the texture from being rendered which would have used extra performance. 
|-|-
|**Color (length)**|For albedo color
|**Color (group)**|
|**ID grayscale**|
|**ID color**|
|**Gradient**|Also often referred to as root and is responsible for giving the hair gradients that run from the root to the tip
|-|-
|**Normal**|Explained in texture page.
|**AO**|Adds shadows into crevices and to those spots where shadows should be
|**Depth**|Can be used for parallax displacement mapping to give the hair more depth, or just like AO add a tint for some general depth for better performance than AO but not looking as good.
|**Flow**|2D vector maps similar to normal maps. However, unlike normal maps, the data is not representing a surface normal but instead a general flow from one direction to another. This can create many effects, but for hair it's used for anisotropy highlights.


### Videos about Creating Texture Maps for Hair Cards
- [Creating maps](https://youtu.be/tiuNm7ZD9qw?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&t=1015)
- [Creating maps Substance Painter](https://youtu.be/6xBMcnx2Kkk?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&t=120)
- [Full Process](https://www.youtube.com/watch?v=u6IP74f8pBo&list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&index=32)



## Placing Hair Cards

<details>
<summary>Texture map setup in Blender</summary>

- Roughness: Color map > Color Ramp > P. BSDF
- Alpha: Alpha map(Alpha plug) > P. BSDF (Blend Mode and Shadow Mode to Alpha Hashed)
</details>

<details>
<summary>Texture map setup in Marmoset</summary>
... empty for now
</details>

<details>
<summary>Texture map setup in Unreal</summary>
... empty for now
</details>

### Placing Strategies
- It often helps to sculp a sphere of the rough shape of the hairstyle to be able to place the hair cards easier
- Start with a base to cover the scalp and then start designing the hair. Another way to do this to bake hair into the head texture map so that the scalp is not bare skin
- When placing the hair it's fine to move the hair both in object and edit mode
- When placing the hair card slowly start adding loops horizontally and vertical. Curving the mesh around the head is important and makes this method really look good, flat hair card meshes will result in bad looking hair

### Things to Watch Out For
- Use as much of the hair strand as possible
- Watch out that when moving the vertices you don't move them in UV space, in blender sliding verts would do this and should thus be avoided
- Never extrude the hair card only add new detail in with loop cuts
- Keep a UV window open and try to make all faces in UV space have equal sizes
- Try to have hair cards not clip through each other

## Rendering Hair Cards
### Things to Check Before Rendering
- Use a clean studio HDRI and no other light sources. Rotate the HDRI so that the main light source is coming from the other side of the camera
- Make sure the camera resolution is 2048 x 2048 or 4096 x 4096
- Render with the correct image extension (more about that [here](https://github.com/Epicrex/3DArtistsHandbook/wiki/0.4_Texture-Maps_Theory))
- Do not render with transparent background (the alpha texture is for that)
- Try to keep the render settings high
- In Blender use Cycles. In Maya use Renderman or Arnlod
- Make sure to turn off all form of color correction (Blender: Color Management, Compositor)
- Place a flat colored neutral gray(#7F7F7F) background behind the hair (this is done to help the anti-aliasing by bouncing softer light and thus producing crisper edges)

### Videos on Rendering Hair Cards
- [Rendering setup procedurally (Daniel Bystedt)](https://youtu.be/oqjKMd9CYI4?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&t=1297)
- [Rendering setup](https://youtu.be/db7Xfg_oSYE?list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&t=735)
- [Rendering setup](https://www.youtube.com/watch?v=_WbNUly6EYM&list=PLveghVPT3X7Yh8DqV-OySOLxzwQC_fQAu&index=18)

# Stylized Hair (Curves/ Arrays)
## About Stylized Hair
_... empty for now_

## Creating Stylized Hair in Blender
- To control the hair one can use bezier curves or path curves
- Enable Curve Handles
- Add Circle Curve rotate on x by 90° (When scaling apply scale, but do not apply rotation or location)
- Set bevel profile to the circle curve under curve Object Data Tab>Geometry>Bevel>Object
- To change the hair shape edit the circle curve in edit mode
- Ctrl + T to change rotation, Alt + S to change scale, Alt + S + 0 for perfect tip
- Lower Curve and circle curve resolution to around 3 and use sub d mod on the hair curve
- Make sure to use resolution increase instead of SubDiv on Bevel Profile object for hair curve

# Particle System Hair
## About Particle Hair
Particle Hair can be very time consuming and frustrating to make, as well as not being the best option for Real-Time use. It can however be quite useful for making hair cards. Particle hair especially shines with a Hyper-Realistic art style and when the hair will be involved in allot of physics heavy actions like wind, fighting and other hair interactions.

Though particle hair is currently not that Real-Time friendly, that definitely will change soon, it's the hair method which has the most space to improve and become easier to use.

_Following software support particle hair:_ Blender, Marmoset Toolbag (XGen), Maya(XGen), Unreal Engine

## Particle Hair in Blender _(pre 3.3)_


- Add part of head to vertex group
- Subdivide particle close to scalp with root select and +
- Change Number, Length and Segments
- Turn on B-spline
- In particle edit mode increase path size 
- While combing change distance and preserve root distance
(Distance: The distance to keep from the Emitter)

Children:
- Change Clump and roughness

# Resources
### Finished Hair Styles

- https://blendermarket.com/products/35-hair-cards-for-blender-blend-files-