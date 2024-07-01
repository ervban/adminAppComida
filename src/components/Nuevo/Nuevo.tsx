import React, { useState, useEffect } from 'react';
import TarjetaPedido from '../Tarjeta/TarjetaPedido';
import { getOrders } from '../../services/pedidos.service';

export default function Nuevo() {
  const [pedidos, setPedidos] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const cargarPedidos = async () => {
      const pedidosObtenidos = await getOrders(); // Usando getOrders para obtener los pedidos
      if (pedidosObtenidos) {
        setPedidos(pedidosObtenidos);
      }
    };

    cargarPedidos();
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  return (
    <div>
      {pedidos.map((pedido) => (
        <TarjetaPedido key={pedido.id} pedido={pedido} />
      ))}
    </div>
  );
}