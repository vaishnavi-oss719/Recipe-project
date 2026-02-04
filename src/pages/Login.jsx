import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

const handleLogin = () => {
  // Dummy login
  localStorage.setItem("user", "true");
  navigate("/home");
};
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Animated Food Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] 
        bg-cover bg-center scale-110 animate-slowZoom"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md text-center text-white px-6">

        {/* Logo */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray flex items-center justify-center">
            🍽️
          </div>
          <h1 className="text-2xl font-bold mt-4"> Mini Food World</h1>
          <p className="text-gray-300 text-sm">Special & Delicious Food</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 rounded-full text-black outline-none bcakgroundcolor-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full py-3 px-4 rounded-full text-black outline-none"
          />

          {/* <button className="w-full py-3 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold">
            Log In
          </button> */}
          <button
  onClick={handleLogin}
  className="w-full py-3 rounded-full bg-red-500"
>
  Log In
</button>
        </form>

        {/* Signup */}
        <p className="text-sm text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-400 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
