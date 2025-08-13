import PlayMenu from './components/PlayMenu';
import Menu from './components/Menu';
import Settings from './components/settings-components/Settings';
import Themes from './components/settings-components/Themes';
import Credits from './components/settings-components/Credits';
import BoardGen from './components/settings-components/BoardGen';

export const menus = [
    { type: 'Menu', Component: Menu },
    { type: 'PlayMenu', Component: PlayMenu },
    { type: 'Settings', Component: Settings },
    { type: 'Themes', Component: Themes},
    { type: 'Credits', Component: Credits},
    { type: 'BoardGen', Component: BoardGen}
];