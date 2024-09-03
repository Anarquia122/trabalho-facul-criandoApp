import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Fornecedor } from './dados/Fornecedores';
import { Picker } from '@react-native-picker/picker';
import GestorDados from './dados/GestorDados';
import Uploading from './Uploading';
import db from './dados/DatabaseInstance';
import { useIsFocused } from '@react-navigation/native';
import { cadastroStyles } from './styles/CadastroStryle';

//codigo, nome, endereço, contato, categoria, imagem
//importar o UPLOAD de imagens para esse arquivo
export default function FornecedorForm({ navigation }) {
    const gestor = new GestorDados();
    const realm = db;
    const isFocused = useIsFocused();
    const imgDefault = "https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/fornecedor-default.png?alt=media&token=7f96512e-3346-4ffb-a9c0-399644e7f24c";
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categoria, setCategoria] = useState('jogos');
    const [imagem, setImagem] = useState(null);

    useEffect(() => {
        if (isFocused) {
            setNome('');
            setEndereco('');
            setContato('');
            setCategoria('jogos');
            setImagem(null);
        }
    }, [isFocused])


    const salvar = () => {
        const ultimoCod = realm.objects('Fornecedor').max('codigo');
        const novoCod = (ultimoCod != null ? ultimoCod : 0) + 1;

        const forneAux = { codigo: novoCod, nome, endereco, contato, categoria, imagem: imagem || imgDefault };
        realm.write(() => {
            realm.create('Fornecedor', forneAux);
        });

        navigation.navigate('Fornecedores');
    }

    const handleUploadComplete = (downloadUrl) => {
        setImagem(downloadUrl);
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <Uploading onUploadComplete={handleUploadComplete} />

                <View style={cadastroStyles.divInput}>
                    <TextInput style={cadastroStyles.input}
                        placeholder='Nome'
                        placeholderTextColor='#333'
                        value={nome} onChangeText={setNome} />
                    <TextInput style={cadastroStyles.input}
                        placeholder='Endereço'
                        placeholderTextColor='#333'
                        value={endereco} onChangeText={setEndereco} />
                    <TextInput style={cadastroStyles.input}
                        placeholder='Contato (telefone/email)'
                        placeholderTextColor='#333'
                        value={contato} onChangeText={setContato} />

                    <Text style={{color: '#000'}}>Categoria:</Text>
                    <Picker selectedValue={categoria} onValueChange={(itemValue) => setCategoria(itemValue)} style={cadastroStyles.inputOption}>
                        <Picker.Item label='Jogos' value='jogos' />
                        <Picker.Item label='Consoles' value='consoles' />
                        <Picker.Item label='Computadores' value='computadores' />
                    </Picker>
                </View>

                <TouchableOpacity style={cadastroStyles.btnSave} onPress={salvar}>
                    <Text style={{color: '#fff'}}>Salvar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}