import ListarFicheros from "@/ui/ListarFicheros";



export default async function Home(props:{searchParams: Promise<{ruta:string}>}) {
  const searchParams = await props.searchParams;
  let {ruta} = searchParams;
  if (!ruta) ruta = "/";
  console.log("Ruta recibida en page.tsx:", ruta);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <ListarFicheros directorio={ruta} />
    </div>
  );
}
