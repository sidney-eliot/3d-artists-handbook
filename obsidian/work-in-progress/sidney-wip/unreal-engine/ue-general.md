## Import Settings

Import Settings for mesh

- Combine Meshes - ON
- Material Import Method - Do not create material
- Import Textures - OFF



## Lighting

HDRI https://www.youtube.com/watch?v=Reu26Jzyy4g


## Note
Blender needs "FBX Export > Geometry > Smoothing > Face" option selected (Game engines do not support Edges, only Vertices and Faces. So the “sharp” edge has to be represented by duplicating vertices along it. (The same is done for UV seams, only they are hidden by matching normals across them). So, for example, default cube will have 24 vertices in Unity instead of 8 in Blender if it is exported as flat shaded. I guess Normals only shades everything smooth (doesnt split edges) and other options preserve smooth/flat whenevever possible)


---
---

## Configs




Project\Config\DefaultEngine.ini
DefaultGraphicsRHI=DefaultGraphicsRHI_DX11/DefaultGraphicsRHI_DX12

## Links
https://www.gamedev.tv/courses/enrolled



## Content Drawer

## Object properties


## Notes
- Unreal sets a new origin based on world center. So when exporting an object the origin should be at the world origin.

## x
- Don't ever touch the OS file explore, because unreal is stupid
- Redirectors
- unreal deletes empty folders

## Features to go over
- Debug toggle
- Character Cycle
- Skin variant cycle on that character
- Zoom in
- Animations: Walk, Jump, Idle, some poses
- Sky rotation
- Daytime
- Exposure
- Jiggle
- heel transition

## Scene Hierarchy
|-|-|-|-
|:-:|:-:|:-:|:-:
|Editor||||||
|↳|Lighting||
||↳|Lights(Sky Light, Directional Light, Point Light, ...)|
||RenderFX||
||↳|Height Fog, Sky Atmosphere, Volumetrics(V Fog, V Clouds, V Dust), Post Process Volume|
||Landscape||
||↳|Terrain, Props|

## Content Drawer Hierarchy
|-|-|-|-
|:-:|:-:|:-:|:-:
|Content||||||
|↳|Character||
||↳|CharacterX, CharacterY|
|||↳|Animations, Materials, Meshes, Rigs, Textures
|↳|Environment||
||↳|EnvironmentX, EnvironmentY|
|||↳|Materials, Meshes, Textures
|↳|Audio||
|↳|HDRI||