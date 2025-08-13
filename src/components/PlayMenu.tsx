//Must be imported to 'menu-types.ts'

function PlayMenu({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <h2><button>Game Mode 1</button></h2>
                <h2><button>Game Mode 2</button></h2>
                <h2><button>Game Mode 3</button></h2>
                <h3>
                    <button onClick={()=>{menuSwitch('Menu')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default PlayMenu;