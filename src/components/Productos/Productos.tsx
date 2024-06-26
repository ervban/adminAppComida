import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Tabla from '../Tabla';
import Formulario from '../Formulario/Formulario';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Definición de tipos para los productos
interface Producto {
  producto: string;
  cantidad: number;
  precio: number;
  imagenUrl: string;
}

function Productos() {
  const [productos, setProductos] = useState<Producto[]>([
    { producto: 'Manzanas', cantidad: 100, precio: 0.5, imagenUrl: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
    { producto: 'Naranjas', cantidad: 150, precio: 0.75, imagenUrl: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const handleShowImage = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const columns = [
    { key: 'producto', title: 'Nombre' },
    { key: 'cantidad', title: 'Cantidad' },
    { key: 'precio', title: 'Precio'},
    { key: 'imagen', title: 'Imagen', render: (item: Producto) => <Button onClick={() => handleShowImage(item.imagenUrl)}>Ver Imagen</Button> },
  ];

  const fields = [
    { name: 'producto', type: 'text', placeholder: 'Producto' },
    { name: 'cantidad', type: 'number', placeholder: 'Cantidad' },
    { name: 'precio', type: 'number', placeholder: 'Precio' },
    { name: 'imagen', type: 'file', placeholder: 'Cargar imagen' },
  ];

  const handleSubmit = (formData: any) => {
    const nuevoProducto = {
      producto: formData.producto,
      cantidad: formData.cantidad,
      precio: formData.precio,
      disponibilidad: 'Disponible',
      imagenUrl: formData.imagen,
    };
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div style={{ margin: '10px' }}>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2, minHeight: '80vh' }}>
            <h1>Productos</h1>
            <Formulario fields={fields} onSubmit={handleSubmit} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 2, minHeight: '80vh', height: '100%' }}>
            <Tabla columns={columns} data={productos} onOpen={handleShowImage} />
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Imagen del Producto</DialogTitle>
        <DialogContent>
          <img src={currentImageUrl} alt="Imagen del Producto" style={{ width: '100%' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Productos;