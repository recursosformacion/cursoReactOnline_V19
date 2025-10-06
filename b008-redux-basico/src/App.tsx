import Pantalla from "./components/pantalla";
import { increment, decrement, incrementByAmount } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1> Contador: {count}</h1>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Incrementar en 5
        </button>
      </div>
      <div>
        <Pantalla />
      </div>
    </div>
  );
}
export default App;
