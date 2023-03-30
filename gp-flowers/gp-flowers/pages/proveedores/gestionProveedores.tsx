import { useState } from 'react';


interface Data {
  cedula: number;
  nombre: string;
  telefono: number;
  direccion: string;
}

const Proveedores: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    { cedula: 504002589, nombre: 'proveedor1', telefono: 999999999, direccion: 'direccion1' },
    { cedula: 504111589, nombre: 'proveedor2', telefono: 988888888, direccion: 'direccion2' },
    { cedula: 504000089, nombre: 'proveedor3', telefono: 977777777, direccion: 'direccion3' }
  ]);

  return (
    <div className='w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500'>
      <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
          REGRESAR
        </span>
      </button>
      <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
        <img src={'../assets/images/logo.png'} alt="" />
      </div>
      <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">AGREGAR NUEVO</button>

      <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>
        <table className=' sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="text-center px-6 py-3 text-xl">CEDULA</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">NOMBRE</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">TELEFONO</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">DIRECCION</th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={row.cedula}>
                <td className='border border-lime-900 text-center text-lg'>{row.cedula}</td>
                <td className='border border-lime-900 text-center text-lg '>{row.nombre}</td>
                <td className='border border-lime-900 text-center text-lg '>{row.telefono}</td>
                <td className='border border-lime-900 text-center text-lg '>{row.direccion}</td>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDITAR</a></td>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a> </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div >

  );
};

export default Proveedores;