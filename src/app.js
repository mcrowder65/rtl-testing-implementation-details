import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import CellEditor from "./custom-cell";

function App() {
  const columnDefs = [
    {
      headerName: "Make",
      field: "make",
      cellEditorFramework: CellEditor,
      editable: true
    },
    {
      headerName: "Model",
      field: "model",
      cellEditorFramework: CellEditor,
      editable: true
    },
    {
      headerName: "Price",
      field: "price",
      cellEditorFramework: CellEditor,
      editable: true
    }
  ];
  const rowData = [
    {
      make: "Toyota",
      model: "Celica",
      price: 35000
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    }
  ];

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "130px",
        width: "600px"
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
}

export default App;
