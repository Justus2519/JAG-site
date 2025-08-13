//Must be imported to 'menu-types.ts'

function Themes({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <h2><button>Lean 'N' Green</button></h2>
                <h2><button>Icy Blue</button></h2>
                <h2><button>Red Velvet</button></h2>
                <h2><button>Boiler Plate Gray</button></h2>
                <h3>
                    <button onClick={()=>{menuSwitch('Settings')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default Themes;