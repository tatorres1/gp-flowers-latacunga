import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const totalEqFull = await query(
            {
                query: "SELECT SUM(eqFullBoxes_cont_facturacion) FROM cont_facturacion",
                values: [],
            }
        );
        res.status(200).json({totalEqFull: totalEqFull});
    }

}

    
    