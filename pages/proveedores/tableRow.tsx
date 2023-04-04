import { useState } from "react";

interface TableRowProps {
    id: number;
    cedula: string;
    nombre: string;
    telefono: string;
    direccion: string;
    onEdit: (id: number, cedula: string, nombre: string, telefono: string, direccion: string) => void;
    onDelete: (id: number) => void;
}

const TableRow = ({
    id,
    cedula,
    nombre,
    telefono,
    direccion,
    onEdit,
    onDelete,
}: TableRowProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCedula, setEditedCedula] = useState(cedula);
    const [editedNombre, setEditedNombre] = useState(nombre);
    const [editedTelefono, setEditedTelefono] = useState(telefono);
    const [editedDireccion, setEditedDireccion] = useState(direccion);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedCedula, editedNombre, editedTelefono, editedDireccion);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>
                {isEditing ? (
                    <input type="text" value={editedCedula} onChange={e => setEditedCedula(e.target.value)} />
                ) : (
                    cedula
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" value={editedNombre} onChange={e => setEditedNombre(e.target.value)} />
                ) : (
                    nombre
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" value={editedTelefono} onChange={e => setEditedTelefono(e.target.value)} />
                ) : (
                    telefono
                )}
            </td>
            <td>
                {isEditing ? (
                    <input type="text" value={editedDireccion} onChange={e => setEditedDireccion(e.target.value)} />
                ) : (
                    direccion
                )}
            </td>
            <td>
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default TableRow;
