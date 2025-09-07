import React, { useState } from "react";
import Bot from "./components/bot";
import LoginSignup from "./components/LoginSignUp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Login via username or email
  const handleLogin = (emailOrUsername, unusedUsername, password) => {
    const user = users.find(
      (u) =>
        (u.email === emailOrUsername || u.username === emailOrUsername) &&
        u.password === password
    );
    if (!user) return alert("User not found or incorrect password");
    setCurrentUser(user);
  };

  // Signup new user
  const handleSignup = (username, email, password) => {
    if (users.find((u) => u.email === email || u.username === username)) {
      alert("User already exists, login instead");
      return;
    }
    const newUser = { username, email, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  // Switch user / logout
  const handleSwitchUser = () => {
    setCurrentUser(null);
  };

  // Use app as guest
  const handleGuest = () => {
    setCurrentUser({ username: "Guest" });
  };

  return (
    <div className="h-screen bg-[#0d0d0d]">
      {!currentUser ? (
        <LoginSignup
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          handleGuest={handleGuest} // pass guest option
        />
      ) : (
        <Bot
          user={currentUser.username || currentUser.email}
          handleSwitchUser={handleSwitchUser}
        />
      )}
    </div>
  );
}

export default App;
