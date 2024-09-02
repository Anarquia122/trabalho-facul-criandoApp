import FornecedorForm from "../FornecedorForm";
import { View } from "react-native";

export function CadastroFornecedores({ navigation }) {
    return (
        <View>
            <FornecedorForm navigation={navigation} />
        </View>
    )
}