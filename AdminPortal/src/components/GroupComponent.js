import { useState, useCallback } from "react";
import {
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./GroupComponent.css";

const GroupComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();

    // Check if both username and password are entered
    if (!username || !password) {
      // Display an alert for missing requirements
      alert("Enter the requirements");
      return;
    }

    // Check if username and password are valid
    if (username === "sara002@gmail.com" , "Sara002@Gmail.Com" && password === "sara123") {
      // Navigate to the home page on successful login
      navigate("/home");
    } else {
      // Display an error message for invalid credentials
      setError(alert("Invalid username or password"));
    }
  }, [navigate, username, password]);

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

