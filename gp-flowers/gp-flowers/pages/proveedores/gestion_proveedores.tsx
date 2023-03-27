import { useState } from 'react';


//import style from './gestion_almacen.module.css'; // CSS Module enabled

interface Data {
    id: number;
    nombre: string;
    telefono: number;
    direccion: string;
  }
  
  const Proveedores: React.FC = () => {
    const [data, setData] = useState<Data[]>([
      { id: 1, nombre: 'proveedor1', telefono: 999999999, direccion: 'direccion1' },
      { id: 2, nombre: 'proveedor2', telefono: 988888888, direccion: 'direccion2' },
      { id: 3, nombre: 'proveedor3', telefono: 977777777 , direccion: 'direccion3' }
    ]);
  
    return (
      <div>

        <div>
          <button>insertar nuevo provedor</button>
        </div>

      <table>
        <thead>
          <tr>
            <th className='probar'>IDENTIFICADOR</th>
            <th>NOMBRE</th>
            <th>TELEFONO</th>
            <th>DIRECCION</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.nombre}</td>
              <td>{row.telefono}</td>
              <td>{row.direccion}</td>
              <td><button>EDITAR</button></td>
              <td><button>ELIMINAR</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        
      </div>
      
    );
  };

export default Proveedores;