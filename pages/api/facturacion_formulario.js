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
        const IdFacturacion = req.body.cedula_proveedor;
        const MarketingNameFacturacion = req.body.cedula_proveedor;
        const ClienteFacturacion = req.body.cedula_proveedor;
        const MarcacionFacturacion = req.body.cedula_proveedor;
        const PaisFacturacion = req.body.cedula_proveedor;
        const ConsignmentFacturacion = req.body.cedula_proveedor;
        const FarmCodeFacturacion = req.body.cedula_proveedor;
        const DateFacturacion = req.body.cedula_proveedor;
        const IncotermFacturacion = req.body.cedula_proveedor;
        const CountryCodeFacturacion = req.body.cedula_proveedor;
        const MawbFacturacion = req.body.cedula_proveedor;
        const HawbFacturacion = req.body.cedula_proveedor;
        const AirLineFacturacion = req.body.cedula_proveedor;
        const CurrierFreightFacturacion = req.body.cedula_proveedor;
        const RucFacturacion = req.body.cedula_proveedor;
        const NoEmbarqueFacturacion = req.body.cedula_proveedor;
        const PersonInvoiceFacturacion = req.body.cedula_proveedor;
        const InvoiceFacturacion = req.body.cedula_proveedor;
        const UsdaOnlyFacturacion = req.body.cedula_proveedor;

        const addProveedor = await query({
            query: "INSERT INTO proveedor (cedula_proveedor, nombre_proveedor, telefono_proveedor, observaciones_proveedor) VALUES (?,?,?,?)",              
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