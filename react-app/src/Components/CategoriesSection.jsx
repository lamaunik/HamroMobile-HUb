import React from "react";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const categories = [
    { img: "https://media.istockphoto.com/id/1226735544/vector/set-of-devices-icons-computer-laptop-tablet-tv-watch-and-smartphone-vector-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=wZFjt5X0jo5WaPe78JyluRgxinqE9fNpWUzVN6su4x4=", label: "Mobiles" },
    { img: "https://media.istockphoto.com/id/1443927119/vector/pc-computer-monitor-smartphone-camera-keyboard-headphone-silhouette-icon-set-electronic.jpg?s=612x612&w=0&k=20&c=Pc6EFvF3sSYBqvWwE6BixkusqWDl6uOOXOHsgdmw_dc=", label: "Laptops" },
    { img: "https://as2.ftcdn.net/jpg/05/54/68/07/1000_F_554680736_9Gyrcz4vVmphzFHilwRo7iQrxSoKp89S.jpg", label: "Accessories" },
    { img: "https://l450v.alamy.com/450v/2ap7gjg/electronics-and-accessories-glyph-icon-smartphone-and-laptop-computers-and-devices-e-commerce-department-online-shopping-categories-silhouette-sy-2ap7gjg.jpg", label: "Tablets" },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Popular Categories</h2>
      <div style={styles.categoryGrid}>
        {categories.map((cat, i) => (
          <CategoryCard key={i} imgSrc={cat.img} alt={cat.label + " Icon"} label={cat.label} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "100px", backgroundColor: "#f8fafc", textAlign: "center" },
  sectionTitle: { fontSize: "36px", fontWeight: "bold", marginBottom: "60px", color: "#111827" },
  categoryGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px" },
};

export default CategoriesSection;