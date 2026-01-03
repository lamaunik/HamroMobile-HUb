import React from "react";

const Selection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Buy, Sell & Exchange Electronics Easily</h1>
        <p style={styles.heroSubtitle}>
          A trusted marketplace for mobile phones and electronics with verified vendors.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>Browse Products</button>
        </div>
      </div>
      <div style={styles.heroImage}>
        <img
          src="https://img.freepik.com/premium-psd/ivory-modern-gradient-electronic-marketplace-hero-section-template_637394-1015.jpg"
          alt="Electronics Marketplace"
          style={styles.heroImgFull}
        />
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "100px 100px",
    backgroundColor: "#f8fafc",
    alignItems: "center",
    gap: "60px",
  },
  heroContent: { maxWidth: "600px" },
  heroTitle: { fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#111827" },
  heroSubtitle: { fontSize: "20px", color: "#4b5563", marginBottom: "40px" },
  heroButtons: { display: "flex", gap: "16px" },
  primaryBtn: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  secondaryBtn: {
    backgroundColor: "#e2e8f0",
    color: "#1e293b",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  heroImage: { borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  heroImgFull: { width: "100%", height: "auto", display: "block" },
};

export default Selection;