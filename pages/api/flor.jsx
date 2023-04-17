import { query } from "@/lib/database";

export default async function handler(req, res) {
    //metodos para la gestion de la flor
    if (req.method === "GET") {
        const flor = await query(
            {
                query: "SELECT *FROM flor",
                values: [],
            }
        );
        res.status(200).json({ flor: flor });
    }

    if (req.method === "POST") {
        const proveedorFlor = req.body.PROVEEDOR;
        const variedadFlor = req.body.VARIEDAD;
        const tmallasFlor = req.body.tMallas_gestionFlor;
        const tTallosxmallaFlor = req.body.tTallosxMalla_gestionflor;
        const tallosSueltosFlor = req.body.tallosSueltos_gestionFlor;
        const tTallosFlor = req.body.tTallos_gestionFlor ;
        const tallos40Flor = req.body.tallos40_gestionFlor ;
        const tallos50Flor = req.body.tallos50_gestionFlor;
        const tallos60Flor = req.body. ;
        const tallos70Flor = req.body. ;
        const tallos80Flor = req.body. ;

        const addPersonal = await query({
            query: "INSERT INTO personal (cedula_personal,nombre_personal,cargo_personal, direccion_personal,telefono_personal ) VALUES (?,?,?,?,?)",
            values: ([cedulaPersonal, nombrePersonal, cargoPersonal, direccionPersonal, telefonoPersonal]),
        });
        let message = "";
        if (addPersonal.insertId) {
            message = "success";
        } else {
            message = "error";
        }
        let personal = {
            id_personal: addPersonal.insertId,
            cedula_personal: cedulaPersonal,
            nombre_personal: nombrePersonal,
            cargo_personal: cargoPersonal,
            direccion_personal: direccionPersonal,
            telefono_personal: telefonoPersonal,
        };
        res.status(200).json({ response: { message: message, personal: personal } });
    }

    if (req.method === "PUT") {
        const idPersonal = req.body.id_personal;
        const cedulaPersonal = req.body.cedula_personal;
        const nombrePersonal = req.body.nombre_personal;
        const cargoPersonal = req.body.cargo_personal;
        const direccionPersonal = req.body.direccion_personal;
        const telefonoPersonal = req.body.telefono_personal;
        const updatePersonal = await query({
            query: "UPDATE personal SET cedula_personal = ?, nombre_personal = ?, cargo_personal = ?, direccion_personal = ?, telefono_personal = ? WHERE id_personal = ? ",
            values: [cedulaPersonal, nombrePersonal, cargoPersonal, direccionPersonal, telefonoPersonal, idPersonal],
        });
        let message = '';
        const result = updatePersonal.affectedRows;
        if (result) {
            message = "success";
        } else {
            message = "error al editar";
        }
        const personal = {
            id_personal: idPersonal,
            cedula_personal: cedulaPersonal,
            nombre_personal: nombrePersonal,
            cargo_personal: cargoPersonal,
            direccion_personal: direccionPersonal,
            telefono_personal: telefonoPersonal,
        };
        res
            .status(200)
            .json({ response: { message: message, personal: personal } });
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

    //metodos para la variedad
    if (req.method === "GET") {
        const variedad = await query(
            {
                query: "SELECT *FROM variedad",
                values: [],
            }
        );
        res.status(200).json({ variedad: variedad });
    }
}