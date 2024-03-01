import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the signInWithEmailAndPassword function from Firebase Auth
import { auth } from "./firebase"; // Import the auth service from your Firebase configuration
import "./GroupComponent.css";

const GroupComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value.toLowerCase()); // Convert email to lowercase
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!username || !password) {
        // Display an alert for missing requirements
        alert("Enter the requirements");
        return;
      }

      try {
        // Sign in user with email and password
        await signInWithEmailAndPassword(auth, username, password);

        // Redirect user to a different page upon successful login
        navigate("/home");
      } catch (error) {
        // Handle authentication errors
        setError(alert("Invalid username or password. Please try again."));
        console.error("Error signing in:", error.message);
      }
    },
    [username, password, navigate]
  );

  return (
    <div className="rectangle-group">
      <div className="frame-inner" />
      <h1 className="login">Login</h1>
      <form className="password-group" onSubmit={handleFormSubmit}>
        <div className="log-in-text">
          <TextField
            className="log-in-text-child"
            placeholder="Enter Email"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "48.1px",
                backgroundColor: "#d9d9d9",
                borderRadius: "10px",
                fontSize: "12px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <TextField
            className="log-in-text-item"
            placeholder="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "48.1px",
                backgroundColor: "#d9d9d9",
                borderRadius: "10px",
                fontSize: "12px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <Button
          type="submit"
          className="password-group-child"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "11",
            background: "#ffc107",
            borderRadius: "20px",
            "&:hover": { background: "#ffc107" },
            height: 48,
          }}
        >
          {`LogIn`}
        </Button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default GroupComponent;
