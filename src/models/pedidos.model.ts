export interface Pedidos {    
    id: string;
    name: string;
    price: number;
    status: PedidoStatus;
}

export interface PedidosProductos {
    stock: any;
    name: any;
    amount: number;
    id: string;
    idProduct: string;
    orderId: string;
    quantity: number;
}

export enum PedidoStatus {
    INICIADO = "iniciado",
    EN_PROCESO = "enproceso",
    LISTO = "completado",
}