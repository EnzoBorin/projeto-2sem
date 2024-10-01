export class PedidoVenda{
    private idPedidoVenda: number = 0;
    private idCarro: number;
    private idCliente: number;
    private dataPedido: Date;
    private valorPedido: number;

    constructor(
        idCarro: number, 
        idCliente: number,
        dataPedido: Date,
        valorPedido: number
    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido,
        this.valorPedido = valorPedido
    }
    public getIdPedidoVenda():number{
        return this.idPedidoVenda;
    }
    public setIdPedidoVenda(idPedidoVenda:number): void{
        this.idPedidoVenda = idPedidoVenda;
    }
    public getIdCarro():number{
        return this.idCarro;
    }
    public setIdCarro(idCarro:number): void{
        this.idCarro = idCarro;
    }
    public getIdCliente():number{
        return this.idCarro;
    }
    public setIdCliente(idCliente:number): void{
        this.idCliente = idCliente;
    }
    public getDataPedido():Date{
        return this.dataPedido;
    }
    public setDataPedido(dataPedido:Date): void{
        this.dataPedido = dataPedido;
    }
    public getValorPedido():number{
        return this.valorPedido;
    }
    public setValorPedido(valorPedido:number): void{
        this.valorPedido = valorPedido;
    }
}