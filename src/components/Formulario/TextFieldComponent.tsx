import React from 'react';
import { TextField } from '@mui/material';

interface TextFieldComponentProps {
  field: {
    type: string;
    name: string;
    placeholder?: string;
  };
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({ field, formData, handleChange }) => (
  <TextField
    fullWidth
    variant="outlined"
    type={field.type}
    name={field.name}
    label={field.name}
    placeholder={field.placeholder || ''}
    value={formData[field.name] || ''}
    onChange={handleChange}
  />
);

export default TextFieldComponent;