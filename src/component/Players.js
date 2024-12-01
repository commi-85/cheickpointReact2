import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

// Composant joueur avec déstructuration des props
function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ borderRadius: "8px", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Équipe : {team}</p>
          <p>Nationalité : {nationality}</p>
          <p>Numéro : {jerseyNumber}</p>
          <p>Âge : {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Définir les props par défaut
Player.defaultProps = {
  name: "Nom inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: "N/A",
  age: "Âge inconnu",
  imageUrl: "https://via.placeholder.com/150"
};

// Validation des types de props
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

export default Player;
