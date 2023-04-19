
import React from 'react';
import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../components/Modal";
import ModalEditar from "../components/ModalEditar";
import ModalEliminar from "../components/ModalEliminar";
import { useRouter } from 'next/router';


const Flor: React.FC = () => {
    const router = useRouter()

    const nombreFlorRef = useRef();
    const idFlorToUpdateRef = useRef();
    const proveedorFlorRef = useRef();
    const variedadToUpdateRef = useRef();
    const tMallasFlorToUpdateRef = useRef();
    const tTallosxMallaFlorToUpdateRef = useRef();
    const tallosSueltosFlorToUpdateRef = useRef();
    const tTallosFlorToUpdateRef = useRef();
    const tallos40FlorToUpdateRef = useRef();
    const tallos50FlorToUpdateRef = useRef();
    const tallos60FlorToUpdateRef = useRef();
    const tallos70FlorToUpdateRef = useRef();
    const tallos80FlorToUpdateRef = useRef();
    const tallos90FlorToUpdateRef = useRef();
    const tBonchesToUpdateRef = useRef();
    const tallosNacionalFlorToUpdateRef = useRef();
    const tallosSobrantesFlorToUpdateRef = useRef();
    const tVariedadFlorToUpdateRef = useRef();
    const [idFlor, setIdFlor] = useState<number | null>(null);
    const [flor, setFlor] = useState([]);
    const [created, setCreated] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [deletedError, setDeletedError] = useState(false);
    const [editError, setEditError] = useState(false);
    //control de modal, declaracion de const
    const [showModal, setShowModal] = useState(false);
    const [showModalEditar, setShowModalEdit] = useState(false);
    const [showModalEliminar, setShowModalEliminar] = useState(false);

    //control de valores de ingreso
    const [valorProveedor, setValorProveedor] = useState();
    const [valorVariedad, setValorVariedad] = useState();
    const [valortMallas, setValortMallas] = useState();
    const [valorTallosxMalla, setValorTallosxMalla] = useState();
    const [valorTallosSuelto, setValorTallosSuelto] = useState();
    const [valortTallos, settTallos] = useState();
    const [valorTallos40, setValorTallos40] = useState();
    const [valorTallos50, setValorTallos50] = useState();
    const [valorTallos60, setValorTallos60] = useState();
    const [valorTallos70, setValorTallos70] = useState();
    const [valorTallos80, setValorTallos80] = useState();
    const [valorTallos90, setValorTallos90] = useState();
    const [valortBonches, setValortBonches] = useState();
    const [valorTallosNacional, setValorTallosNacional] = useState();
    const [valorTallosSobrante, setValorTallosSobrante] = useState();
    const [valortVariedad, setValortVariedad] = useState();

    async function getFlor() {
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/flor`,
            postData);
        const response = await res.json();
        setFlor(response.flor);
    }
    async function addFlor() {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                PROVEEDOR: valorProveedor,
                VARIEDAD: valorVariedad,
                tMallas_gestionFlor: valortMallas,
                tTallosxMalla_gestionflor: valorTallosxMalla,
                tallosSueltos_gestionFlor: valorTallosSuelto,
                tTallos_gestionFlor: valortTallos,
                tallos40_gestionFlor: valorTallos40,
                tallos50_gestionFlor: valorTallos50,
                tallos60_gestionFlor: valorTallos60,
                tallos70_gestionFlor: valorTallos70,
                tallos80_gestionFlor: valorTallos80,
                tallos90_gestionFlor: valorTallos90,
                tBonches_gestionFlor: valortBonches,
                tNacional_gestionFlor: valorTallosNacional,
                talloSobrante_gestionFlor: valorTallosSobrante,
                tVariedad_gestionFlor: valortVariedad,

            }),
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/flor`,
            postData
        );
        const response = await res.json();
        if (response.response.message != "Agregado") return;
        setCreated(true);
        setShowModal(false);
    }

    async function ediFlor() {
        if (!idFlor) return;
        const postData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_gestionFlor: idFlor,
                PROVEEDOR: valorProveedor,
                VARIEDAD: valorVariedad,
                tMallas_gestionFlor: valortMallas,
                tTallosxMalla_gestionflor: valorTallosxMalla,
                tallosSueltos_gestionFlor: valorTallosSuelto,
                tTallos_gestionFlor: valortTallos,
                tallos40_gestionFlor: valorTallos40,
                tallos50_gestionFlor: valorTallos50,
                tallos60_gestionFlor: valorTallos60,
                tallos70_gestionFlor: valorTallos70,
                tallos80_gestionFlor: valorTallos80,
                tallos90_gestionFlor: valorTallos90,
                tBonches_gestionFlor: valortBonches,
                tallosNacional_gestionFlor: valorTallosNacional,
                talloSobrante_gestionFlor: valorTallosSobrante,
                tVariedad_gestionFlor: valortVariedad,
            }),
        };

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/flor`,
            postData
        );
        const response = await res.json();
        if (response.response.message === "error") return setEditError(true);
        await getFlor();
        setUpdated(true);
        setIdFlor(null);
        setShowModalEdit(false);
    }
    const handleEdit = (id: number) => {
        setIdFlor(id);
        setShowModalEdit(true);
    }
    async function deleteFlor() {
        if (!idFlor) return;
        const postData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_personal: idFlor,
            }),
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/flor`,
            postData
        );
        const response = await res.json();
        if (response.response.message === "error al eliminar") return setDeletedError(true);
        setFlor(flor.filter((a) => a.id_gestionFlor !== idFlor));
        setDeleted(true);
        setIdFlor(null);
        setShowModalEliminar(false);
    }
    const handleDelete = (id: number) => {
        setIdFlor(id);
        setShowModalEliminar(true);
    }
    useEffect(() => {
        getFlor();
    }, []);
    const asignarProveedor = event => {
        setValorProveedor(event.target.value);
    }
    const asignarVariedad = event => {
        setValorVariedad(event.target.value);
    }
    const asignartMallas = event => {
        setValortMallas(event.target.value);
    }
    const asignartTallosxMalla = event => {
        setValorTallosxMalla(event.target.value);
    }
    const asignartallosSuelto = event => {
        setValorTallosSuelto(event.target.value);
    }
    const asignartTallos = event => {
        settTallos(event.target.value);
    }
    const asignarTallos40 = event => {
        setValorTallos40(event.target.value);
    }
    const asignartallos50 = event => {
        setValorTallos50(event.target.value);
    }
    const asignarTallos60 = event => {
        setValorTallos60(event.target.value);
    }
    const asignarTallos70 = event => {
        setValorTallos70(event.target.value);
    }
    const asignarTallos80 = event => {
        setValorTallos80(event.target.value);
    }
    const asignarTallos90 = event => {
        setValorTallos90(event.target.value);
    }
    const asignartBonches = event => {
        setValortBonches(event.target.value);
    }
    const asignarTallosNacional = event => {
        setValorTallosNacional(event.target.value);
    }

    const asignarTallosSobrante = event => {
        setValorTallosSobrante(event.target.value);
    }
    const asignartVariedad = event => {
        setValortVariedad(event.target.value);
    }

    return (
        <div className=" w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500">
            <button onClick={router.back} className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
                    REGRESAR
                </span>
            </button>
            <div className='relative h-50 w-full ' >
                <div className='lg:flex lg:justify-end lg:object-righT sm:justify-center sm:flex'>
                    <img src={'../assets/images/logo.png'} alt="" />
                </div>
            </div>
            <form className="flex items-center">
                <label className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="m-10 relative w-1/3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </form>
            <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShowModal(true)} >AGREGAR NUEVO</button>
            {created ? <div>Success!</div> :
                null}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium"># </th>
                            <th scope="col" className="px-6 py-3 text-base">PROVEEDOR</th>
                            <th scope="col" className="px-6 py-3 text-base"> VARIEDAD </th>
                            <th scope="col" className="px-6 py-3 text-base">T. MALLAS</th>
                            <th scope="col" className="px-6 py-3 text-base">T. TALLOSxMALLA</th>
                            <th scope="col" className="px-6 py-3 text-base">TALLOS SUELTOS</th>
                            <th scope="col" className="px-6 py-3 text-base">T. TALLOS</th>
                            <th scope="col" className="px-6 py-3">40</th>
                            <th scope="col" className="px-6 py-3">50</th>
                            <th scope="col" className="px-6 py-3">60</th>
                            <th scope="col" className="px-6 py-3">70</th>
                            <th scope="col" className="px-6 py-3">80</th>
                            <th scope="col" className="px-6 py-3">90</th>
                            <th scope="col" className="px-6 py-3 text-base">T. BONCHES</th>
                            <th scope="col" className="px-6 py-3 text-base">T. NACIONAL</th>
                            <th scope="col" className="px-6 py-3 text-base">TALLOS SOBRANTES</th>
                            <th scope="col" className="px-6 py-3 text-base">T. VARIEDAD</th>
                            <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
                            <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {flor.map((flor) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={flor.id_gestionFlor}>
                                <td className="px-6 py-4">{flor.id_gestionFlor}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{flor.PROVEEDOR}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-lime-500">{flor.VARIEDAD}</td>
                                <td className="px-6 py-4">{flor.tMallas_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tTallosxMalla_gestionflor}</td>
                                <td className="px-6 py-4">{flor.tallosSueltos_gestionFlor}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{flor.tTallos_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos40_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos50_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos60_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos70_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos80_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallos90_gestionFlor}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{flor.tBonches_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.tallosNacional_gestionFlor}</td>
                                <td className="px-6 py-4">{flor.talloSobrante_gestionFlor}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{flor.tVariedad_gestionFlor}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEdit(flor.id_gestionFlor)}>EDITAR</a></td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDelete(flor.id_gestionFlor)}>ELIMINAR</a> </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Flor;
