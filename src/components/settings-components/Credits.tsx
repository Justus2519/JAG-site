//Must be imported to 'menu-types.ts'

function Credits({menuSwitch}: {menuSwitch: (btn: string) => void}) {
    return (
        <div className='menu'>
                <p>Credit: J. Glasgow, J. Wang</p>
                <h3>
                    <button onClick={()=>{menuSwitch('Settings')}}>
                        Back
                    </button>
                </h3>
        </div>
    )
}

export default Credits;