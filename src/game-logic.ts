import {GameSizes} from './settings-and-modes';
import {GenModes} from './settings-and-modes';

export class TileObject {
    nCount: number;
    covered: boolean;
    flagged: boolean;
    bomb:boolean;

    public constructor(neighbours: number, covered: boolean, flagged: boolean){
        this.nCount = neighbours;
        this.covered = covered;
        this.flagged = flagged;
        this.bomb = neighbours===-1;
    }
    public uncover(): void{
        this.covered = false;
    }
    public cover(): void{
        this.covered = true;
    }
    public flag(): void{
        this.flagged = !this.flagged;
    }
    public tileCopy(): TileObject{
        return new TileObject(this.nCount, this.covered, this.flagged);
    }
}


export function emptyGeneration(size: number): TileObject[]{
    const tiles: TileObject[] = new Array(size*size);
    for(let i = 0; i<size*size; i++){
        tiles[i] = new TileObject(0, true, false);
    }
    return tiles;
}
export function generation(index:number, size: number, gen: string): TileObject[]{
    switch(gen){
        case GenModes.Classic:
            return classicGeneration(size);
        case GenModes.Random:
            return randomGeneration(index, size, 0.2);
        case GenModes.Simple:
            return simpleGeneration(index, size);
    }
    return [];
}

function classicGeneration(size: number): TileObject[]{
    let tiles: TileObject[] = Array();
    switch(size){
        case GameSizes.Small[0]:
            let temp = [
                -1, -1, 2, -1,
                2, 2, 2, 1, 
                0, 0, 0, 0, 
                0, 0, 0, 0
            ];
            for(let i= 0; i<size*size; i++){
                tiles.push(new TileObject(temp[i], true, false));
            }
            return tiles;
        case GameSizes.Medium[0]:
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
                tiles[i] = new TileObject(temp2[i], true, false);
            }
            return tiles;
        case GameSizes.Large[0]:
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
                tiles[i] = new TileObject(temp3[i], true, false);
            }
            return tiles;
    }
    return [];
}

export function autofill(size: number, index: number, tiles: TileObject[]): TileObject[]{
    tiles[index].uncover();
    if(tiles[index].nCount!=0) return tiles;
    let neighbours = getNeighbours(index, size);
    for(let i = 0; i<8; i++){
        let n = neighbours[i];
        if(n!=-1 && tiles[n].covered){
            tiles = autofill(size, n, tiles);
        }
    }
        
    return tiles;
}

//Check if game is won
export function gameCheck(tiles: TileObject[]):boolean{
    for(let i = 0; i<tiles.length; i++){
        if(tiles[i].covered && !tiles[i].bomb)
            return false;
    }
    return true;
}


//TO DO:

//Returns a randomly generated TileObject array of length size*size see example arrays in classicGeneration(...)
function randomGeneration(index: number, size: number, bombDensity: number): TileObject[]{
    let len = size*size;
    let bCount = Math.floor(len*bombDensity);
    let tiles: TileObject[] = new Array(len);
    for(let i = 0; i<len; i++){
        tiles[i] = new TileObject(0, true, false);
    }
    //Place bombs randomly
    for(let i = 0; i<bCount; i++){
        let bomb = Math.floor(Math.random()*len);
        while(bomb===index || tiles[bomb].bomb)
            bomb = Math.floor(Math.random()*len);
        tiles[bomb] = new TileObject(-1, true, false);
    }
    //Calculate neighbours...
    for(let i = 0; i<len; i++){
        //BOMB
        if(tiles[i].bomb) continue;
        //LEFT
        if((i%size)-1>=0 && tiles[i-1].bomb)
            tiles[i].nCount++;
        //RIGHT
        if((i%size)+1<size && tiles[i+1].bomb)
            tiles[i].nCount++;
        //UP
        if(i-size>=0 && tiles[i-size].bomb)
            tiles[i].nCount++;
        //DOWN
        if(i+size<len && tiles[i+size].bomb)
            tiles[i].nCount++;
        //UPLEFT
        if((i%size)-1>=0 && i-size>=0 && tiles[i-size-1].bomb)
            tiles[i].nCount++;
        //UPRIGHT
        if((i%size)+1<size && i-size>=0 && tiles[i-size+1].bomb)
            tiles[i].nCount++;
        //DOWNLEFT
        if((i%size)-1>=0 && i+size<len && tiles[i+size-1].bomb)
            tiles[i].nCount++;
        //DOWNRIGHT
        if((i%size)+1<size && i+size<len && tiles[i+size+1].bomb)
            tiles[i].nCount++;
    }
    return tiles;
}

