import { useState } from 'react';


//import style from './gestion_almacen.module.css'; // CSS Module enabled

interface Data {
    cantidad: number;
    materiales: string;
    tipo: string;
    
  }
  
  const Almacen: React.FC = () => {
    const [data, setData] = useState<Data[]>([
      { cantidad: 1, materiales: 'caja grande', tipo: '30' },
      { cantidad: 2, materiales: 'carton para bonche', tipo: '100' },
      { cantidad: 3, materiales: 'cinta plástica', tipo: '5' }
    ]);
  
    return (

      <div>

        <div>
          <button>insertar nuevo</button>
        </div>

        <table>
          <thead>
            <tr>
              <th className='probar'>CANTIDAD</th>
              <th>MATERIALES</th>
              <th>TIPO</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.cantidad}>
                <td>{row.cantidad}</td>
                <td>{row.materiales}</td>
                <td>{row.tipo}</td>
                <td><button>EDITAR</button></td>
                <td><button>ELIMINAR</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    );
  };

export default Almacen;