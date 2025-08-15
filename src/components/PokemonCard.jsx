import { motion } from "framer-motion";
import "./PokemonCard.css"; // vamos criar este CSS separado

export default function PokemonCard({ name, img, type }) {
  const typeColors = {
    normal: ["#A8A77A", "#6D6D4E"],
    fogo: ["#EE8130", "#B22222"],
    agua: ["#6390F0", "#1E3A8A"],
    eletrico: ["#F7D02C", "#B8860B"],
    grama: ["#7AC74C", "#2E8B57"],
    gelo: ["#96D9D6", "#20B2AA"],
    lutador: ["#C22E28", "#7B241C"],
    veneno: ["#A33EA1", "#4B0082"],
    terra: ["#E2BF65", "#A0522D"],
    voador: ["#A98FF3", "#483D8B"],
    psiquico: ["#F95587", "#8B008B"],
    inseto: ["#A6B91A", "#556B2F"],
    pedra: ["#B6A136", "#8B6914"],
    fantasma: ["#735797", "#4B0082"],
    dragao: ["#6F35FC", "#301934"],
    sombrio: ["#705746", "#2F1B0C"],
    aco: ["#B7B7CE", "#5A5A7A"],
    fada: ["#D685AD", "#C71585"],
  };

  const key = type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const [light, dark] = typeColors[key] || ["#f8e08e", "#f1c232"];

  const dynamicCardStyle = {
    ...styles.card,
    background: `linear-gradient(145deg, ${light}, ${dark})`,
  };

  return (
    <motion.div drag="x" style={dynamicCardStyle} className="pokemon-card">
      <h3 style={styles.name}>{name}</h3>
      <motion.img
        whileHover={{ scale: 1.15 }}
        whileTap={{ rotate: 8 }}
        src={img}
        alt={name}
        style={styles.image}
      />
      <p style={styles.type}>Tipo: {type}</p>
    </motion.div>
  );
}

const styles = {
  card: {
    borderRadius: "18px",
    padding: "12px",
    width: "220px",
    height: "320px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    fontFamily: "'Trebuchet MS', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2d2d2d",
    background: "#fff",
    padding: "4px 8px",
    borderRadius: "8px",
    border: "2px solid #ccc",
    margin: "0",
  },
  image: {
    width: "140px",
    height: "140px",
    objectFit: "contain",
    border: "3px solid #aaa",
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "6px",
  },
  type: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    background: "#fff",
    padding: "4px 10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
};
