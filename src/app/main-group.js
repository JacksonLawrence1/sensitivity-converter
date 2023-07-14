import { useEffect, useState } from "react";
import { SourceGame, TargetGame } from "./game-card";
import { games } from "./games";

export default function MainGroup(props) {
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

  function swapGames() {
    const tempGame = game;
    const tempSens = sens;
    setGame(targetGame);
    setSens(targetSens);
    setTargetGame(tempGame);
    setTargetSens(tempSens);
  }

  return (
    <div>
      <div className="flex flex-row gap-8 justify-center items-center">
        <SourceGame
          game={game}
          sens={sens}
          setGame={setGame}
          setSens={setSens}
        />
        <button className="btn btn-ghost" onClick={swapGames} /> 
        <TargetGame
          sens={sens}
          targetGame={targetGame}
          targetSens={targetSens}
          setTargetGame={setTargetGame}
        />
      </div>
    </div>
  );
}
