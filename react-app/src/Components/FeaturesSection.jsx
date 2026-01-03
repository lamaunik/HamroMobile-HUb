import React from "react";
import Navbar from "src/components/Navbar";
import FeaturesSection from "src/components/FeaturesSection";
import CategoriesSection from "src/components/CategoriesSection";
import FeaturedProducts from "src/components/FeaturedProducts";
import LocationSection from "src/components/LocationSection";
import Footer from "src/components/Footer";


const styles = {
  page: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    color: "#1f2937",
    lineHeight: "1.6",
    minHeight: "100vh",
  },
};

const LandingPage = () => {
  return (
    <div style={styles.page}>
      <Navbar />
      
      <FeaturesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default LandingPage;