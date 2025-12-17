export const GameModes = {
    Classic: 'classic',
    Schrodinger: 'schrodinger',
}

export const GameSizes = {
    //[row length, tile-dimension in px]
    Small: {Rows: 4, Pixels: 78},
    Medium: {Rows: 10, Pixels: 40},
    Large: {Rows: 18, Pixels: 26}
}

export const GenModes = {
    Classic: 'classic',
    Random: 'random',
    Simple: 'simple'
}

export const ThemeNames = [
    {shorthand: 'lg', name:'Lean \'N\' Green'},
    {shorthand: 'ib', name:'Icy Blue'},
    {shorthand: 'rv', name:'Red Velvet'},
    {shorthand: 'bpg', name:'Boiler Plate Gray'},
]

export const GameStates = {
    Won: 'Won',
    Lost: 'Lost',
    Fresh: 'Fresh',
    InProgress:  'InProgress'
}

export const FlagCountActions = {
    Reset: 0,
    Add: -1,
    Subtract: -2
}