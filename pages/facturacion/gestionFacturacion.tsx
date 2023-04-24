import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import rowFactura from "../../components/rowFactura";
import Modal from "../../components/Modal";


const Facturacion: React.FC = () => {

  //control de secciones de pantalla
  const [estadoPrimeraSeccion, setEstadoPrimeraSeccion] = useState(true);
  const [estadoSegundaSeccion, setEstadoSegundaSeccion] = useState(false);
  const [estadoTerceraSeccion, setEstadoTerceraSeccion] = useState(false);

  //variables de formulario
  const [marketingName, setMarketingName] = useState("");

  const router = useRouter()

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
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/proveedores_filtro?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await res.json();
    //en caso de no encontrar el elemento
    if (response.proveedores.length === 0) {
      alert("No se encontraron resultados de la busqueda, vuelve hacerlo");
    } else {
      setProveedores(response.proveedores);
    }
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

  //asignacion variables de formulario
  const asignarMarketingName = event => {
    setMarketingName(event.target.value);
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
  async function AccionActivarFiltro(event){
    event.preventDefault();
    await getFiltroProveedores();

  }
  //desactivar filtro
  async function AccionDesactivarFiltro(){
    setValorAFiltrar("");
    getProveedores();
  }

  ////////////////////////////////////////////
  


  const [valorTotalPices, setValorTotalPices] = useState(Number);
  const [valorNumeroBunches, setValorNumeroBunches] = useState(Number);
  const [valorStemsPerBunch, setValorStemsPerBunch] = useState(Number);
  const [valorUnitPrice, setValorUnitPrice] = useState(Number);
  
  const asignarTotalPices = event => {
    setValorTotalPices(event.target.value);
  }

  const asignarStemsPerBunch = event => {
    setValorStemsPerBunch(event.target.value);
  }

  const asignarNumeroBunches = event => {
    setValorNumeroBunches(event.target.value);
  }

  const asignarUnitPrice = event => {
    setValorUnitPrice(event.target.value);
  }


  const numTimes = 5;
  const myVariable = valorTotalPices;

  const htmlCode = <tbody>
  <tr className="bg-white border-b" >
    <td className='border border-lime-900 text-center text-lg'>
    <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">FB</option>
        <option value="CA">HB</option>
        <option value="FR">QB</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <label>{valorTotalPices/2}</label>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">FREEDOM</option>
        <option value="CA">BLUE</option>
        <option value="FR">RAINBOW</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected></option>
        <option value="US">40 cm</option>
        <option value="CA">50 cm</option>
        <option value="FR">60 cm</option>
        <option value="CA">70 cm</option>
        <option value="CA">80 cm</option>
        <option value="CA">90 cm</option>
        <option value="CA">100 cm</option>
      </select>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorNumeroBunches} onChange={asignarNumeroBunches}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <input value={valorTotalPices} onChange={asignarTotalPices}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <label>{valorNumeroBunches*valorStemsPerBunch}</label>
    </td>
    <td className='border border-lime-900 text-center text-lg '>
      <input value={valorStemsPerBunch} onChange={asignarStemsPerBunch}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <input value={valorUnitPrice} onChange={asignarUnitPrice}></input>
    </td>
    <td className='border border-lime-900 text-center text-lg'>
      <label>{valorUnitPrice*valorStemsPerBunch*valorNumeroBunches}</label>
    </td>
  </tr>



</tbody>;

  const renderHtmlCode = () => {
    return htmlCode;
  };

  function renderHtmlMultipleTimes(){
    for (let i = 0; i < 3; i++) {
      return htmlCode;
    }
  };

  return (
    <Fragment>

              <div>
                              <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                      <button onClick={()=> {setEstadoPrimeraSeccion(true);setEstadoSegundaSeccion(false);setEstadoTerceraSeccion(false)}} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                          <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                          </svg>
                          <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                      </button>
                      <button onClick={()=> {setEstadoPrimeraSeccion(false);setEstadoSegundaSeccion(true);setEstadoTerceraSeccion(false)}} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                          <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                          </svg>
                          <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                      </button>
                      <button onClick={()=> {setEstadoPrimeraSeccion(false);setEstadoSegundaSeccion(false);setEstadoTerceraSeccion(true)}} type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                          <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                          </svg>
                          <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                      </button>
                      <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                          <svg class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                          </svg>
                          <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                      </button>
                  </div>
                </div>
              </div>

    {estadoPrimeraSeccion && 
    <div>
      <div className='w-full flex flex-col text-xl items-center bg-green-100 rounded-lg'    >
        {/*seccion titulo*/}
        <div className='p-6'>
          <h5 className='text-4xl font-bold'>COMERCIAL INVOICE 1099</h5>
        </div>
        {/*seccion cabecera*/}
        <div className='flex flex-col-2 mb-12'>
          <div className='pr-12'>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Shipper Name and Address</label>
            <a class="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">GP FLOWERS/MARIN CHACON PATRICIA</h5>
                    <div>
                      <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Cotopaxi-Ecuador</h5>
                      <h5 class="mb-2 text-xs tracking-tight text-gray-900 dark:text-white">Phone: (593) 984342413</h5>
                    </div>                  
                    <p class="mb-2 text-xs tracking-tight text-gray-900 dark:text-white">e_mail: paty_gpflowers@hotmail.com</p>
                </div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={'../assets/images/gp_flowers.jpg'} alt=""/>
            </a>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Marketing Name</label>
            <input value={marketingName} onChange={asignarMarketingName} type="text" id="first_name" className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignee Name and Address</label>
            <a class="flex flex-col p-6 bg-white border border-gray-200 shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-1/5 font-medium text-gray-900 dark:text-white">CLIENTE:</label>
                    <input type="text" id="last_name" class="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-2/5 font-medium text-gray-900 dark:text-white">MARCACION:</label>
                    <input type="text" id="last_name" class="bg-gray-50 w-4/7 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-col justify-between leading-normal">
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">País</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Escoja un País</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                </div>
            </a>
            <div className='flex flex-row items-center pt-6'>
                    <div className='flex flex-col w-1/7 mr-6 items-center'>
                      <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignment</label>  
                    </div>
                    <div className='flex flex-col w-2/5 items-center'>
                      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div>
            </div>
          </div>
          <div>
              <div class="grid mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Farm Code</label>
                    <input type="text" id="first_name" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GP" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="23/02/2022" required/>
                </div>
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">INCOTERM</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FCA-UIO" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Country Code</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EC" required/>
                </div>
              </div>
              <div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">MAWB No.</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14509595784" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">HAWB</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="893896" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Air Line</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Currier & Freight Forwarder</label>
                    <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Escoja VALUE CARGO</option>
                      <option value="US">VALUE CARGO1</option>
                      <option value="CA">VALUE CARGO2</option>
                      <option value="FR">VALUE CARGO3</option>
                      <option value="DE">VALUE CARGO4</option>
                    </select>
                </div>
              </div>
              <div class="grid md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">R.U.C. No.</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0502401011001" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">No EMBARQUE</label>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">DAE No.005-2023-40-00139723</label>
              </div>    
          </div>
        </div>

      </div>

    </div>
    }
    {/*///////////////////////////////////////*/}

    
    {estadoSegundaSeccion &&
    <div className='w-full p-12  bg-gradient-to-r from-lime-300 to-cyan-300'>
      <button onClick={router.back} className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
                      
            


                    
    </div >}


    {
      estadoTerceraSeccion &&
      <div>
        {/*seccion pie*/}
        <div className='flex flex-col-2'>
                <div className='m-12 w-1/2'>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Name and Title of person Preparing Invoice</label>
                    <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
        </div>
        <div className='flex flex-col-2'>
                <div className='ml-12 w-1/2'>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">CUSTOM USE ONLY</label>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">The flowers and plants on this invoice where wholly grown in ECUADOR</label>
                </div>
                <div className='ml-12 w-1/2'>
                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">USDA, APHIS, P.P.Q. Use Only</label>
                </div>
        </div>
        <div className='m-12'>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-3xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          GUARDAR
                      </span>
                    </button>                
                </div>
      </div>
    }

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

export default Facturacion;