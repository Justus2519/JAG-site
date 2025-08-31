//Must be imported to '../../App.tsx'
import {useState} from 'react';

import {GenModes} from '../../settings-and-modes';
import Popup from "../Popup";

function BoardGen({
    menuSwitch,
    genSwitch,
    genSelected
}: {
    menuSwitch: (btn: string) => void;
    genSwitch: (btn: string) => void;
    genSelected: string;
}) {
    const [info, setInfo] = useState('none');
    return (
        <div className="menu">
            <div className="context-button-box">
                <h2>
                    <button onClick={()=> genSwitch(GenModes.Classic)}>
                        {genSelected===GenModes.Classic ? `>${GenModes.Classic}`: GenModes.Classic}
                    </button>
                </h2>
                <h2>
                    <button className="context-button" onClick={()=>setInfo(GenModes.Classic)}>
                        i
                    </button>
                </h2>
            </div>
            <div className="context-button-box">
                <h2>
                    <button onClick={()=> genSwitch(GenModes.Random)}>
                        {genSelected===GenModes.Random ? `>${GenModes.Random}`: GenModes.Random}
                    </button>
                </h2>
                <h2>
                    <button className="context-button" onClick={()=>setInfo(GenModes.Random)}>
                        i
                    </button>
                </h2>
            </div>
            <div className="context-button-box">
                <h2>
                    <button onClick={()=> genSwitch(GenModes.Simple)}>
                        {genSelected===GenModes.Simple ? `>${GenModes.Simple}`: GenModes.Simple}
                    </button>
                </h2>
                <h2>
                    <button className="context-button" onClick={()=>setInfo(GenModes.Simple)}>
                        i
                    </button>
                </h2>
            </div>
            <Popup trigger={info===GenModes.Classic} setInfo={setInfo}>
                <p className='popup-p'>Not currently implemented</p>
            </Popup>
            <Popup trigger={info===GenModes.Random} setInfo={setInfo}>
                <p className='popup-p'>Very hard. Randomly generates mines. Will often lead to unsolvable game boards.</p>
            </Popup>
            <Popup trigger={info===GenModes.Simple} setInfo={setInfo}>
                <p className='popup-p'>A simple generation algorithm which always guarantees a solvable game at the cost of diverse boards and more advanced problem solving.</p>
            </Popup>
            <h3>
                <button
                    onClick={() => menuSwitch("Settings")}
                >
                    Back
                </button>
            </h3>
        </div>
    );
}

export default BoardGen;
