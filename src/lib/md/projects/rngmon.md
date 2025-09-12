## Overview

[Repository](https://github.com/leoalmPT/RNG-Manipulation)

This project is a Lua script designed for the [mGBA emulator](https://mgba.io/), specifically tailored for Pokémon Emerald. It serves as a powerful utility for players engaging in RNG (Random Number Generation) manipulation, allowing them to track crucial in-game information in real-time and execute precise inputs to obtain desired Pokémon outcomes, such as shiny Pokémon or those with specific IVs.

### Getting a shiny Pokémon

<img src="/files/projects/rngmon/shiny.png" alt="Getting a shiny Pokémon" width="1000" />

## About the Project

The script enhances the player's ability to perform advanced RNG manipulation in Pokémon Emerald, which is known for its predictable RNG system. While external tools like [Pokefinder](https://github.com/Admiral-Fish/PokeFinder) or [PokémonRNG](https://www.pokemonrng.com/) are still required for calculating target frames (e.g., when a shiny Pokémon or a Pokémon with specific IVs will appear), this Lua script provides the in-emulator interface and functionality to execute these manipulations and monitor the results effectively.

**Key Features & Functionalities:**

*   **Real-time Game Data Display:**
    *   **Trainer Information:** Shows the player's Trainer ID (TID) and Secret ID (SID).
    *   **RNG Seeds & Advances:** Displays the initial seed, current seed, and the number of RNG advances, crucial for tracking the game's internal RNG state.
*   **Detailed Pokémon Status Display:** Provides comprehensive information for the currently selected Pokémon (either in the player's party or an opponent's):
    *   **Species & Types:** Pokémon name, its primary and secondary types.
    *   **Nature & Item:** The Pokémon's nature and held item.
    *   **Moves:** All four learned moves.
    *   **Stats (Base, IVs, EVs):** Current HP, Attack, Defense, Special Attack, Special Defense, and Speed stats, along with their underlying Individual Values (IVs) and Effort Values (EVs).
    *   **Ability:** The Pokémon's ability.
    *   **Hidden Power:** Automatically calculates and displays the Hidden Power's type and power.
    *   **Type Matchups:** Shows calculated type counters/weaknesses based on the Pokémon's types.
*   **Dynamic Pokémon Tracking:**
    *   Allows switching between viewing Pokémon in the player's party and enemy Pokémon.
    *   Supports tracking Pokémon in **double battles**, distinguishing between the first and second slots for both party and enemy teams.
*   **Timed Input Execution:**
    *   **Frame-Perfect Button Presses:** Users can input a target frame directly into the emulator's Lua console. The script will then simulate a button press (defaulting to 'A' button, configurable) at that exact frame.
    *   **Offset Calculation:** Facilitates the calculation and application of offsets between a "start" frame (where a state is saved) and a "real" event frame, enabling precise timing.
    *   **State Saving:** Automatically saves the emulator state to slot 9 when a start frame is set, allowing for easy retries.
*   **In-Emulator Guidance:** Provides a dedicated console buffer with instructions on how to use the manipulation features and lists common RNG manipulation offsets (e.g., for Sweet Scent, Egg pickup, Fishing).
*   **User Interface Control:** Allows toggling the information display with a hotkey combination (R + START).

## Technical Details

The project is implemented entirely in **Lua**, leveraging mGBA's Lua scripting API for memory reading, key input simulation, and console buffer management.

*   **Memory Scanning, Decryption, and Unshuffling:** The script directly **scans specific memory addresses** to retrieve raw game state and Pokémon data. For complex Pokémon attributes like species, IVs, EVs, and abilities, it performs **decryption and unshuffling operations** on the raw memory values, replicating the game's internal data structures to extract accurate and meaningful information.
*   **Heavy Caching for Minimal Overhead:** To ensure real-time performance and **minimal overhead**, the script makes **heavy use of a caching mechanism**. Pokémon data, once processed, is stored in this cache, preventing redundant calculations and memory reads for the same Pokémon unless its identifier changes.
*   **Data Parsing:** Contains extensive logic to parse raw memory values into meaningful Pokémon attributes.
*   **Event Handling:** Uses mGBA callbacks to continuously monitor user inputs and advance game frames, ensuring real-time updates and timed event triggers.
*   **Console Output:** Uses mGBA's console buffers to present structured and dynamic information to the user within the emulator's interface.
*   **Game Code Validation:** Includes a check to ensure the script is running on the correct game (Pokémon Emerald, AGB-BPEE) to prevent execution errors on incompatible ROMs.

## Final Thoughts

This RNG manipulation script provides an invaluable tool for Pokémon Emerald enthusiasts aiming for specific Pokémon encounters. By bringing critical information and execution capabilities into the emulator itself, it significantly streamlines the often intricate and precise process of RNG manipulation, demonstrating a clever application of scripting to enhance gameplay.