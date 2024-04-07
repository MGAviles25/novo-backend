import EventoDAO from "../Persistencia/EventoDAO.js";
export default class Evento {
    #codigo;
    #nome;
    #dataNasc;
    #telefone;
    #email; 
    #cidade;

    constructor(codigo=0, nome="", dataNasc="", telefone="",email="", cidade="") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#dataNasc = dataNasc;
        this.#telefone = telefone;
        this.#email = email;
        this.#cidade = cidade;
        
    }
    get codigo(){
        return this.#codigo;
    }    
    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }
    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        this.#nome = novoNome;
    }
    get dataNasc(){
        return this.#dataNasc;
    }
    get telefone(){
        return this.#telefone;
    }
    set telefone(novotelefone){
        this.#telefone = novotelefone;
    }
    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = novoEmail;
    }
    get cidade(){
        return this.#cidade;
    }
    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }
    async gravar(){
        const dao = new EventoDAO();
        await dao.gravar(this); 
    }
    async atualizar(){
        const dao = new EventoDAO();
        await dao.atualizar(this);
    }
    async excluir(){
        const dao = new EventoDAO();
        await dao.excluir(this);
    }
    async consultar(termoDePesquisa){
        const dao = new EventoDAO();
        return await dao.consultar(termoDePesquisa);
    }
    toString(){
        return `Pessoa código: ${this.#codigo} -  nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "codigo": this.#codigo,
            "nome": this.#nome,
            "dataNasc": this.#dataNasc,
            "telefone": this.#telefone,
            "email": this.#email,
            "cidade": this.#cidade
        }
    }
}