import "./App.css";

import Login from "./components/login";
import Provider from "./contex/provider";
import Estado from "./components/estado";

function App() {
  return (
    <>
      <Provider>
        <Login />
        <Estado />
      </Provider>
    </>
  );
}

export default App;
