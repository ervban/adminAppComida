import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import Home from './pages/Home/Home';
import Productos from './components/Productos/Productos';
import Nuevo from './components/Nuevo/Nuevo';
import PedidosDiarios from './components/PedidosDiarios/PedidosDiarios';
import Pedidos from './components/Pedido/Pedidos';

// Routes
const DashboardSuperFix = lazy(() => import('@/pages/Dashboard/DashboardSuperFix'));
const Login = lazy(() => import('@/pages/Login/Login'));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <SnackbarUtilsConfigurator />
          <Suspense fallback={<div>Loading ...</div>}>
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}>
                    <Route path="/nuevo" element={<Nuevo />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/historial" element={<Pedidos />} />
                    <Route path="/pedidos" element={<PedidosDiarios />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </Provider>
          </Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
