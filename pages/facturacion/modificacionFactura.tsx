import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';




function App() {

    const [seleccionComprador, setSeleccionComprador] = useState(true);
    const [seleccionAño, setSeleccionAño] = useState(false);
    const [seleccionMes, setSeleccionMes] = useState(false);
    const [seleccionDia, setSeleccionDia] = useState(false);
    const [estadoSeleccion, setEstadoSeleccion] = useState(true);


    //estas constantes sirven para guardar los objetos de las consultas 
    //de manera que se puedan usar en la pantalla de modificar
    const [comprador, setComprador] = useState([]);
    const [fecha, setFecha] = useState([]);
    const [hora, setHora] = useState([]);

    const [facturasComprador, setFacturasComprador] = useState([]);
    const [compradorAnios, setCompradorAnios] = useState([]);
    const [compradorMeses, setCompradorMeses] = useState([]);
    const [compradorDias, setCompradorDias] = useState([]);
    const [compradorHoras, setCompradorHoras] = useState([]);

    //estas variables sirven para enviar los datos de consulta
    //como query
    const [seleccionConsultaComprador, setSeleccionConsultaComprador] = useState("");
    const [seleccionConsultaAnio, setSeleccionConsultaAnio] = useState("");
    const [seleccionConsultaMes, setSeleccionConsultaMes] = useState("");
    const [seleccionConsultaDia, setSeleccionConsultaDia] = useState("");
    const [seleccionConsultaHora, setSeleccionConsultaHora] = useState("");

    //variables para juntar todas las variables de consulta 
    //y realizar una consulta donde muestre una factura especifica
    const [fechaFactura, setFechaFactura] = useState("");
    const [horaFactura, setHoraFactura] = useState("");

    //variable para busqueda de factura
    const [compradorBusquedaFactura, setCompradorBusquedaFactura] = useState("");
    const [fechaBusquedaFactura, setFechaBusquedaFactura] = useState("");
    const [horaBusquedaFactura, setHoraBusquedaFactura] = useState("");


    //direcciones
    var direccion_salida = "../login";
    var direccion_gestionModificacionFactura = "./gestionModificacionFacturacion";

    //variables para guardar datos para enviar a gestionModificacionFactura
    const [fechaEnvioConsulta, setFechaEnvioConsulta] = useState("");
    const [HoraEnvioConsulta, setHoraEnvioConsulta] = useState("");

    //valor para guardar el valor de item

    const [valorFechaHoraGuardar, setValorFechaHoraGuardar] = useState(null);

    const router = useRouter();
    function SalirSesion() {
        router.push(direccion_salida);
    }

    function IrModificacionFactura(){
        router.push({
            pathname: direccion_gestionModificacionFactura,
            query: {compradorBusquedaFactura, fechaBusquedaFactura, horaBusquedaFactura}
        }
        )    
    }

    function asignarEstadoSeleccion(estado) {
        if(estado == true) setEstadoSeleccion(true)
        else if (estado == false) setEstadoSeleccion(false);
    }

    //conseguir data sobre comprador 
    async function getComprador(){
        const postData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/comprador_en_factura`,
        postData);
        const response = await res.json();
        setComprador(response.comprador);
      }

          //conseguir data sobre comprador 
    async function getFecha(){
        const postData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/fecha_en_factura`,
        postData);
        const response = await res.json();
        setFecha(response.fecha);
      }

          //conseguir data sobre comprador 
    async function getHora(){
        const postData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hora_en_factura`,
        postData);
        const response = await res.json();
        setHora(response.hora);
      }

      const opcionesComprador = comprador.map((vard) => ({
        value: vard.nombre_comp,
        label: vard.nombre_comp
      }));

    //conseguir data sobre facturas, se envia nombre de comprador 
    async function getFacturasComprador(){
        const queryParams = new URLSearchParams({
            nombre_comp : compradorBusquedaFactura,
          }
          );
  
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/fechas_facturas_registradas?${queryParams.toString()}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const response = await res.json();
          setFacturasComprador(response.facturas_comprador);
      }


    //conseguir data de años
    async function getAniosComprador(){

        const queryParams = new URLSearchParams({
          compradorNombre : seleccionConsultaComprador,
        }
        );

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/anios_comprador?${queryParams.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const response = await res.json();
        setCompradorAnios(response.aniosComprador);
      }

      const opcionesAnios = compradorAnios.map((vard) => ({
        value: vard.anios_comp,
        label: vard.anios_comp
      }));

    const asignarBuscarComprador = event => {
        setCompradorBusquedaFactura(event.target.value);
    }
    const asignarBuscarFecha = event => {
        setFechaBusquedaFactura(event.target.value);
    }
    const asignarBuscarHora = event => {
        setHoraBusquedaFactura(event.target.value);
    }

    const asignarFechaHoraComprador = (item) => {
        setFechaEnvioConsulta(item.fecha_calFacturacion);
        setHoraEnvioConsulta(item.hora_calFacturacion);
    }


      useEffect(() => {
        getComprador();
        getFecha();
      },[]);

      useEffect(() => {

        if(valorFechaHoraGuardar){
            asignarFechaHoraComprador(valorFechaHoraGuardar);
        }
      },[valorFechaHoraGuardar]);



    return (
        <div className='w-full h-full bg-gradient-to-r from-lime-300 to-cyan-300'>
            <button className="ml-8 mt-6 p-4 relative inline-flex  text-2xl text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600"
                onClick={SalirSesion}>
                <span className="font-black">
                    SALIR
                </span>
            </button>
                <br />

            {
                seleccionComprador 
                &&
                <div className='w-6/7 m-8 flex flex-row bg-white p-8'>
                <label for="years" class="block m-12 text-4xl font-medium text-gray-900 dark:text-white">Seleccione el comprador</label>
                <select id="years" size="20" class="bg-gray-50 text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {comprador.map((item, index) => (
                        <option onClickCapture={(event) => {asignarEstadoSeleccion(false); asignarBuscarComprador(event)}} key={index} value={item.comprador_calFacturacion}>
                            {item.comprador_calFacturacion}
                        </option>
                        ))}
                </select>
                
                <div className='flex flex-col'>
                    <button disabled={estadoSeleccion} onClick={() => {setSeleccionAño(true); setSeleccionComprador(false); asignarEstadoSeleccion(true); getFacturasComprador(); }}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            CONTINUAR
                        </span>
                        </div>
                    </button>
                </div>
                
            </div>

            }

            {
                seleccionAño 
                &&
                <div className='w-6/7 m-8 flex flex-row bg-white p-8'>
                <label for="years" class="block m-12 text-4xl font-medium text-gray-900 dark:text-white">Seleccione fecha y hora</label>
                <select id="years" size="20" class="bg-gray-50 text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {fecha.map((item, index) => (
                        <option onClickCapture={(event) => {asignarEstadoSeleccion(false); asignarBuscarFecha(event);getHora()}} key={index} value={item.fecha_calFacturacion}>
                            {item.fecha_calFacturacion}
                        </option>
                        ))}
                </select>
                <select id="years" size="20" class="bg-gray-50 text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {hora.map((item, index) => (
                        <option onClickCapture={(event) => {asignarEstadoSeleccion(false); asignarBuscarHora(event); }} key={index} value={item.hora_calFacturacion}>
                            {item.hora_calFacturacion}
                        </option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button disabled={estadoSeleccion} onClick={() => {setSeleccionAño(false); asignarEstadoSeleccion(true); alert("datos:" + compradorBusquedaFactura + fechaBusquedaFactura + horaBusquedaFactura);IrModificacionFactura()}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            CONTINUAR
                        </span>
                        </div>
                    </button> 
                    <button onClick={() => {setSeleccionAño(false); setSeleccionComprador(true); asignarEstadoSeleccion(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            ATRAS
                        </span>
                        </div>
                    </button> 
                </div>
                
            </div>

            }

            {
                seleccionMes 
                &&
                <div className='w-6/7 m-8 flex flex-row bg-white p-8'>
                <label for="years" class="block m-12 text-4xl font-medium text-gray-900 dark:text-white">Seleccione el mes</label>
                <select id="years" size="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {items.map((item, index) => (
                        <option onClick={() => {asignarEstadoSeleccion(false)}} key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button disabled={estadoSeleccion} onClick={() => {setSeleccionDia(true); setSeleccionMes(false); asignarEstadoSeleccion(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            CONTINUAR
                        </span>
                        </div>
                    </button> 
                    <button onClick={() => {setSeleccionAño(true); setSeleccionMes(false); asignarEstadoSeleccion(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            ATRAS
                        </span>
                        </div>
                    </button> 
                </div>
                
            </div>

            }

            {
                seleccionDia 
                &&
                <div className='w-6/7 m-8 flex flex-row bg-white p-8'>
                <label for="years" class="block m-12 text-4xl font-medium text-gray-900 dark:text-white">Seleccione el día</label>
                <select id="years" size="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {items.map((item, index) => (
                        <option onClick={() => {asignarEstadoSeleccion(false)}} key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button onClick={() => {setSeleccionAño(true); setSeleccionComprador(false); asignarEstadoSeleccion(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            ABRIR
                        </span>
                        </div>
                    </button> 
                    <button onClick={() => {setSeleccionMes(true); setSeleccionDia(false); asignarEstadoSeleccion(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="flex items-center h-20 transition-all ease-in duration-75 dark:bg-gray-900 w-1/3 group-hover:bg-opacity-0">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <div className='flex items-center h-20'>
                        <span class="transition-all ease-in duration-75 dark:bg-gray-900 w-2/3 group-hover:bg-opacity-0">
                            ATRAS
                        </span>
                        </div>
                    </button> 
                </div>
                
            </div>

            }
            




        </div>

    );
}

export default App;
