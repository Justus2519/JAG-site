//Must be imported to 'menu-types.ts'

function PlayMenu({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    function chooseGameMode(n: number){
        console.log(n);
        menuSwitch('SizeMenu');
    }
    return (
        <div className='menu'>
                <h2>
                    <button onClick={()=>{chooseGameMode(1)}}>
                        Game Mode 1
                    </button>
                </h2>
                <h2>
                    <button onClick={()=>{chooseGameMode(2)}}>
                        Game Mode 2
                    </button>
                </h2>
                <h2>
                    <button onClick={()=>{chooseGameMode(3)}}>
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