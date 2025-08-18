//Must be imported to 'menu-types.ts'

function BoardGen({
    menuSwitch,
    genSwitch,
}: {
    menuSwitch: (btn: string) => void;
    genSwitch?: (btn: string) => void;
}) {
    return (
        <div className="menu">
            <h2>
                <button>Classic</button>
            </h2>
            <h2>
                <button>Option 2</button>
            </h2>
            <h2>
                <button>Schrodinger's Minesweeper</button>
            </h2>
            <h3>
                <button
                    onClick={() => {
                        menuSwitch("Settings");
                    }}
                >
                    Back
                </button>
            </h3>
        </div>
    );
}

export default BoardGen;
