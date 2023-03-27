import { useState } from 'react';
import * as React from 'react';
//import '../../public/styles/gestion_almacen.module.css'


//import style from './gestion_almacen.module.css'; // CSS Module enabled

interface Data {
    tipo_reporte: string;
    fecha_reporte: string;
  }
  
  const Reportes: React.FC = () => {
    const [data, setData] = useState<Data[]>([
      { tipo_reporte: 'REPORTE VENTAS', fecha_reporte: '25-10-2023' },
      { tipo_reporte: 'REPORTE PROVEEDORES', fecha_reporte: '25-10-2023' },
      { tipo_reporte: 'REPORTE ALMACEN', fecha_reporte: '25-12-2023' },

    ]);
  
    return (
      <div >
        <div>
          <button>insertar nuevo</button>
          <img src={'../assets/images/gp_flowers.jpg'}  alt="" />
          

        </div>

        <table>
          <thead>
            <tr>
              <th></th>
              <th className='probar'>TIPO DE REPORTE</th>
              <th>FECHA GENERADA</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.tipo_reporte}>
                  <td>
                    <button>VER</button>
                  </td>
                  <td>{row.tipo_reporte}</td>
                  <td>{row.fecha_reporte}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    );
  };

export default Reportes;
