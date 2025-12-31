import React from "react";

const LandingPage = () => {
  return (
    <div style={styles.page}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>HamroMobile Hub</h2>
        <div style={styles.navActions}>
          <button style={styles.navBtn}>Login</button>
          <button style={styles.navPrimary}>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Buy, Sell & Exchange Electronics Easily</h1>
          <p>
            A trusted marketplace for mobile phones and electronics with
            verified vendors and secure transactions.
          </p>
          <div>
            <button style={styles.primaryBtn}>Get Started</button>
            <button style={styles.secondaryBtn}>Browse Products</button>
          </div>
        </div>

        <div style={styles.heroImage}>
          <span>Image</span>
        </div>
      </section>

      {/* Features */}
      <section style={styles.section}>
        <h2>Why Choose HamroMobile Hub?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h4>Google Authentication</h4>
            <p>Fast and secure login using Google Sign-In.</p>
          </div>
          <div style={styles.card}>
            <h4>Verified Vendors</h4>
            <p>All vendors are verified by admin for safety.</p>
          </div>
          <div style={styles.card}>
            <h4>Sell Your Devices</h4>
            <p>Upload photos and sell used or new electronics.</p>
          </div>
          <div style={styles.card}>
            <h4>Secure Payments</h4>
            <p>Safe checkout and order confirmation.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={styles.lightSection}>
        <h2>Popular Categories</h2>
        <div style={styles.categoryGrid}>
          <div style={styles.categoryCard}>Mobiles</div>
          <div style={styles.categoryCard}>Laptops</div>
          <div style={styles.categoryCard}>Accessories</div>
          <div style={styles.categoryCard}>Tablets</div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.section}>
        <h2>Featured Products</h2>
        <div style={styles.productGrid}>
          <div style={styles.productCard}></div>
          <div style={styles.productCard}></div>
          <div style={styles.productCard}></div>
          <div style={styles.productCard}></div>
        </div>
      </section>

      {/* Location */}
      <section style={styles.darkSection}>
        <h2>Find Verified Stores Near You</h2>
        <p>Trusted vendors available across major locations.</p>
        <div style={styles.map}>Map Placeholder</div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Hamro Mobile Hub. All rights reserved.</p>
      </footer>

    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#111827"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 80px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff"
  },

  logo: {
    margin: 0
  },

  navActions: {
    display: "flex",
    gap: "10px"
  },

  navBtn: {
    background: "transparent",
    border: "1px solid #2563eb",
    color: "#2563eb",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  navPrimary: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "80px",
    backgroundColor: "#f9fafb"
  },

  heroContent: {
    maxWidth: "520px"
  },

  heroImage: {
    backgroundColor: "#e5e7eb",
    height: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px"
  },

  primaryBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "10px"
  },

  secondaryBtn: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  section: {
    padding: "80px",
    backgroundColor: "#ffffff"
  },

  lightSection: {
    padding: "80px",
    backgroundColor: "#f9fafb"
  },

  darkSection: {
    padding: "80px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    textAlign: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "40px"
  },

  card: {
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    backgroundColor: "#ffffff"
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "40px"
  },

  categoryCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "40px"
  },

  productCard: {
    height: "180px",
    backgroundColor: "#e5e7eb",
    borderRadius: "12px"
  },

  map: {
    height: "260px",
    backgroundColor: "#020617",
    marginTop: "30px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #e5e7eb"
  }
};

export default LandingPage;
