import { query } from "@/lib/database";

export default async function handler(req, res){

    let products;
    let message;

    if(req.method === "GET"){

        const products = await query(
            {
                query: "SELECT *FROM products",
                values: [],
            }
        );
        res.status(200).json({products: products});
    }

    if(req.method === "POST"){
        const productName = req.body.product_name;
        const addProducts = await query({
            query: "INSERT INTO products (product_name) VALUES (?)",
            values: [productName],
        });
        if(addProducts.insertId){
            message = "success";
        } else {
            message = "error";
        }
        let product = {
            product_id: addProducts.insertId,
            product_name: productName, 
        };
        res.status(200).json({response: {message: message, product: product}});
    }

}