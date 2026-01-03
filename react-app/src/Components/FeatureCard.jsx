import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "32px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s",
    textAlign: "left",
  },
};

export default FeatureCard;