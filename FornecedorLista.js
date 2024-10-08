import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView, TextInput, Image, Modal, Button, RefreshControl } from 'react-native';
import GestorDados from './dados/GestorDados';
import FornecedorItem from './FornecedorItem';
import { useIsFocused } from '@react-navigation/native';
import { listaStyles } from './styles/ListaStyle';
import { Picker } from '@react-native-picker/picker';
import { VirtualizedList } from 'react-native';

export default function FornecedorLista() {
    const gestor = new GestorDados();
    const filterIcon = 'https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/filtro-icon.png?alt=media&token=2c490f2f-0581-4c33-8689-a643ad33c340';
    const [fornecedores, setFornecedores] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [refreshing, setRefreshin] = useState(false);

    const isFocused = useIsFocused();

    const loadFornecedores = async () => {
        gestor.obterTodos().then((objs) => {
            setFornecedores(objs);
        }).catch((error) => {
            console.error('Erro ao obter produtos: ', error);
        });
    }

    useEffect(() => {
        loadFornecedores();
    }, [isFocused]);

    const onRefresh = async () => {
        setRefreshin(true);
        await loadFornecedores();
        setRefreshin(false);
    }

    const myKeyExtractor = item => {
        return item.codigo.toString();
    }

    async function excluirFornecedor(codigo) {
        await gestor.remover(codigo);
        const objs = await gestor.obterTodos();
        setFornecedores(objs);
    }

    const filteredFornecedores = fornecedores.filter(fornecedor => {
        const search = fornecedor.nome.toLowerCase().includes(searchQuery.toLowerCase());

        const filtro = categoryFilter === '' || categoryFilter === 'nenhum' || fornecedor.categoria === categoryFilter;
        return search && filtro;
    });

    return (
        <View style={listaStyles.divLista}>
            <ScrollView>

                <TextInput placeholder='Search'
                    placeholderTextColor='#888'
                    clearButtonMode='always'
                    style={listaStyles.searchBar}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <FlatList data={filteredFornecedores}
                    keyExtractor={myKeyExtractor}
                    renderItem={({ item }) =>
                        <FornecedorItem
                            onDelete={() => excluirFornecedor(item.codigo)}
                            fornecedor={item} />
                    }

                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </ScrollView>

            <TouchableOpacity
                onPress={() => setIsModalVisible(true)}
                style={listaStyles.btnFilter}
            >
                <Image source={{ uri: filterIcon }} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType='slide'
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={listaStyles.modalContainer}>
                    <View style={listaStyles.modalContent}>
                        <Picker
                            value={categoryFilter}
                            style={{ color: '#fff', backgroundColor: '#4f4f4f' }}
                            selectedValue={categoryFilter}
                            onValueChange={(option) => setCategoryFilter(option)}>
                            <Picker.Item label='Nenhum' value='nenhum' />
                            <Picker.Item label='Jogos' value='jogos' />
                            <Picker.Item label='Consoles' value='consoles' />
                            <Picker.Item label='Computadores' value='computadores' />
                        </Picker>
                        <Button title='Fechar' onPress={() => setIsModalVisible(false)} />
                    </View>
                </View>
            </Modal>

        </View>
    )
}