import React from 'react';



function Tile(
    {neighbours}:
    {neighbours: number}
){
    const [tileState, setTile] = React.useState('covered');
    const tileClick = ()=>{
        if(tileState==='covered'){
            if(neighbours===0) setTile('empty');
            else setTile('uncovered');
        }
        if(neighbours===-1){
            setTile('bomb');
        }
    }
    return <div className={`tile tile-${tileState}`} onClick={tileClick}>{neighbours > 0 && neighbours}</div>
}


export default Tile;