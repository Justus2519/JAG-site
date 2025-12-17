import {GameSizes} from '../settings-and-modes';

function SizeMenu({
    menuSwitch,
    sizeSwitch,
}: {
    menuSwitch: (btn: string) => void,
    sizeSwitch: (btn: typeof GameSizes.Small) => void,
}) {
    function goToBoard(sz: typeof GameSizes.Small){
        sizeSwitch(sz);
        menuSwitch("Board");
    }
    return (
        <div className="menu">
            <h1>Choose a board size</h1>
            <h2>
                <button onClick={()=>goToBoard(GameSizes.Small)}>Small</button>
            </h2>
            <h2>
                <button onClick={()=>goToBoard(GameSizes.Medium)}>Medium</button>
            </h2>
            <h2>
                <button onClick={()=>goToBoard(GameSizes.Large)}>Large</button>
            </h2>
            <h3>
                <button
                    onClick={() => {
                        menuSwitch("PlayMenu");
                    }}
                >
                    Back
                </button>
            </h3>
        </div>
    );
}

export default SizeMenu;
