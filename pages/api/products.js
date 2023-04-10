import { query } from "@/lib/database";

export default async function handler(req, res){

    if(req.method === "GET"){

        const products = await query(
            {
                query: "SELECT *FROM products",
                values: [],
            }
        );
        res.status(200).json({products: products});
    }

}