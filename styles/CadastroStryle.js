import { StyleSheet } from "react-native";

export const cadastroStyles = StyleSheet.create({
    divInput: {
        gap: 10,
        marginTop: 10,
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: '#1c1c1c',
        borderRadius: 10,
        color: '#000'
    },

    inputOption: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#1c1c1c',
        borderRadius: 10,
        backgroundColor: '#363636',
        color: '#fff'
    },

    btnSave: {
        backgroundColor: '#1e90ff',
        margin: 'auto',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1.5,
        borderColor: '#4169e1',
        borderRadius: 5
    },

    //Uploading

    divImg: {
        position: 'relative',
        marginBottom: 10,
        marginTop: 10
    },

    img: {
        width: 150,
        height: 150,
        padding: 20,
        margin: 'auto',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#1c1c1c',
        borderRadius: 100
    },

    btnImg: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#1c1c1c',
        opacity: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 100,
        bottom: 0,
        right: '30%'
    },

    btnText: {
        fontSize: 20,
        margin: 'auto'
    }
})