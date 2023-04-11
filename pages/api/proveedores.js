import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const proveedores = await query(
            {
                query: "SELECT * FROM proveedor",
                values: [],
            }
        );
        res.status(200).json({proveedores: proveedores});
    }

    if(req.method === "POST"){
        const cedulaProveedor = req.body.cedula_proveedor;
        const nombreProveedor = req.body.nombre_proveedor;
        const telefonoProveedor = req.body.telefono_proveedor;
        const observacionesProveedor = req.body.observaciones_proveedor;

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
            id_proveedor: addProveedor.insertId,
            nombre_proveedor: nombreProveedor, 
        };
        res.status(200).json({response: {message: message, proveedor: proveedor}});
    }

    if(req.method === "PUT"){
        const idProveedor = req.body.id_proveedor;
        const cedulaProveedor = req.body.cedula_proveedor;
        const nombreProveedor = req.body.nombre_proveedor;
        const telefonoProveedor = req.body.telefono_proveedor;
        const observacionesProveedor = req.body.observaciones_proveedor;

        const updateProveedor = await query({
            query: "UPDATE proveedor SET (cedula_proveedor, nombre_proveedor, telefono_proveedor, observaciones_proveedor) = (?,?,?,?) WHERE id_proveedor = ? ",              
            values: ([
                    idProveedor,
                    cedulaProveedor,
                    nombreProveedor,
                    telefonoProveedor,
                    observacionesProveedor]),
            //query: "UPDATE proveedor SET cedula_proveedor = 'Canyon 123' WHERE id_proveedor = '25'",
            /*query: "INSERT INTO proveedor (cedula_proveedor, nombre_proveedor, telefono_proveedor, observaciones_proveedor) VALUES (?,?,?,?)",              
            values: ([cedulaProveedor,
                    nombreProveedor,
                    telefonoProveedor,
                    observacionesProveedor]),*/
        });
        
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

}