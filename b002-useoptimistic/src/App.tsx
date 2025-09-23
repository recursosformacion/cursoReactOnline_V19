import { useState } from "react";
import { Gestion } from "./components/gestion";
import "./App.css";
import type { f_mensaje } from "./tipos/tipos";




function App() {
  const [mensaje, setMessages] = useState<f_mensaje[]>([
    { text: "¡Hola!", sending: false, key: 1 },
  ]);

  return <Gestion mensaje={mensaje} act={setMessages} />;
}

export default App;
