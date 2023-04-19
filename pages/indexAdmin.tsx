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

            <div className="grid grid-cols-1 md:grid-cols-6 gap-1 p-20">

                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrGestionFlores}>
                    <svg width="50%" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                    </svg>
                    GESTION FLOR</button>
                </div>
                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrAlmacen}>
<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
</svg>
                    ALMACEN</button>
                </div>
                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrPersonal}>
                    <svg width="50%" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                    </svg>
                    PERSONAL</button>
                </div>
                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrProveedores}>
                    <svg width="50%" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                    </svg>
                    PROVEEDORES</button>
                </div>
                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrReportes}>
                    <svg width="50%" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                    </svg>
                    REPORTES</button>
                </div>
                <div>
                    <button type="button" className="flex items-center p-8 text-calc(4vw + 16px) font-bold bg-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg text-center mr-2 mb-2"
                        onClick={IrFacturacion}>
                    <svg width="50%" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                    </svg>
                    FACTURACION</button>
                </div>


            </div>
            
        </div>
    );
}

export default App;
