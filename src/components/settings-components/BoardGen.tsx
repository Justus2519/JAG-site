//Must be imported to 'menu-types.ts'

function BoardGen({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <h2><button>Option 1</button></h2>
                <h2><button>Option 2</button></h2>
                <h2><button>Option 3</button></h2>
                <h3>
                    <button onClick={()=>{menuSwitch('Settings')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default BoardGen;