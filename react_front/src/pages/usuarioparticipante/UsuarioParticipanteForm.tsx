import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";
import { UsuarioParticipanteService } from "../../services/UsuarioParticipanteService";
import { CreadorService } from "../../services/CreadorService";
import { RifasService } from "../../services/RifasService";
import { Rifa } from "../../models/Rifa";
import { Creador } from '../../models/Creador';

const UsuarioParticipanteForm = () => {
    const navigate = useNavigate();
    const [usuario_id, setIdCreador] = useState<string>("");
    const [rifa_id, setIdRifa] = useState<string>("");
    const [numeroticket, setNumeroTicket] = useState<number>(0);
    const [ganador, setGanador] = useState<boolean>(false);
    const [creador, setCreadores] = useState<Creador[]>([]);
    const [rifas, setRifas] = useState<Rifa[]>([]);
    const { id } = useParams();

    useEffect(() => {
        CreadorService.list().then((response: Creador[]) => setCreadores(response));
        RifasService.list().then((response: Rifa[]) => setRifas(response));
        if (id) {
            fetchUsuarioParticipanteById(parseInt(id));
        }
    }, [id]);
    
    const fetchUsuarioParticipanteById = (id: number) => {
        UsuarioParticipanteService.get(id).then((response) => {
            setIdCreador(response.usuario_id?.toString() || "");
            setIdRifa(response.rifa_id?.toString() || "");
            setNumeroTicket(response.numeroticket);
            setGanador(response.ganador);
        }).catch((error) => {
            console.log(error);
        });
    };
    const onProductoFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateUsuarioParticipante(parseInt(id));
        } else {
            createUsuarioParticipante();
        }
    };
    const updateUsuarioParticipante = (id: number) => {
        UsuarioParticipanteService.update({
            id: id,
            usuario_id: parseInt(usuario_id),
            rifa_id: parseInt(rifa_id),
            numeroticket: numeroticket,
            ganador: ganador
        }).then((response) => {
            console.log(response);
            navigate(Routes.USUARIOPARTICIPANTE.LIST);
        }).catch((error) => {
            console.log(error);
        });
    };
    const createUsuarioParticipante = () => {
        UsuarioParticipanteService.create({
            usuario_id: parseInt(usuario_id),
            rifa_id: parseInt(rifa_id),
            numeroticket: numeroticket,
            ganador: ganador
        }).then((response) => {
            console.log(response);
            navigate(Routes.USUARIOPARTICIPANTE.LIST);
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="w-[80%] mt-5">
                    <CardBody>
                        <CardHeader color="transparent" shadow={false}>
                            <Typography variant="h4" color="blue-gray">
                                Formulario de Usuario Participante
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onProductoFormSubmit}>
                            <div className="mt-3">
                                <label>
                                    Creador:
                                    <select value={usuario_id} onChange={e => setIdCreador(e.target.value)}>
                                        <option value="">Seleccione un creador</option>
                                        {creador.map(creador => (
                                            <option key={creador.id} value={creador.id?.toString() ?? ''}>{creador.username}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <br />
                            <div className="mt-3">
                                <label>
                                    Rifa:
                                    <select value={rifa_id} onChange={e => setIdRifa(e.target.value)}>
                                        <option value="">Seleccione una rifa</option>
                                        {rifas.map(rifa => (
                                            <option key={rifa.id} value={rifa.id?.toString() ?? ''}>{rifa.nombre}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <br />
                            <div className="mt-3">
                                <Input label="Numero Ticket" value={numeroticket} type="number" onChange={(e) => setNumeroTicket(Number(e.target.value))} />
                            </div>
                            <br />
                            <div className="mt-3">
                                <label>
                                    Ganador:
                                    <input type="checkbox" checked={ganador} onChange={(e) => setGanador(e.target.checked)} />
                                </label>
                            </div>
                            <br />
                            <div className="mt-3">
                                <Button type="submit">Guardar</Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default UsuarioParticipanteForm;