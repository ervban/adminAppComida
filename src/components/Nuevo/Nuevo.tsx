import React, { useState, useEffect } from 'react';
import TarjetaPedido from '../Tarjeta/TarjetaPedido';
import { getOrders, getOrderDetailsById } from '../../services/pedidos.service';

export default function Nuevo() {
  const [pedidos, setPedidos] = useState<any[]>([]);

  useEffect(() => {
    const cargarPedidos = async () => {
      const pedidosObtenidos = await getOrders();
      if (pedidosObtenidos && pedidosObtenidos.length > 0) {
        const detallesPromesas = pedidosObtenidos.map(async (pedido) => {
          const detalles = await getOrderDetailsById(pedido.id.toString());
          return { ...pedido, detalles };
        });
        const pedidosConDetalles = await Promise.all(detallesPromesas);
        setPedidos(pedidosConDetalles);
      }
    };

    cargarPedidos();
  }, []);

  const estilosFlex: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Cambiado a row
    flexWrap: 'wrap', // Permitir múltiples filas
    gap: '20px',
    padding: '20px'
  };

  const estiloTarjeta: React.CSSProperties = {
    flex: '1 1 40%', // Ajusta esto según el tamaño deseado de las tarjetas
    // Otras propiedades de estilo si son necesarias
  };

  return (
    <div style={estilosFlex}>
      {pedidos.map((pedido) => (
        <TarjetaPedido key={pedido.id} pedido={pedido} estilo={estiloTarjeta} />      ))}
    </div>
  );
}