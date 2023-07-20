---
title: "📊Optimization"
enableToc: true
---

## Performance (Frame Rate)
Following things will increase performance for real time use.

These points are roughly all the things one needs to take into consideration when working with the model in a game engine like Unreal or Unity. These tips can however also help for things like Marmoset Toolbag Real-Time view files as well as making the 3d software viewport smoother.

- Use as few materials as possible
- Use as few texture maps as possible. By using atlas maps to get many small items together in one texture/ material/ shader
- Batch a lot of small objects together on run time to reduce draw call amount. (This has nothing to do with merging objects in the modeling software)
- 99% of the scene should use one and the same shader
- Don't use alpha. 99% of the stuff people use alpha for these days could be done with actual geometry, and it would both look better and perform better
- Use as little transparent stuff as possible (fire for example needs it) 
- Clean poly flow will ensure better triangle strip generation. Which saves memory and transform time. Yes, sometimes MORE geometry can result in less memory use and less performance loss if done right!
- Character mesh optimization has different rules than those for environments (This is partially because world geometry in games is mostly set to static)

## Industry Examples (Characters)

- [Games polycount list 1](https://polycount.com/discussion/126662/triangle-counts-for-assets-from-various-videogames)
- [Games polycount list 2](https://polycount.com/discussion/141061/polycounts-in-next-gen-games-thread)


I didn't add platform because basically all are both PC and Console. The focus here is mainly the characters of games, except for if explicitly stated differently.

|Example|Polycount(tris)/ LOD's|Texture Maps|Map Channels/ Bit Depths|Links
|:-:|:-:|:-:|:-:|:-:
|Overwatch - Blizzard - 2016|4 LOD's: LOD0=45k, LOD1=22k, LOD2=11k, LOD3=5.5k. Plus around 15k for weapon|2k (Emissive is usually reduced to 1024 or 512) The same set is made for weapons at 1024x1024. Heroes with visible skin also get a blood map (24 bit RGB) that our skin shader uses to fake sub-surface scattering. All textures must be under 30mb after block compression|Color (24 bit RGB) + Ambient Occlusion (8 bit gray), combined into a 32 bit RGBA map. Specular (8 bit gray) + Roughness (8 bit gray), combined into a 16 bit map. Emissive (8 bit gray)|[Source](https://polycount.com/discussion/170394/technical-study-overwatch-image-heavy)
|Resident Evil Village - Capcom - 2021|Lady Dimitrescu is 350k. And the Duke is 300k
|League of Legend - Riot|
|Killzone Shadow Fall - Guerrilla Games - 2013|LOD1=40k, LOD7=150
|Call of Duty: Ghosts - 2013|LOD0=23k
|The Order 1886 - 2015|100k
|Rainbow Six Siege - 2015|40k|3 x 2k maps
|Street Fighter 5 - Capcom - 2016|80k (more than half of that in head)
|Dishonored 2 - Arcane Studio - 2016||||[ArtStation](https://www.artstation.com/artwork/QwAqr)
|Final Fantasy 15 - Square Enix - 2016|100k per character of that 20k for hair|||[Source](http://gematsu.com/2014/12/final-fantasy-xv-detailed-famitsu)
|Nier: Automata - PlatinumGames - 2017|100k
|Horizon : Zero Dawn - Guerrilla Games - 2017|Thunderjaw=550k, Alloy's Hair=100k|||[Source](https://www.technobuffalo.com/horizon-zero-dawn-eyes-on-preview-post-post-apocalyptic), [ArtStation](https://www.artstation.com/artwork/EDbk4)
|Fortnite - Epic Games - 2017|LOD0=23k
|Fractured Space - 2016|Spaceship = 30-280k
|Star Citizen|Spaceship=30mil

## Links

- [Polycount/Optimization Article Links](http://wiki.polycount.com/wiki/PolygonCount#Typical_Triangle_Counts)
- [Beautiful, Yet Friendly Part 1](http://www.ericchadwick.com/examples/provost/byf1.html)
- [Beautiful, Yet Friendly Part 2](http://www.ericchadwick.com/examples/provost/byf2.html)


A Deep Dive into the Technical Side of Mesh Rendering:

- [GPU Performance for Game Artists](http://www.fragmentbuffer.com/gpu-performance-for-game-artists/)