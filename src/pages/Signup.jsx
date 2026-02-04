// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (name && email && password) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0b17] px-6 py-10 text-white">
//        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] 
//         bg-cover bg-center scale-110 animate-slowZoom"></div>
//          <div className="absolute inset-0 bg-black/70"></div>
//            <div className="relative z-10 w-full max-w-md text-center text-white px-6">


//       <button onClick={() => navigate(-1)}>←</button>
//  <div className="mb-6">
//       <h1 className="text-2xl font-semibold mt-6 justify-center">Create Account</h1>
//       <p className="text-gray-400 mb-8 text-center">
//         Sign up to explore delicious recipes
//       </p>

//       <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
//         />

//         <button
//           type="submit"
//           className="w-full py-4 bg-[#ff2e2e] rounded-full text-lg font-medium"
//         >
//           Sign Up
//         </button>
//       </form>
//       </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      navigate("/");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')]
        bg-cover bg-center animate-slowZoom"
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">

        <div className="w-full max-w-md text-center">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 text-xl"
          >
            ←
          </button>

          <h1 className="text-2xl font-semibold mb-2">
            Create Account
          </h1>

          <p className="text-gray-400 mb-8">
            Sign up to explore delicious recipes
          </p>

          <form onSubmit={handleSignup} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-full bg-[#1c1c2e] outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#ff2e2e] rounded-full text-lg font-medium hover:bg-red-600 transition"
            >
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
