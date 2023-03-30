import { useState } from 'react';

interface Data {
  cantidad: number;
  materiales: string;
  tipo: string;

}

const Almacen = () => {
  const [data, setData] = useState<Data[]>([
    { cantidad: 20, materiales: 'CAJA TOP', tipo: 'CONSUMIBLE' },
    { cantidad: 20, materiales: 'CAJA BOTTOM', tipo: 'CONSUMIBLE' },
    { cantidad: 150, materiales: 'CARTON BONCHE', tipo: 'CONSUMIBLE' },
    { cantidad: 2, materiales: 'COMPRESOR 10lt', tipo: 'HERRAMIENTA' }
  ]);

  return (
    <div className='w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500' >
      <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
        <img src={'../assets/images/logo.png'} alt="" />
      </div>
      <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">AGREGAR NUEVO</button>

      <div className='w-full p-8 relative overflow-x-auto sm:rounded-lg'>
        <table className='sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="text-center px-6 py-3 text-xl">CANTIDAD</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">MATERIALES</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">TIPO</th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">EDITAR</span> </th>
              <th scope="col" className="px-6 py-3"> <span className="sr-only">ELIMINAR</span> </th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={row.cantidad}>
                <td className='border border-lime-900 text-center text-gray-900 whitespace-nowrap dark:text-white'>{row.cantidad}</td>
                <td className='border border-lime-900 text-center text-lg '>{row.materiales}</td>
                <td className='border border-lime-900 text-center text-lg '>{row.tipo}</td>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDITAR</a></td>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a> </td>




              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>

  );
};

export default Almacen;