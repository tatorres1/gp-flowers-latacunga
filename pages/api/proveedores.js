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
            telefono_proveedor: telefonoProveedor,
        };
        res.status(200).json({response: {message: message, proveedor: proveedor}});
    }

}