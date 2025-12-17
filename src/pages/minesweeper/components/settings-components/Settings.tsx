//Must be imported to 'menu-types.ts'

function Settings({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <h2>
                    <button onClick={()=>{menuSwitch('Themes')}}>
                        Themes
                    </button>
                </h2>
                <h2>
                    <button onClick={()=>{menuSwitch('Credits')}}>
                        Credits
                    </button>
                </h2>
                <h2>
                    <button onClick={()=>{menuSwitch('BoardGen')}}>
                        Board Generation
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

export default Settings;