import React from "react";

import "../styles/Board.css";
import { generation } from "../game-logic";
import { emptyGeneration } from "../game-logic";
import Tile from "./Tile";
import { TileObject } from "../game-logic";

import { GameSizes } from "../settings-and-modes";

function Board({
    size,
    genType,
    mode,
}: {
    size: number;
    genType: string;
    mode: string;
}) {
    const [firstClick, setFC] = React.useState(false);
    const [tiles, tilesSet] = React.useState(emptyGeneration(size));
    function gameStart() {
        tilesSet(
            generation(size, genType).map(
                (neighbours: number, index: number) =>
                    new TileObject(index, neighbours)
            )
        );
        setFC(true);
    }
    let sizeName = "board-sm";
    switch (size) {
        case GameSizes.Medium:
            sizeName = "board-md";
            break;
        case GameSizes.Large:
            sizeName = "board-lg";
            break;
    }
    return (
        <div
            className={sizeName}
            style={
                {
                    // Inject as CSS variable
                    "--row-length": size,
                } as React.CSSProperties
            }
        >
            {tiles.map((_: TileObject, index: number) => (
                <Tile
                    tiles={tiles}
                    key={index}
                    id={index}
                    firstClick={firstClick}
                    gameStart={gameStart}
                ></Tile>
            ))}
        </div>
    );
}

export default Board;
