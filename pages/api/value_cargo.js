import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const cargo = await query(
            {
                query: "SELECT * FROM valuecargo_facturacion",
                values: [],
            }
        );
        res.status(200).json({cargo: cargo});
    }

}