//Returns a randomly generated TileObject array of length size*size solvable by Single Point Algorithm (see page 25 in Algorithms for Minesweeper Game Grid Generation)
function simpleGeneration(index:number, size: number): TileObject[]{
    let bombProbability = 0.2;
    let generationLimit = 10000;
    let temp = randomGeneration(index, size, bombProbability);

    for(let i = 0; i<generationLimit; i++){
        if(singlePointStrategy(temp, index, size)){
            return temp;
        }
        else{
            temp = randomGeneration(index, size, bombProbability);
        }
    }

    return temp;
}

export function getNeighbours(index: number, size:number): number[]{
    let neighbours = [-1, -1, -1, -1, -1, -1, -1, -1];
    //LEFT
        if((index%size)-1>=0)
            neighbours[0] = index-1;
        //RIGHT
        if((index%size)+1<size)
            neighbours[1] = index+1;
        //UP
        if(index-size>=0)
            neighbours[2] = index-size;
        //DOWN
        if(index+size<size*size)
            neighbours[3] = index+size;
        //UPLEFT
        if((index%size)-1>=0 && index-size>=0)
            neighbours[4] = index-size-1;
        //UPRIGHT
        if((index%size)+1<size && index-size>=0)
            neighbours[5] = index-size+1;
        //DOWNLEFT
        if((index%size)-1>=0 && index+size<size*size)
            neighbours[6] = index+size-1;
        //DOWNRIGHT
        if((index%size)+1<size && index+size<size*size)
            neighbours[7] = index+size+1;
    return neighbours;
}

function singlePointStrategy(temp:TileObject[], index:number, size:number):boolean{
    temp[index].uncover();
    let actionMade = true;
    let gameWinnable = false;

    while(actionMade){
        actionMade = false;
        for(let i = 0; i<size*size; i++){
            if(!temp[i].covered){
                let neighbours: number[] = getNeighbours(i, size);
                let undecided = 0;
                let marked = 0;
                let mines = temp[i].nCount;
                for(let j = 0; j<8; j++){
                    let n = neighbours[j];
                    if(n!=-1){
                        if(temp[n].covered && !temp[n].flagged)
                            undecided = undecided+1;
                        if(temp[n].flagged)
                            marked = marked+1;
                    }
                }
                let unmarked = mines-marked;
                //Check 1
                if(mines===marked && undecided>=0){
                    //reveal neighbours
                    for(let j = 0; j<8; j++){
                        let n = neighbours[j];
                        if(n!=-1 && !temp[n].flagged && temp[n].covered){
                            actionMade = true;
                            temp[n].uncover();
                        }
                    }
                }
                //Check 2
                if(undecided===unmarked && undecided>=0){
                    //mark neighbours
                    for(let j = 0; j<8; j++){
                        let n = neighbours[j];
                        if(n!=-1 && temp[n].covered && !temp[n].flagged){
                            temp[n].flag();
                            actionMade = true;
                        }
                    }
                }
            }
        }
    }
    if(gameCheck(temp)){
        gameWinnable = true;
    }
    //Reset board for player (cover and unflag)
    for(let i = 0; i<size*size; i++){
        if(!temp[i].covered) temp[i].cover();
        if(temp[i].flagged) temp[i].flag();
    }
    return gameWinnable;
}
