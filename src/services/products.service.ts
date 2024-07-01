import { Product } from "@/models/products.model";
import { loadAbort } from '@/utilities';
import axios from 'axios';

const BASE_URL = 'http://localhost:8909/product';

export const createProduct = async (product: Product) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, product);
        console.log("Producto creado:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
};

export const getProduct = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/get`, { params: { id } });
        console.log("Producto obtenido:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getall`);
        console.log("Todos los productos:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener todos los productos:", error);
        throw error;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete`, { params: { id } });
        console.log("Producto eliminado:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
};