import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Tabla from '../Tabla';
import {Paper, Typography} from '@mui/material';
import { getOrders, getOrderDetailsById } from '@/services/pedidos.service';
import { PedidoStatus, PedidosProductos } from "@/models/pedidos.model";

interface Pedidos {
  id: string;
  name: string;
  price: number;
  status: PedidoStatus;
  detalles: PedidosProductos[]; // Campo actualizado para incluir detalles
}

function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedidos[]>([]);

  useEffect(() => {
    const cargarPedidos = async () => {
      const pedidosObtenidos = await getOrders();
      console.log("Pedidos obtenidos:", pedidosObtenidos); // Punto 1
    
      if (pedidosObtenidos && pedidosObtenidos.length > 0) {
        const pedidosConDetalles = await Promise.all(pedidosObtenidos.map(async (pedido:any) => {
          const detalles = await getOrderDetailsById(pedido.id);
          console.log(`Detalles para el pedido ${pedido.id}:`, detalles); // Punto 2
          return { ...pedido, detalles };
        }));
        console.log("Pedidos con detalles:", pedidosConDetalles); // Punto 3
        setPedidos(pedidosConDetalles);
      }
    };
    
    cargarPedidos();
  }, []);

  const renderDetalles = (pedido: any) => {
    // Si no hay detalles, retornamos null o un elemento vacío
    if (!pedido.detalles || pedido.detalles.length === 0) {
      return null;
    }
    //array que recorra el objeto y muestre los detalles  
    const detallesJSX = pedido.detalles.map((detalle: any, index: number) => (
      <Typography key={index} paragraph>
        Producto: {detalle.name} - Cantidad: {detalle.stock}
      </Typography>
    ));
    return <div>{detallesJSX}</div>;
  };

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Nombre' },
    { key: 'price', title: 'Precio' },
    { key: 'status', title: 'Estado' },
    {
      key: 'detalles',
      title: 'Detalles',
      render: (pedido: any) => {
        // Usamos la constante renderDetalles para el renderizado de los detalles
        return <div>{renderDetalles(pedido)}</div>;
      },
    }
  ];

  // Asegúrate de actualizar el componente Tabla para manejar la visualización de los detalles
  return (
    <div style={{ margin: '10px' }}>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={12}>
          <Paper elevation={3} sx={{ p: 2, minHeight: '80vh', height: '100%' }}>
            <Tabla columns={columns} data={pedidos} onOpen={() => { }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Pedidos;