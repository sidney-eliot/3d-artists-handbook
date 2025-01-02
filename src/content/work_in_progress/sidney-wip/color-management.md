## Why Care About Color Management?

Proper color management in 3D art is important regardless of if one is working on a game asset, film shot or just a portfolio render. The reason for why color management is important comes down to a couple of things. 

Firstly, the biggest advantage is having everything look the same throughout the asset creation pipeline. Texturing work done in Substance Painter for example, will look the same when imported into Marmoset Toolbag or Unreal Engine. This gets especially important when working in a team, where everyone's setup might be slightly different resulting in incohesive results, when the assets are put together in a scene.

The next reason is that the using specific color spaces (I'll get to that in a second) allows for a wider range of colors and a more photorealistic look.

An example of this would be the following images where detail in lost is over exposed areas (red areas in the exposure view), and in general the range of dark values is much too low. 

sRGB
![[image-2024-03-14-11-54-38.png]]

ACES
![[image-2024-03-14-11-54-46.png]]

Exposure View (Blender's [False Color](https://youtu.be/TpQfFv7bFsE?si=Z_GMxR1wQS6dK6u-). Red = Over Exposed. Purple = Borderline Under Exposed)
![[image-2024-03-14-12-01-57.png]]

_scene made by [Alexandra Bressy](https://www.artstation.com/alexandra_bressy)_





## Color Space, Color Gamut & Color Model

Color spaces like sRGB and ACES defines the colors that are available in a specific space in form of numbers.

Color Gamut represents all the colors that a device like a monitor, camera or even cg software camera can produce.

A color model like RGB is employed in color spaces like sRGB and ACES.


Some common color space are:

|                             Color Space                             | Year Released |
| :-----------------------------------------------------------------: | ------------- |
|             [sRGB](https://en.wikipedia.org/wiki/SRGB)              | 1996          |
|  [Adobe RGB](https://en.wikipedia.org/wiki/Adobe_RGB_color_space)   | 1998          |
|                         All the REC spaces                          |               |
|             [NTSC](https://en.wikipedia.org/wiki/NTSC)              | 1941          |
|           [DCI-P3](https://en.wikipedia.org/wiki/DCI-P3)            | 2005          |
| [ACES](https://en.wikipedia.org/wiki/Academy_Color_Encoding_System) | 2007          |
![[image-2024-03-14-10-02-55.png]]
_Here one can see some of the color spaces visualized with a chromaticity diagram._

The full list of color spaces is [here](https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses) on Wikipedia. Of all of those, only sRGB, Adobe RGB and ACES are important for 3D Artists.


## Gettings Software To Match

Marmoset Toolbag, Unreal Engine, Substance Painter, Blender, Davinchi Resolve.


Marmoset Toolbag 
Camera > Post Effect > Tone Mapping > ACES

Substance Painter
ToDo

https://community.adobe.com/t5/substance-3d-painter-discussions/aces-in-painter-vs-marmoset-doesn-t-look-the-same/m-p/12562370

Unreal Engine
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DWIAEzAS3xw?si=0X5sI4Dop78o-eSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bo3BvhGdaUo?si=nyWrP0I0Qhu8LbZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Substance Painter
https://www.youtube.com/watch?v=UOcNnu2uW1Y

https://medium.com/@alexandrealvesdb/how-to-match-substance-painter-viewport-with-ue5-2b022a624515

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WrFqBNI6Tx4?si=kgg2j1hRkhmuJ9AN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

https://bleleux.gumroad.com/l/lHiVg
https://alexandrealvesdb.gumroad.com/l/ue5_lut


## What to Look out for When Buying a Monitor



CRT

LCD (Liquid Crystal Display)
Has 3 Panel types
- TN (Twisted Nematic)
- IPS (In-Plane Switching)
- VA (Vertical Alignment)

OLED (Organic Light-Emitting Diode)

Retina



https://www.youtube.com/watch?v=yxygknX1AiE&t=3s

Higher Contrast Ratio
Refers to the constant between black and white, a higher contrast ratio results in brighter whites and darker blacks.

Response Time
Refers to the time a monitor needs to change between one color and another. (High response time removes ghosting) 

## ToAdd


"So what are you talking about is what is commonly called “Fake Aces” where you actually only used the tonemapping that ACES offers, for your render.  
A complete ACES workflow means that all your textures has to be converted to ACEScg and it does make a difference"


## Some of My Sources

https://community.acescentral.com/t/acescg-vs-linear-srgb-709-cg-rendering/1512/2

https://en.wikipedia.org/wiki/Gamut

https://www.reddit.com/r/colorists/comments/dr5xji/what_is_the_difference_between_gamut_and_color/

https://www.youtube.com/watch?v=aJF2sAjRsy0

https://docs.d-floe.com/art/color-precision

https://www.cgtrader.com/tutorials/6340-color-space-what-is-it-and-why-you-should-use-aces

https://polycount.com/discussion/211577/difference-between-the-4-types-of-tone-mapping-in-toolbag-3