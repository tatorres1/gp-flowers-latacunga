import { query } from "@/lib/database";

export default async function handler(req, res) {


    const { id_gestionFlor, PROVEEDOR, VARIEDAD } = req.query;

    if (req.method === "GET") {

        const flor = await query(
            {
                query: "SELECT * FROM flor WHERE id_gestionFlor=? OR PROVEEDOR=? OR VARIEDAD=? OR =? ",
                values: ([id_gestionFlor, PROVEEDOR, VARIEDAD]),
            }
        );
        res.status(200).json({ flor: flor });
    }

}