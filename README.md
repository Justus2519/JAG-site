# Minesweeper

Minesweeper app. All components fall under App.tsx in the virtual DOM.

Game functions and logic can be found in game-logic.tsx

All the tiles are represented as one array $S$, where $n, m\in \mathbb{N}$ represent the number of rows and columns respectively and where

$$S = \\{s_{0_0}, ..., s_{0_{m-1}}, ...,s_{{n-1}_{m-1}} \\}$$

$s_{i_j}$ has a value of -1 if its a mine and {1, ..., 8} if not

