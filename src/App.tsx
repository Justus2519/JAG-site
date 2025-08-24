import React from "react";

import "./styles/App.css";

//Settings types
import {GameSizes} from './settings-and-modes';
import {GenModes} from './settings-and-modes';
import {GameModes} from './settings-and-modes';
import {ThemeNames} from './settings-and-modes';

//Game and Menu Component Imports
import PlayMenu from "./components/PlayMenu";
import Menu from "./components/Menu";
import Settings from "./components/settings-components/Settings";
import Themes from "./components/settings-components/Themes";
import Credits from "./components/settings-components/Credits";
import BoardGen from "./components/settings-components/BoardGen";
import SizeMenu from "./components/SizeMenu";
import Board from "./components/Board";

function App() {
    const [menuType, setMenu] = React.useState("Menu"); //MENU TYPE STATE VARS
    const [gameMode, setMode] = React.useState(GameModes.Classic);
    const [gen, setGenType] = React.useState(GenModes.Classic);
    const [gameSize, setSize] = React.useState(GameSizes.Small);
    const [theme, setTheme] = React.useState(ThemeNames[0].shorthand);
    const [timer, setTimer] = React.useState(0);
    const [flags, setFlags] = React.useState(0);

    //Timer and Flags


    //Menu type definitions
    const menus = [
        { type: "Menu", component: <Menu menuSwitch={setMenu}/>},
        {
            type: "PlayMenu",
            component: <PlayMenu menuSwitch={setMenu} modeSwitch={setMode}/>,
        },
        { 
            type: "SizeMenu", 
            component: <SizeMenu menuSwitch={setMenu} sizeSwitch={setSize}/>},
        { type: "Settings", component: <Settings menuSwitch={setMenu}/>},
        { 
            type: "Themes", 
            component: <Themes  menuSwitch={setMenu} themeSwitch={setTheme} themeSelected={theme}/>},
        { type: "Credits", component: <Credits  menuSwitch={setMenu}/>},
        { 
            type: "BoardGen", 
            component: <BoardGen  menuSwitch={setMenu} genSwitch={setGenType} genSelected={gen}/>
        },
        {
            type: "Board",
            component: <Board size={gameSize} genType={gen} mode={gameMode}/>
        }
    ];
    return (
        <div className={`game ${theme}-game`}>
            <div className="bar">
                <div>
                    <p>{`Time: ${timer}`}</p>
                </div>
                <div>
                    <p>M</p>
                </div>
                <div>
                    <p>{`Flags: ${flags}`}</p>
                </div>
            </div>
            <div className="board">
                {
                    //Maps through different menu pages and displays if active
                    menus.map(({ type, component }) => {
                        return (menuType === type && component)
                    }
                    )
                }
            </div>
            <footer>
                <div>
                    <button onClick={() => setMenu("Menu")}>HOME</button>
                </div>
            </footer>
        </div>
    );
}

export default App;
