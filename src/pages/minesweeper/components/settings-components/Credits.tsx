//Must be imported to 'menu-types.ts'

function Credits({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <p>Made by: J. Glasgow</p>
                <p>Some links that were helpful in building this app:</p>
                <a href="https://dev.to/mbarzeev/creating-a-minesweeper-game-in-solidjs-the-board-3p5h">Creating a Minesweeper Game in SolidJS</a>
                <a href="https://minesweepergame.com/math/algorithms-for-minesweeper-game-grid-generation-2017.pdf">Algorithms for Minesweeper Game Grid Generation</a>

                <h3>
                    <button onClick={()=>{menuSwitch('Settings')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default Credits;