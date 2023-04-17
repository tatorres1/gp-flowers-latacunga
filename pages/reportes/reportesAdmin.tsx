import { useState } from 'react';
import { useRouter } from 'next/router';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';


interface Data {
  tipo_reporte: string;
  fecha_reporte: string;
  enlace: Function;
}

const Reportes_admin: React.FC = () => {

  
  const [proveedores, setProveedores] = useState([]);

  async function getProveedores(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/proveedores`,
    postData);
    const response = await res.json();
    setProveedores(response.proveedores);
  }

  function crearReporteProveedores(){
                  // Crear un nuevo objeto jsPDF
          const doc = new jsPDF();

          // Definir las opciones para la tabla
          const options = {
            fontSize: 12,
            pageOrientation: 'landscape',
            
          };

          // Crear el array de objetos que representan las filas de la tabla
          const data = [
            {id: 1, name: 'John Doe', age: 35},
            {id: 2, name: 'Jane Smith', age: 28},
            {id: 3, name: 'Bob Johnson', age: 42},
          ];

          // Llamar a la función autoTable para crear la tabla
          autoTable(doc, {head:[['id', 'name', 'age']],},);
          autoTable(doc, {body: data},);

          // Guardar el documento con la tabla usando la función save
          doc.save('tabla.pdf');

  }


  const [data, setData] = useState<Data[]>([
    { tipo_reporte: 'REPORTE VENTAS', fecha_reporte: '25-10-2023' , enlace: crearReporteProveedores},
    { tipo_reporte: 'REPORTE PERSONAL', fecha_reporte: '25-10-2023', enlace: crearReporteProveedores},
    { tipo_reporte: 'REPORTE PROVEEDORES', fecha_reporte: '25-10-2023', enlace: crearReporteProveedores},
    { tipo_reporte: 'REPORTE ALMACEN', fecha_reporte: '25-10-2023', enlace: crearReporteProveedores},
  ]);
  const router = useRouter();

  function Regresar() {
    router.push('../indexAdmin');
  }

  return (
    <div className='w-full h-screen  bg-gradient-to-r from-lime-300 to-cyan-300'>
<button type="button" className="ml-8 py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={Regresar}>
        REGRESAR
      </button>
      <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
        <img src={'../assets/images/logo.png'} alt="" />
      </div><br /><br />
      <button onClick={getProveedores} type="button" className="ml-8 py-2.5 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">AGREGAR NUEVO</button>
      
      <div className='w-full p-4 relative overflow-x-auto sm:rounded-lg'>
        <table className='sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="px-6 py-3"><span className="sr-only">VER</span> </th>
              <th scope="col" className="text-center px-6 py-3 text-xl">TIPO DE REPORTE</th>
              <th scope="col" className="text-center px-6 py-3 text-xl">FECHA GENERADA</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className='"bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600' key={row.tipo_reporte}>
                <td className="border border-lime-900 px-6 py-4 text-center">
                  <a onClick={row.enlace} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">VER</a></td>
                <td className='border border-lime-900 text-center text-lg text-green-500'>{row.tipo_reporte}</td>
                <td className='border border-lime-900 text-center text-lg'>{row.fecha_reporte}</td>
              </tr>
            ))}
          </tbody>
            </table>
        

      </div>

    </div>

  );

};

export default Reportes_admin;