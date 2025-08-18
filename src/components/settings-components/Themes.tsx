//Must be imported and configured in '../App'
import {ThemeNames} from '../../settings-and-modes';

function Themes(
    {menuSwitch, themeSwitch}: 
    {
        menuSwitch: (btn: string) => void,
        themeSwitch: (btn: string) => void
    }) {
    return (
        <div className='menu'>
            {ThemeNames.map(({shorthand, name})=>
                <h2><button onClick={()=>themeSwitch(shorthand)}>{`${name}`}</button></h2>
            )}
            <h3>
                <button onClick={()=>{menuSwitch('Settings')}}>
                    Back
                </button>
            </h3>
        </div>
    )
}

export default Themes;