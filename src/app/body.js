'use client'

import { useEffect, useState } from "react";
import {games} from "./games.js";

function Body(props) {
    const [sens, setSens] = useState("1");
    const [targetSens, setTargetSens] = useState(undefined);

    const [game, setGame] = useState(games[0]);
    const [targetGame, setTargetGame] = useState(games[0]);

    function mapGames() {
        // map games to dropdown options
        return games.map(game => {
            return (
                <option key={game.id}>{game.name}</option>
            )
        })
    }

    function gameDropdown(prefix, onChange) {
        return (
            <div>
            <p>{prefix}</p>
            <select className="dropdown" onChange={onChange}>
            {mapGames()}
            </select>
            </div>
        )
    }

    function handleChange(e) {
        // make sure the input is a number
        if (isNaN(e.target.value)) {
            return;
        }
        setSens(e.target.value);
    }

    function displayResult() {
        if (sens === null) {
            return;
        }
        return (
            <p>{targetSens}</p>
        )
    }

    const findGame = (name) => {
        return games.find(g => g.name === name)
    };

    useEffect(() => {
        if (sens === undefined) {
            return;
        }
        if (game === targetGame) {
            setTargetSens(sens);
            return;
        }

        // convert sens to csgo sens as a baseline
        let targetSensitivity = game.convert.csgo(sens);

        // convert csgo sens to target sens if target isn't csgo
        if (targetGame.id !== "csgo") {
            targetSensitivity = games[0].convert[targetGame.id](targetSensitivity);
        }

        setTargetSens(targetSensitivity);

    }, [sens, game, targetGame]);

    return (
        <div>
            <div className="generic-card">
                <p className="text-2xl">This website is designed to help convert your sensitivity between games.</p>
                <p className="text-2xl"> Select a game from the dropdown with your preferred sensitivity, and desired game you want the equivalent sensitivty for.</p>
            </div>
            <div className="generic-card">
                {gameDropdown("Choose your source game: ", e => setGame(findGame(e.target.value)))}
                {gameDropdown("Choose your target game: ", e => setTargetGame(findGame(e.target.value)))}
                <p>Game Sensitivity: </p>
                <input className="generic-input" value={sens} onChange={handleChange} />
                {displayResult()}
            </div>
        </div>
    );
}

export default Body;
