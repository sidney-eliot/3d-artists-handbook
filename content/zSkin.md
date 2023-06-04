---
title: "Skin"
enableToc: false
---

# ⚠COMPLETELY UNFINISHED⚠

# Overview
There are a couple of ways of making skin/ skin shaders. The first thing to consider is the style. Realistic or stylized/ anime.

### Realistic Skin
For realistic one can use real skin textures and project them onto the model, one can sculpt the pores and other skin detail, one can hand paint maps like Subsurface scattering and one can procedurally generate things like freckles. Use a combination of some or all of these methods for realistic skin

### Stylized/ Anime Skin
For stylized/ anime skin one can hand paint all the skin tones variations, use dynamic shaders like cell shaders, spray paint or generate things like freckles, 



# Resources
- https://flippednormals.com/downloads/texture-stylized-skin-material/
- https://texturing.xyz/

# Sculpted Skin


# Texturing Skin

# High Res Skin Projecting

# Blender Shader Node Skin
- Set Principled BSDF Sub Surface Scatter mode to Random Walk
- For Eevee turn on Subsurface refraction in the material settings

### Node Skin Method 1
1. Add Subsurface Scattering with noise
    <details>
    <summary>Nodes</summary>

    <img src="https://i.imgur.com/MCz7Yg6.png">
    </details>
2. Add base color texture
    <details>
    <summary>Nodes</summary>

    <img src="https://i.imgur.com/xHPRf4i.png">
    </details>
3. Add bump based off of base color
    <details>
    <summary>Nodes</summary>

    <img src="https://i.imgur.com/qdMmztX.png">
    </details>

4. Add roughness based off of base color
    <details>
    <summary>Nodes</summary>

    <img src="https://i.imgur.com/lYOiAm7.png">
    </details>

### Node Skin Method 2
1. Create a vertex color and in vertex paint mode under Paint select Dirty Vertex Colors. Change the Blur iterations to something between 3 and 5.
    <details>
    <summary>Nodes</summary>

    <img src="https://i.imgur.com/G23Q9AQ.png">
    </details>
