//Must be imported to 'menu-types.ts'

function SizeMenu({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <h1>Choose a board size</h1>
                <h2><button>Small</button></h2>
                <h2><button>Medium</button></h2>
                <h2><button>Large</button></h2>
                <h3>
                    <button onClick={()=>{menuSwitch('PlayMenu')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default SizeMenu;