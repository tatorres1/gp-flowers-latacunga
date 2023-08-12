import { useEffect, useState, useRef, Fragment } from "react";
import { useRouter } from 'next/router';


function Registro ()  {
    
    const router = useRouter();

    var direccion_login = "./login";

    function Irlogin(){
        router.push(direccion_login);
    }

    return (
       
            <div class="border-b border-gray-900/10 pb-12 p-12 flex justify-center space-x-7">
                <div className="flex flex-col">
                <button onClick={() => {Irlogin()}} className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Regresar</button>

                    <div className="p-5">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Información personal</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Registre su información, no olvide usar el código proporcionado.</p>
                    </div>
                
                <img className="rounded-full pt-8" src={'../assets/images/Rosa_color.jpg'} alt="" />
                </div>
                

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Cédula</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>

                    <div class="sm:col-span-full">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Cargo</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>

                    <div class="sm:col-span-full">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>

                    <div class="sm:col-span-1">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Rol</label>
                    <div class="mt-2">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option selected></option>
                        <option>Administrador</option>
                        <option>Usuario</option>
                        </select>
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Código de Registro</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    
                </div>
                    <div className="min-w-screen flex items-center  justify-center">
                    <button onClick={() => {Irlogin()}} className=" flex items-center  justify-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</button>

                    </div>

                </div>
        
        
    );
};

export default Registro;
