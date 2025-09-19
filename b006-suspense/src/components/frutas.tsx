function obtenerFrutas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Naranja', 'Melocoton', 'Manzana', 'Mandarina','Cerezas']);
    }, 2000);
  });
}

const gestionFrutas = {
  data: null as string[] | null,
  read():string[] {
    if (this.data !== null) return this.data;
    throw obtenerFrutas().then(result => this.data = result as string[]);
  }
};

function LasFrutas() {
  const frutas = gestionFrutas.read();
  return (
    <>
      <h2>Mis frutas favoritas</h2>          
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </>
  );
}

export default LasFrutas;