import { Surtidor } from "../models/Surtidor";

export interface Bomba {
    id?: number;
    codigo: string;
    //surtidor: Surtidor;
    
    surtidor: number;
}
