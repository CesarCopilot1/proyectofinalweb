import { useEffect, useState } from "react";
import { RifasService } from "../../services/RifasService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { Rifa } from "../../models/Rifa";

const RifasList = () => {
    const [rifasList, setRifasList] = useState<Rifa[]>([])
    
    //const estadoNames: { [key: string]: string } = {
      //  '1': 'pendiente',
       // '2': 'en sorteo',
       // '3': 'sorteado',
        // add more mappings as needed
    //};
    
    useEffect(() => {
        fetchProductList()
    }, [])

    const fetchProductList = () => {
        RifasService.list().then((response) => {
            setRifasList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    function deleteProduct(id?: number) {
        if (!id) {
            return;
        }
        RifasService.delete(id).then(() => {
            fetchProductList();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <NavMenu />

            <div className="flex justify-center w-screen ">
                <Card className="h-full w-[90%] overflow-scroll mt-5">
                    <CardBody>
                        <CardHeader shadow={false}>
                            <h1 className="text-3xl font-bold">Lista de Rifas</h1>

                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Estado</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rifasList.map((rifas: Rifa) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"rifas" + rifas.id}>
                                        <td>{rifas.id}</td>
                                        <td>{rifas.usuariocreador}</td>
                                        <td>{rifas.nombre}</td>
                                        <td>{rifas.canttickets}</td>
                                        <td>{rifas.codigoticket}</td>
                                        <td>{rifas.estado}</td>
                                        <td>
                                            <TailwindLink text="Ver Ganador" to={Routes.RIFAS.EDIT_PARAM(rifas.id)} />
                                        </td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.RIFAS.EDIT_PARAM(rifas.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteProduct(rifas.id)
                                                }}>Eliminar</Button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </>);
}

export default RifasList;