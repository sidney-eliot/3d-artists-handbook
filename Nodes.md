## Essential Nodes

#### Emission node

#### Principled Hair BSDF node
-Allways use for hair

#### Mix Shader node
- Takes to shaders and decides which is used more or less
- Works with black and white data for example Fresnel node

#### Fresnel node

#### Principled BSDF node(Standard node)
- Base Color -> Color
- Subsurface -> Subsurface scattering
- Specular ->
- Specular Tint ->
- Metallic -> Metalness
- Specular -> How much refelction is possible
- Roughness -> Increrase/decrease sharpness of light refelction
- Anisotropic -> Amount of anisotropy for specular reflection. Higher values give elongated highlights along the tangent direction (Cycles only)
- Anisotropic Rotation -> Rotates the direction of anisotropy (Cycles only)
- Sheen -> For cloth like materials near edges
- Clearcoat -> Adds glossy specular layer ontop of everything (used for car/ boat paint)
- IOR - > Index of refraction for transmission
- Transmission -> turn material in glass like object
- Emission -> Strength of the emitted light (however emission node can do more)
- Alpha -> Transparency
- Normal -> For normal maps node
- Cearcoat Normal -> Controls the normals of the Clearcoat layer
- Tangent -> Controls the tangent for the Anisotropic layer
![image](https://user-images.githubusercontent.com/85735034/127783221-c8f4deda-9cb5-4e93-86fd-b0e5f0d02ce1.png)

####Principled Volume
- used for smoke

####Subsurface Scattering
- used for ski, wacs, marble
