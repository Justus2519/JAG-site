import '../styles/Board.css';

function boardGen(board: string){

}

function Board({
    size,
    genType,
    mode
}: {
    size?: string;
    genType?: string;
    mode?: string;
}) {
    const tiles: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    switch(size){
        case 'small'://SMALL BOARD
            return(
                <div className='board-sm'>
                    {tiles.map((tile: number, index: number)=><div className='tile' key={index}>{tile}</div>)}
                </div>
            )
        case 'medium':
            return(
                <div className='board-md'>
                    {tiles.map((tile: number, index: number)=><div className='tile' key={index}>{tile}</div>)}
                </div>
            )
        case 'large':
            return(
                <div className='board-lg'>
                    {tiles.map((tile: number, index: number)=><div className='tile' key={index}>{tile}</div>)}
                </div>
            )
    }
    return(
        <h3>
            Game
        </h3>
    )
}

export default Board;
