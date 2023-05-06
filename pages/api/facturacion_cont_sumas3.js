import { query } from "@/lib/database";

export default async function handler(req, res){


    let message;

    if(req.method === "GET"){

        const totalTotalValue = await query(
            {
                query: "SELECT SUM(totalValue_cont_facturacion) FROM cont_facturacion",
                values: [],
            }
        );
        res.status(200).json({totalTotalValue: totalTotalValue});
    }

}

    
    