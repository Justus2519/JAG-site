
function Menu({menuSwitch}: {menuSwitch: (btn: string) => void}){
    return(
        <div className='menu'>
                <h1>Minesweeper</h1>
                <h2>
                        <button onClick={()=>{menuSwitch('PlayMenu')}}>
                                Play
                        </button>
                </h2>
                <h3>
                        <button onClick={()=>{menuSwitch('Settings')}}>
                                Settings
                        </button>
                </h3>
        </div>
        )
}
export default Menu;