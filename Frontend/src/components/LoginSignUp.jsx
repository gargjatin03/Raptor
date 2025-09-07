import React, { useState } from "react";

function LoginSignup({ handleLogin, handleSignup, handleGuest }) {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !username))
      return alert("Please fill all required fields");

    if (isLogin) {
      handleLogin(email, username, password); // login via username/email
    } else {
      handleSignup(username, email, password);
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0d0d] text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white outline-none"
            />
          )}
          <input
            type="text"
            placeholder={isLogin ? "Username or Email" : "Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <span
            className="text-green-500 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

        {/* Guest access */}
        <p className="mt-4 text-center">
          <button
            onClick={handleGuest}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mt-2 w-full"
          >
            Continue as Guest
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
