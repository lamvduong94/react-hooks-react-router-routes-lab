import React from "react";
import { actors } from "../data";

function Actors() {
  const actItem = actors.map(act => (
    <div key={act.name}>
      <h2>{act.name}</h2>
      <ul>
        {act.movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {actItem}
    </div>
  )
}

export default Actors;
