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
import { FlagCountActions } from "../settings-and-modes";

function Board({
    size,
    genType,
    mode,
    startTimer,
    stopTimer,
    changeFlags
}: {
    size: number[],
    genType: string,
    mode: string,
    startTimer: ()=>void,
    stopTimer: ()=>void,
    changeFlags: (num: number) => void
}) {
    const [gameState, setGameSt] = React.useState(GameStates.Fresh);
    const [tiles, tilesSet] = React.useState(emptyGeneration(size[0]));

    function gameStart(index: number) {
        let newTiles = generation(index, size[0], genType);
        newTiles = autofill(size[0], index, newTiles);
        tilesSet(newTiles);
        setGameSt(GameStates.InProgress);
        startTimer();
        let flags = 0;
        newTiles.forEach((square)=>{
            if(square.bomb) flags++;
        });
        changeFlags(flags);
    }
    function gameLose(){
        //Game lose function. Resets timer and flags
        setGameSt(GameStates.Lost);
        changeFlags(FlagCountActions.Reset);
        stopTimer();
    }


    function tileAffect(tile: TileObject, index: number){
        if(tile.bomb && !tile.covered){
            gameLose();
            return false;
        }
        let clonedTiles = tiles.slice();
        clonedTiles[index] = tile;
        if(tile.covered){//Means tile was flagged
            if(tile.flagged) changeFlags(FlagCountActions.Subtract);
            else changeFlags(FlagCountActions.Add)
            tilesSet(clonedTiles);
            return false;
        }
        clonedTiles = autofill(size[0], index, clonedTiles);
        if(gameCheck(clonedTiles)){
            setGameSt(GameStates.Won)
            changeFlags(FlagCountActions.Reset);
            stopTimer();
        };
        tilesSet(clonedTiles);
    }

    let sizeName = "board-sm";
    switch (size[0]) {
        case GameSizes.Medium[0]:
            sizeName = "board-md";
            break;
        case GameSizes.Large[0]:
            sizeName = "board-lg";
            break;
    }
    if(gameState===GameStates.Won){
        return <h1>YOU WON</h1>
    }
    if(gameState===GameStates.Lost){
        return <h1>YOU LOST</h1>
    }
    return (
        <div
            className={sizeName}
            style={
                {
                    // Inject as CSS variable
                    "--row-length": size[0],
                    "--tile-dimension": `${size[1]}px`
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
                    iSize={size[1]}
                ></Tile>
            ))}
        </div>
    );
}

export default Board;
