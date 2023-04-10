import { useEffect, useState, useRef, Fragment } from "react";
import Modal from "../../components/Modal";

const Proveedores: React.FC = () => {


  const productNameRef = useRef();

  const [products, setProducts] = useState([]);

  const [created, setCreated] = useState(false);


  async function getProducts(){
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`,
    postData);
    const response = await res.json();
    setProducts(response.products);
  }
let variable = "probando variable";
  async function addProduct(){
    //const productName = productNameRef.current.value.trim();
    const productName = productNameRef.current;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: variable,
        //product_name: "productName",

      }),
    };
    //if(productName.length <3) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/products`,
      postData
    );
    const response = await res.json();
    if(response.response.message != "success") return;
    setCreated(true);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
    <div className='w-full h-screen  bg-gradient-to-r from-lime-500 to-cyan-500'>
      <button className="mt-6 mx-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-500 rounded-md group-hover:bg-opacity-0 font-black">
          REGRESAR
        </span>
      </button>
      <div className='lg:flex lg:justify-end lg:object-right sm:justify-center sm:flex'>
        <img src={'../assets/images/logo.png'} alt="" />
      </div>
      <button type="button" className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={addProduct}>AGREGAR NUEVO</button>

      {created ? <div>Success!</div>:
      null}


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
            
            {products.map((products, index) => (
              <tr className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600" key={products.product_id}>
                <td className='border border-lime-900 text-center text-lg'>{products.product_id}</td>
                <td className='border border-lime-900 text-center text-lg '>{products.product_name}</td>
                <td className='border border-lime-900 text-center text-lg '>{products.product_name}</td>
                <td className='border border-lime-900 text-center text-lg '>{products.product_name}</td>

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

    <Modal/>
    </Fragment>
  );
};

export default Proveedores;
