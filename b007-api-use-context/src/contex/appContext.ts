import {contextoInicial, type contexto} from '../tipos/tipos';
import { createContext } from 'react';


export const AppContext = createContext<contexto>(contextoInicial);