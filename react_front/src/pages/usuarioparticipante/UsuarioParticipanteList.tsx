import { useEffect, useState } from "react";
import { UsuarioParticipanteService } from "../../services/UsuarioParticipanteService";
import { Routes } from "../../routes/CONSTANTS";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import TailwindLink from "../../components/TailwindLink";
import NavMenu from "../../components/NavMenu";
import { UsuarioParticipante } from "../../models/UsuarioParticipante";

const UsuarioParticipanteList = () => {

    const [usuarioparticipanteList, setUsuarioParticipanteList] = useState<UsuarioParticipante[]>([])

    useEffect(() => {
        fetchUsuarioParticipanteList()
    }, [])

    const fetchUsuarioParticipanteList = () => {
        UsuarioParticipanteService.list().then((response) => {
            setUsuarioParticipanteList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    function deleteProduct(id?: number) {
        if (!id) {
            return;
        }
        UsuarioParticipanteService.delete(id).then(() => {
            fetchUsuarioParticipanteList();
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
                            <h1 className="text-3xl font-bold">Lista de USUARIOPARTICIPANTE</h1>
                        </CardHeader>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th>CreadorUsuario</th>
                                    <th>Rifa</th>
                                    <th>Numero Ticket</th>
                                    <th>Ganador</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarioparticipanteList.map((usuarioparticipante) =>
                                    <tr className="even:bg-blue-gray-50/50" key={"rifas" + usuarioparticipante.id}>
                                        <td>{usuarioparticipante.idCreador.username}</td>
                                        <td>{usuarioparticipante.idRifa.nombre}</td>
                                        <td>{usuarioparticipante.numeroticket}</td>
                                        <td>{usuarioparticipante.ganador ? 'Sí' : 'No'}</td>
                                        <td>
                                            <TailwindLink text="Editar" to={Routes.USUARIOPARTICIPANTE.EDIT_PARAM(usuarioparticipante.id)} />
                                        </td>
                                        <td>
                                            <Button size="sm" color="red"
                                                onClick={() => {
                                                    deleteProduct(usuarioparticipante.id)
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

export default UsuarioParticipanteList;