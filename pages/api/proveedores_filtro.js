import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const proveedores = await query(
            {
                query: "SELECT * FROM proveedor WHERE id_proveedor='53' OR cedula_proveedor='gato'",
                values: [],
            }
        );
        res.status(200).json({proveedores: proveedores});
    }
    
}