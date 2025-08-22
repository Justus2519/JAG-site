import React from 'react';
import {TileObject} from '../game-logic';


function Tile(
    {tiles, id, firstClick, gameStart}:
    {
        tiles: TileObject[],
        id: number,
        firstClick: boolean,
        gameStart: () => void
    }
){
    const [tileState, setTile] = React.useState('covered');
    const tileClick = (event: React.MouseEvent)=>{
        if(event.type==='contextMenu') console.log('Right click!');
        else{
            if(!firstClick) gameStart();
            if(tileState==='covered'){
                if(tiles[id].nCount===0) setTile('empty');
                else setTile('uncovered');
            }
            if(tiles[id].bomb){
                setTile('bomb');
            }
        }
    }
    
    return <div className={`tile tile-${tileState}`} onClick={tileClick} onContextMenu={tileClick}>{tiles[id].nCount}</div>
}


export default Tile;