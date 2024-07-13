import React, { useEffect, useState } from "react";
import { CamionService } from "../../services/CamionService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { Camion } from "../../models/Camion";

const CamionList = () => {
    const [camionesList, setCamionesList] = useState<Camion[]>([]);
    
    useEffect(() => {
        fetchCamionesList();
    }, []);

    const fetchCamionesList = () => {
        CamionService.list().then((response) => {
            setCamionesList(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    const deleteCamion = (id?: number) => {
        if (!id) {
            return;
        }
        CamionService.delete(id).then(() => {
            fetchCamionesList();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <NavMenu />

            <div className="flex justify-center w-screen">
                <Card className="h-full w-[90%] overflow-scroll mt-5">
                    <CardBody>
                        <CardHeader shadow={false}>
                            <h1 className="text-3xl font-bold">Lista de Camiones</h1>
                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Modelo</th>
                                    <th>Placa</th>
                                    <th>Capacidad</th>
                                    <th>Saldo</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {camionesList.map((camion: Camion) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"camiones" + camion.id}>
                                        <td>{camion.id}</td>
                                        <td>{camion.modelo}</td>
                                        <td>{camion.placa}</td>
                                        <td>{camion.capacidad}</td>
                                        <td>{camion.saldo}</td>
                                        <td>
                                            <TailwindLink text="Realizar Acción" to={Routes.CAMION.EDIT_PARAM(camion.id)} />
                                        </td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.CAMION.EDIT_PARAM(camion.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteCamion(camion.id)
                                                }}>Eliminar</Button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default CamionList;
