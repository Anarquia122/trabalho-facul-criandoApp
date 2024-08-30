import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function FornecedorItem (props) {
    return (
        <View>
            <View>
                <Image source={{
                    uri: props.fornecedor.imagem
                    }} />
                <View>
                    <Text>{props.fornecedor.codigo}</Text>
                    <Text>{props.fornecedor.nome}</Text>
                </View>
                <TouchableOpacity onPress={props.onDelete} >
                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>{props.fornecedor.categoria}</Text>
                <Text>{props.fornecedor.contato}</Text>
                <Text>{props.fornecedor.endereco}</Text>
            </View>
        </View>
    )
}