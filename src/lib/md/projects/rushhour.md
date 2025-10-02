## Overview

[Repository](https://github.com/leoalmPT/RushHour-AI-Agent)

This project is an Artificial Intelligence (AI) agent designed to solve the classic **Rush Hour** sliding block puzzle. The core challenge was to find the optimal sequence of moves to free the designated car while minimizing the total cost, where cost is determined by both moves and time penalties.

The goal was not just to find *a* solution, but the *optimal* path, subject to a unique constraint: a **penalty of 1 point every 100ms**. This constraint shifted the optimization target from simply the minimum number of car moves to the **minimum number of cursor movements** (or 'actions') to reduce latency and total penalty.

### Rush Hour Puzzle Example

<img src="/files/projects/rushhour/rushhour.gif" alt="Rush Hour Example" width="400" />

## About the Project

The AI Agent is structured into three primary components:

*   **Agent.py:** The core controller responsible for executing the search algorithm (Uniform Cost Search or A*) and managing the state.
*   **KeyGenerator.py:** Manages the communication key sequence required by the server (a technical detail of the assignment).
*   **RandomCounter.py:** A unique post-processing module designed to **correct the path** when a random, unexpected move occurs on the board, ensuring the solution path remains valid and optimal.

### Search and Optimization Strategy

The project utilized two primary search methods based on board size:

1.  **Uniform Cost Search (UCS):** Used for standard 6x6 levels.
2.  **A\* Search:** Used for larger, more complex levels, as it requires a good heuristic to remain efficient.

To balance speed and optimality, a crucial design decision was made:
*   **State Representation:** States were considered unique only for different board layouts (ignoring the cursor's position). This significantly reduces the explored search space (nodes), boosting speed.
*   **Cost Function:** The **cursor movement** was used as the primary cost component, ensuring the optimization goal of minimizing actions and time penalty was met, yielding a solution very close to the minimum cost.

## Technical Details (A* Heuristic & Optimizations)

The success of the A* algorithm hinged on a custom, dynamic heuristic that accurately estimates the cost to reach the goal.

### Custom A* Heuristic:

The heuristic calculates the **number of cars blocking the target car (Car A)**, with a dynamic weight based on their own mobility:
*   A blocking car that is **completely blocked** by other cars is given a **higher weight (e.g., 2)**.
*   A blocking car that has **at least one free movement path** is given a **lower weight (e.g., 1)**.
*   The final heuristic value is the sum of these weights.

This dynamic weighting incentivizes the search to prioritize unblocking easily-moved vehicles first, providing a powerful directional bias.

### Algorithmic Optimizations:

*   **Node Management (`Node.py`):** A dedicated class was created to manage node expansion, tracking the parent, board state (string key for comparison), action, cost, and heuristic value.
*   **Dynamic Programming (Memoization):** A dictionary maps the string representation of the board state to its minimum cost, preventing the re-exploration of states already found via a cheaper path.
*   **Lazy Piece Generation:** Child nodes only generate the piece that moved; all other pieces are linked via pointers to the parent node's pieces, minimizing memory usage and copy time.

## Evaluation Methods

Rigorous evaluation was key to validating the chosen approach:

*   **Custom Test Files:** Developed to simulate levels and measure key metrics: total time, number of car moves, and number of cursor moves.
*   **Dataset Testing:** Solutions were evaluated against a dataset of **1000 standard 6x6 levels** and custom-generated larger levels.
*   **Iterative Comparison:** The final `student.py` agent was executed multiple times with different search configurations (heuristics, state representations) to benchmark and identify the best-performing solution.
*   **Heuristic Failure Analysis:** Several unsuccessful heuristics (e.g., distance to exit, total blocking cars) were tested to confirm the superiority of the chosen dynamic blocking-car metric.

## Final Thoughts

This project showcases the effective application of search algorithms and heuristic design in solving a complex optimization problem under unique constraints. The combination of Uniform Cost Search and a custom A* heuristic, along with strategic optimizations, enabled the AI agent to efficiently find near-optimal solutions across a range of puzzle complexities. The dynamic nature of the heuristic and the focus on minimizing cursor movements highlight the importance of tailoring algorithms to specific problem contexts for enhanced performance.