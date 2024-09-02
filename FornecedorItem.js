import React from "react";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { listaStyles } from "./styles/ListaStyle";

export default function FornecedorItem(props) {
    return (
        <View style={listaStyles.divMain}>
            <View style={listaStyles.divHead}>
                <View style={listaStyles.divId}>
                    <Image
                        source={{ uri: props.fornecedor.imagem }}
                        style={listaStyles.fornecedorImg}
                    />
                    <View>
                        <Text style={{color: '#fff'}}>{props.fornecedor.codigo}</Text>
                        <Text style={{color: '#fff'}}>{props.fornecedor.nome}</Text>
                    </View>
                </View>
                <TouchableOpacity style={listaStyles.btnDelete} onPress={props.onDelete} >
                    <Text style={{color: '#fff'}}>Excluir</Text>
                </TouchableOpacity>
            </View>
            <View style={listaStyles.divInfo}>
                <Text style={{color: '#1c1c1c', fontWeight: 800}}>{props.fornecedor.categoria}</Text>
                <Text>{props.fornecedor.contato}</Text>
                <Text>{props.fornecedor.endereco}</Text>
            </View>
        </View>
    )
}