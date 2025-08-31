# Minesweeper

## Overview

The popular video game Minesweeper re-made from the ground up with some user configurability in the game.

## Details

All the tiles are represented as one array $S$, where $n, m\in \mathbb{N}$ represent the number of rows and columns respectively and where

$$S = \\{s_{0_0}, ..., s_{0_{m-1}}, ...,s_{{n-1}_{m-1}} \\}$$

$s_{i_j}$ has a value of -1 if its a mine and {1, ..., 8} if not.

### Generation types

#### Random:

randomly generates mines. Will often lead to unsolvable boards since no game solving logic is applied to generation.

#### Simple:

Randomly generated solvable board. Primitive game solving logic present in the form of the Single Point Strategy. Similar to how a human solves MS, for each known tiles we run a loop of:

1. If the tile touches the same amount of mines as the amount of marked squares, then the rest of its neighbours are safe and we reveal them
2. If the tile touches the same amount of mines as the amount of unknown neighbours, then all those neighbours must be bombs and we flag them.
