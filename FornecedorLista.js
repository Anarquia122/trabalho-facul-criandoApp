import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import GestorDados from './dados/GestorDados';
import FornecedorItem from './FornecedorItem';
import { useIsFocused } from '@react-navigation/native';

export default function FornecedorLista() {
    const gestor = new GestorDados();
    const [fornecedores, setFornecedores] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        console.log('useEffect executado');
        gestor.obterTodos().then((objs) => {
            console.log('Fornecedores retornados: ', objs);
            setFornecedores(objs);
        }).catch((error) => {
            console.error('Erro ao obter produtos: ', error);
        });
    }, [isFocused]);

    const myKeyExtractor = item => {
        return item.codigo.toString();
    }

    async function excluirFornecedor (codigo) {
        await gestor.remover(codigo);
        gestor.obterTodos((objs) => setFornecedores(objs));
    }

    return (
        <View>
            <FlatList data={fornecedores}
                keyExtractor={myKeyExtractor}
                renderItem={({ item }) => 
                    <FornecedorItem
                        onDelete={() => excluirFornecedor(item.codigo)}
                        fornecedor={item} />
                } 
            />
        </View>
    )
}