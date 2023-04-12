import { query } from "@/lib/database";

export default async function handler(req, res) {

    if (req.method === "GET") {
        const personal = await query(
            {
                query: "SELECT *FROM personal",
                values: [],
            }
        );
        res.status(200).json({ personal: personal });
    }

    if (req.method === "POST") {
        const cedulaPersonal = req.body.cedula_personal;
        const nombrePersonal = req.body.nombre_personal;
        const cargoPersonal = req.body.cargo_personal;
        const direccionPersonal = req.body.direccion_personal;
        const telefonoPersonal = req.body.telefono_personal;

        const addPersonal = await query({
            query: "INSERT INTO personal (cedula_personal,nombre_personal,cargo_personal, direccion_personal,telefono_personal ) VALUES (?,?,?,?,?)",
            values: ([cedulaPersonal, nombrePersonal,cargoPersonal, direccionPersonal, telefonoPersonal]),
        });

        if (addPersonal.insertId) {
            message = "success";
        } else {
            message = "error";
        }
        let personal = {
            id_personal: addPersonal.insertId,
            cedula_personal: cedulaPersonal,
            nombre_personal: nombrePersonal,
            cargo_personal:cargoPersonal,
            direccion_personal: direccionPersonal,
            telefono_personal:telefonoPersonal,
        };
        res.status(200).json({ response: { message: message, personal: personal } });
    }

    if (req.method === "PUT") {
        const idPersonal = req.body.id_personal;
        const cedulaPersonal = rew.body.cedula_personal;
        const nombrePersonal = req.body.nombre_personal;
        const cargoPersonal = req.body.cargo_personal;
        const direccionPersonal = req.body.direccion_personal;
        const telefonoPersonal = req.body.telefono_personal;
        const updatePersonal = await query({
            query: "UPDATE personal SET cedula_personal = ? WHERE id_personal = ?",
            query: "UPDATE personal SET nombre_personal = ? WHERE id_personal = ?",
            query: "UPDATE personal SET cargo_personal = ? WHERE id_personal = ?",
            query: "UPDATE personal SET direccion_personal = ? WHERE id_personal = ?",
            query: "UPDATE personal SET telfono_personal = ? WHERE id_personal = ?",
            values: [idPersonal,cedulaPersonal,nombrePersonal, direccionPersonal,telefonoPersonal],
        });
        const result = updatePersonal.affectedRows;
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const persona = {
            id_personal: idPersonal,
            cedula_personal: cedulaPersonal,
            nombre_personal:nombrePersonal,
            cargo_personal:cargoPersonal,
            direccion_personal:direccionPersonal,
            telefono_personal:telefonoPersonal,
        };
        res.status(200).json({ response: { message: message, personal: persona } });
    }

    if (req.method === "DELETE") {
        const idPersonal = req.body.id_personal;
        const deletePersonal = await query({
            query: "DELETE FROM personal WHERE id_personal = ?",
            values: [idPersonal],
            
        }); 
        
        const result = deletePersonal.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error al eliminar";
        } 
        res
            .status(200)
            .json({ response: { message: message, id_personal: idPersonal } });
    }
}