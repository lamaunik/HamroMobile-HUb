import React from "react";

const LandingPage = () => {
  return (
    <div style={styles.page}>
      {/* Navbar */}
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

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Buy, Sell & Exchange Electronics Easily</h1>
          <p style={styles.heroSubtitle}>
            A trusted marketplace for mobile phones and electronics with verified vendors and secure transactions.
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

      {/* Features */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose HamroMobile Hub?</h2>
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
        <h2 style={styles.sectionTitle}>Popular Categories</h2>
        <div style={styles.categoryGrid}>
          <div style={styles.categoryCard}>
            <img src="https://media.istockphoto.com/id/1226735544/vector/set-of-devices-icons-computer-laptop-tablet-tv-watch-and-smartphone-vector-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=wZFjt5X0jo5WaPe78JyluRgxinqE9fNpWUzVN6su4x4=" alt="Devices Icon" style={styles.categoryIcon} />
            <p>Mobiles</p>
          </div>
          <div style={styles.categoryCard}>
            <img src="https://media.istockphoto.com/id/1443927119/vector/pc-computer-monitor-smartphone-camera-keyboard-headphone-silhouette-icon-set-electronic.jpg?s=612x612&w=0&k=20&c=Pc6EFvF3sSYBqvWwE6BixkusqWDl6uOOXOHsgdmw_dc=" alt="Electronics Icon" style={styles.categoryIcon} />
            <p>Laptops</p>
          </div>
          <div style={styles.categoryCard}>
            <img src="https://as2.ftcdn.net/jpg/05/54/68/07/1000_F_554680736_9Gyrcz4vVmphzFHilwRo7iQrxSoKp89S.jpg" alt="Gadgets Icon" style={styles.categoryIcon} />
            <p>Accessories</p>
          </div>
          <div style={styles.categoryCard}>
            <img src="https://l450v.alamy.com/450v/2ap7gjg/electronics-and-accessories-glyph-icon-smartphone-and-laptop-computers-and-devices-e-commerce-department-online-shopping-categories-silhouette-sy-2ap7gjg.jpg" alt="Tablet Icon" style={styles.categoryIcon} />
            <p>Tablets</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productGrid}>
          <img src="https://m.media-amazon.com/images/I/61itaJaEM-L.jpg" alt="Product 1" style={styles.productImg} />
          <img src="https://m.media-amazon.com/images/I/61kbK7-NP8L.jpg" alt="Product 2" style={styles.productImg} />
          <img src="https://www.shutterstock.com/image-photo/this-modern-computer-accessories-600nw-2418455129.jpg" alt="Product 3" style={styles.productImg} />
          <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100065344065883" alt="Product 4" style={styles.productImg} />
        </div>
      </section>

      {/* Location */}
      <section style={styles.darkSection}>
        <h2 style={styles.sectionTitle}>Find Verified Stores Near You</h2>
        <p>Trusted vendors available across major locations.</p>
        <img 
          src="https://developers.google.com/static/codelabs/maps-platform/google-maps-simple-store-locator/img/489628918395c3d0.png" 
          alt="Store Locator Map" 
          style={styles.mapImg} 
        />
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 HamroMobile Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    color: "#1f2937",
    lineHeight: "1.6",
  },
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
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoImg: {
    height: "40px",
    objectFit: "contain",
  },
  logoText: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    color: "#3b82f6",
  },
  navActions: {
    display: "flex",
    gap: "16px",
  },
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
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "100px 100px",
    backgroundColor: "#f8fafc",
    alignItems: "center",
    gap: "60px",
  },
  heroContent: {
    maxWidth: "600px",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111827",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#4b5563",
    marginBottom: "40px",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
  },
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
  heroImage: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  heroImgFull: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  section: {
    padding: "100px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  lightSection: {
    padding: "100px",
    backgroundColor: "#f8fafc",
    textAlign: "center",
  },
  darkSection: {
    padding: "100px",
    backgroundColor: "#1e293b",
    color: "#f1f5f9",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "60px",
    color: "#111827",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  card: {
    padding: "32px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s",
    textAlign: "left",
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  categoryCard: {
    backgroundColor: "#ffffff",
    padding: "40px 20px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  categoryIcon: {
    height: "80px",
    objectFit: "contain",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  productImg: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
  mapImg: {
    width: "80%",
    maxWidth: "800px",
    height: "auto",
    borderRadius: "16px",
    marginTop: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  footer: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f1f5f9",
    color: "#64748b",
    fontSize: "14px",
  },
};

export default LandingPage;