import DataTable from "react-data-table-component";
import { useState } from "react";
import type { DataInfo } from "../../types";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ReactTable() {
  /** ===========================
   *    Datos Iniciales
   *  =========================== */
  const initialData: DataInfo[] = [
    { image: "Imagen 1", name: "Ruiz", creation_date: "13 de octubre de 2023" },
    { image: "Imagen 2", name: "Mendoza", creation_date: "10 de agosto de 2025" },
    { image: "Imagen 3", name: "Alberto", creation_date: "02 de Noviembre de 2020" },
    { image: "Imagen 4", name: "Carlos", creation_date: "10 de julio de 2022" },
    { image: "Imagen 5", name: "Josue", creation_date: "11 de abril de 2024" },
    { image: "Imagen 6", name: "Victor", creation_date: "10 de Mayo de 2020" },
    { image: "Imagen 7", name: "Ruiz", creation_date: "05 de septiembre de 2025" },
  ];

  /** ===========================
   *    Estados
   *  =========================== */
  const [filterValue, setFilterValue] = useState<keyof DataInfo>("name");
  const [registros, setRegistros] = useState(initialData);

  /** ===========================
   *    Funciones
   *  =========================== */
  const handleEdit = (row: DataInfo) => console.log("Editando: ", row);

  const handleDelete = (row: DataInfo) => {
    setRegistros(prev => prev.filter(r => r.name.toLowerCase() !== row.name.toLowerCase()));
  };

  const handleAdmin = (row: DataInfo) => console.log("Administrando: ", row);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, key: keyof DataInfo) => {
    const value = e.target.value.toLowerCase();
    setRegistros(initialData.filter(record => String(record[key]).toLowerCase().includes(value)));
  };

  /** ===========================
   *    Columnas
   *  =========================== */
  const columns = [
    {
      name: "Imagen",
      selector: (row: DataInfo) => row.image,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row: DataInfo) => row.name,
      sortable: true,
    },
    {
      name: "Creación",
      selector: (row: DataInfo) => row.creation_date,
      sortable: true,
    },
    {
      name: "",
      right: true,
      cell: (row: DataInfo) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleAdmin(row)}
            className="bg-green-500 text-white px-3 py-3 rounded hover:bg-green-600"
            title="Administrar"
          >
            <i className="bi bi-kanban"></i>
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-500 text-white px-3 py-3 rounded hover:bg-blue-600"
            title="Editar"
          >
            <i className="bi bi-pencil-fill"></i>
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-500 text-white px-3 py-3 rounded hover:bg-red-600"
            title="Eliminar"
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  /** ===========================
   *    Estilos Personalizados
   *  =========================== */
  const customStyles = {
    table: {
      style: {
        borderSpacing: 0,
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #ddd",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#b8e05a",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    headCells: { style: { borderBottom: "none" } },
    rows: {
      style: {
        minHeight: "50px",
        "&:nth-child(even)": { backgroundColor: "#f3f4f6" },
      },
    },
    cells: { style: { borderBottom: "none" } },
    pagination: {
      style: {
        borderTop: "1px solid #ddd",
        padding: "10px",
        borderRadius: "0 0 16px 16px",
        display: "flex",
        justifyContent: "center",
      },
    },
  };

  /** ===========================
   *    Render
   *  =========================== */
  return (
    <div className="w-[90%] m-10">
      {/* Filtros */}
      <div className="flex gap-x-4 mb-5">
        <p>Buscar por:</p>
        <select
          onChange={e => setFilterValue(e.target.value as keyof DataInfo)}
          className="block w-30 rounded-lg bg-gray-200 border-gray-300 shadow-sm p-1"
        >
          <option value="name">Nombre</option>
          <option value="image">Imagen</option>
          <option value="creation_date">Fecha Creación</option>
        </select>
        <input
          type="text"
          className="bg-gray-200 rounded-lg w-[30%] pl-3 pt-1 pb-1"
          onChange={e => handleSearch(e, filterValue)}
        />
        <button
          className="ml-auto mr-5 bg-[#b8e05a] text-white px-2 py-2 rounded-lg hover:bg-[#a4cc50] transition items-end"
          title="Agregar Proyecto"
        >
          <i className="bi bi-plus font-bold text-xl"></i>
        </button>
      </div>

      {/* Tabla */}
      <DataTable
        columns={columns}
        data={registros}
        pagination
        fixedHeader
        customStyles={customStyles}
      />
    </div>
  );
}
