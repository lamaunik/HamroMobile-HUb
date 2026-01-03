import React from "react";

const FeaturedProducts = () => {
  const products = [
    "https://m.media-amazon.com/images/I/61itaJaEM-L.jpg",
    "https://m.media-amazon.com/images/I/61kbK7-NP8L.jpg",
    "https://www.shutterstock.com/image-photo/this-modern-computer-accessories-600nw-2418455129.jpg",
    "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100065344065883",
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Featured Products</h2>
      <div style={styles.productGrid}>
        {products.map((src, i) => (
          <img key={i} src={src} alt={`Product ${i + 1}`} style={styles.productImg} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "100px", backgroundColor: "#ffffff", textAlign: "center" },
  sectionTitle: { fontSize: "36px", fontWeight: "bold", marginBottom: "60px", color: "#111827" },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px" },
  productImg: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
};

export default FeaturedProducts;