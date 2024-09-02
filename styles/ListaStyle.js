import { StyleSheet } from "react-native";

export const listaStyles = StyleSheet.create({
    divMain: {
        width: '97%',
        margin: 'auto',
        marginBottom: 10,
        borderWidth: 1, 
        borderBlockColor: '#1c1c1c',
        borderRadius: 10,
    },

    divHead: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#1c1c1c',
        borderTopRightRadius: 9,
        borderTopLeftRadius: 9
    },

    divId: {
        flex: 1,
        flexDirection: 'row',
        gap: 15
    },

    fornecedorImg: {
        width: 50,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#d3d3d3',
        overflow: 'hidden',
        borderRadius: 100,
        padding: 10,
        backgroundColor: '#d3d3d3'
    },

    btnDelete: {
        backgroundColor: '#b22222',
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    divInfo: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },

    //lista

    divLista: {
        marginTop: 10
    },

    searchBar: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '97%',
        height: 40,
        margin: 'auto',
        marginBottom: 10
    },

    btnFilter: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 100
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingBottom: 20
    },

    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    }
})