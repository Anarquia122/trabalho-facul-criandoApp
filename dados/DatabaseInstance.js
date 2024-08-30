import Realm from 'realm';

const imgDefault = "https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/fornecedor-default.png?alt=media&token=36e39de8-96aa-4d12-b57b-17cbdd405189";

var db = new Realm ({
    path: 'FornecedoresDB.realm',
    schema: [
        {
            name: 'Fornecedor',
            primaryKey: 'codigo',
            properties: {
                codigo: 'int',
                nome: 'string',
                endereco: 'string',
                contato: 'string',
                categoria: 'string',
                imagem: {type: 'string', default: imgDefault}
            }
        }
    ]
})

export default db;