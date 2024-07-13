import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { CamionService } from "../../services/CamionService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";


const CamionForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [saldo, setSaldo] = useState("");

    useEffect(() => {
        if (id) {
            fetchCamionById();
        }
    }, [id]);

    const fetchCamionById = () => {
        if (!id) {
            return; // Salir si id no está definido
        }
        
        const camionId: number = parseInt(id); // Convertir id a número entero
        
        CamionService.get(camionId).then((response) => {
            console.log(response);
            if (response) {
                setModelo(response.modelo);
                setPlaca(response.placa);
                setCapacidad(response.capacidad.toString());
                setSaldo(response.saldo.toString());
            } else {
                console.log("No se encontró el camión");
            }
        }).catch((error) => {
            console.log("Error al obtener el camión:", error);
        });
    }
    
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            updateCamion();
        } else {
            createCamion();
        }
    }

    const updateCamion = () => {
        if (!id) return;
        CamionService.update({
            id: parseInt(id),
            modelo: modelo,
            placa: placa,
            capacidad: parseInt(capacidad),
            saldo: parseInt(saldo),
        }).then((response) => {
            console.log(response);
            navigate(Routes.CAMION.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }

    const createCamion = () => {
        CamionService.create({
            modelo: modelo,
            placa: placa,
            capacidad: parseInt(capacidad),
            saldo: parseInt(saldo),
        }).then((response) => {
            console.log(response);
            navigate(Routes.CAMION.LIST);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="w-[80%] mt-5">
                    <CardBody>
                        <CardHeader color="transparent" shadow={false}>
                            <Typography variant="h4" color="blue-gray">
                                Formulario de Camión
                            </Typography>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-3">
                                <Input label="Modelo" value={modelo}
                                    onChange={(e) => setModelo(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Placa" value={placa}
                                    onChange={(e) => setPlaca(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Capacidad" value={capacidad}
                                    onChange={(e) => setCapacidad(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Saldo" value={saldo}
                                    onChange={(e) => setSaldo(e.target.value)} />
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

export default CamionForm;
