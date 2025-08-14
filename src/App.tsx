import React from "react";

import './App.css';

import {menus} from './menu-types';


function App() {
    const [menuType, setMenu] = React.useState(menus[0].type);
    return (
        <div className='game lg-game'>
            <div className="bar">
                <div><p>Time: 00</p></div>
                <div><p>middle</p></div>
                <div><p>Flags: 00</p></div>
            </div>

            {//Maps through different menu pages and displays if active
                menus.map(({ type, Component }) =>
                    menuType === type && <Component menuSwitch={setMenu} key={type} />
                )
            }
            <footer>
                <div><p>HOME</p></div>
            </footer>
        </div>
    )
}

export default App;
