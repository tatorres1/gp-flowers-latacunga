import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../../components/Modal";
import Modal2 from "../../components/Modal2";


const Proveedores: React.FC = () => {

  const proveedorNombreRef = useRef();

  //constantes para actualizar
  const proveedorIdToUpdateRef = useRef();
  const proveedorCedulaToUpdateRef = useRef();
  const proveedorNombreToUpdateRef = useRef();
  const proveedorTelefonoToUpdateRef = useRef();
  const proveedorObservacionesToUpdateRef = useRef();

  const [proveedores, setProveedores] = useState([]);

  //control de mensaje de exito
  const [created, setCreated] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);


  //control de modal, declaracion de const
  const [showModal, setShowModal] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);

  //control de valores de ingreso
  const [valorId, setValorId] = useState();
  const [valorCedula, setValorCedula] = useState();
  const [valorNombre, setvalorNombre] = useState();
  const [valorTelefono, setvalorTelefono] = useState();
  const [valorObservaciones, setvalorObservaciones] = useState();

  //valores defecto para cuadro de update
  const [valorDefectoId, setValorDefectoId] = useState("");
  const [valorDefectoCedula, setvalorDefectoCedula] = useState("");
  const [valorDefectoNombre, setvalorDefectoNombre] = useState("");
  const [valorDefectoTelefono, setvalorDefectoTelefono] = useState("");
  const [valorDefectoObservaciones, setvalorDefectoObservaciones] = useState("");

  

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

  async function addProveedor(){
    //const productName = productNameRef.current.value.trim();
    const nombreProveedor = proveedorNombreRef.current;
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
        //product_name: "productName",

      }),
    };
    //if(productName.length <3) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    if(response.response.message != "success") return;
    setCreated(true);
  }

  async function updateProveedor(){
    //const productName = productNameRef.current.value.trim();
    const idProveedorToUpdate = proveedorIdToUpdateRef.current;
    const nombreProveedorToUpdate = proveedorNombreToUpdateRef.current;
    const cedulaProveedorToUpdate = proveedorCedulaToUpdateRef.current;
    const telefonoProveedorToUpdate = proveedorTelefonoToUpdateRef.current;
    const observacionesProveedorToUpdate = proveedorObservacionesToUpdateRef.current;

    //if(!idProveedorToUpdate.length) return;
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
        //product_name: "productName",

      }),
    };
    //if(productName.length <3) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    console.log(response.response.proveedor);
    console.log("test");
    if(response.response.message != "success") return;
    setUpdated(true);
  }

  async function deleteProveedor() {
    //if (!valorId) return;
    console.log(proveedores.values);
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_proveedor: proveedores.idproveedor,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
      postData
    );
    const response = await res.json();
    //console.log(response.response.proveedor);
    console.log("test borrar");
    if(response.response.message != "success") return;
    setDeleted(true);
  }


  useEffect(() => {
    getProveedores();
  }, []);

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

  //funcion para update, mostrar data por defecto
  async function asignarDataPorDefecto (id, cedula, nombre, telefono, observaciones){
    setValorDefectoId(id);
    setvalorDefectoCedula(cedula);
    setvalorDefectoNombre(nombre);
    setvalorDefectoTelefono(telefono);
    setvalorDefectoObservaciones(observaciones);
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
      <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => setShowModal(true)}>AGREGAR NUEVO</button>

      {created ? <div>Ingresado!</div>:
      null}
      {updated ? <div>Actualizado!</div>:
      null}
      {deleted ? <div>Eliminado!</div>:
      null}


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
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>setShowModalEliminar(true)}>ELIMINAR</a> </td>
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
                      <input defaultValue={""} value={valorCedula} onChange={asignarCedula} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        NOMBRE
                      </label>
                      <input defaultValue={""} value={valorNombre} onChange={asignarNombre} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        TELEFONO
                      </label>
                      <input defaultValue={""} value={valorTelefono} onChange={asignarTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        OBSERVACIONES
                      </label>
                      <input defaultValue={""} value={valorObservaciones} onChange={asignarObservaciones} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

                      <button onClick={() => {addProveedor(); getProveedores(); setShowModal(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Guardar</button>

                  </div>

                  
                </form>
              </div>
    </Modal>
    <Modal2 isVisible={showModalEditar} onClose={() => setShowModalEditar(false)}>
              <div>
                <form className="w-full max-w-lg">

                  <div className="w-full md:w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        ID
                      </label>
                      <input defaultValue={valorDefectoId} value={valorId} onChange={asignarId} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        CEDULA
                      </label>
                      <input defaultValue={valorDefectoCedula} value={valorCedula} onChange={asignarCedula} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        NOMBRE
                      </label>
                      <input defaultValue={valorDefectoNombre} value={valorNombre} onChange={asignarNombre} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        TELEFONO
                      </label>
                      <input defaultValue={valorDefectoTelefono} value={valorTelefono} onChange={asignarTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        OBSERVACIONES
                      </label>
                      <input defaultValue={valorDefectoObservaciones} value={valorObservaciones} onChange={asignarObservaciones} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

                      <button onClick={() => {updateProveedor(); getProveedores(); setShowModalEditar(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Actualizar
                      </button>

                  </div>
                </form>
              </div>
    </Modal2>
    <Modal isVisible={showModalEliminar} onClose={() => setShowModalEliminar(false)}>
              ¿Desea eliminar el elemento seleccionado?

              <button onClick={() => {deleteProveedor(); getProveedores(); setShowModalEliminar(false); }} type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >Confirmar</button>
    </Modal>

    
    </Fragment>
  );
};

export default Proveedores;
