export interface f_mensaje {
  text: string;
  sending?: boolean;
  key?: number;
};

export interface GestionProps {
  mensaje: f_mensaje[];
  act: React.Dispatch<React.SetStateAction<f_mensaje[]>>;
}