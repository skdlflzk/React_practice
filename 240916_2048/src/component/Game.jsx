import React, { useState } from "react";
import { MAX_POS } from "../constant";
import { times } from 'lodash'
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

export default function Game() {
    const [tileList, setTileList] = useState(getInitialTileList())

    // up, down, left, right handle
    useMoveTile(tileList, setTileList )
    return <div className="game-container">
        <div className="grid-container">
            {times(MAX_POS, index => (
                <div key={index} className="grid-row">
                    {times(MAX_POS, index2=> (
                        <div key={index2} className="grid-cell"></div>
                    ))}
                </div>
            ))}
        </div>
        <div className="tile-container">
            {tileList.map(tile => (
                <Tile key={tile.id} {...tile}/>
            ))}
        </div>
</div>
}
