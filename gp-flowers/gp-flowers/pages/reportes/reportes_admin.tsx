import { useState } from 'react';


//import style from './gestion_almacen.module.css'; // CSS Module enabled

interface Data {
    tipo_reporte: string;
    fecha_reporte: string;
  }
  
  const Reportes_admin: React.FC = () => {
    const [data, setData] = useState<Data[]>([
      { tipo_reporte: 'REPORTE VENTAS', fecha_reporte: '25-10-2023' },
      { tipo_reporte: 'REPORTE PERSONAL', fecha_reporte: '25-10-2023' },
      { tipo_reporte: 'REPORTE PROVEEDORES', fecha_reporte: '25-10-2023' },
      { tipo_reporte: 'REPORTE ALMACEN', fecha_reporte: '25-10-2023' },

    ]);
  
    return (
      <div >

        <div className='relative h-50 w-full ... bg-[#50d71e] ... bg-opacity-25' >
          <div className='lg:flex lg:justify-end lg:object-right ... sm:justify-center sm:flex'>
            <img src={'../assets/images/logo.png'}  alt="" />
          </div>
        </div>

        <div className='w-full p-8'>
          <table className=' table-auto border-x rounded-2xl border-8 rounded border-b w-full ... 
          rounded-l-lg border-separate border-green-600'>
            <thead className= 'bg-sky-700 text-white'>
              <tr>
                <th></th>
                <th>TIPO DE REPORTE</th>
                <th>FECHA GENERADA</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.tipo_reporte}>
                    <td className='shadow-lg shadow-black ... m-8 ...  sm:text-sm md:text-2xl
                      ... text-center ... rounded-full ... bg-[#ffb703] bg-opacity-45 ... 
                      hover:bg-sky-700 hover:text-white ... py-2 ... px-1 ...`
                      flex flex-col space-y-2 ... border border-green-600'>
                      <button>VER</button>
                    </td>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl'>{row.tipo_reporte}</td>
                    <td className='border border-green-600 text-center ... sm:text-sm md:text-2xl '>{row.fecha_reporte}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        
      </div>
      
    );

  };

export default Reportes_admin;