import React from 'react';
import {TileObject} from '../game-logic';


function Tile(
    {tiles, id, firstClick, tileAffect, gameStart}:
    {
        tiles: TileObject[],
        id: number,
        firstClick: boolean,
        tileAffect: (tile: TileObject, index: number) => void,
        gameStart: (index: number) => void,
    }
){
    const tile = tiles[id].tileCopy();
    const tileClick = (event: React.MouseEvent)=>{
        if(event.type === 'contextMenu') tile.flag();
        else{
            if(tiles[id].covered){
                tile.uncover();
            }
        }
        if(firstClick) gameStart(id);
        else tileAffect(tile, id);
    }
    let tileState = 'covered';
    if(!tile.covered){
        tileState = 'uncovered';
        if(tile.bomb) tileState='bomb';
        if(tile.nCount===0) tileState='empty';
    }

    return <div className={`tile tile-${tileState}`} onClick={tileClick} onContextMenu={tileClick}>{tiles[id].covered ? '?': tiles[id].nCount}</div>
}


export default Tile;