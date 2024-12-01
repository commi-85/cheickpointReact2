import React from "react";
import Player from "./Players";
import players from "../players";

function PlayersList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
