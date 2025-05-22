
---
---
## Project
- empty

## Blueprint
- Visual scripting language(OO based)
- Objects created by this scripting language are referred to as blueprints

## Object
- empty

## Class
- Class defines the behaviors and properties of a particular Actor or Object

## Actor
- Any object that can be placed into a level
- Supports 3D transformations such as translation, rotation, and scaling
```
Example:
- Static mesh
- Camera
- Light
```

## Casting
- Get properties of the class of the actor casted

## Component
- Is added to an actor providing the actor with new functionalities
```
Example:
- Spot Light Component -> make actor emit light
- Rotating Movement Component -> make actor spin
- Audio Component -> ability to play sound
```

## Pawn
- Subclass of actor
- When can be possessed by Human/AI or unpossessed
```
Example:
- Player avatar
- AI Dragon avatar
```

## Character
- Subclass of Pawn
```
Example:
- Collision setup
- Input bindings
- Bipedal movement
- Rig
```

## Player Controller
- Translates user input into in game actions
```
Example:
- Controller for character one
- Controller for character one
- Controller for possesing an enemy
```

## AI Controller
- An AI to controll and bot
```
Example:
- Goblin AI
```

## Player State
- State of participant of the game such as human or a bot that is simulating a player
- Non player AI that exsists as a part of the world doen't have a player state
```
Example:
- Name
- Level
- Health
- Whether they are currently carrying the flag in a Capture the Flag game
```

## Game Mode
- Game rules
- In multiplayer game mode is on server and a copy is sent to clients
```
Example:
- If a game can be paused
- Win conditions
```

## Game State
- Container that holds info you want replicated to every client
- The State of the Game
```
Example:
- Weather a match started
- Win conditions
- Game score
```

## Brush
- A prop of the final objects

## Volume
- "Bounded" 3d spaces that have different effects
```
Example:
- World border
- Poision area that damages player
- Mist area
- Save point
```

## Level
- Gameplay area
- Every level is saved as a .umpa file
```
Example:
- Everything the player can see and interact with
- Geometry
- Pawns
- Actors
```

## World
- Contains all levels
- Handles streaming of levels
- Creates dynamic actors