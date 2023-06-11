---
title: "Lighting 💡"
enableToc: false
---

## 🚧Work in Progress🚧

## Volumetric Fog
### Fog Object
- Plane is a good shape (only convex shapes work)
- Noise into Principled Volume plugged into Emission Strength  with Density 0 or use Density input.

### Fog Light
- Volume Scatter node
- Render settings:
    - Volumetric Clamping (Bigger values dulls light source, increase light intensity to get same amount of light)
    - Volumetric Tile Size (Lower values increase quality)    
    - Volumetric Samples (Reduces noise)
    - Volumetric Shadows (Adds realism to fog fall of)
    - Soft Shadows
    - Increase Cube Size
    - Increase Cascade Size

## Embers

## God Ray

Blocky edges problem (in Blender Eevee):

- Increase Cube Size (Shadows)
- Increase Cascade Size (Shadows)
- Increase Tile Size (Volumetrics)
- Increase Samples (Volumetrics)
- Increase Samples



## Theory
![[Pasted image 20230604224125.jpg|800]]
![[Pasted image 20230604224132.jpg|800]]


Links
https://www.youtube.com/watch?v=XLEvpel3nHY