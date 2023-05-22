import React, { useState } from 'react';
import { useRouter } from 'next/router';




function App() {

    const [seleccionComprador, setSeleccionComprador] = useState(true);
    const [seleccionAño, setSeleccionAño] = useState(false);
    const [seleccionMes, setSeleccionMes] = useState(false);
    const [seleccionDia, setSeleccionDia] = useState(false);

    var direccion_salida = "./login";


    const router = useRouter();
    function SalirSesion() {
        router.push(direccion_salida);
    }


   


   
        const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

    return (
        <div className='w-full bg-gradient-to-r from-lime-300 to-cyan-300'>
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
                <select id="years" size="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {items.map((item, index) => (
                        <option key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button onClick={() => {setSeleccionAño(true); setSeleccionComprador(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                <label for="years" class="block m-12 text-4xl font-medium text-gray-900 dark:text-white">Seleccione el año</label>
                <select id="years" size="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {items.map((item, index) => (
                        <option key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button onClick={() => {setSeleccionMes(true); setSeleccionAño(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                    <button onClick={() => {setSeleccionAño(false); setSeleccionComprador(true)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                        <option key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button onClick={() => {setSeleccionDia(true); setSeleccionMes(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                    <button onClick={() => {setSeleccionAño(true); setSeleccionMes(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                        <option key={index}>{item}</option>
                        ))}
                </select>
                <div className='flex flex-col'>
                    <button onClick={() => {setSeleccionAño(true); setSeleccionComprador(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
                    <button onClick={() => {setSeleccionMes(true); setSeleccionDia(false)}}  class="rounded flex flex-row m-6 text-2xl font-medium text-gray-900 h-20 w-56 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
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
