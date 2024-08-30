import db from "./DatabaseInstance";
import { Fornecedor } from "./Fornecedores";

class GestorDados {
    public async remover (chave: string) {
        db.write(() => 
            db.delete(db.objects('Fornecedor')
                .filtered('codigo = $0', parseInt(chave)))
        );
    }
    public async adicionar (fornecedor: Fornecedor) {
        db.write(() => db.create('Fornecedor', fornecedor));
    }
    public async obterTodos(): Promise<Array<Fornecedor>> {
        console.log('obterTodos chamado');
        let objetos = [];
        try {
            for (let obj of db.objects<Fornecedor>('Fornecedor')) {
                console.log('Fornecedor encontrado: ', obj);
                objetos.push(JSON.parse(JSON.stringify(obj)));
            }
            console.log('Objetos retornados: ', objetos);
        } catch (error) {
            console.error('Erro ao obter fornecedores do banco: ', error);
        }
        return objetos;
    }
}

export default GestorDados;