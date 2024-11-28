import React, { useState } from "react";

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter your password"
          style={styles.input}
        />
        <button
          onClick={togglePasswordVisibility}
          style={styles.toggleButton}
        >
          {passwordVisible ? (
            <span role="img" aria-label="Hide Password">
              🙈
            </span>
          ) : (
            <span role="img" aria-label="Show Password">
              👁️
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212", // Dark mode background
    color: "#ffffff", // White text for dark mode
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e1e1e", // Darker background for input container
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "none",
    outline: "none",
    backgroundColor: "#2c2c2c", // Input background
    color: "#ffffff", // White text for input
    borderRadius: "4px",
    marginRight: "8px",
  },
  toggleButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    color: "#ffffff", // Icon color in dark mode
  },
};

export default App;
