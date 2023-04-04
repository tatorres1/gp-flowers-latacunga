import { useState } from 'react';
import data from '../../datos.json';
import tableRow from './tableRow';

interface TableRow {
  id: number;
  cedula: string;
  nombre: string;
  telefono: string;
  direccion: string;
}
const tableData: TableRow[] = data;

const TablePage = () => {
  const [tableRows, setTableRows] = useState<TableRow[]>(data);

  const handleAddRow = () => {
    const newId = Math.max(...tableRows.map(row => row.id)) + 1;
    const newRow: TableRow = { id: newId, cedula: '', nombre: '', telefono: '', direccion: '' };
    setTableRows([...tableRows, newRow]);

    // Guardar en el archivo JSON correspondiente
    const newData = JSON.stringify([...tableRows, newRow]);
    localStorage.setItem('nombre_del_archivo', newData);
  };

  const handleEditRow = (id: number, cedula: string, nombre: string, telefono: string, direccion: string) => {
    const newTableRows = tableRows.map(row =>
      row.id === id ? { ...row, cedula, nombre, telefono, direccion } : row
    );
    setTableRows(newTableRows);

    // Guardar en el archivo JSON correspondiente
    const newData = JSON.stringify(newTableRows);
    localStorage.setItem('nombre_del_archivo', newData);
  };

  const handleDeleteRow = (id: number) => {
    const newTableRows = tableRows.filter(row => row.id !== id);
    setTableRows(newTableRows);

    // Guardar en el archivo JSON correspondiente
    const newData = JSON.stringify(newTableRows);
    localStorage.setItem('nombre_del_archivo', newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <TableRow
              key={row.id}
              id={row.id}
              cedula={row.cedula}
              nombre={row.nombre}
              telefono={row.telefono}
              direccion={row.direccion}
              onEdit={handleEditRow}
              onDelete={handleDeleteRow}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

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

export default TablePage;

