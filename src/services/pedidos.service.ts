import axios from "axios";
import { Pedidos, PedidosProductos } from "@/models/pedidos.model";

const BASE_URL = "https://myappdecomidaback.onrender.com/order";

// Función para obtener una orden por su ID
export const getOrderById = async (id: string): Promise<Pedidos | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/get`, { params: { id } });
    if (response.status === 200) {
      return response.data as Pedidos;
    }
    return null;
  } catch (error) {
    console.error("Error al obtener la orden:", error);
    return null;
  }
};

// Función para obtener todos los pedidos
export const getOrders = async (): Promise<Pedidos[] | null> => {
    try {
      const response = await axios.get(`${BASE_URL}/getall`);
      if (response.status === 200) {
        return response.data as Pedidos[];
      }
      return null;
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
      return null;
    }
  };

  
export const getOrderDetailsById = async (id: string): Promise<PedidosProductos[] | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/getorderdetails`, { params: { id } });
    if (response.status === 200) {
      return response.data as PedidosProductos[];
    }
    return null;
  } catch (error) {
    console.error("Error al obtener los detalles de la orden:", error);
    return null;
  }
};

export const getAllOrders = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/getall`);
      console.log("Todos las ordenes :", response.data);
      return response.data;
  } catch (error) {
      console.error("Error al obtener todos las ordenes ", error);
      throw error;
  }
};
