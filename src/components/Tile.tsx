import React from "react";

import {TileObject} from '../game-logic';
import { GameStates } from "../settings-and-modes";


function Tile(
    {tiles, id, gameState, tileAffect, gameStart, iSize}:
    {
        tiles: TileObject[],
        id: number,
        gameState: string,
        tileAffect: (tile: TileObject, index: number) => void,
        gameStart: (index: number) => void,
        iSize: number
    }
){
    const tile = tiles[id].tileCopy();
    function tileClick(){
        if(tiles[id].covered){
            tile.uncover();
        }
        if(gameState===GameStates.Fresh) gameStart(id);
        else tileAffect(tile, id);
    }
    function tileFlag(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.preventDefault();
        if(e.button===2){
            tile.flag();
        }
        tileAffect(tile, id);
    }
    let tileState = 'covered';
    if(tile.flagged)
        return <div className="tile tile-covered" onContextMenu={tileFlag}>
            🏴
        </div>
    
    if(!tile.covered){
        tileState = 'uncovered';
        if(tile.bomb) tileState='bomb';
        if(tile.nCount===0) tileState='empty';
    }

    return <div className={`tile tile-${tileState}`} onClick={tileClick} onContextMenu={tileFlag}>{tiles[id].covered ? '?': tiles[id].nCount}</div>
}


export default Tile;