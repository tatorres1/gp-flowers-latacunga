import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../../components/Modal";

const Personal: React.FC = () => {

    const personalNombreRef = useRef();

    const [personal, setPersonal] = useState([]);

    const [created, setCreated] = useState(false);

    //control de modal, declaracion de const
    const [showModal, setShowModal] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalEliminar, setShowModalEliminar] = useState(false);

    //control de valores de ingreso
    const [valorCedula, setValorCedula] = useState();
    const [valorNombre, setvalorNombre] = useState();
    const [valorDireccion, setValorDireccion] = useState();
    const [valorTelefono, setvalorTelefono] = useState();

    async function getPersonal() {
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/personal`,
            postData);
        const response = await res.json();
        setPersonal(response.personal);
    }

    async function addPersonal() {
        const nombrePersonal = personalNombreRef.current;
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cedula_personal: valorCedula,
                nombre_personal: valorNombre,
                direccion_personal: valorDireccion,
                telefono_personal: valorTelefono,

            }),
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/personal`,
            postData
        );
        const response = await res.json();
        if (response.response.message != "success") return;
        setCreated(true);
    }

    useEffect(() => {
        getPersonal();
    }, []);

    const asignarCedula = event => {
        setValorCedula(event.target.value);
    }
    const asignarNombre = event => {
        setvalorNombre(event.target.value);
    }
    const asignarDireccion = event => {
        setValorDireccion(event.target.value);
    }
    const asignarTelefono = event => {
        setvalorTelefono(event.target.value);
    }



    return (
        <Fragment>
            <div className='w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500'>
                <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
                        REGRESAR
                    </span>
                </button>
                <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
                    <img src={'../assets/images/logo.png'} alt="" />
                </div>
                <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => setShowModal(true)}>AGREGAR NUEVO</button>

                {created ? <div>Success!</div> :
                    null}


                <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>
                    <table className=' sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="text-center px-6 py-3 text-xl">ID</th>
                                <th scope="col" className="text-center px-6 py-3 text-xl">CEDULA</th>
                                <th scope="col" className="text-center px-6 py-3 text-xl">NOMBRE</th>
                                <th scope="col" className="text-center px-6 py-3 text-xl">DIRECCION</th>
                                <th scope="col" className="text-center px-6 py-3 text-xl">TELEFONO</th>
                                <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
                                <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {personal.map((personal) => (
                                <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={personal.id_personal}>
                                    <td className='border border-lime-900 text-center text-lg'>{personal.id_personal}</td>
                                    <td className='border border-lime-900 text-center text-lg'>{personal.cedula_personal}</td>
                                    <td className='border border-lime-900 text-center text-lg '>{personal.nombre_personal}</td>
                                    <td className='border border-lime-900 text-center text-lg '>{personal.direccion_personal}</td>
                                    <td className='border border-lime-900 text-center text-lg '>{personal.telefono_personal}</td>

                                    <td className="border border-lime-900 px-6 py-4 text-center">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowModalEditar(true)}>EDITAR</a></td>
                                    <td className="border border-lime-900 px-6 py-4 text-center">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowModalEliminar(true)}>ELIMINAR</a> </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>

            </div >

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div>
                    <form className="w-full max-w-lg">

                        <div className="w-full md:w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                                CEDULA
                            </label>
                            <input value={valorCedula} onChange={asignarCedula} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                                NOMBRE
                            </label>
                            <input value={valorNombre} onChange={asignarNombre} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                                DIRECCION
                            </label>
                            <input value={valorDireccion} onChange={asignarDireccion} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                                TELEFONO
                            </label>
                            <input value={valorTelefono} onChange={asignarTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

                            <button onClick={() => { addPersonal(); getPersonal(); setShowModal(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >Guardar</button>

                        </div>


                    </form>
                </div>
            </Modal>
            <Modal isVisible={showModalEditar} onClose={() => setShowModalEditar(false)}>
                editar
            </Modal>
            <Modal isVisible={showModalEliminar} onClose={() => setShowModalEliminar(false)}>
                eliminar
            </Modal>


        </Fragment>
    );
};

export default Personal;
