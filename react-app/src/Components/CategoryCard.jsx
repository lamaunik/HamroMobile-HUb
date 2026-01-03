import React from "react";

const CategoryCard = ({ imgSrc, alt, label }) => {
  return (
    <div style={styles.categoryCard}>
      <img src={imgSrc} alt={alt} style={styles.categoryIcon} />
      <p>{label}</p>
    </div>
  );
};

const styles = {
  categoryCard: {
    backgroundColor: "#f4f0f0ff",
    padding: "40px 20px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  categoryIcon: { height: "80px", objectFit: "contain" },
};

export default CategoryCard;