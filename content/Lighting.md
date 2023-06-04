---
title: "Anime Style Characters"
enableToc: false
---

# ⚠COMPLETELY UNFINISHED⚠

# Volumetric Fog
## Fog Object
- Plane is a good shape (only convex shapes work)
- Noise into Principled Volume plugged into Emission Strength  with Density 0 or use Density input.

## Fog Light
- Volume Scatter node
- Render settings:
    - Volumetric Clamping (Bigger values dulls light source, increase light intensity to get same amount of light)
    - Volumetric Tile Size (Lower values increase quality)    
    - Volumetric Samples (Reduces noise)
    - Volumetric Shadows (Adds realism to fog fall of)
    - Soft Shadows
    - Increase Cube Size
    - Increase Cascade Size

# Embers

# God Ray

<details>
<summary>Blocky edges problem</summary>

- Increase Cube Size (Shadows)
- Increase Cascade Size (Shadows)
- Increase Tile Size (Volumetrics)
- Increase Samples (Volumetrics)
- Increase Samples
</details>



# Theory
<details>
<summary>Example</summary>
<img src="https://i.imgur.com/3QaTKJG.jpg" width="800">
<img src="https://i.imgur.com/0zzCoJO.jpg" width="800">
</details>