//Must be imported to 'menu-types.ts'

function Board({
    menuSwitch,
    boardType,
}: {
    menuSwitch: (btn: string) => void;
    boardType: number;
}) {
    switch(boardType){
        case 1:
            console.log(boardType);
    }
    return(
        <h3>
            <button onClick={()=>{menuSwitch('Menu')}}>
                    Quit
            </button>
        </h3>
    )
}

export default Board;
