import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../../components/Modal";

const Proveedores: React.FC = () => {

  const proveedorNombreRef = useRef();

  //constantes para actualizar
  const proveedorIdToUpdateRef = useRef();
  const proveedorCedulaToUpdateRef = useRef();
  const proveedorNombreToUpdateRef = useRef();
  const proveedorTelefonoToUpdateRef = useRef();
  const proveedorObservacionesToUpdateRef = useRef();

  const [proveedores, setProveedores] = useState([]);

  //control de modal, declaracion de const
  const [showModal, setShowModal] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);

  //control de valores de ingreso
  const [valorId, setValorId] = useState("");
  const [valorCedula, setValorCedula] = useState("");
  const [valorNombre, setvalorNombre] = useState("");
  const [valorTelefono, setvalorTelefono] = useState("");
  const [valorObservaciones, setvalorObservaciones] = useState("");

  //valores defecto para cuadro de update
  const [valorDefectoId, setValorDefectoId] = useState("");
  const [valorDefectoCedula, setvalorDefectoCedula] = useState("");
  const [valorDefectoNombre, setvalorDefectoNombre] = useState("");
  const [valorDefectoTelefono, setvalorDefectoTelefono] = useState("");
  const [valorDefectoObservaciones, setvalorDefectoObservaciones] = useState("");

  //valor id para al dar click que ejecute query de delete
  const [valorBorrar, setValorBorrar] = useState("");

  //valor que se usa de filtro
  const [valorAFiltrar, setValorAFiltrar] = useState("");

  //funciones de consulta
  async function getProveedores(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
    postData);
    const response = await res.json();
    setProveedores(response.proveedores);
  }

  //filtra los datos de consulta
  async function getFiltroProveedores(){
    
    const queryParams = new URLSearchParams({
      id_proveedor: valorAFiltrar ,
      cedula_proveedor: valorAFiltrar,
      nombre_proveedor: valorAFiltrar,
      telefono_proveedor: valorAFiltrar,
      observaciones_proveedor: valorAFiltrar,
    });
    
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/proveedores_filtro?${queryParams.toString()}`,
    postData);
    const response = await res.json();
    setProveedores(response.proveedores);
  }

  async function addProveedor(){
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cedula_proveedor: valorCedula,
        nombre_proveedor: valorNombre,
        telefono_proveedor: valorTelefono,
        observaciones_proveedor: valorObservaciones
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    if(response.response.message != "success") return;    
  }

  async function updateProveedor(){
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_proveedor: valorId,
        cedula_proveedor: valorCedula,
        nombre_proveedor: valorNombre,
        telefono_proveedor: valorTelefono,
        observaciones_proveedor: valorObservaciones
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    console.log(response.response.proveedor);
    if(response.response.message != "success") return;
  }

  async function deleteProveedor() {
    console.log(proveedores.values);
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_proveedor: valorBorrar,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    console.log(response.response.proveedor);
    if(response.response.message != "success") return;
  }

  useEffect(() => {
    getProveedores();
  }, []);


  //asignacion de valores
  const asignarId = event => {
    setValorId(event.target.value);
  }

  const asignarCedula = event => {
    setValorCedula(event.target.value);
  }

  const asignarNombre = event => {
    setvalorNombre(event.target.value);
  }

  const asignarTelefono = event => {
    setvalorTelefono(event.target.value);
  }

  const asignarObservaciones = event => {
    setvalorObservaciones(event.target.value);
  }

  const asignarValorAFiltrar = event => {
    setValorAFiltrar(event.target.value);
  }

  //funcion para update, mostrar data por defecto
  async function asignarDataPorDefecto (id, cedula, nombre, telefono, observaciones){
    setValorDefectoId(id);
    setvalorDefectoCedula(cedula);
    setvalorDefectoNombre(nombre);
    setvalorDefectoTelefono(telefono);
    setvalorDefectoObservaciones(observaciones);
  }

  //resetear los valores de las variables

  async function resetearVariables(){
    //alert("reseteado");
    setValorId(null);
    setValorCedula(null);
    setvalorNombre(null);
    setvalorTelefono(null);
    setvalorObservaciones(null);
  }

    //valor a borrar despues de click borrar
  async function asignarValorBorrar(id){
    setValorBorrar(id);
  }

  //activar filtro
  async function AccionActivarFiltro(){
    getFiltroProveedores();

  }
  //desactivar filtro
  async function AccionDesactivarFiltro(){
    setValorAFiltrar("");
    getProveedores();
  }

  return (
    <Fragment>
    <div className='w-full h-screen  bg-gradient-to-r from-lime-300 to-cyan-300'>
      <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
          REGRESAR
        </span>
      </button>
      <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
        <img src={'../assets/images/logo.png'} alt="" />
      </div>

      <form>
          <label className= "text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="m-10 relative w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={valorAFiltrar} onChange={asignarValorAFiltrar} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese aquí su búsqueda"></input>
              <button onClick={AccionActivarFiltro} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-16 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BUSCAR</button>
              <button onClick={AccionDesactivarFiltro} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">X</button>

          </div>
          
        </form>
        <br></br>


      <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => setShowModal(true)}>AGREGAR NUEVO</button>

            <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>
        <table className=' sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="text-center px-6 py-3 text-xl">ID</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">CEDULA</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">NOMBRE</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">TELEFONO</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">OBSERVACIONES</th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
            </tr>
          </thead>
          <tbody>
            
            {proveedores.map((proveedores) => (
              <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={proveedores.id_proveedor}>
                <td className='border border-lime-900 text-center text-lg'>{proveedores.id_proveedor}</td>
                <td className='border border-lime-900 text-center text-lg'>{proveedores.cedula_proveedor}</td>
                <td className='border border-lime-900 text-center text-lg '>{proveedores.nombre_proveedor}</td>
                <td className='border border-lime-900 text-center text-lg '>{proveedores.telefono_proveedor}</td>
                <td className='border border-lime-900 text-center text-lg '>{proveedores.observaciones_proveedor}</td>

                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>{setShowModalEditar(true);asignarDataPorDefecto(proveedores.id_proveedor, proveedores.cedula_proveedor, proveedores.nombre_proveedor, proveedores.telefono_proveedor, proveedores.observaciones_proveedor);}}>EDITAR</a></td>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {setShowModalEliminar(true); asignarValorBorrar(proveedores.id_proveedor);}}>ELIMINAR</a> </td>
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
                      <input value={valorCedula} onChange={asignarCedula} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        NOMBRE
                      </label>
                      <input value={valorNombre} onChange={asignarNombre} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        TELEFONO
                      </label>
                      <input value={valorTelefono} onChange={asignarTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        OBSERVACIONES
                      </label>
                      <input value={valorObservaciones} onChange={asignarObservaciones} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

                      <button onClick={() => {addProveedor(); getProveedores(); setShowModal(false); resetearVariables(); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Guardar</button>

                  </div>

                  
                </form>
              </div>
    </Modal>
    <Modal isVisible={showModalEditar} onClose={() => setShowModalEditar(false)}>
              <div>
                <form className="w-full max-w-lg">

                  <div className="w-full md:w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        ID
                      </label>
                      <input value={valorId} onChange={asignarId} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoId}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        CEDULA
                      </label>
                      <input value={valorCedula} onChange={asignarCedula} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoCedula}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        NOMBRE
                      </label>
                      <input value={valorNombre} onChange={asignarNombre} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoNombre}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        TELEFONO
                      </label>
                      <input value={valorTelefono} onChange={asignarTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoTelefono}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        OBSERVACIONES
                      </label>
                      <input value={valorObservaciones} onChange={asignarObservaciones} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoObservaciones}/>

                      <button onClick={() => {updateProveedor(); getProveedores(); setShowModalEditar(false); resetearVariables(); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Actualizar
                      </button>

                  </div>
                </form>
              </div>
    </Modal>
    <Modal isVisible={showModalEliminar} onClose={() => setShowModalEliminar(false)}>
              ¿Desea eliminar el elemento seleccionado?

              <button onClick={() => {deleteProveedor(); getProveedores(); setShowModalEliminar(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Confirmar</button>
    </Modal>

    
    </Fragment>
  );
};

export default Proveedores;
