//Must be imported to '../../App.tsx'
import {GenModes} from '../../settings-and-modes';

function BoardGen({
    menuSwitch,
    genSwitch,
}: {
    menuSwitch: (btn: string) => void;
    genSwitch: (btn: string) => void;
}) {
    return (
        <div className="menu">
            <h2>
                <button onClick={()=> genSwitch(GenModes.Classic)}>Classic</button>
            </h2>
            <h2>
                <button onClick={()=> genSwitch(GenModes.Random)}>Random</button>
            </h2>
            <h2>
                <button onClick={()=> genSwitch(GenModes.Simple)}>Simple</button>
            </h2>
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
