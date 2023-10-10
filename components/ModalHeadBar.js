import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BarraFlotante = () => {

  const [valorRolGlobal2, setValorRolGlobal2] = useState('');
  const [valorGlobalUsuario, setValorGlobalUsuario] = useState('');


  useEffect(() => {
    const valorAlmacenado = localStorage.getItem('valorGlobal');
    const valorUsuario = localStorage.getItem('valorGlobalUsuario');
    if (valorAlmacenado) {
      setValorRolGlobal2(valorAlmacenado);
      setValorGlobalUsuario(valorUsuario);
    }
  }, []);

  const [barraVisible, setBarraVisible] = useState(false);

  const toggleBarra = () => {
    setBarraVisible(!barraVisible);
  };

  var direccion_salida = "../login";
  var direccion_gestionFLores = "../gestionFlor";
  var direccion_almacen = "../almacen/gestionAlmacen";
  var direccion_personal = "../personal/gestionPersonal";
  var direccion_proveedores = "../proveedores/gestionProveedores";
  var direccion_reportes = "../reportes/reportesAdmin";
  var direccion_facturacion = "../facturacion/indexFacturacion";
  var direccion_comprador = "../comprador/gestionComprador";
  var direccion_inicio = "../indexAdmin";
  var direccion_valueCargo = "../cargo/gestionValueCargo";

  const router = useRouter();

  function SalirSesion() {
    router.push(direccion_salida);
  }
  function IrGestionFlores() {
    router.push(direccion_gestionFLores);
  }
  function IrAlmacen() {
    router.push(direccion_almacen);
  }
  function IrPersonal() {
    router.push(direccion_personal);
  }
  function IrProveedores() {
    router.push(direccion_proveedores);
  }
  function IrReportes() {
    router.push(direccion_reportes);
  }
  function IrFacturacion() {
    router.push(direccion_facturacion);
  }
  function IrComprador() {
    router.push(direccion_comprador);
  }
  function IrPaginaPrincipal() {
    router.push(direccion_inicio);
  }

  const { tipoUsuario } = router.query;
  const valorTipoUsuario = decodeURIComponent(tipoUsuario);

  return (
    <div className="">
      <button
        onClick={toggleBarra}
        className="bg-blue-500 text-white p-2 rounded-md absolute top-4 right-4 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {barraVisible ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <nav
        className={`bg-blue-500 border-2 border-black ${barraVisible ? 'block' : 'hidden'
          } md:block`}
      >
        <div className="flex flex-col md:flex-row">
          <div className='bg-blue-500 flex flex-col py-2 lg:w-1/4'>
            <a href="#" class="bg-white rounded-br-lg border-1 border-black justify-center flex items-center">
              <img className='bg-white w-1/3 ' src={'../assets/images/logo.png'} alt="" />
            </a>
            {(valorTipoUsuario == "usuario") && <a>{valorTipoUsuario}</a>}

            <div className='px-5' style={{ textAlign: 'center', backgroundColor: '#777' }}>
              <a style={{ color: 'white' }}>{valorGlobalUsuario}</a>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: 'black' }}>
              <a style={{ color: 'white' }}>{valorRolGlobal2}</a>
            </div>
          </div>



          <div className="flex items-center mx-auto flex-col md:flex-row py-5">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <li>
                <button
                  onClick={IrPaginaPrincipal}
                  type="button"
                  class="flex flex-row text-black bg-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Página Principal
                </button>
              </li>
              {(valorRolGlobal2 == "Administrador") &&
                <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex flex-row text-white hover:underline group-hover:text-blue-300"
                    >
                      Facturación{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </a>

                    <ul className="absolute hidden space-y-2 bg-white text-gray-800 p-2 rounded-lg shadow-lg group-hover:block">
                      <li>
                        <a
                          href="../facturacion/gestionFacturacion"
                          className="block hover:bg-blue-100 px-2 py-1 rounded"
                        >
                          Agregar Factura
                        </a>
                      </li>
                      <li>
                        <a
                          href="../facturacion/modificacionFactura"
                          className="block hover:bg-blue-100 px-2 py-1 rounded"
                        >
                          Modificar Factura
                        </a>
                      </li>
                      <li>
                        <a
                          href="../facturacion/eliminacionFactura"
                          className="block hover:bg-blue-100 px-2 py-1 rounded"
                        >
                          Eliminar Factura
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href={direccion_almacen.toString()} className="text-white hover:underline">
                      Almacén
                    </a>
                  </li>
                  <li>
                    <a href={direccion_personal.toString()} className="text-white hover:underline">
                      Personal
                    </a>
                  </li>
                  <li>
                    <a href={direccion_proveedores.toString()} className="text-white hover:underline">
                      Proveedores
                    </a>
                  </li>
                  <li>
                    <a href={direccion_comprador.toString()} className="text-white hover:underline">
                      Compradores
                    </a>
                  </li>
                  <li>
                    <a href={direccion_valueCargo.toString()} className="text-white hover:underline">
                      Cargo
                    </a>
                  </li>
                </div>
              }
              <li>
                <a href={direccion_gestionFLores.toString()} className="text-white hover:underline">
                  Gestión Flor
                </a>
              </li>
              <li className='px-12'>
                <button
                  onClick={SalirSesion}
                  type="button"
                  class="flex flex-row text-white bg-red-500 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BarraFlotante;
