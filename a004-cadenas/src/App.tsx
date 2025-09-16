import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Nombre: ${inputValue}`);
  };

  return (
    <>
      <div className="card">
        <form>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={inputValue}
            onChange={handleChange}
            ref={inputRef}
          />
          <br />
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </div>

      <div className="card">
        <label>Funcion   </label>
        <button onClick={handleClick}>Focus</button>
         
      </div>
    </>
  );
}

export default App;
