import { useEffect } from "react";
import { games } from "./games.js";

function mapGames(type) {
  // map games to dropdown options
  return games.map((game) => {
    return <option className="font-sans font-bold" key={`${game.id}${type}`}>{game.name}</option>;
  });
}

function gameDropdown(prefix, value, type, onChange) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{prefix}</span>
      </label>
      <select value={value ? value.name : "Select game"} className="select select-bordered" onChange={onChange}>
        <option className="font-sans font-bold" disabled>Select game</option>
        {mapGames(type)}
      </select>
    </div>
  );
}

function getGameFromName(name) {
  return games.find((game) => game.name === name);
}

export function SourceGame({ game, sens, setGame, setSens }) {
  function handleSensChange(e) {
    // make sure the input is a number
    // ensure input is not over 10 characters long
    if (isNaN(e.target.value) || !game || e.target.value.length > 24) {
      return;
    }
    setSens(e.target.value);
  }

  const handleInputField = () => {
    const className = "input input-bordered w-full max-w-xs";
    if (!game) {
      return <input className={className} value="" disabled />;
    }
    return <input placeholder="Type here" className={className} value={sens} onChange={handleSensChange} />;
  }

  return (
    <div className="card w-fit bg-base-300 shadow-xl mb-6 mt-6">
      <div className="card-body items-center text-center">
        {gameDropdown("Source: ", game,"src", (e) =>
          setGame(getGameFromName(e.target.value))
        )}
        <p>Sensitivity: </p>
        {handleInputField()}
      </div>
    </div>
  );
}

export function TargetGame({ sens, targetGame, targetSens, setTargetGame }) {
  const handleInputField = () => {
    const className = "input input-bordered w-full max-w-xs";
    if (!targetGame || !sens) {
      return <input className={className} value="" readOnly disabled />;
    }
    return <input className={className} value={targetSens} readOnly />;
  }

  return (
    <div className="card w-fit bg-base-300 shadow-xl mb-6 mt-6">
      <div className="card-body items-center text-center">
        {gameDropdown("Target: ", targetGame, "tar", (e) =>
          setTargetGame(getGameFromName(e.target.value))
        )}
        <p>Sensitivity: </p>
        {handleInputField()}
      </div>
    </div>
  );
}
