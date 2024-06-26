import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Importa el icono para el botón "Abrir"
import { Button, useTheme } from '@mui/material';
import { colorRojo, theme } from '@/styled-components/button.styled';

type Column = {
  key: string;
  title: string;
};

type RowData = {
  [key: string]: any;
};

interface TableProps {
  columns: Column[];
  data: RowData[];
  onOpen: (id: any) => void; // Nuevo prop para manejar el evento de abrir
}

function abrirPopup(id: any): void {
  // Implementación de ejemplo que muestra un alerta con el ID
  alert(`ID: ${id}`);
}

const Tabla: React.FC<TableProps> = ({ columns, data, onOpen }) => {
  const handleEdit = (id: any) => {
    console.log(`Editar: ${id}`);
  };

  const handleDelete = (id: any) => {
    console.log(`Eliminar: ${id}`);
  };
  const renderImageButton = (params: any) => {
    const theme = useTheme(); // Accede al tema

    return (
      <Button
        sx={{
          bgcolor: colorRojo, // Usa el color principal del tema
          color: theme.palette.secondary.contrastText, // Usa el texto de contraste del tema
          '&:hover': {
            bgcolor: theme.palette.secondary.dark // Usa el color oscuro para el estado hover
          }
        }}
        onClick={() => onOpen(params.row.imagenUrl)}
      >
        Ver Imagen
      </Button>
    );
  };

  const renderOpenButton = (params: any) => (
    <GridActionsCellItem
      icon={<OpenInNewIcon />}
      label="Abrir"
      onClick={() => onOpen(params.id)}
      color="inherit"
      onResize={() => {}}
      onResizeCapture={() => {}}
      showInMenu={true}
    />
  );

  // Función para el botón de editar
  const renderEditButton = (params: any) => (
    <GridActionsCellItem
      icon={<EditIcon />}
      label=""
      onClick={() => handleEdit(params.id)}
      color="primary"
      onResize={() => {}}
      onResizeCapture={() => {}}
      showInMenu={true}
    />
  );

  // Función para el botón de eliminar
  const renderDeleteButton = (params: any) => (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label=""
      onClick={() => handleDelete(params.id)}
      color="secondary"
      onResize={() => {}}
      onResizeCapture={() => {}}
      showInMenu={true}
    />
  );

  const gridColumns: GridColDef[] = [
    ...columns.map((column) => ({
      field: column.key,
      headerName: column.title,
      width: 150,
      // Aquí puedes decidir cómo renderizar la columna específica para el pop-up
      // Por ejemplo, si la columna es 'imagen', podrías usar `renderPopupButton`
      renderCell: column.key === 'imagen' ? renderImageButton : undefined
    })),
    // Paso 3: Mantener la columna de acciones para editar y eliminar
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          {renderEditButton(params)}
          {renderDeleteButton(params)}
        </>
      )
    }
  ];

  const gridRows = data.map((row, index) => ({
    id: index,
    ...row
  }));
  const adjustedColumns = gridColumns.map((column) => ({
    ...column,
    flex: 1 // Asegura que cada columna tenga flex para ajustarse al espacio disponible
  }));

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={gridRows}
        columns={adjustedColumns} // Usa las columnas ajustadas aquí
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
        initialState={{
          pagination: {
            pageSize: 5
          }
        }}
      />
    </div>
  );
};

export default Tabla;
