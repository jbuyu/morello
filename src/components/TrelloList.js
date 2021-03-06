import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => {
        return <TrelloCard key={card.id} skill={card.skill} />;
      })}
      <TrelloActionButton listID = {listID} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#E5EFF5",
    borderRadius: 5,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%",
  },
};

export default TrelloList;
