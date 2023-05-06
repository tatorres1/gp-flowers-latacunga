import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const totalPices = await query(
            {
                query: "SELECT SUM(totalPices_cont_facturacion) FROM cont_facturacion",
                values: [],
            }
        );
        res.status(200).json({totalPices: totalPices});
    }

}

    
    