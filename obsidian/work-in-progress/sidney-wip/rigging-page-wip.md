#### Rigging Character for Unreal

A simple yet effective method of rigging a character for Unreal Engine is by exporting the official Unreal Engine rig, and using that to rig your character. The problem with that, however, is that one won't be able to pose and animate the character comfortably, as the Unreal rig is only consists of deform bones and has no quality of life controls. So we'll be converting it to that rig later in the process and won't need to get the rig from Unreal as the add-on comes bundled with it.

>[!info]- If you still wish to get the Unreal Engine rig into Blender and use that instead, then here's how.
>
><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/etXY2udjFls?si=cn6KeATCuo5MF6Ed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>
>To get your hands on this rig, you'll need to create a new UE5 project using the third person template. If you don't see any templates, then make sure the templates are installed.
![[image-2024-03-29-20-08-25.png|550]]
If Unreal crashes at launch with a GPU related error, then you might also have to edit the "DefaultEngine.ini" file in the project directory and change "DX12" to "DX11".
>
>Then navigate to "Content > Characters > Mannequins > Meshes", and pull "SK_Mannequin" into the viewport. Zero out all the location cords and export the selected object as a fbx.




#### UE5 Rig Trivia
This rig is called Mannequin and widely accepted as the industry standard in the games industry. The benefit of everyone using the same rig, is that sharing animations is incredibly simple.


_The name Mannequin stems from the names Manny and Quinn, which are the names of the male and female versions. The combination of names nicely indicates, that the rig is meant to be used for both male and female characters. _

#### Using UE5's Mannequin to Rig Your Character

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1dKUkMi0e18?si=zeBdB-Y_31D-5UGV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UjgTG6dzrpY?si=YsdjCeXNJtcHtFzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


But before that, let's quickly go over how to align the bones of the base UE5 Mannequin rig to your characters mesh in Blender. As RoyalSkies mentioned in the video above, one has to watch out not to pull around the bones incorrectly. To prevent oneself from accidentally breaking the rig while moving the bones around, the [Game Rig Tools](https://toshicg.gumroad.com/l/game_rig_tools) add-on is used (choose the Unreal Module version). For Maya the [Unreal 5 Skeleton EDITOR](https://www.artstation.com/marketplace/p/jjP19/unreal-5-skeleton-editor-maya) plugin is used instead.

The Game Rig Tools (Unreal Module version) add-on actually comes with the UE5 Mannequin rig, which is created after clicking the Initiate Mannequin button. 

Here's a quick video on using the add-on.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CIViLsI3SCU?si=gJ3mRfSdya4oBD7k&amp;start=54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here's are two full deep dive videos on the Game Rig Tools add-on, which also nicely explain why game rigs are so different from normal animation rigs. The first video focuses more on the general features of the base add-on, while the second video focuses on the Unreal Module version of the add-on.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iZBx1I7vmQ0?si=iQhZ3Q9Yy9Zolz0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U23WyAd8o_8?si=CbgjoRATgdEPkahv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Some key takeaways are:

- Blender allows for creating complex control rigs, which make animating characters a lot easier. These extra controls should however not be exported into Unreal, Unreal only cares about deform bones and anything more will mess things up
- It's quite important for Unreal, that the hierarchy is correct, the top element is always called "root"
- When not using a game-ready rig, squashy bones won't properly export to Unreal
- Game ready rigs should be controlled with constraints exclusively and no parenting
- The characters mesh should exclusively be connected to the deform rig via vertex groups and no parenting


After the tweak controls are all placed, it's time to click Apply Rig in the Game Rig Tool Menu. 


If you require more bones than the Mannequin rig has, then use Unreal's Mannequin rig as a base and add the bones you need to that.



#### Overview Text

_This pipeline will allow for a seamless transfer into Unreal Engine and make use of your own or animations as well as Unreal Engine compatible animations made by others, and how to make non Unreal Engine compatible animations compatible. Other topics that will be covered here are how to deal with characters that have unusual anatomy, like a character with more than two arms or a tail, and still use all the animations. As well as how to add or remove bones in a bone chain like the spine without breaking the rig for Unreal. This is done through a process called retargeting, where animations with other skeletons structures are mapped to your character's skeleton._



#### Notes

- Retargeting will also have to be done if the character has very cartoon proportions, even if all the bones are default.

- I'll be linking specific video when fitting, but I recommend watching this amazing series by CG Dive.

https://www.youtube.com/playlist?list=PLZpDYt0cyiusytIPAOTPRzsa4GK6LgY3_

- Eye Bone has to be exactly at center of eye
- Jaw bone position is vital
- Asymmetrical rigs can have problems, however with rigify's upgraded rig this isn't a problem anymore
- Have as much as logically possible merged together and have as little overlaying meshes and faces as possible, to avoid rigging issues (explain why this is a myth and not feasible and how one can circumvent the issues that arise with it)

**Outliner layout:**

![[Pasted image 20230604225851.png]]