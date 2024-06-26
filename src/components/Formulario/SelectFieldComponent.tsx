import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectFieldComponentProps {
  field: {
    name: string;
    options?: { value: string; label: string }[];
  };
  formData: any;
  handleChange: (event: SelectChangeEvent<any>) => void;
}

const SelectFieldComponent: React.FC<SelectFieldComponentProps> = ({ field, formData, handleChange }) => (
  <FormControl fullWidth>
    <InputLabel>{field.name}</InputLabel>
    <Select value={formData[field.name] || ''} onChange={handleChange} name={field.name} label={field.name}>
      {field.options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectFieldComponent;