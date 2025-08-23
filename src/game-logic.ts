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
                -1, 2, 1, 1,
                1, 2, -1, 1, 
                1, 2, 2, 1, 
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

function randomGeneration(size: number): number[]{
    let tiles: number[] = new Array(size*size);
    //Generate Mines
    for(let i = 0; i<size*size; i++){
        tiles[i] = Math.random() * -1;
    }
    //Calculate Neighbours for each tile
    
    return tiles;
}

