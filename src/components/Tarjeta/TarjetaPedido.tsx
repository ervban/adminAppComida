import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Collapse, IconButton, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

function TarjetaPedido({ pedido, estilo }: { pedido: any; estilo: React.CSSProperties }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2, ...estilo }}>
      {' '}
      <CardContent>
        <Typography variant="h5" component="div">
          {pedido.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Haz clic para ver detalles
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="mostrar más">
          <ExpandMoreIcon />
        </IconButton>
        <Button size="small" color="primary">
          Aceptar
        </Button>
        <IconButton size="small" color="secondary" aria-label="cancelar">
          <CloseIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalles:</Typography>
          {pedido.detalles &&
            pedido.detalles.map((detalle: any, index: number) => (
              <Typography key={index} paragraph>
                Producto: {detalle.name} - Cantidad: {detalle.stock}
              </Typography>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TarjetaPedido;
