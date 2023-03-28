
import { useState } from 'react';
import React from 'react';

interface Data {
    cantidad: number;
    proveedor: string;
    variedad: string;
    tMallas: number;
    tTallosMalla: number;
    tallosSueltos: number;
    tTallos: number;
    tCuarenta: number;
    tCincuenta: number;
    tSesenta: number;
    tSetenta: number;
    tOchenta: number;
    tNoventa: number;
    tBonches: number;
    tNacional: number;
    tallosSobrantes: number;
    tVariedad: number;
}

const Table = () => {
    const [data, setData] = useState<Data[]>([
        { cantidad: 1, proveedor: "SONIA QUINALUISA", variedad: 'BRIGHTON', tMallas: 6, tTallosMalla: 25, tallosSueltos: 0, tTallos: 150, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 1, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },
        { cantidad: 2, proveedor: "SONIA QUINALUISA", variedad: 'SHIMER', tMallas: 6, tTallosMalla: 25, tallosSueltos: 0, tTallos: 150, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 1, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },
        { cantidad: 3, proveedor: "MARINA QUINALUISA", variedad: 'MONDIAL', tMallas: 6, tTallosMalla: 25, tallosSueltos: 0, tTallos: 150, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 5, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },
        { cantidad: 4, proveedor: "JOSE L. PADILLA", variedad: 'P. BLANCA', tMallas: 6, tTallosMalla: 25, tallosSueltos: 15, tTallos: 165, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 5, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },
        { cantidad: 5, proveedor: "MARINA QUINALUISA", variedad: 'MONDIAL', tMallas: 6, tTallosMalla: 25, tallosSueltos: 0, tTallos: 150, tCuarenta: 0, tCincuenta: 0, tSesenta: 1, tSetenta: 0, tOchenta: 0, tNoventa: 0, tBonches: 5, tNacional: 121, tallosSobrantes: 4, tVariedad: 150 },
    ]);
    return (
        <div className=" w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500">
            <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
                    INICIO
                </span>
            </button>
            <div className='relative h-50 w-full ' >
                <div className='lg:flex lg:justify-end lg:object-righT sm:justify-center sm:flex'>
                    <img src={'../assets/images/logo.png'} alt="" />
                </div>
            </div>
            <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">AGREGAR NUEVO</button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium"># </th>
                            <th scope="col" className="px-6 py-3 text-base">PROVEEDOR</th>
                            <th scope="col" className="px-6 py-3 text-base"> VARIEDAD </th>
                            <th scope="col" className="px-6 py-3 text-base">T. MALLAS</th>
                            <th scope="col" className="px-6 py-3 text-base">T. TALLOSxMALLA</th>
                            <th scope="col" className="px-6 py-3 text-base">TALLOS SUELTOS</th>
                            <th scope="col" className="px-6 py-3 text-base">T. TALLOS</th>
                            <th scope="col" className="px-6 py-3">40</th>
                            <th scope="col" className="px-6 py-3">50</th>
                            <th scope="col" className="px-6 py-3">60</th>
                            <th scope="col" className="px-6 py-3">70</th>
                            <th scope="col" className="px-6 py-3">80</th>
                            <th scope="col" className="px-6 py-3">90</th>
                            <th scope="col" className="px-6 py-3 text-base">T. BONCHES</th>
                            <th scope="col" className="px-6 py-3 text-base">T. NACIONAL</th>
                            <th scope="col" className="px-6 py-3 text-base">TALLOS SOBRANTES</th>
                            <th scope="col" className="px-6 py-3 text-base">T. VARIEDAD</th>
                            <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
                            <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={row.cantidad}>
                                <td className="px-6 py-4">{row.cantidad}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.proveedor}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-lime-500">{row.variedad}</td>
                                <td className="px-6 py-4">{row.tMallas}</td>
                                <td className="px-6 py-4">{row.tTallosMalla}</td>
                                <td className="px-6 py-4">{row.tallosSueltos}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.tTallos}</td>
                                <td className="px-6 py-4">{row.tCuarenta}</td>
                                <td className="px-6 py-4">{row.tCincuenta}</td>
                                <td className="px-6 py-4">{row.tSesenta}</td>
                                <td className="px-6 py-4">{row.tSetenta}</td>
                                <td className="px-6 py-4">{row.tOchenta}</td>
                                <td className="px-6 py-4">{row.tNoventa}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.tBonches}</td>
                                <td className="px-6 py-4">{row.tNacional}</td>
                                <td className="px-6 py-4">{row.tallosSobrantes}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.tVariedad}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDITAR</a></td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a> </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Table;
