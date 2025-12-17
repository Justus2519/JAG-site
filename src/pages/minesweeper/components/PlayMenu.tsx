import {GameModes} from '../settings-and-modes';
import Popup from './Popup';
import { useState } from "react";

function PlayMenu(
    {
        menuSwitch, 
        modeSwitch
    }: 
    {
        menuSwitch: (btn: string) => void,
        modeSwitch: (btn: string) => void
    }
) 
{
    function chooseGameMode(gm: string){
        modeSwitch(gm);
        menuSwitch('SizeMenu');
    }
    const [info, setInfo] = useState('none');
    return (
        <div className='menu'>
                <div className="context-button-box">
                <h2>
                    <button onClick={()=>chooseGameMode(GameModes.Classic)}>
                        {GameModes.Classic}
                    </button>
                </h2>
                <h2>
                    <button className="context-button" onClick={()=>setInfo(GameModes.Classic)}>
                        i
                    </button>
                </h2>
            </div>
            <div className="context-button-box">
                <h2>
                    <button onClick={()=>chooseGameMode(GameModes.Schrodinger)}>
                        {GameModes.Schrodinger}
                    </button>
                </h2>
                <h2>
                    <button className="context-button" onClick={()=>setInfo(GameModes.Schrodinger)}>
                        i
                    </button>
                </h2>
            </div>
            <div className="context-button-box">
                <h2>
                    <button>
                        Coming Soon
                    </button>
                </h2>
                <h2>
                    <button className="context-button">
                        i
                    </button>
                </h2>
            </div>
            <Popup trigger={info===GameModes.Classic} setInfo={setInfo}>
                <p className='popup-p'>Creates a simple, minesweeper game that is always winnable</p>
            </Popup>
            <Popup trigger={info===GameModes.Schrodinger} setInfo={setInfo}>
                <p className='popup-p'>In normal minesweeper the board is pre-determined. But in Schrodinger's Minesweeper every tile is in a state of quantum superposition. You'll only find out if it's a bomb or safe after you reveal it!</p>
            </Popup>
            <Popup trigger={info==="GAMEMODE3"} setInfo={setInfo}>
                <p className='popup-p'>Explanation</p>
            </Popup>
                <h3>
                    <button onClick={()=>{menuSwitch('Menu')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default PlayMenu;