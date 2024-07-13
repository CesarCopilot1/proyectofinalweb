import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../routes/CONSTANTS";
import { BombaService } from "../../services/BombaService";
import { SurtidorService } from "../../services/SurtidorService";
import NavMenu from "../../components/NavMenu";
import { Button, Card, CardBody, CardHeader, Input, Typography, Select, Option } from "@material-tailwind/react";
import { Surtidor } from "../../models/Surtidor";

const BombaForm = () => {
    const navigate = useNavigate();
    ////const [id, setId] = useState("");
    const [codigo, setCodigo] = useState("");
    const [surtidor, setSurtidor] = useState(0);
    const [surtidores, setSurtidores] = useState<Surtidor[]>([]);

    const { id: paramId } = useParams();

    useEffect(() => {
        fetchSurtidores();
        if (paramId) {
            fetchCreadorById();
        }
    }, [paramId]);

    const fetchSurtidores = () => {
        SurtidorService.list().then((response) => {
            setSurtidores(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchCreadorById = () => {
        if (!paramId) return;
        BombaService.get(parseInt(paramId)).then((response) => {
            console.log(response);
            //setId(response.id?.toString() || "");
            setCodigo(response.codigo);
            setSurtidor(response.surtidor);
        }).catch((error) => {
            console.log(error);
        });
    };

    const onRifaFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (paramId) {
            updateRifa();
        } else {
            createRifa();
        }
    };

    const updateRifa = () => {
        if (!paramId || surtidor === undefined) {
            return;
        }
        BombaService.update({
            //id: parseInt(id),
            codigo: codigo,
            surtidor: surtidor // Assuming you need to send an object with id
        }).then((response) => {
            console.log(response);
            navigate(Routes.BOMBA.LIST);
        }).catch((error) => {
            console.log(error);
        });
    };

    const createRifa = () => {
        if (surtidor === undefined) {
            return;
        }
        BombaService.create({
            //id: parseInt(id),
            codigo: codigo,
            surtidor: surtidor // Assuming you need to send an object with id
        })
            .then(response => {
                console.log(response);
                navigate(Routes.BOMBA.LIST);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <NavMenu />
            <div className="flex justify-center w-screen">
                <Card className="w-[80%] mt-5">
                    <CardBody>
                        <CardHeader color="transparent" shadow={false} >
                            <Typography variant="h4" color="blue-gray">
                                Formulario de Bomba
                            </Typography>
                        </CardHeader>
                        <form onSubmit={onRifaFormSubmit}>
                            
                            <div className="mt-3">
                                <Input label="Código" value={codigo}
                                    onChange={(e) => setCodigo(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <Input label="Surtidor" value={surtidor}
                                    onChange={(e) => setSurtidor(parseInt(e.target.value) || 0)} />
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
};

export default BombaForm;
