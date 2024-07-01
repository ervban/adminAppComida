export interface Pedidos {    
    id: number;
    name: string;
    price: number;
    status: null;
}

export interface PedidosProductos {
    name : string;
    id: number;
    price: number;
    stock: number;
    uri: string;
}
