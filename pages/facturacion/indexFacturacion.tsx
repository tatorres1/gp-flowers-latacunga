import React from 'react';
import { useRouter } from 'next/router';


function App() {

    var direccion_salida = "./login";
    var direccion_agregarFactura = "./gestionFacturacion";
    var direccion_modificarFactura = "./modificacionFactura";
    var direccion_eliminarFactura = "./eliminacionFactura";

    const router = useRouter();
    function SalirSesion() {
        router.push(direccion_salida);
    }
    function IrAgregarFactura() {
        router.push(direccion_agregarFactura);
    }
    function IrModificarFactura() {
        router.push(direccion_modificarFactura);
    }
    function IrEliminarFactura() {
        router.push(direccion_eliminarFactura);
    }

    return (
        <div className='w-full h-screen bg-gradient-to-r from-lime-300 to-cyan-300'>
            <button className="ml-8 mt-6 p-4 relative inline-flex  text-2xl text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600"
                onClick={SalirSesion}>
                <span className="font-black">
                    SALIR
                </span>
            </button>
            <div className='relative h-50 w-full ' >
                <div className='lg:flex lg:justify-end lg:object-righT sm:justify-center sm:flex'>
                    <img src={'../assets/images/logo.png'} alt="" />
                </div>
            </div><br />
            <div className='mt-20'>
                <div className='flex flex-col-3 justify-center  items-center'>
                    <button type="button" className="text-6xl font-bold bg-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg p-8 text-center mr-4"
                        onClick={IrAgregarFactura}
                    >AGREGAR FACTURA</button>
                    <button type="button" className="text-6xl font-bold bg-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 rounded-lg p-8 text-center mr-4"
                        onClick={IrModificarFactura}
                    >MODIFICAR FACTURA</button>
                    <button type="button" className="text-6xl font-bold bg-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg p-8 text-center mr-4"
                        onClick={IrEliminarFactura}
                    >ELIMINAR FACTURA</button>
                </div>
            </div>

        </div>

    );
}

export default App;
