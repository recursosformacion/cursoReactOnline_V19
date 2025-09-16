import { useState } from 'react'
import { ThemeContext, AuthContext, Documentacion } from './contex/creacion';
import Pagina from './componentes/pagina';



function App() {
  const [theme, setTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState({ name: 'Miguel' });


  return (
    <>
       <ThemeContext value={theme}>
      <AuthContext value={currentUser.name}>
        <Documentacion value={{ doc: 234, titulo: "El contexto en profundidad" }}>
          <Pagina />
        </Documentacion>
      </AuthContext>
    </ThemeContext>
    </>
  )
}

export default App
