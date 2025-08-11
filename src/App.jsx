import React from "react";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",

        // centralizar horizontal e verticalmente
        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap", // para quebrar linha se precisar
      }}
    >
      <PokemonCard
        name="Pikachu"
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        type="Elétrico"
      />
      <PokemonCard
        name="Charmander"
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        type="Fogo"
      />
      <PokemonCard
        name="Squirtle"
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        type="Água"
      />
    </div>
  );
}
