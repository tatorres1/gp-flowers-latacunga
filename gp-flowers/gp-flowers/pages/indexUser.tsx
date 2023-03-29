import React from 'react';
import { useRouter } from 'next/router'


function App() {

    var direccion_salida = "./login";
    var direccion_gestionFLores = "./gestionFlor";
    var direccion_almacen = "./almacen/gestionAlmacen";
    var direccion_proveedores = "./proveedores/gestion_proveedores";

    const router = useRouter();
    function SalirSesion(){
        router.push(direccion_salida);
    }
    function IrGestionFlores(){
        router.push(direccion_gestionFLores);
    }
    function IrAlmacen(){
        router.push(direccion_almacen);
    }
    function IrProveedores(){
        router.push(direccion_proveedores);
    }



    return (
        <div className='w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500'>
            <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    onClick={SalirSesion}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
                    SALIR
                </span>
            </button>
            <div className='relative h-50 w-full ' >
                <div className='lg:flex lg:justify-end lg:object-righT sm:justify-center sm:flex'>
                    <img src={'../assets/images/logo.png'} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center  items-center'>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={IrGestionFlores}
                >GESTION FLOR</button>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={IrAlmacen}
                >ALMACEN</button>
                <button type="button" className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={IrProveedores}
                >PROVEEDORES</button>
            </div>
        </div>

    );
}

export default App;
