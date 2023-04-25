import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const facturacion = await query(
            {
                query: "SELECT * FROM datos_facturacion",
                values: [],
            }
        );
        res.status(200).json({facturacion: facturacion});
    }

    

    if(req.method === "POST"){
        const MarketingNameFacturacion = req.body.marketingName_calFacturacion;
        const ClienteFacturacion = req.body.cliente_calFacturacion;
        const MarcacionFacturacion = req.body.marcacion_calFacturacion;
        const PaisFacturacion = req.body.pais_calFacturacion;
        const ConsignmentFacturacion = req.body.consignment_calFacturacion;
        const FarmCodeFacturacion = req.body.farmCode_calFacturacion;
        const DateFacturacion = req.body.date_calFacturacion;
        const IncotermFacturacion = req.body.incoterm_calFacturacion;
        const CountryCodeFacturacion = req.body.countryCode_calFacturacion;
        const MawbFacturacion = req.body.mawb_calFacturacion;
        const HawbFacturacion = req.body.hawb_calFacturacion;
        const AirLineFacturacion = req.body.airLine_calFacturacion;
        const CurrierFreightFacturacion = req.body.currierFreight_calFacturacion;
        const RucFacturacion = req.body.ruc_calFacturacion;
        const NoEmbarqueFacturacion = req.body.noEmbarque_calFacturacion;
        const PersonInvoiceFacturacion = req.body.personInvoice_calFacturacion;
        const InvoiceFacturacion = req.body.invoice_calFacturacion;
        const UsdaOnlyFacturacion = req.body.usdaOnly_calFacturacion;

                {/*seccion cuadricula*/}
                <div className='flex flex-column m-14 w-1/2'>
                <table className=' sm:rounded-lg text-sm text-left text-black bg-white '>
                  <thead className='text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope="col" className="text-center px-6 py-3 text-xl">PICES TYPE</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL PICES</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">EQ.FULL BOXES</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">PRODUCT ROSAS</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">LONGITUD</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl"># bunches</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">HTS</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">NANDINA</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL STEMS</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">STEMS/BUNCH</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">UNIT PRICE</th>
                      <th scope="col" className="text-center px-6 py-3 text-xl">TOTAL VALUE USD.</th>
                    </tr>
                  </thead>
                  {renderHtmlMultipleTimes()}
                  {renderHtmlMultipleTimes()}
                </table>
              </div>
      
              {/*seccion pie*/}
              <div className='flex flex-col-2'>
                      <div className='m-12 w-1/2'>
                          <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">Name and Title of person Preparing Invoice</label>
                          <input type="text" id="last_name" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                      </div>
                      <div className='m-12'>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-3xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                GUARDAR
                            </span>
                          </button>                
                      </div>
              </div>
              <div className='flex flex-col-2'>
                      <div className='ml-12 w-1/2'>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                          <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">CUSTOM USE ONLY</label>
                          <label for="last_name" class="block text-sm font-medium text-gray-900 dark:text-white">The flowers and plants on this invoice where wholly grown in ECUADOR</label>
                      </div>
                      <div className='ml-12 w-1/2'>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                          <label for="last_name" class="bg-rose-300 border-black border-2 pl-12 block text-sm font-medium text-gray-900 dark:text-white">USDA, APHIS, P.P.Q. Use Only</label>
                      </div>
              </div>


        const addProveedor = await query({
            query: "INSERT INTO proveedor (marketingName_calFacturacion, cliente_calFacturacion, marcacion_calFacturacion, pais_calFacturacion) VALUES (?,?,?,?)",              
            values: ([cedulaProveedor,
                    nombreProveedor,
                    telefonoProveedor,
                    observacionesProveedor]),
        });

        if(addProveedor.insertId){
            message = "success";
        } else {
            message = "error";
        }
        let proveedor = {
            //id_proveedor: addProveedor.insertId,
            id_proveedor: addProveedor.insertId,
            cedula_proveedor: cedulaProveedor,
            nombre_proveedor: nombreProveedor,
            telefono_proveedor: telefonoProveedor,
            observaciones_proveedor: observacionesProveedor,  
        };
        res.status(200).json({response: {message: message, proveedor: addProveedor}});
    }

    if(req.method === "PUT"){

        const idProveedor = req.body.id_proveedor;
        const cedulaProveedor = req.body.cedula_proveedor;
        const nombreProveedor = req.body.nombre_proveedor;
        const telefonoProveedor = req.body.telefono_proveedor;
        const observacionesProveedor = req.body.observaciones_proveedor;

        const updateProveedor = await query({

            query: "UPDATE proveedor SET cedula_proveedor=?, nombre_proveedor=?, telefono_proveedor=?, observaciones_proveedor=? WHERE id_proveedor=?",
            values: ([cedulaProveedor,nombreProveedor,telefonoProveedor, observacionesProveedor,idProveedor]),
                         
        });

        //indicar varias constantes para la actualizacion de variables mediante query,
        //primero revisar el tutorial para ver si realmente funciona
        
        const result = updateProveedor.affectedRows;
        if(result){
            message = "success";
        } else {
            message = "error";
        }
        let proveedor = {
            id_proveedor: idProveedor,
            cedula_proveedor: cedulaProveedor,
            nombre_proveedor: nombreProveedor,
            telefono_proveedor: telefonoProveedor,
            observaciones_proveedor: observacionesProveedor,  
        };
        res.status(200).json({response: {message: message, proveedor: proveedor}});
    }
    

    if (req.method === "DELETE") {
        const idProveedor = req.body.id_proveedor;
        const deleteProveedor = await query({
          query: "DELETE FROM proveedor WHERE id_proveedor = ?",
          values: [idProveedor],
        });
        const result = deleteProveedor.affectedRows;
        if (result) {
          message = "success";
        } else {
          message = "error";
        }
        res.status(200).json({ response: { message: message, proveedor: proveedor } });
      }
}