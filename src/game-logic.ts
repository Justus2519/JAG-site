import {GameSizes} from './settings-and-modes';
import {GenModes} from './settings-and-modes';

export class TileObject {
    key: number;
    nCount: number;
    covered: boolean;
    flagged: boolean;
    bomb:boolean;

    public constructor(key: number, neighbours: number, covered: boolean, flagged: boolean){
        this.flagged = flagged;
        this.covered = covered;
        this.key = key;
        this.nCount = neighbours;
        this.bomb = neighbours===-1;
    }
    public uncover(): void{
        this.covered = false;
    }
    public flag(): void{
        this.flagged = !this.flagged;
    }
    public tileCopy(): TileObject{
        return new TileObject(this.key, this.nCount, this.covered, this.flagged);
    }
}




export function emptyGeneration(size: number): TileObject[]{
    const tiles: TileObject[] = new Array(size*size);
    for(let i = 0; i<size*size; i++){
        tiles[i] = new TileObject(i, 0, true, false);
    }
    return tiles;
}
export function generation(size: number, gen: string): TileObject[]{
    switch(gen){
        case GenModes.Classic:
            return classicGeneration(size);
    }
    console.log('bad stuff');
    return [];
}

function classicGeneration(size: number): TileObject[]{
    console.log('classic generation in progress');
    let tiles: TileObject[] = new Array(size*size);
    switch(size){
        case GameSizes.Small:
            let temp = [
                -1, 2, -1, 2,
                1, 2, 1, 1, 
                1, 1, 1, 0, 
                1, -1, 1, 0
            ];
            for(let i= 0; i<size*size; i++){
                tiles[i] = new TileObject(i, temp[i], true, false);
            }
            return tiles;
        case GameSizes.Medium:
            let temp2= [
                -1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ];
            for(let i= 0; i<size*size; i++){
                tiles[i] = new TileObject(i, temp2[i], true, false);
            }
            return tiles;
        case GameSizes.Large:
            let temp3 = [
                -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            ];
            for(let i= 0; i<size*size; i++){
                tiles[i] = new TileObject(i, temp3[i], true, false);
            }
            return tiles;
    }
    return [];
}



//TO DO:

//Returns a randomly generated TileObject array of length size*size see example arrays in classicGeneration(...)
function randomGeneration(size: number): TileObject[]{
    return [];
}

//Returns a randomly generated TileObject array of length size*size solvable by Single Point Algorithm (see page 25 in Algorithms for Minesweeper Game Grid Generation)
function simpleGeneration(size: number): TileObject[]{
    return [];
}

export function autofill(size: number, index: number, tiles: TileObject[]): TileObject[]{
    tiles[index].uncover();
    if(tiles[index].nCount!=0) return tiles;
    let newIndex = index - 1;//LEFT
    if((index%size)>0 && tiles[newIndex].covered){
        tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index + 1;//RIGHT
    if((index%size)+1<size && tiles[newIndex].covered){
        tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index - size;//UP
    if((newIndex>0 && tiles[newIndex].covered)){
        tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index + size;//DOWN
    if(newIndex<size*size && tiles[newIndex].covered){
        tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index - size - 1; //UP RIGHT
    if((index%size)+1<size && newIndex>0){
        if(tiles[newIndex].covered) tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index - size - 1; //UP LEFT
    if((index%size)-1>=0 && newIndex>0){
        if(tiles[newIndex].covered) tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index + size - 1; //DOWN LEFT
    if((index%size)-1>=0 && newIndex<size*size){
        if(tiles[newIndex].covered) tiles = autofill(size, newIndex, tiles);
    }
    newIndex = index + size + 1; //DOWN RIGHT
    if((index%size)+1<size && newIndex<size*size){
        if(tiles[newIndex].covered) tiles = autofill(size, newIndex, tiles);
    }

        
    return tiles;
}

