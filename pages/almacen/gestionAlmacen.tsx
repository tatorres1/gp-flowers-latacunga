import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../../components/Modal";
import ModalEditar from "../../components/ModalEditar";
import ModalEliminar from "../../components/ModalEliminar";


const Almacen: React.FC = () => {
  //control de modal, declaracion de const
  const [showModal, setShowModal] = useState(false);
  const [showModalEditar, setShowModalEdit] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  //declaracion para metodos put,post,etc
  const [created, setCreated] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deletedError, setDeletedError] = useState(false);
  const [editError, setEditError] = useState(false);
  //control de valores de ingreso
  const [idAlmacen, setIdAlmacen] = useState<number | null>(null);
  const [almacen, setalmacen] = useState([]);
  const [valorCantidadAlmacen, setValorCantidadAlmacen] = useState();
  const [valorNombreAlmacen, setValorNombreAlmacen] = useState();
  const [valorTipoAlmacen, setValorTipoAlmacen] = useState();
  const [valorObservacionesAlmacen, setValorObservacionesAlmacen] = useState();


  //funcion principal
  async function getAlmacen() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/almacen`,
      postData);
    const response = await res.json();
    setalmacen(response.almacen);
  }
  useEffect(() => {
    getAlmacen();
  }, []);

  //funciones para el CRUD
  async function addAlmacen() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cantidad_materialAlmacen: valorCantidadAlmacen,
        nombre_materialAlmacen: valorNombreAlmacen,
        tipo_materialAlmacen: valorTipoAlmacen,
        observaciones_materialAlmacen: valorObservacionesAlmacen,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/almacen`,
      postData
    );
    const response = await res.json();
    if (response.response.message != "Agregaste un material!") return;
    setCreated(true);
    setShowModal(false);
  }

  async function editAlmacen() {
    if (!idAlmacen) return;
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_materialAlmacen: idAlmacen,
        cantidad_materialAlmacen: valorCantidadAlmacen,
        nombre_materialAlmacen: valorNombreAlmacen,
        tipo_materialAlmacen: valorTipoAlmacen,
        observaciones_materialAlmacen: valorObservacionesAlmacen,
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/almacen`,
      postData
    );
    const response = await res.json();
    if (response.response.message === "error") return setEditError(true);
    await getAlmacen();
    setUpdated(true);
    setIdAlmacen(null);
    setShowModalEdit(false);
  }
  const handleEdit = (id: number) => {
    setIdAlmacen(id);
    setShowModalEdit(true);
  }
  async function deleteAlmacen() {
    if (!idAlmacen) return;
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_materialAlmacen: idAlmacen,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/almacen`,
      postData
    );
    const response = await res.json();
    if (response.response.message === "error al eliminar") return setDeletedError(true);
    setalmacen(almacen.filter((a) => a.id_materialAlmacen !== idAlmacen));
    setDeleted(true);
    setIdAlmacen(null);
    setShowModalEliminar(false);
  }
  const handleDelete = (id: number) => {
    setIdAlmacen(id);
    setShowModalEliminar(true);
  }
  //asignar valores
  const asignarCantidadAlmacen = (event) => {
    setValorCantidadAlmacen(event.target.value);
  }
  const asignarNombreAlmacen = event => {
    setValorNombreAlmacen(event.target.value);
  }
  const asignarTipoAlmacen = event => {
    setValorTipoAlmacen(event.target.value);
  }
  const asignarObservacionesAlmacen = event => {
    setValorObservacionesAlmacen(event.target.value);
  }


  return (
    <Fragment>
      <div className='w-full h-screen  bg-gradient-to-r from-lime-400 to-cyan-400' >
        <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
            REGRESAR
          </span>
        </button>
        <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
          <img src={'../assets/images/logo.png'} alt="" />
        </div>

        <form className="flex items-center">
          <label className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="m-10 relative w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></input>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
          </div>
        </form><br></br>
        <button type="button" className="ml-8 py-2.5 px-5 mr-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setShowModal(true)}>AGREGAR NUEVO</button>
        {created ? <div>Success!</div> :
          null}
        <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>
          <table className='sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                
                <th scope="col" className="text-center px-6 py-3 text-xl">CANTIDAD</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">NOMBRE</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">TIPO</th>
                <th scope="col" className="text-center px-6 py-3 text-xl">OBSERVACIONES</th>
                <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
                <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
              </tr>
            </thead>
            <tbody>
              {almacen.map(almacen => (
                <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={almacen.id_materialAlmacen}>    
                  <td className='border border-lime-900 text-center text-lg '>{almacen.cantidad_materialAlmacen}</td>
                  <td className='border border-lime-900 text-center text-lg '>{almacen.nombre_materialAlmacen}</td>
                  <td className='border border-lime-900 text-center text-lg '>{almacen.tipo_materialAlmacen}</td>
                  <td className='border border-lime-900 text-center text-lg '>{almacen.observaciones_materialAlmacen}</td>

                  <td className="border border-lime-900 px-6 py-4 text-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEdit(almacen.id_materialAlmacen)}>EDITAR</a></td>
                  <td className="border border-lime-900 px-6 py-4 text-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDelete(almacen.id_materialAlmacen)}>ELIMINAR</a> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div >
          <form className="w-full max-w-lg">
            <div className="w-full md:w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">CANTIDAD</label>
              <input value={valorCantidadAlmacen} onChange={asignarCantidadAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">NOMBRE DEL MATERIAL</label>
              <input value={valorNombreAlmacen} onChange={asignarNombreAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">TIPO DE MATERIAL</label>
              <input value={valorTipoAlmacen} onChange={asignarTipoAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">OBSERVACIONES</label>
              <input value={valorObservacionesAlmacen} onChange={asignarObservacionesAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <button onClick={() => { addAlmacen(); getAlmacen(); setShowModal(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                GUARDAR NUEVO MATERIAL
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ModalEditar isVisible={showModalEditar} onClose={() => setShowModalEdit(false)}>
        <div >
          <form className="w-full max-w-lg">
            <div className="w-full md:w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">CANTIDAD</label>
              <input value={valorCantidadAlmacen} onChange={asignarCantidadAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">NOMBRE</label>
              <input value={valorNombreAlmacen} onChange={asignarNombreAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">TIPO</label>
              <input value={valorTipoAlmacen} onChange={asignarTipoAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">OBSERVACIONES</label>
              <input value={valorObservacionesAlmacen} onChange={asignarObservacionesAlmacen} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />

              <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={editAlmacen}>
                Guardar
              </button>
            </div>
          </form>
        </div>
      </ModalEditar>
      <ModalEliminar isVisible={showModalEliminar} onClose={() => setShowModalEliminar(false)}>
                <label className="font-bold text-2xl m-16">Estas seguro de eliminar el material? </label>
                <br></br>
                <button type="button" className="place-self-end ml-96 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-m px-5 py-2.5 " onClick={deleteAlmacen}>
                    Si, eliminar
                </button>

            </ModalEliminar>

    
    </Fragment>
  );
};

export default Almacen;
