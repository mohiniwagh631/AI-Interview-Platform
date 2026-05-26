import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 text-white px-4 md:px-8 py-4 flex justify-between items-center shadow-lg">

      {/* Logo */}
      <Link to="/">

        <h1 className="text-xl md:text-2xl font-bold text-blue-500 cursor-pointer">
          InterviewAI
        </h1>

      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 lg:gap-8 font-medium">

        <Link to="/">

          <li className="hover:text-blue-400 cursor-pointer transition duration-300">
            Home
          </li>

        </Link>

        <li className="hover:text-blue-400 cursor-pointer transition duration-300">
          Features
        </li>

        <li className="hover:text-blue-400 cursor-pointer transition duration-300">
          About
        </li>

      </ul>

      {/* Buttons */}
      <div className="flex gap-2 md:gap-4">

        <Link to="/login">

          <button className="border border-blue-500 px-3 md:px-5 py-2 rounded-xl hover:bg-blue-500 transition duration-300 text-sm md:text-base">

            Login

          </button>

        </Link>

        <Link to="/signup">

          <button className="bg-blue-500 px-3 md:px-5 py-2 rounded-xl hover:bg-blue-600 transition duration-300 shadow-lg text-sm md:text-base">

            Signup

          </button>

        </Link>

      </div>

    </nav>

  );
}