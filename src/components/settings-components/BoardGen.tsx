//Must be imported to '../../App.tsx'
import {GenModes} from '../../settings-and-modes';

function BoardGen({
    menuSwitch,
    genSwitch,
    genSelected
}: {
    menuSwitch: (btn: string) => void;
    genSwitch: (btn: string) => void;
    genSelected: string;
}) {
    return (
        <div className="menu">
            <h2>
                <button onClick={()=> genSwitch(GenModes.Classic)}>
                    {genSelected===GenModes.Classic ? '>Classic': 'Classic'}
                </button>
            </h2>
            <h2>
                <button onClick={()=> genSwitch(GenModes.Random)}>
                    {genSelected===GenModes.Random ? `>${GenModes.Random}`: GenModes.Random}
                </button>
            </h2>
            <h2>
                <button onClick={()=> genSwitch(GenModes.Simple)}>
                    {genSelected===GenModes.Simple ? `>${GenModes.Simple}`: GenModes.Simple}
                </button>
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
