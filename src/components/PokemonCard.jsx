import React from "react";

export default function PokemonCard({ name, img, type }) {
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.type}>Tipo: {type}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    width: "200px",
    height: "300px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
  },
};