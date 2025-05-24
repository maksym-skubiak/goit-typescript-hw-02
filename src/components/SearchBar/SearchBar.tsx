import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface Props {
  onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: Props) {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
export default SearchBar;
