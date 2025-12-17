import React from "react";

import "../styles/Board.css";
import { generation } from "../game-logic";
import { emptyGeneration } from "../game-logic"; //Generates board with no bombs
import { TileObject } from "../game-logic";
import { autofill } from "../game-logic"; //digs adjacent 0 squares
import { gameCheck } from "../game-logic";

import Tile from "./Tile";

import { GameSizes } from "../settings-and-modes";
import { GameModes } from "../settings-and-modes";
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
    size: typeof GameSizes.Small,
    genType: string,
    mode: string,
    startTimer: ()=>void,
    stopTimer: ()=>void,
    changeFlags: (num: number) => void
}) {
    const [gameState, setGameSt] = React.useState(GameStates.Fresh);
    const [tiles, tilesSet] = React.useState(emptyGeneration(size.Rows));

    function classicStart(index: number) {
        let newTiles = generation(index, size.Rows, genType);
        newTiles = autofill(size.Rows, index, newTiles);
        tilesSet(newTiles);
        let flags = 0;
        newTiles.forEach((square)=>{
            if(square.bomb) flags++;
        });
        changeFlags(flags);
    }

    function gameStart(index: number) {
        if(mode===GameModes.Classic) classicStart(index);
        else{//Schrodinger
            tiles[index].uncover();
            for(let i = 0; i<size.Rows*size.Rows; i++){
                tiles[i].applyQuantumPhysics();
            }
        }
        setGameSt(GameStates.InProgress);
        startTimer();
    }
    function gameLose(){
        //Game lose function. Resets timer and flags
        setGameSt(GameStates.Lost);
        changeFlags(FlagCountActions.Reset);
        stopTimer();
    }


    function tileAffect(tile: TileObject, index: number){
        if(mode===GameModes.Schrodinger && !tile.covered){
            tile.observe();
        }
        else if(tile.bomb && !tile.covered){
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
        if(mode === GameModes.Classic)clonedTiles = autofill(size.Rows, index, clonedTiles);
        if(gameCheck(clonedTiles)){
            setGameSt(GameStates.Won)
            changeFlags(FlagCountActions.Reset);
            stopTimer();
        };
        tilesSet(clonedTiles);
    }

//APPLYING SIZING
    let sizeName = "board-sm";
    switch (size) {
        case GameSizes.Medium:
            sizeName = "board-md";
            break;
        case GameSizes.Large:
            sizeName = "board-lg";
            break;
    }


//HTML ELEMENTS
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
                    "--row-length": size.Rows,
                    "--tile-dimension": `${size.Pixels}px`
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
