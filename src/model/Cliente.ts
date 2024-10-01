/**
 * Classe que representa um cliente.
 */
export class Cliente {

    /* Atributos */
    /* Identificador do cliente */
    private idcliente: number = 0;
    /* marca do cliente */
    private nome: string;
    /* modelo do cliente */
    private cpf: string;
    /* telefone de fabrição do cliente */
    private telefone: string;
   

    /**
     * Construtor da classe cliente
     * 
     * @param nome Marca do cliente
     * @param cpf Modelo do cliente
     * @param telefone telefone de fabricação do cliente
     */
    constructor(
        nome: string,
        cpf: string,
        telefonene: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefonene;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */
    public getIdcliente(): number {
        return this.idcliente;
    }

    /**
     * Atribui um valor ao identificador do cliente
     * @param idcliente novo identificado do cliente
     */
    public setIdcliente(idcliente: number): void {
        this.idcliente = idcliente;
    }

    /**
     * Retorna a marca do cliente.
     *
     * @returns {string} A marca do cliente.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a marca do cliente.
     * 
     * @param nome - A marca do cliente a ser definida.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o modelo do cliente.
     *
     * @returns {string} O modelo do cliente.
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o modelo do cliente.
     *
     * @param cpf - O nome do modelo do cliente.
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * Retorna o telefone do cliente.
     *
     * @returns O telefone do cliente.
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente.
     * 
     * @param telefone - O telefone a ser definido para o cliente.
     */
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
}