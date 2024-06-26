// InputElement.styles.ts
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const InputElement = styled('input')(({ theme }) => ({
  padding: '10px 12px',
  borderRadius: '4px',
  border: `1px solid ${grey[300]}`,
  outline: 'none',
  '&:focus': {
    borderColor: blue[500],
    boxShadow: `0 0 0 2px ${blue[100]}`,
  },
  '&:hover': {
    borderColor: blue[400],
  },
  '&:disabled': {
    backgroundColor: grey[50],
    color: grey[400],
  },
}));