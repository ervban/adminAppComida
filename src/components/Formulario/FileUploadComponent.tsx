import React from 'react';
import { Button } from '@mui/material';
import { colorRojo, theme } from '@/styled-components/button.styled';

// Modificar la definición de las props para que acepte un único objeto
const FileUploadComponent = ({ field, setFileName }: { field: any; setFileName: (fileName: string) => void }) => (
  <>
    <input
      accept="image/*"
      style={{ display: 'none' }}
      id="raised-button-file"
      multiple
      type="file"
      onChange={(e) => {
        if (e.target.files && e.target.files.length > 0) {
          setFileName(e.target.files[0].name); // Actualizar el estado con el nombre del archivo
        }
      }}
      name={field.name}
    />
    <label htmlFor="raised-button-file">
      <Button
        sx={{
          bgcolor: colorRojo,
          color: theme.palette.secondary.contrastText,
          '&:hover': {
            bgcolor: theme.palette.secondary.dark,
          },
        }}
        variant="contained" component="span">
        Cargar Imagen
      </Button>
    </label>
  </>
);

export default FileUploadComponent;