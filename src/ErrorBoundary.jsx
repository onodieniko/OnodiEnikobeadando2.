// src/ErrorBoundary.jsx
import React, { Component } from 'react';

// Error Boundary komponens
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Kezdetben nincs hiba
  }

  // Ha egy gyermekkomponens hiba történt, ezt a metódust hívja meg
  static getDerivedStateFromError(error) {
    // A hiba esetén beállítjuk a hasError állapotot true-ra
    return { hasError: true };
  }

  // A hiba részleteit itt naplózhatjuk
  componentDidCatch(error, info) {
    console.error("Hiba történt:", error);
    console.error("Hiba infó:", info);
  }

  render() {
    if (this.state.hasError) {
      // Hiba esetén egy üzenetet jelenítünk meg
      return <h1>Valami hiba történt, kérjük próbálja újra később!</h1>;
    }

    // Ha nincs hiba, akkor a gyermekeinket rendereljük
    return this.props.children;
  }
}

export default ErrorBoundary;
