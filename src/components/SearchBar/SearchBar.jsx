import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Введи текст для пошуку!");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
export default SearchBar;
