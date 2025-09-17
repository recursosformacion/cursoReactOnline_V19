const SlowItem = ({ id }: { id: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 10) {
    // A dormir... :D
  }

  return <li className="item">Proyecto #{id + 1}</li>;
};

export const ListaProc = () => {
  const items = [...Array(100).keys()];

  return (
    <ul className="items">
      {items.map((id) => (
        <SlowItem id={id} key={id}/>
      ))}
    </ul>
  );
};
