"use client";

import { useEffect, useState } from "react";
import { SourceGame, TargetGame } from "./game-card";
import { games } from "./games";

function Body(props) {
  const [sens, setSens] = useState("");
  const [targetSens, setTargetSens] = useState("");

  const [game, setGame] = useState(undefined);
  const [targetGame, setTargetGame] = useState(undefined);

  useEffect(() => {
    if (sens === undefined || game === undefined || targetGame === undefined) {
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
      <div className="card w-fit bg-base-100 shadow-xl mx-auto mb-6 mt-6">
        <div className="card-body items-center text-center">
          <p>
            This website is designed to help convert your sensitivity between
            games.
          </p>
          <p>
            {" "}
            Select a game from the dropdown with your preferred sensitivity, and
            desired game you want the equivalent sensitivity for.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center">
        <SourceGame game={game} sens={sens} setGame={setGame} setSens={setSens} />
        <TargetGame sens={sens} targetGame={targetGame} targetSens={targetSens} setTargetGame={setTargetGame} />
      </div>
    </div>
  );
}

export default Body;
