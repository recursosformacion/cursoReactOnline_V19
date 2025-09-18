import { createContext } from "react";

export  const UserContext = createContext({ user: null,time:Date.now() });
