import React from "react";
import PokemonCard from "./components/PokemonCard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",

        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap",
      }}
    >
      <Sidebar />
      <PokemonCard
        name="Greninja"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaDCRgg6PLKLmBXQG1gSIX54jiJ6DyPKC8Q&s"
        type="Agua"
      />
      <PokemonCard
        name="Rillabom"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAnotWlXE3RtMDOlQdINsh_aS2DTaim4IWw&s"
        type="Grama"
      />
      <PokemonCard
        name="Garchomp"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIIFfP3sd9jT3_QiTxea5C1QHc_-pQNN39Q&s"
        type="Dragao"
      />
      <PokemonCard
        name="Sceptile"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyj0DZ-1eopPzY-HSn7y5RyXLvhwqoEUKag&s"
        type="Grama"
      />
      <PokemonCard
        name="Luxray"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9N3Xkhj_8KtDmHKYcDzMK4V5Isjm7yxCLpQ&s"
        type="Eletrico"
      />
      <PokemonCard
        name="Glaceon"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHBCSKAu3edHqHOdIViR3qImor0ejp0paIg&s"
        type="Gelo"
      />
      <PokemonCard
        name="Gengar"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WiX4-RkatB58A0RpGOAbanyWwSaGuEd-9g&s"
        type="Sombrio"
      />
      <PokemonCard
        name="Heracross"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzS9wM5-7Z7G9TFmiEk1cSCIHeXNFxzc-wpA&s"
        type="Lutador"
      />
    </div>
  );
}
