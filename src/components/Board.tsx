import '../styles/Board.css';
import generation from '../game-logic';
import Tile from './Tile';

function Board({
    size,
    genType,
    mode
}: {
    size: string;
    genType: string;
    mode: string;
}) {
    const tiles: number[] = generation(size, genType);
    let sizeName = 'board-sm';
    switch(size){
        case 'medium':
            sizeName = 'board-md'
            break;
        case 'large':
            sizeName = 'board-lg'
            break;
    }
    return(
        <div className={sizeName}>
            {tiles.map((tile: number, index: number)=>
            <Tile neighbours={tile} key={index}></Tile>)}
        </div>
    )
}

export default Board;
