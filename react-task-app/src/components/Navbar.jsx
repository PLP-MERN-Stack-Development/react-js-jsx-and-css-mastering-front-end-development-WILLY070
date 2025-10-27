import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">ReactTaskApp</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </nav>
  );
}
