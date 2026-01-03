import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img
          src="https://s3.mordorintelligence.com/used-and-refurbished-smartphone-market/used-and-refurbished-smartphone-market-1758554784122-major-players.webp"
          alt="HamroMobile Hub Logo"
          style={styles.logoImg}
        />
        <h2 style={styles.logoText}>HamroMobile Hub</h2>
      </div>
      <div style={styles.navActions}>
        <button style={styles.navBtn}>Login</button>
        <button style={styles.navPrimary}>Sign Up</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 100px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logoContainer: { display: "flex", alignItems: "center", gap: "12px" },
  logoImg: { height: "40px", objectFit: "contain" },
  logoText: { margin: 0, fontSize: "24px", fontWeight: "bold", color: "#3b82f6" },
  navActions: { display: "flex", gap: "16px" },
  navBtn: {
    background: "transparent",
    border: "1px solid #3b82f6",
    color: "#3b82f6",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  navPrimary: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

export default Navbar;