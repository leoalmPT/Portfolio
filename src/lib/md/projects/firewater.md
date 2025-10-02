## Overview

[Repository](https://github.com/leoalmPT/FireBoy-WaterGirl)

A recreation of the co-operative puzzle platformer *Fireboy and Watergirl*, built entirely in Python with the Pygame library. The primary focus of the project was demonstrating **robust, professional-grade software architecture** through the application of widely recognized **design patterns**.

### Core Gameplay

The game involves two players, Fireboy and Watergirl, who must collaborate to reach their respective exits.

*   **Co-op Mechanics:** Both players must assist each other to activate triggers and overcome barriers.
*   **Element Hazards:** Fireboy is immune to lava but dies in water; Watergirl is immune to water but dies in lava. If either player dies, the level restarts.
*   **Level Design:** Features three distinct levels with mechanisms, obstacles, and fluids, managed via map bytecode for efficient rendering.

### Game Screenshot

<img src="/files/projects/firewater/game.png" alt="Game" width="800" />

## Game Architecture and Patterns

The project's strength lies in its modularity, achieved through the systematic application of design patterns, ensuring high cohesion and low coupling across the system.

### Key Architectural Modules:

| Module | Description |
| :--- | :--- |
| game | Main game loop, constants, and core logic implementation. |
| entities | Contains class definitions for game objects (players, triggers) that interact with game events. |
| sprites | Pygame sprite representations and rendering logic. |
| maps | Bytecode and configuration files for level rendering and loading. |
| utils | General classes and utilities designed to be extensible for other game projects. |

### Design Pattern Implementation:

The architecture utilizes over ten patterns to manage complexity:

| Pattern | Application in Project | Technical Benefit |
| :--- | :--- | :--- |
| **Observer & Subject** | The **Game** acts as the Subject, managing the main loop and events. The **Entity** class extends Observer, allowing game objects (like Menu or Level Manager) to register callbacks for specific events (e.g., 'level change', 'player death'). | Creates a highly decoupled, event-driven communication system. |
| **Finite State Machine (FSM)** | The **Character** (Player) class uses an FSM to control transitions between states (idle, walk, jump, sprint). | Prevents illegal or unexpected state changes, leading to robust and predictable character behavior. |
| **Command** | Used by the **Character** to associate keybinds (loaded from a JSON config) with specific actions/callbacks. | Allows user-defined key configuration to be saved/loaded and enables dynamic input mapping. |
| **Singleton** | Ensures a single instance of the **Event Queue, Sound Manager, and Entity Locator** is available globally. | Provides centralized control and access points for critical, unique resources. |
| **Entity Locator** | Stores, filters, and retrieves all active entities in the game world. | Decouples entities from each other, facilitating collision detection and interaction logic. |
| **Flyweight** | Map **Tile** images are loaded only once and reused across multiple tiles on the map. | Optimizes memory usage by sharing large objects (textures) across many instances. |
| **Component** | **Game** manages the **Menu** and **Level Manager** as interchangeable components that communicate via the Event Queue. | Increases flexibility, allowing easy replacement or extension of major game features. |

### Low-Level Implementations

*   **Collisions:** Handled by the **Game** class using the **Axis-Aligned Bounding Box (AABB)** algorithm implemented in Pygame.
*   **Rendering:** The game loop uses **double buffering** to ensure smooth, tear-free rendering by drawing to an off-screen buffer before swapping.

### Game Control Options

<img src="/files/projects/firewater/controls.png" alt="Controls" width="800" />

## Final Thoughts

This project highlights the effective use of design patterns to create a modular, maintainable game architecture. The combination of event-driven programming, state management, and resource optimization techniques results in a robust platformer that is both fun to play and easy to extend. The focus on clean code and professional software practices ensures that the game can be easily modified or expanded in the future.