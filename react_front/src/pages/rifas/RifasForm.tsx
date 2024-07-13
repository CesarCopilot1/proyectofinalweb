import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { RifasService } from "../../services/RifasService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const RifasForm = () => {
    const navigate = useNavigate();
    const [usuariocreador, setUsuariocreador] = useState('');
    const [nombre, setNombre] = useState("");
    const [canttickets, setCanttickets] = useState("");
    const [codigoticket, setCodigoTicket] = useState("");
    const [estado, setEstado] = useState("");
    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchCreadorById();
    }, [id])

    const fetchCreadorById = () => {
        if (!id) return;
        RifasService.get(parseInt(id)).then((response) => {
            console.log(response);
            setUsuariocreador(response.usuariocreador.toString());
            setNombre(response.nombre);
            setCanttickets(response.canttickets.toString());
            setCodigoTicket(response.codigoticket);
            setEstado(response.estado);

        }).catch((error) => {
            console.log(error);
        });
    }
    const onRifaFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateRifa();
        } else {
            createRifa();
        }
    }
    const updateRifa = () => {
        if (!id) {
            return;
        }
        RifasService.update({
            id: parseInt(id),
            usuariocreador: parseInt(usuariocreador),
            nombre: nombre,
            canttickets: parseInt(canttickets),
            codigoticket: codigoticket,
            estado: estado,

        }).then((response) => {
            console.log(response);
            navigate(Routes.RIFAS.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }
    const createRifa = () => {
        RifasService.create({
            usuariocreador: parseInt(usuariocreador),
            nombre: nombre,
            canttickets: parseInt(canttickets),
            codigoticket: codigoticket,
            estado: estado,
        })
            .then(response => {
                console.log(response);
                navigate(Routes.RIFAS.LIST);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="w-[80%] mt-5">
                    <CardBody>
                        <CardHeader color="transparent" shadow={false} >
                            <Typography variant="h4" color="blue-gray">
                                Formulario de Rifas
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onRifaFormSubmit}>
                            <div className="mt-3">
                                <Input
                                    label="Usuario Creador"
                                    value={usuariocreador}
                                    onChange={(e) => setUsuariocreador(e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <Input label="nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="CantidadTickets" value={canttickets}
                                    onChange={(e) => setCanttickets(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Codigo" value={codigoticket}
                                    onChange={(e) => setCodigoTicket(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <label>
                                    Estado:
                                    <select value={estado} onChange={e => setEstado(e.target.value)}>
                                        <option value="">Seleccione un estado</option>
                                        <option value="1">Pendiente</option>
                                        <option value="0">En Sorteo</option>
                                        <option value="-1">Sorteado</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-3">
                                <Button type="submit">Guardar</Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default RifasForm;


