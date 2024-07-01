import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function TarjetaPedido({ pedido }: { pedido: any }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {pedido.nombre} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Haz clic para ver detalles
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="mostrar más"
        >
          <ExpandMoreIcon />
        </IconButton>
        {/* Asegúrate de que los iconos CheckIcon y CloseIcon estén posicionados correctamente aquí si necesitas usarlos */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalles:</Typography>
          {pedido.items && pedido.items.map((item: any, index: any) => (
            <Typography key={index} paragraph>
              {item.nombre} - Cantidad: {item.cantidad}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TarjetaPedido;