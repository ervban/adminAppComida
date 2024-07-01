import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@emotion/react';
import store from './redux/store'; // Ajustado para usar una ruta relativa
import './App.scss';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import Home from './pages/Home/Home';
// Importaciones lazy
const Productos = lazy(() => import('./components/Productos/Productos'));
const Nuevo = lazy(() => import('./components/Nuevo/Nuevo'));
const Pedidos = lazy(() => import('./components/Pedidos/Pedidos'));

const DashboardSuperFix = lazy(() => import('./pages/Dashboard/DashboardSuperFix')); // Ajustado para usar una ruta relativa
const Login = lazy(() => import('./pages/Login/Login')); // Ajustado para usar una ruta relativa

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <SnackbarUtilsConfigurator />
          <Provider store={store}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                  <Route path="/" element={<Home />}>
                    <Route path="/nuevo" element={<Nuevo />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;