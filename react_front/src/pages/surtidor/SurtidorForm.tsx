import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { SurtidorService } from "../../services/SurtidorService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";

const SurtidorForm = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [saldo_gasolina, setSaldoGasolina] = useState("");
    const [saldo_gasolinapremium, setSaldoGasolinaPremium] = useState("");
    const [saldo_diesel, setSaldoDiesel] = useState("");

    const { id } = useParams();
    useEffect(() => {
        if (!id) { return; }
        fetchCreadorById();
    }, [id])

    const fetchCreadorById = () => {
        if (!id) return;
        SurtidorService.get(parseInt(id)).then((response) => {
            console.log(response);
            setNombre(response.nombre);
            setLatitud(response.latitud);
            setLongitud(response.longitud);
            setSaldoGasolina(response.saldo_gasolina.toString());
            setSaldoGasolinaPremium(response.saldo_gasolinapremium.toString());
            setSaldoDiesel(response.saldo_diesel.toString());

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
        SurtidorService.update({
            id: parseInt(id),
            nombre: nombre,
            latitud: latitud,
            longitud: longitud,
            saldo_gasolina: parseInt(saldo_gasolina),
            saldo_gasolinapremium: parseInt(saldo_gasolinapremium),
            saldo_diesel: parseInt(saldo_diesel),

        }).then((response) => {
            console.log(response);
            navigate(Routes.SURTIDOR.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }
    const createRifa = () => {
        SurtidorService.create({
            nombre: nombre,
            latitud: latitud,
            longitud: longitud,
            saldo_gasolina: parseInt(saldo_gasolina),
            saldo_gasolinapremium: parseInt(saldo_gasolinapremium),
            saldo_diesel: parseInt(saldo_diesel),
        })
            .then(response => {
                console.log(response);
                navigate(Routes.SURTIDOR.LIST);
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
                                Formulario de Surtidor
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onRifaFormSubmit}>
                            <div className="mt-3">
                                <Input label="nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Latitud" value={latitud}
                                    onChange={(e) => setLatitud(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Longitud" value={longitud}
                                    onChange={(e) => setLongitud(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Saldo Gasolina" value={saldo_gasolina}
                                    onChange={(e) => setSaldoGasolina(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Saldo Gasolina P" value={saldo_gasolinapremium}
                                    onChange={(e) => setSaldoGasolinaPremium(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Saldo Diesel" value={saldo_diesel}
                                    onChange={(e) => setSaldoDiesel(e.target.value)} />
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

export default SurtidorForm;


