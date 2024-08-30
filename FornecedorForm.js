import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Fornecedor } from './dados/Fornecedores';
import { Picker } from '@react-native-picker/picker';
import GestorDados from './dados/GestorDados';
import Uploading from './Uploading';

//codigo, nome, endereço, contato, categoria, imagem
//importar o UPLOAD de imagens para esse arquivo
export default function FornecedorForm ({ navigation }) {
    const gestor = new GestorDados();
    const imgDefault = "https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/fornecedor-default.png?alt=media&token=36e39de8-96aa-4d12-b57b-17cbdd405189";
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categoria, setCategoria] = useState('jogos');
    const [imagem, setImegem] = useState(null);

    const salvar = () => {
        const ultimoCod = realm.objects('Fornecedor').max('codigo');
        const novoCod = (ultimoCod != null ? ultimoCod: 0) + 1;

        forneAux = new Fornecedor(novoCod, nome, endereco, contato, categoria, imagem || imgDefault);
        gestor.adicionar(forneAux).then(navigation.navigate('ListaFornecedor'));
    }

    const handleUploadComplete = (downloadUrl) => {
        setImagem(downloadUrl);
        console.log('URL da imagem armazenada: ', downloadUrl);
    }

    return (
        <View>
            <Uploading onUploadComplete={handleUploadComplete} />

            <TextInput
                placeholder='Nome'
                value={nome} onChangeText={setNome} />
            <TextInput 
                placeholder='Endereço'
                value={endereco} onChangeText={setEndereco} />
            <TextInput
                placeholder='Contato (telefone/email)'
                value={contato} onChangeText={setContato} />

            <Picker selectedValue={categoria} onValueChange={(itemValue) => setCategoria(itemValue)}>
                <Picker.Item label='Jogos' value='jogos' />
                <Picker.Item label='Consoles' value='consoles' />
                <Picker.Item label='Computadores' value='Computadores' />
            </Picker>

            <TouchableOpacity onPress={salvar}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}