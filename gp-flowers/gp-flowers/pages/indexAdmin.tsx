import React from 'react';
import { useRouter } from 'next/router';


function App() {

    var direccion_salida = "./login";
    var direccion_gestionFLores = "./gestionFlor";
    var direccion_almacen = "./almacen/gestionAlmacen";
    var direccion_personal = "./personal/gestionPersonal";
    var direccion_proveedores = "./proveedores/gestionProveedores";
    var direccion_reportes = "./reportes/reportesAdmin";
    var direccion_facturacion = "./facturacion/gestionFacturacion";

    const router = useRouter();
    function SalirSesion() {
        router.push(direccion_salida);
    }
    function IrGestionFlores() {
        router.push(direccion_gestionFLores);
    }
    function IrAlmacen() {
        router.push(direccion_almacen);
    }
    function IrPersonal() {
        router.push(direccion_personal);
    }
    function IrProveedores() {
        router.push(direccion_proveedores);
    }
    function IrReportes() {
        router.push(direccion_reportes);
    }
    function IrFacturacion() {
        router.push(direccion_facturacion);
    }

    return (
        <div className='w-full h-screen  bg-gradient-to-r from-lime-300 to-cyan-300'>
            <button className="ml-8 mt-6 p-4 relative inline-flex  text-xl text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600"
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
            <div className="flex flex-col-2 justify-center  items-center">
                <button type="button" className="p-8 text-6xl font-bold bg-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-4 mb-6"
                    onClick={IrGestionFlores}>
                    GESTION FLOR</button>
                <button type="button" className="text-6xl font-bold bg-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg p-8 text-center mr-4 mb-6"
                    onClick={IrAlmacen}
                >ALMACEN</button>
                <button type="button" className="text-6xl font-bold bg-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg p-8 text-center mr-4 mb-6"
                    onClick={IrPersonal}
                >PERSONAL</button>
            </div>
            <div className="flex flex-col-2 justify-center  items-center">
                <button type="button" className="text-6xl font-bold bg-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg p-8 text-center mr-4"
                    onClick={IrProveedores}
                >PROVEEDORES</button>
                <button type="button" className="text-6xl font-bold bg-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg p-8 text-center mr-4"
                    onClick={IrReportes}
                >REPORTES</button>
                <button type="button" className="text-6xl font-bold bg-amber-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none rounded-lg p-8 text-center mr-4"
                    onClick={IrFacturacion}
                >FACTURACION</button>

            </div>

        </div>
    );
}

export default App;
