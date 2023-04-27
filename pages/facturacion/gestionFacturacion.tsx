import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import rowFactura from "../../components/rowFactura";
import Modal from "../../components/ModalFacturacion";


const Facturacion: React.FC = () => {

  //control de secciones de pantalla
  const [estadoPrimeraSeccion, setEstadoPrimeraSeccion] = useState(true);
  const [estadoSegundaSeccion, setEstadoSegundaSeccion] = useState(false);
  const [estadoTerceraSeccion, setEstadoTerceraSeccion] = useState(false);

  //variables de formulario
  const [valorIdFacturacion, setValorIdFacturacion] = useState("");
  const [valorMarketingName, setValorMarketingName] = useState("");
  const [valorCliente, setValorCliente] = useState("");
  const [valorMarcacion, setValorMarcacion] = useState("");
  const [valorPais, setValorPais] = useState("");
  const [valorConsignment, setValorConsignment] = useState("");
  const [valorFarmCode, setValorFarmCode] = useState("");
  const [valorDate, setValorDate] = useState("");
  const [valorIncoterm, setValorIncoterm] = useState("");
  const [valorCountryCode, setValorCountryCode] = useState("");
  const [valorMawb, setValorMawb] = useState("");
  const [valorHawb, setValorHawb] = useState("");
  const [valorAirLine, setValorAirLine] = useState("");
  const [valorCurrierFreight, setValorCurrierFreight] = useState("");
  const [valorRuc, setValorRuc] = useState("");
  const [valorNoEmbarque, setValorNoEmbarque] = useState("");
  const [valorPersonInvoice, setValorPersonInvoice] = useState("");
  const [valorInvoice, setValorInvoice] = useState("");
  const [valorUsdaOnly, setValorUsdaOnly] = useState("");
  const [valorObservacionesFactura, setValorObservacionesFactura] = useState("");

  //valores de contenido de factura
  const [valorIdContFacturacion, setValorIdContFacturacion] = useState("");
  const [valorPicesTypeContFacturacion, setValorPicesTypeContFacturacion] = useState("");
  const [valorTotalPicesContFacturacion, setValorTotalPicesContFacturacion] = useState("");
  const [valorEqFullBoxesContFacturacion, setValorEqFullBoxesContFacturacion] = useState("");
  const [valorProductRosasContFacturacion, setValorProductRosasContFacturacion] = useState("");
  const [valorLongitudIdContFacturacion, setValorLongitudIdContFacturacion] = useState("");
  const [valorNoBunchesContFacturacion, setValorNoBunchesContFacturacion] = useState("");
  const [valorIndicatorContFacturacion, setValorIndicatorContFacturacion] = useState("");
  const [valorHtsContFacturacion, setValorHtsContFacturacion] = useState("");
  const [valorNandinaContFacturacion, setValorNandinaContFacturacion] = useState("");
  const [valorTotalStemsIdContFacturacion, setValorTotalStemsIdContFacturacion] = useState("");
  const [valorStemsPerBunchContFacturacion, setValorStemsPerBunchContFacturacion] = useState("");
  const [valorUnitPriceContFacturacion, setValorUnitPriceContFacturacion] = useState("");
  const [valorTotalContFacturacion, setValorTotalContFacturacion] = useState("");
  


  const router = useRouter()

  const [facturaciones, setFacturaciones] = useState([]);

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

  //valor de paises de database
  const [paises, setPaises] = useState([]);
  //valor de value cargo de database
  const [valueCargo, setValueCargo] = useState([]);

  //contenido de cuerpo de facturacion
  const [valueContFacturaciones, setContFacturaciones] = useState([]);

  //variedad de flor
  const [variedades, setVariedades] = useState([]);
  const [valorVariedades, setValorVariedades] = useState("");


  //convirtiendo en array el valor de paises para que se mapee una sola vez
  //y se muestre solamente un solo componente select
  const opcionesPaises = paises.map((pais) => ({
    value: pais.name,
    label: pais.name
  }));

  const opcionesValueCargo = valueCargo.map((cargo) => ({
    valueCargo: cargo.name,
    labelCargo: cargo.name
  }));
  
  const opcionesVariedad = variedades.map((vard) => ({
    value: vard.nombre_VariedadFlor,
    label: vard.nombre_VariedadFlor
  }));

  //funcion de consulta de paises
  async function getPaises(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/paises`,
    postData);
    const response = await res.json();
    setPaises(response.paises);
  }
  
  //funcion de consulta de value cargo
  async function getValueCargo(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/value_cargo`,
    postData);
    const response = await res.json();
    setValueCargo(response.cargo);
  }  


  //funciones de consulta facturacion
  async function getFacturacion(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/facturacion_formulario`,
    postData);
    const response = await res.json();
    setFacturaciones(response.facturacion);
  }

    //funciones de consulta de contenido de cuerpo facturacion
  async function getContFacturacion(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/facturacion_contenido`,
    postData);
    const response = await res.json();
    setContFacturaciones(response.contFacturacion);
  }

  //funcion de consulta para variedad
  async function getVariedad(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/variedad`,
    postData);
    const response = await res.json();
    setVariedades(response.variedad);
  }

  //filtra los datos de consulta
  async function getFiltroProveedores(){
    
    const queryParams = new URLSearchParams({
      id_calFacturacion: valorAFiltrar ,
      cliente_calFacturacion: valorAFiltrar,
      marcacion_calFacturacion: valorAFiltrar,
      pais_calFacturacion: valorAFiltrar,
      consignment_calFacturacion: valorAFiltrar,
      farmCode_calFacturacion: valorAFiltrar,
      date_calFacturacion: valorAFiltrar,
      incoterm_calFacturacion: valorAFiltrar,
      countryCode_calFacturacion: valorAFiltrar,
      mawb_calFacturacion: valorAFiltrar,
      hawb_calFacturacion: valorAFiltrar,
      airLine_calFacturacion: valorAFiltrar,
      currierFreight_calFacturacion: valorAFiltrar,
      ruc_calFacturacion: valorAFiltrar,
      noEmbarque_calFacturacion: valorAFiltrar,
      personInvoice_calFacturacion: valorAFiltrar,
      invoice_calFacturacion: valorAFiltrar,
      usdaOnly_calFacturacion: valorAFiltrar,
    });
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/facturacion_form_filtro?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await res.json();
    //en caso de no encontrar el elemento
    if (response.facturacion.length === 0) {
      alert("No se encontraron resultados de la busqueda, vuelve hacerlo");
    } else {
      setFacturaciones(response.facturacion);
    }
  }

  async function addFacturacion(){
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marketingName_calFacturacion: valorMarketingName,
        cliente_calFacturacion:  valorCliente,
        marcacion_calFacturacion: valorMarcacion,
        pais_calFacturacion: valorPais,
        consignment_calFacturacion: valorConsignment,
        farmCode_calFacturacion: valorFarmCode,
        date_calFacturacion: valorDate,
        incoterm_calFacturacion: valorIncoterm,
        countryCode_calFacturacion: valorCountryCode,
        mawb_calFacturacion: valorMawb,
        hawb_calFacturacion: valorHawb,
        airLine_calFacturacion: valorAirLine,
        currierFreight_calFacturacion: valorCurrierFreight,
        ruc_calFacturacion: valorRuc,
        noEmbarque_calFacturacion: valorNoEmbarque,
        personInvoice_calFacturacion: valorPersonInvoice,
        invoice_calFacturacion: valorInvoice,
        usdaOnly_calFacturacion: valorUsdaOnly,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/facturacion_formulario`,
      postData
    );
    const response = await res.json();
    if(response.response.message != "success") return;    
  }

  async function updateFacturacion(){
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_calFacturacion: valorIdFacturacion,
        marketingName_calFacturacion: valorMarketingName,
        cliente_calFacturacion:  valorCliente,
        marcacion_calFacturacion: valorMarcacion,
        pais_calFacturacion: valorPais,
        consignment_calFacturacion: valorConsignment,
        farmCode_calFacturacion: valorFarmCode,
        date_calFacturacion: valorDate,
        incoterm_calFacturacion: valorIncoterm,
        countryCode_calFacturacion: valorCountryCode,
        mawb_calFacturacion: valorMawb,
        hawb_calFacturacion: valorHawb,
        airLine_calFacturacion: valorAirLine,
        currierFreight_calFacturacion: valorCurrierFreight,
        ruc_calFacturacion: valorRuc,
        noEmbarque_calFacturacion: valorNoEmbarque,
        personInvoice_calFacturacion: valorPersonInvoice,
        invoice_calFacturacion: valorInvoice,
        usdaOnly_calFacturacion: valorUsdaOnly,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/facturacion_formulario`,
      postData
    );
    const response = await res.json();
    console.log(response.response.facturacion);
    if(response.response.message != "success") return;
  }

  async function deleteFacturacion() {
    console.log(facturaciones.values);
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_calFacturacion: valorBorrar,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/facturacion_formulario`,
      postData
    );
    const response = await res.json();
    console.log(response.response.facturacion);
    if(response.response.message != "success") return;
  }

  useEffect(() => {
    getPaises();
    getValueCargo();
  
    getFacturacion();
    getContFacturacion();
    getVariedad();
    
  }, []);


  //asignacion valor a filtrar
  const asignarValorAFiltrar = event => {
    setValorAFiltrar(event.target.value);
  }

  //asignacion variables de formulario
  const asignarIdFacturacion = event => {
    setValorMarketingName(event.target.value);
  }

  const asignarMarketingName = event => {
    setValorMarketingName(event.target.value);
  }

  const asignarCliente = event => {
    setValorCliente(event.target.value);
  }

  const asignarMarcacion = event => {
    setValorMarcacion(event.target.value);
  }

  const asignarPais = event => {
    setValorPais(event.target.value);
  }

  const asignarConsignment = event => {
    setValorConsignment(event.target.value);
  }

  const asignarFarmCode = event => {
    setValorFarmCode(event.target.value);
  }

  const asignarDate = event => {
    setValorDate(event.target.value);
  }

  const asignarIncoterm = event => {
    setValorIncoterm(event.target.value);
  }
  
  const asignarCountryCode = event => {
    setValorCountryCode(event.target.value);
  }
  
  const asignarMawb = event => {
    setValorMawb(event.target.value);
  }
  
  const asignarHawb = event => {
    setValorHawb(event.target.value);
  }
  
  const asignarAirLine = event => {
    setValorAirLine(event.target.value);
  }
  
  const asignarCurrierFreight = event => {
    setValorCurrierFreight(event.target.value);
  }
  
  const asignarRuc = event => {
    setValorRuc(event.target.value);
  }
  
  const asignarNoEmbarque = event => {
    setValorNoEmbarque(event.target.value);
  }
  
  const asignarPersonInvoice = event => {
    setValorPersonInvoice(event.target.value);
  }
   
  const asignarInvoice = event => {
    setValorInvoice(event.target.value);
  }
   
  const asignarUsdaOnly = event => {
    setValorUsdaOnly(event.target.value);
  }
   
  const asignarObservacionesFactura = event => {
    setValorObservacionesFactura(event.target.value);
  }

  //asignacion cuerpo factura
  const asignarVariedad = event => {
    setValorVariedades(event.target.value);
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

  const htmlCode = 
  <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>

    <table className='sm:rounded-lg w-full text-sm text-left dark:text-gray-400'>
      <thead className='text-gray-700 uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400'>
                      <tr>
                        <th scope="col" className="text-center px-5 py-3 text-xl">ID</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">PICES TYPE</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">TOTAL PICES</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">EQ. FULL BOXES</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">PRODUCT ROSAS</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">LONGITUD</th>
                        <th scope="col" className="text-center px-15 py-3 text-xl"># BUNCHES</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">INDICATOR</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">HTS</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">NANDINA</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">TOTAL STEMS</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">STEMS/BUNCH</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">UNIT PRICE</th>
                        <th scope="col" className="text-center px-5 py-3 text-xl">TOTAL VALUE USD.</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white" >
                          <td className='text-center text-lg'>
                            <label className='w-20 h-20 text-center'>{valorNumeroBunches*valorStemsPerBunch}</label>
                          </td>
                          <td className='text-center text-lg'>
                          <select class="w-20 h-20 bg-emerald-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option value="FB">FB</option>
                              <option value="HB">HB</option>
                              <option value="QB">QB</option>
                            </select>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorTotalPices} onChange={asignarTotalPices}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <label>{valorTotalPices/2}</label>
                          </td>
                          <td className='text-center text-lg'>
                            <select value={valorVariedades} onChange={asignarVariedad} class="w-20 h-20 bg-emerald-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected>Escoja la Variedad</option>
                              {opcionesVariedad.map((opcion) => (
                                <option value={opcion.value}>{opcion.label}</option>
                              ))}
                            </select>
                          </td>
                          <td className='text-center text-lg'>
                            <select class="w-20 h-20 bg-emerald-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected>Escoja la longitud</option>
                              <option value="40 cm">40 cm</option>
                              <option value="50 cm">50 cm</option>
                              <option value="60 cm">60 cm</option>
                              <option value="70 cm">70 cm</option>
                              <option value="80 cm">80 cm</option>
                              <option value="90 cm">90 cm</option>
                              <option value="100 cm">100 cm</option>
                            </select>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorNumeroBunches} onChange={asignarNumeroBunches}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorTotalPices} onChange={asignarTotalPices}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorTotalPices} onChange={asignarTotalPices}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorTotalPices} onChange={asignarTotalPices}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <label className='w-20 h-20 text-center'>{valorNumeroBunches*valorStemsPerBunch}</label>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorStemsPerBunch} onChange={asignarStemsPerBunch}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <input className='w-20 h-20 text-center bg-emerald-200 rounded-lg' value={valorUnitPrice} onChange={asignarUnitPrice}></input>
                          </td>
                          <td className='text-center text-lg'>
                            <label className='w-20 h-20 text-center text-3xl font-bold'>{valorUnitPrice*valorStemsPerBunch*valorNumeroBunches}</label>
                          </td>
                        </tr>



                      </tbody>
    </table>
  </div>
  ;

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

              <button onClick={router.back} className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
                  REGRESAR
                </span>
              </button>


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
            <input value={valorMarketingName} onChange={asignarMarketingName} type="text" id="first_name" className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignee Name and Address</label>
            <a class="flex flex-col p-6 bg-white border border-gray-200 shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-1/5 font-medium text-gray-900 dark:text-white">CLIENTE:</label>
                    <input value={valorCliente} onChange={asignarCliente} type="text" id="last_name" class="bg-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-row items-center justify-between pb-4 leading-normal">
                    <label for="first_name" class="block text-sm w-2/5 font-medium text-gray-900 dark:text-white">MARCACION:</label>
                    <input value={valorMarcacion} onChange={asignarMarcacion} type="text" id="last_name" class="bg-gray-50 w-4/7 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div class="flex flex-col justify-between leading-normal">
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">País</label>
                    <div>
                      <select value={valorPais} onChange={asignarPais} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Escoja un País</option>
                          {opcionesPaises.map((opcion) => (
                            <option value={opcion.value}>{opcion.label}</option>
                          ))}
                      </select>
                    </div>
                </div>
            </a>
            <div className='flex flex-row items-center pt-6'>
                    <div className='flex flex-col w-1/7 mr-6 items-center'>
                      <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Consignment</label>  
                    </div>
                    <div className='flex flex-col w-2/5 items-center'>
                      <input value={valorConsignment} onChange={asignarConsignment} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div>
            </div>
          </div>
          <div>
              <div class="grid mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">Farm Code</label>
                    <input value={valorFarmCode} onChange={asignarFarmCode} type="text" id="first_name" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GP" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input value={valorDate} onChange={asignarDate} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="23/02/2022" required/>
                </div>
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">INCOTERM</label>
                    <input value={valorIncoterm} onChange={asignarIncoterm} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FCA-UIO" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Country Code</label>
                    <input value={valorCountryCode} onChange={asignarCountryCode} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EC" required/>
                </div>
              </div>
              <div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">MAWB No.</label>
                    <input value={valorMawb} onChange={asignarMawb} type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14509595784" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">HAWB</label>
                    <input value={valorHawb} onChange={asignarHawb} type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="893896" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Air Line</label>
                    <input value={valorAirLine} onChange={asignarAirLine} type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Currier & Freight Forwarder</label>
                    <div className='mb-6'>
                      <select value={valorCurrierFreight} onChange={asignarCurrierFreight} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Escoja el Value Cargo</option>
                          {opcionesValueCargo.map((opcionCargo) => (
                            <option value={opcionCargo.valueCargo}>{opcionCargo.labelCargo}</option>
                          ))}
                      </select>
                    </div>
                </div>
              </div>
              <div class="grid md:grid-cols-2">
                <div>
                    <label for="first_name" class="block text-sm font-medium text-gray-900 dark:text-white">R.U.C. No.</label>
                    <input value={valorRuc} onChange={asignarRuc} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0502401011001" required/>
                </div>
                <div>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">No EMBARQUE</label>
                    <input value={valorNoEmbarque} onChange={asignarNoEmbarque} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
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
                      
                      {valueContFacturaciones.map((contFacturaciones) => (
                        <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={contFacturaciones.id_cont_facturacion}>
                          <td className='border border-lime-900 text-center text-lg'>{contFacturaciones.picesType_cont_facturacion}
                            <select id="countries" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option value="FB">FB</option>
                              <option value="HB">HB</option>
                              <option value="QB">QB</option>
                            </select>
                          </td>
                          <td className='border border-lime-900 text-center text-lg'>{contFacturaciones.totalPices_cont_facturacion}</td>
                          <td className='border border-lime-900 text-center text-lg '>{contFacturaciones.eqFullBoxes_cont_facturacion}</td>
                          <td className='border border-lime-900 text-center text-lg '>{contFacturaciones.productRosas_cont_facturacion}</td>
                          <td className='border border-lime-900 text-center text-lg '>{contFacturaciones.longitud_cont_facturacion}</td>

                          <td className="border border-lime-900 px-6 py-4 text-center">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>{setShowModalEditar(true);}}>EDITAR</a></td>
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
                    <input value={valorPersonInvoice} onChange={asignarPersonInvoice} type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>
        </div>
        <div className='flex flex-col-2'>
                <div className='ml-12 w-1/2'>
                    <input value={valorInvoice} onChange={asignarInvoice} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">CUSTOM USE ONLY</label>
                    <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">The flowers and plants on this invoice where wholly grown in ECUADOR</label>
                </div>
                <div className='ml-12 w-1/2'>
                    <input value={valorUsdaOnly} onChange={asignarUsdaOnly} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">USDA, APHIS, P.P.Q. Use Only</label>
                </div>
        </div>
        <div className='m-12'>
                    <button onClick={() => {addFacturacion()}}  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-3xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          GUARDAR
                      </span>
                    </button>                
                </div>
      </div>
    }

    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div>
                <div>
                  <p>{htmlCode}</p>
                </div>
                
              </div>
    </Modal>
    <Modal isVisible={showModalEditar} onClose={() => setShowModalEditar(false)}>
              <div>
                <form className="w-full max-w-lg">

                  <div className="w-full md:w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        ID
                      </label>
                      <input value={valorId}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoId}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        CEDULA
                      </label>
                      <input value={valorCedula}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoCedula}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        NOMBRE
                      </label>
                      <input value={valorNombre}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoNombre}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        TELEFONO
                      </label>
                      <input value={valorTelefono} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoTelefono}/>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="grid-last-name">
                        OBSERVACIONES
                      </label>
                      <input value={valorObservaciones}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={valorDefectoObservaciones}/>

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