
---
---

Following settings are important to use for the best visual fidelity. Terms meanings are explainded 
[here](https://github.com/Epicrex/3DArtistsHandbook/wiki/0.0_Tecnical-Terms_Theory).

## Ray tracing
```
- Enable ray tracing (Sky Light settings)
- Enable cast ray tracing shadows (Sky Light settings)
```

## Ambient Occlusion
```
- Set Min Occlusion to 0 (Sky Light settings)
```
<details>
<summary>Comparison</summary>
No Ambient Occlusion

![No Ambient Occlusion](https://i.imgur.com/WkqM2Li.png)

Ambient Occlusion

![Ambient Occlusion](https://i.imgur.com/MkwP0Vn.png)

No Ambient Occlusion

![No Ambient Occlusionon](https://i.imgur.com/vdGTOET.png)

Ambient Occlusion

![Ambient Occlusion](https://i.imgur.com/z6Id944.png)
</details>

## Translucent shadows
- Light passing through a translucent material that is applied to a static shadow casting mesh will lose some energy

<details>
<summary>Example</summary>
Translucent shadows (Note that color isn't important here)

![Translucent shadows](https://i.imgur.com/CHg6bnG.png)
</details>

## Translucent shadow color

## Other
```
Generate Mesh distance fields (Project settings)
Anti-aliasing
Post-processing
UV-channel 0 (albedo, roughness)
UV-channel 1 (light map)
```

## Settings locations
```
- Project settings
- Preferences
- Sky Light settings
- World settings
```

## Resources
- https://docs.unrealengine.com/4.27/en-US/Resources/Showcases/PhotorealisticCharacter/
- https://www.unrealengine.com/en-US/blog/striving-for-real-time-photorealism
