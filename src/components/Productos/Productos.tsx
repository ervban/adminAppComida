import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Tabla from '../Tabla';
import Formulario from '../Formulario/Formulario';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import {createProduct, getAllProducts } from '../../services/products.service';

// Actualización de la definición de tipos para los productos para incluir un id
interface Producto {
  id: string; 
  producto: string;
  cantidad: number;
  precio: number;
  uri: string;
  fechaCreacion: string; 
}

function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  useEffect(() => {
    const cargarProductos = async () => {
      const productosCargados = await getAllProducts();
      setProductos(productosCargados);
    };
    cargarProductos();
  }, []);

  const handleShowImage = (uri: string) => {
    setCurrentImageUrl(uri);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  
  //Para tabla
  const columns = [
    { key: 'id', title: 'ID' }, 
    { key: 'name', title: 'Nombre' },
    { key: 'stock', title: 'Cantidad' },
    { key: 'price', title: 'Precio'},
    { key: 'uri', title: 'Imagen', render: (item: Producto) => <Button onClick={() => handleShowImage(item.uri)}>Ver Imagen</Button> },
  ];

  //Para formulario
  const fields = [
    { name: 'name', type: 'text', placeholder: 'Producto' },
    { name: 'stock', type: 'number', placeholder: 'Cantidad' },
    { name: 'price', type: 'number', placeholder: 'Precio' },
    { name: 'uriImg', type: 'text', placeholder: 'URL de la imagen' },
  ];

  const handleSubmit = async (formData: any) => {
    await createProduct({
      id: formData.id,
      name: formData.name,
      stock: formData.stock,
      price: formData.price,
      uriImg: formData.uriImg,
    
    });
    // Recargar productos después de la creación
    const productosActualizados = await getAllProducts();
    setProductos(productosActualizados);
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