import React from 'react'
import TarjetaPedido from '../Tarjeta/TarjetaPedido'

export default function Nuevo() {
  const pedidosFalsos = [
    {
      id: 1,
      items: [
        { nombre: 'Hamburguesa', cantidad: 2 },
        { nombre: 'Gaseosa', cantidad: 1 }
      ]
    },
    {
      id: 2,
      items: [
        { nombre: 'Pizza', cantidad: 1 },
        { nombre: 'Agua', cantidad: 2 }
      ]
    }
  ];
  return (
    <div>
      {pedidosFalsos.map((pedido) => (
        <TarjetaPedido key={pedido.id} pedido={pedido} />
      ))}
    </div>
  );
}
