import React from "react";

import "../styles/Board.css";
import { generation } from "../game-logic";
import { emptyGeneration } from "../game-logic";
import Tile from "./Tile";
import { TileObject } from "../game-logic";
import { autofill } from "../game-logic";
import { gameCheck } from "../game-logic";

import { GameSizes } from "../settings-and-modes";
import { GameStates } from "../settings-and-modes";

function Board({
    size,
    genType,
    mode,
}: {
    size: number,
    genType: string,
    mode: string,
}) {
    const [gameState, setGameSt] = React.useState(GameStates.Fresh);
    const [tiles, tilesSet] = React.useState(emptyGeneration(size));

    function gameStart(index: number) {
        let newTiles = generation(size, genType);
        newTiles = autofill(size, index, newTiles);
        tilesSet(newTiles);
        setGameSt(GameStates.InProgress);
    }
    function gameLose(){
        //Game lose function. Resets timer and flags
    }


    function tileAffect(tile: TileObject, index: number){
        let clonedTiles = tiles.slice();
        clonedTiles[index] = tile;
        clonedTiles = autofill(size, index, clonedTiles);
        if(gameCheck(clonedTiles)) setGameSt(GameStates.Won);
        tilesSet(clonedTiles);
    }

    let sizeName = "board-sm";
    switch (size) {
        case GameSizes.Medium:
            sizeName = "board-md";
            break;
        case GameSizes.Large:
            sizeName = "board-lg";
            break;
    }
    if(gameState===GameStates.Won){
        return <h1>YOU WON</h1>
    }
    return (
        <div
            className={sizeName}
            style={
                {
                    // Inject as CSS variable
                    "--row-length": size,
                } as React.CSSProperties
            }
        >
            {tiles.map((_: TileObject, index: number) => (
                <Tile
                    tiles={tiles}
                    key={index}
                    id={index}
                    gameState={gameState}
                    tileAffect={tileAffect}
                    gameStart={gameStart}
                ></Tile>
            ))}
        </div>
    );
}

export default Board;
