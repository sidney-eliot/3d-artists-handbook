


---
---
## Blend modes
Blend Modes describe how the output of the current Material will blend over what is already being drawn in the background
### Opaque Blend
- Surface through which light neither passes nor penetrates
```
- plastics
- metals
- stone
- wood
```
### Masked Blend
- Used to make some parts invisible and others visible
- Needs a mask map plugged into the material(Opacity mask)
- Black/White??? areas are rendered and black/white??? areas a not rendered at all. Grays aren't allowed
- Opacity Mask Clip Value controls what value of the opacity mask texture will be used as a cutoff point, beyond which all darker pixels won't render
```
- Fence
- Chains
```
### Translucent Blend
- Used for objects that require some form of transparency
- Needs an opacity map or a value plugged into the material(Opacity)
- Black areas are completely transparent, white areas are completely opaque (grays in between are allowed)
- Most expensive blend mode
```

```
### Additive Blend
- https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/

### Modulate Blend
- https://docs.unrealengine.com/4.27/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/

## Glass
https://vrayschool.com/ue4-archviz-glass-material/
https://www.unrealengine.com/marketplace/en-US/product/advanced-glass-material-pack