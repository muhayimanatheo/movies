import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    email: email,
    password: password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if(localStorage.setItem('userdata',JSON.stringify(email))){
        window.location.href="/"
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

          <form action="/login" method="post" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-[#64748b] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="block w-full rounded-md bg-black py-2 px-3 text-center text-white hover:bg-[#334155]  focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
