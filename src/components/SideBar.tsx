import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { api } from "../services/api";
import { Button } from "./Button";

export function SideBar() {
  const { genres, selectedGenreId, setSelectedGenreId } = useContext(
    MoviesContext
  );

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
