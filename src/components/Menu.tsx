//Must be imported to 'menu-types.ts'
//menuSwitch is a prop that is set to be the setMenu function
//So when there is menuSwitch('some menu component') that essentially means setMenu('some menu component').

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