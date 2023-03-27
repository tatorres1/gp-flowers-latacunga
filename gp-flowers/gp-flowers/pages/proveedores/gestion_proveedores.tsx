import { useState } from 'react';


//import style from './gestion_almacen.module.css'; // CSS Module enabled

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
      { cedula: 504000089, nombre: 'proveedor3', telefono: 977777777 , direccion: 'direccion3' }
    ]);
  
    return (
      <div >

        <div className='relative h-50 w-full ... bg-[#50d71e] ... bg-opacity-25' >
          <div className='lg:flex lg:justify-end lg:object-right ... sm:justify-center sm:flex'>
            <img src={'../assets/images/logo.png'}  alt="" />
          </div>
        </div>

        <div className='shadow-lg shadow-black ... m-8 ...  sm:text-sm md:text-2xl ... text-center 
        ... relative w-fit ... rounded-full 
        ... bg-[#ffb703] bg-opacity-45 ... hover:bg-sky-700 hover:text-white ... py-1 ... px-1'>
          <button className='p-4' >insertar nuevo</button>
        </div>

        <div className='w-full p-8 '>
          <table className=' table-auto border-x rounded-2xl border-8 rounded border-b w-full ... 
          rounded-l-lg border-separate border-green-600'>
            <thead className= 'bg-sky-700 text-white'>
              <tr>
                
                <th>CEDULA</th>
                <th>NOMBRE</th>
                <th>TELEFONO</th>
                <th>DIRECCION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.cedula}>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl'>{row.cedula}</td>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl'>{row.nombre}</td>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl '>{row.telefono}</td>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl '>{row.direccion}</td>
                    <td className='shadow-lg shadow-black ... m-8 ...  sm:text-sm md:text-2xl
                      ... text-center ... rounded-full ... bg-[#ffb703] bg-opacity-45 ... 
                      hover:bg-sky-700 hover:text-white ... py-2 ... px-1 ...`
                      flex flex-col space-y-2 ... border border-green-600'>
                      <button>EDITAR</button>
                    </td>
                    <td className='shadow-lg shadow-black ... m-8 ...  sm:text-sm md:text-2xl
                      ... text-center ... rounded-full ... bg-[#ffb703] bg-opacity-45 ... 
                      hover:bg-red-700 hover:text-white ... py-2 ... px-1 ...`
                      flex flex-col space-y-2 ... border border-green-600'>
                      <button>ELIMINAR</button>
                    </td>
                    

                </tr>
              ))}
            </tbody>
          </table>

        </div>
        
      </div>
      
    );
  };

export default Proveedores;