// import { Link } from "react-router-dom";
// import { FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-[#0f0f1c] text-white px-6 py-4 flex items-center justify-between">

//       {/* LEFT : LOGO */}
//       <div className="flex items-center gap-3">
       
//         <span className="font-semibold text-lg">Mini Food world</span>
//       </div>

//       {/* CENTER : TITLE */}
//       <h1 className="hidden md:block text-lg font-medium tracking-wide">
//         Different Kind of Food
//       </h1>

//       {/* RIGHT : ICONS */}
//       <div className="flex items-center gap-6 text-xl">

//         <Link to="/home" className="hover:text-red-400 transition">
//           <FaHome />
//         </Link>

//         <Link to="/wishlist" className="hover:text-red-400 transition">
//           <FaHeart />
//         </Link>

//         <Link to="/cart" className="relative hover:text-red-400 transition">
//           <FaShoppingCart />
//           {/* Cart Count */}
          
//         </Link>

//       </div>
//     </nav>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaHeart, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // if future la token use pannina inga clear pannalam
    // localStorage.removeItem("token");

    navigate("/"); // login page
  };

  return (
    <nav className="w-full bg-[#0f0f1c] text-white px-6 py-4 flex items-center justify-between">

      {/* LEFT : LOGO */}
      <div className="flex items-center gap-3">
        <span className="font-semibold text-lg">Mini Food World</span>
      </div>

      {/* CENTER : TITLE */}
      <h1 className="hidden md:block text-lg font-medium tracking-wide">
        Different Kind of Food
      </h1>

      {/* RIGHT : ICONS */}
      <div className="flex items-center gap-6 text-xl">

        {/* HOME */}
        <Link to="/home" className="hover:text-red-400 transition">
          <FaHome />
        </Link>

        {/* WISHLIST */}
        <Link to="/wishlist" className="hover:text-red-400 transition">
          <FaHeart />
        </Link>

        {/* PROFILE / LOGOUT */}
        <button
          onClick={handleLogout}
          className="hover:text-red-400 transition"
          title="Logout"
        >
          <FaUserCircle />
        </button>

      </div>
    </nav>
  );
}
