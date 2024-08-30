
export class Fornecedor {
    codigo: number;
    nome: string;
    endereco: string;
    contato: string;
    categoria: string;
    imagem: string;
    constructor (codigo: number, nome: string, endereco: string, contato: string, categoria: string, imagem: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
        this.categoria = categoria;
        this.imagem = imagem;
    }
}