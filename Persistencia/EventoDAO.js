import conectar from "./Conexao.js";
import Evento from "../Modelos/Evento.js";
export default class EventoDAO{
    async gravar(evento){
        if (evento instanceof Partida){
            const conexao = await conectar();
            const sql = `INSERT INTO partida (nome, dataNasc, telefone, email,
                         cidade) 
                         values (?, ?, ?, ?, ?)`;
            const parametros = [
                evento.cpf,
                evento.nome,
                evento.dataNasc,
                evento.telefone,
                evento.email,
                evento.cidade,
            ];
            const [resultados, campos] = await conexao.execute(sql,parametros);
            evento.codigo = resultados.insertId; 
        }
    }
    async atualizar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `UPDATE pessoa SET 
                         nome = ?, dataNasc = ?, telefone = ?,
                         email = ?, cidade = ? WHERE id = ?`;
            const parametros = [
                evento.nome,
                evento.dataNasc,
                evento.telefone,
                evento.email,
                evento.cidade, 
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM pessoa WHERE id = ?`;
            const parametros = [
                evento.codigo
            ]
            await conexao.execute(sql,parametros);
        }
    }
    
    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(parseInt(termoDePesquisa))){ 
            sql = `SELECT * FROM pessoa WHERE nome LIKE ?`;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM pessoa WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);
        let listaEvento = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.id,
                registro.nome,
                registro.dataNasc,
                registro.telefone,
                registro.email,
                registro.Horario,
            );
            listaEvento.push(evento);
        }
        return listaEvento;
    }
}