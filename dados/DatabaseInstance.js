import Realm from 'realm';

const imgDefault = "https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/fornecedor-default.png?alt=media&token=7f96512e-3346-4ffb-a9c0-399644e7f24c";

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