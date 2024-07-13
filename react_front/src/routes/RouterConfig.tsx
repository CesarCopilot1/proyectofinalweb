import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClientList from "../pages/clients/ClientList";
import ClientForm from "../pages/clients/ClientForm";
import { Routes } from "./CONSTANTS";
import LoginForm from "../pages/auth/LoginForm";
import ProductList from "../pages/products/ProductList";
import ProductForm from "../pages/products/ProductForm";
import CreadorForm from "../pages/usuario/CreadorForm";
import CreadorList from "../pages/usuario/CreadorList";
import RifasList from "../pages/rifas/RifasList";
import RifasForm from "../pages/rifas/RifasForm";
import UsuarioParticipanteForm from "../pages/usuarioparticipante/UsuarioParticipanteForm";
import UsuarioParticipanteList from "../pages/usuarioparticipante/UsuarioParticipanteList";

import SurtidorList from "../pages/surtidor/SurtidorList";
import SurtidorForm from "../pages/surtidor/SurtidorForm";
import BombasList from "../pages/bomba/BombaList";
import BombaForm from "../pages/bomba/BombaForm";
import CamionList from "../pages/camion/CamionList";
import CamionForm from "../pages/camion/CamionForm";

export const routerConfig = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.CLIENTS.LIST,
    element: <ClientList />,
  },
  {
    path: Routes.CLIENTS.CREATE,
    element: <ClientForm />,
  },
  {
    path: Routes.CLIENTS.EDIT,
    element: <ClientForm />,
  },
  {
    path: Routes.PRODUCTS.LIST,
    element: <ProductList />,
  },
  {
    path: Routes.PRODUCTS.CREATE,
    element: <ProductForm />,
  },
  {
    path: Routes.PRODUCTS.EDIT,
    element: <ProductForm />,
  },
  {
    path: Routes.CREADOR.LIST,
    element: <CreadorList />,
  },
  {
    path: Routes.CREADOR.CREATE,
    element: <CreadorForm />,
  },
  {
    path: Routes.CREADOR.EDIT,
    element: <CreadorForm />,
  },
  {
    path: Routes.RIFAS.LIST,
    element: <RifasList />,
  },
  {
    path: Routes.RIFAS.CREATE,
    element: <RifasForm />,
  },
  {
    path: Routes.RIFAS.EDIT,
    element: <RifasForm />,
  },
  {
    path: Routes.USUARIOPARTICIPANTE.LIST,
    element: <UsuarioParticipanteList />,
  },
  {
    path: Routes.USUARIOPARTICIPANTE.CREATE,
    element: <UsuarioParticipanteForm />,
  },
  {
    path: Routes.USUARIOPARTICIPANTE.EDIT,
    element: <UsuarioParticipanteForm />,
  },
  {
    path: Routes.SURTIDOR.LIST,
    element: <SurtidorList />,
  },
  {
    path: Routes.SURTIDOR.CREATE,
    element: <SurtidorForm />,
  },
  {
    path: Routes.SURTIDOR.EDIT,
    element: <SurtidorForm />,
  },
  
  {
    path: Routes.BOMBA.LIST,
    element: <BombasList />,
  },
  {
    path: Routes.BOMBA.CREATE,
    element: <BombaForm />,
  },
  {
    path: Routes.BOMBA.EDIT,
    element: <BombaForm />,
  },
  {
    path: Routes.CAMION.LIST,
    element: <CamionList />,
  },
  {
    path: Routes.CAMION.CREATE,
    element: <CamionForm />,
  },
  {
    path: Routes.CAMION.EDIT,
    element: <CamionForm />,
  },
  {
    path: Routes.AUTH.LOGIN,
    element: <LoginForm />,
  },
]);