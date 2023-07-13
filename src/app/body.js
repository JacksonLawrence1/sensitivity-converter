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
            <select onChange={onChange}>
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
        <p>This website is designed to help convert your sensitivity between games.</p>
        <p>Select a game from the dropdown with your preferred sensitivity, and desired game you want the equivalent sensitivty for.</p>
        {gameDropdown("Choose your source game: ", e => setGame(findGame(e.target.value)))}
        {gameDropdown("Choose your target game: ", e => setTargetGame(findGame(e.target.value)))}
        <p>Input your source game's sensitivity: </p>
        <input value={sens} onChange={e => setSens(e.target.value)} />
        {displayResult()}
        </div>
    );
}

export default Body;
