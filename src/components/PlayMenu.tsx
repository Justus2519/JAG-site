import {GameModes} from '../settings-and-modes';

function PlayMenu(
    {menuSwitch, modeSwitch}: 
    {
        menuSwitch: (btn: string) => void,
        modeSwitch: (btn: string) => void
    }) {
    function chooseGameMode(gm: string){
        modeSwitch(gm);
        menuSwitch('SizeMenu');
    }
    return (
        <div className='menu'>
                <h2>
                    <button onClick={()=>{chooseGameMode(GameModes.Classic)}}>
                        Classic
                    </button>
                </h2>
                <h2>
                    <button>
                        Game Mode 2
                    </button>
                </h2>
                <h2>
                    <button>
                        Game Mode 3
                    </button>
                </h2>
                <h3>
                    <button onClick={()=>{menuSwitch('Menu')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default PlayMenu;