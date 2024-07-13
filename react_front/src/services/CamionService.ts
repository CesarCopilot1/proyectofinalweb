import { Camion } from "../models/Camion";
import apiRef from "./interceptorsRef";

export const CamionService = {
    create: (client: Camion) => {
        return new Promise<Camion>((resolve, reject) => {
            apiRef.post('camion/', client)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    list: () => {
        return new Promise<Camion[]>((resolve, reject) => {
            apiRef.get('camion/')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    get: (id: number) => {
        return new Promise<Camion>((resolve, reject) => {
            apiRef.get(`camion/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    update: (client: Camion) => {
        return new Promise<Camion>((resolve, reject) => {
            apiRef.put(`camion/${client.id}/`, client)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    },
    delete: (id: number) => {
        return new Promise((resolve, reject) => {
            apiRef.delete(`camion/${id}/`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }
}