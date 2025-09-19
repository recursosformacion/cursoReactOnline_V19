import { Suspense } from 'react';
import LasFrutas from './components/frutas';


export default function App() {
  return (
    <div>
      <Suspense fallback={verEspera()}>
        <LasFrutas />
      </Suspense>
    </div>
  );
}

function verEspera(){
  return (
    <div>Cargando...</div>
  )
}