# Increase Performance
- Turn off statistics (surprisingly grants big boost)
- When possible apply modifier
- When sculpting use multires modifier
- Disable objects from viewport (display symbol)
- Don't overdue it with subD levels and rather increase render SubDiv levels

# Clean Up Interface
- Enter Fullscreen mode (Window > Toggle Windowed Fullscreen)
- Maximize current window inside of blender (Ctrl + Space)
- Hide Left/ Right Tabs (T/ N)
- Toggle visible gizmos in viewport (Viewport Gizmos(menu)). Things to turn off: Navigate
- Toggle overlays in viewport (Viewport Overlays(menu)). Things to turn off: Grid, Floor, Axes X Y Z, Text Info
- Right click on the header to disable parts at the top


# Blender Texture Map Node Setup
Mostly you will want flat materials (textures that don't manipulate the mesh), however sometimes one wants the textures to manipulate the mesh. The following 3 textures node setups are in blender.

### PBR Material
<img src="https://i.imgur.com/WYEEBeo.png" height="600">

### Geometry Displacement Material
```
Base Color map -> Principled BSDF
Metallic map -> “
Roughness map -> “
Normal map -> “
Subdivide mesh
Add displace modifier (select the height map and change strength)
```
Extra Cycles setting: Materials Properties>Settings>Displacement


### Geometry Displacement Material with a Height Map
```
Base Color map -> Principled BSDF
Metallic map -> “
Roughness map -> “
Normal map -> “
Height map -> Displacement node -> Material Output 
Subdivide mesh
```
Extra Cycles setting: Materials Properties>Settings>Displacement

# Blender Color Spaces
```
sRGB:
```
```
Raw:
```
```
Non-Color:
- Used for images that don't actually contain color data
```
```
Linear ACES:
```
```
Linear:
- Used for EXR images
- Best for rendering and compositing
- Corresponds more closely to nature
- Do not directly correspond to human perception/ display devices
```
```
Filmic Log
```

---

# Problem Fixes
### General
- If any modifier or action aren't working properly it might be because one or multiple transforms should be applied first
- Check if the origin/ world origin is at the desired location if a modifier/ action fails
- Maybe there are vertices that overlap each other but aren't connected (fix with: Ctrl + M > Merge by distance)
- Check if face orientation is correct (Viewport Overlays > Face Orientation)
- Bad topology, quads work best with all modifiers/ actions
- Sometimes shading looks bad because viewport shading options like cavity are on
- For curves it is good to turn on handles (Edit Mode > Viewport Overlays > Handles/ Handles Normals)


### Correcting Shading
- Shade smooth
- Turn on auto smooth/ change degree amount (Object Data Properties: Normals>Auto Smooth)
- Average face Area (Alt + N)
- Make sure normals are facing the correct direction
- Use weighted normal modifier
- Use data transfer modifier
- Use Hard Ops Sharpen


# Principled Nodes(Standalone)
### Principled BSDF
<details>
<summary>Expand</summary>

This node is also know as a x and uses the metallic workflow. By combining other nodes this node can be almost totally recreated.
- Base Color -> Color
- Subsurface -> Subsurface scattering
- Metallic -> Metalness
- Specular -> How much reflection is possible
- Specular Tint ->
- Roughness -> Increase/ decrease sharpness of light reflection
- Anisotropic -> Amount of anisotropy for specular reflection. Higher values give elongated highlights along the tangent direction (Cycles only)
- Anisotropic Rotation -> Rotates the direction of anisotropy (Cycles only)
- Sheen -> For cloth like materials near edges
- Clearcoat -> Adds glossy specular layer on top of everything (used for car/ boat paint)
- IOR - > Index of refraction for transmission
- Transmission -> turn material in glass like object
- Emission/ Emission Strength -> The color and strength of the emitted light (bloom needs to be enabled for this to work properly)
- Alpha -> Transparency/Opacity/Alpha (not translucency)
- Normal -> 
- Clearcoat Normal -> Controls the normals of the Clearcoat layer
- Tangent -> Controls the tangent for the Anisotropic layer
![image](https://user-images.githubusercontent.com/85735034/127783221-c8f4deda-9cb5-4e93-86fd-b0e5f0d02ce1.png)

</details>

### Principled Glossy
Used for metals, mirrors and plastic

### Principled Diffuse

### Principled Hair BSDF
- Always use for hair

### Emission
- Used for lights and emissive objects

### Principled Specular
- Uses the old specular workflow

### Principled Volume
- Used for smoke


# Color Correction
### Bright/ Contrast

### Hue Saturation Value

### RGB Curves
- Color correct R/G/B channels

### Color Ramp

# Channel Converter
### Seperate RGB/ Combine RGB
- Allows one to remove a color channel or manipulate a single color channel

### Seperate HSV/ Combine HSV

### Seperate XYZ/ Combine XYZ

# Math
### Clamp
- Set minimum and maximum values
- Used for when exaple the darks are to dark, one can clamp the lowest dark value

### Math
- Used for conversion of values

# Other Interesting Nodes

### Noise Maps
### Texture Maps
### Fresnel

# Materials
### Glass
<details>
<summary>Glass</summary>

### Glass (Eevee)
- Render settings: Screen Space Reflection, Refraction and Half Res Trace
- Material settings: Alpha Hashed for both modes, Screen Space Refraction, Refraction Depth and Backface Culling off.

## Glass (Cycles)

</details>