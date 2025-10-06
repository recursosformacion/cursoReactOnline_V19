import {
  increment,
  incrementByAmount
} from '../redux/reducer';
import { useDispatch } from 'react-redux';

function Pantalla(){
  
  const dispatch = useDispatch();

  return (
    <div>
        <h1> Pantalla 2</h1>
        <button onClick={()=>dispatch(increment())}>Incrementar desde pantalla 2</button>
        <button onClick={()=>dispatch(incrementByAmount(7))}>Incrementar en 7</button>
    </div>
  )
}
export default Pantalla;