// CustomInput.tsx
import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { InputElement } from '@/styled-components/InputElement.styles';
// Ajusta la ruta de importación según sea necesario

const Input = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default Input;