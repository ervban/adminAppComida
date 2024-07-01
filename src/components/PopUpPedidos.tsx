import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { List, ListItem, ListItemText } from '@mui/material';
import { colorRojo, theme } from '@/styled-components/button.styled';

// Asumiendo que pedidos es un array de objetos de pedidos disponible globalmente o importado
const pedidos = [
  { id: 1, productos: [{ nombre: 'Producto A', cantidad: 2 }, { nombre: 'Producto B', cantidad: 3 }] },
  { id: 2, productos: [{ nombre: 'Producto C', cantidad: 1 }, { nombre: 'Producto D', cantidad: 4 }] },
];

interface PopUpPedidosProps {
  show: boolean;
  pedido: number;
  onClose: () => void;
}

const PopUpPedidos: React.FC<PopUpPedidosProps> = ({ show, pedido, onClose }) => {
  const [pedidoActual, setPedidoActual] = useState<{ id: number; productos: { nombre: string; cantidad: number; }[]; } | undefined>(undefined);

  useEffect(() => {
    // Aquí buscarías el pedido por ID en tus datos, usando la prop pedido
    const pedidoEncontrado = pedidos.find(p => p.id === pedido);
    setPedidoActual(pedidoEncontrado);
  }, [pedido]);

  return (
    <Dialog open={show} onClose={onClose}>
      <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              bgcolor: colorRojo, 
              color: theme.palette.secondary.contrastText, 
              '&:hover': {
                bgcolor: theme.palette.secondary.dark, 
              },
          }}
      >
          <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <List>
          {pedidoActual?.productos.map((producto, index) => (
            <ListItem key={index}>
              <ListItemText primary={producto.nombre} secondary={`Cantidad: ${producto.cantidad}`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default PopUpPedidos;