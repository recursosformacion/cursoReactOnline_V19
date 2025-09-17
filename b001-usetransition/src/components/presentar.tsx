import { useEffect } from "react";
export const usePantalla = (name: string) => {
  useEffect(() => {
    console.info("Re-render: ", name);
  },[name]);
};

