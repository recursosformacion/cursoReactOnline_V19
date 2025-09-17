
interface UnBotonProps {
  name: string;
  onClick: () => void;
  isActive: boolean;
  pendiente: boolean;
}
export const UnBoton = ({ name, onClick, isActive, pendiente }:UnBotonProps) => {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${isActive ? "active" : ""}`}
    >
      {pendiente ? "cargando..." : name}
    </button>
  );
};
